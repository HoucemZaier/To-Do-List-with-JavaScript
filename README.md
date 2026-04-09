# To-Do List Application

<div align="center">

A simple, interactive To-Do List web application built with vanilla HTML, CSS, and JavaScript.

**Tech Stack:** `HTML5` `CSS3` `JavaScript ES6+`

</div>

---

## Table of Contents

| Section | Description |
|---------|-------------|
| [1. Overview](#1-overview) | Project description and key highlights |
| [2. Features](#2-features) | Complete feature list |
| [3. Project Structure](#3-project-structure) | File organization and architecture |
| [4. Getting Started](#4-getting-started) | Installation and setup instructions |
| [5. Usage Guide](#5-usage-guide) | How to use the application |
| [6. API Reference](#6-api-reference) | JavaScript functions and methods |
| [7. Data Persistence](#7-data-persistence) | Local storage implementation |
| [8. Customization](#8-customization) | How to modify and extend |
| [9. Browser Support](#9-browser-support) | Compatible browsers |

---

## 1. Overview

This To-Do List application provides a clean, responsive interface for managing daily tasks. Built with zero dependencies, it demonstrates core web development concepts including DOM manipulation, event handling, and client-side storage.

**Key Highlights:**
- Zero external dependencies (except Google Fonts)
- Persistent data storage via localStorage
- Clean, modern UI with Poppins typography
- Fully responsive design

---

## 2. Features

| Feature | Description | Status |
|---------|-------------|--------|
| **Add Tasks** | Create tasks via input field | ✅ Implemented |
| **Edit Tasks** | Inline task modification | ✅ Implemented |
| **Complete Tasks** | Toggle completion with visual feedback | ✅ Implemented |
| **Delete Tasks** | Individual task removal | ✅ Implemented |
| **Data Persistence** | Auto-save to localStorage | ✅ Implemented |
| **Theme Toggle** | Light/Dark mode switch | ✅ Implemented |
| **Responsive Design** | Mobile and desktop support | ✅ Implemented |

---

## 3. Project Structure

```
To-do-List/
│
├── 📄 index.html              # Application entry point
├── 📄 app.js                  # Core JavaScript logic
├── 📄 style.css               # Styling and themes
├── 📄 README.md               # Documentation
│
├── 📁 images/                 # Static assets
│   ├── 🖼️ icon.png           # Application icon
│   └── 🖼️ edit.png           # Edit button icon
│
└── 📁 .vscode/               # Editor configuration
```

**File Sizes:**
- `index.html`: ~1.3 KB
- `app.js`: ~1.6 KB
- `style.css`: ~9.8 KB

---

## 4. Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required
- No package manager needed

### Installation

```bash
# Clone or download the repository
git clone <repository-url>

# Navigate to project directory
cd To-do-List

# Open in browser
open index.html
```

### Quick Start

1. Open `index.html` in any web browser
2. Start adding tasks immediately
3. Data persists automatically

---

## 5. Usage Guide

### 5.1 Adding a Task

```
1. Click on input field
2. Type task description
3. Click "Add task" button
4. Task appears in list below
```

### 5.2 Completing a Task

| Action | Result |
|--------|--------|
| Click task text | Toggles checked/unchecked state |
| Checked state | Visual strikethrough + checkmark |

### 5.3 Editing a Task

```
1. Click edit icon (🖉) on task
2. Task text loads into input field
3. Task removed from list
4. Modify text and click "Add task" to save
```

### 5.4 Deleting a Task

- Click the **×** button on any task to remove it permanently

---

## 6. API Reference

### JavaScript Functions

#### `addTask()`

| Property | Value |
|----------|-------|
| **Purpose** | Creates new task element |
| **Parameters** | None (reads from `inputBox.value`) |
| **Returns** | `undefined` |
| **Side Effects** | Appends to DOM, saves to localStorage |

```javascript
// Usage
addTask(); // Called via onclick or programmatically
```

#### `saveData()`

| Property | Value |
|----------|-------|
| **Purpose** | Persist tasks to localStorage |
| **Parameters** | None |
| **Storage Key** | `"tasks"` |
| **Storage Value** | `listContainer.innerHTML` |

```javascript
// Automatically called after:
// - Adding task
// - Tling completion
// - Deleting task
// - Editing task
```

#### `showData()`

| Property | Value |
|----------|-------|
| **Purpose** | Retrieve and display saved tasks |
| **Called** | On page load (DOMContentLoaded) |
| **Data Source** | `localStorage.getItem("tasks")` |

### Event Listeners

| Event | Target | Handler |
|-------|--------|---------|
| `click` | `listContainer` | Task check/uncheck, delete |
| `click` | `editIcon` | Load task for editing |
| `DOMContentLoaded` | `document` | `showData()` |

---

## 7. Data Persistence

### localStorage Schema

```javascript
{
  "tasks": "<ul>...task HTML...</ul>"  // Stringified HTML
}
```

### Data Flow

```
User Action → DOM Update → saveData() → localStorage
                                           ↓
Page Load → showData() ← localStorage.getItem("tasks")
```

### Storage Limits

- **Maximum Size**: ~5-10 MB (browser dependent)
- **Data Type**: String (HTML content)
- **Scope**: Domain-specific
- **Expiration**: None (persistent until cleared)

### Clearing Data

```javascript
// Clear all tasks programmatically
localStorage.removeItem("tasks");
location.reload();
```

---

## 8. Customization

### 8.1 Typography

**Current Font:** Poppins (Google Fonts)

To change:

```html
<!-- index.html - Replace this line -->
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

```css
/* style.css - Update font-family */
body {
  font-family: 'YourFont', sans-serif;
}
```

### 8.2 Color Scheme

Key CSS selectors to modify:

```css
/* Main background */
body { background: linear-gradient(...); }

/* Task container */
.todo-app { background: #fff; }

/* Completed tasks */
ul li.checked { color: #555; text-decoration: line-through; }

/* Buttons */
button { background: #ff5945; }
```

### 8.3 Feature Extensions

Suggested additions to `app.js`:

```javascript
// Task priority
function addTaskWithPriority(text, priority) { ... }

// Task categories
function filterByCategory(category) { ... }

// Due dates
function addDueDate(taskElement, date) { ... }

// Task counters
function updateTaskCount() { ... }
```

---

## 9. Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 80+ | ✅ Fully Supported |
| Firefox | 75+ | ✅ Fully Supported |
| Safari | 13+ | ✅ Fully Supported |
| Edge | 80+ | ✅ Fully Supported |
| IE | 11 | ❌ Not Supported |

**Requirements:**
- ES6+ JavaScript support
- localStorage API
- CSS Flexbox/Grid
- DOM Level 3 Events


Try the project : 🔗 [Live Demo]( https://houcemzaier.github.io/To-Do-List-with-JavaScript/)

![Capture d'écran 2025-04-28 173901](https://github.com/user-attachments/assets/57679961-1df3-43f4-a219-b7711ea819fb)
![Capture d'écran 2025-04-17 213327](https://github.com/user-attachments/assets/17635b5a-64d1-4fb9-a169-eac3399f7a64)
![Capture d'écran 2025-05-08 164959](https://github.com/user-attachments/assets/cb781c17-5d8f-4830-939e-60ac1cf385ae)
![Capture d'écran 2025-05-08 164945](https://github.com/user-attachments/assets/bba3ed0d-437c-4df0-854b-7701970247d0)
