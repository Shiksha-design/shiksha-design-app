import React, { useEffect, useState } from 'react';
import {
    NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SPLASHSCREEN from '../screens/Splash/SplashScreen';
import DASHBOARDSCREEN from '../screens/Dashboard/DashboardScreen';
import FORGOTPASSWORDSCREEN from '../screens/Auth/ForgotPasswordScreen';
import LOGINSCREEN from '../screens/Auth/LoginScreen';
import NEWPASSWORDSCREEN from '../screens/Auth/NewPasswordScren';
import REGISTERSCREEN from '../screens/Auth/RegisterScreen';
import COURSEDETAILSCREEN from '../screens/Course/CourseDetailScreen';
import MYCOURSESCREEN from '../screens/Course/MyCourseScreen';
import PAYMENTSREEN from '../screens/Payment/PaymentScreen';
import EXPLORESCREEN from '../screens/Explore/ExploreScreen';
import NOTIFICATIONSCREEN from '../screens/Notification/NotificationScreen';
import EDITPROFILESCREEN from '../screens/Profile/EditProfileScreen';
import MYPROFILESCREEN from '../screens/Profile/MyProfileScreen';
import HELPANDSUPPORTSCREEN from '../screens/Support/HelpAndSupportScreen';
import { AUTHUSERINFO } from '../context/actions/type';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MyCourseStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons = {
    Home: require('../assets/icons/homeicon.png'),
    MyCourses: require('../assets/icons/activitycalendericon.png'),
    Profile: require('../assets/icons/chatgpt.png'),
    Explore: require('../assets/icons/searchicon.png'), // changed to search icon
    Login: require('../assets/icons/loginicon.png'), // changed to search icon
};

function AuthStackScreen() {
    return (
        <AuthStack.Navigator initialRouteName="LoginScreen">
            <AuthStack.Screen name="LoginScreen" component={LOGINSCREEN} options={{ headerShown: false }} />
            <AuthStack.Screen name="RegisterScreen" component={REGISTERSCREEN} options={{ headerShown: false }} />
            <AuthStack.Screen name="ForgotPasswordScreen" component={FORGOTPASSWORDSCREEN} options={{ headerShown: false }} />
            <AuthStack.Screen name="NewPasswordScreen" component={NEWPASSWORDSCREEN} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    );
}

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="DashboardScreen" component={DASHBOARDSCREEN} options={{ headerShown: false }} />
            <HomeStack.Screen name="NotificationScreen" component={NOTIFICATIONSCREEN} options={{ headerShown: false }} />
            <HomeStack.Screen name="CourseDetailScreen" component={COURSEDETAILSCREEN} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}

function ExploreStackScreen() {
    return (
        <ExploreStack.Navigator>
            <ExploreStack.Screen name="ExploreScreen" component={EXPLORESCREEN} options={{ headerShown: false }} />
            <ExploreStack.Screen name="CourseDetailScreen" component={COURSEDETAILSCREEN} options={{ headerShown: false }} />
        </ExploreStack.Navigator>
    );
}

function MyCourseStackScreen() {
    return (
        <MyCourseStack.Navigator>
            <MyCourseStack.Screen name="MyCourseScreen" component={MYCOURSESCREEN} options={{ headerShown: false }} />
            <MyCourseStack.Screen name="CourseDetailScreen" component={COURSEDETAILSCREEN} options={{ headerShown: false }} />
            <MyCourseStack.Screen name="PaymentScreen" component={PAYMENTSREEN} options={{ headerShown: false }} />
        </MyCourseStack.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="MyProfileScreen" component={MYPROFILESCREEN} options={{ headerShown: false }} />
            <ProfileStack.Screen name="EditProfileScreen" component={EDITPROFILESCREEN} options={{ headerShown: false }} />
            <ProfileStack.Screen name="HelpAndSupportScreen" component={HELPANDSUPPORTSCREEN} options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    );
}


function MainTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconSource = icons[route.name] || icons['Home'];
                    return (
                        <Image
                            source={iconSource}
                            style={{ width: size, height: size, tintColor: color }}
                            resizeMode="contain"
                        />
                    );
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Explore" component={ExploreStackScreen} />
            <Tab.Screen name="Login" component={AuthStackScreen} />
        </Tab.Navigator>
    );
}

function MainTabNavigatorAuth() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconSource = icons[route.name] || icons['Home'];
                    return (
                        <Image
                            source={iconSource}
                            style={{ width: size, height: size, tintColor: color }}
                            resizeMode="contain"
                        />
                    );
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Explore" component={ExploreStackScreen} />
            <Tab.Screen name="MyCourses" component={MyCourseStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
    );
}

export default function NavigationsApp() {
    const [isAuth, setIsAuth] = useState(null);

    // Only check auth on mount and after login/logout
    useEffect(() => {
        const checkAuth = async () => {
            const user = await AsyncStorage.getItem(AUTHUSERINFO);
            setIsAuth(!!user);
        };
        // Listen for storage changes (login/logout)
        const focusListener = () => checkAuth();
        // Add event listener for navigation focus
        const unsubscribe = () => { };
        checkAuth();
        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    if (isAuth === null) {
        // Optionally, show a splash/loading screen here
        return null;
    }

    return (
        <NavigationContainer>
            {isAuth ? (
                <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconSource = icons[route.name] || icons['Home'];
                            return (
                                <Image
                                    source={iconSource}
                                    style={{ width: size, height: size, tintColor: color }}
                                    resizeMode="contain"
                                />
                            );
                        },
                        tabBarActiveTintColor: '#007AFF',
                        tabBarInactiveTintColor: 'gray',
                    })}
                >
                    <Tab.Screen name="Home" component={HomeStackScreen} />
                    <Tab.Screen name="Explore" component={ExploreStackScreen} />
                    <Tab.Screen name="MyCourses" component={MyCourseStackScreen} />
                    <Tab.Screen name="Profile" component={ProfileStackScreen} />
                </Tab.Navigator>
            ) : (
                <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconSource = icons[route.name] || icons['Home'];
                            return (
                                <Image
                                    source={iconSource}
                                    style={{ width: size, height: size, tintColor: color }}
                                    resizeMode="contain"
                                />
                            );
                        },
                        tabBarActiveTintColor: '#007AFF',
                        tabBarInactiveTintColor: 'gray',
                    })}
                >
                    <Tab.Screen name="Home" component={HomeStackScreen} />
                    <Tab.Screen name="Explore" component={ExploreStackScreen} />
                    <Tab.Screen name="Login" component={AuthStackScreen} />
                </Tab.Navigator>
            )}
        </NavigationContainer>
    );
}
