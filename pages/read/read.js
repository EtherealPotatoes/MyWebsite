const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params);

const blogPosts = [
  {
    id: 1,
    title: "Blog 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
    title: "Blog 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
    title: "Blog 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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

const blog = blogPosts.find((x) => x.id == Number(params.blogID));
console.log(blog);

const title = document.getElementById("title");
title.style.marginBottom = "16px";
title.innerText = blog.title;

const description = document.getElementById("description");
description.style.marginBottom = "16px";
description.innerText = blog.description;

const metaData = document.getElementById("meta-data");
metaData.innerText = `Published by ${
  blog.author
} on ${blog.dateCreated.toDateString()}`;

const content = document.getElementById("content");

for (let i = 0; i < blog.content.length; i++) {
  const section = blog.content[i];

  let div = document.createElement("div");
  div.style.marginBottom = "16px";
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let headerTextNode = document.createTextNode(section.sectionHeader);
  let sectionTextNode = document.createTextNode(section.sectionText);

  h3.appendChild(headerTextNode);
  p.appendChild(sectionTextNode);
  div.appendChild(h3);
  div.appendChild(p);
  content.appendChild(div);
}
