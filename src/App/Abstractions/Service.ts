abstract class Service<T, TCreate, TUpdate> {
    baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    abstract GetAll(page?: number): Promise<T[] | null>;
    abstract GetById(id: number): Promise<T | null>;
    abstract Create(item: TCreate): Promise<T | null>;
    abstract Update(item: TUpdate): Promise<T | null>;
    abstract Delete(id: number): Promise<true | null>;
}

export default Service;
