import { users } from '../data/data'
import { BaseProps } from '../types'
import UserTable from '../components/UserTable'

export default function ListDemo({ title }: BaseProps) {
    return (
        <>
            <h2>{title}</h2>

            {/**After that refactor the table-part into a separate Component and use like this */}
            <UserTable users={users} />
        </>
    )
}
