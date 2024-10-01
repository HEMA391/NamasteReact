import { fireEvent, screen, render } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../../utils/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import Cart from "../Cart";
import appStore from "../../utils/store/appStore";
import "@testing-library/jest-dom";
jest.mock("../../images/foodLogo.png", () => "mocked-image-path");
jest.mock("../../images/cart.jpg", () => "mocked-cart-image-path");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

const renderApp = async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
};

describe("Restaurant Menu Component", () => {
  beforeAll(() => {
    console.log("Starting test suite...");
  });

  beforeEach(async () => {
    await renderApp();
  });

  afterEach(() => {
    console.log("Cleaning up after each test...");
    global.fetch.mockClear();
  });

  afterAll(() => {
    console.log("Test suite completed...");
  });

  it("Should load restaurant menu and display items", () => {
    const accordionHeader = screen.getByText("Drinks (9)");

    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(9);
  });

  it("Should allow adding items to the cart", () => {
    const accordionHeader = screen.getByText("Drinks (9)");

    fireEvent.click(accordionHeader);

    expect(screen.getByTestId("cartSize")).toHaveTextContent("0");

    const addBtns = screen.getAllByRole("button", { name: "Add" });

    fireEvent.click(addBtns[0]);

    expect(screen.getByTestId("cartSize")).toHaveTextContent("1");

    fireEvent.click(addBtns[1]);

    expect(screen.getByTestId("cartSize")).toHaveTextContent("2");

    expect(screen.getAllByTestId("foodItems").length).toBe(11);
  });

  it("Should clear the cart", () => {
    const accordionHeader = screen.getByText("Drinks (9)");

    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole("button", { name: "Add" });

    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(9);

    expect(
      screen.getByText("Your Cart is empty. Add items to the cart!")
    ).toBeInTheDocument();
  });
});
