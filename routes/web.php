<?php

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

/* Route::get('/', function () {
    return view('welcome');
}); */
Route::get('/','user_login_register@index');
Route::post('/','user_login_register@register');
Route::post('/login','user_login_register@postLogin');
Route::get('/user/{id}','user_login_register@show');
Route::post('/post','posts_user@create');
Route::get('/list','posts_user@index');
