import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTHUSERINFO } from "../../context/actions/type";
import authEvent from '../../context/authEvent';
import * as COLOR from "../../styles/colors";
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
const MyProfileScreen = () => {
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem(AUTHUSERINFO);
        } catch (err) {
            console.warn('Error clearing auth:', err);
        }
        // notify navigator to re-check auth and show unauthenticated tabs
        authEvent.emit();
        // reset navigation to Home (unauthenticated tab will be shown)
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.BACKGROUNDCOLOR }}>
            <StatusBar backgroundColor={COLOR.DEFALUTCOLOR} barStyle={"dark-content"} />
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}>
                    <Ionicons name="arrow-back" size={22} color={COLOR.BLACK} />
                </TouchableOpacity>
                <View style={styles.profileCard}>
                    <View style={styles.avatarRow}>
                        <View style={styles.avatar}><Text style={styles.avatarText}>{"T"}</Text></View>
                        <TouchableOpacity style={styles.avatarEdit} activeOpacity={0.7}>
                            <Ionicons
                                name="camera"
                                size={16}
                                color={COLOR.GRAY_DARK} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>{"test user"}</Text>
                    <Text style={styles.email}>{"testuser@gmail.com"}</Text>
                </View>
                <View style={styles.statsRow}>
                    <View style={styles.statBox}><Text style={styles.statValue}>{"2"}</Text><Text style={styles.statLabel}>{"Courses"}</Text></View>
                    <View style={styles.statBox}><Text style={styles.statValue}>{"1"}</Text><Text style={styles.statLabel}>{"Certificates"}</Text></View>
                </View>
                <View style={styles.actionList}>
                    <TouchableOpacity
                        style={styles.actionItem}
                        onPress={() => navigation.navigate("EditProfileScreen")}>
                        <Ionicons
                            name="person-outline"
                            size={20}
                            color={COLOR.DEFALUTCOLOR}
                            style={{ marginRight: 16 }} />
                        <Text style={styles.actionText}>{"Edit Profile"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionItem}
                        onPress={() => navigation.navigate("HelpAndSupportScreen")}>
                        <Ionicons
                            name="help-circle-outline"
                            size={20}
                            color={COLOR.DEFALUTCOLOR}
                            style={{ marginRight: 16 }} />
                        <Text style={styles.actionText}>{"Help & Support"}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.logoutBtn}
                    onPress={handleLogout}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons
                            name="log-out-outline"
                            size={18}
                            color={COLOR.RED}
                            style={{ marginRight: 8 }} />
                        <Text style={styles.logoutText}>{"Log Out"}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.LIGHTDEFALUTCOLOR,
    },

    backBtn: {
        position: "absolute",
        top: 24,
        left: 16,
        zIndex: 10,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: COLOR.WHITE,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },

    profileCard: {
        marginTop: 80,
        margin: 16,
        padding: 20,
        backgroundColor: COLOR.WHITE,
        borderRadius: 16,
        alignItems: "center",
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
    },

    avatarRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: COLOR.DEFALUTCOLOR,
        justifyContent: "center",
        alignItems: "center",
    },

    avatarText: {
        color: COLOR.WHITE,
        fontWeight: "bold",
        fontSize: 32,
    },

    avatarEdit: {
        marginLeft: -18,
        marginTop: 32,
        padding: 6,
        backgroundColor: COLOR.WHITE,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLOR.LIGHT_GREY,
        zIndex: 1,
    },

    name: {
        marginTop: 4,
        fontSize: 18,
        fontWeight: "bold",
        color: COLOR.BLACK,
    },

    email: {
        marginTop: 2,
        fontSize: 14,
        color: COLOR.GRAY_DARK,
    },

    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        marginBottom: 16,
    },

    statBox: {
        flex: 1,
        marginHorizontal: 4,
        padding: 12,
        backgroundColor: COLOR.WHITE,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.02,
        shadowRadius: 2,
        elevation: 1,
    },

    statValue: {
        fontSize: 16,
        fontWeight: "bold",
        color: COLOR.DEFALUTCOLOR,
    },

    statLabel: {
        fontSize: 12,
        color: COLOR.GRAY_DARK,
    },

    actionList: {
        marginHorizontal: 16,
        marginBottom: 16,
        paddingVertical: 4,
        backgroundColor: COLOR.WHITE,
        borderRadius: 16,
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.02,
        shadowRadius: 2,
        elevation: 1,
    },

    actionItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.WHITESHADEBG,
    },

    actionIcon: {
        fontSize: 18,
        marginRight: 16,
        color: COLOR.DEFALUTCOLOR,
    },

    actionText: {
        fontSize: 16,
        color: COLOR.BLACK,
    },

    logoutBtn: {
        marginHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: "center",
        backgroundColor: COLOR.WHITE,
        borderWidth: 1,
        borderColor: "#ffb3b3",
    },

    logoutText: {
        fontSize: 16,
        fontWeight: "bold",
        color: COLOR.RED,
    },
});


export default MyProfileScreen;