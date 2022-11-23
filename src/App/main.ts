import { UsersPage } from "@App/Features/Users/UserPage";
import UserServices from "./Services/UserServices";
import Toast from "./Utils/Toast";

export const toast = new Toast();

toast.Render();

const container = document.querySelector<HTMLTableElement>("#usersTableBody");
if (container) {
    const usersPage = new UsersPage(container, new UserServices("https://reqres.in/api/users"));
    usersPage.LoadUsers();
}

