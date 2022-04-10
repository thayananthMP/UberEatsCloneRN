import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image: require('../../assets/images/food01.png'),
    categories: [{title: 'Indian'}, {title: 'Comfort food'}, {title: 'Coffee'}],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image: require('../../assets/images/food02.png'),
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: 'Zaitoon Restaurant',
    image: require('../../assets/images/food03.png'),
    categories: ['Meal', 'Bar'],
    price: '$$',
    reviews: 899,
    rating: 4.1,
  },
];

export default function RestaurantItems({navigation, ...props}) {
  return (
    <>
      {props.restaurantData &&
        props.restaurantData.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{marginBottom: 30}}
            onPress={() =>
              navigation.navigate('RestaurantDetails', {
                name: restaurant.name,
                image: restaurant.image,
                price: restaurant.price,
                reviews: restaurant.reviews,
                rating: restaurant.rating,
                categories: restaurant.categories,
              })
            }>
            <View
              style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
              <RestaurantImage image={restaurant.image} />
              <RestaurantInfo
                name={restaurant.name}
                rating={restaurant.rating}
              />
            </View>
          </TouchableOpacity>
        ))}
    </>
  );
}

const RestaurantImage = props => (
  <>
    <Image
      source={getImage(props.image)}
      style={{width: '100%', height: 180}}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <MaterialCommunityIcons
        name="heart-outline"
        size={25}
        color="#fff"></MaterialCommunityIcons>
    </TouchableOpacity>
  </>
);

const RestaurantInfo = props => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
        {props.name}
      </Text>
      <Text style={{fontSize: 13}}>35-40 · mins</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
      }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);

export function getImage(imageName) {
  switch (imageName) {
    case 'food01.png':
      return require('../../assets/images/food01.png');
    case 'food02.png':
      return require('../../assets/images/food02.png');
    case 'food03.png':
      return require('../../assets/images/food03.png');
  }
}
