import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from './common/Icon';

const Header = () => {
    return (
        <header className='main-header'>
            <nav className='main-header__nav'>                
                <NavLink to='/' 
                         activeClassName='active'
                         exact
                         className='main-header__nav-item'>
                    <Icon icon='home' />
                    <span className='main-header__nav-item-text'>Home</span>
                </NavLink>
                <NavLink to='/sins' 
                         activeClassName='active'
                         className='main-header__nav-item'>
                    <Icon icon='list' />
                    <span className='main-header__nav-item-text'>Sins list</span>
                </NavLink>
                <NavLink to='/addsins' 
                         activeClassName='active'
                         className='main-header__nav-item'>
                    <Icon icon='add' />
                    <span className='main-header__nav-item-text'>Add Sins</span>
                </NavLink>
                <NavLink to='/calendar' 
                         activeClassName='active'
                         className='main-header__nav-item'>
                    <Icon icon='calendar' />
                    <span className='main-header__nav-item-text'>Timing</span>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;