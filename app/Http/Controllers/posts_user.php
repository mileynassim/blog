<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Illuminate\Support\Facades\Auth;



class posts_user extends Controller
{
    public function create(Request $request){
          $post=new Post;

        $post->titre=$request->get('titre');
        $post->status=$request->get('post');
        $post->user_id=Auth::user()->id;
        

        $post->save();
        return response()->json($post);
    }

    public function index() {
        
        $pt=Post::where('user_id',Auth::user()->id)->get();

        return response()->json($pt);

    }
}
