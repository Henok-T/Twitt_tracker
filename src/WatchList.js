import React, { Component } from 'react';
import './watchList.style.css';

class WatchList extends Component {
    // componentDidUpdate() {
    //     this.props.inputElement.current.focus()

    // }
    render() {
        // console.log(this.props, 'props from Watchlist render');
        return (
            <div className='addToList'>
                <form className="form-inline align-items-center" onSubmit={this.props.addItem}>
                    <input
                        placeholder="Enter Stock name here"
                        // ref={this.props.inputElement}
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