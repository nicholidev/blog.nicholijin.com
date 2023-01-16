import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Container from "@site/src/styles/Container";


export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    console.log(siteConfig)

    return (
        <Layout>
            <Head>
                <title>{siteConfig.title}</title>
                <meta property="description" content="Nicholi Jin's Blogs" />
                <meta property="og:image" content="image.png" />
            </Head>
            <main>
                <Container>
                    Recent Posts
                </Container>
            </main>
        </Layout>
    );
}
