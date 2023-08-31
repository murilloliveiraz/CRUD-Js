const miniTwitter = {
    users: [
        {
            username: 'murilloxz',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'murilloxz',
            content: 'Meu primeiro tweet'
        }
    ],
};

//CREATE

function createPost(dados){
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    })
}

createPost({owner: 'murilloxz', content: 'Segundo tweet'});
createPost({owner: 'murilloxz', content: 'Terceiro tweet'});

//READ
function returnPosts() {
    return miniTwitter.posts
}
console.log(returnPosts())

//UPDATE
function updateContent(id, editedContent) {
    const postThatWillBeUpdated = returnPosts().find((post) => {
        return post.id ===id;
    });
    console.log(postThatWillBeUpdated)
    postThatWillBeUpdated.content = editedContent;
}

updateContent(1, 'Novo conteudo do post')
console.log(returnPosts())


//DELETE
function deletePost(id) {
    const postList = returnPosts().filter((post) => {
        return post.id !== id;
    })
    miniTwitter.posts = postList;
}

deletePost(1);
console.log(returnPosts());