import { storiesOf, html } from '@open-wc/demoing-storybook';

import { css, renderAsNode } from '@lion/core';
import { OverlayController, withBottomSheetConfig } from '../index.js';

const bottomSheetDemoStyle = css`
  .demo-overlay {
    background-color: white;
    border: 1px solid lightgrey;
    text-align: center;
  }
`;

storiesOf('Global Overlay System|BottomSheet', module).add('Default', () => {
  const bottomSheetCtrl = new OverlayController({
    ...withBottomSheetConfig(),
    contentNode: renderAsNode(html`
      <div class="demo-overlay">
        <p>BottomSheet</p>
        <button @click="${() => bottomSheetCtrl.hide()}">Close</button>
      </div>`),
  });

  return html`
    <style>
      ${bottomSheetDemoStyle}
    </style>
    <a href="#">Anchor 1</a>
    <button
      @click="${event => bottomSheetCtrl.show(event.target)}"
      aria-haspopup="dialog"
      aria-expanded="false"
    >
      Open dialog
    </button>
    <a href="#">Anchor 2</a>
    ${Array(50).fill(
      html`
        <p>Lorem ipsum</p>
      `,
    )}
  `;
});
