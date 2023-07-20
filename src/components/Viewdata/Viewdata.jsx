import React from 'react'
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import '../Viewdata/viewdata.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import profile1 from '../../assets/img/p1.png';

const getData = () => {

  const data = localStorage.getItem("empData");

  if (data != null) {

    return JSON.parse(data);

  }
  else {

    return [];
  }

}

function Viewdata() {

  
  const location = useLocation()
  const ndata2 = location.state.single;

  return (
    <Container>

      <div className="profile-card">

        <div className="profile">
          <img src={profile1} />
        </div>

        <div className="card-t">

          <form action="" >
            <table>
            <tr>
            <td>Full Name :-</td>
            <td>
              <input className='input-view' type="text" value={ndata2.name} disabled />
            </td>
          </tr>
          <tr>
            <td>Email  :- </td>
            <td>
              <input className='input-view' type="text" value={ndata2.email} disabled />
            </td>
          </tr>
          <tr>
            <td>Contact  :-</td>
            <td>
              <input className='input-view' type="text" value={ndata2.contact} disabled/>
            </td>
          </tr>
          <tr>
            <td>Course :-</td>
            <td>
              <input className='input-view' type="text" value={ndata2.course} disabled/>
            </td>
          </tr>
          <tr>
            <td>Std :- </td>
            <td>
              <input className='input-view' type="text" value={ndata2.std} disabled/>
            </td>
          </tr>
          <tr>
            <td>Grid :-</td>
          
              <input className='input-view' type="text" value={ndata2.id} disabled/>
          
          </tr>
          <tr>
            <td> Password :-</td>
            <input className='input-view' type="text" value={ndata2.password} disabled/>
          </tr>
            </table>
          </form>
        </div>

      </div>

    </Container>
  )
}

export default Viewdata