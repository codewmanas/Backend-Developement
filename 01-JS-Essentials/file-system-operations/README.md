# Node.js File System Operations

## Introduction

Node.js provides a powerful module called `fs` (File System) that allows developers to interact with the file system in a seamless and efficient manner. This module is part of Node.js's core, meaning you don't need to install any additional packages to use it. Whether you're working with files or directories, the `fs` module provides both synchronous and asynchronous methods to handle file system operations.

This document serves as a comprehensive guide to understanding and using Node.js file system operations effectively.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Common Operations](#common-operations)
     - [Reading Files](#reading-files)
     - [Writing Files](#writing-files)
     - [Appending to Files](#appending-to-files)
     - [Deleting Files](#deleting-files)
3. [Working with Directories](#working-with-directories)
     - [Creating Directories](#creating-directories)
     - [Reading Directories](#reading-directories)
     - [Deleting Directories](#deleting-directories)
4. [File System Utilities](#file-system-utilities)
     - [Renaming Files](#renaming-files)
     - [Checking File/Directory Existence](#checking-filedirectory-existence)
     - [Getting File Stats](#getting-file-stats)
5. [Best Practices](#best-practices)
6. [Conclusion](#conclusion)

---

## Getting Started

To use the `fs` module, you need to require it in your Node.js script:

```javascript
const fs = require('fs');
```

The `fs` module provides two sets of methods:
- **Asynchronous Methods**: Non-blocking and preferred for production use.
- **Synchronous Methods**: Blocking and should be used sparingly.

---

## Common Operations

### Reading Files

#### Asynchronous
```javascript
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log(data);
});
```

#### Synchronous
```javascript
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
```

### Writing Files

#### Asynchronous
```javascript
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('File written successfully!');
});
```

#### Synchronous
```javascript
try {
  fs.writeFileSync('example.txt', 'Hello, World!');
  console.log('File written successfully!');
} catch (err) {
  console.error(err);
}
```

### Appending to Files

#### Asynchronous
```javascript
fs.appendFile('example.txt', '\nAppended Text', (err) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('Text appended successfully!');
});
```

#### Synchronous
```javascript
try {
  fs.appendFileSync('example.txt', '\nAppended Text');
  console.log('Text appended successfully!');
} catch (err) {
  console.error(err);
}
```

### Deleting Files

#### Asynchronous
```javascript
fs.unlink('example.txt', (err) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('File deleted successfully!');
});
```

#### Synchronous
```javascript
try {
  fs.unlinkSync('example.txt');
  console.log('File deleted successfully!');
} catch (err) {
  console.error(err);
}
```

---

## Working with Directories

### Creating Directories

#### Asynchronous
```javascript
fs.mkdir('new-directory', { recursive: true }, (err) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('Directory created successfully!');
});
```

#### Synchronous
```javascript
try {
  fs.mkdirSync('new-directory', { recursive: true });
  console.log('Directory created successfully!');
} catch (err) {
  console.error(err);
}
```

### Reading Directories

#### Asynchronous
```javascript
fs.readdir('directory-path', (err, files) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('Files:', files);
});
```

#### Synchronous
```javascript
try {
  const files = fs.readdirSync('directory-path');
  console.log('Files:', files);
} catch (err) {
  console.error(err);
}
```

### Deleting Directories

#### Asynchronous
```javascript
fs.rmdir('directory-path', (err) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('Directory deleted successfully!');
});
```

#### Synchronous
```javascript
try {
  fs.rmdirSync('directory-path');
  console.log('Directory deleted successfully!');
} catch (err) {
  console.error(err);
}
```

---

## File System Utilities

### Renaming Files

#### Asynchronous
```javascript
fs.rename('old-name.txt', 'new-name.txt', (err) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('File renamed successfully!');
});
```

#### Synchronous
```javascript
try {
  fs.renameSync('old-name.txt', 'new-name.txt');
  console.log('File renamed successfully!');
} catch (err) {
  console.error(err);
}
```

### Checking File/Directory Existence

#### Asynchronous
```javascript
fs.access('file-or-directory-path', fs.constants.F_OK, (err) => {
  console.log(err ? 'Does not exist' : 'Exists');
});
```

#### Synchronous
```javascript
try {
  fs.accessSync('file-or-directory-path', fs.constants.F_OK);
  console.log('Exists');
} catch (err) {
  console.log('Does not exist');
}
```

### Getting File Stats

#### Asynchronous
```javascript
fs.stat('example.txt', (err, stats) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('Stats:', stats);
});
```

#### Synchronous
```javascript
try {
  const stats = fs.statSync('example.txt');
  console.log('Stats:', stats);
} catch (err) {
  console.error(err);
}
```

---

## Best Practices

1. **Use Asynchronous Methods**: Always prefer asynchronous methods to avoid blocking the event loop.
2. **Error Handling**: Always handle errors gracefully to prevent crashes.
3. **Use Promises**: Consider using the `fs.promises` API or wrapping callbacks in Promises for cleaner code.
4. **Avoid Hardcoding Paths**: Use `path` module to handle file paths dynamically.
5. **Clean Up Resources**: Ensure files and directories are properly closed or deleted when no longer needed.

---

## Conclusion

The `fs` module is a versatile and essential tool for Node.js developers. By mastering its capabilities, you can efficiently manage files and directories in your applications. Always follow best practices to write robust and maintainable code.

Happy coding!