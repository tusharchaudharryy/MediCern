import React from 'react'
import { medLogo } from '../../assets/index';
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div id = "home" className='w-full mb-[80px] h-[600px] flex items-center justify-center '>
                <div className='h-[80%] w-[80%] border flex bg-white rounded-2xl shadow-2xl'>
                    <div className="w-1/2 h-full transform  transition duration-500 hover:scale-125  flex flex-col justify-center items-center flex-wrap">
                        <h1 className='text-[30px] font-bold'>
                            Welcome to
                        </h1>
                        <h1 className='text-[50px] font-bold'>
                            MEDICARE
                        </h1>
                    </div>
                    <div className='w-1/2 h-full pt-3'>
                        <img src={medLogo} alt="" />
                    </div>
                </div>
            </div>

        </>


    );
}

export default Home
