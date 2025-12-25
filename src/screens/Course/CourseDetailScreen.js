import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const sampleCourse = {
    id: 1,
    category: 'Web Development',
    title: 'The Complete Web Development Bootcamp 2024',
    author: 'Dr. Angela Yu',
    rating: 4.8,
    reviews: 12543,
    students: '89,234',
    hours: '63 hours',
    lessons: 450,
    level: 'Beginner',
    image: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg',
    about: 'Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps',
    learn: [
        'Build 16 web development projects',
        'Learn the latest technologies including React and Node.js',
        'Master both front-end and back-end development',
        'Build a portfolio of 16+ websites to apply for developer jobs'
    ],
    curriculum: [
        {
            section: 'Front-End Web Development',
            lectures: [
                { title: 'Introduction to HTML', preview: true, duration: '15:00' },
                { title: 'HTML Document Structure', preview: false, duration: '20:00' },
                { title: 'CSS Fundamentals', preview: false, duration: '25:00' },
                { title: 'CSS Flexbox & Grid', preview: false, duration: '30:00' }
            ]
        },
        {
            section: 'JavaScript Fundamentals',
            lectures: [
                { title: 'Variables & Data Types', preview: false, duration: '18:00' },
                { title: 'Functions & Scope', preview: false, duration: '22:00' },
                { title: 'DOM Manipulation', preview: false, duration: '27:00' }
            ]
        }
    ],
    price: '$29.99',
    oldPrice: '$199.99',
    discount: '85% off'
};

