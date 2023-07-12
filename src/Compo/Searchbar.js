import React from 'react'
import './Searchbar.css'
export default function Searchbar() {
  return (
    <div>
        <br/>
        <form className="d-flex" style={{"justifyContent":"center"}}>
        <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  )
}
