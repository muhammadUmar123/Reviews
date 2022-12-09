import React from 'react';
import { View, Text ,TouchableOpacity,Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function StaticRating ({totalStatr,colorStar,onPress}) {
  
   
    return (
        <>
      <View key={Math.floor(Math.random() * 100)+1 .toString()} style={{flexDirection:'row'}}>
        
        {totalStatr.map((item,index)=>{
            if(index<colorStar)
            return(
                <FontAwesome onPress={()=>onPress(index)} name="star" style={{marginLeft:5}} size={24} color="orange" />
            )
            else
            return(
                <FontAwesome onPress={()=>onPress(index)} name="star" style={{marginLeft:5,}} size={24} color="#d3d3d3" />
            )
        })}
       
      </View>
      </>
    );
  
}
