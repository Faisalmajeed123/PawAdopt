import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Header = () => {
    return (
        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
            <Feather name='menu' color={'black'} size={30} />
            <AntDesign name='search1' color={'black'} size={30} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})