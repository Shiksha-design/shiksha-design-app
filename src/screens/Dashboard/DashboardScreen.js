import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as COLOR from "../../styles/colors";
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import * as IMAGE from '../../styles/image';
import ChatBot from '../../components/ChatBot/ChatBot';

const categories = [
    { label: "All" },
    { label: "Web Dev" },
    { label: "Mobile" },
    { label: "Data" },
    { label: "Design" },
    { label: "Cloud" },
];

const featuredCourses = [
    {
        id: 1,
        category: "Web Development",
        title: "The Complete Web Development Bootcamp 2024",
        author: "Dr. Angela Yu",
        rating: 4.8,
        students: "89,234",
        hours: "63 hours",
        price: "$29.99",
        oldPrice: "$199.00",
        image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
    },
    {
        id: 2,
        category: "Data Science",
        title: "Python for Data Science and Machine Learning",
        author: "Jose Portilla",
        rating: 4.7,
        students: "65,432",
        hours: "25 hours",
        price: "$24.99",
        oldPrice: "$149.99",
        image: "https://img-c.udemycdn.com/course/240x135/897192_2cee_6.jpg",
    },
    {
        id: 3,
        category: "Mobile Development",
        title: "iOS & Swift - Complete iOS App Development",
        author: "Dr. Angela Yu",
        rating: 4.8,
        students: "70,345",
        hours: "45 hours",
        price: "$34.99",
        oldPrice: "$199.99",
        image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
    },
    {
        id: 4,
        category: "Design",
        title: "UI/UX Design Masterclass: Create Modern Interfaces",
        author: "Daniel Walter",
        rating: 4.6,
        students: "34,567",
        hours: "18 hours",
        price: "$19.99",
        oldPrice: "$99.99",
        image: "https://img-c.udemycdn.com/course/240x135/1452908_8741_3.jpg",
    },
];

const DashboardScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.BACKGROUNDCOLOR }}>
            <StatusBar backgroundColor={COLOR.DEFALUTCOLOR} barStyle={"dark-content"} />
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        {/* <View style={styles.avatar}><Text style={styles.avatarText}>{"L"}</Text></View>
                        <Text style={styles.title}>{"Learne"}</Text> */}
                        <Image source={IMAGE.SHIKSHALOGO} style={{ width: 100, height: 30, resizeMode: 'contain' }} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
                        <View style={styles.bell}>
                            <Ionicons
                                name="notifications-outline"
                                size={18}
                                color={COLOR.DEFALUTCOLOR} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.banner}>
                    <Image source={IMAGE.DASHBOARDHEADER} style={styles.bannerImg} />
                </View>
                <View style={styles.statsRow}>
                    <View style={styles.statBox}><Text style={styles.statValue}>{"50k+"}</Text><Text style={styles.statLabel}>{"Students"}</Text></View>
                    <View style={styles.statBox}><Text style={styles.statValue}>{"200+"}</Text><Text style={styles.statLabel}>{"Courses"}</Text></View>
                    <View style={styles.statBox}><Text style={styles.statValue}>{"95%"}</Text><Text style={styles.statLabel}>{"Success Rate"}</Text></View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
                    {categories.map((cat, idx) => (
                        <TouchableOpacity key={cat.label} style={[styles.categoryChip, idx === 0 && styles.categoryChipActive]}>
                            <Text style={[styles.categoryText, idx === 0 && styles.categoryTextActive]}>{cat.label}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionHeader}>{"Featured Courses"}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.seeAll}>{"See All"}</Text>
                            <Ionicons
                                name="chevron-forward"
                                size={16}
                                color={COLOR.DEFALUTCOLOR}
                                style={{ marginLeft: 4 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.coursesGrid}>
                    {featuredCourses.map(course => (
                        <TouchableOpacity
                            key={course.id}
                            style={styles.courseCard}
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate("CourseDetailScreen", { course })}>
                            <Image source={{ uri: course.image }} style={styles.courseImg} />
                            <View style={styles.courseCategory}><Text style={styles.courseCategoryText}>{course.category}</Text></View>
                            <Text style={styles.courseTitle} numberOfLines={2}>{course.title}</Text>
                            <Text style={styles.courseAuthor}>{course.author}</Text>
                            <View style={styles.courseMetaRow}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Ionicons
                                        name="star"
                                        size={12}
                                        color={COLOR.DEFALUTCOLOR}
                                        style={{ marginRight: 4 }} />
                                    <Text style={styles.courseRating}>{course.rating}</Text>
                                </View>
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
                <View style={styles.howItWorksSection}>
                    <Text style={styles.howItWorksTitle}>{"How It Works"}</Text>
                    <View style={styles.howItWorksStep}>
                        <View style={styles.howItWorksCircle}><Text style={styles.howItWorksCircleText}>{"01"}</Text></View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.howItWorksStepTitle}>{"Browse Courses"}</Text>
                            <Text style={styles.howItWorksStepDesc}>{"Explore our wide range of courses"}</Text>
                        </View>
                    </View>
                    <View style={styles.howItWorksStep}>
                        <View style={styles.howItWorksCircle}><Text style={styles.howItWorksCircleText}>{"02"}</Text></View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.howItWorksStepTitle}>{"Enroll & Learn"}</Text>
                            <Text style={styles.howItWorksStepDesc}>{"Start learning at your own pace"}</Text>
                        </View>
                    </View>
                    <View style={styles.howItWorksStep}>
                        <View style={styles.howItWorksCircle}><Text style={styles.howItWorksCircleText}>{"03"}</Text></View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.howItWorksStepTitle}>{"Get Certified"}</Text>
                            <Text style={styles.howItWorksStepDesc}>{"Earn recognized certificates"}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <ChatBot />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.LIGHTDEFALUTCOLOR,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: COLOR.WHITE,
    },

    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: COLOR.DEFALUTCOLOR,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    avatarText: {
        color: COLOR.WHITE,
        fontWeight: "bold",
        fontSize: 18,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLOR.BLACK,
    },

    bell: {
        backgroundColor: COLOR.WHITESHADEBG,
        borderRadius: 16,
        padding: 8,
    },
    banner: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLOR.DEFALUTCOLOR,
        borderRadius: 12,
        margin: 16,
        padding: 16,
    },

    bannerTitle: {
        color: COLOR.WHITE,
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },

    getStartedBtn: {
        backgroundColor: COLOR.WHITE,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginRight: 10,
    },

    getStartedText: {
        color: COLOR.DEFALUTCOLOR,
        fontWeight: "bold",
    },

    demoBtn: {
        borderColor: COLOR.WHITE,
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    demoText: {
        color: COLOR.WHITE,
        fontWeight: "bold",
    },

    bannerImg: {
        width: '100%',
        height: 140,
        borderRadius: 12,
        marginLeft: 0,
        backgroundColor: COLOR.WHITE,
        resizeMode: 'cover',
    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        marginVertical: 8,
    },

    statBox: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
        borderRadius: 10,
        alignItems: "center",
        padding: 12,
        marginHorizontal: 4,
    },

    statValue: {
        fontWeight: "bold",
        fontSize: 16,
        color: COLOR.DEFALUTCOLOR,
    },

    statLabel: {
        color: COLOR.GRAY_DARK,
        fontSize: 12,
    },
    categoryScroll: {
        marginVertical: 8,
        paddingLeft: 8,
    },

    categoryChip: {
        backgroundColor: COLOR.WHITESHADEBG,
        borderRadius: 16,
        paddingVertical: 6,
        paddingHorizontal: 16,
        marginRight: 8,
    },

    categoryChipActive: {
        backgroundColor: COLOR.DEFALUTCOLOR,
    },

    categoryText: {
        color: COLOR.BLACK,
        fontWeight: "500",
    },

    categoryTextActive: {
        color: COLOR.WHITE,
    },
    sectionHeaderRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 16,
        marginTop: 16,
    },

    sectionHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLOR.BLACK,
    },

    seeAll: {
        color: COLOR.DEFALUTCOLOR,
        fontWeight: "bold",
    },
    coursesGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: 16,
    },

    courseCard: {
        width: "48%",
        backgroundColor: COLOR.WHITE,
        borderRadius: 12,
        padding: 10,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },

    courseImg: {
        width: "100%",
        height: 90,
        borderRadius: 8,
        marginBottom: 8,
    },

    courseCategory: {
        backgroundColor: COLOR.DEFALUTCOLOR,
        alignSelf: "flex-start",
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginBottom: 4,
    },

    courseCategoryText: {
        color: COLOR.WHITE,
        fontSize: 10,
        fontWeight: "bold",
    },

    courseTitle: {
        fontWeight: "bold",
        fontSize: 14,
        color: COLOR.BLACK,
        marginBottom: 2,
    },

    courseAuthor: {
        color: COLOR.GRAY_DARK,
        fontSize: 12,
        marginBottom: 4,
    },

    courseMetaRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },

    courseRating: {
        color: COLOR.DEFALUTCOLOR,
        fontSize: 12,
    },

    courseStudents: {
        color: COLOR.GRAY_DARK,
        fontSize: 12,
    },

    courseHours: {
        color: COLOR.GRAY_DARK,
        fontSize: 12,
    },

    coursePriceRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    coursePrice: {
        color: COLOR.DEFALUTCOLOR,
        fontWeight: "bold",
        fontSize: 14,
        marginRight: 8,
    },

    courseOldPrice: {
        color: COLOR.GRAY_DARK,
        fontSize: 12,
        textDecorationLine: "line-through",
    },
    howItWorksSection: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 32,
    },

    howItWorksTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLOR.BLACK,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 18,
    },

    howItWorksStep: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLOR.WHITE,
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginBottom: 12,
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.03,
        shadowRadius: 2,
        elevation: 1,
    },

    howItWorksCircle: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: COLOR.WHITESHADEBG,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
    },

    howItWorksCircleText: {
        color: COLOR.DEFALUTCOLOR,
        fontWeight: "bold",
        fontSize: 16,
    },

    howItWorksStepTitle: {
        fontWeight: "bold",
        color: COLOR.BLACK,
        fontSize: 15,
        marginBottom: 2,
    },

    howItWorksStepDesc: {
        color: COLOR.GRAY_DARK,
        fontSize: 13,
    },
});

export default DashboardScreen;