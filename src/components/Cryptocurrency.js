import React, { Component } from 'react'
import NumberFormat from 'react-number-format'

class Cryptocurrency extends Component {
  render () {
    const {
      id,
      name,
      symbol,
      quote,
    } = this.props.data

    return (
      <div className={'cryptocurrency ' + id}>
        <div className="coin">
          <div className="coin-left">
            <img src={'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d685b4cd3b9a91faab0541e5065c76fb616913ec/svg/color/' + symbol.toLowerCase() + '.svg'} alt={symbol} />
          </div>
          <div className="coin-content">
            <h3 className="cryptocurrency-name">{name} ({symbol})</h3>
            <h1 className="cryptocurrency-price"><NumberFormat value={quote.USD.price} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></h1>
            <h3 className={quote.USD.percent_change_1h > 0 ? 'percentage-increase' : 'percentage-decrease'}>{quote.USD.percent_change_1h}%</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Cryptocurrency