import React from 'react';

const Home = () => {
    return (
        <div className="landing">
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm [Your Name], a passionate developer.</p>
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
