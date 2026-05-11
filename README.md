# 🎾 Tennis Scoring Kata

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

A clean, production-grade implementation of the Tennis Scoring rules, built with **TypeScript** and developed using **Test-Driven Development (TDD)** principles.

---

## 📖 Project Overview

This project implements the complex scoring logic of a tennis match. The engine handles state transitions beyond simple point counting, ensuring full compliance with official tennis rules.

### Key Features
* **Standard Scoring:** Mapping points to `Love`, `15`, `30`, and `40`.
* **Tie States:** Dynamic handling of `Love-All`, `15-All`, and `30-All`.
* **The Deuce Trap:** Automatic transition to `Deuce` when players are tied at 40-40 or beyond.
* **Advantage System:** Logic for `Advantage Player1` and `Advantage Player2`.
* **Win Conditions:** Detection of match completion (leading by 2 points after reaching 40).

---

## 🧪 Engineering Approach

### Test-Driven Development (TDD)
The core of this project is the **Red-Green-Refactor** workflow. Each feature was implemented only after a failing test case was established, ensuring 100% logic coverage.

1.  **🔴 Red:** Defined the requirement with a failing test.
2.  **🟢 Green:** Implemented the minimal code to satisfy the test.
3.  **🔵 Refactor:** Optimized the logic and improved readability while maintaining "Green" status.

### Scoring Logic Architecture
To avoid "spaghetti" code and nested `if-else` blocks, the logic is decoupled into three architectural states:

| State | Logic |
| :--- | :--- |
| **Equality** | Handles identical scores and the transition to `Deuce`. |
| **End-Game** | Manages `Advantage` and `Win` states via relative point differences. |
| **Regular Play** | Uses a lookup table to map numerical points to tennis terminology. |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm** (comes with Node.js)

### Installation
```bash
# Clone the repository
git clone https://github.com/karamas13/tennis_kata.git
```

### Running Tests
The project uses Vitest for a lightning-fast developer experience.
```bash
# Run tests once
npm test

# Run tests in watch mode
npx vitest
```

## 📝 Thought Process & Commits
The commit history is a deliberate timeline of the TDD process. Each commit represents a single, atomic step in the scoring logic's evolution. This allows reviewers to follow the architectural decisions from the first "Love-All" test to the final win condition.

## 📄 License

This project is open-source and available under the MIT License.



