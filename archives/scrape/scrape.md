#repo 地址 [lib.scrape](http://gitlab.alibaba-inc.com/mtb/lib-scrape/tree/master)


#lib.scrape

## 最新版本

**0.1.0**

## 安装依赖

运行 `npm install`，来安装所需的依赖模块。关于NPM的知识，请参见[nodejs](http://nodejs.org/);

## 用Grunt打包

运行 `grunt`，来对项目进行打包。关于Grunt的知识，请参见[gruntjs](http://gruntjs.com/);

## 如何使用

### 初始化

	    var card = new lib.scrape({
		   	el: '#mycard',         // 刮刮层的根节点，节点内为空
		   	coverColor: '#FFD700', // 刮刮层的颜色
			activePercent: 0.8,    // 激活区域的百分比
    		font: {				   // 渲染字体
    			size: '40px',
    			family: '微软雅黑',
    			color: 'black',
    			text: '开始刮刮',
    			x: 'center',	   // 取值可以是center或者数字
    			y: 100			   // 取值可以是center或者数字
    		},
		   	onfinish: function() {
		   		//TODO 刮完后的handler
		   	}
	    });

### 更新刮刮卡里的内容

	card.replace(elements);

elements可以是HTMLElement的数组，也可以是html string。

注意，当elements中，有元素设置了active-el的className时，刮刮层只对这些元素进行激活区域的计算。

如果没有设置active-el，则对所有元素进行激活区域的计算。

### 刷新刮刮层

	card.refresh(options);


这里options中的字段可以覆盖初始化时的options中的字段。

详细例子，请参照`demo/scrape.html`。



