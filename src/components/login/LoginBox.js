import React from 'react';
import {Link, withRouter} from 'react-router-dom'

const LoginBox = () => {
  return (
    
        <form class="bg-white shadow-lg rounded-login overflow-hidden w-3/4 mx-auto mt-52">
            <div class="h-16 bg-black font-title text-white text-lg p-4">Sign In</div>
            <div class="px-8 pt-6 pb-8 mb-4">
                <div class="flex items-center justify-around mb-4">
                <label class="block  text-sm font-title" for="username">
                    Userame
                </label>
                <input class="shadow appearance-none border rounded-login py-2 px-3  leading-tight " id="username" type="text" placeholder="Username"/>
                </div>
                <div class="flex items-center justify-around mb-6">
                <label class="block text-sm font-title" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border border-red-500 rounded-login py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="****"/>
                </div>
                <button class="bg-black  font-title py-2 px-4 rounded-login text-white hover:bg-black_hover" type="button">
                    <Link to="/home">Sign In</Link>
                </button>
            </div>
        </form>
    
  );
}

export default withRouter(LoginBox);