'use client'
import Link from 'next/link';
import { apiUrl } from '@/app/constant/constant';
import React, { useEffect, useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTranslation } from 'react-i18next';



const validationSchema = Yup.object().shape({
  question_type: Yup.string().required("Question type is required"),
  user_name: Yup.string().required("Your Name is required").min(8) .max(18),  
  user_email: Yup.string().required("Email is required"),
  user_question:Yup.string().required("Your questions are required"),
  
});

const formOptions = { resolver: yupResolver(validationSchema) };



const Contact = () => {
  const { t } = useTranslation();

  const [contactDetails, setContactDetails] = useState(false);
  
  const { register,trigger,reset, handleSubmit, formState: { errors } } = useForm(formOptions);

  
  const onSubmit1 = async (formData, event) => {
    
    event.preventDefault();
    //console.log(formData);
    const isSuccess = true;
    try {
      const res = await axios.post( `${apiUrl}api/contactus`, formData);
      //console.log(res.data); // Assuming res.data contains the response data you want to log.
      //console.log(res);
      // Handle the response data here.
      if (res.data.success) {
        toast.success(res.data.message);
        reset();
       
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      toast.error('An error occurred');
      // Handle the error here.
    }
    // Backend API Call operation is handled here.
     };

     const changeRole = async (value) => {
      //console.log(value);
      
      // do something with my select value onChange
      await trigger(['question_type']) // Trigger validation on select
    };
  

  
  useEffect(() => {
    

  }, [])

 

  return (
    <div>
      <section
        className="banner"
        // style={{ backgroundImage: "url(/assets/img/banner7.jpg)" }}

        style={{
        backgroundImage: `url(/assets/img/banner7.jpg)`,
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
                <h3>{t('Contact')} </h3>
                <ul className="breadcrumb">
                  <li>
                    <Link href="/">{t('Start')} </Link></li>
                  <li>{t('Contact')} </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacts-1"
        className="pb-50 inner-page-hero contacts-section division"
      >
        <div className="container">
         
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="form-holder">
                <form name="contactform"  method="post" onSubmit={handleSubmit(onSubmit1)} className="row contact-form">

            
                  <div className="col-md-12 input-subject">
                    <p className="p-lg">{t('This question is about')}: </p>
                    <span>
                    {t('Choose a topic, so we know who to send your request to')}:{" "}
                    </span>
                    <select  {...register("question_type")}
                     onChange={(e) => changeRole(e.target.value)} 
                    id="question_type"
                    name="question_type"
                      className="form-select subject"
                      aria-label="Default select example"
                      defaultValue=""
                    >
                      <option value="">{t('This question is about')}...</option>
                      <option value="Registering/Authorising">{t('Registering')}/{t('Authorising')}</option>
                      <option value="Using Application">{t('Using Application')}</option>
                      <option value="Troubleshooting">{t('Troubleshooting')}</option>
                      <option value="Backup/Restore">{t('Backup')}/{t('Restore')}</option>
                      <option value="Other">{t('Other')}</option>
                    </select>
                  </div>
                 
                  <div className="col-md-12">
                          <p className="p-sm input-header">{t('Your name')}:</p>
                          <input
                          {...register("user_name")}
                          className="form-control name"
                            type="text"
                            name="user_name"
                            placeholder="John Doe"
                          />
                        </div>
                 

                  <div className="col-md-12">
                          <p className="p-sm input-header">{t('Your Email Address')}:</p>
                          <input
                          {...register("user_email")}
                          className="form-control email"
                            type="email"
                            name="user_email"
                            placeholder="example@example.com"
                          />
                        </div>

                       
                  <div className="col-md-12">
                    <p className="p-lg">{t('Explain your question in details')}: </p>
                    <span>
                    {t('Your OS version, Trisfusa version & build, steps you did. Be VERY precise!')}
                    </span>
                    <textarea
                      {...register("user_question")}
                      className="form-control message"
                      name="user_question"
                      rows="6"
                      placeholder="I have a problem with..."
                    ></textarea>
                  </div>


                  <div className="col-md-12 mt-15 form-btn text-right">
                    <button  onClick={handleSubmit(onSubmit1)}
                      type="submit"
                      className="btn btn--theme hover--theme submit"
                    >
                     {t('Submit Request')}
                    </button>
                  </div>
                  <div className="contact-form-notice">
                    <p className="p-sm">
                    {t('We are committed to your privacy. Trisfusa uses the information you provide us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our')}{" "}
                      <Link href="privacy-policy">{t('Privacy Policy')}</Link>.
                    </p>
                  </div>
                  <div className="col-lg-12 contact-form-msg">
                    <span className="loading"></span>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-holder">
                <div className="contact-form contact-details">
                  <p className="p-lg">{t('GET IN TOUCH')}</p>
                  <span>{t('Address and Contact information')}</span>
                  <ul>
                    <li>
                      <Link href="#">
                        <span className="flaticon-map"></span> Bachtelstrasse 68
                        CH-8342 Wernetshausen
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:info@smarthomeconsulting.ch">
                        <span className="flaticon-email"></span>{" "}
                        info@smarthomeconsulting.ch
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.smarthomeconsulting.ch/"
                        target="_blank"
                      >
                        <span className="flaticon-email"></span>{" "}
                        www.smarthomeconsulting.ch
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+410449380715">
                        <span className="flaticon-mobile-search"></span> +41 (0)
                        44 938 07 15
                      </Link>
                    </li>
                    <li>
                      <Link href="https://wa.me/+410449380715" target="_blank">
                        <span className="flaticon-whatsapp"></span> +41 78 960
                        03 00
                      </Link>
                    </li>
                  </ul>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10823.162238489589!2d8.846916165703366!3d47.298892351159445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ab85423031c35%3A0x92a81d18677a68ad!2sWernetshausen%2C%208342%20Hinwil%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1695790834251!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

