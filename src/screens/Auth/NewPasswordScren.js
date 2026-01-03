import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import * as COLOR from '../../styles/colors';
import * as IMAGE from '../../styles/image';

const NewPasswordScren = () => {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.LIGHTDEFALUTCOLOR }}>
            <StatusBar backgroundColor={COLOR.LIGHTDEFALUTCOLOR} barStyle={"dark-content"} />
            <View style={styles.container}>
                {/* <View style={styles.iconCircle}>
                    <Ionicons name="lock-closed-outline" size={36} color={COLOR.DEFALUTCOLOR} />
                </View> */}
                <Image source={IMAGE.SHIKSHALOGO} style={{ width: 150, height: 60, resizeMode: 'contain' }} />
                <Text style={styles.title}>{"Set New Password"}</Text>
                <Text style={styles.subtitle}>{"Enter your new password below. Make sure it's strong and easy to remember."}</Text>
                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={20} color={COLOR.GRAY_DARK} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={"New password"}
                        placeholderTextColor={COLOR.GRAY_DARK}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons
                            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                            size={20}
                            color={COLOR.GRAY_DARK}
                            style={styles.inputIconRight}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={20} color={COLOR.GRAY_DARK} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={"Confirm password"}
                        placeholderTextColor={COLOR.GRAY_DARK}
                        value={confirm}
                        onChangeText={setConfirm}
                        secureTextEntry={!showConfirm}
                    />
                    <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                        <Ionicons
                            name={showConfirm ? 'eye-off-outline' : 'eye-outline'}
                            size={20}
                            color={COLOR.GRAY_DARK}
                            style={styles.inputIconRight}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.saveBtn}
                    onPress={() => navigation.navigate('LoginScreen')}
                >
                    <Text style={styles.saveBtnText}>{"Save Password"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.LIGHTDEFALUTCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    iconCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: COLOR.LIGHTLOGODEFALUTCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLOR.BLACK,
        marginBottom: 6,
        textAlign: 'center',
    },
    subtitle: {
        color: COLOR.GRAY_DARK,
        fontSize: 15,
        marginBottom: 28,
        textAlign: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLOR.LIGHT_GREY,
        marginBottom: 16,
        paddingHorizontal: 12,
        paddingVertical: 2,
        width: '100%',
    },
    inputIcon: {
        marginRight: 8,
    },
    inputIconRight: {
        marginLeft: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: COLOR.BLACK,
        paddingVertical: 12,
    },
    saveBtn: {
        backgroundColor: COLOR.DEFALUTCOLOR,
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 8,
    },
    saveBtnText: {
        color: COLOR.WHITE,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default NewPasswordScren;