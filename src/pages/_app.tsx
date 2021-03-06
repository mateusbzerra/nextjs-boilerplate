import App from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>React Avançado - Boilerplate</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}
