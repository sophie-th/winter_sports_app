<script>
  import TopBar from "../components/TopBar.svelte";
  import Banner from "../components/Banner.svelte";
</script>

<div class="flex-wrapper">
  <div class="header">
    <TopBar />
  </div>
  <div class="content">
    <Banner />
  </div>
</div>

<style>
  .flex-wrapper {
    /* min-height: 100%;
    position: relative;
    height: 100%; */

    display: flex;
    min-height: 100vh;
    flex-direction: column;
    
    /*this doesn't work*/
    /* justify-content: flex-start; */ 
    /* box-sizing: border-box; */
  }

  .header {
    /* make header stay on top of page at all times */
    position: sticky;
    top: 0;

    /* make header stay in front of all items */
    z-index: 2;
  }

  .content {
    z-index: 0;  /* make header stay in front of all items */
  }

  .container { /* contains category tab and checkout history */
    text-align: center;

    /* positions category tab and checkout history side-by-side */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* flex: 1; */

    /* flex: 1 1 auto; */
    height:100%;
  }

  #category-tab {
    width: 250px;    /* this is needed in order to get flex-grow to work */
    background: #154734;
    align-self: flex-start;

    display: flex;
    flex-direction: column;
    flex-grow: 1000;
    /* flex: 1 1 auto; */
    height: 100%;
  }

  .display-section {
    flex-grow: 100;   /* expands the width of checkout history to fill the remaining width  */
  }
  </style>