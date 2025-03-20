// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { BasePageObject } from '@cloudscape-design/browser-test-tools/page-objects';
import useBrowser from '@cloudscape-design/browser-test-tools/use-browser';

import createWrapper from '../../../lib/components/test-utils/selectors';

const wrapper = createWrapper();

const setupTest = (testFn: (page: BasePageObject) => Promise<void>) => {
  return useBrowser(async browser => {
    const page = new BasePageObject(browser);
    await browser.url('#/light/popover/container-queries-test');
    await testFn(page);
  });
};

test(
  'Popover position is correct when within a CSS container query',
  setupTest(async page => {
    const popover = wrapper.findPopover('[data-testid="popover-in-container"]');

    await page.click(popover.findTrigger().getElement());

    const popoverContent = popover.findContent();

    const popoverBox = await page.getBoundingBox(popover.getElement());
    const popoverContentBox = await page.getBoundingBox(popoverContent.getElement());

    expect(popoverBox.left).toBeLessThan(popoverContentBox.left);
    expect(popoverBox.right).toBeGreaterThan(popoverContentBox.right);
    expect(popoverBox.bottom).toBeLessThan(popoverContentBox.top);
    expect(popoverBox.bottom).toBeLessThan(popoverContentBox.bottom);
  })
);
