<template>
    <!-- Site footer -->
    <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <h6>Calendar</h6>
              <div class=" calendar"></div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Help</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <h6>Contact</h6>
              <ul class="footer-links">
                <li><i class="fa fa-home"></i>
                  <p> Iran, Tehran</p>
                </li>
                <li><i class="fa fa-envelope"></i>
                  <p>mahsaaa.rajabpour@gmail.com</p>
                </li>
                <li><i class="fa fa-phone"></i>
                  <p>021-99999999</p>
                </li>

              </ul>
            </div>
          </div>
          <hr>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-sm-12">
              <p>Copyright &copy; 2020 All Rights Reserved by <a href="">XXX</a></p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <ul class="social-icons">
                <li><a class=" gitlab" target="_blank" href="https://gitlab.com/mahsaaa.rajabpour/vue-js"><i class="fab fa-gitlab"></i></a></li>
                <li><a class=" github" href="#"><i class="fab fa-github"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

.site-footer {
    background-color: #191919;
    border-top: 3px solid #C2983D;
    padding: 20px 0 20px;
    font-size: 15px;
    line-height: 24px;
    align-items: center;
    color: #737373;

}

.container {
    padding-top: 30px;

}

.site-footer hr {
    border-top-color: #bbb;
    opacity: 0.5
}

.site-footer hr.small {
    margin: 20px 0
}

.site-footer h6 {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px
}

.site-footer a {
    color: #737373;
}

.site-footer a:hover {
    color: #C2983D;
    text-decoration: none;
}

.footer-links {
    padding-left: 0;
    list-style: none
}

.footer-links li {
    display: block
}

.footer-links a {
    color: #737373
}

.footer-links p {
    display: inline-block;
}

.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
    color: #C2983D;
    text-decoration: none;
}

.footer-links.inline li {
    display: inline-block
}

.site-footer .social-icons {
    text-align: right
}

.site-footer .social-icons a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d
}

@media (min-width: 768px) and (min-height:1024px ) {
  .site-footer{
    position: absolute;
    bottom: 0;
    width: 100%;

  }
}

@media (max-width:767px) {
    .site-footer {
        padding-bottom: 0
    }
    .site-footer .social-icons {
        text-align: center
    }
}

.social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}

.social-icons li {
    display: inline-block;
    margin-bottom: 4px
}

.social-icons li.title {
    margin-right: 15px;
    text-transform: uppercase;
    color: #96a2b2;
    font-weight: 700;
    font-size: 13px
}

.social-icons a {
    background-color: #eceeef;
    color: #818a91;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear
}

.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
    color: #fff;
    background-color: #29aafe
}

.social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px
}

.social-icons a.facebook:hover {
    background-color: #3b5998
}

.social-icons a.github:hover {
    background-color: white;
    color: black;
}

.social-icons a.gitlab:hover {
    color: #fa7035;
    background-color: #382a64;
}
</style>