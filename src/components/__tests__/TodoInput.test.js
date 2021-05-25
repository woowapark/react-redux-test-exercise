/**
 * 2 사용자 이벤트 -> 상태 업데이트 & 외부 라이브러리 연동
 */

// 의존성
import React from "react";
// 테스트 도구
import { render, fireEvent } from "@testing-library/react";
// 테스트 대상
import { addTodo } from "../../redux/action";
import TodoInput from "../TodoInput";

// mocking
const mockDispatch = jest.fn();
const mockHistoryPush = jest.fn();
jest.mock("react-redux", () => ({
    useDispatch: () => mockDispatch
}));
jest.mock("react-router-dom", () => ({
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe("할 일을 추가할 수 있다.", () => {
    it("할 일을 입력한 뒤 추가 버튼을 클릭하여 할 일 추가 요청을 보낼 수 있어야 한다.", () => {
        // given
        const newTodo = "새로운 할 일";

        const { queryByTestId } = render(<TodoInput />);
        const todoInput = queryByTestId("todo-input");
        const addButton = queryByTestId("add-button");

        // when
        fireEvent.change(todoInput, { target: { value: newTodo } });
        fireEvent.click(addButton);

        // then
        const {type, title} = addTodo(newTodo);
        expect(mockDispatch).toBeCalled();
        expect(mockDispatch).toBeCalledWith(expect.objectContaining({type, title}));
    });

    it("할 일 추가 버튼을 클릭한 경우, 할 일 목록 페이지로 이동해야 한다.", () => {
        // given
        const { queryByTestId } = render(<TodoInput />);
        const addButton = queryByTestId("add-button");

        // when
        fireEvent.click(addButton);

        // then
        expect(mockHistoryPush).toBeCalled();
        expect(mockHistoryPush).toBeCalledWith("/");
    });
});