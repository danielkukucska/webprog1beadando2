
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "Types/Usert";
import Service from "./Service";

class UserServices extends Service<UserDTO, CreateUserDTO, UserDTO>{
    constructor(baseUrl: string) {
        super(baseUrl)
    }
    GetAll(page?: string | undefined): Promise<UserDTO[]> {
        throw new Error("Method not implemented.");
    }
    GetById(id: number): Promise<UserDTO> {
        throw new Error("Method not implemented.");
    }
    Create(item: CreateUserDTO): Promise<UserDTO> {
        throw new Error("Method not implemented.");
    }
    Update(item: UpdateUserDTO): Promise<UserDTO> {
        throw new Error("Method not implemented.");
    }
    Delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export default new UserServices("https://reqres.in/api/users")