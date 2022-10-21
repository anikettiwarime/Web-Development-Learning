import { TextField, FormControlLabel, Checkbox, Box, Button, Alert } from '@mui/material'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



const Registration = () => {


    const [err, setErr] = useState({ status: false, msg: "", type: "" })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
            tc: data.get('tc')
        }
        if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
            console.log(actualData)
            // Perform validation on actual data on backend 
            if (actualData.password === actualData.password_confirmation) {
                document.getElementById('registration-form').reset()
                setErr({ status: 'true', msg: 'Registration Successfull', type: 'success' })
                // navigate("/")
            }
            else {
                setErr({ status: 'true', msg: 'Password Not matched', type: 'error' })
            }
        }
        else {
            console.log(actualData)
            setErr({ status: 'true', msg: 'All fields are required!', type: 'error' })
        }
    }




    return (
        <>
            <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>

                <TextField margin="normal" required fullWidth id='name' name='name' label='Name' autoComplete="off" />
                <TextField margin="normal" required fullWidth id='email' name='email' label='Email' autoComplete="off" />
                <TextField margin="normal" required fullWidth id='password' name='password' label='Password' type='password' />
                <TextField margin="normal" required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' />
                <FormControlLabel control={<Checkbox value='agree' color='primary' id='tc' name='tc' />} label='I agree to terms and condition.' />
                <Box textAlign='center' >
                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>SignUp</Button>
                </Box>
                <NavLink to="/" >Forgot Password ?</NavLink>
                {err.status ? <Alert severity={err.type} sx={{ mt: 3 }}>{err.msg}</Alert> : ''}
            </Box>
        </>
    )
}

export default Registration