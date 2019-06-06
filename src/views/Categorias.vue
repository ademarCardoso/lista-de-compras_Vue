<template>
  <div>
    <div class="hero is-light">
      <div class="hero-body">
        <h1 class="title">Categorias</h1>
      </div>
    </div>
    <section class="section">
      <table class="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Descricao</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.description}}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<script>
import cateories from '../services/categories'
export default {
  name: 'Categorias',
  data () {
    return {
      items: []
    }
  },

  async mounted () {
    try {
      const result = await cateories.getAll()
      this.items = result.data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
