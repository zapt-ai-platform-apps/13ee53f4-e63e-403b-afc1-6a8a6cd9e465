import { useMapEvents } from 'react-leaflet';

export default function MapClickHandler({ setMarkerPosition }) {
  useMapEvents({
    click(e) {
      console.log("Map clicked at:", e.latlng);
      setMarkerPosition(e.latlng);
    }
  });
  return null;
}