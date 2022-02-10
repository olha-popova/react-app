let rerenderEntireTree = () => {
    console.log('State was changed')
};

let state = {
    profilePage: {
        posts: [
            {
                message: 'Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.',
                likesCount: 20
            },
            {
                message: 'My first post',
                likesCount: 15
            }
        ],
        newPostText: ['']
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'Golden Pheasant',
                profilepic: 'http://gamebirdfowl.com/wp-content/uploads/bb-plugin/cache/Red-Golden-Pheasant-square.jpg'
            },
            {
                id: 2,
                name: 'Scarlet Macaw',
                profilepic: 'https://parrotoutreachsociety.org/wp-content/uploads/2018/06/scarlet-macaw-square.jpg'
            },
            {
                id: 3,
                name: 'Keel-billed Toucan',
                profilepic: 'https://smhttp-ssl-49071.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/9/59037585_5.jpg'
            },
            {
                id: 4,
                name: 'Hyacinth Macaw',
                profilepic: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Hyacinth-Macaw-300x300.jpg'
            },
            {
                id: 5,
                name: 'Blue Jay',
                profilepic: 'http://s3.amazonaws.com/production.mediajoint.prx.org/public/piece_images/314020/Blue-Jay-Pat-Hemlepp-285_small.jpg'
            }
        ],
        messages: [
            {
                id: 1,
                message: 'Hey!',
                name: 'Zosterops lateralis',
                profilepic: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200'
            },
            {
                id: 2,
                message: 'How are you?',
                name: 'Keel-billed Toucan',
                profilepic: 'https://smhttp-ssl-49071.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/9/59037585_5.jpg'
            },
            {
                id: 3,
                message: 'Wanna have some sleep :(',
                name: 'Zosterops lateralis',
                profilepic: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200'
            },
        ],
        newMessageText: ['']
    },
    newsPage: {
        news: [
            {
                name: 'Keel-billed Toucan',
                profilepic: 'https://smhttp-ssl-49071.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/9/59037585_5.jpg',
                date: 'Yesterday at 20:30',
                message: 'Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.',
                likesCount: 20
            },
            {
                name: 'Golden Pheasant',
                date: '6 October at 20:30',
                profilepic: 'http://gamebirdfowl.com/wp-content/uploads/bb-plugin/cache/Red-Golden-Pheasant-square.jpg',
                message: 'My first post',
                likesCount: 15
            },
            {
                name: 'Hyacinth Macaw',
                date: '3 h',
                profilepic: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Hyacinth-Macaw-300x300.jpg',
                message: 'Plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.',
                likesCount: 4
            },
            {
                name: 'Blue Jay',
                date: '29 August at 12:08',
                profilepic: 'http://s3.amazonaws.com/production.mediajoint.prx.org/public/piece_images/314020/Blue-Jay-Pat-Hemlepp-285_small.jpg',
                message: 'Hello React!',
                likesCount: 75
            }
        ],
    },
    sidebar: {
        friends: [
            {
                id: 1,
                name: 'Golden Pheasant',
                profilepic: 'http://gamebirdfowl.com/wp-content/uploads/bb-plugin/cache/Red-Golden-Pheasant-square.jpg'
            },
            {
                id: 2,
                name: 'Scarlet Macaw',
                profilepic: 'https://parrotoutreachsociety.org/wp-content/uploads/2018/06/scarlet-macaw-square.jpg'
            },
            {
                id: 3,
                name: 'Keel-billed Toucan',
                profilepic: 'https://smhttp-ssl-49071.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/9/59037585_5.jpg'
            },
            {
                id: 5,
                name: 'Hyacinth Macaw',
                profilepic: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Hyacinth-Macaw-300x300.jpg'
            },
            {
                id: 4,
                name: 'Blue Jay',
                profilepic: 'http://s3.amazonaws.com/production.mediajoint.prx.org/public/piece_images/314020/Blue-Jay-Pat-Hemlepp-285_small.jpg'
            },
        ],
    }
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
        name: 'Keel-billed Toucan',
        profilepic: 'https://smhttp-ssl-49071.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/9/59037585_5.jpg'
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // observer
};

export default state;