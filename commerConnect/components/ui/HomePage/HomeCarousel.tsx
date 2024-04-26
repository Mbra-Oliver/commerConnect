import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomeCarousel = ({
  showIndicator,
  datas,
  activeDotColor = "#333",
  inactiveDotColor = "#ccc",
  duration = 3000,
}: {
  showIndicator: boolean;
  datas: Array<{ uri: string }>;
  activeDotColor?: string;
  inactiveDotColor?: string;
  duration?: number;
}) => {
  const scrollViewRef: any = useRef(null);

  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % datas.length;
      setActiveIndex(newIndex);

      scrollViewRef.current?.scrollTo({
        x: screenWidth * newIndex,
        animated: true,
      });
    }, duration);

    return () => clearInterval(interval);
  }, [activeIndex]);

  console.log(datas.length);
  const handleScroll = (event: any) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / screenWidth);

    if (slide !== activeIndex) {
      setActiveIndex(slide);
    }
  };

  const renderImages = () => {
    return datas.map((image, index) => (
      <TouchableOpacity key={index}>
        <View style={[styles.imageContainer, { width: screenWidth }]}>
          <Image
            source={{ uri: image.uri }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
        ref={scrollViewRef}
      >
        {renderImages()}
      </ScrollView>

      {showIndicator && (
        <View style={styles.dotContainer}>
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
  },
  scrollView: {
    width: "100%",
    borderRadius: 10,
  },

  imageContainer: {
    backgroundColor: "white",
    height: 150,
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
  },

  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});
export default HomeCarousel;
