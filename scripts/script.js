const url = "https://trygvegrant.no/wp-json/wp/v2/posts?_embed=true";
const out = document.querySelector(".blog");


fetch(url)
    .then(response => response.json())
    .then(data => blob(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Something went wrong..."
    }
    )

    blob = (blogs) => {
        console.log(blogs);
            for (blog of blogs) {
                let media = blog._embedded["wp:featuredmedia"]
                for (imgs of media){
                    console.log(imgs);
                    let nyBlog = `
                    <div>
                    <h2>${blog.title.rendered}</h2>
                    <p>${blog.content.rendered}</p>
                    <img src="${imgs.source_url}" alt="YOYO">
                    </div>
                    `;
                    out.innerHTML += nyBlog;
                }
        }
    }