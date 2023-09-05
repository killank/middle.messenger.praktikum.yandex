import {expect} from "chai";

describe("Тест: Router", () => {
    it("Change route", () => {
        window.history.pushState({page: "Register"}, "Register", "/sign-up");
        window.history.pushState({page: "Auth"}, "Auth", "/");
        window.history.pushState({page: "Profile"}, "Profile", "/settings");
        window.history.pushState({page: "Chat"}, "Chat", "/messenger");

        expect(window.history.length).to.eq(5);
    });
});
