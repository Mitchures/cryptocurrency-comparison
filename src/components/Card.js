import React, { Component } from 'react'
import Cryptocurrency from './Cryptocurrency'
import axios from 'axios'

class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      loaded: false
    }
  }

  getCryptoData () {
    axios({
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/' + process.env.GATSBY_API_URL, // for local testing use: 'https://cors-anywhere.herokuapp.com/' + process.env.API_URL
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
        const cc = ['bitcoin', 'bitcoin-cash', 'ripple', 'ethereum', 'litecoin', 'stellar', 'basic-attention-token', 'funfair', 'request', 'augur']
        const result = res.data.data.filter(currency => cc.includes(currency.slug))
        this.setState({
          loaded: true,
          data: result
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
    let card = this.state.data.map((currency) =>
      <Cryptocurrency data={currency} key={currency.id} />
    );
    return this.state.loaded ? (
        <div className="container">
          <div className="card">{card}</div>
        </div>
      )
      : <div className="container">
        <div className="loading-box">
          <p>Loading Crypto...</p>
        </div>
      </div>
  }
}

export default Card
