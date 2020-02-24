import React from 'react';
import PostForm from "./PostForm";
import {Box, Container} from "@material-ui/core";
import PostFeed from "./PostFeed";
import {Authorization} from "../../HOC/Auth/AuthorizationComp";

const PostFormAuth =  Authorization()(PostForm);


const Posts:React.FC = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" alignContent="center" flexDirection="column">

                    <PostFeed/>

                    <PostFormAuth/>
                </Box>
            </Container>
        </>
    );
};

export default Posts;