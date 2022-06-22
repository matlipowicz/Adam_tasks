//! Formik i yup - biblioteki

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

export const FormExample = () => {
    const [quote, setQuote] = useState(null);
    const formik = useFormik({
        initialValues: {
            author: "",
        },
        validationSchema: yup.object().shape({
            author: yup.string().required("Taste jest wymagane"),
        }),
        onSubmit: (values) => {
            axios.get(`https://api.quotable.io/quotes?author=albert-einstein&page=1&limit=1`).then(({ data }) => {
                console.log(data);
                setQuote(data.results[0].content);
            });
        },
    });

    return (
        <div>
            FormExample
            <form onSubmit={formik.handleSubmit}>
                <input name="author" onChange={formik.handleChange} />
                <p>{formik.touched.author && formik.errors.author}</p>
                <button type="submit">Losuj</button>
            </form>
            <div>{quote}</div>
        </div>
    );
};
