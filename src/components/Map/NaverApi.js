import React, { useRef } from 'react';
import styled from 'styled-components';

const NaverApi = ({ mapItem, lat, lng }) => {
  const navermaps = window.naver.maps;
  const naverMapRef = useRef();

  const mapApi = () => {
    const naverMapElement = naverMapRef.current;

    if (lat) {
      const hotelLatLng = new navermaps.LatLng(lat, lng);
      const options = {
        center: hotelLatLng,
        zoom: 16,
      };
      const map = new navermaps.Map(naverMapElement, options);
      const markerOptions = {
        position: hotelLatLng,
        map: map,
      };

      const contents = mapItem.name;
      const marker = new navermaps.Marker(markerOptions);

      const infowindow = new navermaps.InfoWindow({
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
    } else {
      console.log('로딩중');
    }
  };

  mapApi();

  return <MapContainer ref={naverMapRef} />;
};

export default NaverApi;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
