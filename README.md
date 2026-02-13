---
🚀 Project Nexus – DevConnect
---
DevConnect is a developer collaboration platform designed to help programmers connect, share ideas, and work together on projects. It provides a space where developers can showcase their skills, discover collaborators, and grow their network.

This project is being built as part of a hands-on software development journey, focusing on modern frontend tools and scalable backend integration.

---
🌟 Project Goals
---
DevConnect aims to:

Help developers create and manage their profiles

Allow users to discover and connect with other developers

Provide a foundation for collaboration on future tech projects

Practice building a full-stack application using modern tools

---
🛠 Tech Stack
---
Frontend

React (with Vite)

Tailwind CSS

JavaScript (ES6+)

Backend (Planned / In Progress)

Django

Django REST Framework (DRF)

RESTful APIs

✨ Core Features (Planned & In Progress)

👤 Developer profile creation

🔍 Browse and search for other developers

🤝 Connect and collaborate with other users

---
📁 Project showcase section
---
🔐 Authentication system (login/register)

📂 Project Structure (Frontend)
project-nexus-devconnect/
│
├── public/           # Static files
├── src/              # React source code
│   ├── components/   # Reusable UI components
│   ├── pages/        # Main application pages
│   ├── App.jsx       # Main App component
│   └── main.jsx      # Entry point
│
├── index.html
├── package.json
└── README.md

---
⚙️ Installation & Setup
---
To run the project locally:

1️⃣ Clone the repository
git clone https://github.com/Mr-Shadrack-Okyere/project-nexus-devconnect.git
cd project-nexus-devconnect

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


The app will run at:

http://localhost:5173

---
🧪 Development Status
---
🚧 This project is actively under development.
New features and backend integration will be added progressively.

---
🤝 Contributing
---
Contributions, ideas, and suggestions are welcome!

Fork the repository

Create a new branch

Make your changes

Submit a pull request
---
📜 License
---
This project is for educational and development purposes.

---
# DevConnect
---

**Add your own guidelines here**

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
