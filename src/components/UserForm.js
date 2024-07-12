import React, { useState, useEffect } from "react";
import { createUser, updateUser } from "../api/userApi";

const UserForm = ({ fetchUsers, currentUser, setCurrentUser, onClose }) => {
  console.log("current", currentUser);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (currentUser && currentUser.dob) {
      setFormData((prevData) => ({
        ...prevData,
        dob: formatDate(currentUser.dob),
        name: currentUser.name,
        email: currentUser.email,
        address: currentUser.address,
      }));
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser) {
      await updateUser(currentUser._id, formData);
    } else {
      await createUser(formData);
    }
    fetchUsers();
    setFormData({ name: "", dob: "", email: "", address: "" });
    setCurrentUser(null);
    onClose();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        {currentUser ? "Update" : "Add"}
      </button>
    </form>
    </div>
    
  );
};

export default UserForm;
