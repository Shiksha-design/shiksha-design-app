import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity , Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import * as COLOR from '../../styles/colors';
import * as IMAGE from '../../styles/image';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* <View style={styles.iconCircle}>
                <Ionicons name="mail-open-outline" size={36} color={COLOR.DEFALUTCOLOR} />
            </View> */}
              <Image source={IMAGE.SHIKSHALOGO} style={{ width: 150, height: 60, resizeMode: 'contain' , marginBottom: 18 }} />
            <Text style={styles.title}>{"Forgot Password?"}</Text>
            <Text style={styles.subtitle}>
                {"Enter your registered email address and we'll send you a link to reset your password."}
            </Text>
            <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} color={COLOR.GRAY_DARK} style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={COLOR.GRAY_DARK}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity
                style={styles.sendBtn}
                onPress={() => navigation.navigate('NewPasswordScreen')}
            >
                <Text style={styles.sendBtnText}>{"Verify"}</Text>
            </TouchableOpacity>
        </View>
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
        borderColor: '#e0e0e0',
        marginBottom: 18,
        paddingHorizontal: 12,
        paddingVertical: 2,
        width: '100%',
    },
    inputIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: COLOR.BLACK,
        paddingVertical: 12,
    },
    sendBtn: {
        backgroundColor: COLOR.DEFALUTCOLOR,
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 8,
    },
    sendBtnText: {
        color: COLOR.WHITE,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ForgotPasswordScreen;