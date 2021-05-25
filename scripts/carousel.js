const url = "https://trygvegrant.no/wp-json/wp/v2/posts?_embed=true&per_page=8";
const out = document.querySelector(".carousel-slide");
const carouselContainer = document.querySelector(".carousel")
const loading = document.querySelector(".loading");
// const carouselDiv = document.querySelector(".card");


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
                <div class="card">
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


// buttons

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter

let counter = 0;
const size = carouselContainer.clientWidth;

out.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listener

nextBtn.addEventListener('click', ()=>{
    out.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    out.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    out.style.transition = "transform 0.4s ease-in-out";
    counter--;
    console.log(counter);
    out.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

out.addEventListener('transitionend', ()=>{
    console.log('Fired');
});