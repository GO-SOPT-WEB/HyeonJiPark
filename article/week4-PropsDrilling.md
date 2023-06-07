### Props Drilling이란?

- Prop Drilling 은 props를 오로지 하위 컴포넌트로 전달하는 용도로만 쓰이는 컴포넌트들을 거치면서 React Component 트리의 한 부분에서 다른 부분으로 데이터를 전달하는 과정이다.
- 만약 prop 전달이 3~5개 정도의 컴포넌트라면 문제가 없지만, prop 전달이 10개, 15개 같이 더 많은 과정을 거치게 된다면 코드를 읽을 때 해당 prop을 추적하기 힘들어집니다. 그렇기 때문에 유지보수도 더욱 어려워진다.

### React에서 Props Drilling을 해결하는 전략들은 무엇이 있을까?

- React에서 Props Drilling을 해결하는 전략에는 전역 상태 라이브러리 사용이 있다.전역 상태 관리 라이브러리에는 recoil, redux 등이 있다. 이러한 라이브러리들을 사용하면 중간 컴포넌트를 거치지 않고 필요한 데이터를 직접 가지고 올 수 있다. 또한 context api를 사용할 수도 있다.
- 또한, 렌더링 될 컴포넌트를 불필요하게 여러 컴포넌트로 나누지 않는 것도 방법이다. 컴포넌트를 재사용해야할 상황을 기다렸다 분할해도 늦지 않으며, 불필요한 prop drilling도 하지 않을 수 있다.
- 그리고 가능한 관련성이 높은 곳에 state를 위치 시킨다. 어떤 데이터가 어플리케이션의 특정 위치에서만 필요하다면 최상위 컴포넌트에 state를 위치시키는 것보다 해당 데이터를 필요로 하는 최소 공통 부모 컴포넌트에서 관리를 하는 것이 가장 효율적이다.

### 그렇다면 나는 합동세미나, 솝커톤, 웹잼에서 어떤걸 시도해보고 싶은가?

- 나는 recoil과 같은전역 상태 관리 라이브러리를 사용하여 Props Drilling을 해결해보고 싶다. 여러 팀원들과 협업하는 과정에서 데이터의 흐름을 잘 추적하기 위해서 복잡한 상태 관리보다는, 전역으로 데이터를 관리함으로써 충돌 위험을 줄이고 유지 보수에도 용이해질 수 있다. 또한 이를 통해 팀원들 간 커뮤니케이션과 코드 통일성에도 도움을 줄 수 있을 것이라고 생각한다.