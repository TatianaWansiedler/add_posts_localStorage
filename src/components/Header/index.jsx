import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css'
const Header = () => {

    const checkClass = ({isActive}) => isActive ? s.active : ''

    return (
        <div className={s.header}>
            <nav className={s.nav}>
                <NavLink className={checkClass} to='/'>Все посты</NavLink>
                <NavLink className={checkClass} to='/add_post'>Добавить пост</NavLink>
            </nav>
        </div>
    );
};

export default Header;