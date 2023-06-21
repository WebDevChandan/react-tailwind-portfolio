import React, { useContext } from 'react'
import { DarkModeContext } from '../App'
import code from '../assets/code.png'
import consulting from '../assets/consulting.png'
import design from '../assets/design.png'

const Service = () => {

    const darkMode = useContext(DarkModeContext);

    return (
        <section className='dark:bg-gray-900'>
            <div>
                <h3 className='text-3xl py-1 xl:text-4xl'>Services I offer</h3>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400 lg:text-lg xl:text-2xl'>Since the beginning of my journey as a freelance design developer, I've done remote work for <span className="text-teal-500">
                    agencies</span> consulted for <span className="text-teal-500"> startups </span>and collaborated with talnted people to create digital product for both business and consumer use.
                </p>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400 lg:text-lg xl:text-2xl'>I offer froma a wide range of services, including brand desing, programming and teaching.
                </p>
            </div>

            <div className='lg:flex gap-10'>
                <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-blue-300 dark:shadow-md'>
                    <img className='m-auto' src={design} alt="desing" width={100} height={100} />
                    <h3 className='text-lg font-medium pt-8 pb-2 lg:text-xl xl:text-2xl'>Beautiful Designs</h3>
                    <p className='py-2 dark:text-gray-300 lg:text-lg xl:text-xl'>
                        Creating elegant desings suited for your desing theory.
                    </p>
                    <h4 className='py-4 text-teal-600 xl:text-lg'>Design tools I Use</h4>
                    <p className='text-gray-800 py-1 dark:text-blue-300 xl:text-lg'>Photoshop</p>
                    <p className='text-gray-800 py-1 dark:text-blue-300 xl:text-lg'>Illustrator</p>
                    <p className='text-gray-800 py-1 dark:text-blue-300 xl:text-lg'>Figma</p>
                </div>
                <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-blue-300 dark:shadow-md'>
                    <img className='m-auto' src={code} alt="desing" width={100} height={100} />
                    <h3 className='text-lg font-medium pt-8 pb-2 lg:text-xl'>Clean Code</h3>
                    <p className='py-2 dark:text-gray-300 lg:text-lg xl:text-xl'>
                        Clean code is the identity of a Professional Developer
                    </p>
                    <h4 className='py-4 text-teal-600 xl:text-lg'>Coding tools I Use</h4>
                    <p className='text-gray-800 py-1 dark:text-blue-300 xl:text-lg'>VS Code</p>
                    <p className='text-gray-800 py-1 dark:text-blue-300 xl:text-lg'>Spring Tool Suite</p>
                    <p className='text-gray-800 py-1 dark:text-blue-300 xl:text-lg'>Eclipse</p>
                </div>
                <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-blue-300 dark:shadow-md'>
                    <img className='m-auto' src={consulting} alt="desing" width={100} height={100} />
                    <h3 className='text-lg font-medium pt-8 pb-2 lg:text-xl'>Flexible Support</h3>
                    <p className='py-2 dark:text-gray-300 lg:text-lg xl:text-xl'>
                        24x7 Support with Porper Guidence.
                    </p>
                    <h4 className='py-4 text-teal-600 xl:text-lg'>Design tools I Use</h4>
                    <p className='text-gray-800 py-1 dark:text-blue-300 xl:text-lg'>Photoshop</p>
                    <p className='text-gray-800 py-1 dark:text-blue-300 xl:text-lg'>Illustrator</p>
                    <p className='text-gray-800 py-1 dark:text-blue-300 xl:text-lg'>Figma</p>
                </div>
            </div>
        </section>

    )
}

export default Service