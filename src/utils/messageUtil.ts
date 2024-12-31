export const postMessage = (prop: object) => {
  window.ReactNativeWebView.postMessage(JSON.stringify(prop));
};
