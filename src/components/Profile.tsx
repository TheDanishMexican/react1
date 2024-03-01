interface ProfileProps {
    name: string
    email: string
    isActive: boolean
    singleLine: boolean
}

function Profile({ name, email, isActive, singleLine }: ProfileProps) {
    if (singleLine) {
        return (
            <>
                <h2>Profile</h2>
                <p>
                    Name: {name}, Email: {email}, Active:{' '}
                    {isActive ? 'Yes' : 'No'}, Single line:{' '}
                    {singleLine ? 'Yes' : 'No'}
                </p>
            </>
        )
    } else {
        return (
            <>
                <h2>Profile</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Active: {isActive ? 'Yes' : 'No'}</p>
                <p>Single line: {singleLine ? 'Yes' : 'No'}</p>
            </>
        )
    }
}

export default Profile