const CourseDetailScreen = () => {
    const course = sampleCourse;
    const navigation = useNavigation();

    const learnList = Array.isArray(course.learn) ? course.learn : [];
    const curriculumList = Array.isArray(course.curriculum) ? course.curriculum : [];

    // Accordion state for curriculum sections
    const [expandedSections, setExpandedSections] = useState([]);

    const toggleSection = idx => {
        setExpandedSections(prev =>
            prev.includes(idx)
                ? prev.filter(i => i !== idx)
                : [...prev, idx]
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#f6f8fa' }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Back Button over the image */}
                <View style={styles.bannerWrapper}>
                    <Image source={{ uri: course.image }} style={styles.bannerImg} />
                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.7}
                    >
                        <Ionicons name="arrow-back" size={22} color="#222" />
                    </TouchableOpacity>
                </View>

                <View style={{ paddingHorizontal: 16, marginTop: 0 }}>
                    <View style={{ marginTop: -10, flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                        <View style={styles.categoryBadge}>
                            <Text style={styles.categoryBadgeText}>{course.category}</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>{course.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                            style={styles.avatar}
                        />
                        <View style={{ marginLeft: 8 }}>
                            <Text style={styles.author}>{course.author}</Text>
                            <Text style={styles.instructorLabel}>Instructor</Text>
                        </View>
                    </View>
                    <View style={styles.statsRow}>
                        <Text style={styles.rating}>⭐ {course.rating} <Text style={styles.ratingCount}>({course.reviews} reviews)</Text></Text>
                        <Text style={styles.statText}>👥 {course.students} students</Text>
                        <Text style={styles.statText}>⏱ {course.hours}</Text>
                        <Text style={styles.statText}>📚 {course.lessons} lessons</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 6 }}>
                        <View style={styles.levelBadge}><Text style={styles.levelBadgeText}>{course.level}</Text></View>
                    </View>
                </View>

                {/* About This Course */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About This Course</Text>
                    <Text style={styles.about}>{course.about}</Text>
                </View>

                {/* What You'll Learn */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>What You'll Learn</Text>
                    <View style={styles.learnBox}>
                        {learnList.map((item, idx) => (
                            <View key={idx} style={styles.learnRow}>
                                <Text style={styles.learnBullet}>✔️</Text>
                                <Text style={styles.learnText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Curriculum */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Curriculum</Text>
                    {curriculumList.map((section, idx) => {
                        const expanded = expandedSections.includes(idx);
                        return (
                            <View key={section.section || idx} style={styles.curriculumSection}>
                                <TouchableOpacity
                                    style={styles.curriculumHeader}
                                    onPress={() => toggleSection(idx)}
                                    activeOpacity={0.7}
                                >
                                    <View>
                                        <Text style={styles.curriculumTitle}>{section.section}</Text>
                                        <Text style={styles.curriculumLectures}>
                                            {Array.isArray(section.lectures) ? section.lectures.length : 0} lectures
                                        </Text>
                                    </View>
                                    <Text style={styles.chevron}>
                                        {expanded ? '▲' : '▼'}
                                    </Text>
                                </TouchableOpacity>
                                {expanded && Array.isArray(section.lectures) && section.lectures.map((lec, lidx) => (
                                    <View key={lec.title || lidx} style={styles.lectureRow}>
                                        <Text style={styles.lectureIcon}>▶</Text>
                                        <Text style={styles.lectureTitle}>{lec.title}</Text>
                                        {lec.preview && (
                                            <View style={styles.previewBadge}><Text style={styles.previewBadgeText}>Preview</Text></View>
                                        )}
                                        <Text style={styles.lectureDuration}>{lec.duration}</Text>
                                    </View>
                                ))}
                            </View>
                        );
                    })}
                </View>

                {/* Reviews */}
                <View style={styles.section}>
                    <View style={styles.reviewsHeader}>
                        <Text style={styles.sectionTitle}>Reviews</Text>
                        <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
                    </View>
                    <View style={styles.reviewBox}>
                        <Text style={styles.reviewRating}>4.8</Text>
                        <Text style={styles.reviewStars}>⭐⭐⭐⭐⭐</Text>
                        <Text style={styles.reviewCount}>{course.reviews} reviews</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Bar */}
            <View style={styles.bottomBar}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.price}>{course.price}</Text>
                        <Text style={styles.oldPrice}>{course.oldPrice}</Text>
                    </View>
                    <Text style={styles.discount}>{course.discount}</Text>
                </View>
                <TouchableOpacity style={styles.enrollBtn}>
                    <Text style={styles.enrollBtnText}>Enroll Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bannerWrapper: {
        position: 'relative',
        width: '100%',
        height: 180,
    },
    bannerImg: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: '#eaeaea'
    },
    backBtn: {
        position: 'absolute',
        alignSelf: "center",
        top: 30,
        left: 16,
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
    categoryBadge: {
        backgroundColor: '#1976d2',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 2,
        alignSelf: 'flex-start',
        marginBottom: 6
    },
    categoryBadgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    },
    title: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#eee'
    },
    author: {
        fontWeight: 'bold',
        color: '#222'
    },
    instructorLabel: {
        color: '#888',
        fontSize: 12
    },
    statsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 10,
        gap: 10
    },
    rating: {
        color: '#1976d2',
        fontWeight: 'bold',
        marginRight: 8
    },
    ratingCount: {
        color: '#888',
        fontWeight: 'normal'
    },
    statText: {
        color: '#888',
        fontSize: 12,
        marginRight: 10
    },
    levelBadge: {
        backgroundColor: '#e0f7e9',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 2,
        alignSelf: 'flex-start'
    },
    levelBadgeText: {
        color: '#1db954',
        fontWeight: 'bold',
        fontSize: 12
    },
    section: {
        marginTop: 18,
        paddingHorizontal: 16
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
        color: '#222'
    },
    about: {
        color: '#444',
        fontSize: 14,
        marginBottom: 4
    },
    learnBox: {
        backgroundColor: '#eaf2fd',
        borderRadius: 12,
        padding: 12
    },
    learnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6
    },
    learnBullet: {
        fontSize: 16,
        marginRight: 8,
        color: '#1976d2'
    },
    learnText: {
        color: '#222',
        fontSize: 14,
        flex: 1
    },
    curriculumSection: {
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 12,
        padding: 0,
        shadowColor: '#000',
        shadowOpacity: 0.03,
        shadowRadius: 2,
        elevation: 1,
        overflow: 'hidden'
    },
    curriculumHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    curriculumTitle: {
        fontWeight: 'bold',
        color: '#1976d2',
        fontSize: 15
    },
    curriculumLectures: {
        color: '#888',
        fontSize: 12,
        marginTop: 2
    },
    chevron: {
        fontSize: 18,
        color: '#888'
    },
    lectureRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f6f8fa'
    },
    lectureIcon: {
        color: '#1976d2',
        marginRight: 6
    },
    lectureTitle: {
        color: '#222',
        fontSize: 14,
        flex: 1
    },
    previewBadge: {
        backgroundColor: '#ffe6e6',
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginLeft: 6
    },
    previewBadgeText: {
        color: '#e53935',
        fontSize: 10,
        fontWeight: 'bold'
    },
    lectureDuration: {
        color: '#888',
        fontSize: 12,
        marginLeft: 8
    },
    reviewsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    seeAll: {
        color: '#1976d2',
        fontWeight: 'bold'
    },
    reviewBox: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 10,
        padding: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.03,
        shadowRadius: 2,
        elevation: 1
    },
    reviewRating: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1976d2'
    },
    reviewStars: {
        fontSize: 18,
        color: '#fbc02d'
    },
    reviewCount: {
        color: '#888',
        fontSize: 12
    },
    bottomBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 8
    },
    price: {
        color: '#1976d2',
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 8
    },
    oldPrice: {
        color: '#888',
        fontSize: 14,
        textDecorationLine: 'line-through'
    },
    discount: {
        color: '#1db954',
        fontWeight: 'bold',
        fontSize: 13
    },
    enrollBtn: {
        backgroundColor: '#ff6d2d',
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    enrollBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default CourseDetailScreen;