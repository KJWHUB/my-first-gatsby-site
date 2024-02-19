import * as React from "react";
import useSiteMetadata from "../hooks/useStaticQuery";

interface Props {
  title: string;
}

const Seo: React.FC<Props> = ({ title }) => {
  const { title: hookTitle } = useSiteMetadata();

  return (
    <title>
      {title} | {hookTitle}
    </title>
  );
};

export default Seo;
