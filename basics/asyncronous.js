
// Why JavaScript is Asynchronous
// The Core Reason: Single-Threaded Nature
// JavaScript runs on a single thread — it can only do one thing at a time. If it were purely synchronous, a slow operation (like a network request) would freeze the entire page until it completes.
// Asynchronous behavior solves this by letting JS start a task, move on, and come back when it's done.

// How It Actually Works (The Event Loop)
// JavaScript's async model has 4 key parts:
// 1. Call Stack — executes code line by line (synchronous)
// 2. Web APIs — browser handles slow tasks (setTimeout, fetch, DOM events) outside the JS thread
// 3. Callback/Task Queue — completed async tasks wait here
// 4. Event Loop — constantly checks: "Is the call stack empty? If yes, push from the queue."

// Interview Explanation (Simple & Clear)

// "JavaScript is single-threaded, meaning it has one call stack and executes one operation at a time. 
// If we had a synchronous-only model, a 5-second API call would block all user interaction. 
// To avoid this, JS uses an event loop — slow operations are handed off to the browser's Web APIs, 
// and when they finish, their callbacks are queued and picked up by the event loop once the main thread is free. 
// This is why JS can feel concurrent without actually being multi-threaded."


// Quick Code Example to Show in Interview
// javascriptconsole.log("1 - Start");

// setTimeout(() => {
//   console.log("2 - Inside timeout"); // async
// }, 0);

// console.log("3 - End");

// // Output:
// // 1 - Start
// // 3 - End
// // 2 - Inside timeout  ← even with 0ms delay!
// This surprises many — the setTimeout fires last because it goes through the Web API → queue → event loop cycle, even with 0ms delay.

// The 3 Ways to Handle Async in JS
// Pattern           Style               When to Use
// Callbacks         doThing(fn)         Legacy/simple cases
// Promises          .then().catch()     Chained async operations
// async/await       await fetch(...)    Modern, readable code

// One-Line Interview Summary

// "JS is async because it's single-threaded — the event loop lets it handle slow tasks without blocking, 
// by deferring them and coming back when they're done.