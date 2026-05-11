<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UniversityController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/universities', [UniversityController::class, 'getUniversities']);
Route::get('/universities/{id}', [UniversityController::class, 'getUniversity']);
Route::get('/stories', [UniversityController::class, 'getStories']);
Route::get('/countries', [UniversityController::class, 'getCountries']);
Route::post('/submit-inquiry', [UniversityController::class, 'submitInquiry']);
Route::post('/submit-application', [UniversityController::class, 'submitApplication']);
Route::post('/application-status', [UniversityController::class, 'checkApplicationStatus']);