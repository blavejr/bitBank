import { View, Text } from "react-native";
import React from "react";
import { config } from "./theme/colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function BBlayoutView({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorScheme = useColorScheme();
  return (
      <View
        style={[
          config[colorScheme === "dark" ? "dark" : "light"],
          {
            flex: 1,
          }
        ]}
        className="p-safe"
      >
        {children}
      </View>
  );
}
