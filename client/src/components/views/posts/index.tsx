import React from 'react';
import PostForm from "./PostForm";
import {Box, Container} from "@material-ui/core";
import PostFeed from "./PostFeed";

const Posts:React.FC = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" alignContent="center" flexDirection="column">

                    <PostFeed/>

                    <PostForm/>
                </Box>
            </Container>
        </>
    );
};

export default Posts;