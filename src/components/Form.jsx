import React, { Component } from 'react'
import { fetchSearchData } from '../service/apiclient';

export default class search extends Component {
    state = { location: null, animalType: null, price: null }
    handleLocationChange = (e) => {
        this.setState({ location: '&address=' + e.target.value });
    }
    handleAnimalTypeChange = (e) => {
        this.setState({ animalType: '&animalTypes[in]=' + e.target.value });
    }
    handlePriceChange = (e) => {
        document.getElementById('priceText').innerText = e.target.value;
        this.setState({ price: '&costAmount[lte]=' + e.target.value });
    }
    fetchSearchList = (e) => {
        e.preventDefault();
        let locationUrl = '';
        let animalTypeUrl = '';
        let priceUrl = '';
        if (this.state.location !== null && this.state.location !== '&address=') {
            locationUrl += this.state.location;
        } else {
            locationUrl = ''
        }
        if (this.state.animalType !== null && this.state.animalType !== '&animalTypes[in]=') {
            animalTypeUrl += this.state.animalType;
        } else {
            animalTypeUrl = ''
        }
        if (this.state.price !== null && this.state.price !== '&costAmount[lte]=') {
            priceUrl += this.state.price;
        } else {
            priceUrl = ''
        }
        fetchSearchData(locationUrl + animalTypeUrl + priceUrl).then(allData => {
            console.log(allData)
        })
    }
    render() {
        return (
            <div className="formBackground">
                <form >
                    <fieldset className="form">
                        <label><h5>Search for Pet Hotel</h5></label>
                        <label>Location</label><br />
                        <select name="location" onChange={this.handleLocationChange}>
                            <option select="true" value={null}></option>
                            <option value="233 Bay State Rd Boston MA 02215">233 Bay State Rd Boston MA 02215</option>
                            <option value="Keilaranta">666 Keilaranta</option>
                        </select>
                        <br /><br />
                        <label>Animal Types</label><br />
                        <select name="animalTypes" onChange={this.handleAnimalTypeChange}>
                            <option select="true" value={null}></option>
                            <option value="Dogs">Dogs</option>
                            <option value="Cats">Cats</option>
                        </select>
                        <br /><br />
                        <label htmlFor='form_price'>Maximum price</label><br />
                        <input type="range" min="0" max="100" onChange={this.handlePriceChange}></input><br /><br />
                        <p id="priceText">this bitch empty</p>
                        <button onClick={this.fetchSearchList}>Search</button>
                    </fieldset>
                </form>
            </div>

        )
    }
}
