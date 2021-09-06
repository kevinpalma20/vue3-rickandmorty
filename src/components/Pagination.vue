<template>
  <div class="containerfilter pagination">
    <div class="item" @click="setDiminishPages()">
      -
    </div>
    <div class="item">Page: {{ page }}</div>
    <div class="item" @click="setIncreasePages()">
      +
    </div>
  </div>
</template>

<script>
import {computed, onMounted} from 'vue';
import {useStore} from 'vuex';

export default {
  data() {
    return {};
  },
  setup() {
    const store = useStore();

    const page = computed(() => {
      return store.state.pages;
    });

    const setIncreasePages = () => {
      store.dispatch('setIncreasePages');
      store.dispatch('getCharacters');
    };

    const setDiminishPages = () => {
      store.dispatch('setDiminishPages');
      store.dispatch('getCharacters');
    };

    return {
      setIncreasePages,
      setDiminishPages,
      page,
    };
  },
};
</script>
