import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTHUSERINFO } from '../../context/actions/type';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const handleSignIn = async () => {
        // Save user info to local storage
        const userInfo = { email, password };
        await AsyncStorage.setItem(AUTHUSERINFO, JSON.stringify(userInfo));
        // Instead of navigating to a tab, just reload the navigation state
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    };

    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoWrapper}>
                <View style={styles.logoCircle}>
                    <Ionicons name="school-outline" size={36} color="#1976d2" />
                </View>
            </View>
            {/* Welcome Text */}
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue learning</Text>

            {/* Email Input */}
            <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} color="#888" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            {/* Password Input */}
            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color="#888"
                        style={styles.inputIconRight}
                    />
                </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity
                style={styles.forgotBtn}
                onPress={() => navigation.navigate('ForgotPasswordScreen')}
            >
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity
                style={[
                    styles.signInBtn,
                    (!email.trim() || !password.trim()) && { opacity: 0.5 }
                ]}
                disabled={!email.trim() || !password.trim()}
                onPress={handleSignIn}
            >
                <Text style={styles.signInBtnText}>
                    Sign In  <Ionicons name="arrow-forward" size={16} color="#fff" />
                </Text>
            </TouchableOpacity>

            {/* Or Continue With */}
            <View style={styles.orRow}>
                <View style={styles.orLine} />
                <Text style={styles.orText}>OR CONTINUE WITH</Text>
                <View style={styles.orLine} />
            </View>

            {/* Google Button */}
            <TouchableOpacity style={styles.googleBtn}>
                <Ionicons name="logo-google" size={20} color="#1976d2" style={{ marginRight: 8 }} />
                <Text style={styles.googleBtnText}>Continue with Google</Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View style={styles.signupRow}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.signupLink}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            {/* Shiksha / Explore as Guest Button */}
            <TouchableOpacity
                style={styles.guestBtn}
                onPress={() => navigation.replace('main')}
            >
                <Text style={styles.guestBtnText}>Explore Shiksha</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f8fa',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    logoWrapper: {
        marginBottom: 24,
        alignItems: 'center',
    },
    logoCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eaf2fd',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
        textAlign: 'center',
    },
    subtitle: {
        color: '#888',
        fontSize: 15,
        marginBottom: 28,
        textAlign: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e0e0e0',
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
        color: '#222',
        paddingVertical: 12,
    },
    forgotBtn: {
        alignSelf: 'flex-end',
        marginBottom: 18,
    },
    forgotText: {
        color: '#1976d2',
        fontWeight: 'bold',
        fontSize: 14,
    },
    signInBtn: {
        backgroundColor: '#1976d2',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 18,
        marginTop: 4,
        flexDirection: 'row',
    },
    signInBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    guestBtn: {
        width: '100%',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#1976d2',
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        marginTop: 0,
        backgroundColor: 'transparent',
    },
    guestBtnText: {
        color: '#1976d2',
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
        backgroundColor: '#e0e0e0',
    },
    orText: {
        marginHorizontal: 10,
        color: '#888',
        fontSize: 13,
        fontWeight: 'bold',
    },
    googleBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: '100%',
        marginBottom: 18,
        justifyContent: 'center',
    },
    googleBtnText: {
        color: '#1976d2',
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
        color: '#888',
        fontSize: 14,
    },
    signupLink: {
        color: '#1976d2',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default LoginScreen;