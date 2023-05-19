import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Post } from './Post'

export const AllPosts = ({ posts }) => {
    const [previewPosts, setpreviewPosts] = useState([])

    useEffect(()=>{
        setpreviewPosts(posts)
    }, [posts])

    return (
        <Container>
            {previewPosts.map((post) => {
                return <Post key={post._id} postData={post}/>
            })}
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;
    background: #cc4343;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 100%;
    box-sizing: border-box;
`