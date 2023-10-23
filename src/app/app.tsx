import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import './styles/index.scss';
import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";


const App = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/'} element={<MainPage />} />
            </Routes>
            </Suspense>
        </div>
    );
};

export default App;