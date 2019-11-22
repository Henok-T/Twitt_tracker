import React, { Component } from 'react';
import './watchList.style.css';

class WatchList extends Component {
    render() {
        return (
            <div className='addToList'>
                <form className="" onSubmit={this.props.addItem}>
                    <input
                        placeholder="Enter Stock name here"
                        value={this.props.currentItem.text}
                        onChange={this.props.handleInput}
                        className="form-control"
                    />
                    <button type="submit" className='btn btn-primary mb-2'> Add Stock </button>
                </form>
            </div>
        );
    }
};

export default WatchList;