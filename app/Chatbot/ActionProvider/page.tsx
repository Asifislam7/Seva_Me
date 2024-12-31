// filepath: /c:/Users/asif islam/OneDrive/Documents/sevame/app/ActionProvider.js
import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
  createChatBotMessage: any;
    setState: any;
  constructor(createChatBotMessage: any, setStateFunc: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hello! How can I assist you today?");
    this.updateChatbotState(greetingMessage);
  }

  handleAppointment() {
    const message = this.createChatBotMessage("You can schedule an appointment by logging into the system and then filling your details..");
    this.updateChatbotState(message);
  }

  handleDoctor() {
    const message = this.createChatBotMessage("You can find a doctor by using the 'Find a Doctor' feature on our platform.");
    this.updateChatbotState(message);
  }

  handleDefault() {
    const defaultMessage = this.createChatBotMessage("I'm not sure how to respond to that. Can you please rephrase?");
    this.updateChatbotState(defaultMessage);
  }

  handleThanks(){
    const defaultMessage = this.createChatBotMessage("You're welcome! If you have any other questions feel free to ask.");
    this.updateChatbotState(defaultMessage);
  }

  handleTest(){
    const defaultMessage = this.createChatBotMessage("Diagnostic Tests will be launched soon on our platform! Stay Tuned.");
    this.updateChatbotState(defaultMessage);
  }

  updateChatbotState(message : string) {
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;