<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class user_page extends Controller
{
    public function search(Request $request){
       
       $search_name=$request->search;
       
        $search=User::where('name', $search_name)->get();
        if(count($search) > 0) {
             return response()->json([
                 "succes"=>true,
                "list_search"=>$search
             ]);
            
        }
        else {
            return response()->json([
                "succes"=>false
            ]);
        }
    }
}
