import React, { useContext } from 'react'
import web1 from '../assets/web1.png'
import web2 from '../assets/web2.png'
import web3 from '../assets/web3.png'
import web4 from '../assets/web4.png'
import web5 from '../assets/web5.png'
import web6 from '../assets/web6.png'
import { DarkModeContext } from '../App'

const Portfolio = () => {
    const darkMode = useContext(DarkModeContext);

    return (
        <section>
            <div>
                <h3 className='text-3xl py-1 xl:text-4xl'>Portfolio</h3>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300  lg:text-lg xl:text-2xl'>Since the beginning of my journey as a freelance design developer, I've done remote work for <span className="text-teal-500">
                    agencies</span> consulted for <span className="text-teal-500"> startups </span>and collaborated with talnted people to create digital product for both business and consumer use.
                </p>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300  lg:text-lg xl:text-2xl'>I offer froma a wide range of services, including brand desing, programming and teaching.
                </p> 
            </div>

            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                <div className='basis-1/3 flex-1'>
                    <img src={web1} alt="web1" className='drop-shadow-lg rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
                </div>
                <div className='basis-1/3 flex-1'>
                    <img src={web2} alt="web2" className='drop-shadow-lg rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
                </div>
                <div className='basis-1/3 flex-1'>
                    <img src={web3} alt="web3" className='drop-shadow-lg rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
                </div>
                <div className='basis-1/3 flex-1'>
                    <img src={web4} alt="web4" className='drop-shadow-lg rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
                </div>
                <div className='basis-1/3 flex-1'>
                    <img src={web5} alt="web5" className='drop-shadow-lg rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
                </div>
                <div className='basis-1/3 flex-1'>
                    <img src={web6} alt="web6" className='drop-shadow-lg rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
                </div>
            </div>
        </section>
    )
}

export default Portfolio