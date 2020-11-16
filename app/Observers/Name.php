<?php

namespace App\Observers;

class Name
{
    //
    public function created()
    {
        $json = is_file(storage_path('app/public') . '/data.json') ? json_decode(file_get_contents(storage_path('app/public') . '/data.json'), true) : [];
        $json['boys'] = \App\Http\Resources\Name::collection(\App\Models\Name::whereIn('gender', ['boy', 'both'])->orderBy('sort', 'ASC')->get());
        $json['girls'] = \App\Http\Resources\Name::collection(\App\Models\Name::whereIn('gender', ['girl', 'both'])->orderBy('sort', 'ASC')->get());
        $json = str_replace(['\r', '\n'], '', json_encode($json));
        file_put_contents(
            storage_path(('app/public') . '/data.json'),
            $json
        );
        file_put_contents(
            storage_path(('app/public') . '/data.js'),
            'window.App ={}; window.App.data = JSON.parse(\'' . $json . '\')'
        );
    }

    public function updated()
    {
        $json = is_file(storage_path('app/public') . '/data.json') ? json_decode(file_get_contents(storage_path('app/public') . '/data.json'), true) : [];
        $json['boys'] = \App\Http\Resources\Name::collection(\App\Models\Name::whereIn('gender', ['boy', 'both'])->orderBy('sort', 'ASC')->get());
        $json['girls'] = \App\Http\Resources\Name::collection(\App\Models\Name::whereIn('gender', ['girl', 'both'])->orderBy('sort', 'ASC')->get());
        $json = str_replace(['\r', '\n'], '', json_encode($json));
        file_put_contents(
            storage_path(('app/public') . '/data.json'),
            $json
        );
        file_put_contents(
            storage_path(('app/public') . '/data.js'),
            'window.App ={}; window.App.data = JSON.parse(\'' . $json . '\')'
        );
    }
}
