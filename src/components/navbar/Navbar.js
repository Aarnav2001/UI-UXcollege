import {React, useState} from 'react';
import { useLocation, NavLink} from 'react-router-dom';
import classNames from 'classnames';

import Logo1 from '../../assets/logos/without text.png'
import Logo2 from '../../assets/profile.jpeg'


const Navbar = () => {
    const location = useLocation();
    if (location.pathname == '/login' || location.pathname == '/') {            
      return (
        <></>
      );
    }
    else {
      return (
      <div class="flex fixed w-full z-20 flex-row h-20 bg-black p-4">
        <div class="flex flex-row items-left justify-left">
          <img class="px-3"src={Logo1}/>
          <button class={classNames("font-title text-white text-lg my-auto w-32 px-10 rounded-login hover:bg-black_hover py-3",
                                    {
                                      'bg-black_hover': window.location.pathname === '/home'
                                    })}>
            <NavLink to="/home">Home</NavLink>
          </button>
          <button class={classNames("font-title text-white text-lg my-auto w-32 px-10 rounded-login hover:bg-black_hover py-3",
                                    {
                                      'bg-black_hover': window.location.pathname === '/browse'
                                    })}>
            <NavLink to="/browse">Browse</NavLink>
          </button>
        </div>
        <div class="flex justify-end w-full items-right">
        <img  class="w-24 h-16" src={Logo2}/>
        </div>
      </div>
      );
    }
  }
  
  export default Navbar;