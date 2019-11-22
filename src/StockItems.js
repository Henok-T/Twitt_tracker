import React, { Component } from 'react';

class StockItems extends Component {
    addStocks = item => {
        return (
            <li className='py-1 mb-2 border border-info rounded' key={item.key} >{item.text}

                <span className='ml-2 px-2 py-2 card-link bnt btn-info rounded' onClick={this.props.loadTiwtts.bind(this, item.text)}>Twits</span>
                <span className='ml-2 px-2 py-2 card-link bnt btn-danger rounded' onClick={() => this.props.deleteItem(item.text, item.key)}>Delete</span>

            </li>
        )
    }

    render() {
        const stockEntries = this.props.entries
        const listItems = stockEntries.map(this.addStocks)

        return (
            <ul className='watchListItems rounded'>
                <h6>My Watch-List</h6>
                {listItems}
            </ul>
        );
    }
}

export default StockItems;