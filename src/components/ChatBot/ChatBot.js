import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Animated
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as COLOR from '../../styles/colors';

const predefinedQuestions = [
    { id: 1, question: "How do I enroll in a course?", answer: "To enroll in a course, simply browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. Follow the payment process to complete your enrollment." },
    { id: 2, question: "What payment methods do you accept?", answer: "We accept various payment methods including credit/debit cards, PayPal, and UPI. All transactions are secure and encrypted." },
    { id: 3, question: "Can I get a refund?", answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with a course, you can request a full refund within 30 days of purchase." },
    { id: 4, question: "How long do I have access to a course?", answer: "Once you enroll in a course, you have lifetime access to all course materials, including future updates." },
    { id: 5, question: "Do I get a certificate?", answer: "Yes! Upon completing a course, you'll receive a certificate of completion that you can share on LinkedIn and add to your resume." },
    { id: 6, question: "How do I contact support?", answer: "You can contact our support team at support@shiksha.com or use the chat feature. We're available 24/7 to help you." },
];

const ChatBot = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        { id: 0, text: "Hi! How can I help you today?", isBot: true, timestamp: new Date() }
    ]);
    const [inputText, setInputText] = useState('');
    const scrollViewRef = useRef(null);
    const scaleAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            tension: 50,
            friction: 7,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleQuestionPress = (question) => {
        const userMessage = {
            id: messages.length,
            text: question.question,
            isBot: false,
            timestamp: new Date()
        };

        const botMessage = {
            id: messages.length + 1,
            text: question.answer,
            isBot: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage, botMessage]);
        setShowChat(true);

        setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);
    };

    const handleSendMessage = () => {
        if (inputText.trim() === '') return;

        const userMessage = {
            id: messages.length,
            text: inputText,
            isBot: false,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');

        // Simulate bot response
        setTimeout(() => {
            const botMessage = {
                id: messages.length + 1,
                text: "Thank you for your question! Our support team will get back to you shortly. In the meantime, you can explore our help center or try asking one of the common questions above.",
                isBot: true,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);

            setTimeout(() => {
                scrollViewRef.current?.scrollToEnd({ animated: true });
            }, 100);
        }, 1000);

        setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);
    };

    const handleBackToQuestions = () => {
        setShowChat(false);
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setShowChat(false);
            setMessages([
                { id: 0, text: "Hi! How can I help you today?", isBot: true, timestamp: new Date() }
            ]);
        }, 300);
    };

    return (
        <>
            <Animated.View style={[styles.floatingButton, { transform: [{ scale: scaleAnim }] }]}>
                <TouchableOpacity
                    style={styles.floatingBtn}
                    onPress={() => setIsVisible(true)}
                    activeOpacity={0.8}>
                    <Ionicons name="chatbubble-ellipses" size={28} color={COLOR.WHITE} />
                </TouchableOpacity>
            </Animated.View>

            <Modal
                visible={isVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={handleClose}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <View style={styles.headerLeft}>
                                {showChat && (
                                    <TouchableOpacity
                                        onPress={handleBackToQuestions}
                                        style={styles.backBtn}>
                                        <Ionicons name="arrow-back" size={24} color={COLOR.WHITE} />
                                    </TouchableOpacity>
                                )}
                                <View style={styles.botAvatar}>
                                    <Ionicons name="chatbubble-ellipses" size={20} color={COLOR.WHITE} />
                                </View>
                                <View>
                                    <Text style={styles.modalTitle}>{"Shiksha Assistant"}</Text>
                                    <Text style={styles.modalSubtitle}>{"Always here to help"}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
                                <Ionicons name="close" size={24} color={COLOR.WHITE} />
                            </TouchableOpacity>
                        </View>

                        {!showChat ? (
                            <ScrollView style={styles.questionsContainer}>
                                <Text style={styles.questionsTitle}>{"Common Questions"}</Text>
                                {predefinedQuestions.map((item) => (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={styles.questionCard}
                                        onPress={() => handleQuestionPress(item)}
                                        activeOpacity={0.7}>
                                        <Ionicons name="help-circle-outline" size={20} color={COLOR.DEFALUTCOLOR} />
                                        <Text style={styles.questionText}>{item.question}</Text>
                                        <Ionicons name="chevron-forward" size={18} color={COLOR.GRAY_DARK} />
                                    </TouchableOpacity>
                                ))}
                                <TouchableOpacity
                                    style={styles.customQueryBtn}
                                    onPress={() => setShowChat(true)}>
                                    <Ionicons name="create-outline" size={20} color={COLOR.WHITE} />
                                    <Text style={styles.customQueryText}>{"Ask Your Own Question"}</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        ) : (
                            <View style={styles.chatContainer}>
                                <ScrollView
                                    ref={scrollViewRef}
                                    style={styles.messagesContainer}
                                    contentContainerStyle={styles.messagesContent}
                                    onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}>
                                    {messages.map((message) => (
                                        <View
                                            key={message.id}
                                            style={[
                                                styles.messageBubble,
                                                message.isBot ? styles.botMessage : styles.userMessage
                                            ]}>
                                            <Text style={[
                                                styles.messageText,
                                                message.isBot ? styles.botMessageText : styles.userMessageText
                                            ]}>
                                                {message.text}
                                            </Text>
                                        </View>
                                    ))}
                                </ScrollView>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Type your question..."
                                        placeholderTextColor={COLOR.GRAY_DARK}
                                        value={inputText}
                                        onChangeText={setInputText}
                                        multiline
                                        maxLength={500}
                                    />
                                    <TouchableOpacity
                                        style={[styles.sendBtn, inputText.trim() === '' && styles.sendBtnDisabled]}
                                        onPress={handleSendMessage}
                                        disabled={inputText.trim() === ''}>
                                        <Ionicons name="send" size={20} color={COLOR.WHITE} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 999,
    },
    floatingBtn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLOR.DEFALUTCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: COLOR.WHITE,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        height: '85%',
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOR.DEFALUTCOLOR,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    backBtn: {
        marginRight: 12,
    },
    botAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLOR.ORANGECOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLOR.WHITE,
    },
    modalSubtitle: {
        fontSize: 12,
        color: COLOR.WHITE,
        opacity: 0.9,
    },
    closeBtn: {
        padding: 4,
    },
    questionsContainer: {
        flex: 1,
        padding: 16,
    },
    questionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLOR.BLACK,
        marginBottom: 16,
    },
    questionCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.WHITE,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: COLOR.LIGHT_GREY,
        shadowColor: COLOR.BLACK,
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    questionText: {
        flex: 1,
        fontSize: 14,
        color: COLOR.BLACK,
        marginLeft: 12,
    },
    customQueryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.DEFALUTCOLOR,
        borderRadius: 12,
        padding: 16,
        marginTop: 8,
        marginBottom: 16,
    },
    customQueryText: {
        color: COLOR.WHITE,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
    },
    chatContainer: {
        flex: 1,
    },
    messagesContainer: {
        flex: 1,
        backgroundColor: COLOR.LIGHTDEFALUTCOLOR,
    },
    messagesContent: {
        padding: 16,
    },
    messageBubble: {
        maxWidth: '75%',
        borderRadius: 16,
        padding: 12,
        marginBottom: 12,
    },
    botMessage: {
        backgroundColor: COLOR.WHITE,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: COLOR.LIGHT_GREY,
    },
    userMessage: {
        backgroundColor: COLOR.DEFALUTCOLOR,
        alignSelf: 'flex-end',
    },
    messageText: {
        fontSize: 14,
        lineHeight: 20,
    },
    botMessageText: {
        color: COLOR.BLACK,
    },
    userMessageText: {
        color: COLOR.WHITE,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 16,
        backgroundColor: COLOR.WHITE,
        borderTopWidth: 1,
        borderTopColor: COLOR.LIGHT_GREY,
    },
    input: {
        flex: 1,
        backgroundColor: COLOR.LIGHTDEFALUTCOLOR,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginRight: 8,
        maxHeight: 100,
        fontSize: 14,
        color: COLOR.BLACK,
    },
    sendBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: COLOR.DEFALUTCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendBtnDisabled: {
        backgroundColor: COLOR.GRAY_DARK,
        opacity: 0.5,
    },
});

export default ChatBot;
