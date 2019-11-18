import React from 'react';


class StockTwits extends React.Component {
    render() {
        console.log(this.props + 'props value from StockTwits');
        return (
            <div className="container">
                <h1>Twitt List for ${this.props.ticker_symbol} </h1>
                {   //fn2 map?
                    this.props.twitt.messages.map((msg, index) => {
                        return (
                            <div className="cards bg-light text-dark mb-2 border border-info rounded text-left" key={index.toString()}> {/* fn1: Key?? */}
                                <div className="card-body">
                                    <p className="card-text">
                                        <span className='py-4'><span className="font-weight-bold">Body:</span> {msg.body}</span><br />
                                        <span className='py-4'><span className="font-weight-bold">Twtted:</span> {msg.created_at}</span><br />
                                        {/* <span className="card-link bnt btn-primary px-1 py-1 rounded">Learn more</span>
                                        <span className="card-link bnt btn-danger px-1 py-1 rounded">Delete</span> */}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }
            </div >
        );
    }
};

export default StockTwits;

//Footnotes: 
//fn1: we are providing a unique key to each element in the array, so that when updating, 
//      it only updates the element which needed the update. 
//      Without this unique key, using react is useless. 

// fn2: Map is a loooping function  which returns a new array eveytime it updates. It is a built-in array function. 