@extends('mail.html.layout')
@section('content')
<h1 style="margin: 25px 0;font-size: 26px;line-height: 37px;text-align:center;text-align: center;color: #f04e23;text-shadow: 1px 1px 0px rgba(0, 0, 0),-1px 1px 0px rgba(0, 0, 0), 1px -1px 0px rgba(0, 0, 0),-1px -1px 0px rgba(0, 0, 0), 0px 4px 4px rgba(0, 0, 0, 0.25);text-shadow: none;font-family: Noteworthy;">
    Ваша заявка не прошла<br />
    модерацию
</h1>
<div class="text-content" style="font-size: 17px;line-height: 24px;text-align: center;color: #000000;font-family: Noteworthy;">
    <p class="mb-30" style="margin-bottom: 30px;">
        К сожалению, Ваша заявка не прошла модерацию.
    </p>
    <p>
        Ознакомьтесь, пожалуйста, с правилами акции.
    </p>
    <p class="mb-30" style="margin-bottom: 30px;">
        <a class="btn" href="https://kinder.gpucloud.ru/rules.pdf" style="text-decoration: none;outline: none !important;box-shadow: none;border: none;background: #E54C2E;display: inline-block;position: relative;color: white !important;font-size: 15px;line-height: 23px;width: 180px;padding: 18px 35px;border-radius: 100px;">
            ПРАВИЛА АКЦИИ
        </a>
    </p>
    <p>
        Попробуйте отправить заявку снова!
    </p>
    <p>
        <a class="btn" href="https://www.kinder.com/ru/ru/kinder-new-year" style="text-decoration: none;outline: none !important;box-shadow: none;border: none;background: #E54C2E;display: inline-block;position: relative;color: white !important;font-size: 15px;line-height: 23px;width: 180px;padding: 18px 35px;border-radius: 100px;">
            ОТПРАВИТЬ ЗАЯВКУ
        </a>
    </p>
</div>
@endsection