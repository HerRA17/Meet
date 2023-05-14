import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

  let browser;
  let page;
  
  beforeAll(async () => {
    jest.setTimeout(50000);
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 150,
      ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.EventDetails');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.EventDetails .event__Details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.EventDetails .detailsButton');
    const eventDetails = await page.$('.EventDetails');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.EventDetails .detailsButton');
    const eventDetails = await page.$('.EventDetails ');
    expect(eventDetails).toEqual({});
  });

  test('User has not searched for a city, show upcoming events from all cities', async () => {
    const events = await page.$$('.EventDetails');
    expect(events).toHaveLength(5);
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Berlin');
    const suggestions = await page.$$('.suggestions li');
    expect(suggestions).toHaveLength(2);
  });

  test('User can select a city from the suggested list', async () => {
    await page.click('.suggestions li:nth-child(1)');
    const input = await page.$eval('.city', el => el.value);
    expect(input).toBe('Berlin, Germany');

    const events = await page.$$('.EventDetails');
    expect(events).toHaveLength(2);
  });

});

