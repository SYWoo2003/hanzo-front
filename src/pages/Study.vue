<script>
export default {

}
</script>

<template>
<div class="studyform">
  <div class="register">
    <span class="name">우상윤</span>
    <span class="welcome"> 님, 환영합니다!</span>
    <span class="logout" @click="$router.push({name: 'login_page'})">로그아웃</span>
  </div>


  <img src="./../assets/logo.png" class="logoimg" @click="$router.push({name: 'main_page'})">

<div class="designer">
  <span class="title">개념 학습하기</span><br>
  <span class="subtitle">개념을 학습할 단원을 선택해주세요.</span>


  <div class="select">
    <table>
      <tr>
          <td class="el" @click="$router.push({name: 'Unit1'})">
          <div class="unit1" >1단원</div>
          <div class="unit2">우리 역사의 형성과 고대 국가의 발전</div>
          </td>
      </tr>

      <tr>
          <td class="el" @click="$router.push({name: 'Unit2'})">
          <div class="unit1">2단원</div>
          <div class="unit2">고려 귀족 사회의 형성과 변천</div>
          </td>
      </tr>

      <tr>
          <td class="el" @click="$router.push({name: 'Unit3'})">
          <div class="unit1">3단원</div>
          <div class="unit2">조선 유교 사회의 성립과 변화</div>
          </td>
      </tr>

      <tr>
          <td class="el" @click="$router.push({name: 'Unit4'})">
          <div class="unit1">4단원</div>
          <div class="unit2">국제 질서의 변동과 근대 국가 수립 운동</div>
          </td>
      </tr>

      <tr>
          <td class="el" @click="$router.push({name: 'Unit5'})">
          <div class="unit1">5단원</div>
          <div class="unit2">일제 강점과 민족 운동의 전개</div>
          </td>
      </tr>

      <tr>
          <td @click="$router.push({name: 'Unit6'})">
          <div class="unit1">6단원</div>
          <div class="unit2">대한민국의 발전과 현대 세계의 변화</div>
          </td>
      </tr>

    </table>

  </div>


    <app-content></app-content>


 </div>
</div>
</template>

<style lang="scss" scoped>

.studyform{
  position:-webkit-sticky;
}

.logoimg{
  width:8em;
  margin: 1em;
  cursor:pointer;
}


.designer{
  position:relative;
  bottom:13em;
  left:12em;

}

.title{
  font-size:2.4em;
  font-family: 'NanumSquare',sans-serif;
  font-weight: 700;
}

.subtitle{
  font-size:1.2em;
  font-family: 'NanumSquare',sans-serif;

}

.select{
  margin-top:3em;
}
table{
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0px 5px 5px 3px #0000000a;
}

td{
  padding:1em;
  font-family: 'NanumSquare',sans-serif;
  font-weight: 400;
  cursor:pointer;
  background-color:#FFFFFF;
  padding-top:2em;
  padding-bottom:2em;
}

.el{
   border-bottom: 2px solid #ececec;
}

.unit1{
  font-size:1.5em;
}

.unit2{
  font-size:1.1em;
}

.register{
  font-family: 'NanumSquare',sans-serif;
  font-size:1.1em;
  float:right;
  position:relative;
  top:0.6em;
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
