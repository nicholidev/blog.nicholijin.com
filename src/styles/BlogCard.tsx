import React, {FC} from 'react';
import styled from "styled-components";
import Link from "@docusaurus/Link";


interface Props {
    blog: any;
}

const BlogCard: FC<Props> = (props) => {
    const { blog } = props

    return (
        <BlogCardWrap
            to={blog?.content?.metadata?.permalink}
        >
            <div className="card-media-wrap">
                <img
                    className="card-media"
                    src="https://www.forex.com/en-us/-/media/research/global/news-analysis/featured-image/2021/03/forex2v2.jpg"
                    alt=""
                />
            </div>

            <div
                className="content"
            >
                <h2>{blog?.content?.metadata?.title}</h2>
                <p>{blog?.content?.metadata?.description}</p>
            </div>
            <div className="author">
                <img
                    src={blog.content.metadata?.authors[0].imageURL}
                    width="100"
                    height="100"
                    alt=""
                />
                <div>
                    <h5>{blog.content.metadata?.authors[0].name}</h5>
                </div>
            </div>
        </BlogCardWrap>
    );
};


const BlogCardWrap = styled(Link)`
  display: block;
  border: 1px solid;
  cursor: pointer;
  overflow: hidden;
  border-radius: 20px;
  position: relative;

  :hover {
    text-decoration: none;
  }

  .card-media-wrap {
    .card-media {
      z-index: -1;
      height: 150px;
      object-fit: cover;
      margin-bottom: -8px;
    }
  }


  .content {
    padding: 20px;
    h2 {
      font-size: 20px;
      margin-bottom: 4px;
    }

    p {
      font-size: 12px;
      margin-bottom: 0;
    }
  }

  .author {
    display: flex;
    align-items: center;
    grid-gap: 24px;
    position: absolute;
    top: 12px;
    left: 20px;
    z-index: 1;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50px;
      object-fit: cover;
      background-color: #fff;
    }

    h5 {
      margin-bottom: 0;
      color: #ffffff;
    }
  }
`

export default BlogCard;
