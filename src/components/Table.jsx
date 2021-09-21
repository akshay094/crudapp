import { useContext, useEffect } from "react";
import { Context } from "../App";

const Table = () => {
  let { setUser, data, setData } = useContext(Context);

  const handleClick = (event) => {
    if (event.target.innerText === "Delete") {
      setData((prev) => prev.filter((val, idx) => val.id != event.target.name));
    }
    if (event.target.innerText === "Edit") {
      let toUpdate = data.filter((val, idx) => {
        return val.id == event.target.name;
      });
      setUser(toUpdate[0]);
    }
  };

  return (
    <table
      align="center"
      cellPadding={1}
      cellSpacing={1}
      border={1}
      onClick={handleClick}
    >
      <thead>
        <th>Id</th>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
      </thead>
      <tbody>
        {data.map((val, idx) => {
          return (
            <tr>
              <td key={val.id.toString()}>{val.id}</td>
              <td key={val.id.toString()}>{val.username}</td>
              <td key={val.id.toString()}>{val.email}</td>
              <td key={val.id.toString()}>{val.password}</td>
              <td>
                <button name={val.id}>Edit</button>
              </td>
              <td>
                <button name={val.id}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
