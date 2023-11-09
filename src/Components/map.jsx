import React from 'react';
import './map.css'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import markerIcon from './images/icon.png'
import 'leaflet/dist/leaflet.css';

function Map() {
  const markerPosition = [28.6245, 77.0650];
  const SecPosition =[ 28.4818,77.1612];
  const ThirdPosition =[28.7147,77.0488]
  const FourthPosition=[28.6549,77.1044]
  const FifthPosition=[ 28.7032,77.1426]
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  return (
    <div className='map-container'>
      <div className="map-heading">Location of Properties</div>
      <div className="map">
        <MapContainer
          center={[28.6139, 77.2090]}
          zoom={10}
          style={{ height: '90vh', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={markerPosition} icon={customIcon}>
            {/* You can customize the Marker if needed */}
            <Popup>
            Ram Nagar, Shahdara, Ram Nagar Extension, New Delhi - East, Delhi NCR.
            </Popup> 
          </Marker>
          <Marker position={SecPosition} icon={customIcon}>
            {/* You can customize the Marker if needed */}
            <Popup>
            Fatehpur Beri, New Delhi - South, Delhi NCR
            </Popup> 
          </Marker>
          <Marker position={ThirdPosition} icon={customIcon}>
            {/* You can customize the Marker if needed */}
            <Popup>
            B 198a., Budh Vihar Phase 2, New Delhi - North, Delhi NCR
            </Popup> 
          </Marker>
          <Marker position={FourthPosition} icon={customIcon}>
            {/* You can customize the Marker if needed */}
            <Popup>
            main market, Raghubir Nagar, New Delhi - West, Delhi NCR
            </Popup> 
          </Marker>
          <Marker position={FifthPosition} icon={customIcon}>
            {/* You can customize the Marker if needed */}
            <Popup>
            Pitampura, New Delhi - North, Delhi NCR
            </Popup> 
          </Marker>
        </MapContainer>
      </div>
    </div>

  );
}

export default Map;
