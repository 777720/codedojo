<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>登录</title>
    <!--引入bootstrap核心css文件-->
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
  </head>
  <body>
   	<div class="container">
    	<form style="width: 330px; margin: 0 auto;" action="/login" method="post">
        <h2>
          登录
        </h2>
        <#if message?has_content><p class="bg-danger">${message}</p></#if>
        <div class="form-group">
        	<input type="email" class="form-control" placeholder="邮箱" required="" autofocus="" name="email">
        </div>
        <div class="form-group">
        	<input type="password" class="form-control" placeholder="密码" required="" name="password">
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
        <a href="/">返回</a>
      </form>
    </div>
  </body>
</html>
