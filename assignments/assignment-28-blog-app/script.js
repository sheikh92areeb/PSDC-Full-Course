console.log("Let's Start Scripting with JavaScript");

// Initialize Variables
let apiUrl = "http://localhost:3000/posts";
let blogPosts = document.querySelector(".blog-posts")
let blogForm = document.getElementById("blog-form");
let idInput = document.getElementById("postId");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let publishInput = document.getElementById("publish");
let contentInput = document.getElementById("content");
let postPreview = document.querySelector(".read-post-container");

// Fetching and Display Blogs
async function fetchBlogs() {
    blogPosts.innerHTML = "";

    const data = await fetch(apiUrl);
    const response = await data.json();

    response.forEach(post => {
        const div = document.createElement("div")
        div.setAttribute("class","post")
        div.innerHTML = `
            <h2 class="title">${post.title}</h2>
            <p class="content">${post.content}</p>
            <div class="action">
                <div class="btn">
                    <button onclick="readPost('${post.id}')">Read More</button>
                </div>
                <div class="stags">
                    <span>${Math.floor(Math.random() * 999)} views</span>
                    <span>${post.author}</span>
                    <span>${post.publish}</span>
                </div>
            </div>`;

        blogPosts.appendChild(div);
    });
}

// Add And Update Post
blogForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = idInput.value;
    const title = titleInput.value;
    const author = authorInput.value;
    const publish = publishInput.value;
    const content = contentInput.value;

    const body = {title, author, publish, content}

    if (id) {
        // Update Post
        await fetch(`${apiUrl}/${id}`, {
            method:"PUT",
            headers:  { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
    } else {
        // Add Post
        await fetch(apiUrl, {
            method:"POST",
            headers:  { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
    }

    blogForm.reset();
    fetchBlogs();

})

// Edit Post
async function editPost(id) {
    const data = await fetch(`${apiUrl}/${id}`);
    const response = await data.json();

    idInput.value = response.id;
    titleInput.value = response.title;
    authorInput.value = response.author;
    publishInput.value = response.publish;
    contentInput.value = response.content;

    closePost();
}

// Delete Post
async function deletePost(id) {
    await fetch(`${apiUrl}/${id}`, {method:"DELETE"});
    closePost();
    fetchBlogs();
}

// Read Full Post
async function readPost(id) {
    const data = await fetch(`${apiUrl}/${id}`);
    const response = await data.json();

    postPreview.classList.add("active");
    let post = postPreview.querySelector(".read-post")
    post.innerHTML = `<div class="post-btns">
        <button onclick="editPost('${response.id}')">Edit</button>
        <button onclick="deletePost('${response.id}')">Delete</button>
        <button onclick="closePost()">X</button>
    </div>
    <div class="post-preview">
        <h1 class="title">${response.title}</h1>
        <div class="stags">
            <span>${response.author}</span>
            <span>${response.publish}</span>
        </div>
        <p class="content">${response.content}</p>
    </div>`;
}

// Close Full Post
function closePost() {
    postPreview.classList.remove("active");
}

// Load Data 
fetchBlogs();