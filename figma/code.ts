// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 240, height: 338 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
// figma.ui.onmessage = (msg) => {
//   figma.ui.postMessage(msg);
//   // One way of distinguishing between different types of messages sent from
//   // your HTML page is to use an object with a "type" property like this.
//   if (msg.type === 'create-shapes') {
//     const nodes: Array<SceneNode> = [];

//     for (let i = 0; i < msg.count; i++) {
//       let shape;

//       if (msg.shape === 'square') {
//         shape = figma.createRectangle();
//       } else if (msg.shape === 'triangle') {
//         shape = figma.createPolygon();
//       } else {
//         shape = figma.createEllipse();
//       }

//       if (msg.direction === 'horizontal') {
//         shape.x = i * 150;
//       } else {
//         shape.y = i * 150;
//       }

//       shape.fills = [{ type: 'SOLID', color: { r: 1, g: 107 / 255, b: 0 } }];
//       figma.currentPage.appendChild(shape);
//       nodes.push(shape);
//     }

//     figma.currentPage.selection = nodes;
//     figma.viewport.scrollAndZoomIntoView(nodes);
//   }

//   if (msg.type === 'notify') {
//     figma.notify(msg.message, { timeout: msg.timeout, error: msg.error });
//   }

//   // Make sure to close the plugin when you're done. Otherwise the plugin will
//   // keep running, which shows the cancel button at the bottom of the screen.
//   figma.closePlugin();
// };

interface selectionStyle {
  x: number;
  y: number;
  width: number;
  height: number;
}

figma.on('selectionchange', () => {
  selectedNode();
});

function selectedNode() {
  const selection: SceneNode = figma.currentPage.selection[0];

  if (!selection) {
    return;
  }

  const componentStyle = {
    x: selection.x,
    y: selection.y,
    width: selection.width,
    height: selection.height
  };

  sendSelectionStyle(componentStyle);
}

function sendSelectionStyle(selection: selectionStyle) {
  figma.ui.postMessage({
    type: 'selectionChange',
    ...selection
  });
}
