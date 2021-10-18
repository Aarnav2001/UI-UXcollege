import React from 'react';
import Person from '../components/profiles/Person'
import Tabs from '../components/profiles/Tabs';
import posts from '../data/posts.json'

const Profiles = () => {
    return (
      <div class="flex flex-col pt-20 px-20">
      <div class="flex-1 flex-col bg-back w-full px-20">
          <Person prof_pic={posts[0].prof_pic}
                  name={posts[0].proile_name}
                  post={posts[0].post}
                  desc={posts[0].desc}/>
      </div >  

      <div class="flex-1 flex-col bg-back w-full px-20">
          <Tabs/>
      </div>
      </div>
    );
  }
  
  export default Profiles;