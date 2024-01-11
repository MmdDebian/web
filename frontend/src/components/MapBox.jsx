
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

mapboxgl.accessToken = 'pk.eyJ1IjoibW9oYW1hZG1pcnphZWkiLCJhIjoiY2xyN3YwNHJzMHcwdzJpcDRtd2gyY2czdSJ9.qRpHoLZY-N8zC6Qi195mpw';
mapboxgl.setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true 
);

export const Map = () => {
  const [loading , setLoading] = useState(false)
  const [data , setData] = useState([])

   useEffect(()=>{
    setLoading(true);
    const map = new mapboxgl.Map({
      container : 'map',
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: {
        lat : 34.7983 , 
        lon : 48.5148
      }, 
      zoom: 15})

      const marker1 = new mapboxgl.Marker({color:'red' , rotation:true})
      .setLngLat([48.514813,34.798226])

      .addTo(map);
      
      // Create a default Marker, colored black, rotated 45 degrees.
      const marker2 = new mapboxgl.Marker({ color: 'red', rotation: 45 })
      .setLngLat([48.509025 , 34.809037])
      .addTo(map);

      const marker3 = new mapboxgl.Marker({color:'red', rotation : true})
        .setLngLat([48.5166382, 34.807235])
        .addTo(map)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) 
          .setHTML(
          `<h3>موزه حکمتانه</h3><p>$test</p>`
          )
          
        ).getElement().addEventListener('click' , (e)=>{
          
        })

    
      const marker4 = new mapboxgl.Marker({color:'red', rotation : true})
      .setLngLat([48.5122353 ,  34.7983275])
      .addTo(map)

      setLoading(false)


      const address = [
        {
          id : 1 , 
          lngLat : [48.514813,34.798226] ,
        
        }
      ]
   })

    return (
      <>
        <Container>
          <Row>
            <Col>
              {
                loading ? (
                  <>
                    <Spinner/>
                  </>
                ) : (
                  <>
                    <div id="map" style={{ height: '100vh', width: '100%' }}></div>
                  </>
                )
              }
            </Col>
            <Col>
              
              <h1></h1>
              <p></p>
            </Col>
          </Row>
        </Container>
      </>
    )
};