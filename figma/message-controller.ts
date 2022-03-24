// All Figma Plugin Messages
export const createShapes = (count: Number, shape: String, direction: String) => {
  parent.postMessage(
    {
      pluginMessage: {
        type: 'create-shapes',
        count,
        shape,
        direction
      }
    },
    '*'
  );
};

export const notify = (message: String, timeout: Number, error: Boolean) => {
  parent.postMessage(
    {
      pluginMessage: {
        type: 'notify',
        message,
        timeout,
        error
      }
    },
    '*'
  );
};

const eventListeners: { type: String; callback: Function }[] = [];

export const getPluginMessage = (type: String, callback: Function) => {
  eventListeners.push({ type, callback });
};

window.onmessage = async (event) => {
  const { pluginMessage } = event.data;
  if (pluginMessage) {
    for (let eventListener of eventListeners) {
      if (pluginMessage.type === eventListener.type) {
        eventListener.callback(pluginMessage);
      } else {
        eventListener.callback('type error');
      }
    }
  }
};
