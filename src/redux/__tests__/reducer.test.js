/**
 * 3 상태 변경 요청을 받아서 의도한 대로 상태를 잘 변경하는 지 확인
 */
// 테스트 대상
import todoReducer from "../todoReducer";

describe("할 일과 관련한 요청을 처리할 수 있다.", () => {
    it("새로운 할 일 추가 요청을 받으면 기존 할 일 목록에 요청 받은 할 일을 추가해야 한다.", () => {
        // given
        const currentTodoId = 1;
        const currentState = [
            { id: currentTodoId, title: "기존 할 일", completed: false }
        ];

        // when
        const newTodoPayload = {
            id: currentTodoId + 1,
            title: "새로운 할 일"
        };
        const action = {
            type: "ADD_TODO",
            ...newTodoPayload
        };

        // then
        expect(todoReducer(currentState, action))
            .toEqual([...currentState, newTodoPayload]);
    });
});