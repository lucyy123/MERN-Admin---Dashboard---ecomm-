import { Box, } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { useGetTransactionsQuery } from 'states/api'
import DataGridCustomToolbar from '../usabled/DataGridCustomToolbar'
import Header from '../usabled/Header'




function Transactions() {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(20)
  const [sort, setSort] = useState({})
  const [search, setSearch] = useState('')

  const [searchInput, setSearchInput] = useState('')


  const { data, isLoading } = useGetTransactionsQuery({
    page, pageSize, sort: JSON.stringify(sort), search
  })

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.length
      },
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 0.4,
      renderCell: (params) => {
        return `$${Number(params.value).toFixed(2)}`
      }
    },

  ];

  return (
    <Box m='1.5rem  2rem '>
      <Header title='Transactions' subtitle='All Transactions of Users' />
      <Box mt='40px' height='75vh' >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          columns={columns}
          // eslint-disable-next-line no-mixed-operators
          rows={data && data?.transactions || []}
          rowCount={(data && data?.total) || 0}
          pagination
          rowsPerPageOptions={[20,50,100]}
          paginationMode='server'
          page={page}
          pageSize={pageSize}
          onPageChange={(newPage) => setPage(newPage)}
          sortingMode='server'
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(newSortModel)}
          components={{
            Toolbar: DataGridCustomToolbar
          }}
         componentsProps={{
          toolbar:{searchInput,setSearchInput,setSearch}
         }}

        ></DataGrid>
      </Box>

    </Box>
  )
}

export default Transactions
