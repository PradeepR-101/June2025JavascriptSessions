// 🔷 Instance Methods (Non-Static)
// Called on a promise object — handle the result of that specific promise.

// 1. .then(onFulfilled, onRejected)
// Runs when promise resolves.
fetch('/api/user')
  .then(res => res.json())
  .then(data => console.log(data));

// 2. .catch(onRejected)
// Runs when promise rejects. Shorthand for .then(null, onRejected).
javascriptfetch('/api/user')
  .then(res => res.json())
  .catch(err => console.error("Error:", err));

// 3. .finally(onFinally)
// Runs always — whether resolved or rejected. Good for cleanup.
 javascriptsetLoading(true);

fetch('/api/user')
  .then(res => res.json())
  .catch(err => console.error(err))
  .finally(() => setLoading(false));  // always runs

// 🔶 Static Methods
// Called on the Promise class itself — deal with multiple promises.

// 1. Promise.resolve(value)
// Returns an already resolved promise.
Promise.resolve(42).then(val => console.log(val)); // 42

// Used in testing or when you want to wrap a value as a promise.


// 2. Promise.reject(reason)
// Returns an already rejected promise.
Promise.reject(new Error("Failed"))
  .catch(err => console.error(err.message)); // "Failed"

// 3. Promise.all([...]) — All or Nothing
// Waits for all promises. Fails fast if any one rejects.
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
]);
// ✅ All resolve  → returns array of results
// ❌ One rejects  → immediately rejects (others ignored)

// 4. Promise.allSettled([...]) — Wait for All
// Waits for all to finish regardless of outcome. Never rejects.
const results = await Promise.allSettled([
  fetchUser(),
  fetchPosts(),
  fetchComments()
]);

results.forEach(result => {
  if (result.status === "fulfilled") {
    console.log("Success:", result.value);
  } else {
    console.log("Failed:", result.reason);
  }
});
// ✅ Resolves → { status: "fulfilled", value: ... }
// ❌ Rejects  → { status: "rejected",  reason: ... }

// 5. Promise.race([...]) — First One Wins
// Resolves or rejects with whichever promise settles first.
const result = await Promise.race([
  fetch('/api/fast'),
  fetch('/api/slow'),
  timeoutPromise(3000)   // reject if takes > 3s
]);

// Use case: Timeout handling — race your API call against a timer.

// 6. Promise.any([...]) — First Success Wins
// Resolves with the first fulfilled promise. Ignores rejections.
// Only rejects if ALL promises reject (AggregateError).
const fastest = await Promise.any([
  fetchFromServer1(),
  fetchFromServer2(),
  fetchFromServer3()
]);
// console.log("Got response from fastest server:", fastest);
// ✅ First success → returns that value
// ❌ All reject    → throws AggregateError