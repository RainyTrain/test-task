import MapGl, { Layer, Source, CircleLayer } from 'react-map-gl';

interface MapComponentProps {
  log: number;
  lat: number;
}

const layerStyle: CircleLayer = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf',
  },
};

export const MapComponent = ({ log, lat }: MapComponentProps) => {
  const geojson: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [log, lat] },
        properties: {},
      },
    ],
  };

  return (
    <MapGl
      mapboxAccessToken="pk.eyJ1IjoicmFpbnl0cmFpbnkiLCJhIjoiY2x4dTF2cnM3MXZ2ajJycXJzZHVkaTZhMyJ9.5Gp-48dMrjLWLDU4euUzNg"
      initialViewState={{
        longitude: log,
        latitude: lat,
        zoom: 3,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9">
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </MapGl>
  );
};
