import React from 'react';
import {Paper, Table, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

interface IDashboardTable {
    thead: Array<string>;
    tbody: Array<string>;
    data: Array<any>;
    style: any;
}

const DashboardTable: React.FC<IDashboardTable> = (props) => {
    return (
        <>
            <TableContainer component={Paper} style={{...props.style}} color="secondary">
                <Table aria-label="simple table" color="primary">
                    <TableHead>
                        <TableRow>
                            {props.thead.map((item: string, index: number) => {
                                return (
                                    <TableCell align="center" key={index}>{item}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    {props.data.map((row) => (
                        <TableRow key={row._id}>
                            {
                                props.tbody.map((item: string, index: number) => {
                                    return (<TableCell align="center">{row[item]}</TableCell>)
                                })
                            }
                        </TableRow>
                    ))}
                </Table>
            </TableContainer>
        </>
    );
};

export default DashboardTable;