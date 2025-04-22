import { useState } from "react";
import "./Table.css";

const Table = () => {
    const [sort, setSort] = useState({ keyToSort: 'ID', direction: 'asc'});

    const headers = [
      {
        id: 1,
        KEY: "ID",
        LABEL: "id",
      },
      {
        id: 2,
        KEY: "FIRSTNAME",
        LABEL: "firstName",
      },
      {
        id: 3,
        KEY: "LASTNAME",
        LABEL: "lastName",
      },
      {
        id: 4,
        KEY: "JOBTITLE",
        LABEL: "jobTitle",
      },
      {
        id: 5,
        KEY: "EMAIL",
        LABEL: "email",
      }
    ]
  
    const data = [
      {
        ID: 1,
        FIRSTNAME: "Amaya",
        LASTNAME: "Torphy",
        JOBTITLE: "Legacy Group Facilitator",
        EMAIL: "Rosie_Mann@gmail.com",
      },
      {
        ID: 2,
        FIRSTNAME: "Weston",
        LASTNAME: "Huel",
        JOBTITLE: "Regional Data Agent",
        EMAIL: "Tristian_Vandervort68@yahoo.com",
      },
      {
        ID: 3,
        FIRSTNAME: "Bridgette",
        LASTNAME: "Corwin",
        JOBTITLE: "Internal Usability Officer",
        EMAIL: "Sherman.Purdy@hotmail.com",
      }
    ]

    function handleHeaderClick(header) {
        //console.log(header)
        setSort({
            keyToSort: header.KEY,
            direction:
                header.KEY === sort.keyToSort ? sort.direction === 'asc' ? 'desc' : 'asc' : 'desc'
        })
    }

    function getSortedArray(arrayToSort) {
        if (sort.direction === 'asc') {
            return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1))
        }
        return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1))
    }
  
    return (
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} onClick={() => handleHeaderClick(header)}>
                <span>{header.LABEL}</span>
                
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {getSortedArray(data).map((row, index) => (
                <tr key={index}>
                    {headers.map((header, index) => {
                        return (
                            <td key={index}>
                                {row[header.KEY]}
                            </td>
                        )
                    })}
                </tr>
            ))}
        </tbody>
      </table>
    )
  }
  
  export default Table