无论Android还是Html在布局上所面对的问题是一样的，例如父元素和子元素的相对位置，流式布局，相对位置等等，但是在表达上稍有区别

## 流式布局

无论是css中

	display: flex;

Android中

	android:layout_weight="*"

相对于css的 -webkit-flex: 1，Android同样的可以设置 android:layout_weight="1"，在与有实际长度的元素的位置摆放在一起时，两者的计算方式是一样的



## 相对位置

Css：

	position: relative;
	left: 0px;
	top: 10px;

Android：

	android:layout_gravity="top"


相对于left 和top的设置

	android:layout_height="wrap_content"

在不同的属性的交叉计算过程中，同样会出现 “由于我们使用了 android:layout_weight 属性,此时控件的宽度 就不应该再由 android:layout_width 来决定”

	android:layout_alignParentLeft="true"
    android:layout_alignParentTop="true"

像这种类似的弱相对的设置方式，也可以看出前端在布局上花费的计算量


此外，元素和元素之间的相对位置怎么书写呢？

	android:layout_above="@id/button3"
	android:layout_toLeftOf="@id/button3"

