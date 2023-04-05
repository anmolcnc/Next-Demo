import { useEffect } from 'react';

import '@/styles/globals.css'
import "uikit/dist/css/uikit.min.css";
import "@/styles/custom.css";
import '@/styles/theme.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("uikit/dist/js/uikit.min");
    import("uikit/dist/js/uikit-icons.min");
  }, []);
  return <Component {...pageProps} />
}
