<template>
  <div id="app">
    <div id="nav">
      <div class="d-flex" id="wrapper" v-bind:class="{ toggled: sidebarHidden }">

        <Sidebar />

        <!-- Page Content -->
        <div id="page-content-wrapper">

          <Topbar />

          <TargetList />

        </div>
        <!-- /#page-content-wrapper -->

      </div>
      <!-- /#wrapper -->
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  
  import Sidebar from './components/sidebar/Sidebar';
  import Topbar from './components/topbar/Topbar';
  import TargetList from './components/target/TargetList';

  export default {
    name: 'App',
    computed: {
      ...mapGetters(['sidebarHidden'])
    },
    components: {
      Sidebar,
      Topbar,
      TargetList
    }
  }
</script>

<style>
</style>
