$(function(){
/*头部选项卡显示隐藏开始*/
$('.myorder').mouseenter(function(){
	$('.myorder').addClass('hover')
$('.orderc').show()

}).mouseleave(function(){
	$('.orderc').hide()
	$('.myorder').removeClass('hover')
})

$('.orderc').mouseenter(function(){
	$('.myorder').addClass('hover')
	$(this).show()
}).mouseleave(function(){
	$('.myorder').removeClass('hover')
	$(this).hide()
})



$('.cator').mouseenter(function(){
	$('.cator').addClass('hover')
$('.favor').show()

}).mouseleave(function(){
	$('.cator').removeClass('hover')
	$('.favor').hide()
})

$('.favor').mouseenter(function(){
	$('.cator').addClass('hover')
	$(this).show()
}).mouseleave(function(){
	$('.cator').removeClass('hover')
	$(this).hide()
})




$('.phmot').mouseenter(function(){
$('.phmot').addClass('hover')

$('.phone').show()

}).mouseleave(function(){
	$('.phmot').removeClass('hover')
	$('.phone').hide()
})


$('.phone').mouseenter(function(){
$('.phmot').addClass('hover')

$('.phone').show()

}).mouseleave(function(){
	$('.phmot').removeClass('hover')
	$('.phone').hide()
})





$('.custom').mouseenter(function(){
	$('.custom').addClass('hover')

$('.customer').show()

}).mouseleave(function(){

		$('.custom').removeClass('hover')
	$('.customer').hide()
})


$('.customer').mouseenter(function(){
	$('.custom').addClass('hover')

$(this).show()

}).mouseleave(function(){

		$('.custom').removeClass('hover')
	$(this).hide()
})


/*头部选项卡显示隐藏开始*/


/*购物车开始*/
$('.my-mtr').mouseover(function(){
	$(this).find('a').addClass('ahover')
$('.shoucar').show()
}).mouseout(function(){
	$(this).find('a').removeClass('ahover')
$('.shoucar').hide()
})

$('.shoucar').mouseover(function(){
$('.nav-t .logo-r .logo-r-r .my-mt .a-bg').addClass('ahover')
$(this).show()
}).mouseout(function(){
	$('.nav-t .logo-r .logo-r-r .my-mt .a-bg').removeClass('ahover')
$(this).hide()
})


/*购物车结束*/

/*热卖促销切换开始*/
$('.sales-cls').mouseover(function(){
var index=$(this).index()
$('.sales-b-list').eq(index).show().siblings().hide()
})




/*热卖促销切换结束*/

/*全部商品分类开始*/

$('.all-list-r').mouseenter(function(){


$(this).find('i').animate({backgroundPositionY:'-70px'})

	var index=$(this).index();
	$('.all-r').eq(index).show().siblings().hide()
	$('.all-list-r ').eq(index).addClass('bxh').siblings().removeClass('bxh')
}).mouseout(function(){
	$(this).find('i').animate({backgroundPositionY:'-12px'})
})

$('.all-lists').mouseleave(function(){
	
	$('.all-r').hide()
})

$('.all-r').mouseover(function(){
	
	$(this).show()
})
$('.all-r').mouseleave(function(){
	
	$(this).hide()

})

/*全部商品分类结束*/

/*图片轮播开始*/
var index=0;
var play=setInterval(auto,3000)
$('.pic-t-u').mouseenter(function(){
clearInterval(play)
}).mouseleave(function(){
play=setInterval(auto,3000)

})

function auto(){
	index++;
	index%=5;
	$('.numbers').eq(index).addClass('numbers-bg').siblings().removeClass('numbers-bg')
	$('.picturn').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()

}

$('.numbers').mouseenter(function(){
	clearInterval(play)
	index=$(this).index()

	$(this).addClass('numbers-bg').siblings().removeClass('numbers-bg')
	$('.picturn').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()
}).mouseleave(function(){
	play=setInterval(auto,3000)
})


/*图片轮播结束*/

/*侧栏二维码开始*/

var wz=setInterval(wzp,1000)

$('.sect-list-c').mouseover(function(){
	clearInterval(wz)
	$('.sect-wx').show()
}).mouseout(function(){

	wz=setInterval(wzp,1000)
	
})

function wzp(){
		$('.sect-wx').hide()
	}


$('.sect-wx').mouseenter(function(){
	clearInterval(wz)
	$(this).show()
}).mouseleave(function(){

	$(this).hide()
})


/*侧栏二维码开始结束*/

/*底部微信二维码开始*/



$('.wexn').mouseover(function(){
	clearInterval(wz)
$('.weixin').show()
}).mouseout(function(){
wz=setInterval(wexn,1000)
})
function wexn(){
	$('.weixin').hide()
}


$('.weixin').mouseover(function(){
	clearInterval(wz)
$(this).show()
}).mouseout(function(){
$(this).hide()
})


/*底部微信二维码结束*/
});