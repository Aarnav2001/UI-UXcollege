import React from 'react';

const UploadPic = () => {
  return (
    <div class="flex justify-center mt-1">
        <div class="m-4">
            <label class="inline-block mb-2 text-gray-500">Upload
                Image(jpg,png,svg,jpeg)</label>
            <div class="flex items-center justify-center w-full">
                <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo</p>
                    </div>
                    <input type="file" class="opacity-0" />
                </label>
            </div>
            <div class="flex items-center justify-around my-4">

                <label class="block  text-sm font-title" for="username">
                        Description
                    </label>
                <input class="shadow appearance-none border rounded-login py-2 px-3  leading-tight " id="username" type="text" placeholder="250 words"/>
            </div>

            <div class="flex items-center justify-around my-4">
                <button class="bg-black  font-title py-2 px-4 rounded-login text-white hover:bg-black_hover" type="button">
                    Create
                </button>
                <button class="bg-black  font-title py-2 px-4 rounded-login text-white hover:bg-black_hover" type="button">
                    Cancel
                </button>
            </div>
        </div>
    </div>
  );
}

export default UploadPic;