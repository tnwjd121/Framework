import './App.css';
import {useEffect, useState} from "react"

//useEffect 훅 함수에서 fetch로 빈 배열을 두번째 인수로 전달해서 수행하게 한다. 즉, fetch는 첫 번째 렌더링 이후 한 번 호출된다.

function App() {
  const [temp, setTemp] = useState("")
  const [desc, setDesc] = useState("")
  const [icon, setIcon] = useState("")
  const [isReady, setReady] = useState("")
  
  useEffect(()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.15&lon=129.05&units=metric&appid=45c502890b15bd14c6496108efbf917d")
    .then(result=>result.json())
    .then(jsonResult=>{
      setTemp(jsonResult.main.temp)
      setDesc(jsonResult.weather[0].main)
      setIcon(jsonResult.weather[0].icon)
      setReady(true)
    })
    .catch(err=>console.error(err))
  },[])
  if(isReady){
    return (
      <div className="App">
        <p>Temperature: {temp} &#8451;</p>
        <p>Description: {desc}</p>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img>
      </div>
    );
  }else{
    return <div>Loading...</div>
  }
}

export default App;
