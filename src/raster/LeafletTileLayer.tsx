import {TileLayer, TileLayerOptions} from 'leaflet';
import {useEffect} from 'react';
import {useLeafletMap} from '../hooks/useLeafletMap';

export interface LeafletTileLayerProps {
  url: string;
  options?: TileLayerOptions;
}

export function LeafletTileLayer({url, options}: LeafletTileLayerProps) {
  const maybeMap = useLeafletMap();

  useEffect(() => {
    maybeMap?.addLayer(new TileLayer(url, options));
  }, [maybeMap]);

  return null;
}

export default LeafletTileLayer;
