<?php

namespace App\Actions;

use App\Models\Order;
use TCG\Voyager\Actions\AbstractAction;

class ConfirmAction extends AbstractAction
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
        return 'voyager-check';
    }
    public function getAttributes()
    {
        // Класс кнопки действия
        return [
            'class' => 'btn btn-sm btn-success pull-left',
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
            route('orders.confirm', array("id" => $this->data->{$this->data->getKeyName()}));
    }

    public function massAction($ids, $comingFrom)
    {
        // Do something with the IDs
        Order::whereIn('id', $ids)->update(['status' => 'confirmed']);
        return redirect('/admin/orders?key=status&filter=equals&s=new');
    }
}
