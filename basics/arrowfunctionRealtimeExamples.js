// 1. Basic Test Definition
import { test, expect } from '@playwright/test';

// Arrow function as test callback
test('user can login', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#email', 'user@example.com');
  await page.fill('#password', 'secret123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});

// 2. Page Object Model (POM)
import { Page, Locator } from '@playwright/test';

// class LoginPage {
//   private page: Page;
//   private emailInput: Locator;
//   private passwordInput: Locator;
//   private submitBtn: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.emailInput    = page.locator('#email');
//     this.passwordInput = page.locator('#password');
//     this.submitBtn     = page.locator('button[type="submit"]');
//   }

//   // Arrow functions as class methods
//   navigate = async () => {
//     await this.page.goto('/login');
//   };

//   login = async (email: string, password: string) => {
//     await this.emailInput.fill(email);
//     await this.passwordInput.fill(password);
//     await this.submitBtn.click();
//   };

//   getErrorMessage = async (): Promise<string | null> => {
//     return await this.page.locator('.error-msg').textContent();
//   };
// }

// Arrow methods in POM ensure this always refers to the class instance — no binding issues when methods are passed as callbacks.


// 3. beforeEach / afterEach Hooks
import { test, expect } from '@playwright/test';

test.describe('Dashboard Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.fill('#email', 'admin@test.com');
    await page.fill('#password', 'admin123');
    await page.click('button[type="submit"]');
    await page.waitForURL('/dashboard');
  });

  test.afterEach(async ({ page }) => {
    await page.click('#logout-btn');
  });

  test('dashboard shows welcome message', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Welcome, Admin');
  });
});

// 5. Custom Fixtures
import { test as base } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

// Arrow functions in fixture definitions
const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await use(loginPage);          // provide fixture to test
  },
});

test('login with valid credentials', async ({ loginPage }) => {
  await loginPage.login('user@test.com', 'password123');
  // assertions...
});

// 6. waitForResponse / waitForRequest (API Interception)
tstest('API call is made on form submit', async ({ page }) => {
  await page.goto('/checkout');

  // Arrow function in waitForResponse
  const responsePromise = page.waitForResponse(
    response => response.url().includes('/api/order') && response.status() === 200
  );

  await page.click('#place-order');
  const response = await responsePromise;
  const body     = await response.json();

  expect(body.success).toBe(true);
});

// 7. route — Mocking API Responses
tstest('shows error when API fails', async ({ page }) => {

  // Arrow function to intercept and mock the route
  await page.route('**/api/products', async route => {
    await route.fulfill({
      status: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    });
  });

  await page.goto('/products');
  await expect(page.locator('.error-banner')).toBeVisible();
  await expect(page.locator('.error-banner')).toHaveText('Something went wrong');
});