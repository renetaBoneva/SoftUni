const { test, expect } = require('@playwright/test');

test('user can add task', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/to-do-app/');
    await page.fill('#task-input', "Test Task");
    await page.click('#add-task');
    const taskText = await page.textContent('.task');
    expect(taskText).toContain("Test Task");
});

test('user can delete task', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/to-do-app/');
    await page.fill('#task-input', "Test Delete Task");
    await page.click('#add-task');
    
    await page.click('.task .delete-task');

    const tasks = await page.$$eval('.task', tasks => tasks.map(t=>t.textContent));
    expect(tasks).not.toContain("Test Delete Task");
});

test('user can complete task', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/to-do-app/');
    await page.fill('#task-input', "Test complete Task");
    await page.click('#add-task');
    
    await page.click('.task .task-complete');
    const completedTask = await page.$('.task.completed');
    expect(completedTask).not.toBeNull();
});


test('user can filter task', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/to-do-app/');
    await page.fill('#task-input', "Test filter Task");
    await page.click('#add-task');

    await page.click('.task .task-complete');

    await page.selectOption('#filter',"Completed");
    const incompleteTask=await page.$('.task:not(.completed)');
    expect(incompleteTask).toBeNull();
});