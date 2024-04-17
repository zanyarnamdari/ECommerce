import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import { products } from "../utils/products";
import BlogList from "../components/BlogList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Blog = () => {
  const [filterList, setFilterList] = useState(
    products.filter((item) => item.category === "sofa")
  );
  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title="Blog" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          {/* <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row> */}
        </Container>
        <Container>
          <BlogList productItems={filterList} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Blog;
