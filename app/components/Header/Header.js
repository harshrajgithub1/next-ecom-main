'use client'
import { useAuth } from '../AuthProvider/useAuth';
import Link from 'next/link';
import { fetchHeaderData } from '../../api/utils/utils';
import React, { useState, useEffect } from 'react';


const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  console.log(isLoggedIn);

  const handleLogout = () =>{
    logout();
  }

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await fetchHeaderData();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error in fetchData:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);



//   fetch('http://45.79.185.26/trifusa/public/api/home/header/image', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': 'Bearer ' + this.state.clientToken,
//     },
//     body: formBody
// })
//     .then((response) => response.json())
//     .then((responseJson) => {
//         console.log(responseJson, 'res JSON');
//         if (responseJson.status == "success") {
//             console.log(this.state);
//             alert("your todolist is completed!!");
//         }
//     })
//     .catch((error) => {
//         console.error(error);
//     });



    const [clientToken, setClientToken] = useState('yourToken');

  useEffect(() => {
    const fetchHeaderImage = async () => {
      try {
        const formBody = new URLSearchParams();
        formBody.append('key1', 'value1');
        formBody.append('key2', 'value2');

        const response = await axios.post(
          'http://45.79.185.26/trifusa/public/api/home/header/image',
          formBody,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + clientToken,
            },
          }
        );

        console.log('API response:', response.data);

        if (response.data.status === 'success') {
          console.log(response.data);
          alert('Your todolist is completed!!');
        }
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    };

    fetchHeaderImage();
  }, [clientToken]);

  return (
    <header id="header" className="tra-menu navbar-light white-scroll">
      <div className="header-wrapper">
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/assets/img/logo.svg" alt="mobile-logo" />
          </span>
          <a id="wsnavtoggle" className="wsanimated-arrow">
            <span></span>
          </a>
        </div>
        <div className="hidden sm:block text-black wsmainfull menu clearfix">
          <div className="wsmainwp">
            <div className="desktoplogo">
              <Link href="/" className="logo-black">
                <img
                  className="light-theme-img"
                  src="/assets/img/logo.svg"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="/" className="logo-white">
                <img src="/assets/img/logo-white.svg" alt="logo" />
              </Link>
            </div>
            <nav className="wsmenu clearfix">
              <ul className="wsmenu-list nav-theme">
                <li className="nl-simple">
                  <Link href="/" className="h-link active">
                    Start
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link href="comparison" className="h-link ">
                    Vergleich
                  </Link>
                </li>
                {/* <li><a href="services.php" class="h-link">Produkte <span class="wsarrow"></span></a>
                  <ul class="sub-menu">
                      <li><a href="service-detail.php">Planners</a></li>
                      <li><a href="service-detail.php">Managers</a></li>
                      <li><a href="service-detail.php">Suppliers</a></li>
                      <li><a href="service-detail.php">Comparison</a></li>
                      <li><a href="service-detail.php">Suppliers</a></li>
                  </ul>
              </li> */}
                <li className="nl-simple">
                  <Link href="/about" className="h-link ">
                    Über uns
                  </Link>
                </li>
                <li className="nl-simple">
                  <Link href="/contact" className="h-link ">
                    Kontakt
                  </Link>
                </li>
                <li className="nl-simple">
                  <p>{isLoggedIn}</p>
                {!isLoggedIn ?
                <Link
                href="/login"
                className="btn r-04 btn--theme hover--tra-white last-link">
                Anmeldung
              </Link> : 
              <button
              onClick={handleLogout}
              className="btn r-04 btn--theme hover--tra-white last-link">
              Log out
            </button>
                }
                </li>
                
                <li >
                  
                </li>
                <li className="language">
                  <select name="lang" id="lang" className="form-control">
                    <option value="en">En</option>
                    <option value="de">De</option>
                    <option value="it">It</option>
                    <option value="fr">Fr</option>
                  </select>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
