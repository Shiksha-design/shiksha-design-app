import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditProfileScreen = () => {
    const [name, setName] = useState('test user');
    const [email, setEmail] = useState('testuser@example.com');
    const [phone, setPhone] = useState('9876543210');
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Back Arrow */}
            <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
            >
                <Ionicons name="arrow-back" size={22} color="#222" />
            </TouchableOpacity>
            <View style={styles.avatarWrapper}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                    style={styles.avatar}
                />
                <TouchableOpacity style={styles.editAvatarBtn}>
                    <Text style={styles.editAvatarText}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={styles.label}>Phone</Text>
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Enter your phone"
                    keyboardType="phone-pad"
                />
                <TouchableOpacity
                    style={styles.saveBtn}
                    onPress={() => navigation.navigate('MyProfileScreen')}
                >
                    <Text style={styles.saveBtnText}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        alignItems: 'center',
        backgroundColor: '#f6f8fa',
        flexGrow: 1,
    },
    backBtn: {
        position: 'absolute',
        top: 24,
        left: 16,
        zIndex: 10,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },
    avatarWrapper: {
        alignItems: 'center',
        marginBottom: 24,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#eaeaea',
    },
    editAvatarBtn: {
        marginTop: 10,
        backgroundColor: '#1976d2',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    editAvatarText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    form: {
        width: '100%',
        marginTop: 8,
    },
    label: {
        color: '#888',
        fontSize: 14,
        marginBottom: 4,
        marginTop: 16,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    saveBtn: {
        backgroundColor: '#1976d2',
        borderRadius: 24,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 32,
    },
    saveBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default EditProfileScreen;