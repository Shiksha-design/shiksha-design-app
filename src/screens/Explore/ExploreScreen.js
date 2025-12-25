import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
    { label: 'All' },
    { label: 'Web Dev' },
    { label: 'Mobile' },
    { label: 'Data' },
    { label: 'Design' },
    { label: 'Marketing' },
    { label: 'Cloud' },
];

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
        rating: 4.9,
        students: '102,345',
        hours: '55 hours',
        price: '$34.99',
        oldPrice: '$249.99',
        image: 'https://img-c.udemycdn.com/course/240x135/2196488_8fc7_10.jpg',
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
    {
        id: 5,
        category: 'Marketing',
        title: 'Digital Marketing Mastery 2024',
        author: 'Mark Thompson',
        rating: 4.5,
        students: '23,456',
        hours: '22 hours',
        price: '$22.99',
        oldPrice: '$129.99',
        image: 'https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg',
    },
    {
        id: 6,
        category: 'Cloud Computing',
        title: 'AWS Certified Solutions Architect 2024',
        author: 'Stephane Maarek',
        rating: 4.8,
        students: '78,901',
        hours: '27 hours',
        price: '$27.99',
        oldPrice: '$179.99',
        image: 'https://img-c.udemycdn.com/course/240x135/2196488_8fc7_10.jpg',
    },
];

const ExploreScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    // Filter courses based on selected category and search
    const filteredCourses = useMemo(() => {
        let filtered = courses;
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(course => {
                // Map category label to course.category
                if (selectedCategory === 'Web Dev') return course.category === 'Web Development';
                if (selectedCategory === 'Mobile') return course.category === 'Mobile Development';
                if (selectedCategory === 'Data') return course.category === 'Data Science';
                if (selectedCategory === 'Design') return course.category === 'Design';
                if (selectedCategory === 'Marketing') return course.category === 'Marketing';
                if (selectedCategory === 'Cloud') return course.category === 'Cloud Computing';
                return true;
            });
        }
        if (search.trim()) {
            filtered = filtered.filter(course =>
                course.title.toLowerCase().includes(search.trim().toLowerCase())
            );
        }
        return filtered;
    }, [selectedCategory, search]);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.avatar}><Text style={styles.avatarText}>L</Text></View>
                    <Text style={styles.title}>Learne</Text>
                </View>
                <Text style={styles.headerTitle}>All Courses</Text>
                <TouchableOpacity>
                    <View style={styles.bell}><Text style={{ fontSize: 18 }}>🔔</Text></View>
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <Text style={{ fontSize: 18, marginRight: 8 }}>🔍</Text>
                <TextInput
                    placeholder="Search courses..."
                    style={{ flex: 1, fontSize: 16 }}
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            {/* Categories */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoryScroll}
                contentContainerStyle={{ paddingRight: 8, marginBottom: 15 }}
            >
                {categories.map((cat) => (
                    <TouchableOpacity
                        key={cat.label}
                        style={[
                            styles.categoryChip,
                            selectedCategory === cat.label && styles.categoryChipActive
                        ]}
                        onPress={() => setSelectedCategory(cat.label)}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategory === cat.label && styles.categoryTextActive
                            ]}
                        >
                            {cat.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Courses List */}
            <FlatList
                data={filteredCourses}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 24 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('CourseDetailScreen', { course: item })}
                    >
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
                                </View>
                                <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                                    <Text style={styles.coursePrice}>{item.price}</Text>
                                    <Text style={styles.courseOldPrice}>{item.oldPrice}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f6f8fa' },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#1976d2',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    avatarText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222'
    },
    headerTitle: {
        fontSize: 16,
        color: '#1976d2',
        fontWeight: 'bold'
    },
    bell: {
        backgroundColor: '#f1f3f6',
        borderRadius: 16,
        padding: 8
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 16,
        marginTop: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
        shadowColor: '#000',
        shadowOpacity: 0.03,
        shadowRadius: 2,
        elevation: 1,
    },
    categoryScroll: {
        marginVertical: 12,
        paddingLeft: 8
    },
    categoryChip: {
        backgroundColor: '#f1f3f6',
        borderRadius: 16,
        height: 30,
        // paddingVertical: 8,
        paddingHorizontal: 16,
        marginRight: 8,
        minWidth: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryChipActive: {
        backgroundColor: '#1976d2',
    },
    categoryText: {
        color: '#222',
        fontWeight: '500',
        fontSize: 16,
    },
    categoryTextActive: {
        color: '#fff',
    },
    resultsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 8,
    },
    resultsText: {
        color: '#888',
        fontSize: 14
    },
    toggleBtn: {
        marginLeft: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 6,
    },
    courseCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginHorizontal: 16,
        marginBottom: 14,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    courseImg: {
        width: 80,
        height: 60,
        borderRadius: 8,
        marginRight: 8
    },
    courseCategory: {
        backgroundColor: '#1976d2',
        alignSelf: 'flex-start',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginBottom: 4,
    },
    courseCategoryText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    },
    courseTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#222',
        marginBottom: 2
    },
    courseAuthor: {
        color: '#888',
        fontSize: 12,
        marginBottom: 4
    },
    courseMetaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    courseRating: {
        color: '#1976d2',
        fontSize: 12
    },
    courseStudents: {
        color: '#888',
        fontSize: 12
    },
    courseHours: {
        color: '#888',
        fontSize: 12
    },
    coursePrice: {
        color: '#1976d2',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 8
    },
    courseOldPrice: {
        color: '#888',
        fontSize: 12,
        textDecorationLine: 'line-through'
    },
});

export default ExploreScreen;