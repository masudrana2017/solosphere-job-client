import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({ img, title }) => {
    return (
        <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${img}) ` }} >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>

                        <Link to="/add-job" className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                            Post Job & Hire Expert
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default Slide;