import { Col } from "react-bootstrap";
import "./Blog-card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";

const BlogCard = ({ title, productItem }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const handelClick = () => {
    router(`/blog/${productItem.id}`);
  };
  const handelAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Product has been added to cart!");
  };
  return (
    <Col md={10} sm={5} xs={10} className="product mtop">
      {title === "Big Discount" ? (
        <span className="discount">{productItem.discount}% Off</span>
      ) : null}
      <img
        loading="lazy"
        onClick={() => handelClick()}
        src={productItem.imgUrl}
        alt=""
      />
      
      <div className="product-details">
        <h3 onClick={() => handelClick()}>{productItem.productName}</h3>
        
      </div>
    </Col>
  );
};

export default BlogCard;
