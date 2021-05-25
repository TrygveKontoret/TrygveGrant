const query = document.location.search;
const parameter = new URLSearchParams(query);
const id = parameter.get("id");



const url = `https://trygvegrant.no/wp-json/wp/v2/posts/${id}?_embed=true`;
const out = document.querySelector(".posts");
const loading = document.querySelector(".loading");

postDetail = (details) => {
    console.log(details);
    document.title = `${details.title.rendered} | Star Blogs`
        let media = details._embedded["wp:featuredmedia"]
        for (images of media){
            console.log(images);
            let nyDetail = `
            <div>
            <h2>${details.title.rendered}</h2>
            <img class="bigger" src="${images.media_details.sizes.medium.source_url}" alt="Movie poster">
            <p>${details.content.rendered}</p>
            </div>
            `
            out.innerHTML += nyDetail;
        }
}



fetch(url)
    .then(response => response.json())
    .then(data => postDetail(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Seems like the rebels won"})
    .finally(()=> loading.style.display="none");

const biggerimg = document.querySelector(".bigger");
console.log(biggerimg);
