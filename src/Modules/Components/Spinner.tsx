import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

interface Prop {
  color?: string;
  size?: number;
}

const Spinner = ({ color = "black", size = 20 }: Prop) => {
  const animation = useRef(null);

  useEffect(() => {
    // @ts-ignore
    animation?.current?.reset();
    setTimeout(() => {
      // @ts-ignore
      animation?.current?.play();
    }, 0);
  });

  return (
    <View>
      <LottieView
        ref={animation}
        autoPlay={true}
        style={{ height: size, width: size }}
        colorFilters={[
          { keypath: "Spinner", color },
          { keypath: "spinner Outlines", color },
        ]}
        source={require("./spinner.json")}
      />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({});
