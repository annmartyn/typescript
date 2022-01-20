import Cart from './cart';
import Movie from './app';

let film1 = new Movie(1, '��������', 'Avengers','USA', 400, 2009, 'Film the best', '����������, ������', 127);
let film2 = new Movie(2, '����', 'Shrek', 'USA', 200, 2001, 'The shrekiest', '����������, �������', 86);
let film3 = new Movie(3, '�������-����: ��� ���� �����', 'Spiderman: no way home', 'USA', 500, 2021, 'No going back', '����������, ������, �������', 145);

let cart = new Cart();
cart.add(film1.item);
cart.add(film2.item);
cart.add(film3.item);

test('sum prices (without sale)', () => {
    expect(cart.sum()).toBe(1100);
});

test('Summ item prices (30%)', () => {
    const sum = cart.sum(30);
    expect(sum).toBe(770);
});

test('remove item from cart', () => {
    cart.remove(1);
    cart.remove(2);
    expect(cart.items).toEqual([film3.item]);
});

test('wrong id', () => {
    const errorID = 5;
    expect(cart.remove(errorID)).toEqual(`������ � ID ${errorID} �� ������`);
});

test('wrong sale', () => {
    expect(cart.sum(120)).toEqual(`������� ������ ������ ���� � ���������� �� 0 �� 100`);
});