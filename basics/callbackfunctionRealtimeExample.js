//Basics — The test() function itself is a callback.
// Every test you write is a function you hand to Playwright's runner, and it decides when to invoke it. 
// forEach on locators is another everyday example.

// Page events — page.on('console', callback) and page.on('pageerror', callback) are pure event-driven callbacks. 
// Critical for catching JS errors and monitoring browser output without any polling.

// Network — page.route(url, callback) is the most powerful callback in Playwright. 
// It intercepts HTTP requests mid-flight and lets you mock, modify, or
//  abort them from your Node.js test — crossing the process boundary into the browser.

// Dialogs — Must be handled via callbacks.
//  If you don't register the handler before triggering the action, the dialog blocks the test forever.

// waitForFunction — Your callback literally runs inside the browser's JavaScript context, polls until it returns true,
//  and reports back to Node.js. This is cross-runtime callback passing.

//========================================================

//basic
// forEach callback — iterating locators
// The most basic callback in Playwright — you pass a function to forEach to act on each found element.
// forEach takes a callback; runs once per matching element
const items = page.locator('ul.menu li');
await items.evaluateAll(
  (elements) => elements.map(el => el.textContent)
);

// Playwright's native forEach callback
await items.all().then(async (list) => {
  for (const item of list) {
    await item.click();
    await page.waitForTimeout(300);
  }
});

// test() callback — the test block itself
// Every Playwright test is a callback. The anonymous async function you pass to test() IS a callback — invoked by the test runner.
import { test, expect } from '@playwright/test';

// 'test' accepts a callback function as its 2nd argument
test('user can login', async ({ page }) => {
  // ↑ This entire async fn is a CALLBACK passed to test()
  await page.goto('https://app.com/login');
  await page.getByLabel('Email').fill('user@test.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);
});

//====================================

//page events
// page.on() — listening for browser events
// page.on(event, callback) — classic callback pattern. You register a function that Playwright calls back whenever the event fires.
// Callback fires every time a new console message appears
page.on('console', (msg) => {
  console.log(`[Browser] ${msg.type()}: ${msg.text()}`);
});

// Catch ALL uncaught JS errors automatically
page.on('pageerror', (error) => {
  console.error('JS Error on page:', error.message);
  // Could fail the test or log to a report
});

// Callback fired when a new tab/popup opens
page.on('popup', async (popup) => {
  await popup.waitForLoadState();
  console.log('Popup URL:', popup.url());
});

// page.once() — single-fire callback
// Use page.once() when you need the callback to fire only one time — e.g., handle a one-time modal or alert.
// Only handles the FIRST dialog, then unregisters itself
page.once('dialog', (dialog) => {
  dialog.accept('Confirm');
});

await page.getByText('Delete Account').click();
// Callback fires here for first dialog only

//=============================================

//Network
// route() — intercept & mock API calls
// page.route(url, callback) is a powerful callback pattern: intercept HTTP requests and fulfill/abort/mock them — all via a callback.
// Callback fires for every matching network request
await page.route('**/api/users', async (route) => {
  // Mock the response — no real server needed
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ])
  });
});

await page.goto('/users');
// Page now gets mocked data — callback intercepts the call

// Intercept & modify requests on the fly
// Callback lets you modify request before it goes out
await page.route('**/api/**', async (route, request) => {
  const headers = {
    ...request.headers(),
    'x-test-header': 'automation'
  };
  await route.continue({ headers });
  // ^ Passes request through with modified headers
});

// Collect all API responses for later assertion
const responses = [];
page.on('response', async (response) => {
  if (response.url().includes('/api')) {
    responses.push(response.url());
  }
});

//=============================================

//dialogs
// Handling alert / confirm / prompt
// Dialogs in Playwright MUST be handled via callbacks — if you don't register a handler, the dialog will block the test forever.
// Real-world: E-commerce delete confirmation dialog
test('should delete item from cart', async ({ page }) => {
  await page.goto('/cart');

  // Register callback BEFORE the action that triggers dialog
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Are you sure?');
    await dialog.accept();  // Click OK
    // or: await dialog.dismiss() — clicks Cancel
  });

  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(page.getByText('Cart is empty')).toBeVisible();

  //=============================

//waitForFunction() — callback as polling condition
//waitForFunction takes a callback that runs IN THE BROWSER repeatedly until it returns true. This is a callback passed cross-process (Node.js → browser).
// Callback runs in browser context until true
await page.waitForFunction(() => {
  const el = document.querySelector('#loading-spinner');
  return el === null || el.style.display === 'none';
});

// With custom polling interval and timeout
await page.waitForFunction(
  (threshold) => {
    const count = document.querySelectorAll('.product-card').length;
    return count >= threshold;
  },
  10,   // arg passed into the callback
  { polling: 500, timeout: 10000 }
);

// evaluate() — run a callback in browser, get result back
const title = await page.evaluate(() => document.title);

//=============================================

//Playwright's test.beforeEach and test.afterEach are classic lifecycle callbacks —
//  functions called automatically before/after every test.
test.beforeEach(async ({ page }) => {
  // Callback: runs before every test in this file
  await page.goto('https://app.com');
  await page.evaluate(() => localStorage.clear());
});

test.afterEach(async ({ page }, testInfo) => {
  // Callback: runs after every test — great for cleanup
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({
      path: `screenshots/${testInfo.title}.png`
    });
  }
});
});

//====================================================

// Q: What is a callback in the context of Playwright?
// A: A callback is a function passed as an argument to another function — Playwright calls it at the right moment. 
//  Examples include the async function inside test(), the handler in page.on('dialog', callback), and
//  the route interceptor in page.route(url, callback). 
//  Because browser automation is inherently async, callbacks let Playwright notify your test code when something happens — 
//  a dialog appears, a network request fires, or a condition becomes true.

// Q: Why does Playwright use callbacks for event handling instead of return values?
// A: Browser events are non-deterministic — a dialog can appear at any time, a network call can fire in any order. 
// Return values only work for synchronous, predictable outcomes. 
// Callbacks (via page.on()) follow the observer pattern: your function is registered once, and 
// Playwright invokes it every time the event occurs — no polling needed.

// Q: What's the difference between page.on() and page.once()?
// A: page.on() registers a persistent callback — it fires every time the event occurs throughout the test.
//  page.once() registers a one-time callback — after the first invocation, it automatically unregisters itself.
//  Use once() for a predictable one-off event (like a login modal that appears only once), 
// and on() for ongoing monitoring (like logging all console errors).

// Q: Explain how page.route() uses a callback pattern.
// A: page.route(urlPattern, callback) intercepts every network request matching the pattern and 
//  calls your callback with a route object. Inside the callback,
//  you decide what happens: route.fulfill() mocks the response, route.abort() blocks it, 
//  or route.continue() lets it pass through (optionally with modified headers). 
//  This is the callback pattern at its most powerful — you control the outcome of async browser-to-server
//  communication from within Node.js.