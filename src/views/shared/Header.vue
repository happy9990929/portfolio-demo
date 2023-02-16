<template>
  <header class="header">
    <div class="header_logo_box d-flex align-items-center justify-content-center">
      <router-link to="/" class="header_logo">
        <img src="@/assets/images/logo.png" class="img-fluid" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      Web: "Web",
      Graphic: "Graphic",
      About: "About",
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  z-index: 9;
  @media screen and (min-width: 769px) {
    position: initial;
    height: auto;
  }
}
.header_logo_box {
  height: 55px;
  background-color: #f6f6f6;
  @media screen and (min-width: 769px) {
    height: 90px;
  }
}
.header_logo {
  width: 120px;
  height: 41px;
  @media screen and (min-width: 769px) {
    width: 150px;
    height: 53px;
  }
}
.menu {
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.4s ease;
  @media screen and (min-width: 769px) {
    background-color: #f7f7f7;
    color: #333333;
    position: initial;
    width: 100% !important;
    height: auto;
    align-items: flex-start;
    transition: none;
  }
}

.menuItems {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  width: 100%;
  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: center;
  }
}
.menuItem {
  padding: 1.5em 0;
  min-width: 125px;
  white-space: nowrap;
  cursor: pointer;
  display: block;
  color: #fff;
  &:hover {
    background: #595959;
    color: #fff;
  }
  @media screen and (min-width: 769px) {
    color: #505050;
  }
}
.openMenu {
  position: absolute;
  left: 2%;
  padding: 5px;
  cursor: pointer;
  @media screen and (min-width: 769px) {
    display: none;
  }
}
.closeMenu {
  position: absolute;
  top: 0;
  right: 2%;
  font-size: 40px;
  padding: 5px;
  cursor: pointer;
  @media screen and (min-width: 769px) {
    display: none;
  }
}
</style>
