import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';

const courses = [
    {
        id: 1,
        category: 'Web Development',
        title: 'The Complete Web Development Bootcamp 2024',
        author: 'Dr. Angela Yu',
        rating: 4.8,
        students: '89,234',
        hours: '63 hours',
        price: '$29.99',
        oldPrice: '$199.00',
        image: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg',
        progress: 0.7,
    },
    {
        id: 2,
        category: 'Data Science',
        title: 'Python for Data Science and Machine Learning',
        author: 'Jose Portilla',
        rating: 4.7,
        students: '65,432',
        hours: '25 hours',
        price: '$24.99',
        oldPrice: '$149.99',
        image: 'https://img-c.udemycdn.com/course/240x135/897192_2cee_6.jpg',
        progress: 0.4,
    },
];

const MyCourseScreen = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
            {/* Header */}
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.avatar}><Text style={styles.avatarText}>L</Text></View>
                    <Text style={styles.title}>Learne</Text>
                </View>
                <Text style={styles.headerTitle}>My Courses</Text>
                <View style={styles.bell}><Text style={{ fontSize: 18 }}>🔔</Text></View>
            </View>

            {/* In Progress Section */}
            <View style={styles.sectionRow}>
                <Text style={styles.sectionTitle}>In Progress</Text>
                <Text style={styles.sectionCount}>{courses.length} courses</Text>
            </View>

            <FlatList
                data={courses}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.courseCard}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: item.image }} style={styles.courseImg} />
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <View style={styles.courseCategory}><Text style={styles.courseCategoryText}>{item.category}</Text></View>
                                <Text style={styles.courseTitle} numberOfLines={2}>{item.title}</Text>
                                <Text style={styles.courseAuthor}>{item.author}</Text>
                                <View style={styles.courseMetaRow}>
                                    <Text style={styles.courseRating}>⭐ {item.rating}</Text>
                                    <Text style={styles.courseStudents}>{item.students} students</Text>
                                    <Text style={styles.courseHours}>{item.hours}</Text>
                                </View>
                                {/* Progress Bar */}
                                <View style={styles.progressBarBg}>
                                    <View style={[styles.progressBarFill, { width: `${item.progress * 100}%` }]} />
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                                <Text style={styles.coursePrice}>{item.price}</Text>
                                <Text style={styles.courseOldPrice}>{item.oldPrice}</Text>
                            </View>
                        </View>
                    </View>
                )}
                contentContainerStyle={{ paddingBottom: 24 }}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f6f8fa' },
    header: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        padding: 16, backgroundColor: '#fff',
    },
    avatar: {
        width: 36, height: 36, borderRadius: 18, backgroundColor: '#1976d2', justifyContent: 'center', alignItems: 'center',
        marginRight: 10,
    },
    avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
    title: { fontSize: 20, fontWeight: 'bold', color: '#222' },
    headerTitle: { fontSize: 16, color: '#1976d2', fontWeight: 'bold' },
    bell: { backgroundColor: '#f1f3f6', borderRadius: 16, padding: 8 },
    sectionRow: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16, marginTop: 8, marginBottom: 8,
    },
    sectionTitle: { fontSize: 16, color: '#222', fontWeight: 'bold' },
    sectionCount: { color: '#888', fontSize: 14 },
    courseCard: {
        backgroundColor: '#fff', borderRadius: 12, marginHorizontal: 16, marginBottom: 14, padding: 10,
        shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2,
    },
    courseImg: { width: 80, height: 60, borderRadius: 8, marginRight: 8 },
    courseCategory: {
        backgroundColor: '#1976d2', alignSelf: 'flex-start', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2, marginBottom: 4,
    },
    courseCategoryText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
    courseTitle: { fontWeight: 'bold', fontSize: 14, color: '#222', marginBottom: 2 },
    courseAuthor: { color: '#888', fontSize: 12, marginBottom: 4 },
    courseMetaRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    courseRating: { color: '#1976d2', fontSize: 12 },
    courseStudents: { color: '#888', fontSize: 12 },
    courseHours: { color: '#888', fontSize: 12 },
    coursePrice: { color: '#1976d2', fontWeight: 'bold', fontSize: 14, marginTop: 8 },
    courseOldPrice: { color: '#888', fontSize: 12, textDecorationLine: 'line-through' },
    progressBarBg: {
        height: 5, backgroundColor: '#e3eaf2', borderRadius: 3, marginTop: 6, marginBottom: 2, width: '90%',
    },
    progressBarFill: {
        height: 5, backgroundColor: '#1976d2', borderRadius: 3,
    },
});

export default MyCourseScreen;