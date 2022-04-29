import React, { useState } from "react";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useAppSelector } from "../../redux/hooks/hooks";

const Mapbox: React.FC = () => {
  const data = useAppSelector((state) => state.ipReducer.data);

  const { lat, lng } = data.location;

  const [viewState, setViewState] = useState({
    latitude: lat,
    longitude: lng,
    zoom: 13,
  });

  return (
    <>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100vw", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <Marker longitude={lng} latitude={lat} color="red" />
      </Map>
    </>
  );
};

export default Mapbox;
