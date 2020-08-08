<template>
  <div class="home">
    <h1 v-if="loading">Loading...</h1>
    <h1 v-else-if="errors" class="error-message">{{ errors }}</h1>
    <h1 v-else-if="customers.length === 0">0 Data</h1>
    <div v-else class="home__table">
      <Table :customers="customers"/>
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
    data() {
      return {
        loading: true
      };
    },
    created() {
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
        this.$store.dispatch(`customerModule/${FETCH_CUSTOMERS}`)
          .then(() => {
            this.loading = false;
          });
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
