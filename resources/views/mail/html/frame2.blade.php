@extends('mail.html.layout')
@section('content')
<h1 style="color:#000000;margin: 25px 0;font-size: 26px;line-height: 37px;text-align:center;text-align: center !important;color: #f04e23 !important;text-shadow: 1px 1px 0px rgba(0, 0, 0),-1px 1px 0px rgba(0, 0, 0), 1px -1px 0px rgba(0, 0, 0),-1px -1px 0px rgba(0, 0, 0), 0px 4px 4px rgba(0, 0, 0, 0.25) !important;text-shadow: none !important;font-family: Noteworthy;">
    Дедушка Мороз <br />
    получил Вашу заявку!
</h1>
<div class="text-content" style="color:#000000;font-size: 17px;line-height: 24px;text-align: center;color: #000000;font-family: Noteworthy;">
    <p class="mb-14" style="margin-bottom: 14px;">
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
<h2 style="color:#000000;font-size: 26px;line-height: 37px;margin-bottom: 20px;text-align: center;color: #f04e23;font-family: Noteworthy;">
    КУПИТЬ ПОДАРОК:
</h2>
@include('mail.html.shops')
@endsection