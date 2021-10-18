import React from "react";

const Post = (props) => {
    return (
        <div class="w-full rounded-login shadow-lg bg-white overflow-hidden">
            <div class="h-16 border-b-2 border-black font-title text-black text-lg p-2">
                <img src={props.prof_pic} class="w-12 h-12 rounded-login float-left"/>
                <label class="text-sm float-left px-4 pt-4 text-black font-body" for="username">
                    {props.name}
                </label>
                <button class="inline-flex items-center justify-center w-14 h-14 mr-2 text-red bg-transparent rounded-full float-right">
                    <svg class="w-8 h-8 fill-red" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="flex items-center justify-around h-full">
                <img src={props.post} class="w-full border-b-2 border-black"/>
            </div>
            <div class="flex items-center justify-around h-full">
                <label class="block  text-sm font-body" for="username">
                    {props.desc} 
                </label>
            </div>
        </div>
    );
}

export default Post;