<template>
	
	<div class="aboutus">  
	
    <el-card class="box-card" style="';float: left;
    margin-left: 94px;height: 30.25rem;">
       <div class="title">
        <el-divider content-position="center">个人简介</el-divider>
        <p><el-tag>Halo</el-tag><el-tag>嘿嘿</el-tag></p>
    
            <div class="grid-content bg-purple">
             就读时间<span class="large">2018.09</span>-<span class="large">2021.07</span>.
							<br/>
							<label v-text="content.p1"></label><br/>
              <label v-text="content.p2"></label><br/>
						 2019年期间在耐克兼职做销售，管理和推销商品。<br/>
 	            大学期间多次参加学习义工活动，拜访敬老院，体育赛事运维工作。<br/>
 	            大一期间参与设计网页商城的开发:<br/>
          	运用JQuery,HIghchart插件，jquery技术开发静态前端。<br/>
          	运用Ajax，Spring，实现对商品的管理以及用户管理的后端设计。<br/>
 	            大二期间参与智能交通APP部分开发:<br/>
	          运用Phostman处理json请求数据。<br/>
	          运用CoordinatorLayout + AppBarLayout + BottomNavigationView+NavigationDrawer+Toolbar等组件完成app页面开发。
	          运用多线程，ajax处理json数据，进行前后端互动。<br/>
         
            </div>
       </div>
      <div class='topMask square'></div><div class='topMask circular'></div>
			
    </el-card>
  
	
	  <el-card class="box-card"  style="height: 484px;">
	       <div class="title">
	        <el-divider content-position="center">自我认知</el-divider>
	        <p><el-tag>Halo</el-tag><el-tag>嘿嘿</el-tag></p>
	    
	            <div class="grid-content bg-purple">
	        
								<br/>
								 	<span class="large">自我定位:</span>人性格诚恳，随和，对待朋友真心，做事专心，善于思考，乐于接触新鲜事物，
									时间观念强，做事有条理，讲究做事要负责任，脚踏实地，做好本职工作。前后端技术扎实，对技术有强烈的求知欲，有很强的学习能力和团队合作能力。</br>
									<span class="large">
                 	遇到困难:</span>遇到问题，我喜欢思考，专研下去，能自己解决就不寻找其他帮助。遇到没有解决方法的问题时，我喜欢上专业的论坛寻找帮助。然后积累错题，提高自己的专业水准。</br>
									<span class="large">
                 	平常爱好:</span>喜欢与不同领域的人接触，了解其他事务，也喜欢到不同的地方去游玩，开阔自己的视野和思维。也喜欢跑步，羽毛球，通过运动来释放压力</br>
                 <p></p>
	         </br></wbr>
	            </div>
	       </div>
	      <div class='topMask square'></div><div class='topMask circular'></div>
				
	    </el-card>
	
	  <div class="block">
	  <el-carousel trigger="click" height="83px">
	    <el-carousel-item v-for="item in imagebox" :key="item">
	              <img :src="item.idView" style="width: 100%;height: 100%;">
	
	    </el-carousel-item>
	  </el-carousel>
	</div>
	</div>
	
	
</template>
<script>
export default{
  name:'personal',
    data(){
      return {
				content:{
					p1:'在校专业为软件技术，主修课程为主修课程:java程序语言设计，HTML5网页设计，javaweb程序设计，数据库管理与应用，ptython程序语言设计，android开发技术，web前端开发技术。'
			    ,p2:'2018年期间在一家照相馆兼职。',
				},
				 currentDate: new Date(),
        imagebox:[{id:0,idView:require('../assets/bt1.jpg')},
        {id:1,idView:require('../assets/bt2.png')},
 
        //imagebox是assets下一个放图片的文件夹
        ]
      }
    }
  }
</script>
<style>

  .aboutus .el-card__body{
    padding: 50px 20px;
		    font-family: fantasy;
}
  .aboutus .title p .el-tag{
    margin: 0px 5px;
    cursor: pointer;
  }
</style>
<style scoped>
  .aboutus{
    font-size: 14px;
    text-align: left;
    padding: 0px 100px;
  }

  .box-card{
		background-image: url(../assets/bc1.jpg);
    position: relative;
		margin-bottom: 20px;   width: 500px; line-height: normal;
  }
 

  .title p{
    color: #8c8888;
    font-size: 15px;
    text-align: center;
  }
  .grid-content .large{
    font-size: 16px;
    color: #F56C6C;
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