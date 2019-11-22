import React from 'react';



class StockTwits extends React.Component {
    render() {
        return (
            <div className="rounded clearfix py-2 " id='twittMessageItems'>
                <h6>Twitt List
                     {this.props.twitt.symbol && ` for $ ${this.props.twitt.symbol.symbol}`}
                    {this.props.twitt.messages && ` Count: ${this.props.twitt.messages.length}`}
                </h6>

                {
                    this.props.twitt.messages.map((msg, index) => {
                        return (
                            <div className="cards bg-light text-dark mb-2 border border-info rounded text-left" key={index.toString()}>
                                <div className="card-body">
                                    <p className="card-text">
                                        <span className='py-4'> {msg.user.name} @{msg.created_at} posted: </span><br />
                                        <span className='py-4'><span className="font-weight-bold"> </span> {msg.body}</span><br />

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

