import React from 'react';
import { createRoot } from 'react-dom/client'; // Update the import
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')); // Create a root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);