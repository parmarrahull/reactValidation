import React, { useState } from 'react'
import Validation from './Validation'

const Form = () => {
    const [values, setValues] = useState({ name: "", email: "", phone: "", password: "" })
    const [errors, setErrors] = useState({})
    function handleInput(e) {
        const newObj = { ...values, [e.target.name]: e.target.value }
        setValues(newObj)
    }

    const handleValidation = (e) => {
        e.preventDefault();
        setErrors(Validation(values))
    }

    return (
        <>
            <form class="container mt-5" onSubmit={handleValidation}>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input onChange={handleInput} type="text" name="name" class="form-control" />
                            <label class="form-label"> Name</label>
                            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                        </div>
                    </div>
                </div>

                <div class="form-outline mb-4">
                    <input onChange={handleInput} type="email" name="email" class="form-control" />
                    <label class="form-label">Email</label>
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>

                <div class="form-outline mb-4">
                    <input onChange={handleInput} type="number" name="phone" class="form-control" />
                    <label class="form-label">Phone</label>
                    {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
                </div>

                <div class="form-outline mb-4">
                    <input onChange={handleInput} type="password" name="password" class="form-control" />
                    <label class="form-label">Password</label>
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>


                <button type="submit" class="btn btn-primary btn-block mb-4">Place order</button>
            </form>
        </>
    )
}

export default Form