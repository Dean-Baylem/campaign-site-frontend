import React, { useState, useEffect } from "react";
import Table from "../../shared/Components/PageComponents/Table";
import "./SubjectEntryTable.css"



const SubjectEntryTable = (props) => {
  const tableTemplate = {
    tableStyle: "subject-entry-table",
    headingSyle: "table-cell",
    headingList: [
      { text: "", style: "img-heading" },
      { text: "Name", style: "name-heading table-text" },
      { text: "Records", style: "records-heading table-text" },
    ],
    tableData: [
      {
        rowStyle: "subject-entry",
        cells: [
          {
            style: "event-img",
            hasImg: true,
            imgSrc:
              "https://fastly.picsum.photos/id/736/600/400.jpg?hmac=zAKOwuTzcDBL4AZltOSkrukG_BvEkN7_u-sr14sJP7Y", // Needs to be the image stored.
            tag: "event-img",
            displayData: [],
            indexValue: 0,
          },
          {
            style: "table-text page-body",
            hasImg: false,
            imgSrc: "",
            tag: "entry-name",
            displayData: [], // Needs to be name
            indexValue: 0,
          },
          {
            style: "table-text page-body",
            hasImg: false,
            imgSrc: "",
            tag: "entry-descriptions",
            displayData: [],
            indexValue: 0,
          },
          {
            style: "edit-icons",
            hasImg: false,
            token: true,
            imgSrc: "",
            tag: "event-token",
            indexValue: 0, // Used to identify the row when clicked!
          },
        ],
      },
    ],
  };

  const [tableToDisplay, setTableToDisplay] = useState(tableTemplate);

  const handleEdit = (index) => {
    props.selectEntry(props.tableData[index.cells[1].indexValue]);
  };


  useEffect(() => {
    const loadTable = async () => {
      let allData = [];
      for (let i = 0; i < props.tableData.length; i++) {
        const data = {
          rowStyle: "subject-entry",
          cells: [
            {
              style: "event-img",
              hasImg: true,
              imgSrc:
                "https://fastly.picsum.photos/id/736/600/400.jpg?hmac=zAKOwuTzcDBL4AZltOSkrukG_BvEkN7_u-sr14sJP7Y", // Needs to be the image stored.
              tag: "event-img",
              displayData: [],
              indexValue: i,
            },
            {
              style: "table-text page-body",
              hasImg: false,
              imgSrc: "",
              tag: "entry-name",
              displayData: [props.tableData[i].subjectName], // Needs to be name
              indexValue: i,
            },
            {
              style: "table-text page-body",
              hasImg: false,
              imgSrc: "",
              tag: "entry-descriptions",
              displayData: props.tableData[i].records.map(
                (record, index) => record.recordTitle
              ),
            },
          ],
        };
        allData.push(data);
      }
      setTableToDisplay({ ...tableToDisplay, tableData: allData });
    };
    loadTable();
  }, [props.tableData]);

  return (
    <React.Fragment>
      <Table
        clickable={true}
        table={tableToDisplay}
        handleEdit={handleEdit}
      />
    </React.Fragment>
  );
};

export default SubjectEntryTable;
