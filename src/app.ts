import { Buyable } from './cart';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly originalname: string,
        readonly country: string,
        readonly price: number,
        readonly year: number,
        readonly motto: string,
        readonly genres: string,
        readonly time: number,
    ) { }

    get item(): Buyable {
        return this;
    }
}