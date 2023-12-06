import React from 'react'
import { Link } from 'react-scroll'
import { Link as Link2 } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const notify = (text) => toast(text);
const NavBar = () => {

    const { data } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    return (
        <>  
            <ToastContainer/>
            <div id="navbar" className='h-[30px] w-full flex justify-center items-center pt-10 mb-10'>
                <div className='mr-5 font-md text-gray-400 cursor-pointer'>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                </div>
                <div className='mr-5 font-md text-gray-400 cursor-pointer'>
                    <Link to="about" spy={true} smooth={true} offset={0} duration={500}>About Us</Link>
                </div>
                <div className='mr-5 font-md text-gray-400 cursor-pointer'>
                    <Link to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Link>
                </div>
                <div className='mr-5 font-md text-gray-400 cursor-pointer'>
                    <Link to="faq" spy={true} smooth={true} offset={0} duration={500}>FAQ</Link>
                </div>
                <div className='mr-5 font-md text-gray-400 cursor-pointer'>
                    <Link2
                        // className="link"
                        activeclassname="active"
                        to={"/dLogin"}
                    >Staff Login</Link2>
                </div>
                {/* <div className='mr-5 font-md text-gray-400 cursor-pointer'>
                    {
                        console.log(data.isAuthenticated)
                    }
                    {
                        
                    data?.isAuthenticated ? (
                        <Link2
                            to=""
                            className="nav-link"
                            onClick={() => {
                                dispatch({ type: "AUTH_LOGOUT" });
                                notify("Logged out");
                            }}
                        >
                            Patient Logout
                        </Link2>
                    ) : (
                        <Link2 to={"/login"}>
                            Patient Login
                        </Link2>
                    )}
                </div> */}

                {/* <div className='mr-5 font-md text-gray-400 cursor-pointer'>
                    Reports
                </div> */}
            </div>
        </>

    )
}

export default NavBar
