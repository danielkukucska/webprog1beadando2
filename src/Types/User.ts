export type UserDTO ={
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export type CreateUserDTO = Omit<UserDTO, "id" | "avatar">;

export type UpdateUserDTO = Omit<UserDTO, "avatar">;