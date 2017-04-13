
//Movie实体类
package com.itbegin.model;

public class Movie {

    private int id;
    private String name;
    private String image;

    //3-1 要加的字段

    private String director;
  	private String runtime;

    public void setId(int id) {
        this.id = id;
    }
    public int getId() {
        return this.id;
    }

    //对字段name和image生成相同格式的set、get方法//对字段id生成set、get方法

    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }



  	public void setImage(String image) {
      	this.image = image;
    }
  	public String getImage() {
       	return this.image;
    }


    //3-1要加的方法
    public void setDirector(String director) {
      this.director = director;
    }

  	public String getDirector(){
      return this.director;
    }

  	public void setRuntime(String runtime) {
      this.runtime = runtime;
    }

  	public String getRuntime() {
      return this.runtime;
    }
}
