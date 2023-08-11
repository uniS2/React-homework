# eBook! Atomic Component

## Figma - 컴포넌트 설계
- [시안](https://www.figma.com/file/fiBbFku3fuxjWmHUMx18tf/Untitled?type=design&node-id=0%3A1&mode=design&t=8pk75ZtcTRhE7ToO-1)
![figma 시안](/src/assets/figma.png)

---

## React 컴포넌트 구현
- Button을 구현하였으며 2가지의 속성으로 나타내주었다.
  1. `episode`: first, continue, next
  2. `border` : none, light, heavy
 
  ![Button Component](/src/assets/Button_component.png)

---

### Button

```js
// Button.jsx
import styles from "@/styles/Button.module.css";

function Button({ children, episode, border }) {
  let episodeStyle = (episode === "first") ? styles.primary : styles.secondary;

  let borderStyle =
    (border === "first") ? styles.none
      : episode === "continue" ? styles.light : styles.heavy;

  return (
      <button type="button" className={`${episodeStyle} ${borderStyle}`}>
        {children}
      </button>
  );
}
```

  | Button / props  | episode  | border |
  | --------------- | -------- | ------ |
  | **첫화보기**    | first    | none   |
  | **이어보기**    | continue | light  |
  | **다음화 보기** | next     | heavy  |

- **`Button.module.css`** : css-module 을 사용하였으며, 조건처리에 해당하는 속성을 적용한다.
  
- **`children`** : 해당하는 Node 의 textContent 값으로 받아 버튼 본문으로 렌더링해준다.

- **```className={`${episodeStyle} ${borderStyle}`}```**
  - **`episode`**
    - 조건처리에 따라 `first` 일 경우 `primary`, 나머지 episode 속성값의 경우 `secondary` className 속성을 가져온다.
    - 변수 `episodeStyle` 에 할당 후 jsx 내부에 전달하여 적용한다.
    
  - **`border`**
    - 조건처리에 따라 `none`, `light`, `heavy` className 속성 중 하나를 가져온다.
    - 변수 `borderStyle` 에 할당 후 jsx 내부에 전달하여 적용한다.

---

### 구현

```js
// App.jsx
function App() {
  return (
    <>
      <Button episode="first" border="none">첫화보기</Button>
      <Button episode="continue" border="light">이어보기</Button>
      <Button episode="next" border="heavy">다음화보기</Button>
    </>
  )
}
```
