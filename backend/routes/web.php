<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

Route::get('/', function () {
    $indexPath = public_path('frontend/index.html');
    if (File::exists($indexPath)) {
        return Response::file($indexPath);
    }
    abort(404);
});


Route::get('/{any}', function () {
    $indexPath = public_path('frontend/index.html');
    if (File::exists($indexPath)) {
        return Response::file($indexPath);
    }
    abort(404);
})->where('any', '.*');