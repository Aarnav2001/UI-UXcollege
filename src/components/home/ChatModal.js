import React from 'react';

const ChatModal = (props) => {
    return (
      <div class="w-full rounded-login shadow-lg bg-white overflow-hidden">
      <div class="h-16 bg-black font-title text-white text-lg p-4">{props.name}</div>
      </div>
    );
  }
  
  export default ChatModal;