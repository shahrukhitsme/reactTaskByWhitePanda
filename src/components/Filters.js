import React, {Component} from 'react';
import '../styles/Filters.css'

class Filters extends Component{
    render(){
        return (
            <div className="filters">
                <select>
                    <option value="allContent">All Content Categories</option>
                    <option value="eBooks">eBooks</option>
                    <option value="paperback">Paperback</option>
                </select>
                <select>
                    <option value="allContent">All Industries</option>
                    <option value="travel">Travel & Tourism</option>
                    <option value="higherEd">Higher Education</option>
                </select>
                <select>
                    <option value="choose">Status</option>
                    <option value="revisionRequested">Revision Requested</option>
                    <option value="editorialReview">Editorial Review</option>
                    <option value="completed">Completed</option>
                    <option value="deadlineMissed">Deadline Missed</option>
                </select>
                <button id="clearFilterBtn">Clear All</button>
                <div id="sortDiv" style={{display:"inline-block"}}>
                <div style={{display:"inline-block"}}>Displaying 1-8 of 123 jobs</div>
                <select>
                <option>Least Time Left First</option>
                <option>Most Time Left First</option>
                </select>
                </div>
            </div>
        );
    }
}

export default Filters;