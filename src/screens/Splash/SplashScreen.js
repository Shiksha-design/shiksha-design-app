import React, { useEffect, useState } from 'react';
import MyPermissionController from '../../helpers/appPermission';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SCREEN from '../../context/screen/screenName';
import {
    View, StatusBar,
    Image, ImageBackground, Dimensions
} from 'react-native';
import * as TYPE from '../../context/actions/type';
import * as FONT from '../../styles/typography';
import Toast from 'react-native-simple-toast';
import * as IMAGE from '../../styles/image';
import { SafeAreaView } from 'react-native-safe-area-context';
const HEIGHT = Dimensions.get('window').height;
import * as COLOR from "../../styles/colors";

function SplashScreen(props) {

    useEffect(() => {
        checkPermission();
        setTimeout(() => {
            props.navigation.replace(SCREEN.MAINSTACK);
        }, 3000);
    }, []);

    //check permission 
    const checkPermission = () => {
        setTimeout(
            () => {
                MyPermissionController.checkAndRequestStoragePermission()
                    .then((granted) => console.log("Storage Permission Granted"))
                    .catch((err) => console.log(err))
            },
            500
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.WHITE }} >
            <StatusBar hidden={false} translucent={true} backgroundColor={"transparent"} barStyle={"dark-content"} />
            <Image source={IMAGE.SHIKSHALOGO} style={{ width: 245, height: 80, alignSelf: 'center', marginTop: HEIGHT / 3 + 50 }} />
            {/* <ImageBackground source={IMAGE.DEFAULTSPLASH} style={{
                flex: 1,
                height: "100%",
                width: "100%",
            }} >
            </ImageBackground> */}
        </SafeAreaView>
    );
}

export default SplashScreen;
