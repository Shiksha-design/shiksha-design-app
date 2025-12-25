import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
    { label: 'All' },
    { label: 'Web Dev' },
    { label: 'Mobile' },
    { label: 'Data' },
    { label: 'Design' },
    { label: 'Cloud' },
];

const featuredCourses = [
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
    },
    {
        id: 3,
        category: 'Mobile Development',
        title: 'iOS & Swift - Complete iOS App Development',
        author: 'Dr. Angela Yu',
        rating: 4.8,
        students: '70,345',
        hours: '45 hours',
        price: '$34.99',
        oldPrice: '$199.99',
        image: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg',
    },
    {
        id: 4,
        category: 'Design',
        title: 'UI/UX Design Masterclass: Create Modern Interfaces',
        author: 'Daniel Walter',
        rating: 4.6,
        students: '34,567',
        hours: '18 hours',
        price: '$19.99',
        oldPrice: '$99.99',
        image: 'https://img-c.udemycdn.com/course/240x135/1452908_8741_3.jpg',
    },
];

const DashboardScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.avatar}><Text style={styles.avatarText}>L</Text></View>
                    <Text style={styles.title}>Learne</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
                    <View style={styles.bell}><Text style={{ fontSize: 18 }}>🔔</Text></View>
                </TouchableOpacity>
            </View>

            {/* Banner */}
            <View style={styles.banner}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.bannerTitle}>Grow with Learne. Access 200+ courses from industry experts.</Text>
                    <View style={{ flexDirection: 'row', marginTop: 12 }}>
                        <TouchableOpacity style={styles.getStartedBtn}><Text style={styles.getStartedText}>Get Started →</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.demoBtn}><Text style={styles.demoText}>Watch Demo</Text></TouchableOpacity>
                    </View>
                </View>
                <Image source={{ uri: 'https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg' }} style={styles.bannerImg} />
            </View>

            {/* Stats */}
            <View style={styles.statsRow}>
                <View style={styles.statBox}><Text style={styles.statValue}>50k+</Text><Text style={styles.statLabel}>Students</Text></View>
                <View style={styles.statBox}><Text style={styles.statValue}>200+</Text><Text style={styles.statLabel}>Courses</Text></View>
                <View style={styles.statBox}><Text style={styles.statValue}>95%</Text><Text style={styles.statLabel}>Success Rate</Text></View>
            </View>

            {/* Categories */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
                {categories.map((cat, idx) => (
                    <TouchableOpacity key={cat.label} style={[styles.categoryChip, idx === 0 && styles.categoryChipActive]}>
                        <Text style={[styles.categoryText, idx === 0 && styles.categoryTextActive]}>{cat.label}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Featured Courses */}
            <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionHeader}>Featured Courses</Text>
                <TouchableOpacity><Text style={styles.seeAll}>See All →</Text></TouchableOpacity>
            </View>
            <View style={styles.coursesGrid}>
                {featuredCourses.map(course => (
                    <TouchableOpacity
                        key={course.id}
                        style={styles.courseCard}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('CourseDetailScreen', { course })}
                    >
                        <Image source={{ uri: course.image }} style={styles.courseImg} />
                        <View style={styles.courseCategory}><Text style={styles.courseCategoryText}>{course.category}</Text></View>
                        <Text style={styles.courseTitle} numberOfLines={2}>{course.title}</Text>
                        <Text style={styles.courseAuthor}>{course.author}</Text>
                        <View style={styles.courseMetaRow}>
                            <Text style={styles.courseRating}>⭐ {course.rating}</Text>
                            <Text style={styles.courseStudents}>{course.students}</Text>
                            <Text style={styles.courseHours}>{course.hours}</Text>
                        </View>
                        <View style={styles.coursePriceRow}>
                            <Text style={styles.coursePrice}>{course.price}</Text>
                            <Text style={styles.courseOldPrice}>{course.oldPrice}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            {/* How It Works Section */}
            <View style={styles.howItWorksSection}>
                <Text style={styles.howItWorksTitle}>How It Works</Text>
                <View style={styles.howItWorksStep}>
                    <View style={styles.howItWorksCircle}><Text style={styles.howItWorksCircleText}>01</Text></View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.howItWorksStepTitle}>Browse Courses</Text>
                        <Text style={styles.howItWorksStepDesc}>Explore our wide range of courses</Text>
                    </View>
                </View>
                <View style={styles.howItWorksStep}>
                    <View style={styles.howItWorksCircle}><Text style={styles.howItWorksCircleText}>02</Text></View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.howItWorksStepTitle}>Enroll & Learn</Text>
                        <Text style={styles.howItWorksStepDesc}>Start learning at your own pace</Text>
                    </View>
                </View>
                <View style={styles.howItWorksStep}>
                    <View style={styles.howItWorksCircle}><Text style={styles.howItWorksCircleText}>03</Text></View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.howItWorksStepTitle}>Get Certified</Text>
                        <Text style={styles.howItWorksStepDesc}>Earn recognized certificates</Text>
                    </View>
                </View>
            </View>
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
    bell: { backgroundColor: '#f1f3f6', borderRadius: 16, padding: 8 },
    banner: {
        flexDirection: 'row', backgroundColor: '#1976d2', borderRadius: 12, margin: 16, padding: 16,
        alignItems: 'center',
    },
    bannerTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
    getStartedBtn: {
        backgroundColor: '#fff', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 16, marginRight: 10,
    },
    getStartedText: { color: '#1976d2', fontWeight: 'bold' },
    demoBtn: {
        borderColor: '#fff', borderWidth: 1, borderRadius: 20, paddingVertical: 8, paddingHorizontal: 16,
    },
    demoText: { color: '#fff', fontWeight: 'bold' },
    bannerImg: { width: 90, height: 90, borderRadius: 45, marginLeft: 10, backgroundColor: '#fff' },
    statsRow: {
        flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 8, marginBottom: 8,
    },
    statBox: {
        backgroundColor: '#fff', borderRadius: 10, flex: 1, alignItems: 'center', padding: 12, marginHorizontal: 4,
    },
    statValue: { fontWeight: 'bold', fontSize: 16, color: '#1976d2' },
    statLabel: { color: '#888', fontSize: 12 },
    categoryScroll: { marginVertical: 8, paddingLeft: 8 },
    categoryChip: {
        backgroundColor: '#f1f3f6', borderRadius: 16, paddingVertical: 6, paddingHorizontal: 16, marginRight: 8,
    },
    categoryChipActive: { backgroundColor: '#1976d2' },
    categoryText: { color: '#222', fontWeight: '500' },
    categoryTextActive: { color: '#fff' },
    sectionHeaderRow: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16, marginTop: 16,
    },
    sectionHeader: { fontSize: 18, fontWeight: 'bold', color: '#222' },
    seeAll: { color: '#1976d2', fontWeight: 'bold' },
    coursesGrid: {
        flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', margin: 16,
    },
    courseCard: {
        backgroundColor: '#fff', borderRadius: 12, width: '48%', marginBottom: 16, padding: 10,
        shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2,
    },
    courseImg: { width: '100%', height: 90, borderRadius: 8, marginBottom: 8 },
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
    coursePriceRow: { flexDirection: 'row', alignItems: 'center' },
    coursePrice: { color: '#1976d2', fontWeight: 'bold', fontSize: 14, marginRight: 8 },
    courseOldPrice: { color: '#888', fontSize: 12, textDecorationLine: 'line-through' },
    howItWorksSection: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 32,
    },
    howItWorksTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
        marginBottom: 18,
        marginTop: 10,
    },
    howItWorksStep: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.03,
        shadowRadius: 2,
        elevation: 1,
    },
    howItWorksCircle: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: '#eaf2fd',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    howItWorksCircleText: {
        color: '#1976d2',
        fontWeight: 'bold',
        fontSize: 16,
    },
    howItWorksStepTitle: {
        fontWeight: 'bold',
        color: '#222',
        fontSize: 15,
        marginBottom: 2,
    },
    howItWorksStepDesc: {
        color: '#888',
        fontSize: 13,
    },
});

export default DashboardScreen;