import React, {useState} from "react";
import ChatModal from "./ChatModal";

const ChatPerson = (props) => {
    const [chat, setChat] = useState(null)
    return (
        <>
        <button class="w-full relative hover:bg-black_hover"
             onCLick={() => {console.log('clicked'); setChat(true)}}>
            <div class="h-16 border-b-2 border-black font-title text-black text-lg p-2">
                <img src={props.pic} class="w-12 h-12 rounded-login float-left"/>
                <label class="text-sm float-left px-4 pt-4 text-black font-body" for="username">
                    {props.name}
                </label>
                {props.new % 3 == 0 ? <div class="w-4 h-4 bg-red float-right rounded-login"></div> : null }
            </div>
        </button>
        { chat && 
        <div class="absolute z-10 bottom-0 w-full h-screen">
            <ChatModal name={props.name}/>
        </div>}
        </>
    );
}

export default ChatPerson;