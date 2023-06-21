import React, { useEffect, useRef } from 'react';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import developerVid from '../assets/developer.mp4';


const Nav = () => {
    const vidRef = useRef();

    const dispatch = useDispatch();

    const toggleDarkMode = () => {
        dispatch({
            type: "toggle"
        });
    }

    const playVideo = () => {
    }
    useEffect(() => {
        vidRef.current.play();
        
    },[]);

    return (
        <section className='min-h-screen'>
            <nav className='py-5 flex justify-between'>
                <h1 className='mr-4 text-lg md:text-2xl dark:text-white lg:text-3xl'>WebDevChandan</h1>
                <ul className='flex items-center'>
                    <li className='cursor-pointer text-2xl'><BsFillMoonStarsFill onClick={toggleDarkMode} className='dark:text-gray-300 lg:text-3xl' /></li>
                    <li><a className='text-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 lg:text-2xl' href="#">Resume</a></li>
                </ul>
            </nav>
            <div className='text-center p-10 py-5'>
                <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-6xl'>Chandan Kumar</h2>
                <h3 className='text-2xl py-2 md:text-3xl'>Developer and Desiner.</h3>
                <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl m-auto dark:text-gray-300 xl:text-2xl'>Freelancer providing servies for programming and design content needs. Join me down below and let's get cracking! </p>
            </div>
            <div className='relative mx-auto w-86 h-86 md:w-8/12 md:h-8/12 lg:w-8/12 lg:h-8/12'>
                {/* <img src={developerImg} alt="Developer Image" /> */}
                <video src={developerVid} autoPlay loop onClick={playVideo} ref={vidRef}></video>
            </div>
            <div className='text-5xl flex justify-center mb-10 gap-16 py-3 text-gray-600'>
                <AiFillTwitterCircle className='dark:text-gray-300 text-4xl md:text-4xl lg:text-6xl' />
                <AiFillLinkedin className='dark:text-gray-300 text-4xl md:text-4xl lg:text-6xl' />
                <AiFillYoutube className='dark:text-gray-300 text-4xl md:text-4xl lg:text-6xl' />
            </div>
        </section>

    )
};

export default Nav 