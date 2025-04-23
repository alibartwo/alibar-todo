<?php

namespace App\Http\Controllers\Api;

use App\Models\Todo;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Todo::orderBy('created_at', 'desc')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //check if its valid
        $validated = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        // create new todo
        $todo = \App\Models\Todo::create([
            'title' => $validated['title'],
            'completed' => false,
        ]);

        // return as a json
        return response()->json($todo, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $todo = \App\Models\Todo::findOrFail($id);
        
        return response()->json($todo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // find the related todo
        $todo = \App\Models\Todo::findOrFail($id);

        // check received data
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'completed' => 'sometimes|boolean',
        ]);

        // update only the fields provided
        if (array_key_exists('title', $validated)) {
            $todo->title = $validated['title'];
        }

        if (array_key_exists('completed', $validated)) {
            $todo->completed = $validated['completed'];
        }

        $todo->save();

        // return res as a json
        return response()->json($todo);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $todo = \App\Models\Todo::findOrFail($id);
        $todo->delete();

        return response()->json(['message' => 'Todo deleted successfully.']);
    }
}
