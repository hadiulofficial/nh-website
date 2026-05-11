<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Universities extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'image',
        'name',
        'location',
        'founded',
        'students',
        'acceptance_rate',
        'tuition_fees',
        'description',
        'highlights',
        'programs',
        'campus_life',
        'requirements',
        'career_prospects',
        'deadline',
        'country_id',
        'pdf',
        'status',
    ];

    protected $casts = [
        'highlights' => 'array',
        'programs' => 'array',
        'requirements' => 'array',
    ];
}
