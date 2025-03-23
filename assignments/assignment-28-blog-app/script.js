const API_URL = "http://localhost:3000/assignments/assignment-28-blog-app/posts";

document.addEventListener("DOMContentLoaded", () => {
    fetchBlogs();
    
    document.getElementById("blog-form").addEventListener("submit", addBlog);
});

function fetchBlogs() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const blogList = document.getElementById("blog-list");
            blogList.innerHTML = "";
            data.forEach(post => {
                const blogCard = document.createElement("div");
                blogCard.classList.add("blog-card");
                blogCard.innerHTML = `<h3>${post.title}</h3><p>${post.content.substring(0, 50)}...</p>`;
                blogCard.onclick = () => viewPost(post);
                blogList.appendChild(blogCard);
            });
        });
}

function viewPost(post) {
    document.getElementById("blog-list").classList.add("hidden");
    document.getElementById("blog-details").classList.remove("hidden");
    document.getElementById("post-title").innerText = post.title;
    document.getElementById("post-content").innerText = post.content;
}

function goBack() {
    document.getElementById("blog-details").classList.add("hidden");
    document.getElementById("blog-list").classList.remove("hidden");
}

function addBlog(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
    }).then(() => {
        fetchBlogs();
        document.getElementById("blog-form").reset();
    });
}
