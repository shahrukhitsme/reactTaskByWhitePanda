import React, {Component} from 'react';
import '../styles/LIstElem.css';
import starIcon from '../assets/star.png';

const statusColorPairs = {
    "Editorial Review":"#dba614",
    "Revision Requested": "#2d99ba",
    "Completed": "#289980",
    "Deadline Missed": "#a33954"
};

class ListElem extends Component{

    shortenTitle(text)
    {
        if(text.length<40)
            return text;
        else
            return text.substring(0, 40)+"...";
    }

    setColorandGetLabel(status){
        let color = statusColorPairs[status];
        return (
            <div><label className="statusLbl" style={{backgroundColor:color}}>{status}</label></div>
        );
    }

    createButton(status){
        let text="",className="";
        if(status=="Revision Requested")
        {
            text="Revise";
            className = "reviseButton"
        }
        else
        {
            text="View";
            className="viewButton";
        }
        let button = (
            <button className={className}>{text}</button>
        );
        return button;
    }

    render(){
        const {id, title, price, status, rating, length, bookType, industry} = this.props.data;
        return(
            <tr style={{width:'100%', height:'100%'}}>
                <div id="listElem" style={{borderLeftColor:statusColorPairs[status], borderLeftWidth:"4px"}}>
                    <table style={{width:'100%'}}>
                        <tr style={{width:'100%'}}>
                            <td id="firstSection">
                                <div id="title"><div id="titleText">{this.shortenTitle(title)}</div></div>
                                <tr>
                                    <td id="booktype">{bookType}</td>
                                    <td id="industry">{industry}</td>
                                    <td id="length">{length} words</td>
                                </tr>
                            </td>
                            <td id="price">{price}</td>
                            <td id="status">{this.setColorandGetLabel(status)}</td>
                            <td id="rating"><img className="starIcon" src={starIcon}></img><div className="ratingNum">{rating}</div></td>
                            <td id="btn">{this.createButton(status)}</td>
                        </tr>
                    </table>
                    </div>
            </tr>
        );
    }
}

export default ListElem;