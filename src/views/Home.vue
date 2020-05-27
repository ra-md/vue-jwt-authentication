<template>
  <div class="home">
    <Table :customers="customers"/>
  </div>
</template>

<script>
  import { FETCH_CUSTOMERS } from '@/store/actions.type';
  import { mapState } from 'vuex';
  import Table from '@/components/Table';

  export default {
    name: 'Home',
    components: {
      Table
    },
    beforeMount() {
      this.fetchData();
    },
    computed: {
      ...mapState({
        customers: state => state.customerModule.customers
      })
    },
    methods: {
      fetchData() {
        this.$store.dispatch(`customerModule/${FETCH_CUSTOMERS}`);
      }
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

  .item {

  }

</style>
