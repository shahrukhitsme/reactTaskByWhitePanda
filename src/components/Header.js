import React, {Component} from 'react';
import '../styles/Header.css';
import logo from '../assets/full_logo_white.png';
import bellIcon from '../assets/bell-icon.png';
import profile from '../assets/profile.png'

class Header extends Component{
    render(){
        return (
            <div className="header">
            <div id="logo"><img src={logo}/></div>
            <div id="notification"><img id="bellIcon" src={bellIcon}/></div>
            <div id="profileDiv"><img src={profile} alt='profile' id="profile"/></div>
            </div>
        );
    }
}

export default Header;