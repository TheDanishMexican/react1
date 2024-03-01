import UserForm from '../components/UserForm'
import { BaseProps } from '../types'
import { useState } from 'react'
import { User } from '../data/data'

export default function FormUncontrolled({ title }: BaseProps) {
    const [submittedUser, setSubmittedUser] = useState<User | null>()

    function onSubmitUser(newUser: User) {
        setSubmittedUser(newUser)
    }

    return (
        <>
            <div style={{ backgroundColor: 'yellow' }}>
                <h2>{title}</h2>
                <div style={{ backgroundColor: 'lightblue', margin: 20 }}>
                    <UserForm
                        title="User Form Uncontrolled"
                        onSubmitUser={onSubmitUser}
                    />
                </div>
                {submittedUser && (
                    <>
                        <p>Name: {submittedUser.name}</p>
                        <p>Email: {submittedUser.email}</p>
                        <p>
                            Status:{' '}
                            {submittedUser.isActive ? 'Active' : 'Offline'}
                        </p>
                    </>
                )}
            </div>
        </>
    )
}
