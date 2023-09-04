import {expect} from "chai";
import {set, merge} from "./set.ts";

describe("Тест функции merge", () => {
    it("Должен смерджить два объекта", () => {
        const obj1 = {
            a: 1,
            b: {c: 2}
        };
        const obj2 = {
            b: {d: 3},
            e: 4
        };
        const result = merge(obj1, obj2);
        expect(result).to.deep.equal({
            a: 1,
            b: {
                c: 2,
                d: 3
            },
            e: 4
        });
    });

    it("Должен обработать пустой объект", () => {
        const obj1 = {a: 1};
        const obj2 = {};
        const result = merge(obj1, obj2);
        expect(result).to.deep.equal({a: 1});
    });
});

describe("Тест функции set", () => {
    it("Должен вставить значение по определенному пути", () => {
        const obj = {a: 1};
        const result = set(obj, "b.c.d", 2);
        expect(result).to.deep.equal({
            a: 1,
            b: {c: {d: 2}}
        });
    });

    it("Должен обработать не объект", () => {
        const nonObject = "string";
        const result = set(nonObject, "a.b.c", 1);
        expect(result).to.equal(nonObject);
    });
});
