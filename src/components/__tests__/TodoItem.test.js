/**
 * [다시 생각해보기]
 * 
 * 1 모든 구현에 대응하는 테스트를 쓴다고 반드시 좋은 것은 아니다. 
 *      테스트 코드도 '코드' → 유지보수에 드는 비용 고려할 것
 * 
 * 2 단위 테스트와 통합 테스트의 필요성 잘 구분하기
 * - 단위 테스트가 필요할 것 같은 부분에서만 단위 테스트를 넣을 것
 * - 의존성이 걸리더라도, 통합 테스트가 의미가 있다고 판단하면 통합 테스트로 추가할 것
 * 
 * 3 Storybook을 활용한 시각적 테스트, cypress 등의 도구를 사용한 E2E 테스트 역시 필요한 용도에 맞춰 사용하기
 * - 기존에 이미 다루고, 경험한 부분이라 여기서 굳이 넣지 않았을 뿐이니 참고해주세요 :)
 */

/**
 * 1 컴포넌트 렌더링 로직 테스트
 */

// 의존성
import React from "react";
// 테스트 도구
import { render } from "@testing-library/react";
// 테스트 대상
import TodoItem from "../TodoItem";

describe("완료한 할 일인지 여부에 따라 완료 버튼 노출을 결정할 수 있다.", () => {
    // mockProps
    const completeTodo = jest.fn();

    it("이미 완료한 할 일인 경우 완료 버튼을 노출하지 않아야 한다.", () => {
        // given
        const todo = {
            id: 1,
            title: "완료한 일",
            completed: true
        };

        // when
        const { queryByTestId } = render(<TodoItem todo={todo} completeTodo={completeTodo} />);

        // then
        expect(queryByTestId("complete-button")).toBeNull();
        // expect(queryByTestId("complete-button")).not.toBeInTheDocument();
    });

    it("완료하지 않은 할 일인 경우 완료 버튼을 노출해야 한다.", () => {
        // given
        const todo = {
            id: 1,
            title: "이제 해야 할 일",
            completed: false
        };

        // when
        const { queryByTestId } = render(<TodoItem todo={todo} completeTodo={completeTodo} />);

        // then
        expect(queryByTestId("complete-button")).not.toBeNull();
        // expect(queryByTestId("complete-button")).toBeInTheDocument();
    });
});
