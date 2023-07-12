import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
    <footer className="bd-footer py-5 mt-5 bg-dark">

    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3 mb-3">
        </div>
        <div className="col-6 col-lg-2 offset-lg-1 mb-3">
          <h5>Links</h5>
          <ul class="list-unstyled">
            <li className="mb-2 fontcolor-white"><Link href="/">Home</Link></li>
            <li className="mb-2"><Link href="/docs/5.0/">Docs</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer></div>
  )
}
