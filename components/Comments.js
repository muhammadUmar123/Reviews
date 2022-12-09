import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Responsive from './Responsive'
import StaticRating from './StaticRating';

export default function Comments({ }) {

    return (
        <View style={{ marginTop: 10 }}>
            <View style={styles.RatingContainer}>
                <Image source={require('../assets/image.jpeg')} style={styles.imageContainer} />
                <View style={{width:'70%'}}>
                <View style={{ marginLeft: 10 }} >
                    <Text style={styles.UserReview}>John Doe</Text>
                    <StaticRating totalStatr={Array.from(Array(5).keys())} colorStar={3} />
                </View>
               
                </View>
            </View>
            <View style={{marginLeft:Responsive(50),marginTop:Responsive(10),width:'80%'}}>
                <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
            </View>
            <View style={{marginLeft:Responsive(50),marginTop:Responsive(10),width:'80%'}}>
                <Text style={{color:'#A9A9A9'}}>USA / Oct 23, 2022 </Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({



    UserReview: {
        fontSize: 12,
        color: '#000',
        fontWeight: '600',
        marginLeft: 10,
        marginBottom: 10
    },
    RatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    imageContainer: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 100
    }


});

