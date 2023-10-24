import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useState } from "react";
import WeatherConditions from "../utils/WeatherConditions";

const Weather = ({ weather, temperature, location, region }) => {
  const [bgColor, setBgColor] = useState("bg-[#f7b733]");
  const [icon, setIcon] = useState("weather-sunny");
  const [subtitle, setSubtitle] = useState("Enjoy the sunshine");
  const [iconColor, setIconColor] = useState("#f1c40f");

  useEffect(() => {
    if (WeatherConditions[weather]) {
      console.log(WeatherConditions[weather]);
      const condition = WeatherConditions[weather];
      setBgColor("bg-[" + condition.color + "]");
      setIcon(condition.icon);
      console.log(condition.icon);
      setSubtitle(condition.subtitle);
      setIconColor(condition.iconColor);
    }
  }, [weather]);

  return (
    <View className={`h-full ${bgColor} flex flex-col space-y-11`}>
      <View className="flex flex-col items-center mt-40">
        <MaterialCommunityIcons size={160} name={icon} color={iconColor} />
        <Text className="text-9xl mt-11 ml-8 p-2 text-center">
          {temperature}˚
        </Text>
      </View>
      <View className="">
        <Text className="text-5xl text-center">{weather}</Text>
        <Text className="text-center text-base italic">{subtitle}</Text>
        <View className="flex flex-col items-end mr-11 mt-36 text-center">
          <Text className="text-center text-lg text-opacity-70">{region}</Text>
          <Text className="text-center text-base">{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Weather;
