import React, { useState } from 'react'
import styled from 'styled-components'
import { Post } from './Post'

export const AllPosts = () => {
    const [posts, setPosts] = useState([{ id: "Dsadqrqfasd12rfds", thumbnail: "", title: "BMW X5 2022" }, { id: "Dsadqrqfasd12drfds", thumbnail: "", title: "BMW" }, { id: "Dsadqrqfasad12rfds", thumbnail: "", title: "BMW X5 2022" },])

    return (
        <Container>
            {posts.map((post) => {
                return <Post key={post.id} title={post.title} thumbnail={post.thumbnail} />
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