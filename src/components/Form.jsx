import React, { Component } from 'react'
import { fetchSearchData } from '../service/apiclient';

export default class search extends Component {
    state = { location: String, animalType: String, price: Number }
    handleLocationChange = (e) => {
        this.setState({ location: '&address=' + e.target.value })
    }
    handleAnimalTypeChange = (e) => {
        this.setState({ animalType: '&animalTypes[in]=' + e.target.value })
    }
    handlePriceChange = (e) => {
        this.setState({ price: '&costAmount=' + e.target.value })
    }
    fetchSearchList = (e) => {
        e.preventDefault();
        fetchSearchData(this.state.location + this.state.animalType + this.state.price).then(allData => {
            console.log(this.state.location, this.state.animalType, this.state.price)
            console.log(allData)
        })
    }
    render() {
        return (
            <div className="formBackground">
                <form >
                    <fieldset className="form">
                        <legend>Search for Pet Hotel</legend>
                        <label htmlFor='form_location'>Location</label><br />
                        <input type='text' placeholder='Location' id='form_location' onChange={this.handleLocationChange}/><br />
                        <label htmlFor='form_animal_type'>Animal Type</label><br />
                        <input type='text' placeholder='Animal Type' id='form_animal_type' onChange={this.handleAnimalTypeChange}/><br />
                        <label htmlFor='form_price'>Maximun price cheap mothafukka</label><br />
                        <input type='number' autoComplete='off' id='form_price' onChange={this.handlePriceChange} /><br />
                        <button onClick={this.fetchSearchList}>Search</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
