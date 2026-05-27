//callback function is a function passed as an argument to another function, 
// which is then invoked inside that outer function at a specific point.

// Simple Mental Model

// "Call me back when you're done."

// Like giving someone your phone number and saying "call me when the pizza is ready" — 
// you don't wait there, you go do other things, and they call you back.

// Basic Example
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // calling the function passed as argument
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);
// Output:
// Hello, Alice
// Goodbye!

// Why Do We Need Callbacks?
// JavaScript is single-threaded and uses an event loop. 
// For operations that take time (network requests, file reads, timers), we can't just "wait" — 
// we pass a callback to run when the task completes.

javascript// Without callback — you'd block everything
const data = fetchDataFromServer(); // ❌ can't do this in JS

// With callback — non-blocking
fetchDataFromServer(function(data) {
  console.log(data); // ✅ runs when ready
});

// Types of Callbacks
// 1. Synchronous Callback — runs immediately
const nums = [1, 2, 3];
nums.forEach(function(n) {
  console.log(n * 2); // callback runs right now
});
// 2. Asynchronous Callback — runs later
setTimeout(function() {
  console.log("Runs after 2 seconds"); // callback runs later
}, 2000);

// Real-World Example: API Call
function getUserData(userId, onSuccess, onError) {
  fetch(`/api/users/${userId}`)
    .then(res => res.json())
    .then(data => onSuccess(data))   // success callback
    .catch(err => onError(err));     // error callback
}

getUserData(
  101,
  (data) => console.log("Got user:", data),
  (err)  => console.log("Error:", err)
);

// Callback Hell (The Problem)
// Nesting too many callbacks becomes unreadable:
login(user, function() {
  getProfile(user, function() {
    getPosts(user, function() {
      getComments(post, function() {
        // 😵 pyramid of doom
      });
    });
  });
});
// Solutions: Promises → async/await

//"A callback is a function passed as an argument to another function, executed after a task completes.
// "Why it exists" - JS is single-threaded; callbacks let us handle async tasks without blocking execution.
// "Types - "Sync callbacks run immediately (like in forEach), async callbacks run later (like in setTimeout or API calls).
// "Problem - "Deeply nested callbacks cause 'callback hell', making code hard to read and maintain.
// "Evolution - "That's why Promises and async/await were introduced — they're built on top of callbacks but much cleaner."