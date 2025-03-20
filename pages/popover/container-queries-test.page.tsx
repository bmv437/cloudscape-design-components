// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

import Popover from '~components/popover';

import ScreenshotArea from '../utils/screenshot-area';

import styles from './container-queries-test.scss';

export default function () {
  return (
    <article>
      <h1>Popover within a CSS container query</h1>
      <ScreenshotArea>
        <div className={styles.container}>
          <Popover
            data-testid="popover-in-container"
            content="Popover content"
            position="bottom"
            dismissAriaLabel="Close"
          >
            Open popover in container
          </Popover>
        </div>
      </ScreenshotArea>
    </article>
  );
}
