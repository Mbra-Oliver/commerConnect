import { View, Text, StyleSheet, Button, Animated } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import * as Location from "expo-location";
import MapView, { Marker, Circle } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const Index = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [scanPoints, setScanPoints] = useState<
    { latitude: number; longitude: number }[]
  >([]);
  const [scanAnimation] = useState(new Animated.Value(0));
  const mapViewRef = useRef<MapView>(null); // Référence à la carte

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const fetchScanPoints = () => {
    if (location) {
      const randomPoints = Array.from({ length: 5 }, () => ({
        latitude: location.coords.latitude + Math.random() * 0.01,
        longitude: location.coords.longitude + Math.random() * 0.01,
      }));
      setScanPoints(randomPoints);
      startScanAnimation();

      // Zoom sur le premier point de scan
      if (randomPoints.length > 0 && mapViewRef.current) {
        const firstScanPoint = randomPoints[0];
        mapViewRef.current.animateToRegion({
          latitude: firstScanPoint.latitude,
          longitude: firstScanPoint.longitude,
          latitudeDelta: 0.05, // Ajustez ces valeurs selon votre besoin pour le niveau de zoom
          longitudeDelta: 0.05,
        });
      }
    }
  };

  const startScanAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(scanAnimation, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          ref={mapViewRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomEnabled
          zoomControlEnabled
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
          />
          <Circle
            center={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            radius={500}
            strokeWidth={2}
            strokeColor="rgba(0,158,255,0.5)"
            fillColor="rgba(0,158,255,0.2)"
          />
          {scanPoints.map((point, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: point.latitude,
                longitude: point.longitude,
              }}
              title={`Scan Point ${index + 1}`}
            />
          ))}
        </MapView>
      )}
      <Animated.View
        style={[
          styles.scanOverlay,
          {
            opacity: scanAnimation.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0.2, 0.5, 0.2],
            }),
          },
        ]}
      />
      <Button title="Scan Zone" onPress={fetchScanPoints} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  scanOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
