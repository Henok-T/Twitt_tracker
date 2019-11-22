import React, { Component } from 'react';

class StockItems extends Component {
    addStocks = item => {
        return (
            <div className="cards bg-light text-dark mb-2 border border-info rounded text-left">
                <div className="card-body py-2 text-center ">
                    <li key={item.key}>{item.text.toUpperCase()}
                        <span className='card-link bnt btn-info rounded ml-4 py-1 px-1 ' onClick={this.props.loadTiwtts.bind(this, item.text)}>Twits</span>
                        <span className='card-link bnt btn-warning rounded float-right mr-4  px-1 ' onClick={() => this.props.deleteItem(item.text, item.key)}>Delete</span>
                    </li>
                </div>
            </div>
        )
    }

    render() {
        const stockEntries = this.props.entries
        const listItems = stockEntries.map(this.addStocks)

        return (
            <ul className='watchListItems py-2 rounded justify-content-center'>
                <h6>My Watch-List</h6>
                {listItems}
            </ul>
        );
    }
}

export default StockItems;