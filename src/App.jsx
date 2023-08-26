import './App.css';
import React from 'react';
import EntryScreen from './components/EntryScreen';
import Game from './components/Game';

function App() {
    function handleClick(){
        setEntryScreen(false);
    }

    const [entryScreen,setEntryScreen]=React.useState(true);

    return (
        <>
           {entryScreen?<EntryScreen handleClick={handleClick}/> :<Game/> }
        </>
    );
}

export default App;

