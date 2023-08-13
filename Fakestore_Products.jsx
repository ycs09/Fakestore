import { useParams,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";


export function Fakestore_Products(){
    const param=useParams(); 
    const [products,setProducts]=useState([]);

    useEffect(()=>{
                   axios({
                    method:"get",
                    url:`https://fakestoreapi.com/products/category/${param.catName}`
                        })
                        .then(res=>setProducts(res.data))},[]);
                           
    return(<div className="container-fluid">
            <h2>{param.catName} Products</h2>
             <div className="d-flex flex-wrap">
             {
              products.map(product=><div key={product.id} className="border border-2 border-primary p-2 m-1">
                                        <Link to={`/Details/${product.id}`} >
                                            <img src={product.image} style={{width:"200px",height:"200px"}}/>
                                        </Link>
                                        </div>)  
            }
             </div>
             <button className="btn btn-primary mt-3">
                <Link to="/home" className="text-decoration-none text-white" >Back TO</Link><span className="ms-2 bi bi-house-down"></span>
             </button> 
          </div>)
                                    }