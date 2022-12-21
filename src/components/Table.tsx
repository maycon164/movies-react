import { Table as FluidTable, ColumnProps } from "react-fluid-table"
import { TableContainer } from "./styled-components/TableContainer"

const columns: ColumnProps[] = [
    {
        key: 'name',
        header: 'Name',
        content: ({ row }) => row.name
    },
    {
        key: 'email',
        header: 'Email',
        content: ({ row }) => row.email
    }

]

export const Table = () => {
    return (
        <TableContainer>
            <FluidTable columns={columns} data={[{ name: 'Maycon', email: 'maycon@gmail.com' }]} />
        </TableContainer>
    )
}


