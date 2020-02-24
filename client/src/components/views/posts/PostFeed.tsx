import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../../action/postActions";
import {Avatar, Card, CardContent, CardHeader} from "@material-ui/core";

const PostFeed: React.FC = () => {
    const dispatch = useDispatch();
    const posts: any = useSelector<any>(state => state.post.posts);

    useEffect(function () {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <>
            <div style={{marginTop: 10}}>
                {posts.map((item:any,index:number) => (
                    <Card key={item._id} style={{marginTop: 10}}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe">
                                    {item.user.name[0]}
                                </Avatar>
                            }
                            title={item.user.name}
                            subheader="SSS"
                        />
                        <CardContent>
                            <p>{item.text}</p>
                        </CardContent>
                    </Card>
                ))
                }
            </div>
        </>
    );
};

export default PostFeed;