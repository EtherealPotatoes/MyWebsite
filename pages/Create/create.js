import * as firebase from "../../firebase/firebase.js"

const blog = {
  title: "",
  description: "",
  author: "Byron de Villiers",
  dateCreated: new Date().toDateString(),
  img: "https://www.alliedmoulded.com/wp-content/uploads/Happy-Test-Screen-01-825x510-1.png",
  content: [],
};

const form = document.getElementById("needs-validation");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await _submit();
});

function updateBlogObject() {

let blogImg = document.getElementById("blog-img");
let blogTitle = document.getElementById("blog-title");
let blogDescription = document.getElementById("blog-description");
let blogIntro = document.getElementById("blog-intro");
let blogBody = document.getElementById("blog-body");
let blogConclusion = document.getElementById("blog-conclusion");

blog.title=blogTitle.value
blog.description=blogDescription.value

const headers = ["Introduction", "Body", "Conclusion"]
const content = [blogIntro.value, blogBody.value, blogConclusion.value]

  for (let i = 0; i < 3; i++) {
    const contentObject = {}
    contentObject.sectionHeader = headers[i]
    contentObject.sectionText = content[i]
    blog.content[i] = contentObject
  }
}

async function _submit() {
  updateBlogObject();
  // Create:
  try {
    const docRef = await firebase.firestore.addDoc(
      firebase.firestore.collection(firebase.db, "blog-posts"),
      blog
    );
    console.log("Document written with ID: ", docRef.id);  

    window.location.assign("../../index.html");
  } catch (e) {
    console.error("Error adding document: ", e);
    alert(e)
  }
}
      const toastLiveExample = document.getElementById("liveToast");
      if (toastTrigger) {
        toastTrigger.addEventListener("click", () => {
          const toast = new bootstrap.Toast(toastLiveExample);
          toast.show();
        });
      }
    }
  }
  
