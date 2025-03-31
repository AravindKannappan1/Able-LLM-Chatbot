// Able.co Customer Support Chatbot
// This simple chatbot uses a knowledge base scraped from Able.co's website
// to answer basic FAQs about the company, its services, and offerings.

class AbleChatbot {
  constructor() {
    this.companyInfo = {
      name: "Able",
      founded: 2013,
      focus: "Software development combining human talent with AI tools",
      teamSize: "60+ experts including strategists, designers, engineers, and project managers",
      locations: "Distributed across North and South America",
      website: "https://able.co/"
    };
    
    this.knowledgeBase = [
      {
        intent: "greeting",
        patterns: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
        responses: [
          "Hello! I'm Able's support chatbot. How can I help you today?",
          "Hi there! Welcome to Able. What would you like to know about our services?",
          "Hey! I'm here to answer your questions about Able. What can I help you with?"
        ]
      },
      {
        intent: "goodbye",
        patterns: ["bye", "goodbye", "see you", "take care", "exit", "quit", "end"],
        responses: [
          "Goodbye! Feel free to return if you have more questions.",
          "Thanks for chatting! Have a great day.",
          "See you next time! Don't hesitate to reach out if you need further assistance."
        ]
      },
      {
        intent: "thanks",
        patterns: ["thank you", "thanks", "appreciate it", "thank you so much", "thanks a lot"],
        responses: [
          "You're welcome! Is there anything else I can help you with?",
          "Happy to help! Do you have any other questions?",
          "My pleasure! Let me know if you need anything else."
        ]
      },
      {
        intent: "company_info",
        patterns: ["what is able", "tell me about able", "company information", "who is able", "about able", "what does able do"],
        responses: [
          "Able is a software development company founded in 2013 that combines human talent with AI tools to increase quality and capacity while reducing costs and development time.",
          "Able was founded in 2013 and focuses on building software with world-class talent and AI, offering software development solutions that leverage AI to deliver better results faster.",
          "Able is a product strategy and development company established in 2013, with a team of 60+ experts distributed across North and South America. We combine human expertise with AI tools to deliver efficient software solutions."
        ]
      },
      {
        intent: "services",
        patterns: ["what services", "services offered", "what do you offer", "services provided", "your services"],
        responses: [
          "Able offers software development services that combine human talent with AI tools. We help organizations identify opportunities, build roadmaps, and create investment plans to drive growth and reduce costs through AI.",
          "Our services include AI-powered software development, product strategy, and team augmentation. We deliver solutions that increase quality and capacity while reducing costs and development time.",
          "Able provides end-to-end software development services utilizing AI tools and human expertise. We offer product strategy, design, engineering, and project management solutions tailored to your business needs."
        ]
      },
      {
        intent: "ai_approach",
        patterns: ["ai approach", "how do you use ai", "ai integration", "ai tools", "artificial intelligence", "machine learning"],
        responses: [
          "We've tested hundreds of AI development tools and layer these with AI agents applied based on specific technical and business requirements. Our approach extracts the best of what humans do, coupled with what AI can do.",
          "Able combines human talent with AI tools to increase quality and capacity while reducing costs and development time. We've created methodologies that we apply in customized frameworks based on organizations' needs.",
          "Our AI approach involves redistributing task loads between humans, AI agents, and AI tools to reduce development time by up to 40%. We use AI to enhance every stage of the software development lifecycle."
        ]
      },
      {
        intent: "team",
        patterns: ["team", "who works at able", "employees", "staff", "developers", "team composition"],
        responses: [
          "Able has a diverse team of 60+ experts including strategists, designers, engineers, and project managers distributed across North and South America.",
          "Our team members are distributed across North and South America, forming one flat, integrated team of product professionals in nine countries.",
          "We have a combination of U.S. based and nearshore team members that ensures we maximize cost efficiencies, which we pass onto our clients."
        ]
      },
      {
        intent: "benefits",
        patterns: ["benefits", "advantages", "why choose able", "value proposition", "what makes you different"],
        responses: [
          "By working with Able, you can reduce feature development time by 40%, save up to 70% on testing, reduce technical debt by up to 30%, and decrease maintenance costs by 40% with our AI-enabled capabilities.",
          "Our leading-edge methodologies deliver 30%+ savings, and in some use cases deliver 2X-3X savings. We help you push more code faster and allow your team to focus on what humans do best.",
          "Able helps you increase quality and capacity while reducing costs and development time through our unique combination of human talent and AI tools."
        ]
      },
      {
        intent: "process",
        patterns: ["process", "how do you work", "development process", "methodology", "approach", "how projects work"],
        responses: [
          "We've reimagined practices and processes to extract the best of what humans do, coupled with what AI can do. The result is powerful methodologies applied in customized frameworks based on your organization's needs.",
          "Our process involves identifying opportunities, building roadmaps, and creating investment plans to drive growth and reduce costs through AI. We field focused, dedicated teams designed to seamlessly integrate with our partners.",
          "Able follows an agile development approach with full stack product teams that combine AI technologies with custom workflows to deliver efficiencies throughout the software development lifecycle."
        ]
      },
      {
        intent: "history",
        patterns: ["history", "when founded", "company history", "background", "origin", "how long in business"],
        responses: [
          "Able was founded in 2013 on the premise that entrepreneurs and philanthropists needed a better service model for building technology. We've been building software for twelve years, constantly evolving to deliver leading-edge solutions.",
          "Established in 2013, Able has grown to a team of 60+ experts distributed across North and South America. We've been evolving our approach to software development for over a decade.",
          "Since our founding in 2013, we've been building software and constantly evolving to deliver leading-edge solutions for our clients. AI presents new opportunities to innovate how we build."
        ]
      },
      {
        intent: "contact",
        patterns: ["contact", "reach out", "get in touch", "contact information", "email", "phone", "talk to human"],
        responses: [
          "To get in touch with Able, please visit our website at https://able.co/ and use the contact form or email details provided there.",
          "You can reach out to Able through our website at https://able.co/ where you'll find our contact information.",
          "If you'd like to speak with a human representative, please visit https://able.co/ to find our contact details and schedule a conversation."
        ]
      },
      {
        intent: "offerings",
        patterns: ["offerings", "products", "solutions", "what can you build", "capabilities"],
        responses: [
          "Able offers solutions for every stage of software development, including feature development, testing, technical debt reduction, and maintenance - all enhanced by our AI-powered approach.",
          "Our offerings include AI-powered software development services that increase quality, capacity, and speed across the software development lifecycle.",
          "Able provides end-to-end product development, from strategy and design to engineering and maintenance, all enhanced by our AI tools and methodologies."
        ]
      },
      {
        intent: "social_good",
        patterns: ["social good", "social impact", "philanthropy", "giving back", "mission", "values"],
        responses: [
          "Able believes in technology's power to drive positive change for good. This belief has been with us since our start in 2013 and continues to guide our work today.",
          "We were founded with a focus on helping entrepreneurs and philanthropists build technology, and this commitment to social impact remains core to our values.",
          "Able is committed to using technology for positive change, working with organizations that seek to make a meaningful impact through their products and services."
        ]
      },
      {
        intent: "security",
        patterns: ["security", "data protection", "privacy", "secure", "data privacy", "information security"],
        responses: [
          "Able prioritizes secure, transparent, and governed AI development, embedding emerging best practices and state-of-the-art techniques throughout our ideation and development processes.",
          "We safeguard AI systems and data with robust protocols to ensure data privacy and integrity, delivering responsible AI that drives sustainable, impactful business results.",
          "Security is built into our development processes. We implement robust data protection measures and follow best practices for secure AI deployment."
        ]
      },
      {
        intent: "fallback",
        patterns: [],
        responses: [
          "I'm not sure I understand your question. Could you rephrase or ask something about Able's services, team, or approach?",
          "I don't have information on that specific topic. Would you like to know about our services, AI approach, or company background instead?",
          "I'm still learning! That question is outside my current knowledge base. Can I help you with something about Able's offerings or team?"
        ]
      }
    ];
  }

