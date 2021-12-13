import React from 'react';

const NavAside = ({ types }) => {
    return (
    <div>
      {/* <details>
        <summary>DISPONIBILITA</summary>
        <div>
          <input type="checkbox">In Sconto</input>
        </div>
      </details>
      <details>
        <summary>PREZZO</summary>
        <div>
          <input type="radio">Senza filtro</input>
          <input type="radio">A meno di 20 EUR</input>
          <input type="radio">20 - 50 EUR</input>
          <input type="radio">50 - 100 EUR</input>
          <input type="radio">100 - 200 EUR</input>
        </div>
      </details>
      <details>
        <summary>TIPO</summary>
        <div>
          <input type="radio">Senza filtro</input>
          {types.map((type) => (
            <input type="radio">{type}</input>
          ))}
        </div>
      </details> */}
    </div>
  )
}

export default NavAside;
