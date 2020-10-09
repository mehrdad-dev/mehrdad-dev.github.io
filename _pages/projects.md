---
layout: page
title: "Projects"
permalink: /projects
comments: false
imageshadow: true
---
<style>
* {
  box-sizing: border-box;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 45%;
  padding: 0 10px;
  margin-bottom: 15px;
  margin-top: 15px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* padding: 16px; */
  text-align: center;
  background-color: #f1f1f1;
}

</style>

<div class="row">
  <div class="column">
    <a href="https://mehrdad-dev.github.io/ml-andrew-ng/" target="_blank">
    <div class="card">
      <img style="border-radius:10px;" src="assets/images/ml-andrew-github-cover.jpg">
      <p align="left" style="margin-top:10px; margin-left:15px; font-weight: bold;">
      Translating Stanford University Machine Learning Course to Persian 🤖
      </p>
    </div>
    </a>
  </div>

  <div class="column">
    <a href="https://github.com/mehrdad-dev/Jami" target="_blank">
    <div class="card">
      <img style="border-radius:10px; height:181px" src="assets/images/Jami.jpg">
      <p align="left" style="margin-top:10px; margin-left:15px; font-weight: bold;">
      Jami a simple cross platform GUI for play some musical instrument 
      </p>
    </div>
    </a>
  </div>

  <div class="column">
    <a href="https://github.com/mehrdad-dev/kaleh-sabzehi" target="_blank">
    <div class="card">
      <img style="border-radius:10px; height:178px" src="assets/images/Sabzeh.png">
      <p align="left" style="margin-top:10px; margin-left:15px; font-weight: bold;">
      Effect sabzeh norooz with face detection 
      </p>
    </div>
    </a>
  </div>

</div>