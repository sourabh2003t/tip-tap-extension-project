# Enhanced Highlight Editor - ReactJS

This project implements a Tiptap-based rich text editor with custom extensions for highlighting, **bold**, *italic*, underline, and strikethrough text formatting.

## Prerequisites
Before running the application, ensure that you have the following installed:

Node.js (v14 or higher)

npm (comes with Node.js)

## **Getting Started**
Follow the steps below to get the project up and running on your local machine:

### 1. Clone the Repository
First, clone the repository to your local machine:

**Copy code:**
```java
git clone <repository-url>
cd <repository-folder>
```
### 2. Install Dependencies
Install the necessary dependencies by running:

**Copy code:**
```java
npm install
```
### 3. Install Tiptap and Required Extensions
In addition to the core Tiptap library, you'll need to install the necessary extensions like Highlight and Underline. To do this, run the following:

**Copy code**
```java
npm install @tiptap/react 
npm install @tiptap/starter-kit 
npm install @tiptap/extension-highlight 
npm install @tiptap/extension-underline 
npm install react-icons
```
This will install the following:

**@tiptap/react:** Core Tiptap React bindings

**@tiptap/starter-kit:** Starter kit for Tiptap (includes basic text editing functionality)

**@tiptap/extension-highlight:** Highlighting extension

**@tiptap/extension-underline:** Underline extension

**react-icons:** For adding icons to the toolbar

### 4. Run the Application
Once dependencies are installed, you can start the application locally by running:

**Copy code:**
```java
npm start
```
The app will run at http://localhost:3000.

### 5. Build the Application for Production (Optional)

If you want to create an optimized build for production, run:

**Copy code**
```java
npm run build
```
This will create a production build in the build/ directory.

## Usage
Once the app is running, you can use the Editor with the following features:

**Bold:** Toggle bold text.

**Italic:** Toggle italic text.

**Underline:** Toggle underline text.

**Strikethrough:** Toggle strikethrough text.

**Highlight:** Highlight selected text (default color: yellow).
