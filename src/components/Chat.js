import React, { useState, useEffect } from "react";
import { addDoc, collection, onSnapshot, serverTimestamp, where, query, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../style/Chat.css";

export const Chat = (props) => {
    const { room } = props;

    const [newMessage, setNewMessage] = useState("");
    const [messages, setNewMessages] = useState([]);

    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"));
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messageList = [];
            snapshot.forEach((doc) => {
                messageList.push({ ...doc.data(), id: doc.id });
            });
            setNewMessages(messageList); // Corrected state update
        });
        return () => unsubscribe();
    }, [room]); // Added room as a dependency

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (newMessage === "") return;

    
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            
            room,
        });

        setNewMessage("");
    };

    return (
        <div className="chat-app">
            <div>
                {messages.map((message) => (
                    <h1 key={message.id}>{message.text}</h1>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="new-message-form">
                <input
                    className="new-message-input"
                    placeholder="Type your message here..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button type="submit" className="send-button">
                    Send
                </button>
            </form>
        </div>
    );
};

