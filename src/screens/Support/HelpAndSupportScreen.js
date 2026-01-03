import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Linking,
    Platform
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as COLOR from "../../styles/colors";
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'

const HelpAndSupportScreen = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [query, setQuery] = useState("");
    const [agree, setAgree] = useState(true);

    return (
         <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.BACKGROUNDCOLOR }}>
            <StatusBar backgroundColor={COLOR.DEFALUTCOLOR} barStyle={"dark-content"} />
            <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => props.navigation.goBack()}
                    activeOpacity={0.7}>
                    <Ionicons name="arrow-back" size={22} color={COLOR.BLACK} />
                </TouchableOpacity>
                <View style={styles.card}>
                    <Text style={styles.header}>{"Have Queries?"} <Text style={{ color: COLOR.DEFALUTCOLOR }}>{"Reach out to us!"}</Text></Text>
                    <Text style={styles.label}>{"Full Name"}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Placeholder"
                        value={name}
                        onChangeText={setName} />
                    <View style={styles.row}>
                        <View style={{ flex: 1, marginRight: 8 }}>
                            <Text style={styles.label}>{"Email"}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="abc@example.com"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none" />
                        </View>
                        <View style={{ flex: 1, marginLeft: 8 }}>
                            <Text style={styles.label}>{"Phone Number"}</Text>
                            <View style={styles.phoneRow}>
                                <Text style={styles.phonePrefix}>{"+91"}</Text>
                                <TextInput
                                    style={styles.phoneInput}
                                    placeholder="Enter 10 digit number"
                                    value={phone}
                                    onChangeText={setPhone}
                                    keyboardType="phone-pad"
                                    maxLength={10} />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.label}>{"Describe your query"}</Text>
                    <TextInput
                        style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
                        placeholder="Describe your query here"
                        value={query}
                        onChangeText={setQuery}
                        multiline />
                    <View style={styles.agreeRow}>
                        <TouchableOpacity
                            onPress={() => setAgree(!agree)}
                            style={styles.checkboxBtn}
                            activeOpacity={0.7}>
                            <Ionicons
                                name={agree ? 'checkbox' : 'square-outline'}
                                size={22}
                                color={agree ? COLOR.DEFALUTCOLOR : COLOR.GRAY_DARK} />
                        </TouchableOpacity>
                        <Text style={styles.agreeText}>
                            {"By providing your contact details, you agree to our"}{' '}
                            <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}>{"Terms of Use"}</Text>
                            {' '} &{' '}
                            <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/privacy')}>{"Privacy Policy"}</Text>
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.sendBtn, { backgroundColor: agree ? COLOR.DEFALUTCOLOR : COLOR.GRAY_LIGHT }]}
                        disabled={!agree}>
                        <Text style={styles.sendBtnText}>{"Submit"}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
        backgroundColor: COLOR.BACKGROUNDCOLOR,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        paddingTop: 24,
    },
    card: {
        backgroundColor: COLOR.WHITE,
        borderRadius: 12,
        padding: 20,
        width: '100%',
        maxWidth: 720,
        marginVertical: 24,
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLOR.BLACK,
        marginBottom: 16,
        textAlign: 'center',
    },
    label: {
        color: COLOR.GRAY_DARK,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 4,
        fontSize: 14,
    },
    input: {
        backgroundColor: COLOR.WHITE,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
        borderWidth: 1,
        borderColor: COLOR.GRAY_LIGHT,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    phoneRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLOR.GRAY_LIGHT,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    phonePrefix: {
        color: COLOR.GRAY_DARK,
        fontSize: 15,
        marginRight: 6,
    },
    phoneInput: {
        flex: 1,
        fontSize: 15,
        paddingVertical: 8,
        backgroundColor: 'transparent',
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 14,
        marginBottom: 10,
        paddingRight: 8,
    },
    checkboxBtn: {
        marginTop: 2,
        marginRight: 4,
    },
    agreeText: {
        color: COLOR.GRAY_DARK,
        fontSize: 13,
        flex: 1,
        marginLeft: 6,
        marginTop: 2,
    },
    link: {
        color: COLOR.DEFALUTCOLOR,
        textDecorationLine: 'underline',
    },
    sendBtn: {
        alignSelf: 'flex-end',
        marginTop: 8,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 28,
    },
    sendBtnText: {
        color: COLOR.WHITE,
        fontWeight: 'bold',
        fontSize: 15,
    },
    backBtn: {
        position: 'absolute',
        top: 20,
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
    textarea: {
        height: 100,
        textAlignVertical: 'top',
    },
});

export default HelpAndSupportScreen;