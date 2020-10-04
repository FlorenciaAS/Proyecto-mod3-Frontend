import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import '../Styles/TableUsers.css';
const fetch = require('node-fetch');

function TableUsers() {

  const [users, setUsers] = useState([]);
  //const [songs, setSongs] =useState([]);


  const obtUsers = async()=>{
    const response = await fetch("http://localhost:3200/users");
    const dataUsers = await response.json();
    setUsers(dataUsers);
  };

  useEffect(()=>{
    obtUsers();
  }, []);

  
  return (
  <div className='container'>
    <div className="tableUser">
        <Box fontFamily="Amaranth"
            fontSize={20}
            align="center"
            color="#00b38f">
            Usuarios
        </Box>
        <TableContainer  className='container-table-user'  component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Edad</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((dataUsers)=> (
              <TableRow key={dataUsers._id} >
                <TableCell>{dataUsers.name}</TableCell>
                <TableCell>{dataUsers.lastName}</TableCell>
                <TableCell>{dataUsers.mail}</TableCell>
                <TableCell>{dataUsers.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  <div className="tableSong">
      <Box fontFamily="Amaranth"
          fontSize={20}
          align="center"
          color="#00b38f">
          Canciones
      </Box>

      <TableContainer className='container-table'  component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Duracion</TableCell>
              <TableCell>Artista</TableCell>
              <TableCell>Album</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((users)=> (
              <TableRow key={users._id} >
                <TableCell component="th" scope="row">
                
                </TableCell>
                <TableCell>{users.name}</TableCell>
                <TableCell>{users.lastName}</TableCell>
                <TableCell>{users.mail}</TableCell>
                <TableCell>{users.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      
  </div>

  );
};

export default TableUsers;