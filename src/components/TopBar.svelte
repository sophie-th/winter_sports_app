<script>
  import Heart from "../../src/images/heart.png"
  import Home from "../../src/images/home.png"
</script>

<header class="flex-container">
<div class="header-left">
  <a href="#/"> <!-- takes user to home page -->
    <img src={Home} class="home" alt="home." />
  </a>
</div>

<div class="header-right">

  <a href="#/saved-guides"> <!-- takes user to cart page -->
    <img src={Heart} class="heart" alt="heart icon." />
  </a>
</div>
</header>

<style>
header {
  background: #354449;
  margin: 0;

  display: flex;
  justify-content: space-between;
  height: 50px;
}

/* div {
  display: inline-block;
} */

.home {
  width: 35px;
  /* padding: 15px; */
  padding-top: 4px;
  padding-left: 5px;

  align-self: flex-start;
}

.heart {
  width: 30px;
  padding-right: 9px;
  padding-bottom: 4px;
}

.account {
  width: 48px;
  padding-bottom: 20px;
  padding-right: 15px;
}

.header-right {
  align-self: flex-end;
  /* flex: 1 1 0%; */
}
</style>