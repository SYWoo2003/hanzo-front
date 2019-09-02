

<script>
export default {

}
</script>


<template>

<div class="login">
<div class="loginform">
  <div> <img src="./../../assets/logo.png" class="logoimg"></div>
  <div class="loginbox">
    <input type="text" placeholder="디미고 계정 아이디" class="loginbox__text"><br>
    <input type="password" placeholder="디미고 계정 비밀번호" class="loginbox__text">
  </div>

  <span class="textbutton" @click="$router.push({name: 'main_page'})">
    디미고 계정으로 로그인
  </span><br>

</div>
</div>
</template>


<style lang="scss" scoped>


.loginform{
  margin: auto;
  text-align:center;
  margin-top: 10em;
  width: 370px;
}

  .textbutton{
    float: right;
    font-size: 1em;
    font-family: 'NanumSquare',sans-serif;
    font-weight: 700;
    margin-top: 1.5em;
    color: #5a5a5a;
    &:hover{
      cursor: pointer;
    }


}
.loginbox{
  margin-top: 3em;
  &__text{
    width: 96%;
    height: 2.4em;
    margin-top: 1em;
    margin-bottom: 0.4em;
    background-color: rgb(249, 249, 249);
    border-radius: 0.7em;
    border: 0.1em solid #e7e7e7;
    padding-left: 1em;
    outline-style: none;

  }
  ::placeholder{
    color: rgb(207, 207, 207);
    font-family: 'NanumSquare',sans-serif;
    font-weight: 400;

  }
}


</style>
