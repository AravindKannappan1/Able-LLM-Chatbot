# Able.co Customer Support Chatbot

This project implements a simple FAQ chatbot for Able.co using a pattern-matching approach with natural language processing techniques. The chatbot provides information about Able's services, team, AI approach, and other frequently asked questions.

## Features

- **Intent-based matching**: Identifies user intent through pattern matching and similarity calculations.
- **Natural responses**: Provides multiple response variations for each intent to create a more natural conversation experience.
- **Suggestion chips**: Clickable suggestions to guide users toward common questions.
- **Mobile-friendly UI**: Responsive design that works on desktop and mobile devices.
- **Easy extensibility**: Simple knowledge base structure for adding new intents and responses.

## How It Works

The chatbot uses a simple but effective intent recognition system:

1. **Intent detection**: Analyzes user input to identify the most likely intent.
2. **Pattern matching**: Matches words and phrases in the user's message to predefined patterns.
3. **Similarity calculation**: Uses Jaccard similarity to find close matches even when wording differs.
4. **Response generation**: Selects an appropriate response based on the identified intent.
5. **Fallback handling**: Gracefully handles queries outside the chatbot's knowledge domain.

## Core Functions

- **findIntent(userInput)**: Identifies the most relevant intent for the user's message.
- **calculateSimilarity(str1, str2)**: Computes text similarity to catch variations in phrasing.
- **generateResponse(userInput)**: Selects an appropriate response for the detected intent.
- **processMessage(userMessage)**: Main entry point for getting a response to user input.

## UI Components

The chatbot interface includes:

- **Message history display**: With distinct styling for user and bot messages.
- **Input field with send button**: For user input.
- **Suggestion chips**: Clickable suggestions for common queries.
- **Able.co branding elements**: Ensuring a consistent brand experience.

## Data Sources

The information in this chatbot was collected by web scraping Able.co's website and related online sources, focused on these key areas:

- **Company background and history**.
- **Services and offerings**.
- **AI approach and methodologies**.
- **Team composition and structure**.
- **Value propositions and benefits**.
- **Development process**.

## Customization Options

### Adding New Intents

To expand the chatbot's knowledge:

1. Identify new topics or questions to cover.
2. Create patterns that users might use to ask about these topics.
3. Write multiple response variations.
4. Add the new intent object to the `knowledgeBase` array.

## License

This project is proprietary and created specifically for Able.co's use.
