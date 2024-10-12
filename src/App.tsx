import  { useState } from 'react';
import Light_mode from "./components/Light_mode"
import Dark_mode from "./components/Dark_mode"

function App() {


    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    return (
      <>
      {isDarkMode ? <Dark_mode toggleMode={toggleMode} /> : <Light_mode toggleMode={toggleMode} />}
    </>
    );
}

export default App
