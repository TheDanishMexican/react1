import { BaseProps } from '../types'
import { User, users as usersDB, getNextId } from '../data/data'
import { useState } from 'react'
import UserTable from '../components/UserTable'
import './liftingState.css'
import UserFormControlled, {
    AddEditDeleteFunction,
} from '../components/UserFormControlled'

export default function LiftingState({ title }: BaseProps) {
    const [users, setUsers] = useState(usersDB)
    const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined)

    const addEditDeleteUser: AddEditDeleteFunction = function (user, isDelete) {
        if (isDelete) {
            setUsers([...users.filter((userItem) => userItem.id !== user.id)])
        } else if (user.id) {
            setUsers([
                ...users.map((userItem) =>
                    userItem.id === user.id ? user : userItem
                ),
            ])
        } else if (!user.id) {
            setUsers([...users, { ...user, id: getNextId() }])
        }
    }

    function editUser(id: number) {
        setUserToEdit(users.find((user) => user.id === id))
        /*
     Find the user (in users) given the id and set userToEdit to this user
    */
    }

    return (
        <>
            <h2>{title}</h2>
            <div className="outer">
                <h2 style={{ margin: 0 }}>Root Component</h2>
                <p style={{ margin: 0 }}>
                    This is where ALL the users live (Single Source of truth).{' '}
                    <em>User Count:</em> <b>{users.length}</b>
                </p>
                <p>
                    <em>User To Edit:</em> <b>{JSON.stringify(userToEdit)}</b>
                </p>

                <div className="outer-user-table">
                    <div className="user-table">
                        <UserTable users={users} editUser={editUser} />
                    </div>
                    <div className="user-form">
                        <UserFormControlled
                            title="Add User"
                            onSubmitUser={addEditDeleteUser}
                            userToEdit={userToEdit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
