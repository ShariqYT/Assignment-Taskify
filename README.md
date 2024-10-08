<h1>To-Do List Application</h1>
<h2>Introduction</h3>
<p>This To-Do List application allows users to create, update, and delete tasks. It provides functionality to mark tasks as completed.</p>

<h3>Features</h2>
<ul>
  <li>Add Tasks: Users can add new tasks to the list.</li>
  <li>Edit Tasks: Existing tasks can be edited.</li>
  <li>Delete Tasks: Tasks can be removed from the list.</li>
  <li>Toggle Completion: Users can mark tasks as completed/incomplete.</li>
</ul>

<h2>Getting Started</h2>
<h3>Prerequisites</h3>
<ul>
  <li>Node.js (version 16 or above)</li>
  <li>MongoDB (version 4.4 or above)</li>
</ul>

<h3>Installation</h3>

<p>1. Install Dependencies</p>

<p>For the Server:</p>

```
cd server
npm install
```

<p>For the Todo_App:</p>

```
cd Todo_App
npm install
```

<p>2. Start the Application</p>

<p>For the Server:</p>

```
cd server
npm start
```

<p>For the Todo_App:</p>

```
cd Todo_App
npm run dev
```
<p>The application will be available at </p>

``` http://localhost:3000 ```

<h2>Usage</h3>
<ul>
  <li>Add a Task: Enter the task description in the input field and click "Add" or "Save" if editing an existing task.</li>
  <li>Edit a Task: Click the "Edit" button next to the task you want to modify, update the text, and save.</li>
  <li>Delete a Task: Click the "Delete" button next to the task you want to remove.</li>
  <li>Toggle Completion: Use the checkbox to mark a task as completed.</li>
</ul>

<h2>Code Structure</h2>

<h3>Todo_App (client)</h3>

• ```src/components/AddTask.js: Component for adding and updating tasks.```

• ```src/components/TaskLists.js: Component for displaying and managing the list of tasks.```

• ```src/pages/Home.js: Main page that integrates AddTask and TaskLists components.```

• ```src/pages/Navbar.js: Header for the navigation.```

<h3>Server (server)</h3>

• ```index.js: Entry point for the Express server. Sets up routes (update, add, edit, delete and get all tasks) and connects to MongoDB.```

• ```models/Task.js: Mongoose schema and model for tasks.```

<h2>Key Decisions</h2>

<li>Component-Based Architecture: The client is built using React components for better reusability.</li>
<li>State Management: React's useState and useEffect hooks are used for managing and fetching state.</li>
<li>RESTful API: The server uses Express to handle CRUD operations and communicates with MongoDB using Mongoose.</li>
<li>Error Handling: Basic error handling is implemented both on the client and server sides to provide better feedback during failures.</li>
