import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextStyle,
  View,
} from "react-native";
import React, { ReactElement, useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
interface Props {
  // Style properties
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  bgColor?: string;
  height?: number;
  width?: number | string;
  // Text properties
  TextProps?: TextStyle;
  title?: string;
  // State properties
  btnType?: "solid" | "outlined";
  isDisabled?: boolean;
  isLoading?: boolean;
  // Spinner properties
  spinnerSize?: number;
  spinnerColor?: string;

  // Icon properties
  Icon?: ReactElement;
  iconPosition?: "left" | "right";
}

const Button = ({
  title = "Button Title",
  TextProps,
  btnType = "solid",
  bgColor = "blue",
  borderRadius = 5,
  height = 50,
  width = "90%",
  borderWidth,
  borderColor = bgColor,
  isDisabled = false,
  isLoading,
  spinnerSize = 20,
  spinnerColor = bgColor,
  Icon,
  iconPosition,
}: Props) => {
  // STATES
  const [Load, setLoad] = useState(false);
  const [BgColor, setBgColor] = useState<string>("");
  const [spinSize, setSpinSize] = useState<string | number>("");

  const updatedTextStyles = {
    ...TextProps,
    color:
      btnType === "solid" && !TextProps?.color ? "#FFFFFF" : TextProps?.color,
  };

  useEffect(() => {
    if (isLoading) {
      return setLoad(isLoading);
    }
    setLoad(false);
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      return setLoad(isLoading);
    }
    setLoad(false);
  }, [isLoading]);

  useEffect(() => {
    if (isDisabled) {
      setBgColor("#C1C2C5");
    } else if (!isDisabled && btnType === "solid") {
      setBgColor(bgColor);
    }
  }, [isDisabled]);

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        styles.container,
        {
          backgroundColor: btnType === "solid" ? BgColor : "transparent",
          borderWidth: btnType == "solid" ? 0 : 2,
          borderColor: btnType !== "solid" ? bgColor : "transparent",
          borderRadius,
          height,
          width,
        },
      ]}
    >
      {!Load && iconPosition === "left" ? (
        <View style={{ width: "30%", alignItems: "center" }}>{Icon}</View>
      ) : (
        <View style={{ width: "30%" }} />
      )}
      <View style={{ width: "30%", alignItems: "center" }}>
        {Load ? (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Spinner color={spinnerColor} size={spinnerSize} />
          </View>
        ) : (
          <Text style={updatedTextStyles}>{title}</Text>
        )}
      </View>
      {!Load && iconPosition === "right" ? (
        <View style={{ width: "30%", alignItems: "center" }}>{Icon}</View>
      ) : (
        <View style={{ width: "30%" }} />
      )}
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
