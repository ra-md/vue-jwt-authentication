<template>
  <div class="home">
    <h1 v-if="customers.length === 0">Loading...</h1>
    <div v-else class="home__table">
      <span class="error-message" v-if="errors">{{ errors }}</span>
      <Table v-else :customers="customers"/>
    </div>
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
        customers: state => state.customerModule.customers,
        errors: state => state.customerModule.errors
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
    text-align: center;
  }

  .home__table {
    white-space: nowrap;
    display: grid;
    grid-auto-flow: column;
    overflow-x: auto;
  }

  .home__table:before,
  .home__table:after {
    content: '';
    width: 10px;
  }

</style>
