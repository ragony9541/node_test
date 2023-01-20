import * as React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <WebView
      source={{ uri: 'https://ragony9541.netlify.app/' }}
    />
  );
}