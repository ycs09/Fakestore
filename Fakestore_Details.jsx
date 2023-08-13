import { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";

export function Fakestore_Details(){
       
    const [details,setDetails]=useState({"id":0,"title":"","price":0,"category":"","image":"","rating":{}});
    const param=useParams();

    useEffect(()=>{
        axios({
                method:"get",
                url:`https://fakestoreapi.com/products/${param.productId}`
             })  
            .then(res=>setDetails(res.data))},[])

    return(<div className="container-fluid">
          <h2>Details</h2>
          <div >
            {
             <div className="d-flex flex-wrap">
                 <div className="border border-2 border-success " style={{width:"240px",height:"280px"}}  >
                      <img src={details.image} style={{width:"100%",height:"100%"}}  className="p-2" />
                </div>
              <div style={{width:"300px",height:"280px"}} className="ms-3">
                 <dl>
                    <dt>Title</dt>
                    <dd><snap className="bi bi-tags-fill text-me-1 text-success"> </snap>{details.title}</dd>
                    <dt>description</dt>
                    <dd className="overflow-auto" style={{height:"50px"}}><snap className="bi bi-tags-fill text-me-1 text-success"></snap>{details.description}</dd>
                    <dt>Price</dt>
                    <dd><snap className="bi bi-tags-fill text-me-1 text-success"></snap>{details.price}</dd>
                    <dt>Rating</dt>
                    <dd><snap className="bi bi-tags-fill text-me-1 text-success"></snap><snap className="bi bi-star-fill text-bg-success me-2"></snap>{details.rating.rate}
                             <snap className="ms-1">[{details.rating.count}]</snap>
                    </dd>
                 </dl>
              </div>  
             </div> 
             }
          </div>
         <button className="btn btn-primary mt-3 ">
         <Link to={`/products/${details.category}`} className="text-decoration-none text-white">
                   Return Products
            </Link>
         </button>
    </div>)
}