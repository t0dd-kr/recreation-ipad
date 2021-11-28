<script setup>
  import { ref } from 'vue'
  import { supabase } from '@/supabase'

  let people = ref([])
  async function getPeople() {
    let { data, error } = await supabase.from('peoples').select('*')
    people.value = [1,2,3,4].map(type => data.filter(person => person.type === type))
  }

  let currentSlide = ref(-1)
  let currentCategory = ref(0)

  function setCategory(i) {
    if(currentCategory.value == i) {
      currentCategory.value = 0
      currentSlide.value = -1
    } else {
      currentCategory.value = i
      currentSlide.value = -1
    }
  }

  getPeople()
</script>

<template>
  <div class="flex">
    <ToggleButton @click="setCategory(category)" :value="currentCategory == category" v-for="(category, c) in 4" :key="category">{{ category }}</ToggleButton>
  </div>
  <div class="slide flex center" @click="currentCategory != -1 ? currentSlide += 1 : null">
    <template v-if="currentCategory == 0">
      인물 퀴즈
    </template>
    <template v-else>
      <template v-if="currentSlide == -1">
        {{ currentCategory }}
      </template>
      <template v-else>
        <template v-if="people[currentCategory - 1][currentSlide]">
          <img 
            :src="`https://nymjbuqzqsfavybzsxds.supabase.in/storage/v1/object/public/recreation/people/${people[currentCategory - 1][currentSlide].type}/${people[currentCategory - 1][currentSlide].image}`" 
            style="height: 100%; max-width: 100%;"
          >
        </template>
        <template v-else-if="currentSlide >= 15 && people[currentCategory - 1][currentSlide - 15]">
          <div class="flex column">
            <img 
              :src="`https://nymjbuqzqsfavybzsxds.supabase.in/storage/v1/object/public/recreation/people/${people[currentCategory - 1][currentSlide - 15].type}/${people[currentCategory - 1][currentSlide - 15].image}`" 
              style="height: calc(100% - 400px); max-width: 100%;"
            >
            <div class="flex center" style="font-size: 100px;">
              {{ people[currentCategory - 1][currentSlide - 15].name }}
            </div>
          </div>
        </template>
        <template v-else>
          끝!
        </template>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .slide {
    margin-top: 30px;
    width: 100%;
    height: calc(100% - 90px - 55px);
    background-color: var(--primary);
    color: #fff;
    font-size: 180px;
    font-weight: 900;
    user-select: none;
  }
</style>