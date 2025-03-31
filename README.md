# Able.co Enhanced Support Chatbot

## Overview
This repository contains the code for Able.co's enhanced support chatbot, a web-based interface designed to provide comprehensive information about Able.co, its services, and its approach to AI-powered software development.

![Able.co Chatbot LLM Architecture Workflow](./images/llm-architecture-diagram.svg)

## Features

### Comprehensive Knowledge Base
- **Expanded Topics**: Covers 25+ topics including company information, services, AI approach, team structure, culture, future plans, competitors, projects, leadership, clients, remote work, hiring, technologies, and more
- **Multiple Response Variations**: Each topic includes multiple response variations to maintain natural conversation flow
- **Fallback Handling**: Intelligent fallback responses that guide users to available information

### Enhanced Intent Matching
- **Fuzzy Pattern Matching**: Identifies user intent even with variant phrasing
- **Keyword Expansion**: Additional keywords and phrases for broader matching capabilities
- **Semantic Similarity**: Detects topic relevance through semantic analysis
- **Context Awareness**: Maintains conversation context for more natural responses

### Dynamic User Interface
- **Contextual Suggestion Chips**: Suggestions change based on conversation context
- **Responsive Design**: Mobile-friendly layout with smooth animations
- **Visual Branding**: Incorporates Able.co branding elements
- **Conversation History**: Maintains and displays full conversation history

### Forward-Looking Content
- **Future Vision**: Includes information about company roadmap and strategic direction
- **AI Evolution**: Insights about AI trends and Able's position in the evolving landscape
- **Growth Strategy**: Details about expansion plans and focus areas
- **Market Positioning**: Information about competitive landscape and differentiation

## Implementation Details

### Core Components
- Pure JavaScript implementation with no external dependencies
- HTML5 and CSS3 for responsive interface
- Object-oriented architecture for maintainability

### Key Classes
- `AbleChatbot`: Main chatbot logic with intent matching and response generation
- Knowledge base structured as intents with patterns and multiple response options
- Additional keyword mappings for enhanced matching

### Matching Algorithm
The chatbot uses three layers of matching to identify user intent:
1. Direct pattern matching with similarity threshold
2. Expanded keyword matching for broader coverage
3. Topic similarity detection for contextual understanding

### UI Features
- Message bubbles with distinct styling for user and bot messages
- Auto-scrolling chat container
- Suggestion chips that update based on conversation context
- Clean, branded header and input area

## How to Use

1. Clone this repository
2. Open `index.html` in a web browser
3. Start interacting with the chatbot by typing questions or clicking suggestion chips

## Customization

### Adding New Topics
To add new topics to the knowledge base, add an object to the `knowledgeBase` array with:
- `intent`: Unique identifier for the topic
- `patterns`: Array of phrases that should trigger this topic
- `responses`: Array of response variations

Example:
```javascript
{
    intent: "new_topic",
    patterns: ["keyword1", "keyword2", "phrase1"],
    responses: [
        "Response variation 1",
        "Response variation 2",
        "Response variation 3"
    ]
}
```

### Adding Keywords
To improve matching for existing topics, add entries to the `additionalKeywords` object:

```javascript
this.additionalKeywords = {
    "existing_intent": ["new keyword", "new phrase"]
}
```

## Future Improvements
- Integration with backend API for more dynamic responses
- User authentication for personalized experiences
- Analytics tracking for conversation insights
- Multi-language support
- Voice interaction capabilities
- Expansion from Key Word to Language Flexibility

## License
Copyright © 2025 Able.co - All Rights Reserved
