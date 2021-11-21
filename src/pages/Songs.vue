<script setup>
  import SongBox from '@/components/SongBox.vue'
  import { supabase } from '@/supabase'
  import { ref } from 'vue'

  let songs = ref([])
  async function getSongs() {
    let { data, error } = await supabase.from('songs').select('*')
    songs.value = data
  }

  getSongs()
</script>

<template>
  <div class="flex">
    <div class="flex" style="flex-wrap: wrap">
      <SongBox :song="song" v-for="song in songs"/>
    </div>    
  </div>
</template>

<style lang="scss" scoped>

</style>