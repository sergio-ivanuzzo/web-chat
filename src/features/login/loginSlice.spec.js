import loginReducer, { doLogin } from "./loginSlice";

describe("counter reducer", () => {
    const initialState = {
        username: ""
    };
    it("should handle initial state", () => {
        expect(loginReducer(undefined, { type: "unknown" })).toEqual({
            username: ""
        });
    });

    it("should handle do login", () => {
        const MOCK_LOGIN = "Test";
        const actual = loginReducer(initialState, doLogin(MOCK_LOGIN));
        expect(actual.username).toEqual(MOCK_LOGIN);
    });
});
