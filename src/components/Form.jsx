import React, { Component } from 'react'

export default class search extends Component {
    render() {
        return (
            <div className="formBackground">
                    <form > 
                        <fieldset className="form">
                            <legend>Search for Pet Hotel</legend>
                            <label htmlFor='form_title'>Location</label><br />
                            <input type='text' placeholder='Location' id='form_title' onChange={this.handleTitleChange} required='required' /><br />
                            <label htmlFor='form_legend'>Animal Type</label><br />
                            <input type='text' placeholder='Animal Type' id='form_title' onChange={this.handleTitleChange} required='required' /><br />
                            <label htmlFor='form_starttime'>Maximun price cheap mothafukka</label><br />
                            <input type='number' autoComplete='off' id='form_starttime' onChange={this.handleStartTimeChange} /><br />
                            <input type='submit' className="addButton" value='Search' onClick={this.handleCreateClick} /><br />
                        </fieldset>
                    </form>
            </div>
        )
    }
}
