<?php

namespace App\Observers;

class Slide
{
    //
    public function created()
    {
        $json = is_file(storage_path('app/public') . '/data.json') ? json_decode(file_get_contents(storage_path('app/public') . '/data.json'), true) : [];
        $json['slides'] = \App\Http\Resources\Slide::collection(\App\Models\Slide::orderBy('sort', 'ASC')->get());
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
        $json['slides'] = \App\Http\Resources\Slide::collection(\App\Models\Slide::orderBy('sort', 'ASC')->get());
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