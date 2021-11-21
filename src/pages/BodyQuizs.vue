<script setup>
  import { ref } from 'vue'
  let slides = ref([
    ['브레이브걸즈', '슈퍼주니어', '샤이니', '소녀시대', '여자아이들', '방탄소년단', '엑소', '청하', '선미', '여자친구'],
    ['동전', '가위', '파리채', '과도', '테이프', '선글라스', '장갑', '컵홀더', '마우스피스', '자유의여신상'],
    ['소프트볼', '조정', '알파인 스키', '배드민턴', '검도', '철인3종경기', '탁구', '승마', '발야구', '미식축구'],
    ['군인', '판사', '쉐프', '아나운서', '택시기사', '패션모델', '가수', '치어리더', '미용사', '지휘자'],
  ])

  let categories = ref(['가수', '사물', '스포츠', '직업'])

  let currentSlide = ref(-1)
  let currentCategory = ref(-1)

  function setCategory(i) {
    if(currentCategory.value == i) {
      currentCategory.value = -1
      currentSlide.value = -1
    } else {
      currentCategory.value = i
      currentSlide.value = -1
    }
  }
</script>

<template>
  <div class="flex">
    <ToggleButton @click="setCategory(c)" :value="currentCategory == c" v-for="(category, c) in categories" :key="c">{{ category }}</ToggleButton>
  </div>
  <div class="slide flex center" @click="currentCategory != -1 ? currentSlide += 1 : null">
    <template v-if="currentCategory == -1">
      몸으로 말해요
    </template>
    <template v-else>
      <template v-if="currentSlide == -1">
        {{ categories[currentCategory] }}
      </template>
      <template v-else>
        <template v-if="slides[currentCategory][currentSlide]">
          {{ slides[currentCategory][currentSlide] }}
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
    height: calc(100vh - 90px - 55px);
    background-color: var(--primary);
    color: #fff;
    font-size: 180px;
    font-weight: 900;
    user-select: none;
  }
</style>