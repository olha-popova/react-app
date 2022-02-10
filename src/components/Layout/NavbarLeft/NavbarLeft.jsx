import React from 'react';
import s from './NavbarLeft.module.scss';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle, faComments, faNewspaper, faMusic, faCogs} from '@fortawesome/free-solid-svg-icons';

const NavbarLeft = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>
                    <FontAwesomeIcon icon={faUserCircle}/>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>
                    <FontAwesomeIcon icon={faComments}/>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>
                    <FontAwesomeIcon icon={faNewspaper}/>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>
                    <FontAwesomeIcon icon={faMusic}/>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>
                    <FontAwesomeIcon icon={faCogs}/>
                </NavLink>
            </div>
        </nav>
    );
};

export default NavbarLeft;