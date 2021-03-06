<template>
  <div>
      <h4>Error 404</h4>
  </div>
</template>

<script>
export default {
    asyncData({ redirect }){
        return redirect("/auth/")
    }
}
</script>

<style>

</style>