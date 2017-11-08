<template>
       <md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="light-blue" class="md-large">
          <div class="md-toolbar-container">
            <h2 class="md-title" style="flex: 1">{{title}}</h2>
          </div>
      
          <div class="md-toolbar-container">
            <h2 class="md-title">My Files</h2>
      
            <md-button class="md-fab md-mini">
              <md-icon>add</md-icon>
            </md-button>
          </div>
        </md-whiteframe>
</template>

<script>
export default {
  name: "navbar",
  data: function () {
    return {
      
      }
  },
  props: ['title']
};
</script>

<style lang="scss" scoped>

</style>