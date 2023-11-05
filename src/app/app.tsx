import { Link, Routes } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";


const App = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;