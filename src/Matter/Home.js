import React,{useEffect,useState} from 'react'
import Header1 from '../Compo/Header1'
import Footer from '../Compo/Footer1'
import Section from '../Compo/Section'
import Searchbar from '../Compo/Searchbar'

export default function Home() {



    const {medicinescat,setmedcat} = useState({});
    const [meditem,setmeditem] = useState({});

    const givedata = async()=>{
        let response = await fetch("http://localhost:5000/api/meddata",{
            method: "POST" ,
            headers: {
                'Content-type':'application/json'
            }
        });

        response = await response.json();
        
    }


    useEffect(()=>{
        useData();
    },[])






    return (
        <div>
            <div>
                <Header1 />
            </div>
            <div>
                <Searchbar/>
            </div>
            <div className='container'>
                {
                    medicinescat!==[] 
                    ? medicinescat.map((data)=>{
                        return(
                            <div>{data.CategoryName}</div>
                        )
                        
                    })
                    : <div> </div>
                }
                <Section/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
