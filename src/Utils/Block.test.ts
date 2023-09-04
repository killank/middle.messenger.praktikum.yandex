import Block from "./Block.ts";
import {assert} from "chai";

class Component extends Block {
    render() {
        return this.compile("<div>{{props}}</div>", {
            ...this.props
        });
    }
}

const mock = new Component({props: "props"});

describe("Тест: Component", () => {
    it("Возвращаем начальное состояние", () => {
        assert.equal(mock.getContent()?.textContent, "props");
    });
  
    it("Изменяем и возвращаем обновленное состояние", () => {
        mock.setProps({testProp: "newProps"});
        assert.equal(mock.props.testProp, "newProps");
    });
});
