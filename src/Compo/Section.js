import React from 'react'
import './Section.css'
// import './one.jpg'
export default function Section() {
  return (
    <div>
        <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="C:\Users\harma\OneDrive\Desktop\medishop\project1\src\Compo\IMAGES\one.jpg" className="card-img-top" alt="HERE" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to </p>
                        <div className='container' style={{ "width": "200px" }}>
                            <select className='heads'>
                                {
                                    Array.from(Array(7), (e,i)=>{
                                        return(
                                            <option key={i+1} value={i+1}>
                                                {i+1}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <select className='heads2'>
                                <option value="99-99.7">99-99.7</option>
                                <option value="99.8-100.6">99.8-100.6</option>
                                <option value="100.7-102">100.7-102</option>
                            </select>
                            <div className='recomm'>
                                Recommended Medicine (in mg)
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
  )
}
