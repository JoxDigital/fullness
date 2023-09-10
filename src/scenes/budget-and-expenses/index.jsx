import { Box, Typography, useTheme } from "@mui/material";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTransactions } from "../../data/mockData";
import Header from "../../components/Header";

const BudgetAndExpenses = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [

      {
        field: "transdate",
        headerName: "Date",
        flex: 1,
      },    
      
      {
        field: "transterm",
        headerName: "Category",
        flex: 1,
      },
            
      {
        field: "transdescription",
        headerName: "Description",
        flex: 1,
      },

      {
        field: "transamount",
        headerName: "Amount",
        flex: 1,
        renderCell: (params) => (
          <Typography color={colors.greenAccent[500]}>
            ${params.row.transamount}
          </Typography>
        ),
      },

  ];

  return (
    <Box m="20px">
      <Header title="Budget & Expenses" subtitle="List of Expenses" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTransactions} columns={columns} />
      </Box>
    </Box>
  );
};

export default BudgetAndExpenses;
