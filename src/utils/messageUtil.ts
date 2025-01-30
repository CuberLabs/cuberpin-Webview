export const postMessage = (prop: object) => {
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify(prop));
  }
};

export const log = (message: any) => {
  console.log(message);
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type: "log", message }));
  }
};
