import {Sum} from "../Sum";

test("sholud add two numbers", () => {
    const result = Sum(9,9);
    expect(result).toBe(18);
})