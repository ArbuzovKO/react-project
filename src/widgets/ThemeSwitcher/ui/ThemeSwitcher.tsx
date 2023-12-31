import { classNames } from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import React, { ButtonHTMLAttributes } from "react";
import { useTheme } from "app/providers/ThemeProviders";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from "app/providers/ThemeProviders";
import { Button, ThemeButton } from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button 
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className])} 
        onClick={toggleTheme}
        >
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}

        </Button>
    );
}