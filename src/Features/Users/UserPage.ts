import UserServices from "@/Services/UserServices";
import { UserDTO } from "@/Types/User";
import ToggleLoadingModal from "@Utils/Loading";
import UserRow from "./Components/UserRow";

export function setupCounter(element: HTMLButtonElement) {
    let counter = 0;
    const setCounter = (count: number) => {
        counter = count;
        element.innerHTML = `count is ${counter}`;
    };
    element.addEventListener("click", () => setCounter(counter + 1));
    setCounter(0);
}

export class UsersPage {
    tbody: HTMLTableElement;
    users: UserDTO[] = [];

    constructor(tbody: HTMLTableElement) {
        this.tbody = tbody;
    }

    LoadUsers = async (page?: number) => {
        if (!this.tbody) {
            return console.error("Users table not found.");
        }

        ToggleLoadingModal("Loading users...", "loadingUsersModal");

        const newUsers = await UserServices.GetAll(page);

        if (!newUsers) return;

        //TODO Update DOM

        newUsers.forEach((user) => {
            this.tbody.appendChild(UserRow(user));
        });
        console.log(newUsers);
    };

    ToggleUserModal = () => {
        const editModal = document.getElementById("userModal");

        if (editModal) {
            console.log("Finish edit");
            editModal.remove();
        } else {
            //TODO add modal
            console.log("Edit user");
        }
    };

    SaveUser = async (mode: "Update" | "Create") => {
        if (mode === "Update") {
            const updatedUser = await UserServices.Update({} as any);
            if (updatedUser) {
                console.log({ updatedUser });
            } else {
                console.log("fail");
            }
        } else {
            const createdUser = await UserServices.Create({} as any);
            if (createdUser) {
                console.log({ createdUser });
            } else {
                console.log("fail");
            }
        }
    };

    DeleteUser = async (id: number) => {
        const result = await UserServices.Delete(id);
        if (!result) return;

        console.log({ result });
    };
}
