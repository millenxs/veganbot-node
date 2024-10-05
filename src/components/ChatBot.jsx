import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Olá! Eu sou o VeganBot 🌱. Como posso te ajudar hoje? 😊' }
  ]);
  const [input, setInput] = useState('');

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
	chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
	scrollToBottom();
  }, [messages]);

  const cleanBotMessage = (message) => {
    return message.replace(/[*#]/g, ''); 
  };


  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

	  setInput(''); 

      try {
        const response = await axios.post('http://localhost:3000/api/message', { message: input });
        let botMessageText = response.data.reply;

		botMessageText = cleanBotMessage(botMessageText);
		
		const botMessage = { text: response.data.reply, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error communicating with the bot:', error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-800/70 rounded-3xl shadow-2xl w-full max-w-md h-[600px] flex flex-col overflow-hidden ">
        <div className="bg-gray-700/70 p-4 flex justify-between items-center ">
          <div className="title text-white text-lg">Chatbot de Veganismo</div>
          <h2 className="text-gray-400 text-sm">@VeganBot 🌱</h2> 
          <figure className="avatar">
            <img src="../public/BOT.png" width="50" height="50" className="rounded-full" />
          </figure>
        </div>

        
        <div className="chat-body flex-1 p-4 overflow-y-auto flex flex-col space-y-2 h-full" id="chat">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === 'user'
                  ? 'bg-gray-600 text-white self-end p-2 rounded-lg max-w-xs'
                  : 'bg-[#7BCBD5] text-black self-start p-2 rounded-lg max-w-xs'
              }
            >
              {msg.text}
            </div>
          ))}
		  <div ref={chatEndRef} />
        </div>

       
        <div className="bg-gray-700/70  p-2 flex">
          <input
		  type="text"
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()} 
            className="flex-grow p-2 bg-gray-600 text-white rounded-md outline-none resize-none mb-4"
            rows="3"
          ></input>
          <button
            onClick={sendMessage}
            className="sendMessage ml-2 bg-[#7BCBD5] hover:bg-[#4FB3C1] font-bold py-2 px-4 rounded-md mb-4"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
