import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";

const OnboardingPages = () => {
  // Function to navigate to -> SignIn page
  function goToLoginSkip() {
    navigation.navigate("SignIn");
  }

  // Function navigate to -> SignUp page
  function getStartedSignUp() {
    navigation.navigate("SignUp");
  }

  const navigation = useNavigation();

  const swiperRef = useRef(null);

  function handleContinue() {
    // Add a delay of 1000 milliseconds (1 second)
    setTimeout(() => {
      // Move to the next slide
      swiperRef.current.scrollBy(1, true);
    }, 500);
  }

  // ...

  return (
    <Swiper
      ref={swiperRef}
      paginationStyle={{ bottom: "24%" }}
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      dotColor="#D6D6D6" // Default dot color (inactive)
      activeDotColor="#54408C" // Active dot color
      activeDotStyle={styles.customDot}
      dotStyle={styles.customDot} // Style for dots
      onIndexChanged={(index) => console.log("Current Index: ", index)}
    >
      {/* Slide 1 */}
      <SafeAreaView style={styles.slide}>
        <View>
          <Image
            source={require("../../assets/onboarding/onboarding-image-1.png")}
            style={{
              width: "80%",
              height: "65%",
              alignSelf: "center",
              top: "15%",
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: 30,
              fontWeight: "bold",
              width: "75%",
              textAlign: "center",
              left: "15%",
              bottom: "100%",
            }}
          >
            Saving Your Money
          </Text>
          <Text
            style={{
              color: "#A6A6A6",
              fontSize: 16,
              textAlign: "center",
              bottom: "60%",
              width: "90%",
              left: "5%",
            }}
          >
            Track the progress of your savings and start a habit of saving with
            TransferMe.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleContinue}
            style={{
              backgroundColor: "#5063BF",
              width: "85%",
              alignSelf: "center",
              height: "27.5%",
              bottom: "6.5%",
              borderRadius: 15,
            }}
            activeOpacity={0.6}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontWeight: "600",
                top: "27.5%",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Swiper>
  );
};

export default OnboardingPages;

const styles = StyleSheet.create({
  slide: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  customDot: {
    height: "150%", // Set the desired height for the dots
    width: "2.5%", // Set the desired width for the dots
    borderRadius: 15, // Set border radius for rounded dots
    marginHorizontal: 8, // Set the horizontal margin between dots
  },
});
