import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {services} from '../Constant/staticData';
import {useNavigation} from '@react-navigation/native';

const Cards = ({
  backgroundColor = 'black',
  number = 'Charlie',
  detail = 'American Pit Bull Terrier',
  image = require('../assets/file(2).png'),
  titleColor = 'white',
  iconCOlor = 'white',
  imagebackground = 'white',
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details')}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 30,
        gap: 10,
        marginHorizontal: 5,
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          right: 2,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: imagebackground,
            borderRadius: 100,
            padding: 4,
          }}>
          <Image
            source={image}
            resizeMode="contain"
            style={{height: 60, width: 60}}
          />
        </View>
        <Entypo name={'dots-three-vertical'} size={20} color={iconCOlor} />
      </View>
      <View style={{alignItems: 'baseline', justifyContent: 'center'}}>
        <Text style={{color: titleColor, fontSize: 20}}>{number}</Text>
        <Text
          style={{color: '#A9A9A9', fontSize: 12, width: '80%'}}
          numberOfLines={2}>
          {detail}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Profile = () => {
  const Navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#e5b7a8',
          padding: 15,
          gap: 17,
        }}>
        <Header setHeaders="Profile" />

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 100,
            padding: 6,
            gap: 13,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#E6E7EB',
              borderRadius: 100,
              padding: 10,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/rb_176664.png')}
              resizeMode="contain"
              style={{height: 40, width: 40}}
            />
          </View>
          <View>
            <Text style={{color: 'black', fontSize: 20}}>
              Hi, Kristin Watson
            </Text>
            <Text style={{color: 'gray', fontSize: 12}}>
              wotson_kristy@gmail.com
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text style={{color: 'black', fontSize: 20}}>Your pets</Text>
          <Text style={{color: 'black', fontSize: 12}}>See all</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Cards />
          <Cards
            number="Roxy"
            imagebackground="#E6E7EB"
            iconCOlor="black"
            detail="Norwegein Forest Cat"
            image={require('../assets/red-white-cat-i-white-studio.png')}
            backgroundColor="white"
            titleColor="black"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text style={{color: 'black', fontSize: 20}}>Pet Care Nearby</Text>
          <Text style={{color: 'black', fontSize: 12}}>See all</Text>
        </View>

        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 40,
            overflow: 'hidden',
            paddingVertical: 10,
            paddingHorizontal: 5,
            gap: 20,
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: 'transparent',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 100,
                  padding: 10,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/pitbull.png')}
                  resizeMode="contain"
                  style={{height: 50, width: 50}}
                />
              </View>
              <View>
                <Text style={{color: 'white', fontSize: 16}}>
                  Animal Pet Care
                </Text>
                <View style={{flexDirection: 'row', gap: 8}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo
                      name={'location-pin'}
                      size={15}
                      color={'lightgray'}
                    />
                    <Text style={{fontSize: 12}}>1.3 km</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name={'star'} size={15} color={'lightgray'} />
                    <Text style={{fontSize: 12}}> 4.2</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{right: 5, bottom: 10}}>
              <Entypo name={'dots-three-vertical'} size={20} color={'white'} />
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={services}
            horizontal
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    borderRadius: 100,
                    paddingVertical: 20,
                    paddingHorizontal: 30,
                    marginHorizontal: 2,
                  }}>
                  <Text style={{color: 'white'}}>{item}</Text>
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: 100,
            flexDirection: 'row',
            alignSelf: 'center',
            paddingVertical: 6,
            gap: 40,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
          }}>
          <TouchableOpacity onPress={() => Navigation.navigate('Home')}>
            <MaterialCommunityIcons name={'home'} size={35} color={'white'} />
          </TouchableOpacity>
          <AntDesign
            name={'search1'}
            size={30}
            color={'white'}
            style={{left: 14}}
          />
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              alignItems: 'center',
              padding: 15,
              left: '40%',
            }}>
            <Ionicons name={'person'} size={30} color={'black'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({});
