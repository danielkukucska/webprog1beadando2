import { beforeEach, describe, it, expect, vi } from "vitest"
import { JSDOM } from "jsdom";

import Toast from "@App/Utils/Toast";
import { fireEvent, getByText, queryByText } from "@testing-library/dom";
import { indexHtml } from "@Test/Mocks/DOM";

let dom: JSDOM;
let container: HTMLElement;
let toast: Toast;

beforeEach(() => {
    dom = new JSDOM(indexHtml, { runScripts: "dangerously" })
    document = dom.window.document;
    container = dom.window.document.body;
    toast = new Toast(container)
    toast.Render();
})

describe("Toast.ts", () => {
    it("should add message", () => {
        //arrange
        const message = "Test toast message";

        //act
        toast.Add(message);

        //assert
        const result = getByText(container, message);
        expect(result).toBeTruthy();
    })

    it("should add multiple messages", () => {
        //arrange
        const message1 = "Test toast message 1";
        const message2 = "Test toast message 2";

        //act
        toast.Add(message1);
        toast.Add(message2);

        //assert
        const result1 = getByText(container, message1);
        const result2 = getByText(container, message2);
        expect(result1).toBeTruthy();
        expect(result2).toBeTruthy();
    })

    it("should remove message when clicked on close", () => {
        //arrange
        const message = "Test toast message";

        //act
        const id = toast.Add(message);
        const el = document.getElementById(id);
        if (!el)
            throw new Error();
        const closeBtn = el.querySelector("button");
        if (!closeBtn)
            throw new Error();
        fireEvent.click(closeBtn)

        //assert
        const result = queryByText(container, message);
        expect(result).toBeNull();
    })

    it("should remove selected message only when clicked on close", () => {
        //arrange
        const message1 = "Test toast message 1";
        const message2 = "Test toast message 2";

        //act
        toast.Add(message1);
        const id = toast.Add(message2);

        const el = document.getElementById(id);
        if (!el)
            throw new Error();
        const closeBtn = el.querySelector("button");
        if (!closeBtn)
            throw new Error();
        fireEvent.click(closeBtn)

        //assert
        const result1 = queryByText(container, message1);
        const result2 = queryByText(container, message2);
        expect(result1).toBeTruthy();
        expect(result2).toBeNull();
    })

    it("should remove message after 5 seconds", () => {
        //arrange
        const message = "Test toast message";
        vi.useFakeTimers();

        //act
        toast.Add(message);
        vi.runOnlyPendingTimers();

        //assert
        const result = queryByText(container, message);
        expect(result).toBeNull();
    })
})