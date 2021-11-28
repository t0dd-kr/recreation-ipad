<script setup>
  import { ref } from 'vue'

  let scores = ref([0, 0, 0, 0])
</script>

<template>
  <div class="fullpage flex">
    <div class="nav">
      <div class="flex column">
        <ToggleButton @click="$router.push('/songs')" :value="$route.path" _value="/songs">가사듣고 맞추기</ToggleButton>
        <ToggleButton @click="$router.push('/bodyquizs')" :value="$route.path" _value="/bodyquizs">몸으로 말해요</ToggleButton>
        <ToggleButton @click="$router.push('/people')" :value="$route.path" _value="/people">인물 퀴즈</ToggleButton>
        <ToggleButton @click="$router.push('/letters')" :value="$route.path" _value="/letters">이어 말하기</ToggleButton>
      </div>
      <div class="flex column" style="margin-top: 120px;">
        <ToggleButton 
          :value="Math.max(...scores) === score && score > 0" 
          v-for="(score, i) in scores" 
          :key="i" 
          :style="`padding: 8px 10px;` + (Math.max(...scores) === score && score > 0 ? 'padding: 12px 15px; font-weight: 900; font-size: 32px;' : '')"
        >
          <div class="flex" style="justify-content: space-between; width: 100%;">
            <div>{{i + 1}}팀</div>
            <div class="flex">
              <input type="number" v-model="scores[i]">점
            </div>            
          </div>
        </ToggleButton>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>  
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  html, body {
    margin: 0;
  }

  * {
    font-family: 'Noto Sans KR', sans-serif;
  }

  :root {
    --primary: #3D1DFF;
  }

  .flex {
    display: flex;
    gap: 10px;
    &.center {
      justify-content: center;
      align-items: center;
    }
    &.column  {
      flex-flow: column;
    }
  }
  
  .fullpage {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    gap: 30px;
  }

  .nav {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 300px;
  }

  .main {
    position: absolute;
    right: 30px;
    top: 30px;
    width: calc(100vw - 390px);
    height: calc(100vh - 160px);
    box-sizing: border-box;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  input {
    outline: none;
    border: none;
    font-size: 24px;
    font-weight: 500;
    border-radius: 8px;
    width: 150px;
    background-color: transparent;
    color: var(--primary);
    text-align: right;
    transition: all .25s ease-in-out;
  }

  .active input {
    color: #fff;
    font-weight: 900; 
    font-size: 32px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

</style>