// BLANK
const htmlElement = `
<div class="flex-item card">

<div class="card-header">
    <h3>TITLE</h3>
</div>

<div class="card-content">
    DESCRIPTION 
    <a href = "./pages/read/read.html?blogID=BLOG_ID">
        go to read page
        </a>
</div>
</div>
`;

const blogList = document.getElementById("blog-list");
console.log(blogList);

//
const blogLists = [
    {
      id: 1,
      title: "blog 1",
      description: "New Blog post",
      author: " Byron",
      dateCreated: new Date(),
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/todo-app-a2a71.appspot.com/o/javascript.png?alt=media&token=70cb3000-1233-471e-8b67-6a0fa1a66505",
      content: [
        {
          sectionHeader: "Intro",
          sectionText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          sectionHeader: "Body",
          sectionText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          sectionHeader: "Conclusion",
          sectionText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
    },
    {
      id: 2,
      title: "blog 2",
      description: "New Blog post",
      author: " Byron",
      dateCreated: new Date(),
      imgURL:
       "https://firebasestorage.googleapis.com/v0/b/todo-app-a2a71.appspot.com/o/javascript.png?alt=media&token=70cb3000-1233-471e-8b67-6a0fa1a66505",
      content: [
        {
          sectionHeader: "Intro",
          sectionText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          sectionHeader: "Body",
          sectionText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          sectionHeader: "Conclusion",
          sectionText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
    },
    {
      id: 3,
      title: "blog 3",
      description: "New Blog post",
      author: " Byron",
      dateCreated: new Date(),
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/todo-app-a2a71.appspot.com/o/javascript.png?alt=media&token=70cb3000-1233-471e-8b67-6a0fa1a66505",
      content: [
        {
          sectionHeader: "Intro",
          sectionText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          sectionHeader: "Body",
          sectionText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          sectionHeader: "Conclusion",
          sectionText:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
    },
  ];
  
  
var htmlPosts = "";
for (let i = 0; i < blogLists.length; i = i + 1) {
  let elementCopy = Object.assign(htmlElement);
  let blog = blogLists[i];
  elementCopy = elementCopy.replace("TITLE", blog.title);
  elementCopy = elementCopy.replace("DESCRIPTION", blog.description);
  elementCopy = elementCopy.replace("BLOG_ID", blog.id);
  htmlPosts += elementCopy;
}
blogList.innerHTML = htmlPosts;
