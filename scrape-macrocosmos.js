const FirecrawlApp = require('@mendable/firecrawl-js').default;

async function scrapeMacrocosmos() {
  const app = new FirecrawlApp({ apiKey: 'fc-44e524ee69d44eabacd79abf2729159f' });

  try {
    console.log('Scraping Macrocosmos team page...');
    const scrapeResult = await app.scrapeUrl('https://www.macrocosmos.ai/team', {
      formats: ['markdown', 'html', 'screenshot'],
      onlyMainContent: false,
      waitFor: 3000,
      timeout: 30000,
      actions: [
        { type: 'wait', milliseconds: 2000 },
        { type: 'scroll', direction: 'down', amount: 500 }
      ]
    });

    console.log('Scrape successful!');

    // Save the results
    const fs = require('fs');
    fs.writeFileSync('macrocosmos-scraped.json', JSON.stringify(scrapeResult, null, 2));

    // Extract key information
    console.log('\n=== EXTRACTED DESIGN ELEMENTS ===\n');

    if (scrapeResult.html) {
      // Parse HTML to find team member structure
      const htmlContent = scrapeResult.html;

      // Look for gradient text patterns
      const gradientMatches = htmlContent.match(/bg-clip-text.*?text-transparent.*?bg-[^"'\s]+/g);
      if (gradientMatches) {
        console.log('Gradient Text Classes Found:');
        gradientMatches.forEach(match => console.log('  -', match));
      }

      // Look for team member cards
      const teamCardPattern = /<div[^>]*class="[^"]*team[^"]*"[^>]*>[\s\S]*?<\/div>/gi;
      const teamCards = htmlContent.match(teamCardPattern);
      if (teamCards) {
        console.log('\nTeam Card Structure Found:');
        console.log('  - Number of team cards:', teamCards.length);
      }

      // Look for specific Tailwind classes
      const bgBlackPattern = /bg-black|bg-\[#000\]/g;
      const textSizePattern = /text-\[[\d]+px\]/g;

      console.log('\nStyling Patterns:');
      if (htmlContent.match(bgBlackPattern)) {
        console.log('  - Black background detected');
      }

      const textSizes = htmlContent.match(textSizePattern);
      if (textSizes) {
        console.log('  - Custom text sizes:', [...new Set(textSizes)].join(', '));
      }
    }

    if (scrapeResult.screenshot) {
      fs.writeFileSync('macrocosmos-screenshot.png', Buffer.from(scrapeResult.screenshot, 'base64'));
      console.log('\nScreenshot saved as macrocosmos-screenshot.png');
    }

    console.log('\nFull scrape data saved to macrocosmos-scraped.json');

  } catch (error) {
    console.error('Error scraping:', error);
  }
}

scrapeMacrocosmos();