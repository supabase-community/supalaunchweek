/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import chromium from 'chrome-aws-lambda';
import playwright from 'playwright-core';

export default async function screenshot(url: string) {
  const browser = await playwright.chromium.launch({
    args: chromium.args,
    executablePath:
      (await chromium.executablePath) ?? process.platform === 'win32'
        ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
        : process.platform === 'linux'
        ? '/usr/bin/google-chrome'
        : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: chromium.headless
  });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 2000, height: 1000 });
  await page.goto(url, { waitUntil: 'networkidle' });
  return await page.screenshot({ type: 'png' });
}
