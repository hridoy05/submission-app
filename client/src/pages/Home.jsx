import { Button, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import axios from 'axios'
import dayjs from 'dayjs';
const Home = () => {
    const [person, setPerson] = useState({
        name:'',
        dob: dayjs().format(),
        country:'',
        file:''
    })
    const [countries, setCountries] = useState([])
    const handleChange = (e)=> {
        console.log([e.target.name], e.target.value);
        setPerson({...person, [e.target.name]: e.target.value})
    }
    const changeDateHandler = (value)=> {
        console.log(value);
        setPerson({...person,dob:value })
    }
    const handleCountryChange = (e,value)=> {
        console.log(value);
        setPerson({...person, country: value.country_name})
    }
    const changeFileHandler = (event)=> {
        console.log(event.target.files[0]);
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        const formData = new FormData();
      Object.keys(person).forEach((key) => {
        console.log(key);
        formData.append(key, person[key]);
      });
    
      console.log(Object.fromEntries(formData))
    }
    useEffect(()=> {
        getCountries()
    },[])
    async function getCountries (){
       const {data} =  await axios.get('http://localhost:8000/countries')
       console.log(data);
       setCountries(data)
       
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <Stack direction="column" alignItems="center" sx={{margin: "10px auto" }} gap={5}>
        <TextField id="outlined-basic" value={person.name} onChange={handleChange} name="name" label="name" variant="outlined" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker inputFormat="MM/DD/YYYY"  label="Date Of Birth" value={person.dob} onChange={changeDateHandler} renderInput={(params) => <TextField {...params} />}></DatePicker>
        </LocalizationProvider>
        <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      value={person.country.country_name}
      onChange={handleCountryChange}
      autoHighlight
      getOptionLabel={(option) => option.country_name}
      renderOption={(props, option) => (
        <Box component="li" {...props}>    
          {option.country_name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
        <input name="file"  onChange={changeFileHandler} accept="application/pdf" type="file"/>
        <Button type="submit">Submit</Button>
    </Stack>
    </form>
    </>
  );
};

export default Home;