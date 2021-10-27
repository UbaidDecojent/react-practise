import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import EditUser from "./EditUser";


// const Updatename = createContext();

const AddUser = (props) => {
  const [data, setData] = useState([]);

  //add
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [cast, setCast] = useState("");

  let auname = props.auName;
  let email = props.auEmail;
  let cast = props.auCast;

  //add users
  const add_user = () => {
    // console.log(name,email,cast)

    const data = { auname, email, cast };
    fetch("https://retoolapi.dev/AVfIPm/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result);
      getList();
    });
  };

  //show list
  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch("https://retoolapi.dev/AVfIPm/data").then((result) => {
      result.json().then((resp) => {

        setData(resp);
        console.log(resp);
        props.setauName(resp[0].auname);
        props.setauEmail(resp[0].email);
        props.setauCast(resp[0].cast);
        // console.log(props.auName)
      });
    });
  };

  //delete user
  const deleteUser = (id) => {
    fetch(`https://retoolapi.dev/AVfIPm/data/${id}`, {
      method: "DELETE",
    }).then((res) => {
      res.json().then((resp) => {
        console.log(resp);
        getList()
      });
    });
  };

  // update user
  const updateUser = (id) => {
    console.log(data[id - 1]);
  }


  const viewUser = (id) =>{
    alert(id)
  }


  return (
    <div className="add-user">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <span className="add-user-heading">Add Users</span>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-lg-6">
                <span className="lbl-text">Name</span>
                <input
                  type="text"
                  className="user-inpt"
                  // value={name}
                  onChange={(e) => props.setauName(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <span className="lbl-text">Email</span>
                <input
                  type="email"
                  className="user-inpt"
                  value={email}
                  onChange={(e) => props.setauEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-lg-6">
                <span className="lbl-text">Cast</span>
                <input
                  type="text"
                  className="user-inpt"
                  // value={cast}
                  onChange={(e) => props.setauCast(e.target.value)}
                />
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-lg-2">
                <button type="button" className="btn-add" onClick={add_user}>
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-xl-12 col-lg-12">
            <table className="table">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Cast</th>
                <th>Action</th>
              </tr>
              <tbody>
                {
                  data.map((item, i) => (
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.auname}</td>
                      <td>{item.email}</td>
                      <td>{item.cast}</td>
                      <td>
                        <button onClick={() => deleteUser(item.id)}>
                          Delete
                        </button>
                        <button onClick={() => updateUser(item.id)}>
                          update
                          {/* <Link to={"/edituser/" + item.id}>
                          Update
                        </Link> */}
                        </button>
                        <button onClick={()=>viewUser(item.id)}>
                          <Link to={"/edituser/" + item.id}>
                            View
                          </Link>
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <div>
          {/* <Updatename.Provider  value={"ubaid"}>
                <EditUser mydata={name}/>
          </Updatename.Provider> */}
        </div>
      </div>
    </div>
  );
};

export default AddUser;
// export { Updatename };

