import { GridColDef } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  handleDelete: (id: string) => void;
}
const Columns = ({ handleDelete }: Props): GridColDef[] => {
  return [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <IconButton onClick={() => handleDelete(`${params.row.name}`)}>
              <Tooltip title="Delete" placement="top">
                <DeleteIcon />
              </Tooltip>
            </IconButton>
          </>
        );
      },
    },
  ];
};

export default Columns;
