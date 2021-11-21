<script setup>
  import { defineProps, ref } from 'vue'
  
  const props = defineProps({
    song: { },
  })
  
  let playing = ref(false)
  let tts = ref(null)

  function togglePlay() {
    if(playing.value) {
      tts.value.pause()
      tts.value.currentTime = 0;
    } else {
      tts.value.play()
    }

    playing.value = !playing.value
  }

  function openExternal() {
    window.open(props.song.externalLink, '_blank')
  }
</script>

<template>
  <div :class="['button', 'flex', 'center']" style="width: 420px">
    <div class="flex center" style="width: 100%; justify-content: space-between;">
      <div class="flex">
        {{ song.singer }} - {{ song.title }}
      </div>
      <div class="flex">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" @click="togglePlay">
          <path d="M4.79839 14.4306C4.08539 13.2423 4.08539 11.7577 4.79839 10.5694V10.5694C5.01597 10.2067 5.37643 9.95272 5.79111 9.86978L7.48414 9.53117C7.58501 9.511 7.67593 9.45691 7.74178 9.37788L9.81086 6.89498C10.9934 5.47592 11.5847 4.76638 12.1124 4.95742C12.64 5.14846 12.64 6.07207 12.64 7.91928L12.64 17.0807C12.64 18.9279 12.64 19.8515 12.1124 20.0426C11.5847 20.2336 10.9934 19.5241 9.81086 18.105L7.74178 15.6221C7.67593 15.5431 7.58501 15.489 7.48414 15.4688L5.79111 15.1302C5.37643 15.0473 5.01597 14.7933 4.79839 14.4306V14.4306Z" fill="#3D1DFF"/>
          <path d="M15.1755 8.96447C16.1084 9.89732 16.6348 11.1611 16.64 12.4803C16.6452 13.7996 16.1288 15.0674 15.2033 16.0076" stroke="#3D1DFF" stroke-width="2" stroke-linecap="round"/>
          <path d="M19.2969 6.84314C20.7894 8.33572 21.6316 10.3577 21.64 12.4685C21.6483 14.5793 20.822 16.6078 19.3413 18.1121" stroke="#3D1DFF" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" @click="openExternal">
          <path d="M12.82 24.5C19.5468 24.5 25 19.1274 25 12.5C25 5.87258 19.5468 0.5 12.82 0.5C6.09319 0.5 0.640015 5.87258 0.640015 12.5C0.640015 19.1274 6.09319 24.5 12.82 24.5Z" fill="#3D1DFF"/>
          <path d="M12.82 19.7C16.8561 19.7 20.128 16.4764 20.128 12.5C20.128 8.52354 16.8561 5.29999 12.82 5.29999C8.78393 5.29999 5.51202 8.52354 5.51202 12.5C5.51202 16.4764 8.78393 19.7 12.82 19.7Z" fill="#3D1DFF" stroke="white" stroke-width="1.2"/>
          <path d="M10.384 16.045L16.711 12.501L10.384 8.95499V16.045Z" fill="white"/>
        </svg>
      </div>
    </div>
    <audio ref="tts" :src="song.ttsLink"></audio>
  </div>
</template>

<style lang="scss" scoped>
  .button {
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    border: 2px solid var(--primary);
    border-radius: 8px;
    padding: 8px 12px;
    color: var(--primary);
    box-sizing: border-box;
    user-select: none;
  }

  svg {
    cursor: pointer;
  }
</style>