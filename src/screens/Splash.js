import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../Components/CustomButton'

const Splash = () => {
    return (
        <View style={{ backgroundColor: '#D9AB9B', flex: 1 }}>
            <ScrollView contentContainerStyle={{ backgroundColor: '#D9AB9B', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, gap: 14 }} >
                <Image
                    source={require('../assets/dogs-removebg-preview.png')}
                    resizeMode='contain'
                    style={{ height: '52%', width: '100%' }}
                />
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 50 }}>PawAdopt</Text>
                <Text style={{ color: 'black', fontSize: 14, bottom: 7 }}>Find your perfect pet companion.</Text>
                <CustomButton />
            </ScrollView>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})