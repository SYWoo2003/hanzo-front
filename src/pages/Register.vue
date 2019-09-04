<template>
<div class="designer">
     <div class="register">
    <span class="name">우상윤</span>
    <span class="welcome"> 님, 환영합니다!</span>
    <span class="logout" @click="$router.push({name: 'login_page'})">로그아웃</span>
  </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.designer{
  float:right;
}

.register{
  font-family: 'NanumSquare',sans-serif;
  font-size:1.1em;
  position: fixed;
  right: 0.3em;
  top:1em;
  }

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

</style>