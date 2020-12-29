@extends('mail.html.layout')
@section('content')
<h1 style="margin: 25px 0;font-size: 26px;line-height: 37px;text-align:center;text-align: center !important;color: #f04e23 !important;text-shadow: 1px 1px 0px rgba(0, 0, 0),-1px 1px 0px rgba(0, 0, 0), 1px -1px 0px rgba(0, 0, 0),-1px -1px 0px rgba(0, 0, 0), 0px 4px 4px rgba(0, 0, 0, 0.25) !important;text-shadow: none !important;font-family: Noteworthy;">
    Ваше поздравление готово!
</h1>
<div class="text-content" style="font-size: 17px;line-height: 24px;text-align: center;color: #000000;font-family: Noteworthy;">
    <p class="mb-14" style="margin-bottom: 14px;">
        Теперь Ваш ребёнок точно поверит, что
        Новый Год – время чудес, ведь Дед Мороз записал
        для него личное видеопоздравление! Вот оно:<br /><br />
        <a class="btn" href="https://kinder.gpucloud.ru/video/{{ $video }}" style="text-decoration: none;outline: none !important;box-shadow: none;border: none;background: #E54C2E;display: inline-block;position: relative;color: white !important;font-size: 15px;line-height: 23px;min-width: 180px;padding: 18px 35px;border-radius: 100px;">
            СМОТРЕТЬ ПОЗДРАВЛЕНИЕ
        </a>
    </p>
    <p>
        <a href="http://kinderhappynewyear.space/video/{{ $video }}" style="color: #F04E23 !important;font-size: 13px;">
            СКАЧАТЬ ПОЗДРАВЛЕНИЕ
        </a>
    </p>
    <p>
        Надеемся, Вы не забыли про подарок Kinder, ведь
        без
        него сказка не будет такой волшебной.
    </p>
</div>
<h2 style="font-size: 26px;line-height: 37px;margin-bottom: 20px;text-align: center;color: #f04e23;font-family: Noteworthy;">
    КУПИТЬ ПОДАРОК:
</h2>
@include('mail.html.shops')
@endsection