  // Find the best matching intent for user input
  findIntent(userInput) {
    const normalizedInput = userInput.toLowerCase().trim();
    
    // Check each intent's patterns for matches
    for (const item of this.knowledgeBase) {
      for (const pattern of item.patterns) {
        if (normalizedInput.includes(pattern) || 
            this.calculateSimilarity(normalizedInput, pattern) > 0.7) {
          return item;
        }
      }
    }
    
    // Return fallback intent if no match found
    return this.knowledgeBase.find(item => item.intent === "fallback");
  }
  
  // Simple string similarity calculation (Jaccard similarity)
  calculateSimilarity(str1, str2) {
    const set1 = new Set(str1.split(' '));
    const set2 = new Set(str2.split(' '));
    
    const intersection = new Set([...set1].filter(word => set2.has(word)));
    const union = new Set([...set1, ...set2]);
    
    return intersection.size / union.size;
  }
  
  // Generate a response based on user input
  generateResponse(userInput) {
    const matchedIntent = this.findIntent(userInput);
    const responses = matchedIntent.responses;
    
    // Randomly select a response from the available options
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
  
  // Process user message and return chatbot response
  processMessage(userMessage) {
    return this.generateResponse(userMessage);
  }
}

// Example implementation with a simple UI
document.addEventListener('DOMContentLoaded', () => {
  const chatbot = new AbleChatbot();
  const chatContainer = document.getElementById('chat-container');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  
  function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    
    // Auto-scroll to the bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  function handleUserMessage() {
    const message = userInput.value.trim();
    if (message) {
      // Display user message
      addMessage(message, 'user');
      
      // Clear input field
      userInput.value = '';
      
      // Get chatbot response
      setTimeout(() => {
        const response = chatbot.processMessage(message);
        addMessage(response, 'bot');
      }, 500); // Slight delay for natural feel
    }
  }
  
  // Event listeners
  sendButton.addEventListener('click', handleUserMessage);
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleUserMessage();
    }
  });
  
  // Initial greeting
  setTimeout(() => {
    const greeting = chatbot.knowledgeBase.find(item => item.intent === "greeting");
    addMessage(greeting.responses[0], 'bot');
  }, 300);
});

// HTML structure (for reference):
/*
<div class="chatbot-container">
  <div class="chatbot-header">
    <img src="able-logo.png" alt="Able Logo" class="logo">
    <h2>Able Support</h2>
  </div>
  <div id="chat-container" class="chat-container"></div>
  <div class="input-container">
    <input type="text" id="user-input" placeholder="Type your question here...">
    <button id="send-button">Send</button>
  </div>
</div>
*/

// CSS styles (for reference):
/*
.chatbot-container {
  width: 400px;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
}

.chatbot-header {
  background-color: #0066cc;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
}

.logo {
  height: 30px;
  margin-right: 10px;
}

.chat-container {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
}

.message {
  padding: 10px 15px;
  border-radius: 20px;
  margin-bottom: 10px;
  max-width: 80%;
}

.user {
  background-color: #e6f2ff;
  margin-left: auto;
  border-bottom-right-radius: 0;
}

.bot {
  background-color: #f1f0f0;
  margin-right: auto;
  border-bottom-left-radius: 0;
}

.input-container {
  display: flex;
  padding: 15px;
  border-top: 1px solid #ddd;
}

#user-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
}

#send-button {
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

#send-button:hover {
  background-color: #0052a3;
}
*/
