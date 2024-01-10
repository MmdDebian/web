
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibW9oYW1hZG1pcnphZWkiLCJhIjoiY2xyN3YwNHJzMHcwdzJpcDRtd2gyY2czdSJ9.qRpHoLZY-N8zC6Qi195mpw';
mapboxgl.setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true 
);

export const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/standard',
      center: {
        lat : 34.7983 , 
        lon : 48.5148
      }, 
      zoom: 55, 
    });

    return () => map ;
  }, []);

  return <div id="map-container" style={{ width: '100%', height: '500px' }} />;
};

