import UserServices from "@App/Services/UserServices";
import { UserDTO } from "@App/Types/User";
import LoadingModal from "@App/Utils/Loading";
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
    userServices: UserServices;
    users: UserDTO[] = [];
    loadingModal = new LoadingModal("Loading users...");

    constructor(tbody: HTMLTableElement, userServices: UserServices) {
        this.tbody = tbody;
        this.userServices = userServices;
    }

    LoadUsers = async (page?: number) => {
        if (!this.tbody) {
            return console.error("Users table not found.");
        }

  
        this.loadingModal.Render();

        const newUsers = await this.userServices.GetAll(page);

        this.loadingModal.Dispose();

        if (!newUsers) return;

        //TODO Update DOM
        newUsers.forEach((user) => {
            const userRow = new UserRow(user,this.tbody);
            userRow.Render();
            // this.tbody.appendChild(UserRow(user));
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
            const updatedUser = await this.userServices.Update({} as any);
            if (updatedUser) {
                console.log({ updatedUser });
            } else {
                console.log("fail");
            }
        } else {
            const createdUser = await this.userServices.Create({} as any);
            if (createdUser) {
                console.log({ createdUser });
            } else {
                console.log("fail");
            }
        }
    };

    DeleteUser = async (id: number) => {
        const result = await this.userServices.Delete(id);
        if (!result) return;

        console.log({ result });
    };
}
