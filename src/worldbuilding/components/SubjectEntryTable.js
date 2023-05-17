import React, { useState, useEffect } from "react";
import Table from "../../shared/Components/PageComponents/Table";

const SubjectEntryTable = (props) => {
  const tableTemplate = {
    tableStyle: "subject-entry-table",
    headingSyle: "table-cell",
    headingList: [
      { text: "", style: "img-heading" },
      { text: "Name", style: "name-heading table-text" },
      { text: "Records", style: "records-heading table-text" },
      { text: "", style: "edit-token-heading" },
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
          },
          {
            style: "table-text page-body",
            hasImg: false,
            imgSrc: "",
            tag: "entry-name",
            displayData: [], // Needs to be name
          },
          {
            style: "table-text page-body",
            hasImg: false,
            imgSrc: "",
            tag: "entry-descriptions",
            displayData: [
            ],
          },
          {
            style: "edit-icons",
            hasImg: false,
            token: true,
            imgSrc: "",
            tag: "event-token",
          },
        ],
      },
    ],
  };

  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  const [tableToDisplay, setTableToDisplay] = useState(tableTemplate);

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
            },
            {
              style: "table-text page-body",
              hasImg: false,
              imgSrc: "",
              tag: "entry-name",
              displayData: [props.tableData[i].subjectName], // Needs to be name
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
            {
              style: "edit-icons",
              hasImg: false,
              token: true,
              imgSrc: "",
              tag: "event-token",
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
    // <div></div>
    <Table
      table={tableToDisplay}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export default SubjectEntryTable;
