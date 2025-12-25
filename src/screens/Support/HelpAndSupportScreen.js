import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Linking,
    Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Use CheckBox from react-native or @react-native-community/checkbox depending on your setup

const HelpAndSupportScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [query, setQuery] = useState('');
    const [agree, setAgree] = useState(true);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Text style={styles.header}>Have Queries? <Text style={{ color: '#1976d2' }}>Reach out to us!</Text></Text>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Placeholder"
                    value={name}
                    onChangeText={setName}
                />
                <View style={styles.row}>
                    <View style={{ flex: 1, marginRight: 8 }}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="abc@example.com"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                        <Text style={styles.label}>Phone Number</Text>
                        <View style={styles.phoneRow}>
                            <Text style={styles.phonePrefix}>+91</Text>
                            <TextInput
                                style={styles.phoneInput}
                                placeholder="Enter 10 digit number"
                                value={phone}
                                onChangeText={setPhone}
                                keyboardType="phone-pad"
                                maxLength={10}
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.label}>Describe your query</Text>
                <TextInput
                    style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
                    placeholder="Describe your query here"
                    value={query}
                    onChangeText={setQuery}
                    multiline
                />
                <View style={styles.agreeRow}>
                    <TouchableOpacity
                        onPress={() => setAgree(!agree)}
                        style={styles.checkboxBtn}
                        activeOpacity={0.7}
                    >
                        <Ionicons
                            name={agree ? 'checkbox' : 'square-outline'}
                            size={22}
                            color={agree ? '#1976d2' : '#888'}
                        />
                    </TouchableOpacity>
                    <Text style={styles.agreeText}>
                        By providing your contact details, you agree to our{' '}
                        <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}>Terms of Use</Text>
                        {' '} &{' '}
                        <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/privacy')}>Privacy Policy</Text>
                    </Text>
                </View>
                <TouchableOpacity
                    style={[styles.sendBtn, { backgroundColor: agree ? '#1976d2' : '#b0c4de' }]}
                    disabled={!agree}
                >
                    <Text style={styles.sendBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f6f8fa',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    card: {
        backgroundColor: '#eaf2fd',
        borderRadius: 12,
        padding: 18,
        width: '100%',
        maxWidth: 420,
        marginTop: 32,
        marginBottom: 32,
        shadowColor: '#000',
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1976d2',
        marginBottom: 18,
        textAlign: 'center',
    },
    label: {
        color: '#222',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 4,
        fontSize: 14,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    phoneRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    phonePrefix: {
        color: '#888',
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
    },
    checkboxBtn: {
        marginTop: 2,
        marginRight: 4,
    },
    agreeText: {
        color: '#222',
        fontSize: 13,
        flex: 1,
        marginLeft: 6,
        marginTop: 2,
    },
    link: {
        color: '#1976d2',
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
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default HelpAndSupportScreen;