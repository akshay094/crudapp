import { useContext } from "react";
import { Context } from "../App";

const Form = () => {
  let { user, setUser, data, setData } = useContext(Context);

  let handleChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let handleClick = (e) => {
    if (e.target.name == "submit") {
      if (user.id && user.email && user.username && user.password) {
        let exist = data.filter((v, i) => {
          return v.id == user.id;
        });

        if (exist.length) {
          alert("Duplicate Value");
        } else {
          setData([...data, user]);
        }
      } else {
        alert("please enter the remaining values");
      }
    }

    if (e.target.name == "update") {
      let { id } = user;
      console.log(id);

      let target = null;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
          target = i;
        }
      }
      console.log("target", target);

      if (target === 0 || target) {
        alert("updating row");
        setData((prev) => {
          prev[target].username = user.username;
          prev[target].email = user.email;
          prev[target].password = user.password;
          return prev;
        });
        console.log(data);
      } else {
        alert("Id changed , adding new row");
        setData([...data, user]);
      }
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <br />
        <label>Id</label>
        <br />
        <input
          type="number"
          value={user.id}
          name="id"
          onChange={handleChange}
        />
        <br />
        <label>Username</label>
        <br />
        <input
          type="text"
          value={user.username}
          name="username"
          onChange={handleChange}
        />
        <br />
        <label>email</label>
        <br />
        <input
          type="email"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button name="submit" onClick={handleClick}>
          Submit
        </button>
        <button name="update" onClick={handleClick}>
          Update
        </button>
      </form>
      <br />
      <br />
    </>
  );
};

export default Form;
