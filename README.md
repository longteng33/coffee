https://longteng33.github.io/coffee/  
# coffee
一个响应式的coffee网站首页  
## 1、header首部部分的flex布局  
1 、导航栏，ul使用flex布局，space-around  
2、子元素flex-grow：1;text-align:center;每个子元素均分剩余部分  
3、响应式设计，当页面宽度小于1200px时，  
```
@media (max-width:1200px){
    .header .floor-container{
        width: 100%;
    }
    .topbar .title{
        padding: 6vw 0;
    }
}
```
当页面宽度小于768px时  
```
@media (max-width:768px){
    .header{
        padding: 20px 0 0 0;
    }
    .header .nav{
        display: none;
    }
    .header .title{
        padding: 12vw 0;
    }
}
```
## 2、图片排列 
1、使用display：flex，子元素flex-grow：1  
响应式：屏幕小于某尺寸时，父元素flex-wrap: wrap  
图片设置宽度100%；  
2、图片默认是基于baseline对齐的，所以上下图片间有间隙，解决方法：  
1）display：block  
2）vertical-align：middle  
3、右上图片排列  
图片容器flex，图片元素设置width: 50%;（重要）  

## 3、animate动画库
引入animate.css文件，在需要设置动画样式的元素上，  
1、先添加animated这个类，再添加动画名的类  
2、可以自己额外地定义动画运动的时间，延迟等  

## 3、滚动页面添加动画


