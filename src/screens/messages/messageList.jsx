import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Replace with your backend endpoint
        const response = await axios.get('http://localhost:8000/api/messages');
        setMessages(response.data.Data); // Assuming your response has a 'Data' field
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="message-list">
      <h2>All Messages</h2>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Subject</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.message_id}>
              <td>{message.sender_id}</td>
              <td>{message.receiver_id}</td>
              <td>{message.subject}</td>
              <td>{message.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessageList;
