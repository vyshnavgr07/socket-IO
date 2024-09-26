import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SidebarUsers = ({fun}) => {
  const [users, setUsers] = useState([]); // State to hold user data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  // Fetch users from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/user');
    
        setUsers(response.data.existUser); // Assuming the API returns an array of users
        setLoading(false); // Set loading to false after fetching
      } catch (err) {
        setError(err.message); // Set error message if an error occurs
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <div className="text-white">Loading users...</div>; // Loading message
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>; // Error message
  }

  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      <ul className="space-y-2" >
        {users?.map((user) => (
          <li key={user.id} 
          className="flex items-center p-2 rounded hover:bg-gray-700 cursor-pointer"
          onClick={()=>fun(user)}>
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-xl font-bold">{user?.username}</span>
            </div>
       
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarUsers;
