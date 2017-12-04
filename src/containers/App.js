import React        from 'react';
import CurrentTitle from './CurrentTitle';
import InputTitle   from './InputTitle';

function App() {
    return (
        <div>
            <CurrentTitle />
            <div>
                Set title: <InputTitle/>
            </div>
        </div>);
}

export default App;
