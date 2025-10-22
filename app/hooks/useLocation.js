import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") return;

        const {
          coords: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync({});
        setLocation({ latitude, longitude });
      } catch (error) {
        console.log("Error getting location", error);
      }
    })();
  }, []);

  return location;
}
