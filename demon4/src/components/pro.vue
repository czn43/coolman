<template>
    <div class="project">
      <div class="content" >
          <img src='../assets/2.1.jpg' class='images'>
					
          <div class='hover'>
						<el-popover
    placement="bottom"
    title=""
    width="200"
    trigger="hover"
    content="  运用CoordinatorLayout + AppBarLayout + bottomNavigationView+NavigationDrawer+Toolbar等组件完成app页面开发。
	          运用多线程，ajax处理json数据，进行前后端互动">
             <el-button slot="reference">智慧交通安卓应用</el-button>
						   </el-popover>

          </div>
      </div>
      <div class="content">
        <img src='../assets/2.3.png' class='images'>
        <div class='hover'>
      	<el-popover
          placement="bottom"
          title=""
          width="200"
          trigger="hover"
          content="  运用HightChart和Echart插件进行图表展示,依靠javaweb+mysql+Bootstrap进行图标数据的增删查改">
                   <el-button slot="reference">echart图表管理系统</el-button>
      						   </el-popover>
      
        </div>
      </div>
      <div class="content">
        <img src='../assets/2.4.png' class='images'>
        <div class='hover'>
          <el-popover
            placement="bottom"
            title=""
            width="200"
            trigger="hover"
            content=" 运用springboot+mysql+SpringMVC+mybatis技术,运行环境为jdk8+mysqk+IDEA+maven,前端用jquery">
                     <el-button slot="reference">在线商城</el-button>
          					   </el-popover>
                
        </div>
      </div>

		</div>

</template>

<script>

export default{
  name: 'pro',
   
  }  
</script>
<style>
	 .images{
    width:447px;
		height: 287px;
		border-color: darkgoldenrod;
    border-radius: 26%;
    display: inline-block;
    outline: 1px dashed rgba(84, 92, 100, 0.1);
		    BORDER-STYLE: groove;
  }
  .project{
    display: flex;
    justify-content:space-around;
  }
  .content{
		width: 487px;
		height: 284px;
    text-align: center;
    display: inline;
    position: relative;
    margin: 20px;
  }
  .content p{
    width: 95%;
    color: #fff;
    font-size: 14px;
    text-align: center;
  }
	.hover{
		border-radius: 40%;
    position: absolute;
    bottom: 5px;
    left: 7.5%;
/*    background-color: rgba(84, 92, 100, 0.3);
 */    height: 60px;
    width: 85%;
    line-height: 60px;
    cursor: pointer;
  }
  .hover:hover{
    background-color: rgba(84, 92, 100, 0.6);
  }
	
</style>