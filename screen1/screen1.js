var width=800;
var height=600;

var bar_width=4;
var bar_height=32;
var bar_nb = width / bar_width;

var MyMouseTracker;              
var mouseX=0;
var mouseY=0;

var bar_pos=[];
for(i=0; i<bar_nb; i++){
	bar_pos[i]=0;
}

var font_width=32;
var font_height=32;
var myfont = new image('font1.png');

var mycanvas;
var mycanvasscrolltext;
var myscrolltext;


function init(){
	mycanvas=new canvas(width,height,"main");
	mycanvasscrolltext=new canvas(width,font_height);
	mycanvasscrolltext.initTile(bar_width,bar_height);

	MyMouseTracker = new MouseTracker();
    MyMouseTracker.addMouseTrack(mycanvas,false);

	myfont.initTile(font_width,font_height,32);
    myscrolltext = new scrolltext_horizontal();
    myscrolltext.scrtxt="HELLO AND WELCOME TO        NONAMENO       THIS LITTLE FUCKIN SCROLLTEXT";
    myscrolltext.init(mycanvasscrolltext,myfont,4);

	go();
}

function go(){
	mycanvas.fill('#0000FF');

	mycanvasscrolltext.fill('#000000');
    myscrolltext.draw(0);

	for(i=0; i<bar_nb; i++){
		mycanvasscrolltext.drawTile(mycanvas,i,i*bar_width,bar_pos[i],1,0,1,1);

	}

	mouseX = mycanvas.MousePosX ;
    mouseY = mycanvas.MousePosY ;  

	if (mycanvas.MouseButt==1) {    
		bar_pos[Math.round((mouseX-bar_width/2)/bar_width)]=mouseY;
	}

	document.getElementById('curveinfo').value = "var bar_pos=["+bar_pos.join(',')+"];";

    MyMouseTracker.MouseUpdate();
	requestAnimFrame( go );
  }