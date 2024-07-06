import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { FaRobot, FaUser } from 'react-icons/fa';

interface Message {
  sender: 'bot' | 'user';
  content: string;
  fullyTyped: boolean;
}

interface ChatPageProps {
  initialMessages: string[];
  onClose: () => void;
}

export default function ChatPage({ initialMessages, onClose }: ChatPageProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    typeInitialMessages();
  }, []);

  const typeMessage = (message: Message): Promise<void> => {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        if (i <= message.content.length) {
          setMessages(prev => 
            prev.map((msg, index) => 
              index === prev.length - 1 ? { ...msg, content: message.content.slice(0, i) } : msg
            )
          );
        } else {
          clearInterval(interval);
          setMessages(prev => 
            prev.map((msg, index) => 
              index === prev.length - 1 ? { ...msg, fullyTyped: true } : msg
            )
          );
          resolve();
        }
      }, 20);
    });
  };

  const typeInitialMessages = async () => {
    setIsTyping(true);
    for (const msg of initialMessages) {
      setMessages(prev => [...prev, { sender: 'bot', content: '', fullyTyped: false }]);
      await typeMessage({ sender: 'bot', content: msg, fullyTyped: false });
    }
    setIsTyping(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage: Message = { sender: 'user', content: input, fullyTyped: true };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsTyping(true);

      // Simulate bot response
      await new Promise(resolve => setTimeout(resolve, 1000));
      await typeMessage({ sender: 'bot', content: `You said: ${input}`, fullyTyped: false });
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col p-4">
      <Button onClick={onClose} className="self-end mb-4">Close</Button>
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
            {msg.sender === 'bot' && <FaRobot className="mr-2 mt-1 text-blue-500" />}
            <div className={`max-w-[70%] ${msg.sender === 'user' ? 'bg-gray-100 rounded-lg p-2' : ''}`}>
              <ReactMarkdown>{msg.content}</ReactMarkdown>
              {!msg.fullyTyped && <span className="inline-block w-1 h-4 bg-black animate-blink" />}
            </div>
            {msg.sender === 'user' && <FaUser className="ml-2 mt-1 text-green-500" />}
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <FaRobot className="mr-2 mt-1 text-blue-500" />
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Type your message..."
        />
        <Button onClick={handleSend} className="rounded-l-none">Send</Button>
      </div>
    </div>
  );
}