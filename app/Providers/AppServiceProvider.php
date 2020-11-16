<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use TCG\Voyager\Facades\Voyager;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        \App\Models\Achieve::observe(\App\Observers\Achieve::class);
        \App\Models\Name::observe(\App\Observers\Name::class);
        \App\Models\From::observe(\App\Observers\From::class);
        \App\Models\Gift::observe(\App\Observers\Gift::class);
        \App\Models\Hobby::observe(\App\Observers\Hobby::class);
        \App\Models\Order::observe(\App\Observers\Order::class);
        Voyager::addAction(\App\Actions\RotateAction::class);
        Voyager::addAction(\App\Actions\ConfirmAction::class);
        Voyager::addAction(\App\Actions\DeclineAction::class);
    }
}
