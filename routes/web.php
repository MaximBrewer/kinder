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
Route::get('/', '\App\Http\Controllers\SiteController@index');
Route::get('/live', '\App\Http\Controllers\SiteController@live');
Route::get('/live-iframe', '\App\Http\Controllers\SiteController@liveIframe');
Route::post('/patch', '\App\Http\Controllers\SiteController@patch');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
