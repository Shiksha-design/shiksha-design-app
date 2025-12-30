import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as COLOR from "../../styles/colors";

const PaymentScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{"Payment Screen"}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.LIGHTDEFALUTCOLOR,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLOR.BLACK,
    },
});

export default PaymentScreen;