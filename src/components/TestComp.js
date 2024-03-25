import React from 'react';

function TelegramBotSender() {
  const sendMessage = async () => {
    const BOT_TOKEN = '6932109006:AAGqQ5Fztmvg7piS7uywPhuR0nCyDYc6l1E';
    const USER_MESSAGE_ID = '338'; // Replace with the actual message ID of the user
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      await fetch(TELEGRAM_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: 1816264810, // Replace with the chat ID of the user
          text: 'Reply to this message!', // Your reply message here
          reply_to_message_id: USER_MESSAGE_ID, // Tagging the user's message
        }),
      });
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default TelegramBotSender;
