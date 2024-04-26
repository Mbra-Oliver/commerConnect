import React, { useRef } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Animated,
  PanResponder,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const Carousel = ({ data }: { data: any }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: scrollX }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, { dx }) => {
        const screenWidth = Dimensions.get("window").width;
        const direction = dx > 0 ? 1 : -1;
        const velocity = Math.abs(dx / screenWidth);
        Animated.spring(scrollX, {
          toValue: Math.round(
            scrollX._value / screenWidth + direction * velocity
          ),
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        {...panResponder.panHandlers}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {data.map((item: any, index: number) => (
          <View key={index} style={styles.item}>
            {/* Render your carousel item here */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  item: {
    width: screenWidth,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Carousel;
