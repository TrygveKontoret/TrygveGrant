const url = "https://trygvegrant.no/wp-json/wp/v2/posts?_embed=true&per_page=10";
const urlMore = "https://trygvegrant.no/wp-json/wp/v2/posts?_embed=true&per_page=2&offset=10"
const out = document.querySelector(".blogPosts");
const loading = document.querySelector(".loading");
const viewMore = document.querySelector(".more");


fetch(url)
    .then(response => response.json())
    .then(data => blogList(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Something went wrong..."})
    .finally(()=> loading.style.display="none");


blogList = (blogs) => {
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
                ${imgs.caption.rendered}
                </div>
                `;
                out.innerHTML += nyBlog;
            }
    }
}

viewMore.addEventListener("click", ()=> {
    fetch(urlMore)
    .then(response => response.json())
    .then(data => blogList(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Something went wrong..."})
    .finally(()=> loading.style.display="none", viewMore.style.display="none");
})