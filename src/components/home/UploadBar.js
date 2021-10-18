import React, {useState, useEffect, useRef} from 'react';
import Modal from './Modal'

const UploadBar = () => {
    const ref = useRef()
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (openModal && ref.current && !ref.current.contains(e.target)) {
            setOpenModal(false)
            document.getElementById('toBlur').style.filter = 'blur(0)'

        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
        }, [openModal])
    return (
    <div ref={ref} class="relative ">
        <div id='toBlur' class="w-full h-24 rounded-login shadow-lg bg-white">
            <div class="flex items-center justify-around mb-4 h-full">
                    <label class="block  text-lg font-title" for="username">
                        Create your own post
                    </label>
                    <button onClick={() => 
                                {setOpenModal(true)
                                document.getElementById('toBlur').style.filter = 'blur(2px)'
                                }}
                            class="bg-black  font-title py-2 px-4 rounded-login text-white text-lg hover:bg-black_hover" type="button">
                        Create
                    </button>
            </div>
        </div>
      {openModal && <div class="absolute z-10 top-24 w-full h-screen"><Modal /></div>}
    </div>
    );
  }
  
  export default UploadBar;