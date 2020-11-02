<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/unsubscribe', '\App\Http\Controllers\SiteController@unsubscribe');
Route::post('/patch', '\App\Http\Controllers\SiteController@patch');
Route::post('/test-mail', '\App\Http\Controllers\SiteController@testMail');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
