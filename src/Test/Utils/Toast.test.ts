import {beforeEach,describe} from "vitest"
import {JSDOM} from "jsdom";

import toast from "@App/Utils/Toast";
import {getByText} from "@testing-library/dom";
import { indexHtml } from "@Test/Mocks/DOM";

let dom: JSDOM;
let container: HTMLElement;


beforeEach(()=>{
    dom = new JSDOM(indexHtml,{runScripts: "dangerously"})
    document = dom.window.document;
    container = dom.window.document.body;
})  


describe.todo("toast.ts",()=>{
    // it("should render the given error message", ()=>{
    //     //arrange
    //     const testMessage = "Test toast message!";

    //     //act
    //     Toast.Add(testMessage);

    //     //assert
    //     const result = getByText(container, testMessage);
    //     expect(result).toBeTruthy();
        
    // })

    // it.todo("should have xy class and styles",()=>{})
})