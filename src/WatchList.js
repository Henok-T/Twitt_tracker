import React, { Component } from 'react';
import './watchList.style.css';

class WatchList extends Component {
    render() {
        return (
            <div className='addToList rounded'>
                <form className="" onSubmit={this.props.addItem}>
                    <input
                        placeholder="Enter Stock name here eg. AAPL, AMZN"
                        value={this.props.currentItem.text}
                        onChange={this.props.handleInput}
                        className="form-control"
                    />
                    <button type="submit" id='addStockBtn' className='btn  mb-2'> Add Stock </button>
                </form>
            </div>
        );
    }
};

export default WatchList;