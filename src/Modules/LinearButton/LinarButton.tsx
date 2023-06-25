import { StyleSheet, Text, TextStyle, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  containerStyles?: {
    backgroundColor?: string;
    height?: number;
    width?: number;
    borderRadius?: number;
  };
  titltProps?: TextStyle;
  title: string;
  gradientColors?: string[];
  startProps?: {
    x: number;
    y: number;
  };
  endProps?: {
    x: number;
    y: number;
  };
  locationProps?: number[] | null;
}

const LinarButton = ({
  title,
  titltProps,
  containerStyles,
  gradientColors,
  startProps = { x: 0.1, y: 1.0 },
  endProps = { x: 1.0, y: 0.1 },
  locationProps = [0.0, 1.0],
}: Props) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        start={startProps}
        end={endProps}
        locations={locationProps}
        colors={gradientColors}
        style={[containerStyles, styles.container]}
      >
        <Text style={titltProps}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinarButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
});
