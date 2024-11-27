<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\StoreTemplateRequest;
use App\Models\Template;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Spatie\QueryBuilder\QueryBuilder;
use Symfony\Component\Yaml\Yaml;

class TemplateController extends ApiBaseController
{
    public function __construct(Template $model, $modelname = 'template')
    {
        $this->model = $model;
        $this->modelname = $modelname;
    }

    public function index(Request $request, $searchCols = null, $relationship = null, $withCount = null)
    {

        $result = QueryBuilder::for(Template::class)
            ->with(['device'])
            ->allowedFilters(['templateName'])
            ->defaultSort('-id')
            ->allowedSorts('id', 'tagname')
            ->paginate((int) $request->perPage);


        $result->getCollection()->transform(function ($item) {
            $item->fileName = basename($item['fileName']);

            return $item;
        });

        return response()->json($result);
    }

    public function store(StoreTemplateRequest $request)
    {
        $request['fileName'] = '/app/rconfig/templates/' . Str::slug($request['templateName']) . '.yml';

        File::put(storage_path() . $request['fileName'], $request->code);
        if (! File::exists(storage_path() . $request['fileName'])) {
            throw new \Exception('Could create file or write to templates location: ' . $request['fileName'] . PHP_EOL);
        }

        return parent::storeResource($request->toDTO()->toArray(), 0);
    }

    public function show($id, $relationship = null, $withCount = null)
    {
        $result = parent::show($id);
        $result['code'] = File::get(storage_path() . $result['fileName']);
        $result['fileName'] = basename($result['fileName']);

        return response()->json($result);
    }

    public function update($id, StoreTemplateRequest $request)
    {

        if (File::exists(storage_path() . $request['fileName'])) {
            File::delete(storage_path() . $request['fileName']);
        }

        $request['fileName'] = '/app/rconfig/templates/' . Str::slug($request['templateName']) . '.yml';

        File::put(storage_path() . $request['fileName'], $request->code);

        if (! File::exists(storage_path() . $request['fileName'])) {
            throw new \Exception('Could create file or write to templates location: ' . storage_path()  . $request['fileName'] . PHP_EOL);
        }

        return parent::updateResource($id, $request->toDTO()->toArray(), 0);
    }

    public function destroy($id, $return = 0)
    {

        try {
            $model = $this->model::find($id);

            if (File::exists(storage_path() . $model->fileName)) {
                File::delete(storage_path() . $model->fileName);
            }

            $model = tap($model)->delete();

            return $this->successResponse(Str::ucfirst($this->modelname) . ' deleted successfully!');
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'An unexpected error occurred.',
            ], 500); // For other exceptions, use 500
        }
    }

    public function deleteMany(Request $request)
    {
        try {
            $ids = $request->ids;
            \DB::beginTransaction();
            $templates = Template::whereIn('id', $ids)->get();

            // need to run each category through the boot method
            foreach ($templates as $template) {
                $template->delete();
            }
            \DB::commit();
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], 422);
        }

        return response()->json(['message' => 'Templates deleted successfully'], 200);
    }

    public function getDefaultTemplate()
    {
        if (File::exists(storage_path() . '/app/rconfig/templates/default.yml')) {
            return File::get(storage_path() . '/app/rconfig/templates/default.yml');
        }

        return $this->failureResponse('Could not read default.yml file from the path: ' . storage_path() . '/app/rconfig/templates/default.yml');
    }
}
