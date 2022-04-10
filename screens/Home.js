import {View, SafeAreaView, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import React, {useEffect} from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, {localRestaurants} from '../components/home/RestaurantItems';
import {getRestaurantsData} from '../server/ServerCall';
import BottomTabs from '../components/home/BottomTabs';

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState('Delivery');

  useEffect(() => {
    async function getRestaurants() {
      let data = await getRestaurantsData();
      console.log('data received ', data);
      setRestaurantData(data);
    }
    getRestaurants();
  }, [activeTab]);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
