import React, { Component } from 'react';
import Data from '../components/Data';
import { fetchFrontPageData } from '../service/apiclient';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { allData: [] }
    }
    componentDidMount() {
        this.fetchDataList();
    }
    fetchDataList = () => {
        fetchFrontPageData().then(allData => {
            this.setState({ allData });
        })
    }
    render() {
        if (!this.state.allData.data) {
            return <p>Loading...</p>
        }
        console.log(this.state.allData)
        const dataItems = this.state.allData.data
            .map((data) => {
                return <Data {...this.props} data={data} key={data._id} />
            })
        return (
            <div className="content">
                <h1>Check out our newest petshitters!</h1>
                <div className="advertContainer">
                    {dataItems}
                </div>
                <p>Currently {this.state.allData.total} adverts on our site.</p>
            </div>
        )
    }
}