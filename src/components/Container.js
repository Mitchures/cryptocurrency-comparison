import React, { Component } from 'react'
import Cryptocurrency from './Cryptocurrency'
import axios from 'axios'

class Container extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      loaded: false,
      limit: 5
    }
  }

  getCryptoData (newLimit) {
    axios({
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/' + process.env.GATSBY_API_URL,
      params: {
        start: 1,
        limit: 5000,
        convert: 'USD'
      },
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-CMC_PRO_API_KEY': process.env.GATSBY_API_KEY
      }
    })
      .then(res => {
        console.log(res)
        let numItems = this.state.limit
        if(newLimit) numItems = this.state.limit + newLimit
        const result = res.data.data.splice(0, numItems).map(currency => currency)
        this.setState({
          loaded: true,
          data: result,
          limit: numItems
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount () {
    this.getCryptoData()
  }

  render() {
    let crypto = this.state.data.map((currency) =>
      <Cryptocurrency data={currency} key={currency.id} />
    );
    return this.state.loaded ? (
        <div className="container">
          <div className="crypto-container">{crypto}</div>
          <div className="load-more" onClick={() => this.getCryptoData(5)}>Load More</div>
        </div>
      )
      : <div className="container">
        <div className="loading-box">
          <p>Loading Crypto...</p>
        </div>
      </div>
  }
}

export default Container
