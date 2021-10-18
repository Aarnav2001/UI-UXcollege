import React from "react";
import posts from '../../data/posts.json'
import ChatPerson from "./ChatPerson";

const Chat = () => {
    return (
        <div class="flex flex-col">
            <div class="h-16 border-b-2 border-black font-title text-black items-left text-lg pt-4">
                Chats
            </div>
            {posts.map((person) => {
                return (
                    <ChatPerson pic={person.prof_pic}
                                name={person.proile_name}
                                new={person.id}/>
                );
            })}
        </div>
    );
}

export default Chat;