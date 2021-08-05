// you can add icons to a library for global use, in this limited case, i am not
// import { library } from '@fortawesome/fontawesome-svg-core' 
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react'

import { isMobile } from 'react-device-detect';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export const Contact = () => {
  const [ pageIsMounted, setPageIsMounted ] = useState(false);
  const [ Map, setMap ] = useState();
  let [ pageIsMobile, setPageIsMobile ] = useState(false)
  let [ mapStyles, setMapStyles ] = useState({height: '225px', width: '225px'})
  let [ iconStyles, setIconStyles ] = useState({width: '80px'})

  mapboxgl.accessToken = "pk.eyJ1IjoiYWxleHhicmFhdHoiLCJhIjoiY2tyY2lnemQxNTNicDJucnU4aGF0NjIzdSJ9.AO8k4xOqjI8a2v1eUmWRKQ"

  useEffect(() => {
    setPageIsMounted(true)
      const map = new mapboxgl.Map({
        container: "my-map",
        style: "mapbox://styles/mapbox/dark-v10", 
        center: [-93.267808, 44.945825],
        zoom: 11.5,
        pitch: 45,
        innerHeight: 400,
        innerwidth: 400,
      });

      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );
      
    

  }, [])

  // const mapSize = () => {
  //   setPageIsMobile(isMobile);
  //   if ( pageIsMobile ) {
  //     setMapStyles({height: '100px', width: '100px'})
  //     setIconStyles({width: '20px'})
  //   }
  // }

  // mapSize();
  // const mapSize = () => {
  //   if ( isMobile ){
  //     mapStyles = { 
  //       height: '200px', 
  //       width: '200px'
  //     }

  //     iconStyles = {
  //       width: '80px'
  //     }
  //   } else {
  //     mapStyles = {
  //       height: '400px', 
  //       width: '400px'
  //     },
  //     iconStyles = {
  //       width: '140px'
  //     }
  //   }
  // }

  return (

    <section className="pt-60 w-screen h-auto bg-gradient-to-r from-pink-600 to-purple-500">
      <Head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <h2 className="pl-7 font-sans font-extrabold text-4xl md:text-7xl ubpixel-antialiased text-black">
        contact
      </h2>

      <h6 className="pl-7 font-sans font-extrabold">you can find me in:</h6>
      <div className="px-20 md:px40 py-8 grid grid-rows-2 grid-flow-col place-content-start"> 
        
        <div className="ml-2 shadow-2xl rounded-lg col-span-2 md:row-span-3" id='my-map' style={mapStyles}></div>

        <div className="grid-rows-2">
          <a href="https://github.com/alexbraatz" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} style={iconStyles}/>
          </a>
        </div>

        <div className="grid-rows-2">
          {/* target attr opens a new tab and rel attr prevents a phishing type known as tabnabbing */}
          <a href="https://www.linkedin.com/in/alexjbraatz/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={iconStyles} />
          </a>
        </div>
      
      
      </div>

    </section>
  )
}

