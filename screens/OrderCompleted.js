import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import MenuItem from '../components/restaurantDetails/MenuItem';

export default function OrderCompleted() {
  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'INR',
  });

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style = {{margin :15, alignItems: 'center', height: 100}}>
        <LottieView
          style={{height: 100, alignSelf: 'center', marginBottom: 30}}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>
          Your order at {restaurantName} has been placed for {totalUSD}.
        </Text>
        <MenuItem />
        <LottieView
          style={{height: 200, alignSelf: 'center'}}
          source={require('../assets/animations/cooking.json')}
          autoPlay
          speed={0.5}
        />
      </View>
    </View>
  );
}
