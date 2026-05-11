<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('universities', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('name');
            $table->string('location')->nullable();
            $table->string('founded')->nullable();
            $table->string('students')->nullable();
            $table->string('acceptance_rate')->nullable();
            $table->string('tuition_fees')->nullable();
            $table->text('description')->nullable();
            $table->text('highlights')->nullable(); //use arry in fillable
            $table->text('programs')->nullable(); //use arry in fillable
            $table->text('campus_life')->nullable();
            $table->text('requirements')->nullable(); //use arry in fillable
            $table->text('career_prospects')->nullable();
            $table->text('deadline')->nullable();
            $table->text('country_id')->nullable();
            $table->string('pdf');
            $table->string('status')->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('universities');
    }
};
