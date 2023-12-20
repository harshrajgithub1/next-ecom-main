"use client"

import React from 'react'
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcCheckmark } from "react-icons/fc";
import { apiUrl } from '@/app/constant/constant';

import Link from 'next/link';
const Section2 = () => {
  const [selectedCategories, setSelectedCategories] = useState();
  const [selectedAllCategories, setSelectedAllCategories] = useState([]);

  const handleCategoryClick = (selectedCategoryId) => { 
    setSelectedAllCategories((c) => ({ ...c, cat:selectedCategoryId }));
    setSelectedCategories((prevItems) => {
      
      const updatedCategories = prevItems.map((item) =>
        item.id === selectedCategoryId ? { ...item, isSelected: !item.isSelected } : item
      
      );
      
      // Check the number of selected categories
      const selectedCat = updatedCategories.filter((item) => item.isSelected);

      //get selected id only
      const selectedCatIds = selectedCat.map((item) => item.id);
      localStorage.setItem("selectedCatIds", JSON.stringify(selectedCatIds));
      setSelectedAllCategories(selectedCatIds);
      console.log(selectedCatIds)
      //get length
      const selectedCount=selectedCat.length;
      

      localStorage.setItem("selectedCatIds", JSON.stringify(selectedCatIds));

      if (selectedCount == 2) {
        toast.warning("You can select one more category");
      } else if(selectedCount >3){
        toast.error("You need premium subscription");
        return prevItems;
      }


      return updatedCategories;
      
    });
    
  };
  function handleClick() {
    const dataToSend = selectedCategories.filter(x=>x.isSelected == true);
    let ids = [];
    for(let i=0; i < dataToSend.length; i++){
      ids.push(dataToSend[i].id);
    } 
    console.log(ids);
    //how to send props to another page and also how to get props in another page
  }
  console.log(handleClick);

  function getCategoriesInfo(){
      fetch(`${apiUrl}api/category`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
          },
      // body: formBody
      })
      .then((response) => response.json())
      .then((responseJson) => {
          //console.log(responseJson);
          if (responseJson.success == "true") {
            let res = responseJson.category.map((item) => ({
              ...item,
              isSelected: false, // Replace 'defaultValue' with the desired default value
              }));
             setSelectedCategories(res);
              //console.log(headerData.home_Section2_image)
          }
      })
      .catch((error) => {
          console.error(error);
      });
  }

 
  useEffect(() => {
    getCategoriesInfo();
  }, []);
  
  // useEffect(() => {
  //   console.log("After:", selectedCategories);
  // }, [selectedCategories]);
  
 
//console.log(updatedCategories);


  return (
    <div>
       <section
        id="features-6"
        className="pt-100 pb-50 features-section division"
      >
        <div className="container">
          
          <div className="fbox-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {selectedCategories &&
              selectedCategories.map((category) => (
              <div className="col" key={category.id}>
            
                <div className={`fbox-6 fb-1 wow fadeInUp ${category.isSelected ? 'active' : ''}`} 
                  onClick={() => handleCategoryClick(category.id)}>
                  <div className="img-style">
                    <img
                      src={`${apiUrl}storage/category/${category?.cat_image}`}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="check-icon">
                    <FcCheckmark/>
                  </div>
                  <div className="fbox-txt">
                  {category?.isSelected}
                    <h6 className="s-20">{category?.cat_name}  </h6>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <button className='btn btn-success btn-full' onClick={handleClick}>Click me!</button>
           
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section2
