import messagesReducer, { addMessage } from "./messagesSlice";

describe("messages reducer", () => {
    const initialState = {
        messages: [],
    };

    it("should handle initial state", () => {
        expect(messagesReducer(undefined, { type: "unknown" })).toEqual({
            messages: [],
        });
    });

    it("should handle adding message", () => {
        const MOCK_MESSAGE = { user: "Test", message: "Text" };
        const actual = messagesReducer(initialState, addMessage(MOCK_MESSAGE));
        expect(actual.messages).toEqual([MOCK_MESSAGE]);
    });
});
