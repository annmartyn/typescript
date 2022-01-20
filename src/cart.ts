export interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
}

export default class Cart {
    private _items: Buyable[] = [];

    add (item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    sum (sale: number = 0): number | string {
        if (sale < 0 || sale > 100) {
            return this.error('Процент скидки должен быть в промежутки от 0 до 100');
        }
        let sum: number = 0;
        this._items.forEach((item: Buyable) => sum += item.price * (100 - sale)/100);
        return sum;
    }

    remove (id: number): void | string {
        let obj: Buyable = this.item(id);
        if (obj.id === -1) return this.error(`Объект с ID ${id} не найден`);
        this._items.splice(this._items.indexOf(obj), 1);
    }

    error (msg: string): string {
        return msg;
    }

    item(id: number): Buyable {
        let obj: Buyable = {
            id: -1,
            name: '',
            price: -1,
        };
        for (let i: number = 0; i < this._items.length; i++) {
            if (this._items[i].id === id) obj = this._items[i];
        }
        return obj;
    }
}