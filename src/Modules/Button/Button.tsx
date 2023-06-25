import { StyleSheet, Text, TouchableOpacity, TextStyle } from "react-native";
import React from "react";

interface Props {
  containerStyles?: {
    backgroundColor?: string;
    height?: number;
    width?: number;
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
  };
  titltProps?: TextStyle;
  title: string;
  btnType?: "solid" | "outlined";
}

const Button = ({
  title,
  titltProps,
  containerStyles,
  btnType = "solid",
}: Props) => {
  const updatedContainerStyles = {
    ...containerStyles,
    borderWidth: btnType == "solid" ? 0 : 1,
    borderColor:
      btnType !== "solid" ? containerStyles?.backgroundColor : "transparent",
    backgroundColor:
      btnType == "solid" ? containerStyles?.backgroundColor : "transparent",
  };

  return (
    <TouchableOpacity style={[styles.container, updatedContainerStyles]}>
      <Text style={titltProps}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
});

export default Button;
