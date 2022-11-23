import Component from "@App/Abstractions/Component";
import { UserDTO } from "@App/Types/User";

export interface IUserRowProps {
    user: UserDTO;
}

class UserRow extends Component {
    private user: UserDTO;

    constructor(user: UserDTO, container?: HTMLElement) {
        super(container);
        this.user = user;
    }

    BuildComponent() {
        const tr = document.createElement("tr");
        tr.id = this.user.id.toString();

        tr.innerHTML = `
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
            <button class="btn btn-primary" onclick="">Update</button>
            <button class="btn btn-danger" onclick="">Delete</button>
        </td>
        `;

        // this.element = tr;

        return tr;
    }

}

export default UserRow;
