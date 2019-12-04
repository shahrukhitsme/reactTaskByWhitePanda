import React, {Component} from 'react';
import '../styles/Body.css';
import Filters from '../components/Filters';
import dataArray from '../data/mockData.json';
import ListElem from '../components/ListElem';

class Body extends Component{
    render(){

        let pageNum = this.props.page;
        let listRows = [];
        for(let i= 0; i< 8; i++)
        {
            let index= 8*(pageNum-1)+i;
            if(index>=dataArray.length)
                break;
            listRows.push(<ListElem data={dataArray[index]}/>);
        }
        return (
            <div className="body">
            <div id="title"><h1>Your Jobs</h1></div>
            <table id="bodyTable">
                <tr><Filters/></tr>
                {listRows}
            </table>
            </div>
        );
    }
}

export default Body;