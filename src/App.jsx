import Button from "./components/Button"

function App() {
  return (
    <>
      <Button episode="first" border="none">첫화보기</Button>
      <Button episode="continue" border="light">이어보기</Button>
      <Button episode="next" border="heavy">다음화보기</Button>
    </>
  )
}

export default App