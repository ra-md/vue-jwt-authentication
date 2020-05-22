<template>
  <div class="home">
    <Table/>
  </div>
</template>

<script>
  import Table from '@/components/Table';

  export default {
    name: 'Home',
    components: {
      Table
    }
  };
</script>

<style scoped>
  .home {
    padding: 4em 0;
    white-space: nowrap;
    display: grid;
    grid-auto-flow: column;
    overflow-x: auto;
  }

  .home:before,
  .home:after {
    content: '';
    width: 10px;
  }

</style>
