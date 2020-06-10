<template>
	
<div style="display: flex;">
	<div style="width: 561PX;background-color:lightsteelblue ; height: 509px; margin-right: 1.625rem;  float: left;">
	
	 <div class="aboutus">
<!--   element card组件
 -->    <el-card class="box-card" style=" width: 448px;height: 500px;    line-height: normal;">
			 <div class="title">

				<h1 style="font-size: 51px;"> 欢迎来到我的小屋</h1>
				<div style="margin-left: 76px;width: 260px;display: inline-block;"> 
				<img src="../assets/a.jpg" style="width: 100%;
    height: 100%;
    border-radius: 47%;
    border-style: dashed;
    border-color: brown;">
				 <el-link icon="el-icon-download" type="success" href="https://www.cnblogs.com/HouJiao/p/12111366.html" 
	       target="_blank" style="margin-left: 39px;">本项目的github下载地址</el-link>
				 
				</div>
			  <p><el-tag> <time class="time">{{ currentDate }}</time></el-tag><el-tag>试试</el-tag></p>
				
			</div>
      <div class='topMask square'></div><div class='topMask circular'></div>
    </el-card>
  </div>
	
</div>
<!-- Elemnet carousel组件
 -->	<div style="width: 79.063rem; background-color:rgb(33, 32, 29);float: right;margin-top: unset;height: 510px;">
  <el-carousel :interval="4000" type="card" height="419px" width="1226px">
      <el-carousel-item v-for="item in imagebox" :key="item.id">
        <img :src="item.idView" class="image">
      </el-carousel-item>
    </el-carousel>
		</div>
		
		</div>
		
</template>

<script>
  export default{
  name: 'home',
    data(){
      return {
				 currentDate: new Date(),
        imagebox:[{id:0,idView:require('../assets/b1.jpg')},
        {id:1,idView:require('../assets/b2.jpg')},
        {id:2,idView:require('../assets/b3.jpg')}
        ]
      }
    }
  }
</script>

<style>
	.image{
		 width: 100%;
		height: 100%;
	}
   .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
		
		 .aboutus .grid-content.line{
    border-right: 1px solid #ddd;
    height: 150px;
  }
  .aboutus .el-card__header{
    background: #545c64;
  }
  .aboutus .el-card__body{
    padding: 50px 20px;
  }
  .aboutus .el-timeline-item__wrapper{
    top: -8px;
  }
  .aboutus .title p .el-tag{
    margin: 0px 5px;
    cursor: pointer;
  }


  .aboutus{
    font-size: 14px;
    text-align: left;
    padding: 0px 100px;
  }
  .intro{
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .text {
    font-size: 14px;
    text-align: left;
    line-height: 30px;
    text-indent: 2em;
  }
  .box-card{
    position: relative;
  }
  .item {
    display: inline-block;
    margin: 30px 50px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .clearfix span{
    color: #fff;
    font-weight: bold;
  }
  .title p{
    color: #8c8888;
    font-size: 15px;
    margin-bottom: 80px;
    text-align: center;
  }
  .grid-content .large{
    font-size: 16px;
    color: #409EFF;
    font-weight: bold;
  }
  .topMask{
    width: 100px;
    height: 100px;
    background-color: rgba(68,138,255,0.2);
    transform: rotate(45deg);
    position: absolute;
  }
  .square{
    border-radius: 5px;
    top: 0px;
  }
  .circular{
    border-radius: 50%;
    top:80px;
    left: 80%;
    background-color: rgba(255, 208, 75,0.2);
  }
</style>