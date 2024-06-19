import React, { useEffect, useState } from 'react'
import { SERVER_URL } from './constants'
import {DataGrid} from "@mui/x-data-grid"
//ag-grid 컴포넌트는 데이터 표의 열도 정의해야 한다.
// 여기에는 field는 자동차 객체의 속성이다.
// 열의 제목은 headerName속성으로 설정 할 수 있다.
// 열의 너비도 여기에서 설정 가능하다.
const columns=[
  {field:"brand",headerName:"Brand", width:200},
  {field:"model",headerName:"Model", width:200},
  {field:"color",headerName:"Color", width:200},
  {field:"year",headerName:"Year", width:150},
  {field:"price",headerName:"Price", width:150},
]


export default function Carlist() {
  //REST API에서 가져온 자동차 정보를 담을 싱태 객체가 필요하다
  // 비어 있는 배열을 기본값으로 cars라는 상태를 선언한다
  const [cars, setCars]=useState([])
  // useEffect 훅에서 fetch를 실행한다
  // fetch는 web server에 요청을 보내는 함수 - AJAX
  // 두 번째 인수로 비어 있는 배열을 전달하므로 fetch는 첫 번째 렌더링 후에 한 번만 실행된다. JSON 응답 데이터에 있는 자동차 데이터는 cars 상태에 저장한다.

  useEffect(()=>{
    fetch(SERVER_URL+"/api/cars")
    .then(res=>res.json())
    .then(data=>setCars(data._embedded.cars))
    .catch(err=>console.error(err))
  },[])
  /* DataGrid 
    데이터 표의 데이터 원본은 fetch()로 읽어 들인 cars 상태이며, 이는 rows 프롭으로 정의된다.
    데이터 표 컴포넌트를 이용하려면 모든 행에 getRowID 프롭으로 고유한 ID 속성을 정의해야 한다.
  */
  const onDelClick=(url)=>{
    fetch(url,{method:"delete"})
    // 삭제 후에 새로운 목록으로 렌더링
    .then(response=>fetchCars())
    .catch(err=>console.error(err))
  }
  const fetchCars=()=>{
    fetch(SERVER_URL+"/api/cars")
    .then(res=>res.json())
    .then(data=>setCars(data._embedded.cars))
    .catch(err=>console.error(err))
  }
  return (
    <div>
      <DataGrid 
      columns={columns} 
      rows={cars}
      getRowId={row=>row._links.self.href}
      />
      <table>
        <tbody>
          {cars.map((car, index)=>
            <tr key={index}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.color}</td>
              <td>{car.year}</td>
              <td>{car.price}</td>
              <td><button onClick={()=>onDelClick(car._links.self.href)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
