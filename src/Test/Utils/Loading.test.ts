import { JSDOM } from 'jsdom';
import { getByText, queryByText } from '@testing-library/dom';
import LoadingModal from '@App/Utils/Loading';
import { describe, it, expect, beforeEach } from 'vitest';
import { indexHtml } from '@Test/Mocks/DOM';

let dom: JSDOM;
let container: HTMLElement;


beforeEach(()=>{
    dom = new JSDOM(indexHtml,{runScripts: "dangerously"})
    document = dom.window.document;
    container = dom.window.document.body;
})  

describe("Loading.ts", () => {
    it("should render with the given message", () => {
        //arrange
        const message = "Test loading message"
        const loadingModal = new LoadingModal(message)

        //act
        loadingModal.Render();

        //assert
        const result = getByText(container,message);
        expect(result).toBeTruthy();

    })

    it("should remove loading modal", () => {
        //arrange
        const message = "Test loading message"
        const loadingModal = new LoadingModal(message)

        //act
        loadingModal.Render();
        loadingModal.Dispose();

        //assert
        const result = queryByText(container,message);
        expect(result).toBeNull();

    })

    it("should update message", () => {
        //arrange
        const message = "Test loading message"
        const message2 = "Test loading message 2"
        const loadingModal = new LoadingModal(message)

        //act
        loadingModal.Render();
        loadingModal.setMessage(message2)

        //assert
        const result = getByText(container,message2);
        expect(result).toBeTruthy();

    })

})