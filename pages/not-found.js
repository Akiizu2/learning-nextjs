import React from 'react';
import Head from 'next/head'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    textTransform: 'uppercase',
  }
}

const NotFound = () => {
  return (
    <div style={styles.container}>
      <Head><title>404 | Not Found</title></Head>
      404 | Not Found
    </div>
  );
}

export default NotFound;