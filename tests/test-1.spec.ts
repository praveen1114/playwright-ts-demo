import {test, expect} from '@playwright/test';

test ('locator demo',async({page}) => {
// // await page.goto('http://127.0.0.1:5500/tests/locators.html');
// const clickButton = page.getByRole('button',{name:'Click Me'})
// // console.log(clickButton);
// await clickButton.click();
// const nav = page.getByRole('navigation',{name:'Main Navigation'})
// console.log(nav);
// await nav.isVisible;

//Locator chaining & iframe html
await page.goto('http://127.0.0.1:5500/tests/iframeapp.html');

// Accessing a frame first
const frame = page.frameLocator('#loginFrame');

await frame.getByLabel('Username').fill('myUser')
// Narrowing down inside the frame
await frame.getByLabel('Password').fill('myPassword');


})