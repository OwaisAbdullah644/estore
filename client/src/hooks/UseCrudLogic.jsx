// hooks/useCrudLogic.js
import { useState, useEffect, useCallback } from "react";
import axios from 'axios';

const useCrudLogic = (resourceConfig) => {
  const {
    fetchEndpoint,     // e.g., '/categories'
    addEndpoint,       // e.g., '/addcategory'
    updateEndpoint,    // e.g., '/updatecategory'
    deleteEndpoint,    // e.g., '/deletecategory'
    initialFormState,  // e.g., { name: '', description: '', image: null }
    idField = '_id',   // Default MongoDB ID
    name = 'Item'      // For logs
  } = resourceConfig;

  // States
  const [dataList, setDataList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);  // Bonus: Loading state

  // Fetch list
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080${fetchEndpoint}`);
      setDataList(response.data);
      console.log(`${name} fetched`);
    } catch (error) {
      console.log(`Error fetching ${name}:`, error);
    } finally {
      setLoading(false);
    }
  }, [fetchEndpoint, name]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Form change handler (text/files)
  const handleChange = useCallback((e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  }, []);

  // Prepare edit (populate form, clear file)
  const handleEdit = useCallback((item) => {
    setEditId(item[idField]);
    setFormData({
      ...initialFormState,
      ...item  // Override with item fields
    });
    // Ensure file is null for new upload
    setFormData(prev => ({ ...prev, image: null }));  // Adjust 'image' if your field is different
    console.log(`Updated form for ${name} edit:`, formData);
  }, [initialFormState, idField, name]);

  // Create
  const createItem = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        formDataToSend.append(key, value);
      }
    });
    try {
      await axios.post(`http://localhost:8080${addEndpoint}`, formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(`${name} inserted`);
      setFormData(initialFormState);
      fetchData();
    } catch (error) {
      console.log(`Error inserting ${name}:`, error);
    } finally {
      setLoading(false);
    }
  }, [formData, initialFormState, addEndpoint, fetchData, name]);

  // Update
  const updateItem = useCallback(async (e) => {
    e.preventDefault();
    if (!editId) return;  // Safety
    setLoading(true);
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        formDataToSend.append(key, value);
      }
    });
    try {
      await axios.post(
        `http://localhost:8080${updateEndpoint}/${editId}`,
        formDataToSend,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      console.log(`${name} updated`);
      setFormData(initialFormState);
      setEditId(null);
      fetchData();
    } catch (error) {
      console.log(`Error updating ${name}:`, error);
    } finally {
      setLoading(false);
    }
  }, [formData, initialFormState, updateEndpoint, editId, fetchData, name]);

  // Delete
  const deleteItem = useCallback(async (id) => {
    if (!confirm(`Delete this ${name}?`)) return;  // Simple UX confirm
    setLoading(true);
    try {
      await axios.delete(`http://localhost:8080${deleteEndpoint}/${id}`);
      console.log(`${name} deleted`);
      fetchData();
    } catch (error) {
      console.log(`Error deleting ${name}:`, error);
    } finally {
      setLoading(false);
    }
  }, [deleteEndpoint, fetchData, name]);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setEditId(null);
  }, [initialFormState]);

  return {
    dataList,
    formData,
    editId,
    loading,
    fetchData,    // Manual refresh
    handleChange,
    handleEdit,
    createItem,
    updateItem,
    deleteItem,
    resetForm
  };
};

export default useCrudLogic;