<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>爱电影首页</title>
    <!--引入bootstrap核心css文件-->
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
  </head>
  <body>
    <!--网站的头部-->
    <nav class="navbar navbar-default" style="margin-bottom: 0;">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">爱电影</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a>首页</a></li>
          <li><a>关于</a></li>
          <li><a>联系我们</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a>登录</a></li>
          <li><a>注册</a></li>
        </ul>
      </div>
    </nav>
    <!--网站的banner-->
    <div style="width: 100%; margin-bottom: 30px">
      <img style="width: 100%; height: 550px" src="./images/banner.jpg"/>
    </div>
    <div class="container">
      <div class="row">
        <#list movies as movie>
          <div class="col-xs-3">
            <a class="thumbnail">
              <img src="${movie.image}">
              <h3 class="text-center">${movie.name}</h3>
            </a>
        	</div>
        </#list>
      </div>
    </div>
  </body>
</html>
