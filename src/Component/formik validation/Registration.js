import React from 'react'
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const Registration = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            // validateOnChange: true,
            // validateOnBlur: false,
            onSubmit: (values, action) => {
                action.resetForm();
            },
        });
    return (
        <>
            <h1>Formik validation </h1>
            <form onSubmit={handleSubmit} class="container mt-5">
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input type="name"
                                autoComplete="off"
                                name="name"
                                id="name"
                                placeholder="Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur} class="form-control" />
                            <label class="form-label"> Name</label>
                            {errors.name && touched.name ? (
                                <p style={{ color: "red" }} className="form-error">{errors.name}</p>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div class="form-outline mb-4">
                    <input type="email"
                        autoComplete="off"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} class="form-control" />
                    <label class="form-label">Email</label>
                    {errors.email && touched.email ? (
                        <p style={{ color: "red" }} className="form-error">{errors.email}</p>
                    ) : null}
                </div>

                <div class="form-outline mb-4">
                    <input type="password"
                        autoComplete="off"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur} class="form-control" />
                    <label class="form-label">Password</label>
                    {errors.password && touched.password ? (
                        <p style={{ color: "red" }} className="form-error">{errors.password}</p>
                    ) : null}
                </div>

                <div class="form-outline mb-4">
                    <input type="password"
                        autoComplete="off"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="Confirm Password"
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur} class="form-control" />
                    <label class="form-label">  Confirm Password</label>
                    {errors.confirm_password && touched.confirm_password ? (
                        <p style={{ color: "red" }} className="form-error">{errors.confirm_password}</p>
                    ) : null}
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">Place order</button>
            </form>
        </>
    )
}

export default Registration