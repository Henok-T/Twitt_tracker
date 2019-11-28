import React from 'react';
import moment from 'moment';



class StockTwits extends React.Component {
    render() {
        console.log(this.props.twitt);
        if (this.props.twitt.messages.length === 0) {
            return null;
        }

        return (

            // <div>
            //     {this.state.isLoading &&
            //         <div>Loading.. please wait!</div>
            //     }
            //     {!this.state.isLoading &&
            //         <div>My data has arrived!</div>
            //     }
            // </div>

            <div className="rounded clearfix py-2 " id='twittMessageItems'>


                <h6>Twitt List for
                       <span id='tickerName'> {this.props.twitt.symbol && ` ${this.props.twitt.symbol.title} `}</span>
                    <span class='float-right' id='twittCount'>{this.props.twitt.messages && ` Total Twitts: ${this.props.twitt.messages.length}`}</span>
                </h6>

                {
                    this.props.twitt.messages.map((msg, index) => {

                        let postedImg = '';
                        let userAvatar = '';
                        if (msg.entities.chart) {
                            postedImg = msg.entities.chart.url;

                        }
                        if (msg.user.avatar_url) {
                            userAvatar = msg.user.avatar_url;
                        }


                        return (
                            <div className="twittLista cards bg-light  text-dark mb-2 border border-info rounded text-left" key={index.toString()}>
                                <div className="card-body py-0 pb-1 clearfix">
                                    <p className="card-text">
                                        <object id='userImg' data={userAvatar} type="image/jpg"><div></div></object> <br />
                                        <span className='rounded mt-0 px-1 py-1 mr-2 userName'> {msg.user.name} </span>
                                        <span className='rounded  mt-0 px-1 py-1 mr-2 twitDate'> {moment(msg.created_at).format('MMM Do YY, h:mm:ss a')} </span><br />
                                        <span className='twitBody'><span className="font-weight-bold"> </span> {msg.body}</span><br />
                                        <object id='imgInPost' data={postedImg} type="image/jpg"><div></div></object>
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

