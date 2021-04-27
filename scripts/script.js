const url = "https://trygvegrant.no/wp-json/wp/v2/posts/?_embed";
const out = document.querySelector(".blog");

blob = (blogs) => {
    console.log(blogs);
    out.innerHTML = "";
    for (blog of blogs) {
        console.log(blog)
        let nyBlog = `
        <div>
        <h2>${blog.title.rendered}</h2>
        <p>${blog.content.rendered}</p>
        <p>${blog.featured_media}</p>
        </div>
        `;
        out.innerHTML += nyBlog;
    }
}

fetch(url)
    .then(response => response.json())
    .then(data => blob(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Something went wrong..."
    })

