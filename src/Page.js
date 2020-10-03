import React from 'react';
import Navbar from './components/Navbar';
import TableUsers from './components/TableUsers';


function Page() {
  return (
    <div className="App">
      <Navbar/>
       <TableUsers/>
    </div>
  );
};

export default Page;
