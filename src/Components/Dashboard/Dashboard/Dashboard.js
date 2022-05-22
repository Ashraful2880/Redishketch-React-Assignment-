import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';
import dashboardPic from "../../../assets/Images/Dashboard.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour, faCalendar } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const toogleMenu = () => {
        const toggleButton = document.getElementById("toogleDashboard");
        if (toggleButton.style.display === "none") {
            toggleButton.style.display = "block";
        } else {
            toggleButton.style.display = "none";
        }
    }
    return (
        <>
            <button
                onClick={toogleMenu}
                type="button"
                className="fixed left-3 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <i className="fas fa-bars text-2xl px-2"></i>
            </button>
            <main className="flex w-full h-full">
                <aside className="w-80 h-full bg-gray shadow-md" id="toogleDashboard">
                    <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
                        <div className="text-sm text-left">
                            <h1 className="text-white text-3xl font-semibold mb-6">MY BOSS</h1>
                            <img className=" mb-4 mx-auto rounded-md" src={dashboardPic} alt="User" />
                            <Link to="/dashboard">
                                <div className="text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faClockFour} className="text-lg mx-6 align-middle" />
                                    DASHBOARD
                                </div>
                            </Link>
                            <Link to="cases">
                                <div className="text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faClockFour} className="text-lg mx-6 align-middle" />
                                    CASES
                                </div>
                            </Link>
                            <Link to="workOrder">
                                <div className="text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faClockFour} className="text-lg mx-6 align-middle" />
                                    WORK ORDER SENT
                                </div>
                            </Link>
                            <Link to="calender">
                                <div className="text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faCalendar} className="text-lg mx-6 align-middle" />
                                    CALENDAR
                                </div>
                            </Link>
                            <Link to="maintenance">
                                <div className="text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faClockFour} className="text-lg mx-6 align-middle" />
                                    MAINTENANCE
                                </div>
                            </Link>
                            <Link to="building">
                                <div className=" text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faClockFour} className="text-lg mx-6 align-middle" />
                                    BUILDING
                                </div>
                            </Link>
                            <Link to="residents">
                                <div className="text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faClockFour} className="text-lg mx-6 align-middle" />
                                    RESIDENTS
                                </div>
                            </Link>
                            <Link to="keys">
                                <div className="text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faClockFour} className="text-lg mx-6 align-middle" />
                                    KEYS
                                </div>
                            </Link>
                            <Link to="parcels">
                                <div className="text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faClockFour} className="text-lg mx-6 align-middle" />
                                    PARCELS
                                </div>
                            </Link>
                            <Link to="contractors">
                                <div className="text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faClockFour} className="text-lg mx-6 align-middle" />
                                    CONTRACTORS
                                </div>
                            </Link>
                            <Link to="settings">
                                <div className="text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faClockFour} className="text-lg mx-6 align-middle" />
                                    SETTINGS
                                </div>
                            </Link>
                            <Link to="covid-19">
                                <div className="text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700">
                                    <FontAwesomeIcon icon={faClockFour} className="text-lg mx-6 align-middle" />
                                    COVID-19 TRACK
                                </div>
                            </Link>
                        </div>
                    </div>
                </aside>
                <section className="w-full">
                    <Routes>
                        <Route path="/" element={<DashboardHome />} />
                    </Routes>
                </section>
            </main>
        </>
    );
};

export default Dashboard;