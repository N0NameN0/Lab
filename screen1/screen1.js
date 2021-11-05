var width=800;
var height=600;

var bar_width=4;
var bar_height=32;
var bar_nb = width / bar_width;

var MyMouseTracker;              
var mouseX=0;
var mouseY=0;

var bar_pos=[331,328,325,321,318,317,314,312,309,307,303,302,300,298,297,294,292,290,288,287,284,282,279,278,277,277,274,273,272,272,270,269,269,268,267,266,265,263,261,260,259,258,257,255,254,254,253,251,250,249,248,248,246,245,244,243,241,241,240,239,238,236,235,235,233,233,230,230,230,229,229,228,228,226,226,225,224,222,221,219,219,219,219,219,217,217,216,215,214,214,214,212,211,211,211,210,210,209,209,209,207,206,206,206,206,205,206,206,206,207,207,208,208,208,208,209,209,210,212,213,213,213,214,214,214,214,215,215,215,215,215,215,215,217,217,218,218,219,219,220,223,224,224,225,225,227,227,228,229,229,230,230,232,233,234,234,235,237,237,238,239,239,240,243,244,245,246,248,249,252,253,255,257,259,261,263,264,266,269,271,273,274,274,277,279,281,282,284,286,287,290,292,292,293,295,297,300,301,304,306];

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
    myscrolltext.scrtxt="HELLO AND WELCOME TO THIS LITTLE LABTRO. IDEA FROM DCK ON ATARI ST.....   ";
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