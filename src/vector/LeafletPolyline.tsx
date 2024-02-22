import {LatLngExpression, Polyline, PolylineOptions} from 'leaflet';
import {useLeafletMap} from '../hooks/useLeafletMap';
import {useEffect, useState} from 'react';

export interface LeafletPolylineProps {
  latlngs: LatLngExpression[] | LatLngExpression[][];
  options?: PolylineOptions;
}

export function LeafletPolyline({latlngs, options}: LeafletPolylineProps) {
  const maybeMap = useLeafletMap();
  const [polyline] = useState(new Polyline(latlngs, options));

  useEffect(() => {
    maybeMap?.addLayer(polyline);
    return () => {
      maybeMap?.removeLayer(polyline);
    };
  }, [maybeMap]);

  useEffect(() => {
    polyline.setLatLngs(latlngs);
  }, [latlngs]);

  return null;
}

export default LeafletPolyline;
