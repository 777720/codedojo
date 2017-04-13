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
          <#if email?has_content>
          	<li><a>${email}</a></li>
            <li><a href="/logout">登出</a></li>
          <#else>
            <li><a href="/login">登录</a></li>
          	<li><a href="/join">注册</a></li>
          </#if>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <#if movie??>
        	<div class="media">
            <div class="media-left">
               <img class="media-object" src="/${movie.image}" alt="..." style="width: 210px; height: 280px;">
            </div>
            <div class="media-body">
              <h4 class="media-heading">${movie.name}</h4>
              <p>导演：${movie.director}</p>
              <p>片长：${movie.runtime}</p>
            </div>
          </div>
        </#if>
      </div>
    </div>
  </body>
</html>
