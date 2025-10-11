import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in React
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface LocationMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  popupText?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({
  latitude = 28.608232,
  longitude = 77.292869,
  zoom = 16,
  popupText = 'All The Classes Yoga Institute'
}) => {
  useEffect(() => {
    // Check if the map container exists and Leaflet is loaded
    if (typeof window !== 'undefined') {
      const map = L.map('map').setView([latitude, longitude], zoom);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Add marker
      L.marker([latitude, longitude], { icon: defaultIcon })
        .addTo(map)
        .bindPopup(popupText)
        .openPopup();

      // Cleanup function to remove the map instance on component unmount
      return () => {
        map.remove();
      };
    }
  }, [latitude, longitude, zoom, popupText]);

  return <div id="map" style={{ height: '400px', width: '100%', borderRadius: '10px' }} />;
};

export default LocationMap;
