import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { SERVER_URL } from './constants'
import EditIcon from '@mui/icons-material/Edit';

export default function EditCar({fetchCars, data}) {
  const [open, setOpen] = useState(false)
  const[car,setCar] = useState({
    brand:"",
    model:"",
    color:"",
    year:"",
    price:""
  })

    // 대화상자 폼을 닫고 여는 두 함수를 추가해야 한다.
    const handleClickOpen=()=>{
      setCar({
        brand:data.row.brand,
        model:data.row.model,
        color:data.row.color,
        year:data.row.year,
        price:data.row.price
      })
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
    const handleChange = (e) =>{
      setCar({...car, [e.target.name]:e.target.value})
    }

    // 자동차를 업데이트하고 모달 폼을 닫음
    const handleSave=()=>{
      updateCar(data.id)
      handleClose()
    }
    // 자동차 업데이트
    const updateCar=(link)=>{
      fetch(link,
      {
        method:"PUT",
        headers: {"Content-Type" : "application/json"},
        body:JSON.stringify(car)
      })
      .then(response=>{
        if(response.ok){
          fetchCars();
        }else{
          alert("Something went wrong!")
        }
      })
      .catch(err=>console.error(err))
    }

  return (
    <div>
      <IconButton>
        <EditIcon onClick={handleClickOpen}></EditIcon>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit car</DialogTitle>
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
