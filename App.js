import { StatusBar } from 'expo-status-bar';
import {View, Button, TouchableOpacity, Text, StyleSheet} from "react-native";
import React from 'react';

export default () => {
  return (
    <View style={{flex:1, justifyContent: 'center'}}>
      <Button title="Button 1" onPress = {() => alert("Hello 1")}/>
      <TouchableOpacity style={MyStyle.Button} onPress={() => alert("Hello 2!")}
      >
        <Text style = {MyStyle.Text}>
            Button 2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const MyStyle = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent: "center"
    },
    Button:{
      backgroundColor: "blue",
      marginTop: 10,
      alignItems: "center",
      padding: 10
    },
    Text:{
      color: "white",
      fontSize: 18
    }
  }
)
