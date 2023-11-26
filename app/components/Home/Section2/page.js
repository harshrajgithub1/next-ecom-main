"use client"

import React from 'react'
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcCheckmark } from "react-icons/fc";

const page = () => {
  const [selectedCategories, setSelectedCategories] = useState();
  
  let api_category = 'http://45.79.185.26/trifusa/public/api/category';

  const handleCategoryClick = (selectedCategoryId) => {
    console.log(selectedCategoryId);
    setSelectedCategories((prevItems) => {
      const updatedCategories = prevItems.map((item) =>
        item.id === selectedCategoryId ? { ...item, isSelected: !item.isSelected } : item
      );
  
      // Check the number of selected categories
      const selectedCount = updatedCategories.filter((item) => item.isSelected).length;
  
      // If the selected count exceeds 3, do not update the state
      if (selectedCount <= 3) {
        return updatedCategories;
      } else {
        toast.error("You can select upto only 3 categories");
        return prevItems;
      }
    });
  };
  

  function getCategoriesInfo(){
      fetch(api_category, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
          },
      // body: formBody
      })
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.success == "true") {
            let res = responseJson.category.map((item) => ({
              ...item,
              isSelected: false, // Replace 'defaultValue' with the desired default value
            }));
            setSelectedCategories(res);
              //console.log(headerData.home_page_image)
          }
      })
      .catch((error) => {
          console.error(error);
      });
  }
  useEffect(() => {
    getCategoriesInfo();
  }, []);
  
  useEffect(() => {
    console.log("After:", selectedCategories);
  }, [selectedCategories]);
  

//console.log(headerData?.img_para_1);


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
                      src={`http://45.79.185.26/trifusa/public/storage/category/${category?.cat_image}`}
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
