import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const FlashSaleTimer = () => {
  const [remainingTime, setRemainingTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const flashEndDate = new Date("2024-04-27T10:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = flashEndDate.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));

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
    <View style={styles.container}>
      <Text style={styles.title}>Vente flash</Text>

      <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
        <Text>Se termine dans :</Text>
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
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default FlashSaleTimer;
