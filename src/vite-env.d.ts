/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface Window {
  ReactNativeWebView: {
    postMessage: (value: string) => void;
  };
}
