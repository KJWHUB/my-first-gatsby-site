import * as React from "react";
import { graphql, type HeadProps, type PageProps } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }: PageProps<Queries.BlogPostQuery>) => {
  const pageTitle = data.mdx?.frontmatter?.title || "";
  const date = data.mdx?.frontmatter?.date || "";

  return (
    <Layout pageTitle={pageTitle}>
      <p>{date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.BlogPostQuery>) => <Seo title={data.mdx?.frontmatter?.title || ""} />;

export default BlogPost;
