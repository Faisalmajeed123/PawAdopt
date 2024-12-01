import { Image, StyleSheet, Text, View, TouchableWithoutFeedback, Animated, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const CustomButton = () => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[{ borderRadius: 100, paddingHorizontal: 20, paddingVertical: 4, backgroundColor: 'black' }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4, }}>

                <View style={{ backgroundColor: 'white', borderRadius: 60, padding: 12, right: 16 }}>
                    <Image
                        source={require('../assets/rb_6717.png')}
                        resizeMode='contain'
                        style={{ width: 30, height: 30 }} />
                </View>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', right: 4 }}>Get Started</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({})