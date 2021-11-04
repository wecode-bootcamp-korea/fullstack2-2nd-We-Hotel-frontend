import React, { useRef } from 'react';
import styled from 'styled-components';

const NaverApi = ({ mapItem, lat, lng }) => {
  const navermaps = window.naver.maps;
  const naverMapRef = useRef();
  const naverMapElement = naverMapRef.current;

  const reusultMapApi = () => {
    const hotelLatLng = new navermaps.LatLng(lat, lng);
    let options = {
      center: hotelLatLng,
      zoom: 17,
    };
    const map = new navermaps.Map(naverMapElement, options);
    const markerOptions = {
      position: hotelLatLng,
      map: map,
    };

    const contents = mapItem.name;
    let marker = new navermaps.Marker(markerOptions);

    let infowindow = new navermaps.InfoWindow({
      content: `${contents}`,
      maxWidth: 400,
      backgroundColor: '#fff',
      borderColor: '#fff',
      borderWidth: 10,
      anchorSize: new navermaps.Size(10, 10),
    });

    navermaps.Event.addListener(marker, 'click', function (e) {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
    });
  };

  const defaultMapApi = () => {
    let options = {
      center: new navermaps.LatLng(37.5666805, 126.9784147),
      zoom: 17,
    };

    // let map = new navermaps.Map(naverMapElement, options);
  };

  lat && lng ? reusultMapApi() : defaultMapApi();

  return <MapContainer ref={naverMapRef} />;
};

export default NaverApi;

const MapContainer = styled.div`
  max-width: 100%;
  height: 110%;
`;
