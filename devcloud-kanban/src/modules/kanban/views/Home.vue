<template>
  <div class="view-container">
    <Hello msg="hello"></Hello>
    <World msg="world"></World>

    <p>{{ 0.12 | percent }}</p>

    <Button @click="$wait.start('test')">Test loading</Button>
    <Spin v-if="$wait.is('test')"></Spin>

    <pre>
      <code>
        {{ post | json }}
      </code>
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getPostById } from '../api';

export default {
  filters: {
    json: v => JSON.stringify(v, null, '  '),
  },
  computed: {
    ...mapState(['post']),
  },

  mounted() {
    this.fetchPosts();
  },

  methods: {
    fetchPosts() {
      this.$waitData(getPostById(1), 'post');
    },

    $waitData(req, key) {
      this.$set(this.$store.state, key, {
        status: 'loading',
        data: null,
        message: null,
      });

      const value = this.$store.state[key];

      return req.then(res => {
        value.data = res;
        value.status = 'success';
      }).catch(err => {
        value.status = 'failure';
        value.message = err.message;
      });
    },
  },
};
</script>
