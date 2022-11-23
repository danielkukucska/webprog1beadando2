import HttpException from "@App/Exceptions/HttpException";
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "@App/Types/User";
import Service from "../Abstractions/Service";
import toast from "@App/Utils/toast";

class UserServices extends Service<UserDTO, CreateUserDTO, UserDTO> {
    constructor(baseUrl: string) {
        super(baseUrl);
    }
    async GetAll(page = 1): Promise<UserDTO[] | null> {
        try {
            const resp = await fetch(this.baseUrl + `?page=${page}`);
            if (!resp.ok) throw new HttpException(resp.status, resp.statusText);
            const { data } = await resp.json();
            return data;
        } catch (e) {
            const error = e as HttpException;
            switch (true) {
                case error.status >= 500:
                    toast.Add("Unexpected server error.");
                    break;
                default:
                    toast.Add("Unexpected error.");
                    break;
            }
            return null;
        }
    }

    async GetById(id: number): Promise<UserDTO | null> {
        try {
            const resp = await fetch(this.baseUrl + "/" + id);
            if (!resp.ok) throw new HttpException(resp.status, resp.statusText);
            const { data } = await resp.json();
            return data;
        } catch (e) {
            const error = e as HttpException;
            switch (true) {
                case error.status === 404:
                    toast.Add(`User not found with id: ${id}.`);
                    break;
                case error.status >= 500:
                    toast.Add("Unexpected server error.");
                    break;
                default:
                    toast.Add("Unexpected error.");
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
            if (!resp.ok) throw new HttpException(resp.status, resp.statusText);
            const data = await resp.json();
            return data;
        } catch (e) {
            const error = e as HttpException;
            switch (true) {
                case error.status === 422:
                    toast.Add("Validation error.");
                    break;
                case error.status >= 500:
                    toast.Add("Unexpected error.");
                    break;
                default:
                    toast.Add("Unexpected server error.");
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
            if (!resp.ok) throw new HttpException(resp.status, resp.statusText);
            const data = await resp.json();
            return data;
        } catch (e) {
            const error = e as HttpException;
            switch (true) {
                case error.status === 422:
                    toast.Add("Validation error.");
                    break;
                case error.status >= 500:
                    toast.Add("Unexpected server error.");
                    break;
                default:
                    toast.Add("Unexpected error.");
                    break;
            }
            return null;
        }
    }

    async Delete(id: number): Promise<true | null> {
        try {
            const resp = await fetch(this.baseUrl + "/" + id, {
                method: "DELETE",
            });
            if (!resp.ok) throw new HttpException(resp.status, resp.statusText);
            return true;
        } catch (e) {
            const error = e as HttpException;
            switch (true) {
                case error.status === 404:
                    toast.Add(`User not found with id: ${id}.`);
                    break;
                case error.status >= 500:
                    toast.Add("Unexpected server error.");
                    break;
                default:
                    toast.Add("Unexpected error.");
                    break;
            }
            return null;
        }
    }
}

export default UserServices;
