<script>
import Study from '../Study.vue'

export default {
  components: {
    'study-page': Study,
  },
}


</script>

<template>

    <div>
        <study-page></study-page>
        <div class="test">

            <div class="box1"></div>


            <!-- 여기부터 내용 삽입 -->
            <div id="scrollstyle" class="box">
                <h1>1단원</h1>
                <h4>우리 역사의 형성과 고대 국가의 발전</h4>
                <hr class="startline">
                <br><br><br><br>

                    <div id="ch1">
                        
                        <br>
                        <img src="./../../assets/ex.png">

                        <br>
                        <div class="el">4단원</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                        <div class="el">내용</div>
                    </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .test{
        position: relative;
        bottom:55em;
        float:right;
        right:4.8em;
    }


    #scrollstyle::-webkit-scrollbar-track
    {
        
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    #scrollstyle::-webkit-scrollbar
    {
        width: 0.5em;
        background-color: #F5F5F5;
    }

    #scrollstyle::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        background-color: rgb(104, 104, 104)
    }



    .box{
        overflow-x:hidden;
        overflow-y:scroll;
        width:75em;
        height:42em;
        margin-left:3em;
        background-color:none;
        font-family: 'NanumSquare',sans-serif;
        color:#474747;
        word-break: keep-all;
        }

    h1{
        font-size:2.5em;
    }

    h2{
        font-size:1.7em;
        font-weight: 400;
        margin-left: 0.2em;
    }

    h3{
        font-size:1.2em;
        font-weight: 400;
        margin-left:0.2em;
    }


    h4{
        font-size:1.1em;
        padding:0;
        margin:1em 0em 0em 0.3em;
    }

    span{
        font-size:1.2em;
    }

    hr{
        margin-left:0.3em;
        width:20em;
        float:left;
        border: 0.1em solid #474747;
    }
    img{
        width:35em;
    }

    .el{
        font-size:1.2em;
        margin-top:0.6em;
        margin-bottom:0.6em;
    }
</style>