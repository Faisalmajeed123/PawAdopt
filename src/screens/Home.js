import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {categories} from '../Constant/staticData';
import CustomButton from '../Components/CustomButton';
import Swiper from 'react-native-swiper';

const Home = () => {
  const data = [
    require('../assets/corgi-6673343_1280.jpg'),
    require('../assets/dog-5723334_1280.jpg'),
    require('../assets/dog-7330712_1280.jpg'),
    require('../assets/dog-8439530_1280.jpg'),
    require('../assets/WhiteDog.png'),
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#e5b7a8',
          padding: 18,
          gap: 20,
        }}>
        <Header setHeaders="Home" />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30}}>
            Discover
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            Find a new pet for you
          </Text>
        </View>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  paddingHorizontal: 24,
                  backgroundColor: item === 'Dog' ? 'black' : 'white',
                  marginHorizontal: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 60,
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    color: item === 'Dog' ? 'white' : 'black',
                    fontSize: 16,
                  }}>
                  {item}
                </Text>
              </View>
            );
          }}
        />

        <Swiper style={styles.wrapper}>
          {data.map((item, index) => (
            <View style={{}} key={index}>
              <Image
                source={item}
                style={{height: 500, width: 500}}
                resizeMode="contain"
              />
            </View>
          ))}
        </Swiper>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[
            {
              borderRadius: 100,
              paddingHorizontal: 5,
              paddingVertical: 4,
              backgroundColor: 'black',
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 60,
                padding: 12,
                right: 16,
              }}>
              <Image
                source={require('../assets/rb_6717.png')}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
                right: 4,
              }}>
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
