import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

const OnboardingPages = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const navigation = useNavigation();

  const handleContinue = () => {
    setTimeout(() => {
      swiperRef.current.scrollBy(1);
    }, 500);
  };

  // Navigate to SignIn page
  const goToLoginSkip = () => {
    navigation.navigate("SignIn");
  };

  // Navigate to SignUp page
  const getStartedSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Swiper
      ref={swiperRef}
      index={activeIndex}
      onIndexChanged={(index) => setActiveIndex(index)}
      paginationStyle={{ bottom: "24%" }}
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      dotColor="#8EDFEB"
      activeDotColor="#54408C"
      activeDotStyle={styles.customDot}
      dotStyle={styles.customDot}
    >
      {/* Slide 1 */}
      <SafeAreaView style={styles.slide}>
        <View>
          <Image
            source={require("../../assets/onboarding/onboarding-image-1.png")}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.mainText}>Saving Your Money</Text>
          <Text style={styles.subText}>
            Track the progress of your savings and start a habit of saving with
            TransferMe.
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={handleContinue}
            style={styles.continueButton}
            activeOpacity={0.6}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Slide 2 */}
      <SafeAreaView style={styles.slide}>
        <View>
          <Image
            source={require("../../assets/onboarding/onboarding-image-2.png")}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.mainText}>Easy, Fast & Trusted</Text>
          <Text style={styles.subText}>
            Fast money transfer and guaranteed safe transactions with others.
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={handleContinue}
            style={styles.continueButton}
            activeOpacity={0.6}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Slide 3 */}
      <SafeAreaView style={styles.slide}>
        <View>
          <Image
            source={require("../../assets/onboarding/onboarding-image-3.png")}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.mainText}>Multiple Debit Cards</Text>
          <Text style={styles.subText}>
            Provides the freedom of financial management with Multiple Payment
            Options for local & International Payments.
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={getStartedSignUp}
            style={styles.continueButton}
            activeOpacity={0.6}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  customDot: {
    bottom: "10%",
    height: "200%",
    width: "3%",
    borderRadius: 15,
    marginHorizontal: 8,
  },
  imageStyle: {
    width: "80%",
    height: "65%",
    alignSelf: "center",
    top: "20%",
  },
  textView: {
    position: "absolute",
    bottom: "35%",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  mainText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    top: "5%",
  },
  subText: {
    color: "#A6A6A6",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
  },
  buttonView: {
    position: "absolute",
    bottom: "10%",
    width: "100%",
    alignItems: "center",
  },
  continueButton: {
    backgroundColor: "#5063BF",
    width: "50%",
    paddingVertical: 15,
    borderRadius: 15,
    bottom: "150%",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default OnboardingPages;
