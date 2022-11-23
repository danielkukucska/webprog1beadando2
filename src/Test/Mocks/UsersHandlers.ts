import { UserDTO } from "@App/Types/User";
import { rest, RestHandler } from "msw";

export const page1Data = [
    { id: 1, email: "george.bluth@reqres.in", first_name: "George", last_name: "Bluth", avatar: "https://reqres.in/img/faces/1-image.jpg" },
    { id: 2, email: "janet.weaver@reqres.in", first_name: "Janet", last_name: "Weaver", avatar: "https://reqres.in/img/faces/2-image.jpg" },
    { id: 3, email: "emma.wong@reqres.in", first_name: "Emma", last_name: "Wong", avatar: "https://reqres.in/img/faces/3-image.jpg" },
    { id: 4, email: "eve.holt@reqres.in", first_name: "Eve", last_name: "Holt", avatar: "https://reqres.in/img/faces/4-image.jpg" },
    { id: 5, email: "charles.morris@reqres.in", first_name: "Charles", last_name: "Morris", avatar: "https://reqres.in/img/faces/5-image.jpg" },
    { id: 6, email: "tracey.ramos@reqres.in", first_name: "Tracey", last_name: "Ramos", avatar: "https://reqres.in/img/faces/6-image.jpg" },
];

export const page2Data = [
    { id: 7, email: "michael.lawson@reqres.in", first_name: "Michael", last_name: "Lawson", avatar: "https://reqres.in/img/faces/7-image.jpg" },
    { id: 8, email: "lindsay.ferguson@reqres.in", first_name: "Lindsay", last_name: "Ferguson", avatar: "https://reqres.in/img/faces/8-image.jpg" },
    { id: 9, email: "tobias.funke@reqres.in", first_name: "Tobias", last_name: "Funke", avatar: "https://reqres.in/img/faces/9-image.jpg" },
    { id: 10, email: "byron.fields@reqres.in", first_name: "Byron", last_name: "Fields", avatar: "https://reqres.in/img/faces/10-image.jpg" },
    { id: 11, email: "george.edwards@reqres.in", first_name: "George", last_name: "Edwards", avatar: "https://reqres.in/img/faces/11-image.jpg" },
    { id: 12, email: "rachel.howell@reqres.in", first_name: "Rachel", last_name: "Howell", avatar: "https://reqres.in/img/faces/12-image.jpg" },
];

export const mockId = 267;
export const mockDate = "2022-11-19T18:51:30.451Z";

export const user1 = { id: 1, email: "george.bluth@reqres.in", first_name: "George", last_name: "Bluth", avatar: "https://reqres.in/img/faces/1-image.jpg" };

export const usersHandlers: RestHandler[] = [
    rest.get("https://reqres.in/api/users", (req, res, ctx) => {
        const page = Number(req.url.searchParams.get("page"));
        let data: UserDTO[] = [];
        switch (page) {
            case 1:
                data = page1Data;
                break;
            case 2:
                data = page2Data;
            default:
                break;
        }
        return res(
            ctx.status(200),
            ctx.json({
                page: 1,
                per_page: 6,
                total: 12,
                total_pages: 2,
                data,
                support: { url: "https://reqres.in/#support-heading", text: "To keep ReqRes free, contributions towards server costs are appreciated!" },
            })
        );
    }),
    rest.get("https://reqres.in/api/users/1", (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                data: user1,
                support: { url: "https://reqres.in/#support-heading", text: "To keep ReqRes free, contributions towards server costs are appreciated!" },
            })
        );
    }),
    rest.get("https://reqres.in/api/users/23", (_req, res, ctx) => {
        return res(ctx.status(404), ctx.json({}));
    }),
    rest.post("https://reqres.in/api/users",async (req, res, ctx) => {
        const body = await req.json()
        return res(ctx.status(201), ctx.json({ ...body, id: mockId.toString(), createdAt: mockDate }));
    }),
    rest.put(`https://reqres.in/api/users/${mockId}`, async (req, res, ctx) => {
        const body = await req.json()
        return res(ctx.status(200), ctx.json({ ...body, updatedAt: mockDate }));
    }),
    rest.delete(`https://reqres.in/api/users/${mockId}`, (_req, res, ctx) => {
        return res(ctx.status(204));
    }),
];


export const usersHandlersNetworkError: RestHandler[] = [
    rest.get("https://reqres.in/api/mocknetworkerror/*", (_req, res, _ctx) => { 
        return res.networkError("Mock network error")
    }),
    rest.post("https://reqres.in/api/mocknetworkerror/*", (_req, res, _ctx) => { 
        return res.networkError("Mock network error")
    }),
    rest.put("https://reqres.in/api/mocknetworkerror/*", (_req, res, _ctx) => { 
        return res.networkError("Mock network error")
    }),
    rest.delete("https://reqres.in/api/mocknetworkerror/*", (_req, res, _ctx) => { 
        return res.networkError("Mock network error")
    })
];

export const usersHandlersRejectError: RestHandler[] = [
    rest.get("https://reqres.in/api/mockrejecterror/users", (_req, res, ctx) => {
       
        return res(
            ctx.status(500),
        );
    }),
    rest.get("https://reqres.in/api/mockrejecterror/users/*", (_req, res, ctx) => {
        return res(
            ctx.status(500),
        );
    }),
    rest.post("https://reqres.in/api/mockrejecterror/users",async (_req, res, ctx) => {
        return res(
            ctx.status(500),
        );
    }),
    rest.put(`https://reqres.in/api/mockrejecterror/users/*`, async (_req, res, ctx) => {
        return res(
            ctx.status(500),
        );
    }),
    rest.delete(`https://reqres.in/api/mockrejecterror/users/*`, (_req, res, ctx) => {
        return res(
            ctx.status(500),
        );
    }),
];