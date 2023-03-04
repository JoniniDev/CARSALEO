import React from 'react'
import styled from 'styled-components'
import ContentLoader from "react-content-loader"

export const LoadingBox = () => {
    return (
        <ContentLoader
            speed={2}
            width={960}
            height={462}
            viewBox="70 0 476 300"
            backgroundColor="#e07070"
            foregroundColor="#f0a5a5"
        >
            <rect x="18" y="16" rx="3" ry="3" width="120" height="10" />
            <rect x="18" y="41" rx="3" ry="3" width="80" height="8" />
            <rect x="18" y="55" rx="0" ry="0" width="110" height="110" />
            <rect x="18" y="169" rx="3" ry="3" width="110" height="6" />
            <rect x="18" y="178" rx="3" ry="3" width="110" height="6" />
            <rect x="18" y="188" rx="3" ry="3" width="110" height="18" />
            <rect x="18" y="227" rx="3" ry="3" width="185" height="18" />
            <rect x="18" y="214" rx="3" ry="3" width="110" height="6" />
            <rect x="315" y="17" rx="3" ry="3" width="120" height="10" />
            <rect x="315" y="43" rx="3" ry="3" width="120" height="8" />
            <rect x="315" y="60" rx="3" ry="3" width="120" height="8" />
            <rect x="315" y="79" rx="3" ry="3" width="120" height="8" />
            <rect x="315" y="99" rx="3" ry="3" width="120" height="8" />
        </ContentLoader>
    )
}

