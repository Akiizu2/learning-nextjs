import React from 'react';

import HeadNext from 'next/head'

const Head = ({ title }) => {
  return (
    <HeadNext>
      <title>{title}</title>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
    </HeadNext>
  );
}

Head.defaultProps = {
  title: 'AKI'
}

export default Head;