import React from "react";
import "./Add.scss";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useRef } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Add = () => {
  const priceInp = useRef();
  const brandInp = useRef();
  const BrandSchema = Yup.object().shape({
    brand: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    price: Yup.number().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      brand: "",
      price: "",
    },
    validationSchema: BrandSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.post("http://localhost:8080/api/brands", {
        ...values,
      });
      brandInp.current.value = "";
      priceInp.current.value = "";
    },
  });

  return (
    <>
    <HelmetProvider>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
      </Helmet>
    </HelmetProvider>
      
      <div id="add">
        <div>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Brand Name</label>
            <input
              ref={brandInp}
              id="brand"
              name="brand"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.brand}
            />
            {formik.errors.brand && formik.touched.brand ? (
              <div style={{ color: "darkred" }}>{formik.errors.brand}</div>
            ) : null}
            <label htmlFor="lastName">Price</label>
            <input
              ref={priceInp}
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            {formik.errors.price && formik.touched.price ? (
              <div style={{ color: "darkred" }}>{formik.errors.price}</div>
            ) : null}
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
