<template>
  <div>
    <Scratch :config-params="{}" @on-timeout="test"></Scratch>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    test(vm) {
      // vm.onReload({duration: 1})
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
