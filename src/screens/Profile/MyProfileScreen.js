import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTHUSERINFO } from '../../context/actions/type';

const MyProfileScreen = () => {
    const navigation = useNavigation();

    const handleLogout = async () => {
        await AsyncStorage.removeItem(AUTHUSERINFO);
        navigation.replace('Main');
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
            {/* Back Arrow */}
            <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
            >
                <Ionicons name="arrow-back" size={22} color="#222" />
            </TouchableOpacity>

            {/* Profile Card */}
            <View style={styles.profileCard}>
                <View style={styles.avatarRow}>
                    <View style={styles.avatar}><Text style={styles.avatarText}>T</Text></View>
                    <TouchableOpacity style={styles.avatarEdit}><Text style={{ fontSize: 16 }}>📷</Text></TouchableOpacity>
                </View>
                <Text style={styles.name}>test user</Text>
                <Text style={styles.email}>testuser@gmail.com</Text>
            </View>

            {/* Stats Row */}
            <View style={styles.statsRow}>
                <View style={styles.statBox}><Text style={styles.statValue}>2</Text><Text style={styles.statLabel}>Courses</Text></View>
                <View style={styles.statBox}><Text style={styles.statValue}>1</Text><Text style={styles.statLabel}>Certificates</Text></View>
            </View>

            {/* Action List */}
            <View style={styles.actionList}>
                <TouchableOpacity
                    style={styles.actionItem}
                    onPress={() => navigation.navigate('EditProfileScreen')}
                >
                    <Text style={styles.actionIcon}>👤</Text>
                    <Text style={styles.actionText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.actionItem}
                    onPress={() => navigation.navigate('HelpAndSupportScreen')}
                >
                    <Text style={styles.actionIcon}>❓</Text>
                    <Text style={styles.actionText}>Help & Support</Text>
                </TouchableOpacity>
            </View>

            {/* Logout Button */}
            <TouchableOpacity
                style={styles.logoutBtn}
                onPress={handleLogout}
            >
                <Text style={styles.logoutText}>↩ Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f6f8fa' },
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
    profileCard: {
        marginTop: 80,
        backgroundColor: '#fff',
        borderRadius: 16,
        margin: 16,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
    },
    avatarRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
    avatar: {
        width: 64, height: 64, borderRadius: 32, backgroundColor: '#1976d2', justifyContent: 'center', alignItems: 'center',
    },
    avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 32 },
    avatarEdit: {
        backgroundColor: '#fff', borderRadius: 16, padding: 6, marginLeft: -18, marginTop: 32, borderWidth: 1, borderColor: '#eee',
        zIndex: 1,
    },
    name: { fontSize: 18, fontWeight: 'bold', color: '#222', marginTop: 4 },
    email: { color: '#888', fontSize: 14, marginTop: 2 },
    statsRow: {
        flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginBottom: 16,
    },
    statBox: {
        backgroundColor: '#fff', borderRadius: 12, flex: 1, alignItems: 'center', padding: 12, marginHorizontal: 4,
        shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 2, elevation: 1,
    },
    statValue: { fontWeight: 'bold', fontSize: 16, color: '#1976d2' },
    statLabel: { color: '#888', fontSize: 12 },
    actionList: {
        backgroundColor: '#fff', borderRadius: 16, marginHorizontal: 16, marginBottom: 16, paddingVertical: 4,
        shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 2, elevation: 1,
    },
    actionItem: {
        flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 18, borderBottomWidth: 1, borderBottomColor: '#f1f3f6',
    },
    actionIcon: { fontSize: 18, marginRight: 16, color: '#1976d2' },
    actionText: { fontSize: 16, color: '#222' },
    logoutBtn: {
        borderWidth: 1, borderColor: '#ffb3b3', backgroundColor: '#fff', borderRadius: 14, marginHorizontal: 16, paddingVertical: 14, alignItems: 'center',
    },
    logoutText: { color: '#e53935', fontWeight: 'bold', fontSize: 16 },
});

export default MyProfileScreen;