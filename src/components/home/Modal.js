import React from 'react';
import UploadPic from './UploadPic';

const Modal = () => {
    return (
      <div class="w-full rounded-login shadow-lg bg-white overflow-hidden">
      <div class="h-16 bg-black font-title text-white text-lg p-4">Create Post</div>
        <div class="flex items-center justify-around mb-4 h-full">
            <UploadPic/>
        </div>
      </div>
    );
  }
  
  export default Modal;