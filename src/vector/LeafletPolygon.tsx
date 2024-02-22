import {LatLngExpression, Polygon, PolylineOptions} from 'leaflet';
import {useLeafletMap} from '../hooks/useLeafletMap';
import {useEffect, useState} from 'react';

export interface LeafletPolygonProps {
  latlngs: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][];
  options?: PolylineOptions;
}

export function LeafletPolygon({latlngs, options}: LeafletPolygonProps) {
  const maybeMap = useLeafletMap();
  const [polygon] = useState<Polygon>(new Polygon(latlngs, options));

  useEffect(() => {
    maybeMap?.addLayer(polygon);
  }, [maybeMap]);

  useEffect(() => {
    polygon.setLatLngs(latlngs);
  }, [latlngs]);

  return null;
}

export default LeafletPolygon;
