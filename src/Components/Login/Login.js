import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from "../../assets/Images/Loginbg1.jpg";
import slider2 from "../../assets/Images/Loginbg2.jpg";
import slider3 from "../../assets/Images/Loginbg3.jpg";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Swiper className="mySwiper h-[90vh]">
                <SwiperSlide>
                    <img src={slider1} alt="Slider_Image" />
                    <div className="absolute top-0 right-0 bg-[#00000091] w-[25%] h-full px-6">
                        <h1 className="text-white text-4xl font-semibold pt-10">MY BOS</h1>
                        <div className="flex flex-col justify-center items-center h-[65vh] px-12">
                            <p className="text-white">Sign into My Bos Admin Panel</p>
                            <input className="block w-full my-2 py-2 px-4 rounded-md" type="text" placeholder="Username" />
                            <input className="block w-full my-2 py-2 px-4 rounded-md" type="text" placeholder="Password" />
                            <input className="block w-full my-2 py-2 px-4 rounded-md bg-sky-400 border border-sky-400 hover:bg-transparent duration-200 cursor-pointer text-white" type="button" value="Confirm" />
                            <p>
                                <span className="text-gray-300">Foegot Password?</span>
                                <Link to='/reset' className=" underline ml-2 text-white hover:text-gray-300">Reset</Link> </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Login;