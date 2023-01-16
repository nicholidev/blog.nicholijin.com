import React from 'react';
import Layout from '@theme/Layout';
import {Content} from "@theme/BlogPostPage";
import Link from "@docusaurus/Link";
import Container from "@site/src/styles/Container";
import BlogCard from "@site/src/styles/BlogCard";
import Row from "@site/src/styles/Row";

interface Props {
    readonly recentPosts: readonly { readonly content: Content }[];
}

const Blogs = ({ recentPosts }: Props) => {
    console.log(recentPosts)

    return (
        <Layout>
            <Container>
                <h1>
                    Blog Posts
                </h1>
                <Row>
                    {
                        recentPosts.map((i, index) => {
                            console.log(i)
                            return (
                                <BlogCard
                                    key={`card-${index}`}
                                    blog={i}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        </Layout>
    );
};

export default Blogs;
