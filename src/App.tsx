import React from 'react';
import logo from './logo.svg';
import './App.css';
import { runInThisContext } from 'vm';
import Calc from './components/organisms/calc';

const App: React.FC = () => {
    return (
        <div className="App">
            <Calc />
        </div>
    )
};

export default App;