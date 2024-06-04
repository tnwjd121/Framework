/* 
  리액트 상태 관리 
  상태(state)
  상태가 있는 컴포넌트를 만드는 방법을 배우고, 컴포넌트 트리의 아래 방향으로 상태를 전달하는 방법과 사용자 상호작용을 컴포넌트 트리의 위쪽으로 도려 보내는 방법을 살펴 본다. 
*/

/* 
  별점 컴포넌트 만들기
  5점 만점의 별점 시스템
  먼저 별이 필요하다.
*/
import { FaStar } from "react-icons/fa";

/* 
  점수에 따라 선택된 별은 빨간색으로 칠해져야 하고, 선택되지 못한 별은 회색으로 표시되야 한다.
  선택된 속성에 따라 자동으로 별을 만들어내는 컴포넌트를 하나 만들자
*/
/* 
  10점 별점 시스템이 훨씬 더 자세한 정보를 제공할 수 있다.
*/
const Star = ({selected=false})=>{
  return(
    <FaStar color={selected?"red":"gray"}/>
  )
}

//인자로 전달된 갯수 만큼 배열을 생성하는 함수
const createArray = length=>[...Array(length)]

function StarRating({totalStars=5}){
  return(
    createArray(totalStars).map((n,i)=><Star key={i}/>)
    )
  }


function App() {
  return (
    <div className="App">
      <StarRating/>
    </div>
  );
}

export default App;
