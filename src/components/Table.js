import React from 'react';
import classes from "./Table.module.css"

import Recruitment from "../components/table-components/Recruitment"
import TandA from "../components/table-components/TandA";
import PendingClearence from "../components/table-components/PendingClearence"

const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Criteria</th>
                    <th>Week 1</th>
                    <th>Week 2</th>
                    <th>Week 3</th>
                    <th>Week 4</th>
                    <th>Total</th>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <th>Recruitment</th>
                    <td><Recruitment/></td>
                    <td><Recruitment/></td>
                    <td><Recruitment/></td>
                    <td><Recruitment/></td>
                    <td><Recruitment/></td>
                    
                </tr>
                <tr>
                <th>Quotation</th>
                <td><TandA/></td>
                <td><TandA/></td>
                <td><TandA/></td>
                <td><TandA/></td>
                <td><TandA/></td>
                </tr>
                <tr>
                <th>Active advisors</th>
                <td><TandA/></td>
                <td><TandA/></td>
                <td><TandA/></td>
                <td><TandA/></td>
                <td><TandA/></td>
                </tr>

                <tr>
                    <th>Pending Clearence</th>
                    <td><PendingClearence/></td>
                    <td><PendingClearence/></td>
                    <td><PendingClearence/></td>
                    <td><PendingClearence/></td>
                    
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
