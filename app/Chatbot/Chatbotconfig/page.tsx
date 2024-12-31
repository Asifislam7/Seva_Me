import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = (handleClose: any) => ({
  botName: "DocTimeBot",
  initialMessages: [
    createChatBotMessage("Hi! I'm here to help you with your queries about DocTime.", { widget: "" }),
  ],
  customStyles: {
    chatButton: {
      backgroundColor: "#4A90E2",
    },
  },
  customComponents: {
    header: () => (
      <div
        style={{
          padding: "10px",
          borderRadius: "10px 10px 0 0",
          color: "white",
          textAlign: "center",
          position: "relative",
        }} className="shad-primary-btn"
      >
        DocTimeBot
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
      </div>
    ),
    botAvatar: () => <div className="bot-avatar"></div>,
    userAvatar: () => <div className="user-avatar"></div>,
    botMessageBox: (props: { children: ReactNode }) => (
      <div className="bot-message-container">
        <div className="bot-avatar">AI:</div>
        <div className="bot-message">{props.children}</div>
      </div>
    ),
    userMessageBox: (props: { children: ReactNode }) => (
      <div className="user-message-container">
        <div className="user-avatar">You:</div>
        <div className="user-message">{props.children}</div>
      </div>
    ),
  },
});

export default config;
