/**
 * Created by jiangcheng.wxd on 14-5-27.
 */
(function(window){
    var Query = (function (queryString) {

        function parseURL(url) {
            var a =  document.createElement('a');
            a.href = url;
            return {
                source: url,
                protocol: a.protocol.replace(':',''),
                host: a.hostname,
                port: a.port,
                query: a.search,
                params: (function(){
                    var ret = {},
                        seg = a.search.replace(/^\?/,'').split('&'),
                        len = seg.length, i = 0, s;
                    for (;i<len;i++) {
                        if (!seg[i]) { continue; }
                        s = seg[i].split('=');
                        ret[s[0]] = s[1];
                    }
                    return ret;
                })(),
                file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
                hash: a.hash.replace('#',''),
                path: a.pathname.replace(/^([^\/])/,'/$1'),
                relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
                segments: a.pathname.replace(/^\//,'').split('/')
            };
        };

        function hasParam(a){
            var params = parseURL(queryString).params;

            return (a in params);
        };

        function getParamVal(key){
            var params = parseURL(queryString).params;

            return params[key];
        };

        function getHash(){
            return parseURL(queryString).hash;
        };

        // public api
        return {
            hasParam: hasParam,
            getParamVal: getParamVal,
            hash: getHash
        };
    })();

    window.urlQuery = Query;
})(window);

$(function () {
    function getMarkDown(url){
        var _pWrapper = $('#main');

        window.location.hash = url;

        $.ajax({
            url: encodeURI(url),
            type: 'GET',
            success: function (text) {

                //服务器协助解析
                if(text.indexOf('html>') > -1){
                    var bodyStart = text.indexOf('body>');
                    var bodyEnd = text.lastIndexOf('body>');

                    text = text.slice(bodyStart+5,bodyEnd-3);
                }
                else{
                    text = marked(text);
                }


                var textWrapper = document.createElement('div');

                textWrapper.classList.add('text');
                textWrapper.innerHTML = text;

                _pWrapper.empty().append(textWrapper);
            },
            error: function () {
                alert('加载文档失败～');
            }
        });
    }


    $('.main-menu a').click(function (e) {
        var mdUrl = $(this).attr('href');
        getMarkDown(mdUrl);
        e.preventDefault();
    });




	var firstLoadUrl = '';

	//iframe模块.
	var $iframe = $('#iframe');

	function lookup(){
		var hs = window.location.hash;
		var hss = window.location.hash.split('/');

		if(hs.indexOf(".html") > -1){

			if($iframe.find('iframe').length == 0){
				var iframe = document.createElement('iframe');
				iframe.src = window.location.hash.split('#')[1];
				$iframe.append(iframe);
				$('#main').addClass('hide');
				$iframe.removeClass('hide');
			}
			else{
				$('#main').addClass('hide');
				$iframe.removeClass('hide');
			}

		}
		else{
			$('#main').removeClass('hide');
			$iframe.addClass('hide');


			$('.main-menu a').each(function(){
				if($(this).attr('href').indexOf(hss[hss.length - 1]) > -1){
					firstLoadUrl = $(this).attr('href');
				}
			});


			if(firstLoadUrl == ''){
				getMarkDown(urlQuery.hash());
			}
			else{
				getMarkDown(firstLoadUrl);
			}
		}
	}


	var isMobile;
	(function() {
		if( navigator.userAgent.match(/Android/i)
			|| navigator.userAgent.match(/webOS/i)
			|| navigator.userAgent.match(/iPhone/i)
			|| navigator.userAgent.match(/iPad/i)
			|| navigator.userAgent.match(/iPod/i)
			|| navigator.userAgent.match(/BlackBerry/i)
			|| navigator.userAgent.match(/Windows Phone/i)
			){
			isMobile = true;
		}
		else {
			isMobile = false;
		}
	})();


	//判断客户端load不同的table样式.
	if(isMobile && yepnope){
		if(window.yepnope){
			yepnope.injectCss("style/moble_table.css", function () {
				lookup();
			}, {
				media: "print"
			}, 2000);
		}
		else{
			lookup();
		}
	}
	else{
		if(window.yepnope){
			yepnope.injectCss("style/pc_table.css", function () {
				lookup();
			}, {
				media: "print"
			}, 2000);
		}
		else{
			lookup();
		}
	}


	//记录之前页面的滚动距离.
	setTimeout(function(){
		var pagePos = window.location.hash;

		var scrollDis = parseFloat(localStorage.getItem(pagePos));
		if(scrollDis != null){
			$(window).scrollTo(scrollDis);
		}

		$(window).bind('scroll',function(e){
			var scrollDis = $(window).scrollTop();
			localStorage.setItem(pagePos,scrollDis);
		})
	},300);

	$(window).bind('hashchange',function(){
		lookup();
	})


	$('#header').bind('touchstart click',function(){
		window.location = '../index.html';
	})
});
