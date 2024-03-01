import { User } from '../data/data'
import { useState, useEffect } from 'react'

interface userTableProps {
    users: User[]
    editUser: (userID: number) => void
}

export default function UserTable({ users, editUser }: userTableProps) {
    const [usersLocal, setUsersLocal] = useState<User[]>(users)

    function handleEditUser(userID: number) {
        editUser(userID)
    }

    useEffect(() => {
        setUsersLocal(users)
    }, [users])

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.isActive ? 'Yes' : 'No'}</td>
                        <button onClick={() => handleEditUser(item.id || -1)}>
                            Edit
                        </button>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
