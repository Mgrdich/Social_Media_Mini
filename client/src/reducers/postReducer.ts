interface IPost {
    posts: Array<any>;
    post: any;
    loading: boolean;
}

const initalState: IPost = {
    posts: [],
    post: {},
    loading: false
};

export default function (state = initalState, action: any) {
    switch (action.type) {
        
        default:
            return state;
    }
}