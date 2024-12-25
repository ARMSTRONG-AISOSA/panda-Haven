import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => {
    return (
        <FaArrowCircleRight
            className="cardNavArrow"
            style={{ color: "#ff5722", fontSize: "30px", position: "absolute", right: "-25px", zIndex: 1 }}
            onClick={onClick} // Make sure onClick is passed here
        />
    );
};

// Custom Previous Arrow
// const CustomPrevArrow = ({ onClick }) => {
//     return (
//         <FaArrowCircleLeft
//             className="cardNavArrow"
//             style={{ color: "#ff5722", fontSize: "30px", position: "absolute", left: "-25px", zIndex: 1 }}
//             onClick={onClick} // Make sure onClick is passed here
//         />
//     );
// };