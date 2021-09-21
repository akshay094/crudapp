import { createContext, useState } from "react";
import "./styles.css";
import Users from "./api";
import Table from "./components/Table";
import Form from "./components/Form";
export const Context = createContext();

export default function App() {
  let [data, setData] = useState(Users);
  let [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    password: ""
  });
  return (
    <Context.Provider value={{ Users, data, setData, user, setUser }}>
      <Form />
      <Table />
    </Context.Provider>
  );
}
