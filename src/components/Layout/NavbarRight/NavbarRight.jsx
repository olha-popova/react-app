import React from 'react';
import s from './NavbarRight.module.scss';
import Friend from "./Friend/Friend";

const NavbarRight = (props) => {

    let Friends =
        props.state.friends.map(friend => <Friend id={friend.id} name={friend.name} profilepic={friend.profilepic}/>);

    return (
        <nav className={s.nav}>
            {Friends}
        </nav>
    );
};

export default NavbarRight;