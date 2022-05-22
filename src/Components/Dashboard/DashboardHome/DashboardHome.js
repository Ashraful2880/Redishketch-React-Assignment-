import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faBullhorn, faBell } from '@fortawesome/free-solid-svg-icons';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DashboardHome = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="bg-gray-200 h-full mb-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 pt-10 gap-x-5">
                    <div className="bg-indigo-900 rounded-md py-3">
                        <div className="flex justify-between items-center text-white px-4 text-lg">
                            <p>Community</p>
                            <p>Broadcast</p>
                            <p>Shift log</p>
                            <p>Lobby Screen</p>
                        </div>
                    </div>
                    <div className="rounded-md relative">

                        <input type="text" placeholder="Search" className=" w-full py-3 pl-12 pr-5 rounded-md" />
                        <button type="submit">
                            <FontAwesomeIcon icon={faSearch} className="absolute top-4 left-5 text-gray-600" />
                        </button>
                    </div>
                    <div className="px-8 bg-white rounded-md flex justify-between items-center">
                        <FontAwesomeIcon icon={faPlus} />
                        <p>Action</p>
                        <FontAwesomeIcon icon={faBullhorn} />
                        <FontAwesomeIcon icon={faBell} />
                        <img className="w-8 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/86690202?v=4" alt="Profile" />
                        <p>Naisoso Island Management</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-4">
                    <div className="bg-white h-full rounded-md">
                        <Calendar onChange={onChange} value={value} />
                    </div>
                    <div className="border bg-white h-72 rounded-md">2</div>
                    <div className="border bg-white h-72 rounded-md">3</div>
                    <div className="border bg-white h-72 rounded-md">4</div>
                    <div className="border bg-white h-72 rounded-md">5</div>
                    <div className="border bg-white h-72 rounded-md">6</div>
                    <div className="border bg-white h-72 rounded-md">7</div>
                    <div className="border bg-white h-72 rounded-md">8</div>
                    <div className="border bg-white h-72 rounded-md">9</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;