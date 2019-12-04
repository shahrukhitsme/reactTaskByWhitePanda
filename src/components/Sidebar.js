import React, {Component} from 'react';
import '../styles/Sidebar.css';
import copy from '../assets/copy.png';
import envelope from '../assets/envelope.png';
import magnifyingGlass from '../assets/magnifying-glass.png';

class Sidebar extends Component{

    highlightOption(e){
        console.log(e.target.nextSibling);
        e.target.nextSibling.style = "background-color:teal";
    }

    unHighlightOption(e){
        e.target.nextSibling.style = "background-color:white";
    }

    render(){
        return (
            <div className="sidenav">
            <li><img className="icons" src={copy} onMouseOver={this.highlightOption} onMouseLeave={this.unHighlightOption}/><div id="copyDivHoverIndicator"/></li>
            <li><img className="icons" src={envelope} onMouseOver={this.highlightOption} onMouseLeave={this.unHighlightOption}/><div id="copyDivHoverIndicator"/></li>
            <li><img className="icons" src={magnifyingGlass} onMouseOver={this.highlightOption} onMouseLeave={this.unHighlightOption}/><div id="copyDivHoverIndicator"/></li>
            </div>
        );
    }
}

export default Sidebar;