<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;


class user_login_register extends Controller
{


   public function index(){
       return view('welcome');
   } 
   public function show($id) {
        $user=User::find($id);
        return response()->json($user);
   }
    public function register(Request $request) {
        $user=New User;

        $user->name=$request->get('name');
        $user->email=$request->get('email');
        $user->password=\Hash::make($request->get('password'));

        $user->save();

        response()->json($user);
        


    }

 public function postLogin(Request $request)
{
    // Create the array using the values from the session
    $credentials =$request->only('email', 'password');

        

    // Attempt to login the user
    if (Auth::attempt($credentials)) {
      
        return response()->json([
            "success"=>true,
            "user_id"=>Auth::user()->id,
            

            

        ], 200);
        
    }

    return 'Failure';
}
}


