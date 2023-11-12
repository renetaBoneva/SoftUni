const { test, expect } = require('@playwright/test');

test("Verify 'All Books' link is visible", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true);
});

test("Verify 'Login' button is visible", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    const loginButton = await page.$('a[href="/login"]');
    const isLoginButtonVisible = await loginButton.isVisible();
    expect(isLoginButtonVisible).toBe(true);
});

test("Verify 'Register' button is visible", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    const registerButton = await page.$('a[href="/register"]');
    const isRegisterButtonVisible = await registerButton.isVisible();
    expect(isRegisterButtonVisible).toBe(true);
});

test("Verify 'All Books' link is visible after user login", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true);
});


test("Verify 'My Books' link is visible after user login", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const myBooksLink = await page.$('a[href="/profile"]');
    const isLinkVisible = await myBooksLink.isVisible();
    expect(isLinkVisible).toBe(true);
});

test("Verify 'Add Book' link is visible after user login", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const addBookLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await addBookLink.isVisible();
    expect(isLinkVisible).toBe(true);
});

test("Verify That the User's Email Address Is Visible after login", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const welcomeSpan = await page.$('#user > span');
    const isSpanVisible = await welcomeSpan.isVisible();
    expect(isSpanVisible).toBe(true);
});

test("Login with valid credentials", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    await page.$('a[href="/catalog"]');
    expect(page.url()).toBe('http://localhost:3300/catalog');
});

test("Submit the Login Form with Empty Input Fields", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })

    await page.$('a[href="/login"]');
    expect(page.url()).toBe('http://localhost:3300/login');
});

test("Submit the Login Form with Empty Email Field", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })

    await page.$('a[href="/login"]');
    expect(page.url()).toBe('http://localhost:3300/login');
});

test("Submit the Login Form with Empty Password Field", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })

    await page.$('a[href="/login"]');
    expect(page.url()).toBe('http://localhost:3300/login');
});

test("Register with valid credentials", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/register"]')
    await page.fill('input[name="email"]', 'pesho@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.fill('input[name="confirm-pass"]', '123456');
    await page.click('input[type="submit"]');

    await page.$('a[href="/catalog"]');
    expect(page.url()).toBe('http://localhost:3300/catalog');
});

test("Submit the Register Form with Empty Fields", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/register"]')
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })

    await page.$('a[href="/register"]');
    expect(page.url()).toBe('http://localhost:3300/register');
});

test("Submit the Register Form with Empty Email Fields", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/register"]')
    await page.fill('input[name="password"]', '123456');
    await page.fill('input[name="confirm-pass"]', '123456');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })

    await page.$('a[href="/register"]');
    expect(page.url()).toBe('http://localhost:3300/register');
});

test("Submit the Register Form with Empty Password Fields", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/register"]')
    await page.fill('input[name="email"]', 'peter54@abv.bg');
    await page.fill('input[name="confirm-pass"]', '123456');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })

    await page.$('a[href="/register"]');
    expect(page.url()).toBe('http://localhost:3300/register');
});

test("Submit the Register Form with Empty Confirm Password Fields", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/register"]')
    await page.fill('input[name="email"]', 'peter54@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })

    await page.$('a[href="/register"]');
    expect(page.url()).toBe('http://localhost:3300/register');
});

test("Submit the Register Form with Different Passwords", async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/register"]')
    await page.fill('input[name="email"]', 'peter54@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.fill('input[name="confirm-pass"]', '1234567');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })

    await page.$('a[href="/register"]');
    expect(page.url()).toBe('http://localhost:3300/register');
});

test.only('Add book with correct data', async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    
    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3300/catalog')
    ]);

    await page.click('a[href="/create"]')
    await page.waitForSelector('#create-form');
    await page.fill("#title", 'Test Book');
    await page.fill("#description", 'Test is a test book description');
    await page.fill("#image", 'https://example.com/book-image.jpg');
    await page.selectOption('#type','Fiction');
    await page.click('#create-form input[type="submit"]');

    await page.waitForURL('http://localhost:3300/catalog');
    expect(page.url()).toBe('http://localhost:3300/catalog');
})