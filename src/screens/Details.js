import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import CustomButton from '../Components/CustomButton';

const Cards = ({
  age = 'Age   ',
  unit = 'years',
  number = '2',
  name = 'dog',
}) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 30,
        alignItems: 'center',
        gap: 10,
        marginHorizontal: 5,
        padding: 10,
      }}>
      <View style={{backgroundColor: 'transparent'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            right: 2,
          }}>
          <View
            style={{backgroundColor: 'white', borderRadius: 100, padding: 25}}>
            <MaterialCommunityIcons name={name} size={30} color="black" />
          </View>
          <Text style={{color: 'white'}}>{age}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 30}}>{number}</Text>
          <Text style={{color: '#A9A9A9'}}> {unit}</Text>
        </View>
      </View>
    </View>
  );
};

const Details = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: '#D9AB9B',
          padding: 14,
        }}>
        <Header setHeaders="Details" />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 10,
          }}>
          <Image
            source={require('../assets/pitbull.png')}
            style={{
              height: '80%',
              width: '95%',
              position: 'absolute',
              alignSelf: 'center',
              top: 0,
            }}
            resizeMode="contain"
          />

          <View style={{flexDirection: 'row'}}>
            <Cards />
            <Cards age="Weight" unit="lbs" number="40.7" name="weight" />
          </View>

          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: 40,
              paddingVertical: 28,
              paddingHorizontal: 15,
              gap: 10,
            }}>
            <View style={{backgroundColor: 'transparent'}}>
              <Text style={{color: 'white', fontSize: 18}}>About</Text>
              <Text style={{color: 'white', fontSize: 12}}>
                Charlie is fully vaccinated, he is friendly to everyone he
                meet.Charlie is not only affectionate but also well-behaved,
                knowing various commands.
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', gap: 3, marginTop: 10}}>
            <View
              style={{
                padding: 25,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: 100,
              }}>
              <View style={{backgroundColor: 'transparent'}}>
                <FontAwesome5 name={'phone-alt'} size={30} color="white" />
              </View>
            </View>
            <View
              style={{
                padding: 25,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: 100,
              }}>
              <View style={{backgroundColor: 'transparent'}}>
                <FontAwesome6 name={'message'} size={30} color="white" />
              </View>
            </View>
            <CustomButton title="Adopting" iconPadding={20} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
