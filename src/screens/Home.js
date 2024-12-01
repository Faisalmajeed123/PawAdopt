import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})// import { FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import Header from '../Components/Header'
// import { categories } from '../Constant/staticData'
// import CustomButton from '../Components/CustomButton'
// import Swiper from 'react-native-deck-swiper';

// const Home = () => {
//     return (
//         <View style={{ flex: 1, backgroundColor: '#fff' }}>
//             <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#D9AB9B', padding: 18, gap: 20 }}>
//                 <Header />
//                 <View>
//                     <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}>Discover</Text>
//                     <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Find a new pet for you</Text>
//                 </View>

//                 <FlatList
//                     data={categories}
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                     renderItem={({ item, index }) => {
//                         return (
//                             <View style={{ paddingHorizontal: 24, backgroundColor: item === 'Dog' ? 'black' : 'white', marginHorizontal: 2, maxHeight: '13%', alignItems: 'center', justifyContent: 'center', borderRadius: 60 }}>
//                                 <Text style={{ color: item === 'Dog' ? 'white' : 'black', fontSize: 16 }}>{item}</Text>
//                             </View>
//                         )
//                     }}
//                 />

//                 <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[{ borderRadius: 100, paddingHorizontal: 5, paddingVertical: 4, backgroundColor: 'black' }]}>
//                     <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4, }}>

//                         <View style={{ backgroundColor: 'white', borderRadius: 60, padding: 12, right: 16 }}>
//                             <Image
//                                 source={require('../assets/rb_6717.png')}
//                                 resizeMode='contain'
//                                 style={{ width: 30, height: 30 }} />
//                         </View>
//                         <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', right: 4 }}>Get Started</Text>
//                     </View>
//                 </TouchableOpacity>
//                 {/*
//                 <Swiper
//                     renderCard={(card) => {
//                         return (
//                             <View style={styles.card}>
//                                 <Text style={styles.text}>{card}</Text>
//                             </View>
//                         )
//                     }}
//                 /> */}

//             </ScrollView>
//         </View>
//     )
// }

// export default Home

// const styles = StyleSheet.create({})