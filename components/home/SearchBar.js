import {View, Text} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyD4CIQI2ykm_AMBjOD271gTAXk_xVvoaQY'}}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 8}}>
            <Ionicons name="location-sharp" size={20} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: 30,
              padding: 8,
              marginRight: 8,
              alignItems: 'center',
            }}>
            <AntDesign name="clockcircle" size={11} style={{marginRight: 6}} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
