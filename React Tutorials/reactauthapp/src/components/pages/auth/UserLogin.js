import { TextField, Button, Box, Alert } from "@mui/material"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

const UserLogin = () => {

    const [err, setErr] = useState({ status: false, msg: "", type: "" })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const actualData = { email: data.get('email'), password: data.get('password') }
        if (actualData.email && actualData.password) {
            console.log(actualData)
            // Perform validation on actual data on backend 
            document.getElementById('login-form').reset()
            setErr({ status: 'true', msg: 'Login Successfull', type: 'success' })
            navigate("/")
        }
        else {
            setErr({ status: 'true', msg: 'All fields are required!', type: 'error' })
        }
    }


    return (
        <>
            <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
                <TextField margin="normal" required fullWidth id='email' name='email' label='Email Address' autoComplete="off" />
                <TextField margin="normal" required fullWidth id='password' name='password' label='Password' type='password' />
                <Box textAlign='center' >
                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
                </Box>
                <NavLink to="/" >Forgot Password ?</NavLink>
                {err.status ? <Alert severity={err.type} sx={{ mt: 3 }}>{err.msg}</Alert> : ''}
            </Box>
        </>
    )
}

export default UserLogin