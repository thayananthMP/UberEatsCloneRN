import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function HeaderTabs(props) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        type="Delivery"
        textColor="white"
        buttonColor="black"
        activetab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        type="Pickup"
        textColor="black"
        buttonColor="white"
        activetab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = props => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activetab === props.type ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.type)}>
      <Text
        style={{
          color: props.activetab === props.type ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}>
        {props.type}
      </Text>
    </TouchableOpacity>
  </View>
);
