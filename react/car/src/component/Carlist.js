import React, { useEffect, useState } from 'react'
import { SERVER_URL } from './constants'
// 데이터를 CSV로 내보내는 기능을 구현하기 위한 임포트
import {DataGrid} from "@mui/x-data-grid"
import { Button, IconButton, Slide, Snackbar, Stack } from '@mui/material'
import AddCar from './AddCar'
import EditCar from './EditCar'
import CustomeToolbar from './CustomeToolbar'
import DeleteIcon from '@mui/icons-material/Delete';
//ag-grid 컴포넌트는 데이터 표의 열도 정의해야 한다.
// 여기에는 field는 자동차 객체의 속성이다.
// 열의 제목은 headerName속성으로 설정 할 수 있다.
// 열의 너비도 여기에서 설정 가능하다.

// 데이터 csv로 내보내는 기능을 구현하기 위해 임포트

export default function Carlist() {
  const columns=[
    {field:"brand",headerName:"Brand", width:200},
    {field:"model",headerName:"Model", width:200},
    {field:"color",headerName:"Color", width:200},
    {field:"year",headerName:"Year", width:150},
    {field:"price",headerName:"Price", width:150},
    {
      field: "edit",
      headerName: "",
      sortable:false,
      filterable:false,
      width: 150,
      renderCell: (row) => (
        <EditCar 
        data={row}
        fetchCars={fetchCars}/>
        ),
      },
      {
        field: "delete",
        headerName: "",
        sortable:false,
        filterable:false,
        width: 150,
        // 셀에 더 복잡한 내용을 넣어야 할 때는 셀의 내용이 렌더링되는 방법을 정의하는 renderCell프롭을 이용하면 된다
        //renderCell로 button요소를 추가한다
        renderCell: (row) => (
          <IconButton onClick={()=> onDelClick(row.id)}>
            <DeleteIcon color='warning'></DeleteIcon>
          </IconButton>
        ),
      },
  ]
  //REST API에서 가져온 자동차 정보를 담을 싱태 객체가 필요하다
  // 비어 있는 배열을 기본값으로 cars라는 상태를 선언한다
  const [cars, setCars]=useState([])
  //SnackBar 컴포넌트의 open 프롭 값은 부울이며, 이 값이 true면 컴포넌트가 표시된다. SnackBar 컴포넌트이 표시 여부를 처리하기 위해 open이라는 상태를 선언한다.
  const [open, setOpen] = useState(false)

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
    // delete 버튼을 눌렀을 때 확인 대화상자를 표시하는 기능이 있으면 자동차를 실수로 삭제하는 일이 없어 좋을 것이다.
    // windew 객체의confirm 메서드로 이 기능을 구현할 수 있다.
    if(window.confirm("Are you sure to delete?")){

      fetch(url,{method:"delete"})
      // 삭제 후에 새로운 목록으로 렌더링
      .then((response)=>{
        if(response.ok){
          fetchCars()
          setOpen(true)
        }else{
          alert("Something went wrong!")
        }
      })
      .catch(err=>console.error(err))
    }
  }
  const fetchCars=()=>{
    fetch(SERVER_URL+"/api/cars")
    .then(res=>res.json())
    .then(data=>setCars(data._embedded.cars))
    .catch(err=>console.error(err))
  }
  return (
    <>
    <Stack m={2}/>
    <AddCar fetchCars={fetchCars}/>
    <div style={{width:'100%'}}>
      <DataGrid 
      columns={columns} 
      rows={cars}
      getRowId={row=>row._links.self.href}
      // 표에서 아무 행이나 클릭하면 그 행이 선택된다
      // 다음과 같이 표의 disableSelectionOnClick 프롭을 true로 설정하면 이 동작을 비활성화 할 수 있다.
      disableRowSelectionOnClick={true}
      // 안됨
      components={{toolbar:CustomeToolbar}}
      />
      <Snackbar
        // autoHideDuration 프롭은 onClose함수가 자동으로 호출되고 메시지가 사라지는 시간을 밀리초 단위로 정의한다.
        // message 프롭은 표시될 메시지를 정의한다.
      open={open} 
      autoHideDuration={1000}
      onClose={()=>setOpen(false)}
      message="Car deleted"
      />
      {/* <table>
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
      </table> */}
    </div>
    </>
  )
}
