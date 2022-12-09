import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default function Rating ({totalStatr,colorStar,onPress}) {
  
   
    return (
        <>
      <View key={Math.floor(Math.random() * 100)+1 .toString()} style={{flexDirection:'row',justifyContent:'space-around',width:'100%',paddingHorizontal:60}}>
        
        {totalStatr.map((item,index)=>{
            if(index<colorStar)
            return(

                <FontAwesome onPress={()=>onPress(index)} name="star" style={{marginLeft:5}} size={24} color="orange" />
            //    <TouchableOpacity  onPress={()=>onPress(index)}>
            //     <Image source={require('../assets/starliked.png')} style={{width:25,height:25,resizeMode:'contain'}} />
            //     </TouchableOpacity>
            )
            else
            return(
                // <TouchableOpacity onPress={()=>onPress(index)}>
                // <Image source={require('../assets/star.png')} style={{width:25,height:25,resizeMode:'contain'}} />
                // </TouchableOpacity>
                <FontAwesome onPress={()=>onPress(index)} name="star" style={{marginLeft:5,}} size={24} color="#d3d3d3" />
                
            )
        })}
       
      </View>
      </>
    );
  
}
