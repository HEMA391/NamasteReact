import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, setIsOpen }) => {
  const toggleAccordion = () => {
    setIsOpen();
  };

  return (
    <div style={{ maxWidth: "50%", margin: "0 auto" }}>
      {" "}
      {/* Set a max width and center */}
      {/* Accordion header */}
      <div
        className={`accordion-header ${
          isOpen ? "accordion-open" : "accordion-closed"
        }`}
        onClick={toggleAccordion}
      >
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>
          {data.title} ({data.itemCards.length})
        </span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {/* Accordion body */}
      {isOpen && (
        <div
          className="accordion-body"
          onClick={(e) => e.stopPropagation()} // Prevent clicks in the body from toggling the accordion
          style={{
            padding: "10px", // Add padding for better spacing
            backgroundColor: "#fff", // Background color matching the header
          }}
        >
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
