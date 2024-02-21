import * as React from "react";
import { graphql, Link, type HeadProps, type PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }: PageProps<Queries.BlogPostQuery>) => {
  const pageTitle = data.mdx?.frontmatter?.title || "";
  const date = data.mdx?.frontmatter?.date || "";

  const image = getImage(data.mdx?.frontmatter?.hero_image?.childImageSharp?.gatsbyImageData ?? null);

  return (
    <Layout pageTitle={pageTitle}>
      <p>{date}</p>
      {image && <GatsbyImage image={image} alt={data.mdx?.frontmatter?.hero_image_alt || "default alt"} />}
      <p>
        Photo Credit: <Link to={data?.mdx?.frontmatter?.hero_image_credit_link || ""}>{data?.mdx?.frontmatter?.hero_image_credit_text || ""}</Link>
      </p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.BlogPostQuery>) => <Seo title={data.mdx?.frontmatter?.title || ""} />;

export default BlogPost;
