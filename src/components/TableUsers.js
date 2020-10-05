import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import '../Styles/TableUsers.css';
const fetch = require('node-fetch');

function TableUsers() {

  const [users, setUsers] = useState([]);
  //const [songs, setSongs] =useState([]);


  const obtUsers = async()=>{
    const response = await fetch("http://localhost:3200/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(()=>{
    obtUsers();
  }, []);

   // const handleSongsFav = async function (e, users){
    // e.preventDefault();
    // setSongs(users.favoriteSongs);
    //};
  
  return (
    <Box m={3}>
  <Grid container  spacing={2} className='container'>
    <Grid item xs={6}   className="tableUser">
        <Box fontFamily="Amaranth"
            fontSize={20}
            align="center"
            color="#00b38f"
            mb={3}>
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
            {users.map((data)=> (
              <TableRow key={data._id}  
              //onClick={(e) => handleSongsFav(e,users)}
               >
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell >{data.mail}</TableCell>
                <TableCell align="center">{data.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>

  <Grid item xs={6} className="tableSong">
      <Box fontFamily="Amaranth"
          fontSize={20}
          align="center"
          color="#00b38f"
          mb={3}>
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
            
              <TableRow
              // key={song._id} 
              >
                <TableCell component="th" scope="row">
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
      
  </Grid>
  </Box>

  );
};

export default TableUsers;