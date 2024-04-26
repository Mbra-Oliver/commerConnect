import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const HomeCarousel = ({
  showIndicator,
  datas,
  activeDotColor = "#333",
  inactiveDotColor = "#ccc",
}: {
  showIndicator: boolean;
  datas: Array<{ uri: string }>;
  activeDotColor?: string;
  inactiveDotColor?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = Dimensions.get("window").width;
  const imageWidth = windowWidth;

  const scrollViewRef: any = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % datas.length;
      setActiveIndex(newIndex);
      scrollViewRef.current?.scrollTo({
        x: windowWidth * newIndex,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (event: any) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / windowWidth);
    if (slide !== activeIndex) {
      setActiveIndex(slide);
    }
  };

  const renderImages = () => {
    return datas.map((image, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => console.log(`Pressed image ${index}`)}
      >
        <View
          style={{
            backgroundColor: "white",
            width: imageWidth,
            height: 150,
          }}
        >
          <Image
            source={{ uri: image.uri }}
            style={[styles.image, { width: "100%" }]}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ width: "100%", borderRadius: 10 }}
      >
        {renderImages()}
      </ScrollView>

      {showIndicator && (
        <View style={styles.dotsContainer}>
          {datas.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === activeIndex ? activeDotColor : inactiveDotColor,
                },
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: "100%",
    borderRadius: 5,
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default HomeCarousel;
