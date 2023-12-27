
"use client"
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import { apiUrl } from '@/app/constant/constant';

const Product = () => {

    const [productData, setProductData] = useState([]);
    let selectedids = [];

    function getAllProducts(){
        fetch( `${apiUrl}api/products`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        // body: formBody
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson.success === "true") {
                setProductData(responseJson.category);
                //console.log(headerData.home_page_image)
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    function getAllProductsCategoryWise(){
        const ids ={
            "category_ids":[2,3,7]
        };
        fetch(`${apiUrl}api/product/categorywise`, {
            method: 'POST',
            body: JSON.stringify(ids),
            headers: {
                'Content-Type': 'application/json'
            },
        // body: formBody
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson.success === "true") {
                setProductData(responseJson.data);
                //console.log(headerData.home_page_image)
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        const ids = JSON.parse(localStorage.getItem("selectedCatIds"));
        console.log(ids);
        if(4<5){
            getAllProducts();

        }
        else{
            getAllProductsCategoryWise();
        }
        
    }, [])


    return (
        <div>
          
    
          <section className="banner" 
        //   style="background-image:url(assets/img/banner3.jpg)"
    
          style={{
            backgroundImage: `url(/assets/img/banner3.jpg)`,
            backgroundSize: 'cover', // You can adjust these styles as needed
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '540px', // Set the width and height as needed
          }}
          >
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="banner-caption">
                        <h3>Product</h3>
    
                        <ul className="breadcrumb">
                            <li><Link href="/">Start</Link></li>
                            <li>Product</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service py-100">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-lg-2">
                    <div className="sidebar-header">
                        <h3>Filter</h3>
                        <Link href="#">Collapse all</Link>
                    </div>
    
                    <div className="search">
                        <form action="">
                            <input type="search" name="" id="" placeholder="Keyword"/>
                            <button><i className="jki jki-search-light"></i></button>
                        </form>
                    </div>
    
                    <div className="sidebar">
                        <h3>Categories <Link href="#"><i className="jki jki-chevron-down-light"></i></Link></h3>
    
                        <div className="sidebar-inpup">
                            <div className="form-group">
                                <input type="checkbox" id="a1"/>
                                <label for="a1">System</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="a2"/>
                                <label for="a2">Compact</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="a3"/>
                                <label for="a3">Individual</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="a4"/>
                                <label for="a4">All</label>
                            </div>
                        </div>
                    </div>
    
                    <div className="sidebar">
                        <h3>Price
                            <Link href="#"><i className="jki jki-chevron-down-light"></i></Link>
                        </h3>
    
                        <div className="sidebar-inpup">
                            <div className="form-group">
                                <input type="checkbox" id="b1"/>
                                <label for="b1">Affordable</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="b2"/>
                                <label for="b2">Mid-range</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="b3"/>
                                <label for="b3">Expensive</label>
                            </div>
                        </div>
                    </div>
    
                    <div className="sidebar">
                        <h3>Manufacturer
                            <Link href="#"><i className="jki jki-chevron-down-light"></i></Link>
                        </h3>
    
                        <div className="sidebar-inpup">
                            <div className="form-group">
                                <input type="checkbox" id="c1"/>
                                <label for="c1">Manufacturer</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="c2"/>
                                <label for="c2">Manufacturer</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="a3"/>
                                <label for="a3">Manufacturer</label>
                            </div>
                        </div>
                    </div>
    
                    <div className="sidebar">
                        <h3>Compatibility
                            <Link href="#"><i className="jki jki-chevron-down-light"></i></Link>
                        </h3>
    
                        <div className="sidebar-inpup">
                            <div className="form-group">
                                <input type="checkbox" id="d1"/>
                                <label for="d1">iOS</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="d2"/>
                                <label for="d2">Android</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="d3"/>
                                <label for="d3">Windows</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="d4"/>
                                <label for="d4">All</label>
                            </div>
                        </div>
                    </div>
    
                    <div className="sidebar">
                        <h3>Connectivity
                            <Link href="#"><i className="jki jki-chevron-down-light"></i></Link>
                        </h3>
    
                        <div className="sidebar-inpup">
                            <div className="form-group">
                                <input type="checkbox" id="e1"/>
                                <label for="e1">Apple</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="e2"/>
                                <label for="e2">Google</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="e3"/>
                                <label for="e3">Native Apps</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="e4"/>
                                <label for="e4">All</label>
                            </div>
                        </div>
                    </div>
    
                    <div className="sidebar">
                        <h3>Handling
                            <Link href="#"><i className="jki jki-chevron-down-light"></i></Link>
                        </h3>
    
                        <div className="sidebar-inpup">
                            <div className="form-group">
                                <input type="checkbox" id="f1"/>
                                <label for="f1">Easy</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="f2"/>
                                <label for="f2">Medium</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="f3"/>
                                <label for="f3">Difficult</label>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="col-md-9 col-lg-10">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="about-2-title mb-60 text-center wow fadeInUp">
                                <span className="section-id">Vergleich</span>
                                <h2 className="s-52 mb-30">We Have <span>Many Service</span> Currentrly</h2>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                                    alias possimus
                                    vitae. Eveniet dicta voluptatem voluptatibus soluta vero enim iusto maxime cum
                                    corrupti odio
                                    nemo sed eaque velit, vitae similique!</p>
                            </div>
                        </div>
                    </div>
    

                    
                    <div className="row">
                      {productData.length && productData.map((category) => (
                         <div className="col-md-3" key={`${category.id}`}>
                            <div className="vergleich wow fadeInUp">
                                <div className="img-style">
                                    <img src={`${apiUrl}storage/product/${category?.pro_image}`} alt="" className="img-fluid"/>
                                 </div>
                                  <div className="content-style">
                                    <h3>{category?.pro_name}</h3>
                                    <p>{category?.pro_details}</p>
                                    <Link href="#">Compare</Link>
                                  </div>
                            </div>
                         </div>
                        ))} 
                    </div>
                 
                </div>
            </div>
        </div>
    </section>
    
        </div>
      )
}

export default Product