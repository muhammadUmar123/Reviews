import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Rating from '../components/Rating';

export default function EnterComment({ }) {
    const [rating, setRating] = useState(0)
    return (
        <ScrollView style={styles.container}>
            <View style={styles.ratingContainer}>
                <Text style={styles.seltext}> Select Rating </Text>
                <Rating onPress={(i) => setRating(i + 1)} totalStatr={Array.from(Array(5).keys())} colorStar={rating} />
            </View>

            <Text style={styles.ND}>Name</Text>
            <View style={{...styles.InputContainer,height:40}}>        
                <TextInput  style={{flex:1,paddingLeft:10}}/>
            </View>
            <Text style={styles.ND}>Review</Text>
            <View style={styles.InputContainer}>  
                <TextInput multiline={true} style={{flex:1,paddingHorizontal:10,marginTop:5}} />
            </View>

            <TouchableOpacity style={{backgroundColor:'#4ca854',marginTop:20,padding:15,borderRadius:5}}>
                <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );

}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    seltext: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18
    },
    ND: {
        color: '#A9A9A9',
        fontWeight: 'bold',
        marginTop:25

    },
    InputContainer: {
       height:150,
        marginTop:10,
        borderWidth:2,
        borderRadius:4,
        borderColor:'#3badfb'
    }

    //   color: '#A9A9A9',
})