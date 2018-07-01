<template>
<div id="nav">
  <router-link v-for="item in menu" :key="item.name"
    :to="{ name: item.name }">{{ item.title }}</router-link>
</div>
</template>

<script>
export default {
  name: 'DevCloudNavbar',
  props: {
    menu: Array,
  },
};
</script>
