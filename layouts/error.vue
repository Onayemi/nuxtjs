<template>
  <div>
      <div class="container text-center">
        <h1>{{ error.statusCode }} Page not found!</h1>
      </div>
  </div>
</template>

<script>
export default {
  layout:'error-layout',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>