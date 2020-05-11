<template>
  <div class="topnav">
    <router-link to="/" tag="a">Home</router-link>
    <router-link to="/Todos" tag="a">Todos</router-link>
    <router-link to="/DoneTodos" tag="a">DoneTodos</router-link>
  </div>
</template>

<style lang="scss" scoped>
.topnav {
  overflow: hidden;
  background-color: #333;
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
      background-color: #ddd;
      color: black;
    }
  }
}
</style>
