import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../Style/MainLandingpage.css'
import tooth from '../Images/tooth.png'
import Shape from '../Images/Shape.png'
import brain from '../Images/human-brain.png'
import file from '../Images/medical-file.png'
import docorwomen from '../Images/doctor-woman.png'
import docorboy from '../Images/doctor-woman copy.png'
import ambulance from '../Images/doctor-woman copy 2.png'
import user from '../Images/Oval.png'
import user1 from '../Images/Oval1.png'
import facebook from '../Images/Group 26.png'
import Google from '../Images/Group 26 Copy.png'
import twitter from '../Images/Group 26 Copy 2.png'
import axios from 'axios';

const MainLandingpage = () => {
  return (
    <>
      <div className='landingpage'>
        <div className='Navbar'>
          <header className="App-header">
            <div>
              <div className="logo"><span className='medispan'>Medi</span><span className='carespan'>Care+</span></div>
            </div>
            <div className='right-nav'>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/news">News</Link></li>
                </ul>
              </nav>
              <button className="contact-btn">Contact</button>
            </div>
          </header>

        </div>

        <main className="App-main">
          <section className="intro">
            <h1>Welcome to MediCare+ Clinic</h1>
            <h2>Best Specialists</h2>
            <p>
              We are on the leading edge of cancer care. Providing the full continuum
              of cancer treatments and supportive care services in a single convenient
              location.
            </p>
            <div className="buttons">
              <button className="appointment-btn">Make an Appointment</button>
              <button className="departments-btn">Departments</button>
            </div>
          </section>
          <div className="profile">
            {/* <div className="profile-name">Anand Chaurasia</div> */}
          </div>
        </main>
      </div>
      <Services />
      <ClinicWithInnovation />
      <Specialist />
      <Review />
      <Feedback />
    </>
  )

}

const Services = () => (
  <section className="services">
    <div className='service-headlines'>
    <h2>Our Services</h2>
    <p id='service-p'>
      We provide the most full medical services, so every person could have the
      opportunity to receive qualitative medical help.
    </p>
    </div>
    <div className="services-cards">
      <div className="service-card">
        <img src={tooth} alt="tooth" />
        <p>
          Dental Care
        </p>
      </div>
      <div className="service-card highlighted">
        <img src={Shape} alt="tooth" />
        <p>
          Pulmonary
        </p>
      </div>
      <div className="service-card">
        <img src={brain} alt="tooth" />
        <p>
          Neurological
        </p>
      </div>
      <div className="service-card">
        <img src={file} alt="tooth" />
        <p>
          Pediatrics
        </p>
      </div>
    </div>
  </section>
);


const ClinicWithInnovation = () => (
  <section className="innovation">
    <div id='summery'>
      <h2>Clinic With Innovation</h2>
      <p>
        We provide the most full medical services, so every person could have the
        opportunity to receive qualitative medical help.
      </p>
      <button className="learn-more-btn">Learn More</button>
    </div>
    <div>
      <div className="innovation-cards">
        <div className="innovation-card">
          <img src={docorwomen} alt="doctorwoman" />
          <p>
            Qualified Doctors
          </p>
        </div>
        <div className="innovation-card">
          <img src={docorboy} alt="doctorboy" />
          <p>
            Emergency Care
          </p>
        </div>
        <div className="innovation-card">
          <img src={ambulance} alt="ambulance" />
          <p>
            24 Hours Service
          </p>
        </div>
      </div>
    </div>
  </section>
);


const Specialist = () => (
  <section className='speciallist'>
    <div className='mainspecialist'>
      <div className='headings'>
        <h1>We Have The Best Specialist</h1>
        <p id='mainspecialist-p'>We have a wide experience in experience design and strategy, with locally-rooted knowledge.</p>
      </div>
      <div className='cards'>
        <div className="card">
          <div className='names'>
            <h6>Dr. Awaatif Al</h6>
            <p>Dental Care</p>
          </div>
        </div>
        <div className="card">
          <div className='names'>
            <h6>Dr. Filipa Gaspar</h6>
            <p>Cardiology</p>
          </div>
        </div>
        <div className="card">
          <div className='names'>
            <h6>Dr. Rahul</h6>
            <p>Neurological</p>
          </div>
        </div>
        <div className="card">
          <div className='names'>
            <h6>Dr. Siri Jakobsson</h6>
            <p>Prediatrics</p>
          </div>
        </div>
      </div>


    </div>

  </section>

);

const Review = () => {

  const [data, setData] = useState();
  console.log("api data", data)

  // const {name} = data
  // console.log(name)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          }
        });
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching checkout details:', error);
      }
    };

    fetchdata();
  }, []);

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className='mainreview'>
        <div>
          <h1>What Our Customers Say</h1>
        </div>
        <div className='review-card'>
          <div className='cards-review'>
            <p>{data[2].Reviews}</p>
            <div className='userrevi'>
              <div>
                <img src={user1} alt="user1" />
              </div>
              <div>
                <h5>{data[0].Name}</h5>
                <h6>Patient</h6>
              </div>
            </div>
          </div>
          <div className='cards-review'>
            <p>{data[1].Reviews}</p>
            <div className='userrevi'>
              <div>
                <img src={user} alt="user" />
              </div>
              <div>
                <h5>{data[1].Name}</h5>
                <h6>Patient</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Feedback = () => (
  <section>
    <div className="newsletter-container">
      <div className='feedback'>
        <h1>Subscribe to Newsletter</h1>
        <p>We have a wide experience in website design and strategy.</p>
        <form >
          <input
            type="email"
            placeholder="Enter your email address"

          />
          <button type="submit">Send Now</button>
        </form>
      </div>
      <footer>
        <div className='right-footer'>
          <div className="footer-left"><span className='medispan'>Medi</span><span className='carespan'>Care+</span></div>
          <div className="footer-right">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#news">News</a>
          </div>
        </div>
        <div className='footericons'>
          <div className="social-icons">
            <img src={facebook} alt="facebook" />
            <img src={Google} alt="google" />
            <img src={twitter} alt="twitter" />
          </div>
          <div className="social-">
            <p>©2023 - 011BQ </p>
          </div>
        </div>
      </footer>
    </div>
  </section>
)



export default MainLandingpage