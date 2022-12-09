import React from 'react';
import { View, Text } from 'react-native';

import { ratings } from './Data'
export default function Percentage({ }) {


    return (
        <View style={{marginVertical:20}}>
       
            {ratings.map((item, index) => {
                return(
                <View key={item.text} style={{ flexDirection: 'row' ,marginVertical:5}}>
                    <Text style={{width:100}}>{item.text}</Text>
                    <View style={{backgroundColor:'#E5E4E2',width: '70%',height:10}}>
                       <View style={{width:item.width,backgroundColor:item.color}}><Text></Text></View>
                    </View>

                </View>
                )
            })}
        </View>

    );

}
