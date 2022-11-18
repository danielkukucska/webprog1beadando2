export default abstract class Service<T, TCreate, TUpdate> {
    baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    abstract GetAll(page?: string): Promise<T[]>;
    abstract GetById(id: number): Promise<T>;
    abstract Create(item: TCreate): Promise<T>;
    abstract Update(item: TUpdate): Promise<T>;
    abstract Delete(id: number): Promise<void>;
}
