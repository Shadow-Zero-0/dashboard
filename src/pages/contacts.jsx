import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { rows,columns } from "../data/datacontacts";
import Titlepages from "../components/Titlepages";
const Contacts = () => {
    return (
        <div style={{ height: 600, width: "98%" }}>
          <Titlepages title1={'CONTACTS'} title2={"List of Contacts for Future Reference"}/>
        <DataGrid
         slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </div>
    );
}

export default Contacts;
