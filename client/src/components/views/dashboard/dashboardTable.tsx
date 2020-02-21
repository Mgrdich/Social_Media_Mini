import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";


interface IDashboardTable {
    thead: Array<string>;
    tbody: Array<string | JSX.Element>;
    data: Array<any>;
    style: any;
    actionHandler?: Function; //should be array in the Future
}

const DashboardTable: React.FC<IDashboardTable> = (props) => {
    return (

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
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow key={row._id}>
                            {
                                props.tbody.map((item: string | any, index: number) => {
                                    if (typeof item === 'string') {
                                        return (<TableCell align="center" key={index}>{row[item]}</TableCell>)
                                    } else {
                                        return (
                                            <TableCell
                                                align="center"
                                                onClick={() => (props.actionHandler) ? props.actionHandler(item._id) : null}
                                                key={index}
                                            >{item}</TableCell>
                                        );
                                    }
                                })
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};

export default DashboardTable;