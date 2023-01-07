import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const HomeScreen = ({ match }) => {
    const feedBackList = useSelector((state) => state.feedBackList)
    const dispatch = useDispatch()

    useEffect(() => {
        //dispatch(listFeedBacks())
    }
    , [dispatch])

    return (
        <div>
            <h1>FeedBacks</h1>
            <Link to='/create-feedback'>Create Feedback</Link>
        </div>
    )
}

export default HomeScreen