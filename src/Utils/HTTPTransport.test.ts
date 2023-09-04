import sinon, {SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic} from "sinon";
import {expect} from "chai";
import {HTTPTransport} from "./HTTPTransport.ts";

describe("Тест: HTTPTransport", () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    const httpRequest: SinonFakeXMLHttpRequest[] = [];
    const instance: HTTPTransport = new HTTPTransport();

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        global.XMLHttpRequest = xhr;

        xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
            httpRequest.push(request);
        };
    });

    afterEach(() => {
        httpRequest.length = 0;
    });

    it("Возвращаем get запрос", () => {
        instance.get("/auth/user");
        const [request] = httpRequest;

        expect(request.method).to.eq("GET");
    });

    it("Возвращаем put запрос", () => {
        instance.put("/auth/user");
        const [request] = httpRequest;

        expect(request.method).to.eq("PUT");
    });

    it("Возвращаем delete запрос", () => {
        instance.delete("/auth/user");
        const [request] = httpRequest;

        expect(request.method).to.eq("DELETE");
    });
});
