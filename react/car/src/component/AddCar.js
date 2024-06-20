import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, DialogActions, DialogContent, Stack, TextField } from '@mui/material';
import { SERVER_URL } from './constants';


export default function AddCar({fetchCars=f=>f}) {
  const[open,setOpen] = useState(false)
  const[car,setCar] = useState({
    brand:"",
    model:"",
    color:"",
    year:"",
    price:""
  })

  // 대화상자 폼을 닫고 여는 두 함수를 추가해야 한다.
  const handleClickOpen=()=>{
    setOpen(true)
  }
  const handleClose=()=>{
    setOpen(false)
    setCar({
      brand:"",
      model:"",
      color:"",
      year:"",
      price:""
    })
  }

  const handleChange=(e)=>{
    // console.log(e.target.value)
    setCar({...car, [e.target.name]:e.target.value})  
  }
  // 새로운 자동차 추가
  const addCar=(car)=>{
    fetch(SERVER_URL+"/api/cars",
    {
      method:"POST",
      headers: {"Content-Type" : "application/json"},
      body:JSON.stringify(car)
    })
    .then(response=>{
      if(response.ok){
        fetchCars();
      }
    })
  }
  // 자동차를 저장하고 모달 폼을 닫음
  const handleSave=()=>{
    addCar(car)
    handleClose()
  }

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained">New Car</Button>
      <Dialog open={open} onClose={handleClose} > 
        <DialogTitle>New car</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
                label="Brand"
                name="brand"
                variant="standard"
                value={car.brand}
                onChange={handleChange}
            />
            <TextField
                label="Model"
                name="model"
                variant="standard"
                value={car.model}
                onChange={handleChange}
            />
            <TextField
                label="Color"
                name="color"
                variant="standard"
                value={car.color}
                onChange={handleChange}
            />
            <TextField
                label="Year"
                name="year"
                variant="standard"
                value={car.year}
                onChange={handleChange}
            />
            <TextField
                label="Price"
                name="price"
                variant="standard"
                value={car.price}
                onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
