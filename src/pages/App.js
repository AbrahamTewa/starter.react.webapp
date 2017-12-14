// ============================================================
// Import packages
import React    from 'react';
import { Link } from 'react-router-dom';
// ============================================================
// Import containers
import CurrentTitle from '../containers/CurrentTitle';
import InputTitle   from '../containers/InputTitle';

// ============================================================
// Scene

function App() {
    return (
        <div>
            <Link to="/login">Login</Link>
            <CurrentTitle />
            <div>
                Set title: <InputTitle/>
            </div>
        </div>);
}

// ============================================================
// Exports
export default App;
