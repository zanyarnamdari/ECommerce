import { Row } from "react-bootstrap";
import { memo, useEffect } from "react";
import BlogCard from "./BlogCard/BlogCard";

const BlogList = ({ productItems }) => {
  useEffect(() => {}, [productItems]);
  if (productItems.length === 0) {
    return <h1 className="not-found">Blog Not Found !!</h1>;
  }
  return (
    <Row className="justify-content-center">
      {productItems.map((productItem) => {
        return (
          <BlogCard
            key={productItem.id}
            title={null}
            productItem={productItem}
          />
        );
      })}
    </Row>
  );
};
export default memo(BlogList);
