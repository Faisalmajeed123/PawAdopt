import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const CustomButton = ({title = 'Get Started', iconPadding = 12}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Profile')}
      style={styles.container}>
      <View style={styles.main}>
        <View style={styles.imgView}>
          <Image
            source={require('../assets/rb_6717.png')}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </View>
        <Text style={styles.titleTxt}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  imgView: {
    backgroundColor: 'white',
    borderRadius: 60,
    padding: iconPadding,
    right: 16,
  },
  titleTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    right: 4,
  },
});
