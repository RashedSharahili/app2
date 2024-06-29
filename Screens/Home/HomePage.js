import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>HomePage</Text>
      <Button
        onPress={() => navigation.navigate("About")}
        title="About Screen"
      />
    </SafeAreaView>
  );
};

export default HomePage;
