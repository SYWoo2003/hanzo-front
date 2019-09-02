

<script>
export default {

}
</script>


<template>


<div>
  <div class="register">
    <span class="name">우상윤</span>
    <span class="welcome"> 님, 환영합니다!</span>
    <span class="logout" @click="$router.push({name: 'login_page'})">로그아웃</span>
  </div>

  <img src="./../assets/logo.png" class="logoimg" @click="$router.push({name: 'main_page'})">

  <span>랭킹</span>

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
