import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({setHeaders = 'Home'}) => {
  const [header, setHeader] = useState(setHeaders);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {header === 'Details' && (
        <View style={styles.detailsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <MaterialIcons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
              Charlie
            </Text>
            <Text style={{color: 'black', fontSize: 12}}>
              American Pit Bull Terrier
            </Text>
          </View>
          <Entypo name="cross" size={30} color="black" />
        </View>
      )}
      {header === 'Home' && (
        <>
          <Feather name="menu" color={'black'} size={30} />
          <AntDesign name="search1" color={'black'} size={30} />
        </>
      )}

      {header === 'Profile' && (
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            flex: 1,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack}>
            <Feather name="menu" color={'black'} size={30} />
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
              Profile
            </Text>
          </View>
          <Ionicons name="notifications-outline" size={30} color="black" />
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
});
