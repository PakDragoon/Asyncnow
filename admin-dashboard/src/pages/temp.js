import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@mui/material';
import axios from 'axios';

function createData(name, username, email, phone, website) {
  return { name, username, email, phone, website };
}

const rows = [];

export default function DynamicTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then((res) => {
        setData(res.data);
        console.log('Result:', data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.company}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
//
{filteredUsers
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => {
      const { id, name, email, status, company } = row;
      const isItemSelected = selected.indexOf(name) !== -1;

      return (
        <TableRow
          hover
          key={id}
          tabIndex={-1}
          role="checkbox"
          selected={isItemSelected}
          aria-checked={isItemSelected}
        >
          <TableCell padding="checkbox">
            <Checkbox
              checked={isItemSelected}
              onChange={(event) => handleClick(event, name)}
            />
          </TableCell>
          <TableCell component="th" scope="row" padding="none">
            <Stack direction="row" alignItems="center" spacing={2}>
              {/* <Avatar alt={name} src={avatarUrl} /> */}
              <Typography variant="subtitle2" noWrap>
                {name}
              </Typography>
            </Stack>
          </TableCell>
          <TableCell align="left">{email}</TableCell>
          <TableCell align="left">{company}</TableCell>
          <TableCell align="left">
            <Label
              variant="ghost"
              color={(status === 'banned' && 'error') || 'success'}
            >
              {sentenceCase(status)}
            </Label>
          </TableCell>

          <TableCell align="right">
            <UserMoreMenu />
          </TableCell>
        </TableRow>
      );
    })}