import React from 'react';
import PostForm from "./PostForm";
import {Box, Container} from "@material-ui/core";

const Posts:React.FC = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" alignContent="center">

                    <PostForm/>

                </Box>
            </Container>
        </>
    );
};

export default Posts;