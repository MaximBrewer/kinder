<?php

use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;

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
Route::get('/test-mail', '\App\Http\Controllers\SiteController@testMail');
Route::get('/video/{hash}', '\App\Http\Controllers\SiteController@video');
Route::get('/playlist/{hash}.m3u8', '\App\Http\Controllers\SiteController@playlist');
Route::get('/playlist-color/{hash}.m3u8', '\App\Http\Controllers\SiteController@playlistColor');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
    Route::get('orders/{id}/confirm', '\App\Http\Controllers\VoyagerOrdersController@confirm')->name('orders.confirm');
    Route::get('orders/{id}/decline', '\App\Http\Controllers\VoyagerOrdersController@decline')->name('orders.decline');
    Route::get('orders/{id}/rotate', '\App\Http\Controllers\VoyagerOrdersController@rotate')->name('orders.rotate');
});

Route::get('/orders/total', '\App\Http\Controllers\OrdersController@total');