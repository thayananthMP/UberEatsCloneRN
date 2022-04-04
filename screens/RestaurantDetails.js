import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetails/About'
import {Divider} from 'react-native-elements';
import MenuItem from '../components/restaurantDetails/MenuItem';

export default function RestaurantDetails() {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItem />
    </View>
  )
}