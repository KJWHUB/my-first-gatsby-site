import * as React from "react";
import { graphql, type PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }: PageProps<Queries.BlogTitleQuery>) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query BlogTitle {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
