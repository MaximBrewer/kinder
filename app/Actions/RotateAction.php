<?php

namespace App\Actions;

use TCG\Voyager\Actions\AbstractAction;

class RotateAction extends AbstractAction
{
    public function getTitle()
    {
        // Название действия, которое отображается в кнопке 
        // в зависимости от текущего состояния
        return '';
    }
    public function getIcon()
    {
        // Значок действия, который отображается слева от кнопки 
        // в зависимости от текущего состояния
        return 'voyager-refresh';
    }
    public function getAttributes()
    {
        // Класс кнопки действия
        return [
            'class' => 'btn btn-sm btn-default pull-left rotate-image',
            'data-id' => $this->data->id 
        ];
    }
    public function shouldActionDisplayOnDataType()
    {
        // Показывать или скрыть кнопку действия. Отображается только для модели Posts
        return $this->dataType->slug == 'orders';
    }
    public function getDefaultRoute()
    {
        // URL-адрес для кнопки действия при нажатии кнопки
        return "#";
    }
}
