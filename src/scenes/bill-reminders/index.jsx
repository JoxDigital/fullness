import { Box, Typography, useTheme } from "@mui/material";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataBills } from "../../data/mockData";
import Header from "../../components/Header";

const BillReminders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "billname",
      headerName: "Bill Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
        field: "billamount",
        headerName: "Amount Due",
        flex: 1,
        renderCell: (params) => (
          <Typography color={colors.greenAccent[500]}>
            ${params.row.billamount}
          </Typography>
        ),
      },

      {
        field: "billduedate",
        headerName: "Due Date",
        flex: 1,
      },
    {
      field: "billnotify",
      headerName: "Reminder",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Bill Reminders" subtitle="List of Due and Past Bill Reminders" />
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
        <DataGrid checkboxSelection rows={mockDataBills} columns={columns} />
      </Box>
    </Box>
  );
};

export default BillReminders;
