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
                            <div className="cards bg-light  text-dark mb-2 border border-info rounded text-left" key={index.toString()}>
                                <div className="card-body py-0 pb-1 clearfix">
                                    <p className="card-text">
                                        <span className='twitBody'><span className="font-weight-bold"> </span> {msg.body}</span><br />
                                        <span className='rounded px-1 py-1 mr-2 userName'> {msg.user.name}  </span>
                                        <span className='rounded px-1 py-1 mr-2 twitDate'> {msg.created_at} </span>
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

