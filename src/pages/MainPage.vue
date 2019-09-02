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

  <div class="main">
    <div> <img src="./../assets/logo.png" class="logoimg"></div>
    <div class="loginbox">
      <button @click="$router.push({name: 'Unit1'})">개념 학습하기</button>
      <br>
      <button @click="$router.push({name: 'quiz_page'})">문제 풀어보기</button>
      <br>
      <button @click="$router.push({name: 'ranking_page'})">랭킹</button>
      <br>
      <button @click="$router.push({name: 'report_page'})">오류 신고</button>
    </div>


</div>
</div>
</template>

<style lang="scss" scoped>

.register{
  font-family: 'NanumSquare',sans-serif;
  font-size:1.1em;
  float:right;
  position:relative;
  bottom:8em;

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

.logoimg{
  margin-bottom:2.4em;
}

.main{
  margin: auto;
  text-align:center;
  margin-top: 10em;
  width: 370px;
  display:block;
  }


button{
  font-size:1.2em;
  margin-top:1.2em;
  padding:0.3em;
  width:12em;
  font-weight: 500;
  color:#474747;
  border-radius: 0.3em;
  border: 1px solid #D6D6D6;
  background-color:#FFFFFF;
  font-family: 'NanumSquare',sans-serif;
  cursor:pointer;
  outline:0;
}

</style>
