import * as React from 'react';

import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductList from "./src/product/ProductList_f";
import PersonList from './src/person/PersonList';
// import SignUp from './src/account/signUp';
import SignIn from './src/account/signIn';
import SignOut from './src/account/signOut';




// import styles from "../style";

//import { createStackNavigator } from '@react-navigation/stack';





function HomeScreen() {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',fontSize: 50 }}>

      <Text>Home Screen</Text>

    </View>

  );

}

function DetailsScreen() {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'
    }}>

        <Text style={{color: 'blue',fontSize: 50,}}>Details Screen</Text>


      </View>

    );

  }
  function memorandum() {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'
    }}>

        <ProductList />
        {/* <PersonList /> */}

      </View>


    );

  }


//const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();



export default function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-baseball'
                : 'md-baseball';
            } else if (route.name === 'Details') {
              iconName = focused ? 'md-bug' : 'ios-bug';
            }
            else{
                iconName=focused? 'ios-clipboard':'md-clipboard'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#20b2aa',
          inactiveTintColor: 'blue',
        }}>
        {/* <Tab.Screen name="SignUp" component={SignUp} /> */}
        <Tab.Screen name="SignIn" component={SignIn} />
        <Tab.Screen name="SignOut" component={SignOut} />


        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        {/* <Tab.Screen name="價格表" component={memorandum} /> */}
        <Tab.Screen name="PersonList" component={memorandum} />
      </Tab.Navigator>

    </NavigationContainer>

  );

}