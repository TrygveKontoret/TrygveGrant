const url = "https://trygvegrant.no/wp-json/wp/v2/posts?_embed=true&per_page=100";
const out = document.querySelector(".carousel");
const loading = document.querySelector(".loading");


fetch(url)
    .then(response => response.json())
    .then(data => blogPosts(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Something went wrong..."})
    .finally(()=> loading.style.display="none");


blogPosts = (blogs) => {
    console.log(blogs);
        for (blog of blogs) {
            let media = blog._embedded["wp:featuredmedia"]
            for (imgs of media){
                console.log(imgs);
                let nyBlog = `
                <div>
                    <a href="/details.html?id=${blog.id}"><h2>${blog.title.rendered}</h2></a>
                    <div class="imgContainer">
                    <a href="/details.html?id=${blog.id}"><img src="${imgs.media_details.sizes.medium.source_url}" alt="Movie poster"></a>
                    </div>
                </div>
                `;
                out.innerHTML += nyBlog;
            }
    }
}