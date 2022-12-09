import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Comments from '../components/Comments';
import Rating from '../components/Rating';
import Percentage from '../components/Percentage'
export default function App() {
  console.ignoredYellowBox=true
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      <Text style={styles.overall}>Overall Rating</Text>
      <View style={styles.RatingContainer}>
        <Text style={styles.RatingText}>4.0</Text>
        <View >
          <Rating totalStatr={Array.from(Array(5).keys())} colorStar={4}/>
          <Text style={styles.UserReview}>based on 23 reviews</Text>
        </View>
      </View>
      <Percentage/>
      <View style={{borderBottomWidth:0.4,borderColor:'#d3d3d3'}}/>
      <Comments/>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  
  },
  overall:{
    fontSize:15,
    color:'#A9A9A9',
    fontWeight:'600'
  },
  RatingText:{
    fontSize:40,
    color:'#000',
    fontWeight:'600',
    width:100
  },
  UserReview:{
    fontSize:12,
    color:'#A9A9A9',
    fontWeight:'600',
    marginLeft:10,
    marginTop:5
  },
  RatingContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:20
  },
 
});
