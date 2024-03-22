import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faBell, faHouse,faHeart,faLocationDot, faCircleUser} from '@fortawesome/free-solid-svg-icons'; 

function Header() {
  const  handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <header>
      <nav>
        <div className="icon">
          <div className="logo">
            <a href="/home">           
            <img src="src/assets/logor.png" alt="logo" /></a>
            <p className='name'>ELTHIO</p>
          </div>
        </div>
        <ul>
         <li style={{'display':'flex', justifyContent:'center'}}>
          <FontAwesomeIcon icon={faHouse} className='icone' style={
            {
              color:'white',
              cursor: "pointer",
              fontSize:'1.5em',
              marginBottom:'30px',
              position:'absolute',
              marginRight:'60px'
            }
          }/>
          <a href="/">Home</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot}  className='icone' style={
              {
                color:'white',
                cursor: "pointer",
                fontSize:'1.5em',
                marginBottom:'30px',
                marginRight:'60px',
                position:'absolute',
                
              }
            }/>
          <a href="/about">Booking</a>
          </li>
          <li>
          <FontAwesomeIcon icon={faHeart}  className='icone' style={
              {
                color:'white',
                cursor: "pointer",
                fontSize:'1.5em',
                marginBottom:'30px',
                marginRight:'60px',
                position:'absolute',
          
              }
            }/>
          <a href="/projects">Watchlist</a>
          </li>
          <li>
          <input type="search" placeholder="Search..." onChange={handleSearch}/>
          <FontAwesomeIcon icon={faSearch} className='search'  style={
            {
              color:'black',
              fontSize:'1em',
              marginLeft:'-45px',
              cursor:'pointer',
            }
          } />
          </li>

        </ul>
        <div className="icon-container"> 
          <div className="notification">
          <div className="notif">
          <FontAwesomeIcon icon={faBell} style={
            {
              color:'white',
              fontSize:'1.5em',
              marginRight:'50px',
              borderRadius:'50px',
              marginTop:'25px'
              
            }
          } />
          <FontAwesomeIcon icon={faCircleUser} style={
            {
              color:'white',
              fontSize:'1.7em',
              marginRight:'10px', 
              borderRadius:'50px',
            }
          } />

          </div>
        </div>
        </div>
      
      </nav>
    </header>
  )

  
}

export default Header;
