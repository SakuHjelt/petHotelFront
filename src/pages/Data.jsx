import React, { Component } from 'react'

export default class Data extends Component {
    render() {
        const { costAmount, title, costType, address } = this.props.data;
        return (
            <div className="advert">
                <h2>{title}</h2>
                <p>
                    <b>Address: </b>
                    {address}
                </p>
                <p>
                    <b>Cost: </b>
                    {costAmount}€ per {costType}
                </p>
            </div>
        )
    }
}
