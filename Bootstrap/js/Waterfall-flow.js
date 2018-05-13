function waterFall(parent,box){
	//父盒子居中
	//1.1拿到父盒子里面的子盒子
	var allBox = $(parent).getElementsByClassName(box);
	var boxWidth = allBox[0].offsetWidth;
	var screenWidth = document.body.offsetWidth;
	var cols = Math.floor(screenWidth/boxWidth);
	$(parent).style.width=boxWidth*cols+'px';
	$(parent).style.margin='0 atuo';
	//纸盒子定位
	var heigthArr=[];
	for(var i=0;i<allBox.length;i++){
		var boxHeigth = allBox[i].offsetHeigth;
		if(i<cols){
			heigthArr.push(boxHeigth);
		}else{
			var minBoxHeigth = Math.min.apply(this,heigthArr);
			console.log(minBoxHeigth);
			var minBoxIndex = getMinBoxIndex(minBoxHeigth,heigthArr);
			allBox[i].style.position='absolute';
			allBox[i].style.top=minBoxHeigth=minBoxHeigth+'px';
			allBox[i].style.left=minBoxIndex=minBoxIndex*boxWidth+'px'

		}
	}
	function $(id){
		return typeof id ==='string'?document.getElementById(id):id;
	}
	function getMinBoxIndex(value,array){
		for(var i in array){
			if(array[i]==value){
				return i;
			}
		}
	}
	function checkwillLoad(){
		var allBox=$('main').getElementsByClassName('box');
		var lastBox=allBox[allBox.length -1];
		var lasrBoxOffsetTop = lastBox.offsetTop;
		var svreenHeight =document.body.offsetHeigth||document.documentElement.clientHeight;
		var scrollTop = document.body.scrollTop;
		return lastBoxOffsetTop<=scrollTop + screenHeigth;
	}
	if(checkwillLoad()){
		var data = {'dataImg':[{'img':'1.jpg'},{'img':'2.jpg'},{'img':'3.jpg'},{'img':'4.jpg'},{'img':'5.jpg'},{'img':'6.jpg'}]}
		for(var i=0;i<data.dataImg.length;i++){
			var newBox=document.createElement('div');newBox.className='box';
			$('main').appendChild(newBox);
			var newPic=document.createElement('div');
			newPic.className='pic';
			newBox.appendChild(newPic);
			var newImg =document.createElement('img');
			newImg.src='imgs/'+data.dataImg[i]/img;
			newPic.appendChild(newImg);
		}
		waterFall('main','box');
	}
}

