import React, { Component } from 'react';

class StockItems extends Component {
    addStocks = item => {
        return (
            <div className=" bg-light text-dark mb-2 py-2 border border-info rounded d-flex justify-content-around">
                <li className=' text-light py-2 bg-dark py-1 px-2  rounded font-italic' id='tickerSymbol' key={item.key}>${item.text.toUpperCase()}</li>
                <li className=' py-2 px-1' id='twittBtn' onClick={this.props.loadTiwtts.bind(this, item.text)}>Twits</li>
                <li className='  pt-2 px-2 ' id='dltBtn' onClick={() => this.props.deleteItem(item.text, item.key)}>X</li>
            </div>
        )
    }

    render() {
        const stockEntries = this.props.entries
        const listItems = stockEntries.map(this.addStocks)

        return (
            <ul className='watchListItems py-2 rounded '>
                <h6>My Watch-List</h6>
                <span>{listItems}</span>
            </ul>
        );
    }
}

export default StockItems;