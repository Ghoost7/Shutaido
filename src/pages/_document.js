import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link 
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;
        600&display=swap" 
        rel="stylesheet"/>
        
        </Head>
        <body>
          <Main />
          <script src="https://www.paypal.com/sdk/js?client-id=AdeQ3wtniszS8RxGsYQSKYRW3G2r-oE1Y1qMSdujZGUQnNL0k3UktuXdZalarApywohizd0tT9kdRuQb&currency=EUR"></script>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument