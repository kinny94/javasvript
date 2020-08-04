const posts = [
    { title: 'Post one', body:'this is post one' },
    { title: 'Post one', body:'this is post one' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts();
createPost({ title: 'Post three', body:'this is post 3' }, getPosts);