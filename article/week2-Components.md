# React 프로젝트의 폴더구조는 어떻게 설계하는 것이 좋을까?

프로젝트를 진행하다 보면 크기가 커질수록 관리해야 할 파일은 늘어나고 이에 따라 각 파일들을 용도에 맞게 분류해야할 필요가 생긴다. 따라서 프로젝트를 진행할 때 초반의 컴포넌트 구조 설계가 매우 중요하다.

폴더 구조를 잘 설계하고 숙지하는 것은 코드의 유지 및 보수, 그리고 refactoring을 하는 데 있어서도 많은 도움이 된다.

리액트는 컴포넌트 기반의 프로그래밍 언어이다. 컴포넌트는 재사용 가능한 요소들이며, 이런 재사용성을 이용해 효율적으로 프로젝트를 만들수 있다고 한다.

그렇다면 어떻게 하면 컴포넌트들을 효율적으로 재사용할 수 있을까? 먼저 React 어플리케이션을 작성할 때 유용하게 사용될 수 있는 패턴들을 비교해보도록 하자.

<br >

## 🎀 Presentation Component와 Container Component

React 에서 Component 를 Presentational Component 와 Container Component 로 나누는 것은 재사용성과 유지보수성을 높이기 위함이다.

하지만, 다양한 작업을 각각의 모든 컴포넌트 마다 처리하는 것은 각각의 기능을 따로 관리하는 것보다 훨씬 더 복잡하고 가독성 역시 떨어지게 되므로 유지보수 하기가 힘들어진다.

따라서 재사용성과 유지보수성에 초점을 둔 패턴이 등장하였다.  Presentational & Container 디자인 패턴은 로직을 수행하는 컴포넌트와, markup을 통해 ui를 보여주는 컴포넌트가 분리된 패턴으로, 이에 따라 기능과 ui에 대한 구분이 쉬워진다.

## 🎀 Presentation Component

Presentation 컴포넌트는 특정 UI 컴포넌트를 렌더랑하는 역할을 한다. UI가 어떻게 보여지는 지에 대한 부분을 책임지며, 다음와 같은 특징을을 가지고 있다.

1. html, css, presentational component만 사용 가능하다.
2. presentational과 container 모두를 내부적으로 가질 수 있다.
3. 가능한 작게 만들어야 한다.
4. 상태(state) 는 UI 상태를 관리하기 위해서만 갖게된다.
5. 필요 시 visual을 바꾸는 props를 받을 수 있다.
6. 데이터를 불러오거나 변경하는 작업은 Presentational Component 에서 작성하지 않는다.
7. 데이터 및 데이터와 관련된 Callback 은 props 를 통해서 받는 작업만 한다.
8. state, LifeCycle, 성능 최적화가 필요없는 경우라면 Functional Component 로 작성된다.

이러한 컴포넌트는 dumb 또는 stateless 컴포넌트라고도 한다.

## 🎀 Container Component

Container 컴포넌트는 어떠한 동작을 할 것인가에 대한 역할을 책임진다.

1. DOM 마크업 구조나 스타일을 가지지 않는다.
2. presentational과 container 모두를 내부적으로 가질 수 있지만, 보통 전체를 감싸는 div를 제외하고 자체적인 DOM 마크업이나 스타일을 갖고 있지 않다.
3. 데이터 및 데이터와 관련된 동작을 다른 Presentational Component 와 Container Component 에게 제공한다.
4. 주로 데이터 저장소로 활용되며 상태(state) 를 갖고 있는 경우가 많다.
5. side effects를 만들 수 있다. ex) db에 CRUD를 요청
6. props를 자유롭게 받을 수 있다.

## 🎀 Custom hook

컴포넌트를 만들다보면, 반복되는 로직이 자주 발생한다. 그러한 상황에서 커스텀 Hooks 를 만들어서 반복되는 로직을 쉽게 재사용할 수 있다.

커스텀 Hooks 를 만드는 방법은, 먼저 `use` 라는 키워드로 시작하는 파일을 만든다. 그리고 그 안에서  `useState`, `useEffect`, `useReducer`, `useCallback` 등 Hooks 를 사용하여 원하는 기능을 구현해주고, 컴포넌트에서 사용하고 싶은 값들을 반환해주면 된다.

```jsx
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

이처럼 custom hooks는 재사용이 가능하도록 로직을 분리하여 코드를 추상화시켜주는 동시에 컴포넌트의 간결함을 유지할 수 있게 해 준다.

**하지만 공통된 값을 다루는 로직을 custom hooks로 만들게 되면 예기치 못한 문제를 발생 시키고 이슈 발생시 그 원인을 파악하는 것도 힘들기 때문에 반드시 피해야 한다.**

무분별한 custom hooks 제작은 오히려 개발에 혼란을 가져오기 때문에 어떤 상황에서, 어떤 것을 custom hooks로 제작해야 할지를 잘 판단해서 만들어야 한다.

<br>

## 어떤 방식을 언제 택해야 좋은 것일까?

**_"되도록 컴포넌트를 작성하는 입장에서는 유지 보수하기 쉬운 코드를, 컴포넌트를 사용하는 사람 입장에서는 컴포넌트의 인터페이스를 쉽게 파악할 수 있는 코드를 작성하는게 좋다."_**

Presentational Component 와 Container Component 간의 차이점을 기술적으로 나누는 것보다, 어떤 목적을 가지는지에 따른다는 것을 충분히 이해하는 것이 중요하고 생각한다.

어떤 패턴을 사용해야 하는지는 대규모 프로젝트인지, 팀의 개발 능력 등 프로젝트의 특성과 요구사항에 따라 다를 수 있다. 따라서 각자의 용도를 명확하게 정리하여 분류하고, 장점과 단점을 명확히 알고 어떻게 하면 재사용성과 유지보수의 측면을 잘 고려하며 좋을 코드를 작성할 수 있을지 고민해보아야 한다.

## 프론트엔드에게 디자인 패턴이란 어떤 존재일까?

프론트엔드에게 디자인 패턴이란 반복적인 상황들을 최적화된 방법으로 해결하도록 돕는 역할로서, 지속적으로 프로젝트를 진행하기 위해서 필요한 것이라고 생각한다. 많은 기능 구현을 하며 코드를 재작성하는 데 있어서 디자인 패턴은 생산성을 높이는 데 큰 도움이 된다.

한편으로, 디자인 패턴은 하나의 방법론이고 필요한 것이긴 하지만 너무 타이트하게 패턴을 맞추려고 하다보면 오히려 패턴에 코드를 우겨넣는 일도 발생할 수 있다는 의견도 있다. 어떠한 패턴이 우리의 서비스에 더 알맞을 것인지 조금은 느슨하게 생각해볼 필요가 있을 것 같다.
