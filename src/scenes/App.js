// ============================================================
// Import packages
import React        from 'react';

// ============================================================
// Import containers
import CurrentTitle from '../containers/CurrentTitle';
import InputTitle   from '../containers/InputTitle';

// ============================================================
// Scene

function App() {
    return (
        <div>
            <CurrentTitle />
            <div>
                Set title: <InputTitle/>
            </div>
        </div>);
}

// ============================================================
// Exports
export default App;
