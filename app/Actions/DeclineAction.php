<?php

namespace App\Actions;

use TCG\Voyager\Actions\AbstractAction;

class DeclineAction extends AbstractAction
{
    public function getTitle()
    {
        // Название действия, которое отображается в кнопке 
        // в зависимости от текущего состояния
        return 'Отлконить';
    }
    public function getIcon()
    {
        // Значок действия, который отображается слева от кнопки 
        // в зависимости от текущего состояния
        return 'voyager-x';
    }
    public function getAttributes()
    {
        // Класс кнопки действия
        return [
            'class' => 'btn btn-sm btn-danger pull-left',
            'style' => 'margin-left:5px;'
        ];
    }
    public function shouldActionDisplayOnDataType()
    {
        // Показывать или скрыть кнопку действия. Отображается только для модели Posts
        return $this->data->{'status'} == "new" && $this->dataType->slug == 'orders';
    }
    public function getDefaultRoute()
    {
        // URL-адрес для кнопки действия при нажатии кнопки
        return
            route('orders.decline', array("id" => $this->data->{$this->data->getKeyName()}));
    }
}
