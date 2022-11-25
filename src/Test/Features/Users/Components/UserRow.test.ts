import { fireEvent } from '@testing-library/dom';

import { UserDTO } from '@App/Types/User';

import { JSDOM } from 'jsdom';
import { getByAltText, getByText, queryByText } from '@testing-library/dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { indexHtml } from '@Test/Mocks/DOM';
import UserRow from '@App/Features/Users/Components/UserRow';
import UserServices from '@App/Services/UserServices';

let dom: JSDOM;
let container: HTMLElement;


beforeEach(() => {
    dom = new JSDOM(indexHtml, { runScripts: "dangerously" })
    document = dom.window.document;
    container = dom.window.document.body;
})

const userServices = new UserServices("https://reqres.in/api/users");

describe("UserRow.ts", () => {
    it("should render user properties", () => {
        //arrange
        const user: UserDTO = {
            id: 0,
            email: 'test@test.com',
            first_name: 'Test',
            last_name: 'User',
            avatar: 'https://test.test'
        }
        const userRow = new UserRow(user, userServices, container);

        //act
        userRow.Render();

        //assert
        const profilePicElement = getByAltText(container, `Profile picture for ${user.first_name} ${user.last_name}`)
        const nameElement = getByText(container, `${user.first_name} ${user.last_name}`)
        const emailElement = getByText(container, user.email)

        expect(profilePicElement).toBeTruthy();
        expect(nameElement).toBeTruthy();
        expect(emailElement).toBeTruthy()
    })

    it("should render action buttons", () => {
        //arrange
        const user: UserDTO = {
            id: 0,
            email: 'test@test.com',
            first_name: 'Test',
            last_name: 'User',
            avatar: 'https://test.test'
        }
        const userRow = new UserRow(user, userServices, container);

        //act
        userRow.Render();

        //assert
        const updateBtn = queryByText(container, "Update")
        const deleteBtn = queryByText(container, "Delete")

        expect(updateBtn).toBeTruthy();
        expect(deleteBtn).toBeTruthy();

    })

    it("should open update modal on update button click", () => {
        //arrange
        const user: UserDTO = {
            id: 0,
            email: 'test@test.com',
            first_name: 'Test',
            last_name: 'User',
            avatar: 'https://test.test'
        }
        const userRow = new UserRow(user, userServices, container);

        //act
        userRow.Render();
        const updateBtn = getByText(container, "Update")
        fireEvent.click(updateBtn);

        //assert
        const updateModal = container.querySelector(`#update_modal_${user.id}`)
        expect(updateModal).toBeTruthy();
    })

    it("should open delete modal on delete button click", () => {
        //arrange
        const user: UserDTO = {
            id: 0,
            email: 'test@test.com',
            first_name: 'Test',
            last_name: 'User',
            avatar: 'https://test.test'
        }
        const userRow = new UserRow(user, userServices, container);

        //act
        userRow.Render();
        const deleteBtn = getByText(container, "Delete")
        fireEvent.click(deleteBtn);

        //assert
        const deleteModal = container.querySelector(`#delete_modal_${user.id}`)
        expect(deleteModal).toBeTruthy();
    })

})
