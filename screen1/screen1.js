var width=800;
var height=600;

var bar_width=4;
var bar_height=32;
var bar_nb = width / bar_width;

var MyMouseTracker;              
var mouseX=0;
var mouseY=0;

var bar_pos=[383,383,380,378,377,374,372,369,367,366,364,362,361,360,357,356,353,352,351,351,350,348,347,347,346,346,344,343,343,342,342,342,342,342,342,342,341,341,341,341,341,343,344,345,345,346,347,348,351,353,355,357,359,360,362,364,366,367,369,372,374,377,380,381,381,382,385,387,389,390,391,392,394,395,396,398,401,402,405,409,410,414,415,419,422,425,428,429,433,436,440,443,447,449,450,455,456,457,460,462,463,465,465,466,466,466,466,466,466,466,466,466,466,464,462,462,462,461,459,459,458,458,457,456,454,452,450,449,448,446,445,444,441,440,438,436,436,435,434,433,433,431,430,428,427,426,424,423,422,420,420,420,419,418,418,416,415,415,414,414,413,411,410,409,409,409,408,408,408,406,406,405,405,405,405,405,405,405,405,405,405,406,408,409,410,412,412,414,417,418,419,419,422,426,427,428,430,431,434,435];
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