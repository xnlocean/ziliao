<template>
  <div>
    <CanvasBg></CanvasBg>
  </div>
</template>

<script>
import CanvasBg from './components/canvas/index'

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    CanvasBg
  }
}
</script>
<style lang="less">
  
</style>