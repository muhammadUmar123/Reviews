import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import StaticRating from '../components/StaticRating'
export default function Home({ navigation }) {

    function UserDetail(item) {
        navigation.navigate('UserDetail', {
            name: item.name,
            rating: item.rating,
            about: item.about,
            detail: [
                {
                    'name': item.location,
                    'image': item.locationImg,
                    'id': '1'
                },
                {
                    'name': item.email,
                    'image': item.emailImg,
                    'id': '2'
                },
                {
                    'name': item.phone,
                    'image': item.phoneImg,
                    'id': '3'
                }
            ]



        })
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ height: 50 }} />
            <FlatList
                data={DATA}
                key={(data) => Math.random().toString()}
                renderItem={({ item, index, separators }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => UserDetail(item)}>
                        <View key={() => item.id} style={styles.container}>
                            <Image style={styles.userImage} source={item.image} />
                            <View style={{ width: '85%', left: 10 }}>
                                <View style={{ marginBottom: 10, }}>
                                    <Text style={{ fontWeight: '700' }}>{item.name}</Text>
                                    <View style={{ right: 5, marginTop: 10 }}>
                                        <StaticRating onPress={(i) => { }} totalStatr={Array.from(Array(5).keys())} colorStar={item.rating} />
                                    </View>
                                </View>
                                <Text style={{ color: '#36454F' }}>{item.about.substring(0, 80)}. . .</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        shadowOpacity: 0.4, width: '95%',
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#02a1b6',
        alignSelf: 'center',
        shadowOffset: { width: 1, height: 1 }
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
})


























const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
        name: 'Steve',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim diam eu lorem placerat efficitur. Praesent consequat et libero quis fringilla. Fusce ipsum metus, ultricies non sollicitudin eu, posuere ut sem.',
        image: require('../assets/image.jpeg'),
        rating: 3,
        email: 'test@ab.com',
        location: 'Pakistan',
        phone: '10315624524',
        locationImg: require('../assets/location.png'),
        emailImg: require('../assets/email.png'),
        phoneImg: require('../assets/phone.png')


    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
        name: 'Henery',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim diam eu lorem placerat efficitur. Praesent consequat et libero quis fringilla. Fusce ipsum metus, ultricies non sollicitudin eu, posuere ut sem.',
        image: require('../assets/image.jpeg'),
        rating: 5,
        email: 'test@ab.com',
        location: 'Pakistan',
        phone: '10315624524',
        locationImg: require('../assets/location.png'),
        emailImg: require('../assets/email.png'),
        phoneImg: require('../assets/phone.png')


    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
        name: 'Luke',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim diam eu lorem placerat efficitur. Praesent consequat et libero quis fringilla. Fusce ipsum metus, ultricies non sollicitudin eu, posuere ut sem.',
        image: require('../assets/image.jpeg'),
        rating: 2,
        email: 'test@ab.com',
        location: 'Pakistan',
        phone: '10315624524',
        locationImg: require('../assets/location.png'),
        emailImg: require('../assets/email.png'),
        phoneImg: require('../assets/phone.png')

    },
];
