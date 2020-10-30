<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use TCG\Voyager\Facades\Voyager;

class Gift extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $toys = [];
        if (json_decode($this->toys, true))
            foreach (json_decode($this->toys, true) as $toy) {
                $toys[] = Voyager::image($toy);
            }
        return [
            'id' => $this->id,
            'title' => $this->title,
            'img' => Voyager::image($this->img),
            'description' => $this->description,
            'toys' => $toys,
        ];
    }
}
