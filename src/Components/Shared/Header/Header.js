import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/Images/Logo.png";

const Header = () => {
    return (
        <div className="bg-gray-800">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/home">
                    <div className="flex items-center">
                        <img className="w-24 mr-2" src={logo} alt="Main Logo" />
                        <h4 className="text-red-500 font-bold text-2xl">Redishketch</h4>
                    </div>
                </Link>
                <nav>
                    <ul className="flex text-white">
                        <li className="mx-2 text-lg font-semibold hover:bg-red-500 py-1 px-3 rounded-md duration-200">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className="mx-2 text-lg font-semibold hover:bg-red-500 py-1 px-3 rounded-md duration-200">
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                        <li className="mx-2 text-lg font-semibold hover:bg-red-500 py-1 px-3 rounded-md duration-200">
                            <Link to="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;