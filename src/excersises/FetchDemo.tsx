import { useEffect, useState } from 'react'
import { BaseProps } from '../types'
const SERVER_URL = 'http://localhost:8000/users'
const DELAY = 500

type User = { id: number; name: string }

//Utility function to fetch a user from the server
async function fetchUser(userId: number, options?: object): Promise<User> {
    const res = await fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options)
    return await res.json()
}

export default function FetchDemo({ title }: BaseProps) {
    const [userId, setUserId] = useState(1)
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)

    //Use this to fetch the next user when the "Next User" button is clicked
    //Make sure you understand why we don't need useEffect here
    const fetchNextUser = async () => {
        const nextUser = user?.id + 1 <= 15 ? user.id + 1 : 1
        //Do not set call setUserId here it will cause an extra render
        setLoading(true)
        const theUser = await fetchUser(nextUser)
        setLoading(false)
        setUser(theUser)
    }

    //Call fetchUser(..) immediately when the component is mounted
    // fetchUser(userId).then((response) => {
    //     setUser(response)
    //     console.log(response)
    // })

    useEffect(() => {
        async function fetchAndSetUser() {
            const response = await fetchUser(userId)
            setUser(response)
        }
        fetchAndSetUser()
    }, [userId])

    useEffect(() => {
        //Det der skal gøres
        //Eventuelt returner en cleanup function
    }, []) //Brug et dependency array

    return (
        <>
            <h2>{title}</h2>
            {loading && <p>Loading...</p>}
            {!loading && JSON.stringify(user)}
            <br />
            <button onClick={fetchNextUser}>Next User</button>
        </>
    )
}
