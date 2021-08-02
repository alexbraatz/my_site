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

  const styles = {
    height: 400, 
    width: 400
  }

  const mapSize = () => {
    if ( isMobile ){
      styles = { 
        height: 10, 
        width: 10}
    }
  }

  return (

    <section className="pt-24 w-screen h-auto bg-gradient-to-r from-pink-600 to-purple-500">
      <Head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <h2 className="pl-7 font-sans font-extrabold text-4xl md:text-7xl ubpixel-antialiased text-black">
        contact
      </h2>

      <h6 className="pl-9 pt-2 font-sans font-extrabold">currently located in:</h6>
      <div className="px-40 py-8 grid grid-rows-3 grid-flow-col place-content-start"> 
        
        <div className="ml-2 shadow-2xl sm:w-5 rounded-lg col-span-1 row-span-3" id='my-map' style={styles}></div>

        <div className="pl-24 ml-8">
          <a href="https://github.com/alexbraatz" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{width: '120px'}}/>
          </a>
        </div>

        <div className="pl-24 ml-8">
          {/* target attr opens a new tab and rel attr prevents a phishing type known as tabnabbing */}
          <a href="https://www.linkedin.com/in/alexjbraatz/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{width: '120px'}} />
          </a>
        </div>
      
      
      </div>

    </section>
  )
}

