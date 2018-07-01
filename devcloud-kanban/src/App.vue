<template>
  <div id="app">
    <DevCloudNavbar :menu="menuData"></DevCloudNavbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          name: 'kanban',
          title: 'Kanban',
        },
      ],
    };
  },
};
</script>
