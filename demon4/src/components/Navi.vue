<template>
    <el-container>
<!-- 			Container 布局容器
 -->    <el-header style="height: 101px; color: #000000;">
	  	<span class="topnav"  style="float:left;color:white;"> 
<!-- 			el-menu 组件
 -->          <el-menu
    :default-active="1"   class="el-menu-demo"  mode="horizontal"  background-color="#fc5b5b"
	 text-color="#fff"   active-text-color="#ffd04b" 	@select="topnav">

	 <el-menu-item index="0"  class="el-icon-ship" style="margin-left:250px;" >我的小屋</el-menu-item>
      <el-menu-item index="1"  background-color="yellow">首页</el-menu-item>
      <el-menu-item index="2">个人简介</el-menu-item>

      <el-menu-item index="3">项目简介</el-menu-item>

    </el-menu>
  </span>

<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  点我打开
</el-button>
<el-drawer
  title="我是标题"
  :visible.sync="drawer"
  :with-header="false">
  <span>我来啦s!</span>
  <div style="width: 100px;height: 100px;background-color: #409EFF;">
	  <el-input v-model="loginFrom.u" placeholder="请输入内容"></el-input>
<el-input placeholder="请输入密码" v-model="loginFrom.p" show-password></el-input>
    <el-button type="primary" @click="login">提交</el-button>

  </div>
</el-drawer>
  
  <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
              <!--  <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
					
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown> -->
				
            </span>
  </el-header>


  
  <el-main><div style="">
      <router-view></router-view>
  </div></el-main>


  <el-footer>
					<div class="bottom_fuwu_qita">
			<!-- 左 -->
							<div class="bottom_biaoyu container "></div>
		
			<!-- 右 -->
			<div class="bottom_fuwu_qita_you">
				<p class="bottom_fuwu_qita_you_p1">有事请联系</p>
				<p class="bottom_fuwu_qita_you_p2">24小事不定时在线</p>
				<p class="bottom_fuwu_qita_you_p3">（仅学习使用）</p>
				<!-- <a> <el-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
	<el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button slot="reference">click 激活</el-button>
  </el-popover></a> -->
  <a href="tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=252363667" target="class">联系我</a>
			</div>
		</div>
		
		
		
	</el-footer>
</el-container>

</template>

<script>
	import request from '@/utils/request'
    export default {
        data(){
            return {
                searchCriteria: '',
				 drawer: false,
				  responseResult: [],
				  loginFrom:{
				  u:'',
				  p:'',}

            }
        },

      methods: {
      login () {
        this.$axios
          .post('/login', {
            username: this.loginFrom.u,
            password: this.loginFrom.p
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.$router.replace({path: '/personal'})
            }
          })
          .catch(failResponse => {
          })
      },
			
			
            handleIconClick(ev) {
                console.log(ev);
            },

            topnav(key, keyPath){
                switch(key){
                    case '1':
                        this.$router.push('/');
                        break;
                    case '2':
                        this.$router.push('/personal')
                        break;
                    case '3':
                        this.$router.push('/pro')
                        break;
                }
            },

        },
    }
</script>


<style>

  .el-header{
    background-color: #fc5b5b;
    color: #333;
    text-align: center;
    line-height: 60px;
	
  }
	 .el-footer {
	  background-color: #a23d3d;
	  color: #333;
	  height: 0.1875rem;
	    height: 21px;
/*    margin-top: -84px;
 */	}
	
  
  .el-aside {
		
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
/* 		margin: 0px 11px 20px 594px;;
 */   
		    background: url(../assets/bc01.png) ;
background-color:#191932;
    color: #333;
    text-align: center;
    line-height: 160px;
/* 		height: 800px;
 */		height: 636px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  <style>
.topnav{
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 100;
      margin-left: -19px;
}
.topnav .el-menu.el-menu--horizontal{
  border-bottom: none;
  height: 100px;
  line-height: 100px;
}
.topnav .el-menu.el-menu--horizontal>.el-menu-item,.topnav .el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 100px;
    line-height: 100px;
    padding: 0px 50px;
    font-size: 16px;
    letter-spacing: 4px;
}
.topnav .el-menu--horizontal>.el-menu-item.is-active,.topnav .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
  border-bottom-width: 4px;
}
.topnav .logo-title .el-icon-ship
{
  margin-right: 5px;
}
  
	
	
	
	
	
	.bottom_fuwu_qita{
		    line-height: 0px;
    padding: 63px 0;
    display: flex;
		height: 16px;
	}
	
	.bottom_fuwu_qita a{
		color: #616161;
	    -webkit-transition: color .2s;
		cursor: pointer;
		text-decoration: none;
	}
	.bottom_fuwu_qita a:hover{
		color: #ff7600;
		}
	    
	.bottom_fuwu_qita_you{
		float: right;
	    width: 251px;
	    height: 112px;
	    border-left: 1px solid #e0e0e0;
	    text-align: center;
	    color: #616161
		}
	.bottom_fuwu_qita_you_p1{
		margin: 0 0 5px;
	    font-size: 22px;
	    line-height: 1;
	    color: #ff6700;
		}
	.bottom_fuwu_qita_you_p2{
		font-size: 12px;
	}
	.bottom_fuwu_qita_you_p3{
		display: block;
	    font-size: 12px;
	    -webkit-margin-before: 0px;
	    -webkit-margin-after: 1.6em;
	    -webkit-margin-start: 0px;
	    -webkit-margin-end: 0px;
	}
	.bottom_fuwu_qita_you a{
		display: inline-block;
		width: 118px;
	    height: 28px;
	    font-size: 12px;
	    line-height: 28px;
	    padding: 0;
	    margin: 0;
	    border: 1px solid #b0b0b0;
	    text-align: center;
	    color: #b0b0b0;
	    cursor: pointer;
	    -webkit-transition: all .4s;
	    transition: all .4s;
		text-decoration: none;
		border-color: #ff6700;
	    background: #fff;
	    color: #ff6700;
	}
	
	.bottom_biaoyu{
		clear: both;
	    margin: 30px auto 0;
	    width: 267px;
	    height: 35px;
		display: block;
	    text-align: left;
	    overflow: hidden;
		color: #333;
		    background: url(../assets/biaoyu.png) no-repeat center 0;
	}
</style>