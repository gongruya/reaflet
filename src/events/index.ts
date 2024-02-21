import {Map} from 'leaflet';
import {LeafletInteractionEventProps, registerInteractionEvents} from './interaction';
import {LeafletMapStateEventProps, registerMapStateEvents} from './map_state';

export interface LeafletEventProps extends
  LeafletInteractionEventProps,
  LeafletMapStateEventProps {}

export function registerLeafletEvents(map: Map, props: LeafletEventProps) {
  registerInteractionEvents(map, props);
  registerMapStateEvents(map, props);
}
