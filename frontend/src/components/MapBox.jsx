import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import {Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { location_data } from '../data';


const token = 'pk.eyJ1IjoibW9oYW1hZG1pcnphZWkiLCJhIjoiY2xyN3YwNHJzMHcwdzJpcDRtd2gyY2czdSJ9.qRpHoLZY-N8zC6Qi195mpw';

mapboxgl.accessToken = token ; 
mapboxgl.setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true 
);

export default function MapBox(){
  const [loading , setLoading] = useState(false)
  const [location , setLocation] = useState()
  const [value , setValue] = useState('')

  let map ; 

  useEffect(()=>{
    map = new mapboxgl.Map({
      container : 'map',
      style: 'mapbox://styles/mapbox/dark-v11',
      center: {
        lat : 34.7983 , 
        lon : 48.5148
      }, 
      zoom: 15
    })
  })


  const onChangeHandler = (e) =>{
    setValue(e.target.value)
  }


    const searchHander = ()=>{
        const location = location_data.find(loc=>{
            if(loc.name !== value){
                return null
            }

            return loc ;
        });

        setLocation(location)
        location.tourist_location.map(loc=>{
          new mapboxgl.Marker({color:'red'})
            .setLngLat([loc.lon , loc.lat])
            .addTo(map)
        })
      }

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
            <Col id="detail">
              <div className="header-start-div">
                  <input type="text" onChange={onChangeHandler} value={value}/>
                  <button onClick={searchHander}>جست و جو </button>
              </div>
              {
                location ? (
                  <>
                    {location.tourist_location.forEach((loc)=>{
                       <Card>
                       <Card.Header>{loc.name}</Card.Header>
                       <Card.Body>
                           <Card.Title>{loc.name}</Card.Title>
                           <Card.Text>
                             {loc.description}
                           </Card.Text>
                           <link href='/' variant="primary">See details</link>
                         </Card.Body>
                       </Card>
                    })}
                  </>
                ) : (
                  <span></span>
                )
              }
            </Col>
          </Row>
        </Container>
      </>
    )
};