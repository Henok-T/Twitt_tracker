import React, { Component } from 'react';

class StockItems extends Component {
    addStocks = item => {
        return (
            <li className='py-1 mb-2 border border-info rounded' key={item.key} >${item.text} <br />
                <div className='wathclistbtns'>
                    <span className='mr-2 px-2 py-2 card-link bnt btn-info rounded' onClick={this.props.loadTiwtts.bind(this, item.text)}> Get Twits</span>
                    <span className='ml-2 px-2 py-2 card-link bnt btn-danger rounded' onClick={() => this.props.deleteItem(item.key)}>Delete</span>
                </div>
            </li>
        )
    }


    render() {
        const stockEntries = this.props.entries
        const listItems = stockEntries.map(this.addStocks)

        return <ul className='watchListItems w-25 rounded'>
            <h4>My Watch-List</h4>
            {listItems}
        </ul>

    }

}


export default StockItems;