<template>
  <nav class="bg-dark pg-dark" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" v-if="previousPage > 0"><router-link class="page-link" :to="`/page/${previousPage}`" append replace>↞ Previous ({{ previousPage }})</router-link></li>
      <li class="page-item" v-for="page in pages" :key="page"><router-link class="page-link" :to="`/page/${page}`" append replace>{{page}}</router-link></li>
      <li class="page-item" v-if="nextPage = pages[4]"><router-link class="page-link" :to="`/page/${nextPage}`" append replace>Next ({{ nextPage }}) ↠</router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'WidgetPagination',
    props: ['totalItems', 'perPage'],
    data: function () {
      return {
        pages: []
      }
    },

    computed: {
      // TODO: Load the new page in to the route view and page numbers when clicking on router links.
      // TODO: More reliable default page number logic, < 1, 1.5, NaN, etc.
      currentPage: function () {
        let page = this.$route.params.pageNumber || 1
        return parseInt(page)
      },
      previousPage: function () { return this.currentPage - 1 },
      nextPage: function () { return this.currentPage + 1 },
      finalPage: function () { return Math.ceil(this.totalItems / this.perPage) }
    },

    created: function () {
      // Generate 5 pages starting two before the current one.
      for (let i = -2; i < 3; i++) {
        let thisPage = this.currentPage + i
        if (thisPage + i > 0 && thisPage <= this.finalPage) {
          this.pages.push(thisPage)
        }
      }
    }
  }
</script>

<style scoped>
/* TODO: Figure out if pagination colors are suppored in current backbone beta */
.page-link, .page-link:focus, .page-link:hover {
  background-color: #343a40;
  border-color: #666;
  color: #cf3046;
}

.page-link:hover {
  background-color: #666;
  color: #fff;
}
</style>
