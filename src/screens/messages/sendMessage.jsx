import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './message.css'; // Import your CSS file

const AdminMessaging = () => {
  const [messages, setMessages] = useState([]);
  const [receiverId, setReceiverId] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/send', {
        sender_id: 'admin_id', // Assuming admin's ID
        receiver_id: receiverId,
        subject,
        body,
      });
      alert('Message sent successfully');
      fetchMessages(); // Refresh message list
      setReceiverId('');
      setSubject('');
      setBody('');
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className="admin-messaging">
      <h2>Admin Messaging</h2>
      <div className="message-form">
        <form onSubmit={handleSubmit}>
          <label>
            Receiver ID:
            <input type="text" value={receiverId} onChange={(e) => setReceiverId(e.target.value)} />
          </label>
          <label>
            Subject:
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </label>
          <label>
            Body:
            <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="message-list">
        <h3>Messages</h3>
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
    </div>
  );
};

export default AdminMessaging;
