import { useSearchParams } from "react-router-dom";
import { MapComponent } from "@entities";
import { Box } from "@mui/material";

export const MapPage = () => {
  const [searchParams] = useSearchParams();

  const latitude = Number(searchParams.get("lat")) || 0;
  const longitude = Number(searchParams.get("lng")) || 0;

  return (
    <Box height="100vh" width="100%" position="fixed" top={0} left={0}>
      <MapComponent lat={latitude} log={longitude} />
    </Box>
  );
};
