import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, ButtonGroup, Container, Dropdown, Table } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { useNavigate } from 'react-router';
// import './index.css';

const getData = () => {

  const data = localStorage.getItem("empData");

  if (data != null) {

    return JSON.parse(data);

  }
  else {

    return [];
  }

}

function Viewcontact() {

  const [empData, setEmpData] = useState(getData());
  const navigate = useNavigate();
  const [serchdata, setsearchdata] = useState({
    search: ''
  });
  const [option, setoption] = useState([]);


  const handleEdit = (id, index) => {
    const data = getData();
    const singlerecord = data.filter((d) => {
      return d.id === id;
    })
    navigate('/edit', { state: { single: singlerecord[0], index: index } });
  }
  const handleview = (id, index) => {
    const data = getData();

    const singlerecord = data.filter((d) => {
      return d.id === id;
    })
    navigate('/viewdata', { state: { single: singlerecord[0], index: index } });
  }


  const handlefilter = (e) => {

    let value = e.target.value;
    let nData = getData();

    if (value != -1) {
      const filteredData = nData.filter((empData) => {
        return value === empData.course
      })
      setEmpData(filteredData);
    }
    else {
      setEmpData(nData)
    }

  }
  const handleSearch = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setsearchdata({ [name]: val });
    let myData = getData()

    let searchdata = myData.filter((data) => {
      return data.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
    })
    setEmpData(searchdata)

  }
  const handlesort = (type) => {
    let alldata = getData()
    if (type === "ase") {
      let sortdata = alldata.sort((empA, empB) => {
        return empA["name"].localeCompare(empB["name"])
      })
      setEmpData(sortdata)
    }
    else {
      let sortdata = alldata.sort((empA, empB) => {
        return empB["name"].localeCompare(empA["name"])
      })
      setEmpData(sortdata)
    }
  }
  const handleDelete = (id) => {
    const data = getData();

    const deleterecord = data.filter((d) => {
      return d.id != id
    })

    localStorage.setItem("empData", JSON.stringify(deleterecord));
    setEmpData(deleterecord)


  }
  useEffect(() => {
    const allData = getData();
    const uniqueCources = [...new Set(allData.map(data => data.course))];
    setoption(uniqueCources);

  }, []);


  return (
    <Container>
      <div className=" m-3 justify-content-between align-items-center d-flex">
        <select onChange={(e) => handlefilter(e)} >
          <option value={-1}>All Course</option>
          {
            option.map((opt) => {
              return (
                <option value={opt}> {opt}</option>
              )
            })
          }
        </select>
        <div className="">
          <input type="text" className='' placeholder='search' onChange={(e) => handleSearch(e)} />
        </div>
        <div className="">
          <td>
            <button type='submit' onClick={(e) => { handlesort("ase") }}>A-Z</button>
          </td>
          <td>
            <button type='submit' onClick={(e) => { handlesort("dse") }}>Z-A</button>

          </td>

        </div>

      </div>
      <Table>
        <thead>
          <tr>
            <th>ID </th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CONTACT</th>
            <th>COURSE</th>
            <th>PASSWORD</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>

          {
            empData.map((data, index) => {

              return (
                <>
                  <tr>
                    <td>{
                      data.id
                    }</td>
                    <td>
                      {
                        data.name
                      }
                    </td>
                    <td>
                      {
                        data.email
                      }
                    </td>
                    <td>
                      {
                        data.contact
                      }
                    </td>

                    <td>{
                      data.course
                    }</td>

                    <td>
                      {
                        data.password
                      }
                    </td>
                    <td>
                      {/* <Button type='submit' className='btn btn-success' onClick={() => handleEdit(data.id, index)}>Edit</Button>
                      <Button type='submit' className='btn btn-danger' onClick={() => handleDelete(data.id)}>Delete</Button> */}
                      {/* <i class="fa-solid fa-bars"></i> */}
                      <Dropdown as={ButtonGroup}>
                        {/* <a><i class="fa-solid fa-ellipsis"></i></a> */}

                        <DropdownToggle split variant="light" />

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => handleEdit(data.id, index)}>Edit</Dropdown.Item>
                          <Dropdown.Item onClick={() => handleview(data.id, index)}>view</Dropdown.Item>
                          <Dropdown.Item onClick={() => handleDelete(data.id)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>



                    </td>

                  </tr>
                </>
              )
            })

          }
        </tbody>
      </Table>
    </Container>
  )
};

export default Viewcontact