import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

export default function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerViewStyle}>
        <Image
          source={require("../../assets/icon-transfer-me.png")}
          style={styles.headerImageStyle}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerViewStyle: {},
  headerImageStyle: {},
});
