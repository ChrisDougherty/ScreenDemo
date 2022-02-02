import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import options from "../screens/options";
import options2 from "../screens/options2";
import options3 from "../screens/options3";
import options4 from "../screens/options4";
import options5 from "../screens/options5";
import options6 from "../screens/options6";
import options7 from "../screens/options7";
import options8 from "../screens/options8";
import options9 from "../screens/options9";
import options10 from "../screens/options10";
import options11 from "../screens/options11";
import options12 from "../screens/options12";
import options13 from "../screens/options13";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="The Island" component={options} />
    <MainStack.Screen name="The Beach" component={options2} />
    <MainStack.Screen name="The Forest" component={options3} />
    <MainStack.Screen name="Flare" component={options4} />
    <MainStack.Screen name="The Path" component={options5} />
    <MainStack.Screen name="Shirt" component={options6} />
    <MainStack.Screen name="Forest2" component={options7} />
    <MainStack.Screen name="Overboard" component={options8} />
    <MainStack.Screen name="Scientology" component={options9} />
    <MainStack.Screen name="Fight" component={options10} />
    <MainStack.Screen name="Clown" component={options11} />
    <MainStack.Screen name="Walk" component={options12} />
    <MainStack.Screen name="Base" component={options13} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
