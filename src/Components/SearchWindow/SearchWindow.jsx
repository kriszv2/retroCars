import React from 'react'
import "./SearchWindow.css"

export default function SearchWindow() {
  return (
    
    <>
    <div className="quickSearchBox">
        <form method='get'>
          <div className='leftSide'>
          <select name="make">
        
        <option>Makes...</option>
        <option>Audi</option>
        <option>BMW</option>
        <option>Vauxhalla</option>
        <option>Volvo</option>
        <option>Jaguar</option>
        <option>Bugatti</option>
        

        </select>
        <select name="bodyTypes">
        
        <option>Body types...</option>
        <option>Hatchback</option>
        <option>SUV</option>
        <option>Coupe</option>
        <option>Convertible</option>
        <option>Estate</option>
        <option>Saloon</option>
        </select>
        <select name="driveTypes">
        
        <option>Drive type...</option>
        <option>Four wheel drive</option>
        <option>Front wheel drive</option>
        <option>Rear wheel drive</option>
        
        </select>
        <select name="colours">
        
        <option>Colours...</option>
        <option>Black</option>
        <option>White</option>
        <option>Blue</option>
        
        </select>
        <select name="doors">
        
        <option>Doors...</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        
        </select>
        <select name="gearbox">
        
        <option>Gearbox...</option>
        <option>Manual</option>
        <option>Auto</option>
        <option>Semi-auto</option>
        </select>
          </div>
        <div className="rightSide">
        <input type="number" name='minPrice' placeholder='Minimum price'/>
        <input type="number" name='maxPrice' placeholder='Maximum price'/>
        <input type="number" name='minAge' placeholder='Minimum age'/>
        <input type="number" name='maxAge' placeholder='Maximum age'/>
        
        </div>
        
        <input className="submitButton" type="submit" />
        </form>
        
        
    </div>
    </>
  )
}
