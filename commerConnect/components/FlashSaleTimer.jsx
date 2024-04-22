import { useState, useEffect } from "react";

import { View, Text, StyleSheet } from "react-native";

const FlashSaleTimer = () => {
  const [remainingTime, setRemainingTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Définir la date de fin des flash sales (remplacez cette date par votre propre date de fin)
  const flashSaleEndDate = new Date("2024-04-22T10:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = flashSaleEndDate - now;
      if (difference > 0) {
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setRemainingTime({ hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setRemainingTime({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.flex}>
      <Text style={styles.flashSaleText}>Vente flash</Text>
      <View style={styles.countdownContainer}>
        <Text style={{ marginRight: 10 }}>Se termine dans</Text>
        <Text>
          {remainingTime.hours < 10
            ? `0${remainingTime.hours}`
            : remainingTime.hours}
        </Text>
        <Text>:</Text>
        <Text>
          {remainingTime.minutes < 10
            ? `0${remainingTime.minutes}`
            : remainingTime.minutes}
        </Text>
        <Text>:</Text>
        <Text>
          {remainingTime.seconds < 10
            ? `0${remainingTime.seconds}`
            : remainingTime.seconds}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textSm: {
    fontSize: 12,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  countdownContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  flashSaleText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default FlashSaleTimer;
