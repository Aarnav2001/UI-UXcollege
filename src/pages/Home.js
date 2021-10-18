import React from 'react';
import Post from '../components/home/Post';
import posts from '../data/posts.json';
import Chat from '../components/home/Chat';


import UploadBar from '../components/home/UploadBar';

const Home = () => {
    return (
      <div class="flex pt-20">
        <div class="flex-1 flex-col bg-back p-10 overflow-y-scroll h-screen">
          <UploadBar/>
          {posts.map((p) => {
            return (
              <div class="my-7">
                <Post id={p.id}
                      name={p.proile_name}
                      prof_pic={p.prof_pic}
                      post={p.post}
                      desc={p.desc}/>
              </div>
            );
          })}
        </div>
        <div class="flex-1 overflow-y-scroll h-screen">
          <Chat/>
        </div>
      </div>
    );
  }
  
  export default Home;