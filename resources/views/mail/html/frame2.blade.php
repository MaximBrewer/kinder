@extends('mail.html.layout')
@section('content')
<h1>
    Дедушка Мороз <br />
    получил Вашу заявку!
</h1>
<div class="text-content">
    <p class="mb-14">
        Дедушка Мороз и Снегурочка уже начали готовить
        видеопоздравление! В скором времени Ваш ребёнок
        сможет
        побывать у них в гостях!
    </p>
    <p>
        Пока мы готовим для Вас новогоднее чудо,
        не забудьте купить подарок Kinder, 
        ведь без него сказка не будет такой волшебной!
    </p>
</div>
<h2>
    КУПИТЬ ПОДАРОК:
</h2>
<table style="margin:0 auto;">
    <tr style="vertical-align: baseline;">
        <td>
            <a href="https://pokupki.market.yandex.ru/search?cvredirect=2&utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020&text=%D0%BA%D0%B8%D0%BD%D0%B4%D0%B5%D1%80&glfilter=7893318%3A10715858" class="shop shop-1">
                <img src="https://kinder.gpucloud.ru/images/yandex-mail.png" />
            </a>
        </td>
        <td>
            <a href="https://www.ozon.ru/brand/kinder-138860371/?utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020" class="shop shop-2">
                <img src="https://kinder.gpucloud.ru/images/ozon-mail.png" />
            </a>
        </td>
    </tr>
    <tr style="vertical-align: baseline;">
        <td>
            <a href="https://www.vprok.ru/catalog/1450/shokolad-batonchiki/brend/kinder?utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020" class="shop shop-3">
                <img src="https://kinder.gpucloud.ru/images/cross-mail.png" />
            </a>
        </td>
        <td>
            <a href="https://www.utkonos.ru/search/kinder/cat/52?&utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020" class="shop shop-4">
                <img src="https://kinder.gpucloud.ru/images/utkonos-mail.png" />
            </a>
        </td>
    </tr>
</table>
@endsection