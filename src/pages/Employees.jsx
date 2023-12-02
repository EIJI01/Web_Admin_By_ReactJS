import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Page,
  Sort,
  ContextMenu,
  Inject,
  ExcelExport,
  PdfExport,
  Search,
  Edit,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { employeesData, employeesGrid } from "../data/dummy";

const Employees = () => {
  return (
    <div className="bg-white m-2 md:m-10 p-2 md:p-10 rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Page,
            Sort,
            ContextMenu,
            ExcelExport,
            PdfExport,
            Edit,
            Search,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
