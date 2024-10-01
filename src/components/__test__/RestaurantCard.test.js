import { screen, render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../utils/resCardMock.json";
import "@testing-library/jest-dom";
import withPromotedLabel from "../withPromotedLabel";

test("Should render the Restaurant Card component with props data", () => {
  render(<RestaurantCard restaurant={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

test("Should render RestaurantCard component with Promoted label", () => {
  render(<PromotedRestaurantCard restaurant={MOCK_DATA} />);

  const promotedLabel = screen.getByText("Open Now");

  expect(promotedLabel).toBeInTheDocument();
});
