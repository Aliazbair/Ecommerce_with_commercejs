import React, { useEffect } from 'react';


export default function MyApp({ pageProps, Component }) {

  return (
 
      <Component {...pageProps} />
 
  );
}

