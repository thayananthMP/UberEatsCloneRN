import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';

export default function MenuItem({
  restaurantName,
  foodItems,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find(item => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foodItems ? (
        foodItems.map((food, index) => (
          <View key={index}>
            <View
              style={{
                flexDirection: 'row',
                margin: 5,
                justifyContent: 'space-between',
              }}>
              {hideCheckbox ? (
                <></>
              ) : (
                <BouncyCheckbox
                  iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
                  fillColor="green"
                  onPress={checkboxValue => selectItem(food, checkboxValue)}
                  isChecked={isFoodInCart(food, cartItems)}
                />
              )}
              <FoodInfo food={food} />
              <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
            </View>
            <Divider width={1} />
          </View>
        ))
      ) : (
        <></>
      )}
    </ScrollView>
  );
}

const FoodInfo = props => (
  <View style={{width: 240, justifyContent: 'space-evenly'}}>
    <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
      {props.food.title}
    </Text>
    <Text style={{color: 'black'}}>{props.food.description}</Text>
    <Text style={{color: 'black'}}>{props.food.price} </Text>
  </View>
);

const FoodImage = ({marginLeft, ...props}) => (
  <View>
    <Image
      source={{uri: props.food.image}}
      style={{width: 100, height: 100, borderRadius: 8, marginLeft: marginLeft}}
    />
  </View>
);

const styles = StyleSheet.create({});
