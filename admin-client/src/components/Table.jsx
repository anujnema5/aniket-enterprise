import React from "react";
import { useUsersQuery } from "../features/api/authSlice";
import { useDispatch } from "react-redux";
import { logout } from "../features/slices/adminSlice";
import { useNavigation } from 'react-router-dom'

function Table() {
  const { data, isError, isFetching, isLoading, error } = useUsersQuery();
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <p>Loading ...</p>
    )
  }

  if (isError) {
    console.log(error)
    return null
  }

  const users = data.data;

  const handleLogout = () => {
    dispatch(logout())
    window.location.href = '/sign-in'
  }

  return (
    <>
      <section className="">
        <div className="container ">
          <div className="row d-flex flex-row bd-highlight mb-3">
            <h1 className="text-center pt-4"> User Information</h1>
            <button type="button" class="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>


          <div className="row mt-4">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Service Interested In</th>
                  <th scope="col">Messsage</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.mobileNumber}</td>
                    <td>{user.email}</td>
                    <td>{user.service}</td>
                    <td>{user.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Table;
