import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(12, 12);
  expect(result).toBe(24);
});
