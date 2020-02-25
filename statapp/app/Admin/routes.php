<?php

use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
], function (Router $router) {

    $router->get('/', function () {
        return redirect('admin/back-people-infos');
    });

    $router->get('/admin/dashboard', function () {
        return redirect('admin/sback-people-infos');
    });

    $router->resource('back-people-infos', BackPeopleController::class);
});
