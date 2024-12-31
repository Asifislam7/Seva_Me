// filepath: /c:/Users/asif islam/OneDrive/Documents/sevame/app/MessageParser.js
class MessageParser {
    actionProvider: any;
    constructor(actionProvider: any) {
      this.actionProvider = actionProvider;
    }
  
    parse(message: string) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      } else if (lowerCaseMessage.includes("appointment")) {
        this.actionProvider.handleAppointment();
      } else if (lowerCaseMessage.includes("doctor")) {
        this.actionProvider.handleDoctor();
      } else if (lowerCaseMessage.includes("thank you")) {
        this.actionProvider.handleThanks();
      } else if (lowerCaseMessage.includes("test")) {
        this.actionProvider.handleTest();
      } else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;