import React from 'react';

import Logo from '../assets/logos/with text.png';
import LoginBox from '../components/login/LoginBox';


const Login = () => {
  return (
    <div class="flex flex-row">
      <div class="flex-1 h-screen w-2/4 bg-back">
          <img src={Logo} class="mt-28"/>
      </div>
      <div class="flex-1 h-screen w-2/4">
          <LoginBox/>
      </div>
    </div>
  );
}

export default Login;