// // 1. Process
// // process is a global object in Node.js.
// // It provides information about and control over
// // the currently running program.

// // 2. process.argv
// // It is an array that stores command-line arguments.
// // All arguments are stored as strings.

// // Example:
// // Run: node process.js Shantanu 23

console.log(process.argv);

// // Index:
// // process.argv[0] -> Node.js executable path
// // process.argv[1] -> File path
// // process.argv[2] -> First argument (Shantanu)
// // process.argv[3] -> Second argument (23)


// // 3. Working Example: Add Two Numbers

let a = Number(process.argv[2]);
let b = Number(process.argv[3]);

console.log("Sum =", a + b);

// // Run: node process.js 10 20
// // Output: Sum = 30


// // 4. Other Useful Process Properties

console.log(process.pid);     // Process ID
console.log(process.version); // Node.js version
console.log(process.cwd());   // Current working directory
console.log(process.env);     // Environment variables


