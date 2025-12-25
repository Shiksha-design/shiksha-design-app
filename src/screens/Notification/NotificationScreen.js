import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const notifications = [
    {
        id: 1,
        title: 'Class Reminder',
        message: 'HIIT Training with Marcus starts in 2 hours',
        time: '2 hours ago',
        type: 'reminder',
        unread: true,
        new: true,
    },
    {
        id: 2,
        title: 'Reward Points Earned!',
        message: "You've earned 150 points from your recent visit",
        time: '5 hours ago',
        type: 'reward',
        unread: true,
        new: true,
    },
    {
        id: 3,
        title: 'Payment Successful',
        message: 'Your monthly membership payment of ₱2,500 has been processed',
        time: '1 day ago',
        type: 'payment',
        unread: false,
    },
    {
        id: 4,
        title: 'New Class Available',
        message: 'Sunrise Yoga sessions now available every morning at 6 AM',
        time: '2 days ago',
        type: 'class',
        unread: false,
    },
    {
        id: 5,
        title: 'Facility Maintenance',
        message: 'Pool area will be closed for maintenance on Nov 25',
        time: '3 days ago',
        type: 'maintenance',
        unread: false,
    },
];

const iconMap = {
    reminder: { emoji: '🗓️', color: '#43d39e' },
    reward: { emoji: '🏆', color: '#43d39e' },
    payment: { emoji: '✔️', color: '#1976d2' },
    class: { emoji: '📅', color: '#a259ff' },
    maintenance: { emoji: '🛠️', color: '#ffb300' },
};

const NotificationScreen = () => {
    const [allRead, setAllRead] = useState(false);
    const navigation = useNavigation();

    const unreadCount = notifications.filter(n => n.unread).length;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}
                >
                    <Ionicons name="arrow-back" size={22} color="#222" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
                <TouchableOpacity
                    style={styles.markAllBtn}
                    onPress={() => setAllRead(true)}
                >
                    <Text style={styles.markAllBtnText}>Mark all read</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
                {notifications.map((n, idx) => {
                    const icon = iconMap[n.type] || { emoji: '🔔', color: '#1976d2' };
                    const isUnread = !allRead && n.unread;
                    const isNew = n.new && isUnread;
                    return (
                        <View
                            key={n.id}
                            style={[
                                styles.card,
                                isUnread && styles.cardUnread,
                                idx === 0 && { marginTop: 18 },
                            ]}
                        >
                            <View style={[styles.iconCircle, { backgroundColor: icon.color + '22' }]}>
                                <Text style={{ fontSize: 22 }}>{icon.emoji}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[styles.title, isUnread && { color: '#1976d2' }]}>
                                        {n.title}
                                    </Text>
                                    {isNew && (
                                        <View style={styles.newBadge}>
                                            <Text style={styles.newBadgeText}>New</Text>
                                        </View>
                                    )}
                                </View>
                                <Text style={styles.message}>{n.message}</Text>
                                <Text style={styles.time}>{n.time}</Text>
                            </View>
                            <Text style={styles.arrow}>{'>'}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f8fa',
        paddingTop: 8,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 2,
    },
    backBtn: {
        marginRight: 8,
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
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
    },
    markAllBtn: {
        backgroundColor: '#f1f3f6',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    markAllBtnText: {
        color: '#1976d2',
        fontWeight: 'bold',
        fontSize: 14,
    },
    unreadText: {
        color: '#888',
        fontSize: 14,
        marginLeft: 18,
        marginBottom: 8,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 14,
        marginHorizontal: 16,
        marginBottom: 14,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.03,
        shadowRadius: 2,
        elevation: 1,
        borderWidth: 1,
        borderColor: '#fff',
    },
    cardUnread: {
        borderColor: '#1976d2',
        backgroundColor: '#eaf2fd',
    },
    iconCircle: {
        width: 38,
        height: 38,
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
        marginTop: 2,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#222',
        marginBottom: 2,
        marginRight: 8,
    },
    newBadge: {
        backgroundColor: '#43d39e22',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginLeft: 6,
    },
    newBadgeText: {
        color: '#43d39e',
        fontWeight: 'bold',
        fontSize: 12,
    },
    message: {
        color: '#444',
        fontSize: 14,
        marginBottom: 2,
    },
    time: {
        color: '#888',
        fontSize: 12,
        marginTop: 2,
    },
    arrow: {
        color: '#bbb',
        fontSize: 18,
        marginLeft: 8,
        marginTop: 8,
    },
});

export default NotificationScreen;