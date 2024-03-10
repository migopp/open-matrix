import puppeteer from 'puppeteer'

/**
 * Launches Gheith's matrix for a specified project
 * @param {number} projectNumber
 * @returns {void}
 */
async function launchMatrix(projectNumber) {
    const matrixAddress = `https://www.cs.utexas.edu/~gheith/cs429h_s24_p${projectNumber}.html`

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(matrixAddress);

    await page.setViewport({ width: 1080, height: 700 });
}

const projectNumber = process.argv[2];
launchMatrix(projectNumber);
