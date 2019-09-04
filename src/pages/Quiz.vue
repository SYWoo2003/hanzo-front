<script>
import Register from './Register.vue'

export default {
  components: {
    'register-component': Register,
  },

}


</script>


<template>
<div>
  <register-component></register-component>


  <img src="./../assets/logo.png" class="logoimg" @click="$router.push({name: 'main_page'})">

  <span>문제 풀어보기</span>

</div>
</template>


<style lang="scss" scoped>

.logoimg{
  width:8em;
  margin: 1em;
  cursor:pointer;
}


.register{
  font-family: 'NanumSquare',sans-serif;
  font-size:1.1em;
  float:right;
  position:relative;
  top:0.6em;

  .name{
    font-weight: 700;
  }

  .logout{
    margin-right:1em;
    margin-left:0.5em;
    font-weight: 700;
    color:#b6b6b6;
  }

  .logout:hover{
      cursor: pointer;
    }
}


</style>
