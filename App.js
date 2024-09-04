import React,{useState} from "react";
import {Text, Button, View} from "react-native";

export default () =>{
  const [pressCount, setPressCount] = useState(0);

  return(
    <View style={{ alignItems: "center", margin: 20}}>
      <Text>you've pressed the button: {pressCount} time(s) </Text>
      <Button
        title= {`Pressed ${ pressCount } time(s)`}
        onPress={() => setPressCount(pressCount + 1)}
      />
    </View>
  );
};