import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Table() {
  const [users, setUsers] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getUsers();
  }, [refresh]);

  const deleteEntry = async (id) => {
    try {
      const data = await axios.delete(
        `http://localhost:3000/api/developers/${id}`
      );
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/developers/");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col mt-8">
      <button
        className="p-3 bg-[#03203C] rounded-2xl text-white"
        onClick={() => setRefresh(!refresh)}
      >
        Refresh
      </button>
      <table className="table-auto text-white text-center p-3 my-7">
        <tr className="border-2">
          <th className="px-4 border-2 w-[150px] h-12">Name</th>
          <th className="px-4 border-2 w-[150px] h-12">Tech Stack</th>
          <th className="px-4 border-2 w-[150px] h-12">Company</th>
          <th className="px-4 border-2 w-[150px] h-12">Age</th>
          <th className="px-4 border-2 w-[150px] h-12">Experience</th>
          <th className="px-4 border-2 w-[150px] h-12">Education</th>
          <th className="px-4 border-2 w-[150px] h-12">Role</th>
          <th className="px-4 border-2 w-[150px] h-12">Edit</th>
          <th className="px-4 border-2 w-[150px] h-12">Delete</th>
        </tr>
        {users &&
          users.map((element) => {
            return (
              <tr className="text-white ">
                <td className="border-2">{element.name}</td>
                <td className="border-2">{element.techStack}</td>
                <td className="border-2">{element.currentCompany}</td>
                <td className="border-2">{element.age}</td>
                <td className="border-2">{element.experience}</td>
                <td className="border-2">{element.education}</td>
                <td className="border-2">{element.role}</td>
                <td className="border-2">
                  <Link
                    to={`/edit/${element._id}`}
                    className="p-2 bg-red-500 m-2 w-20 rounded-lg"
                  >
                    Edit
                  </Link>
                </td>
                <td className="border-2">
                  <button
                    className="p-2 bg-red-500 m-2 w-20 rounded-lg"
                    onClick={() => deleteEntry(element._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default Table;
