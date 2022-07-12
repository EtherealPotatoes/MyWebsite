// BLANK
const htmlElement = `
<div class="flex-item card">

<div class="card-header">
    <h3>Blog 3</h3>
</div>

<div class="card-content">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. 
    <a href = "./pages/read/read.html">
        go to read page
        </a>
</div>
</div>
`;

const blogList = document.getElementById("blog-list")
console.log(blogList)

blogList.innerHTML = htmlElement;

let blogLists = [
    {
        title: "Blog1"
    },  {
        title: "Blog2"
    },  {
        title: "Blog3"
    }
]
