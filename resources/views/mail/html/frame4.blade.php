@extends('mail.html.layout')
@section('content')
<h1>
    Ваша заявка не прошла<br />
    модерацию
</h1>
<div class="text-content">
    <p class="mb-30">
        К сожалению, Ваша заявка не прошла модерацию.
    </p>
    <p>
        Ознакомьтесь, пожалуйста, с правилами акции.
    </p>
    <p class="mb-30">
        <a class="btn" href="https://kinder.gpucloud.ru/rules.pdf">
            ПРАВИЛА АКЦИИ
        </a>
    </p>
    <p>
        Попробуйте отправить заявку снова!
    </p>
    <p>
        <a class="btn" href="https://www.kinder.com/ru/ru/kinder-new-year">
            ОТПРАВИТЬ ЗАЯВКУ
        </a>
    </p>
</div>
@endsection