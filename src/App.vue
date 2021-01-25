<template>
  <div>
    导航
    <router-link to="/">1</router-link>
    <span> | </span>
    <router-link to="/2">2</router-link>
  </div>
  <hr/>
  <router-view ></router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>
