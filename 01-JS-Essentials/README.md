# JavaScript Modules and Exports

JavaScript modules allow you to break your code into smaller, reusable pieces. This makes your code easier to maintain, debug, and test. Modules are an essential part of modern JavaScript development.

## What Are Modules?

Modules are individual files that contain JavaScript code. Each module can export functionality (variables, functions, classes, etc.) and import functionality from other modules. This helps in organizing code and avoiding global namespace pollution.

### Why Use Modules?

1. **Code Reusability**: Write once, use multiple times.
2. **Encapsulation**: Keep code private unless explicitly exported.
3. **Maintainability**: Smaller, focused files are easier to manage.
4. **Dependency Management**: Import only what you need.

---

## Exporting in JavaScript

To make parts of a module available to other files, you need to export them. There are two types of exports:

### 1. Named Exports

Named exports allow you to export multiple values from a module. Each exported value must be imported using its exact name.

#### Syntax:
```javascript
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

#### Importing Named Exports:
```javascript
// app.js
import { add, subtract } from './mathUtils.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```

You can also rename imports:
```javascript
import { add as addition } from './mathUtils.js';
console.log(addition(5, 3)); // 8
```

### 2. Default Exports

Default exports allow you to export a single value from a module. This is useful when a module is designed to export one primary thing.

#### Syntax:
```javascript
// logger.js
export default function log(message) {
     console.log(message);
}
```

#### Importing Default Exports:
```javascript
// app.js
import log from './logger.js';

log('Hello, World!'); // Hello, World!
```

You can name the imported value anything:
```javascript
import customLogger from './logger.js';
customLogger('Custom message'); // Custom message
```

---

## Importing in JavaScript

To use exported functionality, you import it into another file.

### Syntax:
```javascript
import { namedExport1, namedExport2 } from './module.js';
import defaultExport from './module.js';
```

You can combine named and default imports:
```javascript
import defaultExport, { namedExport } from './module.js';
```

---

## CommonJS (require/export)

Before ES6 modules, Node.js used the CommonJS module system. It uses `require` to import and `module.exports` to export.

### Exporting with CommonJS:
```javascript
// mathUtils.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
```

### Importing with CommonJS:
```javascript
// app.js
const { add, subtract } = require('./mathUtils');

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```

---

## Key Differences Between ES Modules and CommonJS

| Feature            | ES Modules (`import/export`) | CommonJS (`require/module.exports`) |
|--------------------|-----------------------------|-------------------------------------|
| Syntax             | `import` / `export`        | `require` / `module.exports`       |
| Default Export     | Supported                  | Supported                          |
| Named Export       | Supported                  | Supported                          |
| Asynchronous Loading | Supported in browsers     | Not supported                      |
| Usage              | Browser & Node.js (modern) | Node.js (legacy)                   |

---

## Practical Example

### File Structure:
```
project/
├── mathUtils.js
├── logger.js
└── app.js
```

### `mathUtils.js`:
```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

### `logger.js`:
```javascript
export default function log(message) {
     console.log(message);
}
```

### `app.js`:
```javascript
import log from './logger.js';
import { add, subtract } from './mathUtils.js';

log(`Addition: ${add(5, 3)}`); // Addition: 8
log(`Subtraction: ${subtract(5, 3)}`); // Subtraction: 2
```

---

## Conclusion

JavaScript modules are a powerful way to organize and reuse code. Use ES modules (`import/export`) for modern development, and CommonJS (`require/module.exports`) for legacy Node.js projects. Understanding these concepts will help you write cleaner, modular, and maintainable code.
