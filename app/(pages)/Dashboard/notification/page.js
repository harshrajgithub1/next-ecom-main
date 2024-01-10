"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "@/app/constant/constant";

const Notification = () => {
  //const [notificationData, setNotificationData] = useState(null);

  const [userTypeRole, setUserTypeRole] = useState();
  const [senderData, setSenderData] = useState([]);
  const [receiverData, setReceiverData] = useState([]);

  useEffect(() => {
    const parsedData = JSON.parse(sessionStorage.getItem("user"));

    if (parsedData !== null && parsedData !== undefined) {
      const userType = parsedData.user_type;

      if (userType === 2) {
        setUserTypeRole("Supplier");
      }

      if (userType === 3) {
        setUserTypeRole("Craftsman");
      }

      if (userType === 4) {
        setUserTypeRole("User");
      }
    }

    // Fetch notifications
    const fetchNotifications = async () => {
      try {
        const token = JSON.parse(sessionStorage.getItem("token"));
        //console.log(token);
        const headers = {
          Authorization: `Bearer ${token.access_token}`,
        };

        const response = await axios.get(`${apiUrl}api/user/notifications`, {
          headers,
        });
        //console.log(response);
        if (response.data.success === true) {
          setSenderData(response.data.user_send_noti);
          console.log(response.data.user_send_noti);
          setReceiverData(response.data.user_receive_noti);
          console.log(response.data.user_receive_noti);
        } else {
        }
      } catch (error) {
        console.error("Error fetching notifications:", error.message);
      }
    };
    //console.log(response)
    fetchNotifications();
  }, []);

  return (
    <>
      <section
        className="banner"
        style={{
          backgroundImage: `url(/assets/img/banner3.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "540px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>NOTIFICATION</h3>
                <ul className="breadcrumb">
                  <li>
                    <Link href="/">Start</Link>
                  </li>
                  <li>NOTIFICATION</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="dashboard_content">
                <div className="appointment_history">
                  <ul className="list-group">
                    {senderData.length &&
                      senderData.map((data) => (
                        <div className="" key={`${data.receiver_id}`}>
                          <li className="list-group-item">
                            <h1><b>{data.subject}</b></h1>
                            <p>{data.message}:{data.sender_name.name}</p>
                            </li>
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br></br>
      <br></br>
      <section>
        <div className="col-xl-9 col-lg-8">
          <div className="dashboard_content">
            <div className="appointment_history">
              <div className="table-responsive"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notification;
