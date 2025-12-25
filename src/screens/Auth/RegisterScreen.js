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
            {/* Logo */}
            <View style={styles.logoWrapper}>
                <View style={styles.logoCircle}>
                    <Ionicons name="school-outline" size={36} color="#1976d2" />
                </View>
            </View>
            {/* Title */}
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Start your learning journey today</Text>
            {/* Features Row */}
            <View style={styles.featuresRow}>
                <View style={styles.featureItem}>
                    <Ionicons name="book-outline" size={18} color="#1976d2" />
                    <Text style={styles.featureText}>Access 500+ courses</Text>
                </View>
                <View style={styles.featureItem}>
                    <Ionicons name="ribbon-outline" size={18} color="#1976d2" />
                    <Text style={styles.featureText}>Earn certificates</Text>
                </View>
                <View style={styles.featureItem}>
                    <Ionicons name="people-outline" size={18} color="#1976d2" />
                    <Text style={styles.featureText}>Learn from experts</Text>
                </View>
            </View>
            {/* Full Name */}
            <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={20} color="#888" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor="#888"
                    value={name}
                    onChangeText={setName}
                />
            </View>
            {/* Email */}
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
            {/* Password */}
            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Create a password"
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
            {/* Confirm Password */}
            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm your password"
                    placeholderTextColor="#888"
                    value={confirm}
                    onChangeText={setConfirm}
                    secureTextEntry={!showConfirm}
                />
                <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                    <Ionicons
                        name={showConfirm ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color="#888"
                        style={styles.inputIconRight}
                    />
                </TouchableOpacity>
            </View>
            {/* Create Account Button */}
            <TouchableOpacity style={styles.createBtn}>
                <Text style={styles.createBtnText}>Create Account  <Ionicons name="arrow-forward" size={16} color="#fff" /></Text>
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

            {/* Sign In Link */}
            <View style={styles.signupRow}>
                <Text style={styles.signupText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.signupLink}>Sign In</Text>
                </TouchableOpacity>
            </View>

            {/* Shiksha / Explore as Guest Button */}
            <TouchableOpacity
                style={styles.guestBtn}
                onPress={() => navigation.replace('Home')}
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
        marginBottom: 18,
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
        textAlign: 'center',
    },
    subtitle: {
        color: '#888',
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
        color: '#888',
        fontSize: 11,
        marginTop: 2,
        textAlign: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e0e0e0',
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
        color: '#222',
        paddingVertical: 12,
    },
    createBtn: {
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
    createBtnText: {
        color: '#fff',
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
        fontSize: 14,
        fontWeight: 'bold',
    },
    guestBtn: {
        width: '100%',
        marginTop: 10,
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
    }
});

export default RegisterScreen;