import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as COLOR from "../../styles/colors";

const PaymentScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.LIGHTDEFALUTCOLOR }}>
            <StatusBar backgroundColor={COLOR.LIGHTDEFALUTCOLOR} barStyle={"dark-content"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.title}>{"Payment Screen"}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: COLOR.LIGHTDEFALUTCOLOR,
    },
    scrollContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: COLOR.LIGHTDEFALUTCOLOR,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLOR.BLACK,
    },
});

export default PaymentScreen;