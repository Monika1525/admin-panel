import React, { useState } from "react";
import "./index.css";
import searchIcon from "./search-icon.svg";
import preLoader from "./preloader.gif";
import user from "./data";

function App() {
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setUser(res);
  //       setList(res);
  //     });
  // }, []);

  const [selectedUser, setSelectedUser] = useState(null);

  const onClickItem = (item) => {
    setSelectedUser(item);
  };
  // console.log(selectedUser);

  const [search, setSearch] = useState("");
  const [list, setList] = useState(user);

  const onChangeInput = (e) => {
    const { value } = e.target;
    setSearch(value);

    const newUser = user.filter(
      (i) =>
        i.firstName.toLowerCase().includes(value.toLowerCase()) ||
        i.lastName.toLowerCase().includes(value.toLowerCase())
    );
    setList(newUser);
  };

  return (
    <body>
      <div id="overlay">
        <img src={preLoader} alt="Preloader icon" />
      </div>

      <main>
        <div id="table-section">
          <form action="/">
            <img src={searchIcon} alt="Search Icon" />
            <input
              type="text"
              placeholder="Enter something"
              name="search-box"
              id="search-box"
              value={search}
              onChange={onChangeInput}
            />
          </form>

          <div id="table-wrapper">
            <div id="table-headers">
              <table>
                <thead>
                  <tr>
                    <th className="column1">Id</th>
                    <th className="column2">FirstName</th>
                    <th className="column3">LastName</th>
                    <th className="column4">Email</th>
                    <th className="column5">Phone</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div id="table-data">
              <table>
                <tbody>
                  {list.map((item) => (
                    <tr
                      className={`data-row ${
                        selectedUser && selectedUser.id === item.id
                          ? "active"
                          : null
                      }`}
                      key={item.index}
                      onClick={() => onClickItem(item)}
                    >
                      <td className="column1">{item.id}</td>
                      <td className="column2">{item.firstName}</td>
                      <td className="column3">{item.lastName}</td>
                      <td className="column4">{item.email}</td>
                      <td className="column5">{item.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <!-- Details box --> */}

        <div id="info-wrapper">
          <h1>Details</h1>
          <p>Click on a table item to get detailed information</p>
          {selectedUser && (
            <div id="info-content">
              <div>
                <b>User selected:</b> {selectedUser.firstName}{" "}
                {selectedUser.lastName}
              </div>
              <div>
                <b>Description: </b>
                <textarea
                  value={selectedUser.description}
                  cols="50"
                  rows="5"
                  readonly
                ></textarea>
              </div>
              <div>
                <b>Address:</b> {selectedUser.address.streetAddress}
              </div>
              <div>
                <b>City:</b> {selectedUser.address.city}
              </div>
              <div>
                <b>State:</b> {selectedUser.address.state}
              </div>
              <div>
                <b>Zip:</b> {selectedUser.address.zip}
              </div>
            </div>
          )}
        </div>
      </main>
    </body>
  );
}

export default App;
