const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];


window.onload = function () {
  const main = document.querySelector("main");
  let content = "";
  if (main) {
    for (let i = 0; i < posts.length; i++) {
      content += fixValues(
        posts[i].avatar,
        posts[i].post,
        posts[i].likes,
        posts[i].username,
        posts[i].comment,
        i
      );
    }
  }
  //console.log(content);
  
  main.innerHTML += content;
};

function toggleLike(heartIcon) {
  const isLiked = heartIcon.getAttribute("data-liked") === "true";
  const count = heartIcon.getAttribute("data-count");
  const likesElement = document.getElementById(`likes-${count}`);

  let currentLikes = parseInt(likesElement.textContent); // "21 likes" -> 21

  if (isLiked) {
    // Unlike
    heartIcon.setAttribute("data-liked", "false");
    heartIcon.src = "images/icon-heart.png";
    currentLikes -= 1;
  } else {
    // Like
    heartIcon.setAttribute("data-liked", "true");
    heartIcon.src = "images/icon-heart-filled.jpg";
    currentLikes += 1;
  }

  likesElement.textContent = `${currentLikes} likes`;
}




function fixValues(avatar, post, likes, username, comment, count) {
  return `<header>
        <div class="container space-between">
            <img id="logo" class="logo" src="images/logo.png" alt="instagram logo">
            <img id="avatar" class="icon" src="${avatar}" alt="User avatar">
        </div>
    </header>
    <section>
        <div class="container">
            <img id="post" class="potrait" src="${post}" alt="Post image" />
        </div>
    </section>
    <footer>
        <div class="container">
            <div class="footer-images">
                <img onclick="toggleLike(this)" data-liked="false" data-count="${count}" src="images/icon-heart.png" alt="icon of love for like" />
                <img src="images/icon-comment.png" alt="comment icon" />
                <img src="images/icon-dm.png" alt="dm icon" />
            </div>
            <div class="footer-para">
                <p id="likes-${count}" class="bold">${likes} likes</p>
                <p><span class="bold">${username}</span><span>${comment}</span></p>
            </div>
            <div class="gap"></div>
        </div>
    </footer>`;
}
