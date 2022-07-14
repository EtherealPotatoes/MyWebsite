const blog = {
    title: "",
    description: "",
    author: "Byron de Villiers",
    dateCreated: new Date().toDateString(),
    img: "https://www.alliedmoulded.com/wp-content/uploads/Happy-Test-Screen-01-825x510-1.png",
    content: [
      {
        sectionHeader: "",
        sectionText: "",
      },
    ],
  };
  
  let previousWinScroll = 0;
  let numberOfSections = 1;
  let blogImg = document.getElementById("blog-img");
  let blogContent = document.getElementById("blog-content");
  let selectedFile;
  
  const form = document.getElementById("needs-validation");
  form.addEventListener("submit", async (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      await _submit();
    }
  
    form.classList.add("was-validated");
  });
  
  updateView();
  
  function updateView() {
    let header = selectedFile
      ? `
      <div class="image">
        <img class="img-upload" src="${URL.createObjectURL(selectedFile)}">
        <div class="image-close-button text-danger">
          <button type="button" class="btn-close" aria-label="Close" onclick="clearImage()"></button>
        </div>
      </div>`
      : `
      <input style="display: none" id="fileInput" type="file" name="img" onchange="onFileChange()" required/>
      <div class="image add-image" title="Add Image" onclick="fileInput.click()">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </div>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
          Please add an image
      </div>
      `;
  
    let section = "";
    blog.content.forEach((sec, index) => {
      section += `
        <div class="mt-5">
          <div>
            <label for="sectionHeader${index}" class="form-label">Section Header</label>
            <input type="text" class="form-control" id="sectionHeader${index}" aria-describedby="sectionHeader${index}Help" required>
          </div>
          <br />
          <div>
            <label for="sectionText${index}" class="form-label">Section Text</label>
            <textarea type="text" class="form-control" id="sectionText${index}" aria-describedby="sectionText${index}Help" required></textarea>
          </div>
  
          <!-- 
          <br />
          <div style="text-align: center;">
            <img style="height: 400px; width:auto;" src="${sec.sectionImg}">
          </div>
          -->
        </div>
        <br />
      `;
    });
  
    blogImg.innerHTML = header;
    blogContent.innerHTML = section;
    populateForm();
  }
  
  function onScroll() {
    const winScroll = window.scrollY;
    const height =
      window.document.documentElement.scrollHeight -
      window.document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (winScroll > previousWinScroll) {
      document.getElementById("nav-bar").style = "top:-56px";
    } else {
      document.getElementById("nav-bar").style = "top:0px";
    }
    previousWinScroll = winScroll;
    document.getElementById("progress").style = `width: ${scrolled}%`;
  }
  
  function addAnotherSection() {
    updateBlogObject();
    numberOfSections += 1;
    blog.content.push({
      sectionHeader: "",
      sectionText: "",
    });
    updateView();
  }
  
  function onFileChange() {
    selectedFile = document.getElementById("fileInput").files[0];
    updateView();
  }
  
  function clearImage() {
    selectedFile = null;
    updateView();
  }
  
  function updateBlogObject() {
    blog.title = document.getElementById("title").value;
    blog.description = document.getElementById("description").value;
    for (let i = 0; i < numberOfSections; i++) {
      blog.content[i].sectionHeader = document.getElementById(
        "sectionHeader" + i
      ).value;
      blog.content[i].sectionText = document.getElementById(
        "sectionText" + i
      ).value;
    }
  }
  
  function populateForm() {
    document.getElementById("title").value = blog.title;
    document.getElementById("description").value = blog.description;
    for (let i = 0; i < numberOfSections; i++) {
      document.getElementById("sectionHeader" + i).value =
        blog.content[i].sectionHeader;
      document.getElementById("sectionText" + i).value =
        blog.content[i].sectionText;
    }
  }
  
  async function _submit() {
    updateBlogObject();
    // Create:
    try {
      const storageRef = firebase.Storage.ref(
        firebase.storage,
        selectedFile.name
      );
  
      // 'file' comes from the Blob or File API
      const snapshot = await firebase.Storage.uploadBytes(
        storageRef,
        selectedFile
      );
      const downloadURL = await firebase.Storage.getDownloadURL(snapshot.ref);
      console.log("File available at", downloadURL);
      blog.img = downloadURL;
      const docRef = await firebase.firestore.addDoc(
        firebase.firestore.collection(firebase.db, "blog-posts"),
        blog
      );
      console.log("Document written with ID: ", docRef.id);
  
      window.location.assign("../home/home.html");
    } catch (e) {
      console.error("Error adding document: ", e);
      const toastTrigger = document.getElementById("liveToastBtn");
      const toastLiveExample = document.getElementById("liveToast");
      if (toastTrigger) {
        toastTrigger.addEventListener("click", () => {
          const toast = new bootstrap.Toast(toastLiveExample);
          toast.show();
        });
      }
    }
  }
  