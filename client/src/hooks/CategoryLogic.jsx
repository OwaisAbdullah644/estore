import { useState } from "react"

import axios from 'axios'

const CategoryLogic = () => {

    const [cate, setCate] = useState({
        name: "",
        description: "",
        image: null
    });

   const handleChange = (e) => {
        const {name, value, files} = e.target;
        setCate((prev) => ({
            ...prev,
            [name]: files ? files[0] : value
        }))
    }

    const insertCate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", cate.name);
        formData.append("description", cate.description);
        formData.append("image", cate.image);
        try {
            const insertedCate = await axios.post("http://localhost:8080/addcategory", formData);
            console.log("Inserted:", insertedCate.data);
            setCate({ name: "", description: "", image: null });
        } catch (error) {
            console.log("Error inserting category:", error);
        }
    }

    return {cate, insertCate, handleChange};
}

export default CategoryLogic