import { FaArrowCircleRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} `}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <FaArrowCircleRight className="text-5xl" />
    </div>
  );
};

export default NextArrow;
