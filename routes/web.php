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
Route::get('/playlist-i/{hash}.m3u8', '\App\Http\Controllers\SiteController@playlistI');
Route::get('/playlist-ii/{hash}.m3u8', '\App\Http\Controllers\SiteController@playlistII');
Route::get('/playlist-iii/{color}.m3u8', '\App\Http\Controllers\SiteController@playlistIII');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
    Route::get('orders/{id}/confirm', '\App\Http\Controllers\VoyagerOrdersController@confirm');
    Route::get('orders/{id}/decline', '\App\Http\Controllers\VoyagerOrdersController@decline');
});
