import HttpException from "@/Exceptions/HttpException";
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "@/Types/User";
import toast from "@/Utils/Toast";
import Service from "./Service";

class UserServices extends Service<UserDTO, CreateUserDTO, UserDTO> {
    constructor(baseUrl: string) {
        super(baseUrl);
    }
    async GetAll(page = 1): Promise<UserDTO[] | null> {
        try {
            const resp = await fetch(this.baseUrl + `?page=${page}`);
            const { data } = await resp.json();
            return data;
        } catch (e) {
            const error = e as HttpException;
            switch (true) {
                case error.status >= 500:
                    toast("Unexpected server error.");
                    break;
                default:
                    toast("Unexpected error.");
                    break;
            }
            return null;
        }
    }
    async GetById(id: number): Promise<UserDTO | null> {
        try {
            const resp = await fetch(this.baseUrl + "/" + id);
            const { data } = await resp.json();
            return data;
        } catch (e) {
            const error = e as HttpException;
            switch (true) {
                case error.status === 404:
                    toast(`User not found with id: ${id}.`);
                case error.status >= 500:
                    toast("Unexpected server error.");
                    break;
                default:
                    toast("Unexpected error.");
                    break;
            }
            return null;
        }
    }
    async Create(item: CreateUserDTO): Promise<UserDTO | null> {
        try {
            const resp = await fetch(this.baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            });
            const data = await resp.json();
            return data;
        } catch (e) {
            const error = e as HttpException;
            switch (true) {
                case error.status === 422:
                    toast("Validation error.");
                    break;
                case error.status >= 500:
                    toast("Unexpected error.");
                    break;
                default:
                    toast("Unexpected server error.");
                    break;
            }
            return null;
        }
    }
    async Update(item: UpdateUserDTO): Promise<UserDTO | null> {
        try {
            const resp = await fetch(this.baseUrl + "/" + item.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            });
            const data = await resp.json();
            return data;
        } catch (e) {
            const error = e as HttpException;
            switch (true) {
                case error.status === 422:
                    toast("Validation error.");
                case error.status >= 500:
                    toast("Unexpected server error.");
                    break;
                default:
                    toast("Unexpected error.");
                    break;
            }
            return null;
        }
    }
    async Delete(id: number): Promise<true | null> {
        try {
            await fetch(this.baseUrl + "/" + id, {
                method: "DELETE",
            });

            return true;
        } catch (e) {
            const error = e as HttpException;
            switch (true) {
                case error.status === 404:
                    toast(`User not found with id: ${id}.`);
                case error.status >= 500:
                    toast("Unexpected server error.");
                    break;
                default:
                    toast("Unexpected error.");
                    break;
            }
            return null;
        }
    }
}

export default new UserServices("https://reqres.in/api/users");
