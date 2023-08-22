
const postSection = document.getElementById("posts");

// FETCHES JSON FROM DATABASE 

if(document.title == 'Truth Tabernacle of Granite City') {
    $.getJSON('https://api.npoint.io/b7fd23044a1c6c078d51', function(blog_posts) {
        for (let i = 0; i < 3; i++) {
            // creates new post elements
            let newPostContainer = document.createElement("div");
            let newPost = document.createElement("img");
            let newPostText = document.createElement("p");
    
            newPostContainer.classList.add("post-container");
            newPostContainer.setAttribute("id", i);
        
            newPost.classList.add("post");
            newPost.setAttribute("id", i);
            newPost.src = blog_posts[i].img_src;
    
            newPostText.classList.add("post-txt");
            newPostText.setAttribute("id", i);
            newPostText.innerHTML = blog_posts[i].post_txt;
        
            // adds post elements to posts container
            postSection.appendChild(newPostContainer);
            newPostContainer.appendChild(newPost);
            newPostContainer.appendChild(newPostText);
        }
    });
} else {
$.getJSON('https://api.npoint.io/b7fd23044a1c6c078d51', function(blog_posts) {
    for (let i = 0; i < 6; i++) {
        // creates new post elements
        let newPostContainer = document.createElement("div");
        let newPost = document.createElement("img");
        let newPostText = document.createElement("p");

        newPostContainer.classList.add("post-container");
        newPostContainer.setAttribute("id", i);
    
        newPost.classList.add("post");
        newPost.setAttribute("id", i);
        newPost.src = blog_posts[i].img_src;

        newPostText.classList.add("post-txt");
        newPostText.setAttribute("id", i);
        newPostText.innerHTML = blog_posts[i].post_txt;
    
        // adds post elements to posts container
        postSection.appendChild(newPostContainer);
        newPostContainer.appendChild(newPost);
        newPostContainer.appendChild(newPostText);
    }
});
}
