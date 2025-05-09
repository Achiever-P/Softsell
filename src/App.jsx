import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatboticon from "./components/Chatboticon.jsx";
import Chatform from "./components/Chatform.jsx";
import ChatMessage from "./components/ChatMessage.jsx";
import {useEffect, useRef, useState} from "react";
import { companyInfo } from "./companyinfo.js";

const Chatbot = () => {

    const [chatHistory, setChatHistory] = useState([
        {
            hideInChat: true,
            role: "model",
            text: companyInfo,
        },
    ]);
    const [showChatbot, setShowChatbot] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const chatBodyRef = useRef();

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode) setDarkMode(JSON.parse(savedMode));
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    const generateBotResponse = async (history) => {

        const updateHistory = (text, isError = false) => {
            setChatHistory((prev) => [...prev.filter((msg) => msg.text !== "Thinking..."), { role: "model", text, isError }]);
        };

        history = history.map(({role, text}) => ({role, parts: [{text}]}));

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({contents: history})
        }
        try {
            const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error.message || "Something went wrong!");

            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();
            updateHistory(apiResponseText);
        }catch (error) {
            updateHistory(error.message, true);
        }
    };

    useEffect(() => {
        chatBodyRef.current.scrollTo({    top: chatBodyRef.current.scrollHeight, behaviour: "smooth"});
    }, [chatHistory]);

    return (
        <main
            className={`relative min-h-screen w-screen overflow-x-hidden transition-all duration-300
    ${darkMode ? "bg-black text-white" : "bg-[#d0c3f1] text-black"}`}>
            {/* Pass darkMode and setDarkMode to NavBar */}
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Hero/>
            <About/>
            <Features/>
            <Story/>
            <Contact/>
            <div className={`container fixed bottom-4 right-4 z-50 ${showChatbot ? "show-chatbot" : ""}`}>
                {/* Chatbot Button */}
                <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
                    <span className="material-symbols-rounded">mode_comment</span>
                    <span className="material-symbols-rounded">close</span>
                </button>

                {/* Chatbot Popup */}
                <div className="chatbot-popup bg-white text-black shadow-xl rounded-md">
                    <div className="chat-header bg-indigo-500 text-white">
                        <div className="header-info">
                            <Chatboticon/>
                            <h2 className="logo-text">Chatbot</h2>
                        </div>
                        <button onClick={() => setShowChatbot(prev => !prev)}
                                className="material-symbols-rounded">keyboard_arrow_down
                        </button>
                    </div>

                    <div ref={chatBodyRef} className="chat-body bg-white text-black">
                        <div className="message bot-message">
                            <Chatboticon/>
                            <p className="message-text">
                                Hey there <br/> How can I help you today?
                            </p>
                        </div>

                        {chatHistory.map((chat, index) => (
                            <ChatMessage key={index} chat={chat}/>
                        ))}
                    </div>

                    <div className="chat-footer bg-white text-black">
                        <Chatform
                            chatHistory={chatHistory}
                            setChatHistory={setChatHistory}
                            generateBotResponse={generateBotResponse}
                        />
                    </div>
                </div>
            </div>

            <Footer/>
        </main>
    );
}

export default Chatbot;
