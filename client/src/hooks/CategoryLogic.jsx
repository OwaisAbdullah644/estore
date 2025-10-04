// hooks/CategoryLogic.js
import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const CategoryLogic = () => {
  const [fetch, setFetchCate] = useState([]);
  const { id } = useParams();

  const fetchCate = async () => {
    try {
      const response = await axios.get("http://localhost:8080/categories");
      setFetchCate(response.data);
      console.log('Categories fetched:', response.data); // Log to inspect structure
      
      // If editing (id exists), populate cate with matching category
      if (id) {
        // Assuming MongoDB-style _id as string; adjust to 'id' if your backend uses 'id'
        const matchingCategory = response.data.find(cat => cat._id === id);
        if (matchingCategory) {
          setCate({
            name: matchingCategory.name || "",
            description: matchingCategory.description || "",
            image: null // File input starts empty; current image can be shown separately
          });
          console.log('Matching category populated:', matchingCategory);
        } else {
          console.log('No matching category found for ID:', id);
          // Optional: Redirect or show error if no match
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCate();
  }, [id]); // Re-run fetch if id changes

  // Form state
  const [cate, setCate] = useState({
    name: "",
    description: "",
    image: null
  });

  const handleChange = useCallback((e) => {  
    const { name, value, files } = e.target;
    setCate((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  }, []);  

  const insertCate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", cate.name);
    formData.append("description", cate.description);
    formData.append("image", cate.image);
    try {
      const insertedCate = await axios.post("http://localhost:8080/addcategory", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log("Inserted:", insertedCate.data);
      setCate({ name: "", description: "", image: null });
      fetchCate(); // Refresh the list after insert
    } catch (error) {
      console.log("Error inserting category:", error);
    }
  };

  // Updated handleEdit for updating category
  const handleEdit = async (e) => {
    e.preventDefault();
    if (!id) {
      console.log('No ID provided for update');
      return;
    }
    const formData = new FormData();
    formData.append("name", cate.name);
    formData.append("description", cate.description);
    if (cate.image) {
      formData.append("image", cate.image);
    }
    try {
      // Assuming PUT endpoint is /updatecategory/:id with string ID
      const updatedCate = await axios.put(`http://localhost:8080/updatecategory/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log("Updated:", updatedCate.data);
      setCate({ name: "", description: "", image: null });
      fetchCate(); // Refresh the list after update
    } catch (error) {
      console.log("Error updating category:", error);
    }
  };

  return { 
    cate, 
    insertCate, 
    handleChange, 
    fetch, 
    id, 
    handleEdit 
  };
};

export default CategoryLogic;