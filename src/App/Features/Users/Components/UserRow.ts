import UserServices from '@App/Services/UserServices';
import Component from "@App/Abstractions/Component";
import { UserDTO } from "@App/Types/User";

export interface IUserRowProps {
    user: UserDTO;
}

class UserRow extends Component {
    private user: UserDTO;
    private userServices: UserServices;

    constructor(user: UserDTO, userServices: UserServices, container?: HTMLElement) {
        super("tr", container);
        this.user = user;
        this.userServices = userServices
    }

    BuildComponent() {
        this.element.id = this.user.id.toString();

        this.element.innerHTML = `
        <td>
            <img src="${this.user.avatar}" alt="Profile picture for ${this.user.first_name} ${this.user.last_name}"/>
        </td>
        <td>
            ${this.user.first_name} ${this.user.last_name}
        </td>
        <td>
            ${this.user.email}
        </td>
        <td>
            <button class="btn btn-primary" id="update_${this.user.id}">Update</button>
            <button class="btn btn-danger" id="delete_${this.user.id}">Delete</button>
        </td>
        `;

        const updateBtn = this.element.querySelector(`#update_${this.user.id}`) 
        updateBtn && updateBtn.addEventListener("click", () => console.log("TODO: update and create modal"))
        const deleteBtn = this.element.querySelector(`#delete_${this.user.id}`) 
        deleteBtn && deleteBtn.addEventListener("click", () => this.userServices.Delete(this.user.id))
    }

}

export default UserRow;
