import React from 'react';


const Project = () => {
    return (
        <div className="container mt-4 ">
            <h1 className="display-4 mb-4">Multi-Project Showcase</h1>
            <p className="lead">Explore a variety of applications built using different technologies and frameworks.</p>
            
            <div className="card mb-4 bg-success">
                <div className="card-body">
                    <h2 className="card-title">Tic-Tac-Toe Game (Java)</h2>
                    <p className="card-text">A classic game where players mark X or O on a 3x3 grid. Play until a player wins or the game ends in a draw.</p>
                </div>
            </div>

            <div className="card mb-4 bg-success">
                <div className="card-body">
                    <h2 className="card-title">Weather App (React.js)</h2>
                    <p className="card-text">Check the weather with this React app. Enter a location and get detailed weather information.</p>
                </div>
            </div>
            
            <div className="card mb-4 bg-success">
                <div className="card-body">
                    <h2 className="card-title">Social Media Web App (Node.js)</h2>
                    <p className="card-text">Connect with others using this Node.js-based social media app. Share posts, follow users, and engage with content.</p>
                </div>
            </div>
            
            <div className="card mb-4 bg-success">
                <div className="card-body">
                    <h2 className="card-title">To-Do Application (Node.js)</h2>
                    <p className="card-text">Stay organized with this Node.js to-do app. Add, edit, and manage tasks with ease.</p>
                </div>
            </div>

            
        </div>
    );
}

export default Project;
