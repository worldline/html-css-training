<template>
  <header>
    HTML/CSS Training
    <div class="logo">
      <img src=""/>
    </div>
    <span class="share-menu">
      Repository
      <a class="share-github" type="github" href="#"></a>
    </span>
  </header>
</template>

<style scoped>
header {
  padding: 12px 15px 11px 35px;
  color: #888;
  text-align: left;
}

.logo {
  cursor: default;
  transform: scale(.2);
  position: absolute;
  top: 12px;
  left: 10px;
  color: #888;
}

.share-menu {
  float: right;
  padding-right: 8px;
}

.share-menu a {
  text-decoration: none;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 12px;
  display: block;
  float: right;
  margin-left: 5px;
  position: relative;
  opacity: .5;
  top: -2px;
  transition: opacity .1s ease-out;
}

.share-menu a:last-child {
  margin-left: 8px;
}

.share-menu a:hover {
  opacity: .75;
}

.share-menu .share-github {
  background-image: url(../assets/images/icon-github.svg);
}

.share-menu .share-twitter {
  background-image: url(../assets/images/icon-twitter.svg);
}

.share-menu .share-facebook {
  background-image: url(../assets/images/icon-facebook.svg);
}

.share-menu .share-email {
  background-image: url(../assets/images/icon-email.svg);
}

.share-menu a:hover {
  color: rgba(255,255,255,.5);
}

</style>