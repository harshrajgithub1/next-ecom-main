

"use client";

import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcCheckmark } from "react-icons/fc";
import { apiUrl } from '@/app/constant/constant';
import Link from 'next/link';

const Section2 = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);

  const handleCategoryClick = (selectedCategoryId) => {
    const updatedCategories = selectedCategories.map((item) =>
      item.id === selectedCategoryId ? { ...item, isSelected: !item.isSelected } : item
    );

    const selectedCat = updatedCategories.filter((item) => item.isSelected);
    const selectedCatIds = selectedCat.map((item) => item.id);
    localStorage.setItem("selectedCatIds", JSON.stringify(selectedCatIds));
    setSelectedCount(selectedCat.length);
console.log(selectedCat.length);
if (selectedCat.length === 2) {
  toast.warning("You can select one more category");
} 
else if (selectedCat.length > 3) {
  toast.error("You need a premium subscription");
  return;
}

    setSelectedCategories(updatedCategories);
  };

  const getCategoriesInfo = async () => {
    try {
      const response = await fetch(`${apiUrl}api/category`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        // body: formBody
      });

      const responseJson = await response.json();
      if (responseJson.success === "true") {
        const res = responseJson.category.map((item) => ({
          ...item,
          isSelected: false,
        }));
        setSelectedCategories(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategoriesInfo();
  }, []);

  useEffect(() => {
    
  }, [selectedCount]);

  return (
    <>
      <section id="features-6" className="pt-100 pb-50 features-section division">
        <div className="container">
          <div className="fbox-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
               {selectedCategories.map((category) => (
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
                      <h6 className="s-20">{category?.cat_name}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {selectedCount > 0 ?
              <Link href="/product/ProductFilter" state={{ selectedCategories }} className="btn btn-success">View Products</Link> :
              <Link href="/product" state={{ selectedCategories }} className="btn btn-success">View All Products</Link>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;