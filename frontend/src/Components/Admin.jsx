import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useGetAdminQuery } from 'states/api';
import Header from 'usabled/Header';


const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "$1$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

function Admin() {
const {data,isLoading}=useGetAdminQuery()
console.log('data:', data)

  return (
    <Box m='1.5rem 2.5rem'>
      <Header title='ADMINS' subtitle='managing admins and list of admins ' />
      <Box  mt='40px' height='75vh'>
      <DataGrid
        loading={isLoading||!data}
        getRowId={(row)=>row._id}
        rows={data?.admins||[]}
        columns={columns}
        ></DataGrid>
      </Box>
    </Box>
  )
}

export default Admin
