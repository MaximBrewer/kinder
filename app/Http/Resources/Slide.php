<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use TCG\Voyager\Facades\Voyager;

class Slide extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'followers' => $this->followers,
            'photo' => Voyager::image($this->thumbnail('preview', 'photo')),
            'avatar' => Voyager::image($this->thumbnail('preview', 'avatar')),
            'link' => $this->link,
        ];
    }
}
