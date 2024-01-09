import React from 'react'
import Link from 'next/link'

const Notification = () => {
  return (
    <>
      <section
        className="banner"
        style={{
          backgroundImage: `url(/assets/img/banner3.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '540px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-caption">
                <h3>NOTIFICATION</h3>
                <ul className="breadcrumb">
                  <li><Link href="/">Start</Link></li>
                  <li>NOTIFICATION</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="col-xl-9 col-lg-8">
                <div className="dashboard_content">
                    {/* <h5>Notification</h5> */}
                    <div className="appointment_history">
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th className="sn">SN</th>
                                        <th className="name">Customer Name</th>
                                        <th className="date">Date</th>
                                       
                                       
                                        <th className="email">Customer Email</th>
                                        <th className="location">Customer Location</th>
                                       
                                        
                                      
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>1</p>
                                        </td>
                                        <td className="name">
                                            <p>Frank-Walter Steinmeier</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>

                                        <td className="email">
                                            <p>abc@abc.com</p>
                                        </td>
                                     
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                    
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>2</p>
                                        </td>
                                        <td className="name">
                                            <p>Alain Berset</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                      
                                        <td className="email">
                                            <p>abc@abc.com</p>
                                        </td>
                                     
                                        
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                       
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>3</p>
                                        </td>
                                        <td className="name">
                                            <p>Narendra Modi</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                       
                                        <td className="email">
                                            <p>abc@abc.com</p>
                                        </td>
                                     
                                       
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                       
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>4</p>
                                        </td>
                                        <td className="name">
                                            <p>Nilesh Kumar</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                       
                                        <td className="email">
                                            <p>abc@abc.com</p>
                                        </td>
                                     
                                      
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                        
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>5</p>
                                        </td>
                                        <td className="name">
                                            <p>Alia Bhatt</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        
                                        <td className="email">
                                            <p>abc@abc.com</p>
                                        </td>
                                     
                                      
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                        
                                    </tr>
                                    <tr className="tabile_row">
                                        <td className="sn">
                                            <p>6</p>
                                        </td>
                                        <td className="name">
                                            <p>Salman Khan</p>
                                        </td>
                                        <td className="date">
                                            <p>05 Jun 2023</p><span className="date_time">4:30 PM</span>
                                        </td>
                                        
                                        <td className="email">
                                            <p>abc@abc.com</p>
                                        </td>
                                     
                                        
                                        <td className="location">
                                            <p>Customer Address within 50 KM....</p>
                                        </td>
                                     
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                    </div>
      </section>
    </>
  );
}

export default Notification
