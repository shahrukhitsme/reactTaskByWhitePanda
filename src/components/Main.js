import React, {Component} from 'react';
import Body from './Body';
import data from '../data/mockData.json';
import '../styles/Main.css';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';

class Main extends Component{
    state = {page: 1, displayedFirstPageButton: 1};

    changePage= e =>{
        let targetPage = e.target.innerText;
        if(this.state.page != targetPage)
        {
            if(targetPage == this.state.displayedFirstPageButton+3)
                this.rightShiftPages();
            else if(targetPage == this.state.displayedFirstPageButton)
                this.leftShiftPages();
            this.setState({page:targetPage});
        }
    }

    rightShiftPages = () =>{
        let length = data.length;
        let numPages = length/8;
        if(length%8>0)
            numPages++;
        let start = this.state.displayedFirstPageButton;
        if(start+3<Math.floor(numPages))
        {
            this.setState({displayedFirstPageButton:(start+1)});
        }
    }

    leftShiftPages = () =>{
        let length = data.length;
        let numPages = length/8;
        if(length%8>0)
            numPages++;
        let start = this.state.displayedFirstPageButton;
        if(start>1)
        {
            this.setState({displayedFirstPageButton:(start-1)});
        }
    }

    placeDotsAtEnd = () =>{
        let length = data.length;
        let numPages = length/8;
        if(length%8>0)
            numPages++;
        let start = this.state.displayedFirstPageButton;
        if(start+3<Math.floor(numPages))
        {
            return (<div className="dots"> ... </div>);
        }
    }

    placeDotsAtStart = () =>{
        let length = data.length;
        let numPages = length/8;
        if(length%8>0)
            numPages++;
        let start = this.state.displayedFirstPageButton;
        if(start>1)
        {
            return (<div className="dots"> ... </div>);
        }
    }

    createColumns(num)
    {
        var columns = [];
        let className;
        let start = this.state.displayedFirstPageButton;
        if(num<5)
        {
            for (let i = 1; i <= num; i++) {
                if(i==this.state.page)
                    className = "page selected";
                else
                    className = "page";
                columns.push(<td><button className={className} onClick={this.changePage}>{i}</button></td>);
            }
        }
        else
        {
            columns.push(<td><button className="pageArrow" onClick={this.leftShiftPages}><img className="buttonIcon" src={leftArrow}/></button>{this.placeDotsAtStart()}</td>);
            for (let i = start; i <= start+3; i++) {
                if(i==this.state.page)
                    className = "page selected";
                else
                    className = "page";
                columns.push(<td><button className={className} onClick={this.changePage}>{i}</button></td>);
            }
            columns.push(<td>{this.placeDotsAtEnd()}<button className="pageArrow" onClick={this.rightShiftPages}><img className="buttonIcon" src={rightArrow}/></button></td>);
        }
        return columns;
    }

    render(){
        let length = data.length;
        let numPages = length/8;
        if(length%8>0)
            numPages++;
        return (
            <div style={{height: "100%"}}>
                <Body page={this.state.page}/>
                <div id="pages">
                    <table>
                        <tr>
                            {this.createColumns(numPages).map(column=>{
                                return column;
                            })}
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Main;