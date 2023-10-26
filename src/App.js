import './App.css';
import React from 'react';
import MyButton from './components/Button';
import Card from './components/Card';
function App() {
  return ( 
    <div className="App">
        <Card text="lorem lorem lorem lorem"></Card>
        <Card text="lorem1 lorem1 lorem1 lorem1"></Card>
        <Card text="lorem2 lorem2 lorem2 lorem2"></Card>
      <section>
      <header>
                <div className='container'>
                <div class="logo">
                    <img src={process.env.PUBLIC_URL + '/assets/images/Group 396.svg'} alt="logo"/>
                    <h5 className='blue-text'>Artificial Intelligence</h5>
                </div>
                <ul className='navbar'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <MyButton>Sign in</MyButton>
                </div>
            </header>
        <div className="showcase">
          <div className='container'>
            <div className="show-inside">
                <div className="show-text">
                    <h4 className="blue-text">Next genaretion platform</h4>
                    <h1 className='white-heading'>Artificial intelligence & Syber security</h1>
                    <p className='simple-text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <div className="buttons">
                    <MyButton>Get Started</MyButton>
                    <MyButton><i class="fa-solid fa-play"></i> Watch Video</MyButton>
                    </div>
                </div>
                <div className="show-image">
                <img src={process.env.PUBLIC_URL + '/assets/images/9 1.svg'} alt=""/>
            </div>
            </div>
            <div className="logos">
                <img src={process.env.PUBLIC_URL + '/assets/images/Group 400.svg'} alt=""/>
                <img src={process.env.PUBLIC_URL + '/assets/images/Group 401.svg'} alt=""/>
                <img src={process.env.PUBLIC_URL + '/assets/images/Group 402.png'} alt=""/>
                <img src={process.env.PUBLIC_URL + '/assets/images/Group 403.png'} alt=""/>
            </div>
          </div>
        </div>
      </section>
      <section className="second">
    <div className="container">
        <div className="show-inside">
            <div className="show-image">
                <img src={process.env.PUBLIC_URL + '/assets/images/about 4.svg'} alt=""/>
            </div>
            <div className="show-text">
                <h1 id='unique' className="white-heading">Apply AI, Deep Learning and Data Sciece to solve</h1>
                <p className="simple-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <MyButton>Learn More</MyButton>
            </div>
        </div>
    </div>
   </section>
   <section className="carusel">
            <div className="slider">
                {data.map((d) => (
                    <div className='card'>
                        <div className='img'>
                            <img src={process.env.PUBLIC_URL + d.img} alt=""/>
                        </div>
                        <div>
                            <h3>{d.heading}</h3>
                        </div>
                        <div>
                            <p className='simple-text'>{d.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>

        <section className="fourth">
    <div class="container-small">
        <div class="show-inside">
            <div class="showtext">
                <h1  className="white-heading unique">What our clients say about our awesome solutions</h1>
                <p className='simple-text'>
                    To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know. <br/><br/>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing . <br/><br/>
                    Lorem ipsum is placeholder previewing layouts and visual mockups. <br/><br/>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
            </div>
            <div class="show-image bigger">
                <img src={process.env.PUBLIC_URL + '/assets/images/about3 1.svg'} alt=""/>
            </div>
        </div>
    </div>
   </section>

   <footer>
    <div className="container-small">
        <ul className="footer-column">
                <ul>
                    <li>
                        <div class="logo-footer">
                            <img src={process.env.PUBLIC_URL + '/assets/images/Group 396.svg'} alt="logo"/>
                            <h5 style={{fontSize : 18}} className='blue-text'>Artificial Intelligence</h5>
                        </div>
                        <li style={{lineHeight : 1.5}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</li>
                        <li className='bolder'><i class="fa-regular fa-envelope"></i> Company@gmail.com.com</li>
                        <li><i class="fa-solid fa-phone-volume"></i> Phone: (064) 332-1233</li>
                        <li><i class="fa-solid fa-location-dot"></i> 450 Wall Street, USA, New York</li>
                    </li>
                </ul>
                <ul>
                    <li><h4>INFORMATION</h4></li>
                    <li>New Collection</li>
                    <li>About Store</li>
                    <li>Contact Us</li>
                    <li>Latest News</li>
                    <li>Our Sitemap</li>
                    <li>Orders History</li>
                </ul>
                <ul>
                <li><h4>Footer Menu</h4></li>
                <li>Instagram profile</li>
                <li>New Collection</li>
                <li>Contact Us</li>
                <li>Latest News</li>
                <li>Terms & Conditions</li>
                <li>Purchase Theme</li>
                </ul>
                <ul>
                    <li><h4>USEFUL LINKS</h4></li>
                    <li>Instagram profile</li>
                    <li>New Collection</li>
                    <li>Contact Us</li>
                    <li>Latest News</li>
                    <li>Terms & Conditions</li>
                    <li>Purchase Theme</li>
                </ul>
                <ul>
                    <li><h4>ABOUT THE STORE</h4></li>
                    <li style={{lineHeight : 2}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</li>
                    <li>www.company.com</li>
                    <li className="social">
                        <i class="fa-solid fa-fire"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </li>
                    <li><i class="fa-solid fa-globe"></i> English <i class="fa-solid fa-chevron-down"></i></li>
                </ul>
        </ul>
    </div>
   </footer>

    </div>
  );
}

const data = [
  {
    img: '/assets/images/welcome-3 1.svg',
    heading: 'Naxly as the Winners in Global Agency Awards',
    desc: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
  },
  {
    img: ' /assets/images/welcome-3 1.png',
    heading: 'Expert Prespective Agency Awards',
    desc: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
  },
  {
    img: '/assets/images/welcome-3 1 (1).png',
    heading: 'Business Prespective Global Agency Awards',
    desc: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
  },
  {
    img: '/assets/images/welcome-3 1 (2).png',
    heading: 'Value for Results in Global Agency Awards',
    desc: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
  },
  {
    img: '/assets/images/welcome-3 1 (3).png',
    heading: 'Global Experience in Agency Awards',
    desc: 'Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
  }
]

export default App;
