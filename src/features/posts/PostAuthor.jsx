import React from 'react'
import { useSelector } from 'react-redux'
import {selectAllUsers} from '../users/usersSlice'

export const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userId)
    return (
        <p className='text-sm text-slate-500'>
            {author ? `by ${author.name}` : 'Unknow author...'}
        </p>
    )
}
