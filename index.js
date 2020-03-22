$(function () {
    //   封装点击切换
    function ClickSwitch(obj) {
        this.clickEle = obj.clickEle;
        this.targetEle = obj.targetEle;
        this.click_className = obj.click_className;
        this.target_className = obj.target_className;

        this.bindEvent();
    }

    ClickSwitch.prototype = {
        bindEvent: function () {
            var _this = this;
            this.clickEle.click(function () {
                var index = $(this).index();
                $(this).siblings().removeClass(_this.click_className);
                $(this).addClass(_this.click_className);
                _this.targetEle.removeClass(_this.target_className);
                _this.targetEle.eq(index).addClass(_this.target_className)
            })
        },
    }

    new ClickSwitch({
        clickEle: $(".release .nav-item"),
        targetEle: $(".release .intro-list"),
        click_className: "active-underline",
        target_className: "active",
    })

    // 滚动屏幕添加class
    function scrollAddClass(obj) {
        this.ele = obj.ele;
        this.className = obj.className;
        this.bindEvent();
    }
    
   



    $(window).scroll(function(){
        scrollAddClass({
            ele:$(".news .top"),
            className:"animated rollIn",
        });
        scrollAddClass({
            ele:$(".banner .img-con"),
            className:"animated flipInY",
        });
        scrollAddClass({
            ele:$(".banner .des-con"),
            className:"animated flipInY",
        });
        scrollAddClass({
            ele:$(".about .title"),
            className:"animated rollIn",
        });
        scrollAddClass({
            ele:$(".about .des"),
            className:"animated rollIn",
        });
    })
    var $screenHeight=$(window).height();
function scrollAddClass(obj){
    var $scrollHeight=$(document).scrollTop();
    if($screenHeight+$scrollHeight-10>obj.ele.offset().top){
        obj.ele.addClass(obj.className)
    }
}





})