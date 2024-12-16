import { DataGrid } from "@mui/x-data-grid";
import { rows,columns } from "../data/datainvoices";
import Titlepages from "../components/Titlepages";
const Invoices = () => {
    return (
        <div style={{ height: 600, width: "98%" }}>
          <Titlepages title1={'INVOICES'} title2={'List of Invoice Balances'}/>
        <DataGrid
       checkboxSelection
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </div>
    );
}

export default Invoices;
