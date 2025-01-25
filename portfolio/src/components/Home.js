import React from 'react';

const Home = () => {
    return (
        <div className="landing">
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Jiteen Mohanty, a passionate developer.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Explore my work and get to know me better!</p>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
