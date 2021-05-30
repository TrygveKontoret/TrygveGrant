const query = document.location.search;
const parameter = new URLSearchParams(query);
const id = parameter.get("id");

const url = `https://trygvegrant.no/wp-json/wp/v2/posts/${id}?_embed=true`;
const out = document.querySelector(".posts");
const loading = document.querySelector(".loading");
const kake = document.querySelector(".kake");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const meta = document.querySelector(".meta");

postDetail = (details) => {
    console.log(details);
    document.title = `Star Blogs | ${details.title.rendered}`
    // meta.setAttribute("name", "description");
    meta.setAttribute("content", `${details.excerpt.rendered}`);
    console.log(meta);
        let media = details._embedded["wp:featuredmedia"]
        for (images of media){
            console.log(images);
            let nyDetail = `
            <div>
            <img onClick="funkyModal()" class="bigger" src="${images.media_details.sizes.full.source_url}" alt="${images.alt_text}">
            </div>
            <div>
            <p class="postText">${details.content.rendered}</p>
            </div>
            `
            out.innerHTML += nyDetail;
            kake.innerHTML = `<h1>${details.title.rendered}</h1>`;
            modal.innerHTML = `<img class="modal-img" src="${images.media_details.sizes.full.source_url}" alt="${images.alt_text}">`
        }
};

const funkyModal = ()=> {
    const funky = document.querySelector(".bigger");
    modal.style.display = "flex";
    body.classList.add("modalBody");
    document.documentElement.scrollTop = "0";
};

modal.addEventListener("click", function() {
    modal.style.display = "none";
    body.classList.remove("modalBody");
});

fetch(url)
    .then(response => response.json())
    .then(data => postDetail(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Seems like the rebels won"})
    .finally(()=> loading.style.display="none");