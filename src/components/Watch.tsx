import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarPicker from 'react-native-calendar-picker';


import { Colors, button, textButton } from '../global/styles'
import Categories from '../components/Categories';
import DefaultText from '../components/DefaultText'
import InputText from '../components/InputText'

const { width, height }: { width: number, height: number } = Dimensions.get('screen')

const Watch = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tracking}>
                <View style={styles.category}>
                    <DefaultText styles={{ color: Colors.white, marginBottom: 5 }}>
                        Scroll to choose Catgeory &amp; start tracking...
                    </DefaultText>
                    <Categories numCol={1} horizontal={true} />
                </View>
                <InputText placeholder='Title / Description...' />

                <View style={styles.timer}>
                    <DefaultText styles={styles.time}>00:08:05:20</DefaultText>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.start}
                        onPress={() => console.log('start')}
                    >
                        <Icon name='ios-play' size={40} color={Colors.white} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.wrapperDetails}>
                <View style={styles.details}>
                    <DefaultText styles={styles.item}>Start at: </DefaultText>
                    <DefaultText styles={styles.item}>End at: </DefaultText>
                </View>
                <TouchableOpacity style={button} onPress={() => console.log('finish')} >
                    <Text style={textButton}>Finish</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        paddingTop: 5
    },
    tracking: {
        height: (height / 2) - 20,
        width: '100%',
        position: 'relative',
        paddingTop: 5,
        alignItems: 'center',
    },
    category: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 15,
        maxHeight: 100,
        width: '90%',
    },
    timer: {
        maxHeight: 60,
    },
    time: {
        textAlign: 'center',
        fontSize: 40,
        letterSpacing: 1,
        fontWeight: 'bold',
        color: Colors.white
    },
    buttons: {
        position: 'absolute',
        backgroundColor: Colors.white,
        height: 100,
        width: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        bottom: -40,
        left: (width / 2) - 50,
        zIndex: 2,
    },
    start: {
        height: 80,
        width: 80,
        borderRadius: 100,
        marginHorizontal: 10,
        backgroundColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    action: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: Colors.white,
    },
    wrapperDetails: {
        backgroundColor: Colors.white,
        width: '100%',
        zIndex: -1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    details: {
        paddingTop: 30,
        paddingBottom: 10,
        //paddingHorizontal: 20,
        width: '100%'
    },
    item: {
        padding: 10,
        fontSize: 18,
        //backgroundColor: Colors.green,
        marginVertical: 5
    }
})

export default Watch
