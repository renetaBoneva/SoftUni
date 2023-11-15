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

test('Add book with correct data', async ({ page }) => {
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
    await page.selectOption('#type', 'Fiction');
    await page.click('#create-form input[type="submit"]');

    await page.waitForURL('http://localhost:3300/catalog');
    expect(page.url()).toBe('http://localhost:3300/catalog');
})

test('Add book with empty title field', async ({ page }) => {
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
    await page.fill("#description", 'Test is a test book description');
    await page.fill("#image", 'https://example.com/book-image.jpg');
    await page.selectOption('#type', 'Fiction');
    await page.click('#create-form input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })

    await page.$('a[href="/create"]');
    expect(page.url()).toBe('http://localhost:3300/create');
})

test('Add book with empty description field', async ({ page }) => {
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
    await page.fill("#image", 'https://example.com/book-image.jpg');
    await page.selectOption('#type', 'Fiction');
    await page.click('#create-form input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })

    await page.$('a[href="/create"]');
    expect(page.url()).toBe('http://localhost:3300/create');
})

test('Add book with empty image field', async ({ page }) => {
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
    await page.selectOption('#type', 'Fiction');
    await page.click('#create-form input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })

    await page.$('a[href="/create"]');
    expect(page.url()).toBe('http://localhost:3300/create');
})

test('All Books Are Displayed', async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3300/catalog')
    ]);

    await page.waitForSelector('.dashboard');

    const bookElements = await page.$$('.other-books-list li');

    expect(bookElements.length).toBeGreaterThan(0);
})

test('No Books Are Displayed', async ({page})=>{
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3300/catalog')
    ]);

    await page.waitForSelector('.dashboard');

    const noBooksElements = await page.textContent('.no-books');

    expect(noBooksElements).toBe('No books in database!');
})

test('Login and navigate to Details page', async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3300/catalog')
    ]);

    await page.waitForSelector('.otherBooks');

    await page.click('.otherBooks a.button');
    await page.waitForSelector('.book-information');

    const detailsPageTitle = await page.textContent('.book-information h3');

    expect(detailsPageTitle).toBe('To Kill a Mockingbird');
})

test('Navigate to Details page as guest', async ({ page }) => {
    await page.goto('http://localhost:3300/');
    await page.click('a[href="/catalog"]')

    await page.waitForSelector('.otherBooks');

    await page.click('.otherBooks a.button');
    await page.waitForSelector('.book-information');

    const detailsPageTitle = await page.textContent('.book-information h3');

    expect(detailsPageTitle).toBe('Test Book');
})

test('Check Details page details', async ({ page }) => {
    await page.goto('http://localhost:3300/');
    await page.click('a[href="/catalog"]')

    await page.waitForSelector('.otherBooks');

    await page.click('.otherBooks a.button');
    await page.waitForSelector('.book-information');

    const detailsPageTitle = await page.textContent('.book-information h3');
    const detailsPageType = await page.textContent('.book-information p.type');
    const detailsPageDescription = await page.textContent('.book-description p');

    expect(detailsPageTitle).toBe('Test Book');
    expect(detailsPageType).toContain('Romance');
    expect(detailsPageDescription).toBe('test123');
})

test('Are edit and delete buttons visible for creator', async ({ page }) => {
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
    await page.fill("#title", 'Outlander');
    await page.fill("#description", 'Test is a test book description');
    await page.fill("#image", 'https://example.com/book-image.jpg');
    await page.selectOption('#type', 'Fiction');
    await page.click('#create-form input[type="submit"]');

    await page.waitForURL('http://localhost:3300/catalog');
    await page.waitForSelector('.otherBooks');

    await page.click('.otherBooks a.button');
    await page.waitForSelector('.actions');
    
    const deleteButton = await page.$('#details-page > div.book-information > div > a:nth-child(2)');
    const isDeleteButtonVisible = await deleteButton.isVisible();
    expect(isDeleteButtonVisible).toBe(true);

    const editButton = await page.$('#details-page > div.book-information > div > a:nth-child(1)');
    const isEditButtonVisible = await editButton.isVisible();
    expect(isEditButtonVisible).toBe(true);
})

test('Are edit and delete buttons visible for non-creator', async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'reneta.boneva@abv.bg');
    await page.fill('input[name="password"]', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3300/catalog')
    ]);
    await page.waitForSelector('.otherBooks');

    await page.click('.otherBooks a.button');
    await page.waitForSelector('.actions');
    
    const deleteButton = await page.$('#details-page > div.book-information > div > a:nth-child(2)');
    expect(deleteButton).toBe(null);
})

test('Is like button visible for creators', async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'reneta.boneva@abv.bg');
    await page.fill('input[name="password"]', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3300/catalog')
    ]);

    await page.click('a[href="/create"]')
    await page.waitForSelector('#create-form');
    await page.fill("#title", 'Outlander');
    await page.fill("#description", 'Test is a test book description');
    await page.fill("#image", 'https://example.com/book-image.jpg');
    await page.selectOption('#type', 'Fiction');
    await page.click('#create-form input[type="submit"]');

    await page.waitForURL('http://localhost:3300/catalog');
    await page.waitForSelector('.otherBooks');

    await page.click('.otherBooks a.button');
    await page.waitForSelector('.actions');
    
    const likeButtonTxt = await page.textContent('#details-page > div.book-information > div > a');
    const isLikeBtn = likeButtonTxt == "Like";
    expect(isLikeBtn).toBe(false);
})

test('Is like button visible for non-creators', async ({ page }) => {
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'reneta.boneva@abv.bg');
    await page.fill('input[name="password"]', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3300/catalog')
    ]);
    await page.waitForSelector('.otherBooks');

    await page.click('.otherBooks a.button');
    await page.waitForSelector('.actions');
    
    const likeButtonTxt = await page.textContent('#details-page > div.book-information > div > a');
    expect(likeButtonTxt).toBe("Like");
})

test('"Logout" Button Is Visible', async ({page})=>{    
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'reneta.boneva@abv.bg');
    await page.fill('input[name="password"]', '123456');
    
    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3300/catalog')
    ]);
    
    await page.waitForSelector('nav.navbar');
    const logoutButton = await page.$('#logoutBtn');
    const isLogoutButtonVisible = await logoutButton.isVisible();
    expect(isLogoutButtonVisible).toBe(true);
})

test('"Logout" Button redirect correctly', async ({page})=>{    
    await page.goto('http://localhost:3300');
    await page.waitForSelector('nav.navbar');
    await page.click('a[href="/login"]')
    await page.fill('input[name="email"]', 'reneta.boneva@abv.bg');
    await page.fill('input[name="password"]', '123456');
    
    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3300/catalog')
    ]);
    
    await page.waitForSelector('nav.navbar');
    const logoutButton = await page.$('#logoutBtn');
    await logoutButton.click();

    const redirectURL = page.url();
    expect(redirectURL).toBe('http://localhost:3300/catalog');
})
