import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../Styles/TableUsers.css';

function TableUsers() {

  const [users, setUsers] = useState([]);

  const obtenerUsers = async()=>{
    const response = await fetch("http//localhost:3200/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(()=>{
    obtenerUsers();
  });

  const handleClick = async (e,user)=> {
    e.preventDefault();
    console.log('se hizo click en el usuario', user);

  };


  return (
  <div className='container'>
    <div className="tableUser">
      <Typography>Usuarios</Typography>
       <TableContainer  className='container-table-user'  component={Paper}>
      <Table oneClick={handleClick} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Edad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((users)=> (
            <TableRow key={users._id} >
              <TableCell component="th" scope="row">
               
              </TableCell>
              <TableCell align="right">{users.name}</TableCell>
              <TableCell align="right">{users.lastName}</TableCell>
              <TableCell align="right">{users.mail}</TableCell>
              <TableCell align="right">{users.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>

<div className="tableSong">
<Typography>Canciones favoritas</Typography>

    <TableContainer className='container-table'  component={Paper}>
      <Table oneClick={handleClick} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Album</TableCell>
            <TableCell align="right">Duracion</TableCell>
            <TableCell align="right">Artista</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((users)=> (
            <TableRow key={users._id} >
              <TableCell component="th" scope="row">
               
              </TableCell>
              <TableCell align="right">{users.name}</TableCell>
              <TableCell align="right">{users.lastName}</TableCell>
              <TableCell align="right">{users.mail}</TableCell>
              <TableCell align="right">{users.age}</TableCell>
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