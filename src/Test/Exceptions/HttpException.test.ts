import HttpException from "../../app/exceptions/HttpException";
import { describe, it, expect } from "vitest";

describe("HttpException.ts", () => {
    it("should have status property initialized from constuctor", () => {
        const httpException = new HttpException(500, "test");

        expect(httpException).toHaveProperty("status", 500);
    });

    it("should have message property initialized from constuctor", () => {
        const httpException = new HttpException(500, "test");

        expect(httpException).toHaveProperty("message", "test");
    });
});
