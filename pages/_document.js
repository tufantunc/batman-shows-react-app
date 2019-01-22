import Document, { Head, Main, NextScript } from 'next/document';

class PageDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <link rel="icon" href="/static/favicon.ico" type="image/x-icon"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}

export default PageDocument;