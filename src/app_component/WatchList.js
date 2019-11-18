import React from 'react';
import './watchList.style.css';

class WatchList extends React.Component {
    render() {
        console.log(this.props + 'props from Watchlist');
        return (
            <div className="container watchlistItems">
                <ul className="list" data-area>
                    {

                        this.props.watchlist_items.map((ticker_symbol, index) => {
                            return (
                                <li key={index}>

                                    <span>{ticker_symbol.watchlist_items}</span>

                                </li>

                            );
                        })

                    }
                </ul>
            </div >

        );
    }
};

export default WatchList;