import React from "react";
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { Home } from "./Fakestore_home";
import { Fakestore_Products } from "./Fakestore_Products";
import { Fakestore_Details } from "./Fakestore_Details";


export function FakeStore_Index001(){

    return(<div className="container-fluid" style={{width:"100%"}}>
             <BrowserRouter>
             <header className="d-flex justify-content-between bg-dark text-white m-1 p-3 rounded-top">
                <div>shopper.</div>
                <div>
                    <snap className="me-2">
                        <Link to="home" className="text-white text-decoration-none">Home</Link>
                    </snap>
                    <snap className="me-2">Electronics</snap>
                    <snap  className="me-2">Jewelery</snap>
                    <snap  className="me-2">Men's Clothing</snap>
                    <snap  className="me-2">Womens Clothing</snap>
                </div>
                <div>
                    <snap className="bi bi-person-fill me-2"></snap>
                    <snap className="bi bi-heart me-2"></snap>
                    <snap className="bi bi-search me-2"></snap>
                    <snap className="bi bi-cart3 me-2"></snap>
                </div>
                </header>
                <section className="mt-3 overflow-auto" style={{height:"500px"}}>
                    <Routes>
                        <Route path="/" element={<Home />}     />
                        <Route path="home" element={<Home />}  />
                        <Route path="/products/:catName"  element={<Fakestore_Products />} />
                        <Route path="/Details/:productId" element={<Fakestore_Details />}  />
                        <Route path="*" element={<div>
                                                  <h2><code>Page is not availble</code></h2>
                                                 </div>} />
                    </Routes>
                </section>
             </BrowserRouter>  
           </div>)
                                  }