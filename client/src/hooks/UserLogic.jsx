import axios from "axios";
import { useState } from "react";

const UserLogic = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const registerUser = async (e) => {
        e.preventDefault();

            if(form.password !== form.confirmPass){
                console.log("password wrong");
                return;
            }

        try {
            const registed = await axios.post("http://localhost:8080/register",{
                    form
            })
            console.log('Registerd')
            
        } catch (error) {
            
            console.log({error: "while sending data to backend"})
        }
    }

    return {registerUser, handleChange, form}
    
}

export default UserLogic