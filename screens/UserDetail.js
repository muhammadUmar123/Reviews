import React, { Component, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Modal, Image, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ButtonComponent from '../components/ButtonComponent';
import Comments from '../components/Comments';
import Percentage from '../components/Percentage';
import Rating from '../components/Rating';
import StaticRating from '../components/StaticRating';

export default function UserDetail({ route }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [rating, setRating] = useState(0)
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff' }}>
            <View>
                <Image style={{ width: '100%', height: 250 }} source={require('../assets/wallpaper.jpeg')} />
                <View style={styles.imageOuterContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../assets/image.jpeg')} />
                    </View>
                </View>
            </View>
            <View style={{ height: 70 }} />
            <View style={{ alignSelf: 'center' }}>
                <Text style={styles.nameStyle}>{route.params.name}</Text>
                <StaticRating onPress={(i) => { }} totalStatr={Array.from(Array(5).keys())} colorStar={route.params.rating} />
                <Text style={styles.rating}>{route.params.rating} stars</Text>
            </View>
            <Text style={styles.aboutus}>{route.params.about}</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 30 }}>
                {route.params.detail.map((item, index) => {
                    return (
                        <View key={item.key} style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', }} source={item.image} />
                            <Text style={{ marginLeft: 10 }}>{item.name}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <Text style={{ marginTop: 40, padding: 10, fontSize: 20, fontWeight: '700' }}>People Reviews</Text>
                <Text onPress={() => setModalVisible(!modalVisible)} style={{ marginTop: 40, color: '#02a1b6' }}>Add Review</Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Percentage />
            </View>
            <Comments />
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <TouchableOpacity activeOpacity={1} style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={()=> setModalVisible(!modalVisible)}>
                            <Image style={styles.closImg} source={require('../assets/close.png')} />
                            </TouchableOpacity>
                            {/* <Text style={styles.modalText}>Give Review</Text> */}
                            {/* <Text style={{ color: '#36454F', padding: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim diam eu lorem placerat efficitur. Praesent consequat et libero quis fringilla. </Text> */}
                            <Rating onPress={(i) => setRating(i + 1)} totalStatr={Array.from(Array(5).keys())} colorStar={rating} />
                            <View style={{ width: '100%', marginTop: 10 }}>
                                <Text style={{ fontSize: 12, fontWeight: '400', marginLeft: 10 }}>Your Reivew</Text>
                                <View style={styles.txtContainer}>
                                    <TextInput style={{ margin: 10, flex: 1 }} multiline={true} placeholder='Enter Your Review' />
                                </View>
                            </View>
                        </View>
                        {/* <ButtonComponent page='' action={(act) => navigation.replace(act)} btnstyle={''} btntext={'Add Review'} btntxtstyle={{ color: '#fff' }} />
                        <ButtonComponent page='' action={(act) => navigation.replace(act)} btnstyle={''} btntext={'Add Review'} btntxtstyle={{ color: '#fff' }} /> */}

                    </TouchableOpacity>

                </Modal>

            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    imageOuterContainer: {
        position: 'absolute',
        bottom: -70,
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 10,
        width: 160,
        height: 160,
        borderRadius: 100,
    },
    imageContainer: {
        alignSelf: 'center',
        borderColor: '#02a1b6',
        borderWidth: 10,
        width: 140,
        height: 140,
        borderRadius: 100,
    },
    image: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        borderRadius: 100,
    },
    nameStyle: {
        marginVertical: 10,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    },
    rating: {
        color: 'gray',
        textAlign: 'center',
        marginTop: 10
    },
    aboutus: {
        color: '#36454F',
        marginTop: 10,
        textAlign: 'justify',
        padding: 15
    },
    closImg: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
        resizeMode: 'contain',
        right: 10,
        top: 10
    },
    txtContainer: {
        borderWidth: 2,
        marginHorizontal: 10,
        borderRadius: 5,
        borderColor: '#fff',
        height: Dimensions.get('window').height * 0.2,
        marginTop: 4,
        backgroundColor: '#F5F5F5'
    },
    /////////Modal Design////////

    centeredView: {
        flex: 1,



    },
    modalView: {
        marginTop: 70,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width: '90%',
        height: 350,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 5,
        textAlign: "center",
        fontWeight: '700', fontSize: 20,
        marginTop: 15
    }
})