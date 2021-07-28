// import Script from 'next/experimental-script'
import Head from 'next/head'
import { useState, useEffect } from 'react'
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export const Contact = () => {
  const [ pageIsMounted, setPageIsMounted ] = useState(false);
  const [ Map, setMap ] = useState();

  mapboxgl.accessToken = "pk.eyJ1IjoiYWxleHhicmFhdHoiLCJhIjoiY2tyY2lnemQxNTNicDJucnU4aGF0NjIzdSJ9.AO8k4xOqjI8a2v1eUmWRKQ"

  useEffect(() => {
    setPageIsMounted(true)
      const map = new mapboxgl.Map({
        container: "my-map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-93.258133, 44.986656],
        zoom: 10.5,
        pitch: 45,
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

  return (

    <section className="pt-24 w-full h-screen bg-gradient-to-r from-pink-600 to-purple-500">
      <Head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <>
        {/* <Script src="https://kit.fontawesome.com/d15b84a4d3.js" crossorigin="anonymous"></Script> */}
      </>

      <h2 className="pl-7 font-sans font-extrabold text-4xl md:text-7xl ubpixel-antialiased text-black">
        contact
      </h2>

      <div id='my-map' style={{ height: 500, width: 500 }}>

      </div>

      <div className="fa-6x">
        {/* target attr opens a new tab and rel attr prevents a phishing type known as tabnabbing */}
        <a href="https://www.linkedin.com/in/alexjbraatz/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-solid fa-linkedin"></i>
        </a>

        <a href="https://github.com/alexbraatz" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>

    </section>
  )
}