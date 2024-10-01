import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/store/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            style={{
              padding: "8px",
              margin: "8px",
              borderBottom: "1px solid lightgrey",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "75%" }}>
              <div style={{ padding: "5px 0px" }}>
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p style={{ fontSize: "12px" }}>{item.card.info.description}</p>
            </div>
            <div
              style={{ width: "25%", padding: "16px", position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "2%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <button
                  style={{
                    padding: "10px",
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid lightgrey",
                    borderRadius: "5px",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the click event from bubbling up
                    // Handle the button click event here
                    handleAddItem(item);
                  }}
                >
                  Add
                </button>
              </div>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                style={{
                  width: "100%",
                  height: "100",
                  loading: "lazy",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
