import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export function Home(){
   const [categories,setCategories]=useState([])
    
    useEffect(()=>{
      axios({
         method:"get",
         url:"https://fakestoreapi.com/products/categories"
         })
         .then(res=>setCategories(res.data))
            },[])

    return(<div className="container-fluid" >
      <h2>CATEGORIES</h2>
           <ol className="text-dark">
            {
             categories.map(cate=><li key={cate}>
                                      <Link to={`/products/${cate}`}  className="text-decoration-none text-dark" >{cate.toUpperCase()}</Link> 
                                            </li>)                           
            }
           </ol>            
         </div>)
                    }