<?php

namespace App\Actions;

use TCG\Voyager\Actions\AbstractAction;

class PublishAction extends AbstractAction
{
    public function getTitle()
    {
        // Название действия, которое отображается в кнопке 
        // в зависимости от текущего состояния
        return 'Утвердить';
    }
    public function getIcon()
    {
        // Значок действия, который отображается слева от кнопки 
        // в зависимости от текущего состояния
        return 'voyager-star-two';
    }
    public function getAttributes()
    {
        // Класс кнопки действия
        return [
            'class' => 'btn btn-sm btn-success pull-left',
        ];
    }
    public function shouldActionDisplayOnDataType()
    {
        // Показывать или скрыть кнопку действия. Отображается только для модели Posts
        return $this->data->{'status'} != "confirmed" && $this->dataType->slug == 'orders';
    }
    public function getDefaultRoute()
    {
        // URL-адрес для кнопки действия при нажатии кнопки
        return
            route('orders.confirm', array("id" => $this->data->{$this->data->getKeyName()}));
    }
}
