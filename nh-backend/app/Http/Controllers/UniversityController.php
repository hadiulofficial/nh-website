<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Universities;
use App\Models\Stories;
use App\Models\Inquiries;
use App\Models\Applications;
use App\Models\Countries;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UniversityController extends Controller
{
    /**
     * Get universities with search, country filter, and pagination
     */


    public function getCountries(Request $request){

        $Countries = Countries::all();
        return response()->json([
            'status' => 'success',
            'data' => $Countries,
        ]);
    }

    public function getUniversities(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'search' => 'nullable|string|max:255',
            'limit' => 'nullable|integer|min:1|max:100',
            'country' => 'nullable|string|max:100',
            'page' => 'nullable|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        $query = Universities::query()->where('status', 'active');

        if ($request->has('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('description', 'like', '%' . $request->search . '%');
            });
        }

        if ($request->has('country')) {
            $query->where('country_id', $request->country);
        }

        $limit = $request->limit ?? 10;
        $universities = $query->paginate($limit);

        return response()->json([
            'status' => 'success',
            'data' => $universities->items(),
            'pagination' => [
                'current_page' => $universities->currentPage(),
                'total_pages' => $universities->lastPage(),
                'total_items' => $universities->total(),
                'per_page' => $universities->perPage(),
            ]
        ]);
    }

    /**
     * Get single university by ID
     */
    public function getUniversity($id)
    {
        try {
            $university = Universities::where('status', 'active')->findOrFail($id);
            return response()->json([
                'status' => 'success',
                'data' => $university
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'University not found'
            ], 404);
        }
    }

    /**
     * Get stories with pagination
     */
    public function getStories(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'limit' => 'nullable|integer|min:1|max:100',
            'page' => 'nullable|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        $limit = $request->limit ?? 10;
        $stories = Stories::where('status', 'active')->paginate($limit);

        return response()->json([
            'status' => 'success',
            'data' => $stories->items(),
            'pagination' => [
                'current_page' => $stories->currentPage(),
                'total_pages' => $stories->lastPage(),
                'total_items' => $stories->total(),
                'per_page' => $stories->perPage(),
            ]
        ]);
    }

    /**
     * Submit an inquiry
     */
    public function submitInquiry(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'preference' => 'nullable|string|max:255',
            'message' => 'required|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        $inquiry = Inquiries::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'preference' => $request->preference,
            'message' => $request->message,
            'status' => 'pending',
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Inquiry submitted successfully',
            'data' => $inquiry
        ], 201);
    }

    /**
     * Submit an application
     */
    public function submitApplication(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'gender' => 'required|in:male,female,other',
            'date_of_birth' => 'required|date',
            'preferred_universities' => 'required',
            'passport_number' => 'required|string|max:50',
            'nationality' => 'required|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        $application = Applications::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'gender' => $request->gender,
            'date_of_birth' => $request->date_of_birth,
            'preferred_universities' => $request->preferred_universities,
            'passport_number' => $request->passport_number,
            'nationality' => $request->nationality,
            'status' => 'pending',
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Application submitted successfully',
            'data' => $application
        ], 201);
    }

    /**
     * Check application status
     */
    public function checkApplicationStatus(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'passport_number' => 'required|string|max:50',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        $application = Applications::where('passport_number', $request->passport_number)
            ->first();

        if (!$application) {
            return response()->json([
                'status' => 'error',
                'message' => 'Application not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => [
                'name' => $application->first_name,
                'application_id' => $application->passport_number,
                'status' => $application->status,
                'created_at' => $application->created_at,
                'updated_at' => $application->updated_at,
            ]
        ]);
    }
}
