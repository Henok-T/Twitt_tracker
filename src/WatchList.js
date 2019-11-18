import React, { Component } from 'react';
import './watchList.style.css';

class WatchList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()

    }
    render() {
        // console.log(this.props + 'props from Watchlist render');
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder="Stock name"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit"> Add Stock </button>
                    </form>
                </div>
            </div>

        );
    }
};

export default WatchList;