import UserServices from "@Services/UserServices";
import { UserDTO } from "@Types/User";

export interface IUserRowProps {
    user: UserDTO;
}

const UserRow = (user: UserDTO): HTMLTableRowElement => {
    const tr = document.createElement("tr");
    tr.id = user.id.toString();

    const tdAvatar = document.createElement("td");
    tr.appendChild(tdAvatar);
    const avatarImg = document.createElement("img");
    avatarImg.src = user.avatar;
    avatarImg.alt = `Profile picture for ${user.first_name} ${user.last_name}`;
    tdAvatar.appendChild(avatarImg);

    const tdFullName = document.createElement("td");
    tr.appendChild(tdFullName);
    tdFullName.innerText = `${user.first_name} ${user.last_name}`;

    const emailTd = document.createElement("td");
    tr.appendChild(emailTd);
    emailTd.innerText = user.email;

    const actionsTd = document.createElement("td");
    tr.appendChild(actionsTd);

    const editBtn = document.createElement("button");
    editBtn.innerText = "Update";
    editBtn.className = "btn btn-primary";
    editBtn.onclick = () => console.log("TODO: create modal, pass object");
    actionsTd.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-danger";
    deleteBtn.onclick = () => console.log("TODO: create confirm modal, pass object");
    actionsTd.appendChild(deleteBtn);

    return tr;
};

export default UserRow;
