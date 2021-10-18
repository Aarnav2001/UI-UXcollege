import React from "react";

const Post = (props) => {
    return (
        <div class="w-full rounded-login shadow-lg bg-white overflow-hidden">
            <div class="h-16 border-b-2 border-black font-title text-black text-lg p-2">
                <label class="text-sm float-left px-4 pt-4 text-black font-body" for="username">
                    {props.name}
                </label>
            </div>
            <div    class="flex items-center justify-around h-full" 
                    style={{  
                        height: '30rem',
                        backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                <img src={props.prof_pic} class="w-28 h-28 rounded-login absolute bottom-32 left-52"/>

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