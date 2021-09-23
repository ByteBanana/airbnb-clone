import React, { useEffect, useMemo, useState } from 'react';
import ReactMapGL, { FlyToInterpolator, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getCenter } from 'geolib';

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinate = searchResults.map(({ lat, long }) => ({
    latitude: lat,
    longitude: long,
  }));

  const centers = getCenter(coordinate);

  const [viewport, setViewport] = useState({
    ...centers,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/saharatpaynok/cktss4szq03sv17mu9h20t7d9'
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      onViewStateChange={(nextViewport) => setViewport(nextViewport)}
      height='100%'
      width='100%'
    >
      {searchResults.map((result) => {
        const { long, lat, img } = result;
        return (
          <div key={img}>
            <Marker
              latitude={lat}
              longitude={long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                role='img'
                onClick={() => setSelectedLocation(result)}
                className='text-2xl cursor-pointer animate-bounce'
              >
                🌟
              </p>
            </Marker>
            {selectedLocation?.long === result.long && (
              <Popup
                onClose={() => {
                  setSelectedLocation({});
                }}
                closeOnClick
                latitude={result.lat}
                longitude={result.long}
              >
                {result.title}
              </Popup>
            )}
          </div>
        );
      })}
    </ReactMapGL>
  );
};

export default Map;
