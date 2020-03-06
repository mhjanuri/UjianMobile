import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import HomeNav from './HomeNav';
import Logout from './Logout';

const Tab = createBottomTabNavigator();

const LogoutComp = (nav) => {
    return ({ navigation }) => <Logout navigation={navigation} rootStackNavigation={nav} />
}

export default ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="HomeNav"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'HomeNav') {
                    iconName = 'home';
                  } else if (route.name === 'Logout') {
                    iconName = 'restaurant-menu';
                  }
      
                  // You can return any component that you like here!
                  return <Icon name={iconName} size={35} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'gray',
                showLabel: false
            }}
        >
            <Tab.Screen name="HomeNav" component={HomeNav} />
            <Tab.Screen name="Logout">
                {LogoutComp(navigation)}
            </Tab.Screen>
        </Tab.Navigator>
    )
}
