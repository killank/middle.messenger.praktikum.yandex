/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */
import {v4 as uuid} from "uuid";
import EventBus from "./EventBus";
import Handlebars from "handlebars";

type Props = Record<string, any>;

export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };

    private _element: HTMLElement | null = null;

    public id = uuid();

    public children: Record<string, Block | Block[]>;

    public props: Props;

    private eventBus: () => EventBus;

    constructor(childrenAndProps: Props = {}) {
        const eventBus = new EventBus();
        const {props, children} = this.getChildren(childrenAndProps);
        this.children = children;
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    public getChildren (childrenAndProps: Props): {props: Props, children: Record<string, Block | Block[]>} {
        const props: Record<string, unknown> = {};
        const children: Record<string, Block | Block[]> = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (Array.isArray(value) && value.every((el) => el instanceof Block)) {
                children[key] = value;
            } else if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return {
            props,
            children
        };
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _init() {
        this.init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init() {}

    private _componentDidMount() {
        this.componentDidMount();
    }

    public componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    private _componentDidUpdate(oldProps: any, newProps: any) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    public componentDidUpdate(_oldProps: any, _newProps: any) {
        return true;
    }

    public setProps = (nextProps:Props) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    protected compile(template: string, props: Record<string, any>) {
        const propsAndStubs = {...props};

        Object.entries(this.children).forEach(([key, component]) => {
            if (Array.isArray(component)) {
                propsAndStubs[key] = component.map((child) => `<div data-id=${child.id}></div>`);
            } else {
                propsAndStubs[key] = `<div data-id=${component.id}></div>`;
            }
        });
        
        const temp = document.createElement("template");
        temp.innerHTML = Handlebars.compile(template)(propsAndStubs);

        Object.entries(this.children).forEach(([_, component]) => {
            if (Array.isArray(component)) {
                component.forEach((child) => {
                    const stub = temp.content.querySelector(`[data-id="${child.id}"]`);
                    if (!stub) return;
                    stub.replaceWith(child.getContent());
                });
            } else {
                const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
                if (!stub) return;
                stub.replaceWith(component.getContent());
            }
        });
        return temp.content;
    }

    private _addEvents() {
        const {events = {}} = this.props;
    
        Object.keys(events).forEach((eventName) =>
            this._element?.addEventListener(eventName, events[eventName])
        );
    }
    
    private _removeEvents() {
        const {events = {}} = this.props;
    
        Object.keys(events).forEach((eventName) =>
            this._element?.removeEventListener(eventName, events[eventName])
        );
    }

    private _render() {
        const block = this.render();
        const newElement = block.firstElementChild as HTMLElement;
        this._removeEvents();
        if (this.element && newElement) {
            this.element.replaceWith(newElement);
        }
        this._element = newElement;

        this._addEvents();
    }

    public render(): DocumentFragment {
        return new DocumentFragment();
    }

    public getContent() {
        if (!this.element) {
            throw new Error("Элемент не найден");
        }
        return this.element;
    }

    private _makePropsProxy(props: Record<string, any>): Record<string, any> {
        const proxySetting = {
            get: (target: Record<string, any>, prop: string): unknown => {
                return target[prop];
            },
            set: (target: Record<string, any>, prop: string, value: unknown,): boolean => {
                const oldProps = target[prop];
                target[prop] = value;
                this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target[prop]);
                return true;
            },
            deleteProperty() {
                throw new Error("Отказано в доступе");
            },
        };

        return new Proxy(props, proxySetting);
    }

    public show() {
        this.getContent().style.display = "block";
    }

    public hide() {
        this.getContent().style.display = "none";
    }
}
