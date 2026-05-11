Tennis Scoring Kata
A clean, test-driven implementation of the Tennis Scoring rules, built with TypeScript and Vitest.

🎾 Project Overview
This project implements the scoring logic of a tennis game. The goal is to handle the complex transitions of a tennis match, including:

Standard scoring (Love, 15, 30, 40)

Tied scores (Love-All, 15-All, etc.)

The Deuce state

Advantage logic

Win conditions (leading by 2 points after scoring 40)

🛠 Tech Stack
Language: TypeScript (for type safety and clarity)

Test Runner: Vitest (a modern, fast testing framework)

Runtime: Node.js

🧪 Test-Driven Development (TDD)
The project was developed following the Red-Green-Refactor cycle.

Red: Wrote a failing test case for a specific tennis rule.

Green: Implemented the minimum logic required to pass the test.

Refactor: Cleaned up the code, optimized lookup tables, and improved readability without breaking functionality.

Scoring Logic Architecture
Instead of using complex nested if-else statements, the logic is categorized into three distinct states:

Equality: Handles identical scores and the "Deuce" state.

End-Game: Handles "Advantage" and "Win" scenarios based on the relative score difference once a player reaches at least 4 points.

Regular Play: Uses a lookup table (Array) to translate numerical points to tennis terminology.

🚀 Getting Started

Prerequisites:

 Node.js (v18 or higher recommended)

 npm (installed with Node.js)

Installation
Clone the repository and install the dependencies:

git clone https://github.com/karamas13/tennis_kata.git
npm install

Running Tests
To verify the logic and see the test suite in action:

# Run tests once
npm test

# Run tests in watch mode (for development)
npx vitest

📝 Thought Process & Commits
The commit history is structured to reflect the step-by-step evolution of the logic. Each commit represents a clear milestone in the TDD process, allowing you to follow the transition from basic scoring to complex advantage/win scenarios.

📄 License
This project is open-source and available under the MIT License.

