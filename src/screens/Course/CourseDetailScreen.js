import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as COLOR from '../../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'

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
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.BACKGROUNDCOLOR }}>
            <StatusBar backgroundColor={COLOR.DEFALUTCOLOR} barStyle={"dark-content"} />
            <View style={{ flex: 1, backgroundColor: COLOR.LIGHTDEFALUTCOLOR }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                    <View style={styles.bannerWrapper}>
                        <Image source={{ uri: course.image }} style={styles.bannerImg} />
                        <TouchableOpacity
                            style={styles.backBtn}
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.7}>
                            <Ionicons name="arrow-back" size={22} color={COLOR.BLACK} />
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
                                style={styles.avatar} />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={styles.author}>{course.author}</Text>
                                <Text style={styles.instructorLabel}>{"Instructor"}</Text>
                            </View>
                        </View>
                        <View style={styles.statsRow}>
                            <View style={styles.statItem}>
                                <Ionicons name="star" size={14} color={COLOR.DEFALUTCOLOR} />
                                <Text style={styles.statText}> {course.rating}</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Ionicons name="people-outline" size={14} color={COLOR.GRAY_DARK} />
                                <Text style={styles.statText}> {course.students} students</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Ionicons name="time-outline" size={14} color={COLOR.GRAY_DARK} />
                                <Text style={styles.statText}> {course.hours}</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Ionicons name="book-outline" size={14} color={COLOR.GRAY_DARK} />
                                <Text style={styles.statText}> {course.lessons} lessons</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 6 }}>
                            <View style={styles.levelBadge}><Text style={styles.levelBadgeText}>{course.level}</Text></View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{"About This Course"}</Text>
                        <Text style={styles.about}>{course.about}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{"What You'll Learn"}</Text>
                        <View style={styles.learnBox}>
                            {learnList.map((item, idx) => (
                                <View key={idx} style={styles.learnRow}>
                                    <Ionicons
                                        name="checkmark-circle"
                                        size={18}
                                        color={COLOR.DEFALUTCOLOR}
                                        style={{ marginRight: 8 }} />
                                    <Text style={styles.learnText}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{"Curriculum"}</Text>
                        {curriculumList.map((section, idx) => {
                            const expanded = expandedSections.includes(idx);
                            return (
                                <View key={section.section || idx} style={styles.curriculumSection}>
                                    <TouchableOpacity
                                        style={styles.curriculumHeader}
                                        onPress={() => toggleSection(idx)}
                                        activeOpacity={0.7}>
                                        <View>
                                            <Text style={styles.curriculumTitle}>{section.section}</Text>
                                            <Text style={styles.curriculumLectures}>
                                                {Array.isArray(section.lectures) ? section.lectures.length : 0} {"lectures"}
                                            </Text>
                                        </View>
                                        <Ionicons
                                            name={expanded ? 'chevron-up' : 'chevron-down'}
                                            size={18}
                                            color={COLOR.GRAY_DARK} />
                                    </TouchableOpacity>
                                    {expanded && Array.isArray(section.lectures) && section.lectures.map((lec, lidx) => (
                                        <View key={lec.title || lidx} style={styles.lectureRow}>
                                            <Ionicons
                                                name="play-circle-outline"
                                                size={18}
                                                color={COLOR.DEFALUTCOLOR}
                                                style={{ marginRight: 6 }} />
                                            <Text style={styles.lectureTitle}>{lec.title}</Text>
                                            {lec.preview && (
                                                <View style={styles.previewBadge}><Text style={styles.previewBadgeText}>{"Preview"}</Text></View>
                                            )}
                                            <Text style={styles.lectureDuration}>{lec.duration}</Text>
                                        </View>
                                    ))}
                                </View>
                            );
                        })}
                    </View>
                    <View style={styles.section}>
                        <View style={styles.reviewsHeader}>
                            <Text style={styles.sectionTitle}>{"Reviews"}</Text>
                            <TouchableOpacity><Text style={styles.seeAll}>{"See All"}</Text></TouchableOpacity>
                        </View>
                        <View style={styles.reviewBox}>
                            <Text style={styles.reviewRating}>{"4.8"}</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 4 }}>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Ionicons
                                        key={i}
                                        name="star"
                                        size={18}
                                        color={COLOR.YELLOW}
                                    />
                                ))}
                            </View>
                            <Text style={styles.reviewCount}>{course.reviews}{" reviews"}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.bottomBar}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.price}>{course.price}</Text>
                            <Text style={styles.oldPrice}>{course.oldPrice}</Text>
                        </View>
                        <Text style={styles.discount}>{course.discount}</Text>
                    </View>
                    <TouchableOpacity style={styles.enrollBtn}>
                        <Text style={styles.enrollBtnText}>{"Enroll Now"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

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
        backgroundColor: COLOR.LIGHTGRAY
    },
    backBtn: {
        position: 'absolute',
        alignSelf: "center",
        top: 30,
        left: 16,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: COLOR.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },
    categoryBadge: {
        backgroundColor: COLOR.DEFALUTCOLOR,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 2,
        alignSelf: 'flex-start',
        marginBottom: 6
    },
    categoryBadgeText: {
        color: COLOR.WHITE,
        fontSize: 12,
        fontWeight: 'bold'
    },
    title: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: COLOR.BLACK,
        marginBottom: 4
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: COLOR.LIGHTGRAY
    },
    author: {
        fontWeight: 'bold',
        color: COLOR.BLACK
    },
    instructorLabel: {
        color: COLOR.GRAY_DARK,
        fontSize: 12
    },
    statsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 10,
        gap: 10
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        color: COLOR.DEFALUTCOLOR,
        fontWeight: 'bold',
        marginRight: 8
    },
    ratingCount: {
        color: COLOR.GRAY_DARK,
        fontWeight: 'normal'
    },
    statText: {
        color: COLOR.GRAY_DARK,
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
        color: COLOR.GREEN,
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
        color: COLOR.BLACK
    },
    about: {
        color: COLOR.GRAY_DARK,
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
        color: COLOR.DEFALUTCOLOR
    },
    learnText: {
        color: COLOR.BLACK,
        fontSize: 14,
        flex: 1
    },
    curriculumSection: {
        backgroundColor: COLOR.WHITE,
        borderRadius: 16,
        marginBottom: 12,
        padding: 0,
        shadowColor: COLOR.BLACK,
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
        borderBottomColor: COLOR.LIGHTDEFALUTCOLOR
    },
    curriculumTitle: {
        fontWeight: 'bold',
        color: COLOR.DEFALUTCOLOR,
        fontSize: 15
    },
    curriculumLectures: {
        color: COLOR.GRAY_DARK,
        fontSize: 12,
        marginTop: 2
    },
    chevron: {
        fontSize: 18,
        color: COLOR.GRAY_DARK
    },
    lectureRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.LIGHTDEFALUTCOLOR
    },
    lectureIcon: {
        color: COLOR.DEFALUTCOLOR,
        marginRight: 6
    },
    lectureTitle: {
        color: COLOR.BLACK,
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
        color: COLOR.RED,
        fontSize: 10,
        fontWeight: 'bold'
    },
    lectureDuration: {
        color: COLOR.GRAY_DARK,
        fontSize: 12,
        marginLeft: 8
    },
    reviewsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    seeAll: {
        color: COLOR.DEFALUTCOLOR,
        fontWeight: 'bold'
    },
    reviewBox: {
        backgroundColor: COLOR.WHITE,
        borderRadius: 12,
        marginTop: 10,
        padding: 12,
        alignItems: 'center',
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.03,
        shadowRadius: 2,
        elevation: 1
    },
    reviewRating: {
        fontSize: 28,
        fontWeight: 'bold',
        color: COLOR.DEFALUTCOLOR
    },
    reviewStars: {
        fontSize: 18,
        color: COLOR.YELLOW
    },
    reviewCount: {
        color: COLOR.GRAY_DARK,
        fontSize: 12
    },
    bottomBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: COLOR.WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 8
    },
    price: {
        color: COLOR.DEFALUTCOLOR,
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 8
    },
    oldPrice: {
        color: COLOR.GRAY_DARK,
        fontSize: 14,
        textDecorationLine: 'line-through'
    },
    discount: {
        color: COLOR.GREEN_LIGHT,
        fontWeight: 'bold',
        fontSize: 13
    },
    enrollBtn: {
        backgroundColor: COLOR.ORANGECOLOR,
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    enrollBtnText: {
        color: COLOR.WHITE,
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default CourseDetailScreen;