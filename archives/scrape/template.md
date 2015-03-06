#模板 demo 地址 [scratch.demo](http://jiangcheng.demo.taobao.net/gamesandbox/scratch/)

#MT 模板编辑 地址 [scratch.demo](http://mt.alibaba-inc.com/model/admin/edit/21)


#CODE Snippet

### DOM 结构

    <div class="wrapper" style="background: #9c1710">
        <div class="main">
            <div class="tip">
                <img src="http://gtms04.alicdn.com/tps/i4/T1WU_7FJpeXXXA1wPc-559-234.png">
            </div>
            <div class="card">
                <div id="mycard"></div>
                <div class="mask hide">
                    <div class="hit">$100</div>
                    <div class="result hide">
                        <div class="r-t">中奖信息</div>
                        <div class="r-h">恭喜亲挂到一个100元红包</div>
                        <div class="r-btn">
                            <div class="share">分享</div>
                            <div class="next">刮下一张</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


### JS

    function hasClass(ele, cls) {
        return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    function addClass(ele, cls) {
        if (!hasClass(ele, cls)) ele.className += " " + cls;
    }

    function removeClass(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, '');
        }
    }

    window.addEventListener('load', function () {
        document.addEventListener('touchmove', function (e) {
            e.preventDefault()
        }, false);

        var card = new lib.scratch({
            el: '#mycard',
            hitArea:'.hit',    //刮奖区域.
            coverColor: '#FFD700',
            activePercent: 0.7,
            lineWidth: 50,
            forceRefresh: true,
            font: {
                size: '40px',
                family: '微软雅黑',
                color: 'black',
                text: '开始刮刮',
                x: 'center',
                y: '80'
            },
            onFinish: function () {
                removeClass($result,'hide');
                addClass($hit,'hide');
            }
        });

        var $result = document.querySelector('.result');
        var $hit = document.querySelector('.hit');
        var $next = document.querySelector('.next');
        $next.onclick = function () {

            addClass($result,'hide');
            removeClass($hit,'hide');

            //模拟中奖请求
            setTimeout(function () {
                var award = Math.floor(Math.random() * 100000);
                document.querySelector('.hit').innerHTML = award;
                document.querySelector('.r-h').innerHTML = '恭喜亲挂到一个' + award + '元红包';
            }, 200);

            //刷新刮刮卡
            card.refresh();
        };

        card.refresh();

        //首次加载刮刮卡（canvas动态创建），结果DOM被先被渲染。
        removeClass(document.querySelector('.mask'),'hide');
    });


