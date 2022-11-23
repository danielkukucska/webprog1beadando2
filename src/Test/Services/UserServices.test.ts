import UserServices from "@App/Services/UserServices";
import { CreateUserDTO, UpdateUserDTO } from "@App/Types/User";
import { mockDate, mockId, page1Data, page2Data, user1 } from "@Test/Mocks/UsersHandlers";
import { describe, it, expect } from "vitest";

const mockUserServices = new UserServices("https://reqres.in/api/users");
//TODO test error handling
const mockErrorUserServices = new UserServices("https://reqres.in/api/mockerror/users");

describe("UserServices.ts", () => {
    describe("GetAll", () => {
        it("should return page 1 if no page defined", async () => {
            //arrange

            //act
            const result = await mockUserServices.GetAll();

            //assert
            expect(result).toEqual(page1Data);
        });

        it("should return page if page defined", async () => {
            //arrange

            //act
            const result = await mockUserServices.GetAll(2);

            //assert
            expect(result).toEqual(page2Data);
        });

        it("should return empty array if page defined but no data", async () => {
            //arrange

            //act
            const result = await mockUserServices.GetAll(3);

            //assert
            expect(result).toEqual([]);
        });
    });

    describe("GetById", () => {
        it("should return user 1", async () => {
            //arrange

            //act
            const result = await mockUserServices.GetById(1);

            //assert
            expect(result).toEqual(user1);
        });

        it("should return null if user not found", async () => {
            //arrange

            //act
            const result = await mockUserServices.GetById(23);

            //assert
            expect(result).toBeNull();
        });
    });

    describe("Create", () => {
        it("should return passed object, id and createdAt", async () => {
            //arrange
            const newUser: CreateUserDTO = {
                email: "test@test.com",
                first_name: "Test FN",
                last_name: "Test LN",
            };
            //act
            const result = await mockUserServices.Create(newUser);
            //assert
            expect(result).toEqual({...newUser, id: mockId.toString(), createdAt: mockDate});
        });
    });

    describe("Update", () => {
        it("should return passed object, id and updatedAt", async () => {
            //arrange
            const newUser: UpdateUserDTO = {
                email: "test@test.com",
                first_name: "Test FN",
                last_name: "Test LN",
                id: mockId
            };
            //act
            const result = await mockUserServices.Update(newUser);
            //assert
            expect(result).toEqual({...newUser, id: mockId, updatedAt: mockDate});
        });
    });

    describe("Delete", () => {
        it("should return true if successful", async () => {
            //arrange

            //act
            const result = await mockUserServices.Delete(mockId);

            //assert
            expect(result).toBe(true);
        });
    });
});
