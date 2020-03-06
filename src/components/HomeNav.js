import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator 
          initialRouteName="Home"
          headerMode="none"
        >
          <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen name="Restaurant" component={} /> */}
        </Stack.Navigator>
    )
}