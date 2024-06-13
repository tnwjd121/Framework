//src/App6.js

import {useCallback, useState} from "react"
import Cat3 from "./components/Cat3"
import PureCat3 from "./components/Cat3"
export default function App6(){
    const [cats,setCats]=useState(["Biscuit","Jungle","Outlaw"])
    /* useCallback과 useMemo를 사용해 함수나 객체를 메모화 할수 있다. useCallback을 사용해 meow함수가 바뀌지 않았다는 사실을 보장한다. 컴포넌트 트리에서 재 렌더링이 너무 많이 발생할 때 이런 함수를 사용해서 성능를 개선 할 수 있다. */
    const meow=useCallback(name=>console.log(`${name}has meowed`),[])
    return (
        <>
            {
                cats.map((name,i)=>
                    // <PureCat3
                    //     key={i} 
                    //     name={name}
                    //     meow={name=>console.log(`${name} has meowed`)}
                    // />
                    <PureCat4
                        key={i} 
                        name={name}
                        meow={meow}
                    />
                )
            }
            <button onClick={()=>setCats([...cats,prompt("Name a cat")])}>Add a Cat</button>
        </>
    )
}