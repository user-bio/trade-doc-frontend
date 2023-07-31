// ** React Imports
import React, { useState, useEffect } from "react";

// ** Table Columns
import ExpandableTable, { getDados, coluns } from "./data";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown } from "react-feather";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, Button } from "reactstrap";

import { httpRequest } from "../../../services/Api";
import { getToken } from "../../../services/Auth";

const DataTablesReOrder = () => {
  let navigate = useNavigate();
  const [dados, setDados] = useState([]);
  // ** States
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    httpRequest(`logs`, {
      method: "GET",
      token: getToken(),
    }).then(res => {
      setDados(res.body);
    });
  }, []);

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      nextLabel=""
      breakLabel="..."
      previousLabel=""
      pageRangeDisplayed={2}
      forcePage={currentPage}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      pageCount={Math.ceil(dados.length / 10) || 1}
      onPageChange={(page) => handlePagination(page)}
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
    />
  );

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="d-flex justify-content-between w-100">
          <CardTitle tag="h4">Logs</CardTitle>
        </div>
      </CardHeader>
      <div className="react-dataTable">
        <DataTable
          noHeader
          pagination
          data={dados}
          expandableRows
          columns={coluns}
          expandOnRowClicked
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          //paginationComponent={CustomPagination}
          paginationDefaultPage={currentPage + 1}
          expandableRowsComponent={ExpandableTable}
          paginationRowsPerPageOptions={[50, 100]}
          paginationPerPage={50}
        />
      </div>
    </Card>
  );
};

export default DataTablesReOrder;
