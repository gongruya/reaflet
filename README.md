# Reaflet
[![npm version](https://img.shields.io/npm/v/reaflet-map.svg)](https://www.npmjs.com/package/reaflet-map)

Reaflet is a React wrapper for the popular [Leaflet map](https://github.com/Leaflet/Leaflet).

## Getting Started
Run `npm i reaflet-map`

And simply use it in your React component ([sandbox demo](https://codesandbox.io/p/devbox/9nw3jz?file=%2Fsrc%2FApp.jsx)):
```typescript
import React from "react";
import { LeafletMap } from "reaflet-map";
import { LeafletTileLayer } from "reaflet-map/raster";

export default function App() {
  return (
    <LeafletMap
      center={[37.774546, -122.433523]}
      options={{
        zoom: 8,
        minZoom: 5,
        maxZoom: 10,
      }}
      zoom={8}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <LeafletTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        options={{
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }}
      />
    </LeafletMap>
  );
}
```
