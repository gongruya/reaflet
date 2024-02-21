# Reaflet

Reaflet is a React wrapper for the popular [Leaflet map](https://github.com/Leaflet/Leaflet).

## Getting Started

```typescript
import React from 'react';
import {LeafletMap} 'reaflet/LeafletMap';
import {LeafletTileLayer} 'reaflet/LeafletTileLayer';

export default function App() {
  return (
    <LeafletMap center={[37.774546, -122.433523]}
      options={{
        zoom: 8,
        minZoom: 5,
        maxZoom: 10,
      }}
      zoom={8}
    >
      <LeafletTileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        options={{
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }} />
    </LeafletMap>
}

```
