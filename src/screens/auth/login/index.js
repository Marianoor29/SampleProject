import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function Login({navigation,}){
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('App')
        },2000)
      },[])
    return (
        <View>
            <Text>Login Screen</Text>
        </View>
    );
};

