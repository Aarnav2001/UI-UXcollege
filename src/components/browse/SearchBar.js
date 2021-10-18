import React from "react";

const SearchBar = () => {
    return (
        <div class="p-8">
            <div class="bg-white flex items-center rounded-login shadow-xl">
                <input class="rounded-login w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text"/>
        
                <div class="p-4">
                    <button class="bg-blue-500 text-red rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center">
                    <img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;