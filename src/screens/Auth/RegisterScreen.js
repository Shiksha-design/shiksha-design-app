import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import * as COLOR from '../../styles/colors';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <View style={styles.logoCircle}>
                    <Ionicons name="school-outline" size={36} color={COLOR.DEFALUTCOLOR} />
                </View>
            </View>
            <Text style={styles.title}>{"Create Account"}</Text>
            <Text style={styles.subtitle}>{"Start your learning journey today"}</Text>
            <View style={styles.featuresRow}>
                <View style={styles.featureItem}>
                    <Ionicons name="book-outline" size={18} color={COLOR.DEFALUTCOLOR} />
                    <Text style={styles.featureText}>{"Access 500+ courses"}</Text>
                </View>
                <View style={styles.featureItem}>
                    <Ionicons name="ribbon-outline" size={18} color={COLOR.DEFALUTCOLOR} />
                    <Text style={styles.featureText}>{"Earn certificates"}</Text>
                </View>
                <View style={styles.featureItem}>
                    <Ionicons name="people-outline" size={18} color={COLOR.DEFALUTCOLOR} />
                    <Text style={styles.featureText}>{"Learn from experts"}</Text>
                </View>
            </View>
            <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={20} color={COLOR.GRAY_DARK} style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor={COLOR.GRAY_DARK}
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} color={COLOR.GRAY_DARK} style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={COLOR.GRAY_DARK}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none" />
            </View>
            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color={COLOR.GRAY_DARK} style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Create a password"
                    placeholderTextColor={COLOR.GRAY_DARK}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword} />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color={COLOR.GRAY_DARK}
                        style={styles.inputIconRight} />
                </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color={COLOR.GRAY_DARK} style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm your password"
                    placeholderTextColor={COLOR.GRAY_DARK}
                    value={confirm}
                    onChangeText={setConfirm}
                    secureTextEntry={!showConfirm} />
                <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                    <Ionicons
                        name={showConfirm ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color={COLOR.GRAY_DARK}
                        style={styles.inputIconRight} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.createBtn}>
                <Text style={styles.createBtnText}>{"Create Account"}  <Ionicons name="arrow-forward" size={16} color={COLOR.WHITE} /></Text>
            </TouchableOpacity>
            <View style={styles.orRow}>
                <View style={styles.orLine} />
                <Text style={styles.orText}>{"OR CONTINUE WITH"}</Text>
                <View style={styles.orLine} />
            </View>
            <TouchableOpacity style={styles.googleBtn}>
                <Ionicons name="logo-google" size={20} color={COLOR.DEFALUTCOLOR} style={{ marginRight: 8 }} />
                <Text style={styles.googleBtnText}>{"Continue with Google"}</Text>
            </TouchableOpacity>
            <View style={styles.signupRow}>
                <Text style={styles.signupText}>{"Already have an account? "}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.signupLink}>{"Sign In"}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.guestBtn}
                onPress={() => navigation.replace('Home')}>
                <Text style={styles.guestBtnText}>{"Explore Shiksha"}</Text>
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
    logoWrapper: {
        marginBottom: 18,
        alignItems: 'center',
    },
    logoCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: COLOR.LIGHTLOGODEFALUTCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLOR.BLACK,
        marginBottom: 4,
        textAlign: 'center',
    },
    subtitle: {
        color: COLOR.GRAY_DARK,
        fontSize: 15,
        marginBottom: 18,
        textAlign: 'center',
    },
    featuresRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 18,
    },
    featureItem: {
        alignItems: 'center',
        flex: 1,
    },
    featureText: {
        color: COLOR.GRAY_DARK,
        fontSize: 11,
        marginTop: 2,
        textAlign: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLOR.LIGHT_GREY,
        marginBottom: 14,
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
    createBtn: {
        backgroundColor: COLOR.DEFALUTCOLOR,
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 18,
        marginTop: 4,
        flexDirection: 'row',
    },
    createBtnText: {
        color: COLOR.WHITE,
        fontWeight: 'bold',
        fontSize: 16,
    },
    orRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        width: '100%',
    },
    orLine: {
        flex: 1,
        height: 1,
        backgroundColor: COLOR.LIGHT_GREY,
    },
    orText: {
        marginHorizontal: 10,
        color: COLOR.GRAY_DARK,
        fontSize: 14,
        fontWeight: 'bold',
    },
    guestBtn: {
        width: '100%',
        marginTop: 10,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLOR.DEFALUTCOLOR,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        marginTop: 0,
        backgroundColor: 'transparent',
    },
    guestBtnText: {
        color: COLOR.DEFALUTCOLOR,
        fontWeight: 'bold',
        fontSize: 16,
    },
    googleBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLOR.LIGHT_GREY,
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: '100%',
        marginBottom: 18,
        justifyContent: 'center',
    },
    googleBtnText: {
        color: COLOR.DEFALUTCOLOR,
        fontWeight: 'bold',
        fontSize: 15,
    },
    signupRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    signupText: {
        color: COLOR.GRAY_DARK,
        fontSize: 14,
    },
    signupLink: {
        color: COLOR.DEFALUTCOLOR,
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default RegisterScreen;