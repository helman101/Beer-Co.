import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saleFilter, priceFilter, typeFilter } from '../slice/beer/beerSlice'

const NavAside = () => {
  const onSale = useSelector((state) => state.beers.onSaleFilter)
  const dispatch = useDispatch()

  const handlePriceClick = (e) => {
    switch (e.target.id) {
      case '1':
        dispatch(priceFilter({max: 20, min: 0}))
        break;
      case '2':
        dispatch(priceFilter({max: 50, min: 20}))
        break;
      case '3':
        dispatch(priceFilter({max: 100, min: 50}))
        break;
      case '4':
        dispatch(priceFilter({max: 200, min: 100}))
        break;
      case '5':
        dispatch(priceFilter({max: 10000, min: 200}))
        break;
      default:
        dispatch(priceFilter(null))
        break;
    }
  }

  const handleTypeClick = (e) => {
    dispatch(typeFilter(e.target.innerText))
  }

  const types = [
    {
        "type": "Lager",
        "id": 127
    },
    {
        "type": "Malt",
        "id": 133
    },
    {
        "type": "Ale",
        "id": 137
    },
    {
        "type": "Flavoured Malt",
        "id": 141
    },
    {
        "type": "Non-Alcoholic Beer",
        "id": 180
    },
    {
        "type": "Stout",
        "id": 581
    },
    {
        "type": "Porter",
        "id": 936
    }
  ]

  return (
    <div>
      <details className="nav-aside-item">
        <summary>Disponibilita</summary>
        <div className="aside-list">
          <input onChange={() => dispatch(saleFilter())} name="sale" type="checkbox" checked={onSale}/>
          <label>In Sconto</label>
        </div>
      </details>
      <details className="nav-aside-item">
        <summary>Prezzo</summary>
        <div className="aside-list" onClick={handlePriceClick}>
          <div id="0">Senza filtro</div>
          <div id="1">A meno di 20 EUR</div>
          <div id="2">20 - 50 EUR</div>
          <div id="3">50 - 100 EUR</div>
          <div id="4">100 - 200 EUR</div>
          <div id="5">200 EUR e piu</div>
        </div>
      </details>
      <details className="nav-aside-item">
        <summary>Tipo</summary>
        <div className="aside-list" onClick={handleTypeClick}>
          <div>Senza filtro</div>
          {types.length > 0 && types.map((type) => (
            <div key={type.id}>{type.type}</div>
          ))}
        </div>
      </details>
    </div>
  )
}

export default NavAside;
