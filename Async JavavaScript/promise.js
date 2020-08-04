const posts = [
    { title: 'Post one', body:'this is post one' },
    { title: 'Post two', body:'this is post two' }
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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);   
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error occured!');
            }
        }, 2000);
    });
}

createPost({title: 'Post three', body: 'this is post 3'}).then((result) => {
    getPosts();
}, (err) => console.log(err));


// Promise.all
const promise1 = Promise.resolve('Hello World!');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'GoodBye!'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((result) => result.json());

Promise.all([promise1, promise2, promise3, promise4]).then((result) => console.log(result)); 
Promise.race([promise1, promise2, promise3, promise4]).then((result) => console.log(result));
