import React from 'react';
import {Link} from 'react-router-dom'
import posts from '../data/posts.json'
import SearchBar from '../components/browse/SearchBar';

const Browse = () => {
    return (
  <div class="flex px-20 pt-20">
        <div class="flex-1 flex-col bg-back w-full">
          <SearchBar/>
          <div class="my-12 px-8">
                <div class="p-2 relative sticky top-0 bg-white font-title flex items-center justify-center rounded-login shadow-xl">People</div>
                <div class="grid grid-cols-5 gap-4 mt-5">
                {posts.map(person => {
                  return (
                    <div class="flex items-center justify-around h-42 w-42">
                    <Link to="/profiles"><img src={person.post} class="max-w-small max-h-small object-fill shadow-xl"/></Link>
                    </div>
                  );
                })}
                </div>
          </div>

          <div class="my-12 px-8">
                <div class="p-2 sticky top-0 bg-white font-title flex items-center justify-center rounded-login shadow-xl">Places</div>
                <div class="grid grid-cols-5 gap-4 mt-5">
                {posts.map(person => {
                  return (
                    <div class="flex items-center justify-around h-42 w-42">
                    <img src={person.post} class="max-w-small max-h-small object-fill shadow-xl"/>
                    </div>
                  );
                })}
                </div>
          </div>

          <div class="my-12 px-8">
                <div class="p-2 sticky top-0 bg-white font-title flex items-center justify-center rounded-login shadow-xl">Posts</div>
                <div class="grid grid-cols-5 gap-4 mt-5">
                {posts.map(person => {
                  return (
                    <div class="flex items-center justify-around h-42 w-42">
                    <img src={person.post} class="max-w-small max-h-small object-fill shadow-xl"/>
                    </div>
                  );
                })}
                </div>
          </div>

        </div>


      </div>
    );
  }
  
  export default Browse;