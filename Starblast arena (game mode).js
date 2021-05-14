/*
* Special thanks to: Megalodon, Serendibite, Endersult, Nova for their ships!
    Endersult, Nova, Megalodon made one ship for this mod.
    Serendibite made 6 ships for this mod.
    Wolfan made 21 ships for this made.
* Mod made by Wolfan, idea by Wolfan.
* Thanks to Glitch for his help and suggestions.
* Thanks to Lotus and Bhpsngum, who are always here to help me.
* Modding commands available:
    `t1 [NUMBER]` => gives number points to orgono team
    `t1 [NUMBER]` => gives number points to volgauf team
    `ap [NUMBER]` => gives a certain number of points to the first player (id:0)
    `list` => shows player name + ship faction
*/



const seconds_beifre_hiding = 20;
const points = 15000; //25K
const alien_shield = 17000;
const point_per_kills = 500;
const points_per_boss = 3500;
game.custom.status =  "Mining";
game.custom.seconds = 60; // 60
game.custom.minuts_1 = 7; // 6
const secondsBeforeUsingAPower = 90;


game.modding.commands.ect = function(req) {
  echo('\nAnti cross teaming procedure activated...');
  for (k=0;k<game.ships.length;k++) {
    game.ships[k].set({
      x: (Math.random() - 0.5) * game.options.map_size * 10,
      y: (Math.random() - 0.5) * game.options.map_size * 10,
    });
    echo(game.ships[k].name + " has been teleported to: x:" +
    game.ships[k].x + ", y:" + game.ships[k].y + "."
    );
  }
};
game.modding.commands.list = function(req) {
  for (k=0;k<game.ships.length;k++) {
    echo(game.ships[k].name + " : " + game.ships[k].custom.team + "," + game.ships[k].team + "," + game.ships[k].hue
    );
  }
};
game.modding.commands.score_test = function(req) {
        for (y=0;y<game.ships.length;y++) {
          echo(Math.max(ship.score));
        }
};




var s={};
//Tier 1
s.Vewlar_101 = (function(){var r=Function('return(function(){var model;return model={name:\'Vewlar\',level:1,model:1,size:1,specs:{shield:{capacity:[110,130],reload:[5,7]},generator:{capacity:[40,60],reload:[22,35]},ship:{mass:175,speed:[100,110],rotation:[50,60],acceleration:[100,115]}},bodies:{hands:{section_segments:12,offset:{x:30,y:0,z:-20},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-120,-85,-80,-50,-30,0,40,45,50,70,70],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,15,15,20,20,20,20,20,20,15,0,0],height:[0,15,15,15,15,15,15,15,15,15,0,0],texture:[63,1,1,2,2,3,3,4,63],propeller:true},uphands:{section_segments:8,offset:{x:30,y:0,z:0},position:{x:[-8,-5,0,0,0,0,0,0,0,0,0,0],y:[-75,-55,-40,-10,-5,0,25,40,60,95,95],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,10,10,9,7,0,0],height:[0,10,10,10,10,10,10,10,9,7,0,0],texture:[10,1,2,3,3,3,3,63,4],propeller:true},sides:{section_segments:12,offset:{x:50,y:-20,z:-20},position:{x:[-8,-8,-6,-2,0,0,0,0,0,-3,-3],y:[0,-90,-80,-50,-30,0,40,50,65,90,90],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,0,7,7,7,7,7,7,7,7,7,0],height:[0,0,15,20,20,20,20,20,20,15,0,0],texture:[4,4,3,2,63,63,2,3,4],propeller:false},main1:{section_segments:8,offset:{x:0,y:30,z:5},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-180,-150,-150,-70,-40,0,10,30,50,45],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,20,20,30,30,30,30,25,20,0,0],height:[0,20,20,20,20,20,20,20,20,0,0],texture:[63,13,3,2,2,3,3,13,17],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0,0,0,0],y:[-60,-30,20,40,50],z:[0,0,0,0,0,0,0]},width:[0,15,17,15,5],height:[0,10,10,10,5],texture:[4,9,63,63,0]},cannons:{section_segments:8,offset:{x:30,y:-100,z:-20},position:{x:[0,0,0,0],y:[-20,-15,20,30],z:[0,0,0,0]},width:[3,5,5,3],height:[3,5,5,3],texture:[6,10,5],laser:{damage:[10,12],rate:3,type:2,speed:[200,250],number:1,error:0,recoil:7}}},wings:{main:{length:[80,30,0],width:[100,70,40],angle:[10,0,0],position:[0,50,90,0],texture:[11,4],bump:{position:30,size:1},offset:{x:0,y:-40,z:-25}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3,2.742,2.489,2.355,2.273,1.98,1.735,1.555,1.493,1.58,1.672,1.74,1.846,1.999,2.214,2.338,2.481,2.583,1.537,1.708,1.768,1.775,2.039,1.998,1.629,1.603,1.629,1.998,2.039,1.775,1.768,1.708,1.537,2.583,2.481,2.338,2.214,1.999,1.846,1.74,1.672,1.58,1.493,1.555,1.735,1.98,2.273,2.355,2.489,2.742],"lasers":[{"x":0.6,"y":-2.4,"z":-0.4,"angle":0,"damage":[10,12],"rate":3,"type":2,"speed":[200,250],"number":1,"spread":0,"error":0,"recoil":7},{"x":-0.6,"y":-2.4,"z":-0.4,"angle":0,"damage":[10,12],"rate":3,"type":2,"speed":[200,250],"number":1,"spread":0,"error":0,"recoil":7}],"radius":3}')),JSON.stringify(r)})();

//Tier 2
s.Ada_Squid_201 = (function(){var r=Function('return(function(){var model;return model={name:\'Ada-Squid\',level:2,model:1,size:1.6,specs:{shield:{capacity:[160,200],reload:[3,5]},generator:{capacity:[60,80],reload:[35,48]},ship:{mass:275,speed:[70,80],rotation:[40,50],acceleration:[90,100]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0],y:[-60,-50,-20,40,50,80,90,90],z:[0,0,0,0,0,0,0,0]},width:[0,10,15,20,20,15,10,0],height:[0,10,15,15,15,15,10,0],texture:[4,63,2,3,3,63,17],propeller:true},cockpit:{section_segments:12,offset:{x:0,y:40,z:12},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-30,-20,-10,20,30,40],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,8,9.5,10,8,0],height:[0,7,7,7,7,0],texture:[4,63,9,3,2]},cannons:{section_segments:12,offset:{x:30,y:50,z:-10},position:{x:[0,0,0,0,0,0,0],y:[-45,-45,-25,20,35,45,40],z:[0,0,0,0,0,0,0]},width:[0,5,10,10,7,5,0],height:[0,5,10,10,7,5,0],angle:0,laser:{damage:[15,20],rate:1,type:2,speed:[150,170],recoi:50,number:2,angle:3,error:0},propeller:true,texture:[17,3,2,10,63,16.9]},cannons1:{section_segments:12,offset:{x:30,y:50,z:10},position:{x:[0,0,0,0,0,0,0],y:[-45,-45,-25,20,35,45,40],z:[0,0,0,0,0,0,0]},width:[0,5,10,10,7,5,0],height:[0,5,10,10,7,5,0],angle:0,laser:{damage:[15,20],rate:1,type:2,speed:[150,170],recoi:50,number:1,angle:3,error:0},propeller:true,texture:[17,3,2,10,63,16.9]},rejoin:{section_segments:12,offset:{x:15,y:50,z:0},position:{x:[0,0,0,0,0,-5,-5],y:[-70,-50,-25,20,30,40,40],z:[0,0,0,0,0,0,0]},width:[0,5,10,10,7,5,0],height:[0,5,10,10,7,5,0],angle:0,texture:[4,3,63,3,4,16.9]}},wings:{join:{doubleside:true,offset:{x:20,y:46,z:0},length:[30,5],width:[50,40,30],angle:[30,0,0],position:[0,10,20,0],texture:[10,63],bump:{position:20,size:5}},join1:{doubleside:true,offset:{x:20,y:46,z:0},length:[30,5],width:[50,40,30],angle:[-30,0,0],position:[0,10,20,0],texture:[10,63],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[1.92,1.808,1.639,1.249,1.016,0.863,0.768,0.711,0.668,0.642,0.626,0.625,0.638,0.661,1.191,1.289,1.426,1.582,2.168,2.556,3.038,3.063,3.24,3.196,2.92,2.886,2.92,3.196,3.24,3.063,3.038,2.556,2.168,1.582,1.426,1.289,1.191,0.661,0.64,0.625,0.626,0.642,0.668,0.711,0.768,0.863,1.016,1.249,1.639,1.808],"lasers":[{"x":0.96,"y":0.16,"z":-0.32,"angle":0,"damage":[15,20],"rate":1,"type":2,"speed":[150,170],"number":2,"spread":3,"error":0,"recoil":0},{"x":-0.96,"y":0.16,"z":-0.32,"angle":0,"damage":[15,20],"rate":1,"type":2,"speed":[150,170],"number":2,"spread":3,"error":0,"recoil":0},{"x":0.96,"y":0.16,"z":0.32,"angle":0,"damage":[15,20],"rate":1,"type":2,"speed":[150,170],"number":1,"spread":3,"error":0,"recoil":0},{"x":-0.96,"y":0.16,"z":0.32,"angle":0,"damage":[15,20],"rate":1,"type":2,"speed":[150,170],"number":1,"spread":3,"error":0,"recoil":0}],"radius":3.24}')),JSON.stringify(r)})();
s.Cobalt_202 = (function(){var r=Function('return(function(){var model;return model={name:\'Cobalt\',level:2,model:2,size:1.8,specs:{shield:{capacity:[120,160],reload:[2,5]},generator:{capacity:[70,105],reload:[30,40]},ship:{mass:60,speed:[125,135],rotation:[100,120],acceleration:[100,115]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-50,-55,-60,-20,10,40,55,75,70],z:[0,0,0,0,0,0,0,0,0]},width:[0,0,12,17,15,15,15,10,0],height:[0,0,15,15,15,15,15,10,0],propeller:true,texture:[4,3,10,2,2,3,4,16.9]},cockpit:{section_segments:12,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0,0,0,0],y:[-20,-5,20,40,50,60],z:[0,0,0,0,0,0]},width:[0,10,10,10,7,0],height:[0,10,10,10,7,0],texture:[63,9,9,4,63]},cannon:{section_segments:8,offset:{x:0,y:-50,z:10},position:{x:[0,0,0,0,0,0],y:[-25,-30,-20,0,20,30],z:[0,0,0,0,0,0]},width:[0,5,8,11,10,0],height:[0,5,8,11,10,0],angle:0,laser:{damage:[3,7],rate:7,type:1,speed:[120,150],number:1,angle:0,error:5},propeller:false,texture:[16.9,13,63,16.9]},cannon_details:{section_segments:8,offset:{x:0,y:-50,z:10},position:{x:[0,0,0,0,0,0],y:[-25,-25,-20,0,20,30],z:[0,0,0,0,0,0]},width:[0,8,9,12,10,0],height:[0,8,9,12,10,0],angle:0,texture:[4,11,63,13,10,0]},propulsors:{section_segments:8,offset:{x:20,y:15,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-50,-50,-40,-10,15,20,30,50,55,50],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,10,10,10,10,7,5,0],height:[0,5,10,10,10,10,10,10,5,0],texture:[16.9,4,3,3,63,63,3,63,16.9],propeller:true},laser:{section_segments:8,offset:{x:15,y:35,z:20},position:{x:[0,0,0,0,0,0,0,0],y:[-60,-60,-50,-30,-5,10,27,30],z:[0,0,0,0,0,0,0,0]},width:[0,3,5,5,5,5,5,0],height:[0,3,5,7,7,7,5,0],angle:0,texture:[4,3,4,63,2,3,4],laser:{damage:[3,4],rate:5,type:1,speed:[175,190],number:1,angle:0},propeller:false}},wings:{main:{doubleside:true,offset:{x:10,y:30,z:10},length:[25,20,0],width:[25,25,15],angle:[10,20,0],position:[0,10,25],texture:[63,10],bump:{position:20,size:4}},main1:{doubleside:true,offset:{x:10,y:0,z:10},length:[25,20,0],width:[25,25,15],angle:[10,20,0],position:[0,10,25],texture:[63,10],bump:{position:20,size:4}},winglet:{doubleside:true,offset:{x:5,y:50,z:20},length:[10,10,0],width:[25,25,15],angle:[40,10,0],position:[0,5,20],texture:[4,63],bump:{position:20,size:4}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.886,2.882,2.203,1.636,1.492,1.548,1.496,1.428,1.333,1.229,1.161,1.123,1.328,1.515,1.811,2.068,2.194,2.251,2.635,2.96,2.839,2.356,2.676,2.905,2.724,2.705,2.724,2.905,2.676,2.356,2.839,2.96,2.635,2.251,2.194,2.068,1.811,1.515,1.328,1.123,1.161,1.229,1.333,1.428,1.496,1.548,1.492,1.636,2.203,2.882],"lasers":[{"x":0,"y":-2.88,"z":0.36,"angle":0,"damage":[3,7],"rate":7,"type":1,"speed":[120,150],"number":1,"spread":0,"error":5,"recoil":0},{"x":0.54,"y":-0.9,"z":0.72,"angle":0,"damage":[3,4],"rate":5,"type":1,"speed":[175,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.54,"y":-0.9,"z":0.72,"angle":0,"damage":[3,4],"rate":5,"type":1,"speed":[175,190],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.96}')),JSON.stringify(r)})();

//Tier 3
s.Aternaki_301 = (function(){var r=Function('return(function(){var model;return model={name:\'Aternaki\',level:3,model:1,size:1.6,specs:{shield:{capacity:[150,200],reload:[5,7]},generator:{capacity:[50,100],reload:[36,56]},ship:{mass:275,speed:[80,100],rotation:[35,65],acceleration:[110,125]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-100,-80,-20,40,50,90,95,110,105],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,15,25,25,25,20,20,15,0],height:[0,15,20,20,20,15,15,15,0],texture:[63,3,2,4,3,63,10,17],propeller:true},cockpit:{section_segments:12,offset:{x:0,y:-55,z:13},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-40,-30,-20,-10,30,40],z:[-10,-3,0,0,2,2]},width:[0,5,5,10,17,15],height:[0,5,5,10,15,15],texture:[63,63,4,9,2]},cannons:{section_segments:12,offset:{x:0,y:20,z:20},position:{x:[0,0,0,0,0,0,0],y:[-40,-45,-30,20,40,50,55],z:[0,0,0,0,0,0,0]},width:[0,12,10,10,7,2,0],height:[0,7,10,10,7,5,0],angle:0,propeller:false,texture:[17,4,3,2,4,4]},sides:{section_segments:8,offset:{x:20,y:20,z:0},position:{x:[0,3,5,4,6,5,5],y:[-60,-50,-30,10,30,50,50],z:[0,0,0,0,0,0,0]},width:[0,4,8,10,7,5,0],height:[0,10,15,15,15,10,0],angle:0,texture:[63,2,11,2,63,6],propeller:true,laser:{damage:[5,10],rate:7,type:1,speed:[150,170],recoi:10,number:1,angle:0,error:0}},sides1:{section_segments:8,offset:{x:20,y:20,z:0},position:{x:[0,3,5,4,6,5,5],y:[-60,-50,-30,10,30,50,50],z:[0,0,0,0,0,0,0]},width:[0,4,8,10,7,5,0],height:[0,10,15,15,15,10,0],angle:0,texture:[63,2,11,2,63,6],propeller:true,laser:{damage:[5,10],rate:5,type:1,speed:[150,170],recoi:10,number:1,angle:0,error:0}},cannon:{section_segments:12,offset:{x:0,y:-15,z:-20},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,0,20,30],z:[0,0,0,0,0,20]},width:[0,5,8,11,7,0],height:[0,5,8,11,10,0],angle:0,laser:{damage:[5,6],rate:4,type:1,speed:[160,180],number:1,error:2.5},propeller:false,texture:[17,4,13,18]}},wings:{details:{doubleside:true,offset:{x:10,y:-65,z:0},length:[20,0],width:[30,20],angle:[0,0],position:[0,10,10],texture:63,bump:{position:20,size:10}},details_:{doubleside:true,offset:{x:10,y:-65,z:1},length:[15,0],width:[25,15],angle:[0,0],position:[0,8,9],texture:11,bump:{position:20,size:10}},main:{doubleside:true,offset:{x:20,y:20,z:-5},length:[20,30,10,0],width:[50,60,40,20],angle:[-10,-15,-30,0],position:[0,0,40,60,0],texture:[4,11,630],bump:{position:20,size:5}},main1:{doubleside:true,offset:{x:20,y:20,z:5},length:[20,30,10,0],width:[50,60,40,20],angle:[10,15,30,0],position:[0,0,40,60,0],texture:[4,11,63],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.2,2.956,2.568,2.365,2.25,1.79,1.305,1.23,1.168,1.127,1.107,1.365,1.447,1.579,1.76,2.021,2.432,2.854,3.394,3.797,2.575,2.306,2.437,3.208,3.553,3.527,3.553,3.208,2.437,2.306,2.575,3.797,3.394,2.854,2.432,2.021,1.76,1.579,1.456,1.365,1.107,1.127,1.168,1.23,1.305,1.79,2.25,2.365,2.568,2.956],"lasers":[{"x":0.64,"y":-1.28,"z":0,"angle":0,"damage":[5,10],"rate":7,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.64,"y":-1.28,"z":0,"angle":0,"damage":[5,10],"rate":7,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.64,"y":-1.28,"z":0,"angle":0,"damage":[5,10],"rate":5,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.64,"y":-1.28,"z":0,"angle":0,"damage":[5,10],"rate":5,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-2.08,"z":-0.64,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":3.797}')),JSON.stringify(r)})();
s.Plinter_302 = (function(){var r=Function('return(function(){var model;return model={name:\'Plinter\',level:3,model:2,size:1.5,specs:{shield:{capacity:[120,175],reload:[3,6]},generator:{capacity:[80,110],reload:[35,40]},ship:{mass:165,speed:[120,140],rotation:[45,55],acceleration:[80,100]}},bodies:{main:{section_segments:8,offset:{x:0,y:-20,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-60,-50,-50,-30,0,30,40,100,120,115],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,10,20,22,22,22,19,10,0],height:[0,12,12,12,12,12,12,12,12,0],texture:[4,3,2,10,3,3,4,63,17],propeller:true,laser:{damage:[3,6],rate:8,type:1,speed:[150,170],number:3,angle:5,error:0}},shield:{section_segments:12,offset:{x:26,y:-20,z:5},position:{x:[-15,-5,-2,-1,-1,0,0,0,0,0,0],y:[-50,-40,-30,-20,-10,30,40,80,90,88],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,10,10,7,0],height:[0,10,10,10,10,10,10,10,7,0],texture:[4,63,63,63,1,1,10,4,17],propeller:true},cockpit:{section_segments:12,offset:{x:0,y:-20,z:17},position:{x:[0,0,0,0,0,0,0,0],y:[-40,-30,10,40,60,80,95],z:[0,0,0,0,0,0,0,0]},width:[0,10,12,12,12,10,0],height:[0,10,10,10,10,10,0],texture:[63,9,4,3,2,1]},side:{section_segments:8,offset:{x:60,y:30,z:-5},position:{x:[-20,-10,-5,-2,-3,-3,-3,-3],y:[-155,-140,-110,-60,0,30,40,40],z:[0,0,0,0,0,0,0,0]},width:[0,7,10,12,12,11,10,0],height:[0,5,10,10,10,10,10,0],texture:[63,2,3,4,63,13,17],propeller:true},cannon:{section_segments:8,offset:{x:73,y:19,z:-2},position:{x:[0,0,0,-3,-5,-7],y:[-45,-50,-30,0,10,20],z:[0,0,0,0,0,0]},width:[0,5,5,5,5,0],height:[0,5,5,5,5,0],angle:0,laser:{damage:[5,7],rate:4,type:1,speed:[120,150],number:5,angle:5,error:0},propeller:false,texture:[17,10,2,13,4]}},wings:{main:{doubleside:true,offset:{x:0,y:-5,z:0},length:[55,40,0],width:[70,70,20],angle:[-5,-10],position:[35,20,-10],texture:[11,63],bump:{position:20,size:5}},winglets:{doubleside:true,offset:{x:24,y:40,z:13},length:[20,10,0],width:[30,30,10],angle:[20,25],position:[0,15,30],texture:[4,3],bump:{position:20,size:2}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.4,2.261,3.937,3.929,3.754,3.4,3.06,2.743,2.517,2.518,2.923,2.916,2.848,2.707,2.504,2.369,2.356,2.532,2.784,2.907,2.735,2.535,2.321,2.621,3.015,3.006,3.015,2.621,2.321,2.535,2.735,2.907,2.784,2.532,2.356,2.369,2.504,2.707,2.848,2.916,2.923,2.518,2.517,2.743,3.06,3.4,3.754,3.929,3.937,2.261],"lasers":[{"x":0,"y":-2.4,"z":0.3,"angle":0,"damage":[3,6],"rate":8,"type":1,"speed":[150,170],"number":3,"spread":5,"error":0,"recoil":0},{"x":2.19,"y":-0.93,"z":-0.06,"angle":0,"damage":[5,7],"rate":4,"type":1,"speed":[120,150],"number":5,"spread":5,"error":0,"recoil":0},{"x":-2.19,"y":-0.93,"z":-0.06,"angle":0,"damage":[5,7],"rate":4,"type":1,"speed":[120,150],"number":5,"spread":5,"error":0,"recoil":0}],"radius":3.937}')),JSON.stringify(r)})();
s.Whiplash_303 = (function(){var r=Function('return(function(){var detail,featherTwo,key,mainYpos,model,ref,value;Array.prototype.mult=function(m){return this.map(function(v){return v*m})};Array.prototype.add=function(m){return this.map(function(v){return v+m})};ref=[];for(key in ref){key=key;key=key;value=ref[key];delete Array.prototype[key];Object.defineProperty(Array.prototype,key,{value:value,configurable:true,enumerable:false})}mainYpos=0;detail=function(n,xx,yy,zz,length,width,center,tilt,rise,angle,texture){return model.bodies[\'main\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz},position:{x:[0,0,0,0,0],y:[-20,-20,center,0,0].mult(length),z:[tilt,tilt,rise,0,0]},width:[0,5,5,5,0].mult(width),height:[0,3,3,3,0],texture:texture,angle:angle}};featherTwo=function(n,xx,yy,zz,size,angle){model.bodies[\'main\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz},position:{x:[-8.5,-5.5,0,4,4].mult(size),y:[-65,-60,0,8,8].mult(size),z:[0,0,0,0,0]},width:[0,4,9,3,0].mult(size),height:[2,2,2,2,0].mult(size),texture:2,angle:angle};model.bodies[\'color\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz-0.1},position:{x:[-15,-8,0,0,0].add(7).mult(size),y:[-64.9,-59.9,-0.1,8,8].mult(size),z:[0,0,0,0,0]},width:[0,5,9,4,0].mult(size),height:[2,2,2,2,0].mult(size),texture:63,angle:angle};model.bodies[\'dark\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz+0.1},position:{x:[-12,-7,0,0,0].add(5).mult(size),y:[-64.1,-59.1,0.1,8,8].mult(size),z:[0,0,0,0,0]},width:[0,2,2,2,0].mult(size),height:[2,2,2,2,0].mult(size),texture:4,angle:angle};model.bodies[\'colorTwo\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz+0.2},position:{x:[7,7,0,0.7,10,10].add(-4).mult(size),y:[-30,-30,-17,-11,0,0].mult(size).add(-15),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(size),height:[0,2,2,2,2,0].mult(size),texture:63,angle:angle};model.bodies[\'highlightSide\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz-0.2},position:{x:[0,0,-0.5,0].add(29).mult(size),y:[-5,-5,0,0].mult(size).add(15*size),z:[0,0,0,0]},width:[0,43,44,0].mult(size),height:[0,2,2,0].mult(size),angle:100+angle,texture:17};model.bodies[\'highlightTip\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz-0.3},position:{x:[0,-1,0,0].add(29).mult(size),y:[-5,-5,0,0].mult(size).add(57.5*size),z:[0,0,0,0]},width:[0,8,10,0].mult(size),height:[0,2,2,0].mult(size),angle:155+angle,texture:17};return model.bodies[\'highlightEdge\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz-0.3},position:{x:[0,0,2.5,0].add(-0.2).mult(size),y:[-5,-5,0,0].mult(size).add(13.6*size),z:[0,0,0,0]},width:[0,6,6.6,0].mult(size),height:[0,2,2,0].mult(size),angle:65+angle,texture:17}};model={name:\'Whiplash\',level:3,model:3,size:1.1,specs:{shield:{capacity:[150,175],reload:[7,10]},generator:{capacity:[100,150],reload:[35,47]},ship:{mass:175,speed:[110,130],rotation:[40,60],acceleration:[65,90],zoom:1.4}},bodies:{main:{section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],offset:{x:0,y:120,z:-1.3},position:{x:[0,0,0,0,0,0,0],y:[-23,-23,-20,-15,18,24,10].mult(1.74),z:[0,0,0,0,0,0,0]},width:[0,41,43,42,34,24,0],height:[0,25,25,29,29,19,0],propeller:true,texture:[2,2,17,2,15.1,17]},cockpit:{section_segments:8,offset:{x:0,y:115,z:21},position:{x:[0,0,0,0,0,0,0],y:[-7,-7,-5,1,8,12,12].mult(3),z:[-2,-2,0,0,0,0,0]},width:[0,4,5,6.7,5.5,3,0].mult(2),height:[0,2,2.2,2.5,3,2,0].mult(2),texture:[4,4,9,9,4]},gun:{section_segments:20,offset:{x:0,y:67,z:0},position:{x:[0,0,0,0,0],y:[-5,-2,0,3,5].mult(2.5),z:[0,0,0,0,0]},width:[0,3,3,5,5].mult(1.3),height:[0,3,3,5,5].mult(1.3),texture:[2,17,2,17],laser:{number:5,damage:[7,10],speed:[200,275],recoil:20,rate:4,error:0,angle:0,type:1}},railBorders:{section_segments:[45,135,225,315],offset:{x:26,y:-40+mainYpos,z:0},position:{x:[0,0,0,0],y:[-100,-100,120,120],z:[0,0,0,0]},width:[0,10,10,0].mult(0.7),height:[0,25,25,0],texture:3},rails:{section_segments:[45,135,225,315],offset:{x:17.6,y:-40+mainYpos,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-100,-100,-80,-60,-40,-20,0,20,40,60,80,100,120,120],z:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,8,8,8,8,8,8,8,8,8,8,8,8,0].mult(0.62),height:[0,25,25,25,25,25,25,25,25,25,25,25,25,0],texture:[3,3,17,3,17,3,17,3,17,3,17,3]},railThings1:{section_segments:[45,135,225,315],offset:{x:10,y:-40+mainYpos,z:12},position:{x:[5,5,0,0,5,5],y:[-99.9,-99.9,-90,110,119.9,119.9],z:[0,0,0,0,0,0]},width:[0,5,5,5,5,0].mult(0.8),height:[0,5,5,5,5,0].mult(1.4),texture:13},railThings2:{section_segments:[45,135,225,315],offset:{x:10,y:-40+mainYpos,z:-12},position:{x:[5,5,0,0,5,5],y:[-99.9,-99.9,-90,110,119.9,119.9],z:[0,0,0,0,0,0]},width:[0,5,5,5,5,0].mult(0.8),height:[0,5,5,5,5,0].mult(1.4),texture:13},squiggleDetail:{section_segments:[45,135,225,315],offset:{x:22.5,y:-40,z:19},position:{x:[0,0,7,7,0,0,7,7,0,0,7,7,0,0],y:[-100,-100,-80,-60,-40,-20,0,20,40,60,80,100,120,120],z:[-1,-1,0,0,0,0,0,0,0,0,0,0,-1,-1]},width:[0,2,2,2,2,2,2,2,2,2,2,2,2,0].mult(1.5),height:[0,2,2,2,2,2,2,2,2,2,2,2,2,0],texture:63},sweptBack:{section_segments:[0,45,90,135,180],offset:{x:-47,y:80,z:0},position:{x:[0,0,0,0,0,0,0,0,0],y:[-33,-33,-21,-12,-6,-3,0,2,10].mult(7.5),z:[0,0,0,0,0,0,0,0,0]},width:[0,1,2,4,7,11,11,7,0].mult(5),height:[0,3,3,3,3,3,3,3,0].mult(5),texture:2},frontConnections1:{section_segments:[45,135,225,315],offset:{x:31,y:-160,z:11},position:{x:[0,0,27,27],y:[-15,-15,15,15].mult(1.1),z:[0,0,4,4]},width:[0,10,10,0],height:[0,3,3,0],angle:-90,texture:13},frontConnections2:{section_segments:[45,135,225,315],offset:{x:31,y:-160,z:-11},position:{x:[0,0,27,27],y:[-15,-15,15,15].mult(1.1),z:[0,0,-4,-4]},width:[0,10,10,0],height:[0,3,3,0],angle:-90,texture:13},frontLightThings:{section_segments:20,offset:{x:22.5,y:-140,z:0},position:{x:[0,0,0,0,0],y:[-7,-8,-8.5,-7,0],z:[0,0,0,0,0]},width:[0,3,4,5,6].mult(1.2),height:[0,3,4,5,6].mult(1.7),texture:[17,4,2,18]},diamonds:{vertical:true,section_segments:6,offset:{x:60,y:13,z:-65},position:{x:[0,0,0,0],y:[0,4,5,5],z:[0,0,0,0]},width:[8,7,6,0].mult(1.3),height:[12,11,10,0].mult(1.9),texture:[3.9,2.9,16.9]},ringSupport1:{section_segments:20,offset:{x:39,y:50,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-8,-8,-5,-5,-2,-2,2,2,5,5,8,8],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,9,9,5,5,9,9,5,5,0].mult(1.3),height:[0,5,5,9,9,5,5,9,9,5,5,0].mult(1.3),angle:90,texture:[4,4,4,17,4,4,4,17,4]},ringSupport2:{section_segments:20,offset:{x:39,y:-30,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-8,-8,-5,-5,-2,-2,2,2,5,5,8,8],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,9,9,5,5,9,9,5,5,0].mult(1.3),height:[0,5,5,9,9,5,5,9,9,5,5,0].mult(1.3),angle:90,texture:[4,4,4,17,4,4,4,17,4]},ringSupport3:{section_segments:20,offset:{x:39,y:-110,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-8,-8,-5,-5,-2,-2,2,2,5,5,8,8],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,9,9,5,5,9,9,5,5,0].mult(1.3),height:[0,5,5,9,9,5,5,9,9,5,5,0].mult(1.3),angle:90,texture:[4,4,4,17,4,4,4,17,4]}}};({bar1:detail(1,47,100,11,1.4,1.3,-8,10,9,90,[3,8,15.1,3]),bar11:detail(11,47,100,10.9,1.41,1.6,-8,10,9,90,[63]),bar2:detail(2,47,115,7,1.5,1.3,-9,14,13,90,[3,8,15.1,3]),bar22:detail(22,47,115,6.9,1.51,1.6,-9,14,13,90,[63]),bar3:detail(3,47,130,3,1.6,1.3,-10,18,17,90,[3,8,15.1,3]),bar33:detail(33,47,130,2.9,1.61,1.6,-10,18,17,90,[63]),bar4:detail(8,47,145,1,1.7,1.3,-10,20,19,90,[3,8,15.1,3]),bar44:detail(88,47,145,0.9,1.71,1.6,-10,20,19,90,[63]),spike1:featherTwo(4,-90,45,-5,1,70),spike2:featherTwo(5,-95,60,-5,1,90),spike3:featherTwo(6,-105,75,-5,1,130),spike4:featherTwo(7,-85,95,-5,1,155)});return model}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.916,3.396,3.858,3.71,2.827,2.305,2.003,1.807,1.676,1.586,1.53,1.498,1.547,1.624,3.498,3.786,3.876,4.202,4.312,3.832,4.213,3.162,3.491,3.563,3.582,3.565,3.582,3.563,3.491,3.162,4.213,3.832,4.312,4.202,3.876,3.786,3.498,1.624,1.547,1.498,1.53,1.586,1.676,1.807,2.003,2.305,2.827,3.71,3.858,3.396],"lasers":[{"x":0,"y":1.199,"z":0,"angle":0,"damage":[7,10],"rate":4,"type":1,"speed":[200,275],"number":5,"spread":0,"error":0,"recoil":20}],"radius":4.312}')),JSON.stringify(r)})();
s.Apolonium_304 = (function(){var r=Function('return(function(){var model;return model={name:\'Apolonium\',level:3,model:4,size:1.6,specs:{shield:{capacity:[140,180],reload:[4,7]},generator:{capacity:[100,150],reload:[55,60]},ship:{mass:120,speed:[60,100],rotation:[60,80],acceleration:[70,100]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-80,-70,-50,-20,20,30,50,70,85,85],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,15,20,25,25,25,25,20,15,0],height:[0,10,15,15,15,15,15,15,10,0],texture:[4,1,2,10,2,3,4,13,17],propeller:true,laser:{damage:[10,15],rate:6,type:1,speed:[100,130],number:1,angle:0,error:5}},cockpit:{section_segments:8,offset:{x:0,y:-30,z:10},position:{x:[0,0,0,0,0,0,0],y:[-30,-20,-10,30,70,80,100],z:[0,0,0,0,0,0,0]},width:[0,7,10,15,15,15,0],height:[0,12,12,12,12,12,0],texture:[4,13,9,63,10,4]},cannons:{section_segments:12,offset:{x:25,y:50,z:0},position:{x:[0,0,0,-1,-3,-7,-10],y:[-50,-45,-20,10,20,30,40],z:[0,0,0,0,0,0,0]},width:[0,7,7,7,7,7,0],height:[0,7,7,7,7,7,0],angle:0,texture:[4,10,63,2,3,4]},cannons1:{section_segments:12,offset:{x:20,y:40,z:10},position:{x:[0,0,0,0,0,0,0],y:[-50,-45,-20,10,20,30,25],z:[0,0,0,0,0,0,0]},width:[0,7,7,7,7,5,0],height:[0,7,7,7,7,5,0],angle:0,laser:{damage:[11,16],rate:1,type:1,speed:[100,130],number:1,angle:0,error:0},propeller:1,texture:[63,4,3,10,13,4]},wingends:{section_segments:8,offset:{x:25,y:55,z:-10},position:{x:[-7,-7,-2,0,0,0,0,0],y:[-100,-90,-50,-30,20,40,50,45],z:[0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,15,10,0],height:[0,10,10,10,10,10,10,0],texture:[4,1,2,3,63,13,17],propeller:true,angle:0}},wings:{main2:{length:[15,30,10],width:[80,70,50,20],angle:[-10,-15,-20],position:[0,10,-10,-30],texture:[4,10,63],doubleside:true,bump:{position:30,size:5},offset:{x:35,y:50,z:-10}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.56,2.46,2.31,1.898,1.568,1.46,1.411,1.304,1.225,1.177,1.15,1.149,1.174,2.843,2.912,2.992,3.059,3.182,3.268,3.277,3.351,3.432,3.542,3.533,3.42,2.725,3.42,3.533,3.542,3.432,3.351,3.277,3.268,3.182,3.059,2.992,2.912,2.843,1.174,1.149,1.15,1.177,1.225,1.304,1.411,1.46,1.568,1.898,2.31,2.46],"lasers":[{"x":0,"y":-2.56,"z":0,"angle":0,"damage":[10,15],"rate":6,"type":1,"speed":[100,130],"number":1,"spread":0,"error":5,"recoil":0},{"x":0.64,"y":-0.32,"z":0.32,"angle":0,"damage":[11,16],"rate":1,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.64,"y":-0.32,"z":0.32,"angle":0,"damage":[11,16],"rate":1,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.542}')),JSON.stringify(r)})();

//Tier 4
s.Praetor_401 = (function(){var r=Function('return(function(){var barrel,highlight,i,j,k,key,model,ref,value;Array.prototype.mult=function(m){return this.map(function(v){return v*m})};Array.prototype.add=function(m){return this.map(function(v){return v+m})};ref=[];for(key in ref){key=key;key=key;key=key;key=key;value=ref[key];delete Array.prototype[key];Object.defineProperty(Array.prototype,key,{value:value,configurable:true,enumerable:false})}barrel=function(n,xx,zz){return model.bodies[\'long\'+n]={section_segments:20,offset:{x:xx,y:-170,z:zz},position:{x:[0,0,0,0],y:[-60,-70,70,70],z:[0,0,0,0]},width:[0,4,4,0],height:[0,4,4,0],texture:[17,4]}};highlight=function(n,xx,yy,width,edge,slide,angle){return model.bodies[\'highlight\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:0},position:{x:[edge,edge,0,0].add(slide),y:[-2,-2,2,2],z:[0,0,0,0]},width:[0,10,10,0].mult(width),height:[0,0,0,0],texture:17,angle:angle}};model={name:\'Praetor\',level:4,model:1,size:1.2,specs:{shield:{capacity:[180,225],reload:[5,8]},generator:{capacity:[110,150],reload:[35,45]},ship:{mass:180,speed:[85,100],rotation:[35,40],acceleration:[100,120]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-100,-100,-80,-70,0,0,10,90,100,90],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,19,25,27,27,29,30,30,24,0],height:[0,19,20,20,20,21,20,20,20,0],texture:[3,3,63,8,17,3,3,12,17],propeller:true},sideEngines:{section_segments:8,offset:{x:26,y:58,z:5},position:{x:[-6,-1,0,0,0,0,0,0],y:[-20,-15,-10,-5,10,15,20,15].mult(2.6),z:[0,0,0,0,0,0,0,0]},width:[7,7,7,5,5,7,7,0],height:[7,7,7,5,5,7,7,0],texture:[12,63,8,13,8,3,17],propeller:true},cockpit:{section_segments:10,offset:{x:0,y:40,z:18},position:{x:[0,0,0,0,0],y:[-20,-16,3,14,17].mult(1.6),z:[2,0,0,0,0]},width:[0,6,8,6,0].mult(1.6),height:[0,5,7,5,0].mult(1.4),texture:[4,9,4]},cockpitBorders:{section_segments:10,offset:{x:15,y:40,z:18},position:{x:[-13,-6,-1,-4,0],y:[-20,-16,3,31,31].mult(1.6),z:[2,0,0,0,0]},width:[0,6,6,6,0].mult(0.7),height:[0,5,5,5,0].mult(0.5),texture:[63]},guns1:{section_segments:0,offset:{x:0,y:-240,z:12},position:{x:[0,0,0,0],y:[-1,-1,1,1],z:[0,0,0,0]},width:[0,1,1,0],height:[0,1,1,0],laser:{damage:[11,15],rate:7,number:1,speed:[160,200],angle:0,error:2,recoil:0}},guns2:{section_segments:0,offset:{x:0,y:-240,z:12},position:{x:[0,0,0,0],y:[-1,-1,1,1],z:[0,0,0,0]},width:[0,1,1,0],height:[0,1,1,0],laser:{damage:[11,15],rate:7,number:1,speed:[160,200],angle:0,error:2,recoil:0}},barrelRing1:{section_segments:20,offset:{x:0,y:-230,z:0},position:{x:[0,0,0,0,0,0,0],y:[3,-3,-3,-1,1,3,3],z:[0,0,0,0,0,0,0]},width:[16,16,18,20,20,18,16].mult(0.9),height:[16,16,18,20,20,18,16].mult(0.9),texture:[2,2,2,17,2]},barrelRing2:{section_segments:20,offset:{x:0,y:-215,z:0},position:{x:[0,0,0,0,0,0,0],y:[3,-3,-3,-1,1,3,3],z:[0,0,0,0,0,0,0]},width:[16,16,18,20,20,18,16].mult(0.9),height:[16,16,18,20,20,18,16].mult(0.9),texture:[2,2,2,17,2]},barrelRing3:{section_segments:20,offset:{x:0,y:-200,z:0},position:{x:[0,0,0,0,0,0,0],y:[3,-3,-3,-1,1,3,3],z:[0,0,0,0,0,0,0]},width:[16,16,18,20,20,18,16].mult(0.9),height:[16,16,18,20,20,18,16].mult(0.9),texture:[2,2,2,17,2]},barrelRing4:{section_segments:20,offset:{x:0,y:-160,z:0},position:{x:[0,0,0,0,0,0,0],y:[3,-3,-3,-1,1,3,3],z:[0,0,0,0,0,0,0]},width:[16,16,18,20,20,18,16].mult(0.9),height:[16,16,18,20,20,18,16].mult(0.9),texture:[2,2,2,17,2]}},wings:{main:{offset:{x:47,y:-50,z:0},doubleside:true,length:[0,20,20,20,20].mult(0.8),width:[0,300,240,150,80,40],angle:[0,0,0,0,0,0],position:[0,0,40,90,125,140],texture:[4,4,3,3,4],bump:{position:30,size:4}},connector:{offset:{x:-47,y:-50,z:0},length:[3,10,20],width:[300,300,80,80],position:[0,0,100,90],angle:[0,0,0],texture:[17,4],bump:{size:4,position:30}},mainColor:{offset:{x:70,y:20,z:2},doubleside:true,length:[0,5,5,5],width:[0,150,140,80,65],angle:[0,15,10,9],position:[0,7,17,36,38],texture:[63],bump:{position:26,size:4}},backFinBlack:{offset:{x:10,y:69,z:16},doubleside:true,length:[35],width:[40,10],angle:[50],position:[0,20],texture:4,bump:{position:30,size:0}},backFinColor:{offset:{x:9.9,y:69,z:16},doubleside:true,length:[30],width:[25,5],angle:[50],position:[0,18],texture:63,bump:{position:30,size:0}},centerBlackFin:{offset:{x:0,y:75,z:20},doubleside:true,length:[0,40],angle:[0,90],width:[0,25,12],position:[0,0,25],texture:[4],bump:{position:10,size:6}},centerColorFin:{offset:{x:0,y:75,z:20},doubleside:true,length:[0,36],angle:[0,90],width:[0,20,8],position:[0,0,23],texture:[63],bump:{position:10,size:13}}}};({barrel1:barrel(1,0,12),barrel2:barrel(2,10,6),barrel3:barrel(3,10,-6),barrel4:barrel(4,0,-12),highlight1:highlight(1,56,-160,5.5,1,2,103),highlight2:highlight(2,72.1,-77,6.6,1,2,99),highlight3:highlight(3,88,5,5.2,1,2,102.7),highlight4:highlight(4,103,53,3,1,2,114),highlight5:highlight(5,111,92.9,2.9,1,2,90),highlight6:highlight(6,111,110,1.2,0,-7.6,17),highlight7:highlight(7,95,114.6,1.3,0,-7.6,0),highlight8:highlight(8,78,114.3,1.3,0,-7.6,-17),highlight9:highlight(9,52,103.3,1.3,-1,3.4,-31),highlight10:highlight(10,42,100.2,0.2,0,3.4,0),highlight11:highlight(11,38,93.3,1.48,-2,0,-46)});i=j=0;while(j<=4){model.bodies[\'ring\'+i]={section_segments:20,offset:{x:18,y:i*10-55,z:13},position:{x:[0,0,0,0,0,0,0],y:[3,-3,-3,-1,1,3,3],z:[0,0,0,0,0,0,0]},width:[16,16,18,20,20,18,16].mult(0.5),height:[16,16,18,20,20,18,16].mult(0.5),texture:[2,2,2,17,2]};i=++j}i=k=0;while(k<3){model.bodies[\'emitter\'+i]={section_segments:20,vertical:true,offset:{x:23,y:9,z:i*15-79},position:{x:[0,0,0,0,0,0],y:[-1,5.4,5.5,5.3,5.7,6],z:[0,0,0,0,0,0]},width:[3,2.9,2.4,2.3,1.2,0].mult(2),height:[3,2.9,2.4,2.3,1.2,0].mult(2),texture:[4,3,2,17,13],angle:20};i=++k}return model}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.77,5.605,4.947,4.309,3.586,3.093,2.721,2.474,2.296,2.172,2.107,2.091,2.133,2.211,2.338,2.555,2.956,3.352,3.72,3.808,3.631,3.262,2.75,2.756,2.688,2.544,2.688,2.756,2.75,3.262,3.631,3.808,3.72,3.352,2.956,2.555,2.338,2.211,2.133,2.091,2.107,2.172,2.296,2.474,2.721,3.093,3.586,4.309,4.947,5.605],"lasers":[{"x":0,"y":-5.784,"z":0.288,"angle":0,"damage":[11,15],"rate":7,"speed":[160,200],"number":1,"spread":0,"error":2,"recoil":0},{"x":0,"y":-5.784,"z":0.288,"angle":0,"damage":[11,15],"rate":7,"speed":[160,200],"number":1,"spread":0,"error":2,"recoil":0}],"radius":5.77}')),JSON.stringify(r)})();
s.Raptor_402 = (function(){var r=Function('return(function(){var model;return model={name:\'Raptor\',level:4,model:2,size:1.6,specs:{shield:{capacity:[175,235],reload:[5,7]},generator:{capacity:[100,150],reload:[40,50]},ship:{mass:200,speed:[75,90],rotation:[50,60],acceleration:[80,90]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-120,-115,-80,-55,-15,20,70,80,75],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,3,20,25,30,30,20,15,0],height:[0,3,20,20,20,20,20,20,0],texture:[4,63,3,1,1,10,13,17],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-40,z:17},position:{x:[0,0,0,0,0,0,0,0,0],y:[-30,-20,10,40,60,75,80],z:[0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,0],height:[0,10,10,10,10,10,0],texture:[4,9,3,2,63,4,6]},cannons:{section_segments:12,offset:{x:100,y:-120,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-30,-30,-20,-10,-5,10,15,20,20],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,5,7,7,7,7,6,5,0],height:[0,5,7,7,7,7,6,5,0],texture:[17,4,3,2,63,3,2,8],propeller:false,angle:0,laser:{damage:[7,10],rate:10,type:1,speed:[120,150],recoil:30,number:1,error:0}},propulsors:{section_segments:10,offset:{x:60,y:20,z:-10},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-45,-25,-15,-5,20,30,40,55,65,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,15,13,10,7,0],height:[0,10,15,15,15,15,13,10,7,0],propeller:true,texture:[4,2,63,10,1,2,2,4,17]},sides:{section_segments:10,offset:{x:25,y:20,z:0},position:{x:[-7,-7,-3,-2,-2,-2,-2,-2,-2,-2],y:[-90,-75,-50,-5,20,30,50,60,65,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,15,13,10,7,0],height:[0,10,15,15,15,15,13,10,7,0],propeller:true,texture:[4,4,10,63,2,3,4,13,17]},cannons:{section_segments:10,offset:{x:60,y:0,z:-10},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-30,-30,-20,-10,-5,10,15,20,20],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,1,5,7,7,5,7,7,7],height:[0,1,5,7,7,4,4,7,7],texture:[17,4,63,13,13,13,2,8],propeller:false,angle:0,laser:{damage:[7,10],rate:7.5,type:1,speed:[120,150],recoil:0,number:1,error:0}},cannons1:{section_segments:10,offset:{x:10,y:-50,z:-20},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-30,-30,-20,-10,-5,10,15,20,20],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,1,5,7,7,7,7,7,7],height:[0,1,5,7,7,4,4,7,7],texture:[17,63,10,1,3,3,2,8],propeller:false,angle:0,laser:{damage:[7,10],rate:7.5,type:1,speed:[120,150],recoil:0,number:1,error:0}}},wings:{main:{doubleside:true,offset:{x:0,y:0,z:-6},length:[60,20,0,0],width:[100,50,30,0,0],angle:[0,-15,-20,0],position:[0,30,50,50,45],texture:[0,63,11],bump:{position:50,size:1}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.84,3.43,2.834,2.305,1.995,1.795,1.646,1.544,1.438,2.174,2.169,2.187,2.299,2.395,2.453,2.614,2.896,3.139,3.284,3.393,3.457,3.221,2.881,2.86,2.758,2.565,2.758,2.86,2.881,3.221,3.457,3.393,3.284,3.139,2.896,2.614,2.453,2.395,2.3,2.187,2.169,2.174,1.438,1.544,1.646,1.795,1.995,2.305,2.834,3.43],"lasers":[{"x":1.92,"y":-0.96,"z":-0.32,"angle":0,"damage":[7,10],"rate":7.5,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.92,"y":-0.96,"z":-0.32,"angle":0,"damage":[7,10],"rate":7.5,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.32,"y":-2.56,"z":-0.64,"angle":0,"damage":[7,10],"rate":7.5,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.32,"y":-2.56,"z":-0.64,"angle":0,"damage":[7,10],"rate":7.5,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.84}')),JSON.stringify(r)})();
s.Elnor_403 = (function(){var r=Function('return(function(){var model;return model={name:\'Elnor\',level:4,model:3,size:1.5,specs:{shield:{capacity:[170,220],reload:[3,5]},generator:{capacity:[175,200],reload:[50,55]},ship:{mass:225,speed:[85,105],rotation:[60,90],acceleration:[60,80]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-140,-120,-100,-80,-40,20,120,140,130],z:[0,0,0,0,0,0,0,0,0]},width:[1,10,15,20,25,30,35,15,0],height:[1,10,20,22,25,25,20,17,0],texture:[63,4,3,2,1,10,63,17],propeller:true},wingsdsfsd85gsd7453g2sd363g73gsg:{section_segments:6,offset:{x:21,y:50,z:0},position:{x:[-7,-7,-3,-1,3,5,5,5,5,5],y:[-120,-100,-80,-70,-30,10,90,100,95],z:[0,0,0,0,0,0,0,0,0]},width:[1,10,15,15,20,20,15,10,0],height:[1,10,15,15,15,15,15,10,0],texture:[63,18,4,3,2,10,63,17],propeller:true},cockpit:{section_segments:6,offset:{x:0,y:70,z:20},position:{x:[0,0,0,0,0,0,0,0,0],y:[-85,-70,-40,-10,20,40,50],z:[0,0,0,0,0,0,0]},width:[0,10,15,18,18,15,5],height:[0,15,20,20,20,15,0],texture:[63,9,9,9,13,4],propeller:false},reactors:{section_segments:8,offset:{x:100,y:110,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[-50,-40,-35,-20,10,35,50,45],z:[0,0,0,0,0,0,0,0]},width:[1,7,10,15,15,15,10,0],height:[1,7,10,15,15,15,10,0],texture:[63,63,2,1,11,63,17],angle:0,propeller:true,laser:{damage:[15,15],rate:7,type:1,speed:[160,160],number:1,error:0}},shields:{section_segments:6,offset:{x:60,y:60,z:0},position:{x:[-20,-20,-10,5,5,5,-10,-15],y:[-130,-130,-110,-40,0,60,125,125],z:[0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,10,0],height:[0,5,15,25,25,25,15,0],texture:[1,63,10,3,2,1,12],angle:0,propeller:false},cannons:{section_segments:8,offset:{x:0,y:-110,z:-9},position:{x:[0,0,0,0,0],y:[-30,-35,0,20,30],z:[0,0,0,0,0]},width:[0,7,10,10,3],height:[0,7,7,7,3],texture:[17,4,10,17],angle:0,laser:{damage:[50,50],rate:7,type:1,speed:[180,180],number:1,error:0}}},wings:{winglets:{doubleside:true,offset:{x:20,y:54,z:0},length:[90,20,20],width:[100,40,25],angle:[5,-5,0],position:[0,60,90,70,0],texture:[18,63],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.355,3.927,2.767,2.096,2.486,2.483,2.383,2.324,2.237,2.149,2.107,2.115,2.172,2.262,2.415,2.516,2.669,4.158,4.895,6.096,6.014,5.684,5.755,5.822,4.581,4.208,4.581,5.822,5.755,5.684,6.014,6.096,4.895,4.158,2.669,2.516,2.415,2.262,2.172,2.115,2.107,2.149,2.237,2.324,2.383,2.483,2.486,2.096,2.767,3.927],"lasers":[{"x":3,"y":1.8,"z":0,"angle":0,"damage":[15,15],"rate":7,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3,"y":1.8,"z":0,"angle":0,"damage":[15,15],"rate":7,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-4.35,"z":-0.27,"angle":0,"damage":[50,50],"rate":7,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":6.096}')),JSON.stringify(r)})();
s.Penery_404 = (function(){var r=Function('return(function(){var model;return model={name:\'Penery\',level:4,model:4,size:1.5,specs:{shield:{capacity:[175,200],reload:[5,7]},generator:{capacity:[100,175],reload:[40,55]},ship:{mass:190,speed:[110,130],rotation:[40,55],acceleration:[85,105]}},bodies:{body:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-150,-130,-90,-10,0,20,50,90,110,100],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,20,30,35,35,35,35,30,20,0],height:[0,20,20,20,20,20,20,20,20,0],texture:[4,63,2,2,2,3,4,13,17],propeller:true},propeller:{section_segments:12,offset:{x:40,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-70,-60,-30,-10,20,40,50,60,75,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,12,15,15,17,17,17,18,10,0],height:[0,12,15,15,15,15,15,15,10,0],texture:[3,4,3,10,2,3,4,63,17],propeller:true},propeller1:{section_segments:12,offset:{x:30,y:20,z:20},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-70,-60,-30,-10,20,40,50,60,75,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,12,15,15,17,17,17,18,10,0],height:[0,12,15,15,15,15,15,15,10,0],texture:[63,13,10,2,3,4,63,13,17],propeller:true},cannon:{section_segments:8,offset:{x:15,y:-50,z:-20},position:{x:[0,0,0,0,0,0,0],y:[-38,-40,-30,-5,20,30,25],z:[0,0,0,0,0,0,0]},width:[0,5,8,8,7,5,0],height:[0,5,8,8,7,5,0],angle:0,laser:{damage:[15,20],rate:4,type:2,speed:[160,180],number:2,error:0,angle:5,recoil:50},propeller:true,texture:[17,2,63,3,4]},topcockpit:{section_segments:8,offset:{x:0,y:-20,z:15},position:{x:[0,0,0,0,0,0,0,0,0],y:[-65,-50,-10,20,60,80,90],z:[0,0,0,0,0,0,0,0,0]},width:[0,10,19,19,20,20,0],height:[0,15,19,20,20,20,0],texture:[4,9,2,10,3,4]}},wings:{wingsSides:{doubleside:true,offset:{x:52,y:20,z:10},length:[0,0,0,20],width:[0,0,0,150,40],angle:[0,0,0,20],position:[0,0,0,-15,10],texture:[0,8,13,63],bump:{position:35,size:20}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.5,4.239,3.629,2.877,2.419,2.616,2.508,2.304,2.162,2.074,2.019,2.01,2.051,2.128,2.191,2.284,2.422,2.602,2.645,2.733,2.862,2.992,3.092,3.311,3.354,3.306,3.354,3.311,3.092,2.992,2.862,2.733,2.645,2.602,2.422,2.284,2.191,2.128,2.051,2.01,2.019,2.074,2.162,2.304,2.508,2.616,2.419,2.877,3.629,4.239],"lasers":[{"x":0.45,"y":-2.7,"z":-0.6,"angle":0,"damage":[15,20],"rate":4,"type":2,"speed":[160,180],"number":2,"spread":5,"error":0,"recoil":50},{"x":-0.45,"y":-2.7,"z":-0.6,"angle":0,"damage":[15,20],"rate":4,"type":2,"speed":[160,180],"number":2,"spread":5,"error":0,"recoil":50}],"radius":4.5}')),JSON.stringify(r)})();
s.Leviathan_405 = (function(){var r=Function('return(function(){var model;return model={name:\'Leviathan\',level:4,model:5,size:2.2,specs:{shield:{capacity:[150,200],reload:[3,5]},generator:{capacity:[100,150],reload:[40,55]},ship:{mass:150,speed:[95,110],rotation:[80,90],acceleration:[70,90]}},bodies:{main:{section_segments:10,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-100,-90,-60,-20,10,30,60,75,70],z:[0,0,0,0,0,0,0,0,0]},width:[0,10,20,25,25,25,20,15,0],height:[0,7,15,15,15,15,15,10,0],propeller:true,texture:[4,2,10,2,3,4,63,17]},cockpit:{section_segments:12,offset:{x:0,y:-50,z:13},position:{x:[0,0,0,0,0,0,0,0],y:[-25,-15,0,30,50,65,80,90],z:[0,0,0,0,0,0,0,0]},width:[0,7,10,12,13,13,9,0],height:[0,7,7,7,7,7,7,0],texture:[4,63,9,4,3,2,63,6]},cannon:{section_segments:8,offset:{x:20,y:30,z:-5},position:{x:[0,0,0,0,0,0,0],y:[-70,-50,-20,25,40,50,45],z:[0,0,0,0,0,0,0]},width:[0,10,13,13,13,10,0],height:[0,10,13,13,13,10,0],angle:0,laser:{damage:[10,15],rate:8,type:1,speed:[160,180],number:1,error:0},propeller:true,texture:[1,3,10,63,13,17]}},wings:{main:{length:[25,10,0],width:[50,25,15],angle:[-10,-15,0],position:[0,20,10],texture:[2,63],bump:{position:39,size:5},offset:{x:27,y:30,z:-5}},winglets:{length:[10,10,0],width:[25,25,15],angle:[30,10,0],position:[0,5,17],texture:[10,63],bump:{position:20,size:1},offset:{x:5,y:40,z:10}},winglets1:{length:[10],width:[20,10],angle:[10,10],position:[0,10],texture:[4],bump:{position:40,size:5},offset:{x:30,y:50,z:0}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.4,4.131,3.347,2.721,2.144,1.836,1.718,1.641,1.595,1.518,1.453,1.417,1.407,1.436,1.488,1.569,3.074,3.332,3.454,3.564,3.567,3.405,3.759,3.7,3.583,3.306,3.583,3.7,3.759,3.405,3.567,3.564,3.454,3.332,3.074,1.569,1.488,1.436,1.407,1.417,1.453,1.518,1.595,1.641,1.718,1.836,2.144,2.721,3.347,4.131],"lasers":[{"x":0.88,"y":-1.76,"z":-0.22,"angle":0,"damage":[10,15],"rate":8,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.88,"y":-1.76,"z":-0.22,"angle":0,"damage":[10,15],"rate":8,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.4}')),JSON.stringify(r)})();
s.V_Fighter_406 = (function(){var r=Function('return(function(){var model;return model={name:\'V Fighter\',level:4,model:6,size:1.2,specs:{shield:{capacity:[200,270],reload:[5,5]},generator:{capacity:[100,150],reload:[40,60]},ship:{mass:300,speed:[110,120],rotation:[30,55],acceleration:[90,115]}},tori:{circle1:{segments:6,radius:4,section_segments:15,offset:{x:4,y:-40,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],z:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],height:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],texture:[3]},circle2:{segments:6,radius:4,section_segments:10,offset:{x:4,y:-60,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],z:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],height:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],texture:[3]},circle3:{segments:6,radius:4,section_segments:15,offset:{x:4,y:-80,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],z:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],height:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],texture:[3]},circle4:{segments:6,radius:4,section_segments:10,offset:{x:4,y:-100,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],z:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],height:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],texture:[3]},circle5:{segments:6,radius:4,section_segments:6,offset:{x:4,y:-20,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],z:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],height:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],texture:[3]},circle6:{segments:6,radius:4,section_segments:6,offset:{x:-2,y:-120,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],z:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],height:[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],texture:[3]}},bodies:{main:{section_segments:12,offset:{x:0,y:-20,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-100,-100,-40,-20,0,30,70,100,130,120],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,15,20,30,30,20,0],height:[0,5,5,5,15,20,30,30,20,0],texture:[6,3,63,63,3,10,10,13,17],propeller:true,laser:{damage:[4,8],rate:6,type:1,speed:[180,210],number:7,angle:0,error:10}},cockpit:{section_segments:8,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0],y:[-25,-15,20,40],z:[0,0,0,0]},width:[0,10,15,0],height:[0,9,15,5],texture:[4,9,63,4]},spikes:{section_segments:8,offset:{x:50,y:0,z:5},position:{x:[-10,-5,-1,0,0,0,0],y:[-80,-70,-40,-10,20,50,90],z:[0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,0],height:[0,10,10,10,10,10,0],texture:[0,63,2,3,4,4],angle:0},side1:{section_segments:8,offset:{x:50,y:60,z:5},position:{x:[0,0,0,0,0,0,0],y:[-70,-40,-30,-20,10,25,40,35],z:[0,0,0,0,0,0,0]},width:[0,20,20,20,20,20,15,0],height:[0,30,30,30,30,30,25,0],texture:[11,63,63,2,3,4,17],propeller:true},side2:{section_segments:8,offset:{x:30,y:60,z:10},position:{x:[-15,-10,-5,-3,0,0],y:[-70,-50,-30,-20,-10,25,40,35],z:[0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,10,10,10,0],height:[0,10,10,10,10,10,10,10,10,0],texture:[2,4,3,2,63,3,17],propeller:true}},wings:{main:{doubleside:true,offset:{x:60,y:50,z:0},length:[20,30,30,10,10],width:[50,50,50,50,30],angle:[-10,-20,-20,0,0],position:[10,-10,-30,-55,-70,-70],texture:[63,2,3,63],bump:{position:20,size:5}},main1:{doubleside:true,offset:{x:60,y:50,z:0},length:[20,30,30,10,10],width:[50,50,50,50,30],angle:[10,20,20,0,0],position:[-10,10,20,-20,-40,80],texture:[63,2,3,63],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.986,2.525,1.538,1.009,2.147,2.137,2.082,1.88,1.737,1.622,1.536,3.605,3.533,3.534,3.557,3.524,3.523,3.451,3.45,3.192,2.862,2.842,2.652,2.637,2.683,2.645,2.683,2.637,2.652,2.842,2.862,3.192,3.45,3.451,3.523,3.524,3.557,3.534,3.533,3.605,1.536,1.622,1.737,1.88,2.082,2.137,2.147,1.009,1.538,2.525],"lasers":[{"x":0,"y":-2.88,"z":0.24,"angle":0,"damage":[4,8],"rate":6,"type":1,"speed":[180,210],"number":7,"spread":0,"error":10,"recoil":0}],"radius":3.605}')),JSON.stringify(r)})();


//Tier 5
s.Gedihan_501 = (function(){var r=Function('return(function(){var model;return model={name:\'Gedihan\',level:5,model:1,size:1.3,specs:{shield:{capacity:[250,280],reload:[4,5]},generator:{capacity:[150,250],reload:[50,55]},ship:{mass:200,speed:[100,120],rotation:[40,65],acceleration:[100,110]}},bodies:{main:{section_segments:12,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-160,-140,-125,-130,-100,-55,5,60,90,120,118],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,15,15,15,20,30,30,30,30,20,0],height:[0,15,15,15,20,25,25,25,25,20,0],texture:[2,63,3,3,10,2,2,1,13,17],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0,0,0,0,0,0],y:[-90,-70,-20,30,50,70,80],z:[0,0,0,0,0,0,0,0,0]},width:[0,17,20,20,20,15,0],height:[0,12,15,15,15,10,0],propeller:false,texture:[2,9,4,63,2]},cannon:{section_segments:12,offset:{x:0,y:30,z:30},position:{x:[0,0,0,0,0,0],y:[-50,-49,-35,-10,20,30],z:[0,0,0,0,0,0]},width:[0,5,10,10,10,0],height:[0,5,10,10,10,0],angle:0,laser:{damage:[50,65],rate:4,type:1,speed:[160,180],number:1,error:2.5},propeller:false,texture:[17,10,2,3,4]},cannon1:{section_segments:8,offset:{x:70,y:0,z:0},position:{x:[0,0,0,0,0,0],y:[-125,-125,-110,-50,20,50,50],z:[0,0,0,0,0,0]},width:[0,7,10,15,15,10,0],height:[0,7,10,15,15,10,0],angle:0,laser:{damage:[5,10],rate:4.8,type:1,speed:[120,150],number:1,error:0},propeller:true,texture:[16.9,13,4,3,13,17]},propulsors:{section_segments:12,offset:{x:40,y:30,z:0},position:{x:[0,0,0,0,0,0],y:[-70,-50,-10,30,60,55],z:[0,0,0,0,0,0]},width:[0,10,15,15,10,0],height:[0,10,15,15,10,0],texture:[4,3,13,63,17],propeller:true},cockpitShield:{section_segments:12,offset:{x:16,y:0,z:13},position:{x:[-6,-6,-3,-2,-2,-10],y:[-70,-70,-50,-20,50,70],z:[5,5,5,0,0,0]},width:[0,7,10,15,15,10],height:[0,7,10,15,15,10],angle:0,texture:[16.9,63,11,2,63,17]}},wings:{main:{doubleside:true,offset:{x:0,y:40,z:15},length:[90,20,20],width:[120,70,30],angle:[0,0,0],position:[0,-70,-110],texture:[4,63],bump:{position:0,size:5}},winglets:{doubleside:true,offset:{x:70,y:30,z:0},length:[25,10,10],width:[40,40,30],angle:[0,0,0],position:[-10,0,10],texture:[63,4],bump:{position:0,size:7}},winglets1:{doubleside:true,offset:{x:20,y:30,z:20},length:[25,10,10],width:[40,40,30],angle:[20,22,0],position:[-10,0,10],texture:[2,63],bump:{position:0,size:7}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.68,4.325,2.986,2.323,3.817,3.762,3.295,3.614,3.535,3.263,2.953,2.689,2.504,2.526,2.818,2.935,3.082,2.453,2.211,2.202,2.496,2.677,2.586,2.651,2.647,2.605,2.647,2.651,2.586,2.677,2.496,2.202,2.211,2.453,3.082,2.935,2.818,2.526,2.504,2.689,2.953,3.263,3.535,3.614,3.295,3.762,3.817,2.323,2.986,4.325],"lasers":[{"x":0,"y":-0.52,"z":0.78,"angle":0,"damage":[50,65],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0},{"x":1.82,"y":-3.25,"z":0,"angle":0,"damage":[5,10],"rate":4.8,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.82,"y":-3.25,"z":0,"angle":0,"damage":[5,10],"rate":4.8,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.68}')),JSON.stringify(r)})();
s.Imperator_502 = (function(){var r=Function('return(function(){var darkSpotDeco,i,j,k,key,model,ref,ring,value;Array.prototype.mult=function(m){return this.map(function(v){return v*m})};Array.prototype.add=function(m){return this.map(function(v){return v+m})};ref=[];for(key in ref){key=key;key=key;key=key;value=ref[key];delete Array.prototype[key];Object.defineProperty(Array.prototype,key,{value:value,configurable:true,enumerable:false})}ring=function(n,xx,yy,zz,wid,long){return model.bodies[\'ring\'+n]={section_segments:20,offset:{x:xx,y:yy,z:zz},position:{x:[0,0,0,0,0,0,0],y:[3,-3,-3,-1,1,3,3].mult(long),z:[0,0,0,0,0,0,0]},width:[16,16,18,20,20,18,16].mult(wid),height:[16,16,18,20,20,18,16].mult(wid),texture:[3,3,3,17,3]}};darkSpotDeco=function(n,xx,zz,width,angle){model.bodies[\'tubeOne\'+n]={section_segments:12,offset:{x:xx,y:zz,z:15.5},position:{x:[0,0,0,0].add(8+width),y:[0,2,2,2],z:[0,0,0,0]},width:[2,2,1.3,0].mult(1.5),height:[2,2,1.3,0].mult(1.5),texture:[3,17,13],vertical:true,angle:angle};model.bodies[\'tubeTwo\'+n]={section_segments:12,offset:{x:xx,y:zz,z:5},position:{x:[0,0,0,0].add(8+width),y:[0,2,2,2].add(1),z:[0,0,0,0]},width:[2,2,1.3,0].mult(1.5),height:[2,2,1.3,0].mult(1.5),texture:[3,17,13],vertical:true,angle:angle};model.bodies[\'tubeThree\'+n]={section_segments:12,offset:{x:xx,y:zz,z:15.5},position:{x:[0,0,0,0].add(-8-width),y:[0,2,2,2],z:[0,0,0,0]},width:[2,2,1.3,0].mult(1.5),height:[2,2,1.3,0].mult(1.5),texture:[3,17,13],vertical:true,angle:angle};model.bodies[\'tubeFour\'+n]={section_segments:12,offset:{x:xx,y:zz,z:5},position:{x:[0,0,0,0].add(-8-width),y:[0,2,2,2].add(1),z:[0,0,0,0]},width:[2,2,1.3,0].mult(1.5),height:[2,2,1.3,0].mult(1.5),texture:[3,17,13],vertical:true,angle:angle};model.bodies[\'crossOne\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:zz,z:15.5},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(0.5),z:[0,0,0,0]},width:[0,9+width,9+width,0],height:[0,1,1,0],vertical:true,texture:13,angle:angle};return model.bodies[\'crossTwo\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:zz,z:5},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.5),z:[0,0,0,0]},width:[0,9+width,9+width,0],height:[0,1,1,0],vertical:true,texture:13,angle:angle}};model={name:\'Imperator\',level:5,model:2,size:2.5,specs:{shield:{capacity:[225,300],reload:[5,6]},generator:{capacity:[130,180],reload:[35,50]},ship:{mass:225,speed:[70,90],rotation:[75,110],acceleration:[130,160]}},bodies:{main:{section_segments:[30,90,150,210,270,330],offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-134,-130,-119,-99,-102,-87,-17,-20,0,55,65,65],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,4,6,8,9,8,10,13,14,14,12,0].mult(1.9),height:[0,3.5,4.2,5,5,6,8,10,11,11,10,0].mult(2),texture:[1.9,1.9,1.9,16.9,3.9,2.9,16.9,3.9,1.9,11.9,1.9]},cockpitStripes:{section_segments:[30,90,150,210,270,330],offset:{x:0,y:-46,z:6},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-80,-77,-67,-57,-10,-7,-4,-1,2,5,8,11,36],z:[-0.2,1,2,2,5,6,6.3,6.6,6.9,7.2,7.5,7.8,7.6]},width:[4,6,8,6,6,8*0.7,11*0.7,15*0.7,15*0.7,11*0.7,8*0.7,6,7,0].mult(0.8),height:[0,2,4,2,2,2,2,2,2,2,2,2,2],texture:[3.9,8.9,8.9,63,3.9,3.9,3.9,3.9,3.9,3.9,3.9,63]},centerDiamond:{section_segments:4,offset:{x:0,y:15,z:45.5},position:{x:[0,0,0,0,0],y:[-3,0,1,0,0],z:[0,0,0,0,0]},width:[9,9,6,3,0].mult(0.7),height:[9,9,6,3,0],vertical:true,texture:[4,3,18,17]},sideDeco:{section_segments:8,offset:{x:49,y:12,z:-10},position:{x:[0,0,0,0,0],y:[-3,0,1,0,0],z:[0,0,0,0,0]},width:[9,9,6,3,0].mult(0.7),height:[9,9,6,3,0],vertical:true,texture:[4,3,18,17]},coolingVents1:{section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],offset:{x:18,y:-40,z:0},position:{x:[0,0,0,-2,-6],y:[-15,-18,-15,9,15],z:[0,0,0,0,0]},width:[0,6,9,7,7],height:[0,6,8,8,8],texture:[17,63,4]},coolingVents2:{section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],offset:{x:17,y:-57,z:0},position:{x:[-3,-3,-2,-5,-9],y:[-15,-18,-15,3,7],z:[0,0,0,0,0]},width:[0,5,8,6,6],height:[0,4,6,6,6],texture:[17,63,4]},guns:{section_segments:[30,90,150,210,270,330],offset:{x:48,y:30,z:0},position:{x:[0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0],y:[-55,-60,-55,-40,-41,-20,-21,-15,-15,-5,-5,2,2,12,12,13,15,15].mult(2),z:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,4,6,6,8,8,10,10,10.5,10.5,10,10,10.5,10.5,10,10,8,0].mult(1.3),height:[0,3,5,5,7,7,9,9,11,11,9,9,11,11,9,9,7,0].mult(1.2),texture:[16.9,11.9,1.9,16.9,1.9,16.9,1.9,16.9,63,16.9,1.9,16.9,63,16.9,1.9],laser:{number:2,damage:[8,10],rate:8,speed:[150,200],angle:2,error:0,recoil:20}},gunConnection1:{section_segments:[45,135,225,315],offset:{x:30,y:40,z:5},position:{x:[0.9,0.9,0,0,-1.4,-1.4],y:[-20,-20,-8,8,20,20].mult(0.5),z:[0,0,3,3,0,0]},width:[0,4,5.5,5.5,7,0],height:[0,2,2,2,2,0],angle:90,texture:13},gunConnection2:{section_segments:[45,135,225,315],offset:{x:30,y:47,z:5.1},position:{x:[0.9,0.9,0,0,-1.4,-1.4],y:[-20,-20,-8,8,20,20].mult(0.5),z:[0,0,3,3,0,0]},width:[0,4,5.5,5.5,7,0],height:[0,2,2,2,2,0],texture:[63],angle:-90},gunConnection3:{section_segments:[45,135,225,315],offset:{x:30,y:40,z:-5},position:{x:[0.9,0.9,0,0,-1.4,-1.4],y:[-20,-20,-8,8,20,20].mult(0.5),z:[0,0,-3,-3,0,0]},width:[0,4,5.5,5.5,7,0],height:[0,2,2,2,2,0],angle:90,texture:13},gunConnection4:{section_segments:[45,135,225,315],offset:{x:30,y:47,z:-5.1},position:{x:[0.9,0.9,0,0,-1.4,-1.4],y:[-20,-20,-8,8,20,20].mult(0.5),z:[0,0,-3,-3,0,0]},width:[0,4,5.5,5.5,7,0],height:[0,2,2,2,2,0],texture:[63],angle:-90},gunConnection5:{section_segments:[45,135,225,315],offset:{x:30,y:7.6,z:5},position:{x:[-0.9,-0.9,0,0,1.4,1.4],y:[-20,-20,-8,8,20,20].mult(0.5),z:[0,0,3,3,0,0]},width:[0,4,5.5,5.5,7,0],height:[0,2,2,2,2,0],angle:90,texture:13},gunConnection6:{section_segments:[45,135,225,315],offset:{x:30,y:15,z:5.1},position:{x:[-0.9,-0.9,0,0,1.4,1.4],y:[-20,-20,-8,8,20,20].mult(0.5),z:[0,0,3,3,0,0]},width:[0,4,5.5,5.5,7,0],height:[0,2,2,2,2,0],texture:[63],angle:-90},gunConnection7:{section_segments:[45,135,225,315],offset:{x:30,y:7,z:-5},position:{x:[-0.9,-0.9,0,0,1.4,1.4],y:[-20,-20,-8,8,20,20].mult(0.5),z:[0,0,-3,-3,0,0]},width:[0,4,5.5,5.5,7,0],height:[0,2,2,2,2,0],angle:90,texture:13},gunConnection8:{section_segments:[45,135,225,315],offset:{x:30,y:15,z:-5.1},position:{x:[-0.9,-0.9,0,0,1.4,1.4],y:[-20,-20,-8,8,20,20].mult(0.5),z:[0,0,-3,-3,0,0]},width:[0,4,5.5,5.5,7,0],height:[0,2,2,2,2,0],texture:[63],angle:-90},engines:{section_segments:20,offset:{x:8.7,y:65,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[0,3,5,10,12,20,22,18],z:[0,0,0,0,0,0,0,0]},width:[5,5,4,4,5,5,4,0].mult(1.8),height:[10,10,8,8,10,10,8,0].mult(1.4),propeller:true,texture:[3,3,17,3,8,13,17]},backFins:{section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],vertical:true,offset:{x:48,y:14,z:-44},position:{x:[0,0,0,0],y:[-4,0,20,22],z:[0,-0.5,-10,-12]},width:[3,3,2,0],height:[13,13,7,5],texture:[4,4,63]},ribStrip:{section_segments:[45,135,225,315],offset:{x:48,y:-32,z:6.8},position:{x:[0,0,0,0],y:[-21,-20,20,21].mult(0.92),z:[-0.6,0,0,-0.6]},width:[2,3,3,2],height:[0,1,1,0],texture:[3,13,3]},frontGunCurve:{section_segments:[45,135,225,315],offset:{x:48,y:-80,z:4.5},position:{x:[0,0,0,0,0,0],y:[0,5,9,12,14,20].mult(2),z:[0,0,0,0,0,0]},width:[1,2,4,7,11,11].mult(0.5),height:[1,1,1,1,1,1],texture:[63]},backBars1:{section_segments:[30,90,150,210,270,330],offset:{x:8,y:27,z:18},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-14,-12,-8,-6,-4,-2,2,4,6,8,12,14].mult(2),z:[-2,0,0,0,0,0,0,0,0,0,0,-2]},width:[3,3,3,5,5,3,3,5,5,3,3,3].mult(1.2),height:[1,2,2,2,2,2,2,2,2,2,2,1],texture:[4]},backBars1Color:{section_segments:[45,135,225,315],offset:{x:8,y:27,z:18},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-14,-12,-8,-6,-4,-2,2,4,6,8,12,14].mult(2),z:[-2,0,0,0,0,0,0,0,0,0,0,-2]},width:[3,3,3,5,5,3,3,5,5,3,3,3].mult(1.2),height:[1,2,2,2,2,2,2,2,2,2,2,1],texture:[63]},sideBackBar:{section_segments:8,offset:{x:20,y:27,z:14},position:{x:[-3,-3,0,0,-3,-3],y:[-25,-25,-20,20,25,25],z:[-3,-3,0,0,-3,-3]},width:[0,2,2,2,2,0],height:[0,2,2,2,2,0],texture:4},backMidColor:{section_segments:[45,135,225,315],offset:{x:0,y:27,z:19},position:{x:[0,0,0,0,0,0,0,0],y:[-20,-20,-15,-15,15,15,20,20],z:[0,0,0,0,0,0,0,0]},width:[0,0.3,5,2,2,5,0.3,0],height:[0,1,1,1,1,1,1,0],texture:63}},wings:{frontVentTops1:{offset:{x:13.6,y:-40,z:7},doubleside:false,length:[7,2],angle:[0,0],position:[0,-10],width:[26,6],texture:63,bump:{position:0,size:0}},frontVentTops2:{offset:{x:13,y:-64,z:5},doubleside:false,length:[4,1],angle:[0,0],position:[0,-5],width:[13,3],texture:63,bump:{position:0,size:0}},sideCurves1:{offset:{x:48,y:-5,z:10},doubleside:false,length:[2,3,2,2].mult(0.8),angle:[0,0,0,0],position:[0,0,2,6],width:[15,15,9,6],texture:63,bump:{position:0,size:0}},sideCurves2:{offset:{x:-50,y:-5,z:10},doubleside:false,length:[2,3,2,2].mult(0.8),angle:[0,0,0,0],position:[0,0,2,6],width:[15,15,9,6],texture:63,bump:{position:0,size:0}},sideCurves3:{offset:{x:48,y:26.5,z:10},doubleside:false,length:[2,3,2,2].mult(0.8),angle:[0,0,0,0],position:[0,0,-2,-6],width:[15,15,9,6],texture:63,bump:{position:0,size:0}},sideCurves4:{offset:{x:-48,y:27.5,z:10},doubleside:false,length:[2,3,2,2].mult(0.8),angle:[0,0,0,0],position:[0,0,2,6],width:[15,15,9,6],texture:63,bump:{position:0,size:0}}}};({ring1:ring(1,0,17,13,0.6,0.6),ring2:ring(2,0,37,13,0.6,0.6),darkSpotDecoTop:darkSpotDeco(1,0,16.5,0,0),darkSpotDecoSides:darkSpotDeco(2,17.7,8.5,-1,56)});i=j=0;while(j<5){model.bodies[\'ribThing\'+i]={section_segments:[45,135,225,315],offset:{x:52,y:i*8-48,z:6.9},position:{x:[0,0,0,0,0],y:[-3,-3,0,2,2].mult(0.8),z:[1,1,1,0,0]},width:[0,1,1,1,0].mult(2.4),height:[0,0.4,0.4,0.4,0],angle:90,texture:3};model.bodies[\'ribColor\'+i]={section_segments:[45,135,225,315],offset:{x:52,y:i*8-48,z:6.89},position:{x:[0,0,0,0,0],y:[-3,-3,0,2,2].mult(0.8),z:[1,1,1,0,0]},width:[0,1.3,1.3,1.3,0].mult(2.4),height:[0,0.4,0.4,0.4,0],angle:90,texture:[3,17,63]};model.bodies[\'ribThingTwo\'+i]={section_segments:[45,135,225,315],offset:{x:44,y:i*8-48,z:6.9},position:{x:[0,0,0,0,0],y:[-3,-3,0,2,2].mult(0.8),z:[1,1,1,0,0]},width:[0,1,1,1,0].mult(2.4),height:[0,0.4,0.4,0.4,0],angle:-90,texture:3};model.bodies[\'ribColorTwo\'+i]={section_segments:[45,135,225,315],offset:{x:44,y:i*8-48,z:6.89},position:{x:[0,0,0,0,0],y:[-3,-3,0,2,2].mult(0.8),z:[1,1,1,0,0]},width:[0,1.3,1.3,1.3,0].mult(2.4),height:[0,0.4,0.4,0.4,0],angle:-90,texture:[3,17,63]};i=++j}i=k=0;while(k<3){model.bodies[\'ribBar\'+i]={section_segments:[45,135,225,315],offset:{x:17,y:i*12+16.5,z:17},position:{x:[0,0,0,0,0],y:[-3,-3,0,2,2].mult(1.3),z:[0,0,0,-2,-2]},width:[0,1,1,1,0].mult(2.4),height:[0,0.4,0.4,0.4,0],angle:90,texture:3};model.bodies[\'ribBarColor\'+i]={section_segments:[45,135,225,315],offset:{x:17,y:i*12+16.5,z:16.9},position:{x:[0,0,0,0,0],y:[-3,-3,0,2,2].mult(0.8),z:[0,0,0,-2,-2]},width:[0,1.3,1.3,1.3,0].mult(2.4),height:[0,0.4,0.4,0.4,0],angle:90,texture:[3,17,63]};i=++k}return model}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[6.7,6.441,4.109,3.112,5.227,5.07,4.375,3.91,3.607,3.326,3.139,3.108,3.074,3.157,3.233,3.288,3.574,3.869,4.148,4.186,3.893,3.553,3.444,4.396,4.422,4.359,4.422,4.396,3.444,3.553,3.893,4.186,4.148,3.869,3.574,3.288,3.233,3.157,3.133,3.108,3.139,3.326,3.607,3.91,4.375,5.07,5.227,3.112,4.109,6.441],"lasers":[{"x":2.4,"y":-4.5,"z":0,"angle":0,"damage":[8,10],"rate":8,"speed":[150,200],"number":2,"spread":2,"error":0,"recoil":20},{"x":-2.4,"y":-4.5,"z":0,"angle":0,"damage":[8,10],"rate":8,"speed":[150,200],"number":2,"spread":2,"error":0,"recoil":20}],"radius":6.7}')),JSON.stringify(r)})();
s.Thenpale_503 = (function(){var r=Function('return(function(){var model;return model={name:\'Thenpale\',level:5,model:3,size:2.3,specs:{shield:{capacity:[200,280],reload:[3,6]},generator:{capacity:[150,270],reload:[55,65]},ship:{mass:200,speed:[90,110],rotation:[65,80],acceleration:[60,65]}},bodies:{main:{section_segments:6,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-130,-100,-70,-50,-10,30,50,80,90,90],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,16,20,20,20,20,20,15,0],height:[0,5,10,10,10,10,10,10,10,0],texture:[63,3,3,3,3,2,18,4,16.9],propeller:true},cockpit:{section_segments:6,offset:{x:0,y:-20,z:2},position:{x:[0,0,0,0,0,0,0],y:[-70,-50,0,30,40],z:[0,0,0,0,0]},width:[10,15,15,15,10],height:[10,10,10,10,10],texture:[9,9,18,13,10],propeller:false},cockpit1:{section_segments:6,offset:{x:0.5,y:-20,z:4.6},position:{x:[0,0,0,0,0,0,0],y:[-70,-50,0,30,40],z:[0,0,0,0,0]},width:[10,15,15,15,10],height:[5,5,5,5,5],texture:[63,18,17,17,17],propeller:false},reactors:{section_segments:12,offset:{x:65,y:40,z:-10},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-31,-30,-20,-10,-5,10,30,40,50,50],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,7,9,10,10,10,13,13,10,0],height:[0,7,9,10,10,10,10,10,10,0],texture:[17,63,63,17,13,18,4,3],angle:0,propeller:true,laser:{damage:[15,25],rate:6,type:1,speed:[150,170],number:1,angle:0}},cannons:{section_segments:8,offset:{x:15,y:-20,z:-10},position:{x:[2,2,2,2,2,1,3,3,3,0],y:[-30,-30,-20,-10,-5,40,80,100,100,0],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,10,10,10,10,5,4,10],height:[0,5,10,10,10,10,10,5,4,10],texture:[17.5,4,13,4,18,3,13,17],propeller:true,laser:{damage:[15,25],rate:6,type:1,speed:[150,170],number:1,angle:0}},details:{section_segments:8,offset:{x:15,y:-25,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details1:{section_segments:8,offset:{x:15,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details2:{section_segments:8,offset:{x:15,y:-15,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details3:{section_segments:8,offset:{x:15,y:-10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details4:{section_segments:8,offset:{x:15,y:-5,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details5:{section_segments:8,offset:{x:15,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details6:{section_segments:8,offset:{x:15,y:5,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details7:{section_segments:8,offset:{x:15,y:10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details8:{section_segments:8,offset:{x:15,y:15,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false}},wings:{font:{length:[70,0],width:[70,50],angle:[0,0],position:[0,30],texture:[18],bump:{position:30,size:5},offset:{x:0,y:20,z:-10}},wings:{length:[20,0],width:[30,20],angle:[0,0],position:[0,15],texture:[63],bump:{position:30,size:5},offset:{x:70,y:55,z:-10}},main:{doubleside:true,offset:{x:0,y:5,z:0},length:[0,20,0],width:[0,20,50],angle:[0,0,0],position:[0,0,40,40],texture:17,bump:{position:20,size:50}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[6.9,5.669,3.784,2.574,2.461,2.256,1.947,1.704,1.518,1.404,1.313,1.26,1.227,1.558,3.503,3.707,3.935,5.112,5.533,5.389,5.373,4.903,3.61,3.829,3.746,3.226,3.746,3.829,3.61,4.903,5.373,5.389,5.533,5.112,3.935,3.707,3.503,1.558,1.227,1.26,1.313,1.404,1.518,1.704,1.947,2.256,2.461,2.574,3.784,5.669],"lasers":[{"x":2.99,"y":0.414,"z":-0.46,"angle":0,"damage":[15,25],"rate":6,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.99,"y":0.414,"z":-0.46,"angle":0,"damage":[15,25],"rate":6,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.782,"y":-2.3,"z":-0.46,"angle":0,"damage":[15,25],"rate":6,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.782,"y":-2.3,"z":-0.46,"angle":0,"damage":[15,25],"rate":6,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":0}],"radius":6.9}')),JSON.stringify(r)})();
s.Viper_504 = (function(){var r=Function('return(function(){var model;return model={name:\'Viper\',level:5,model:4,size:1.2,zoom:1,specs:{shield:{capacity:[275,300],reload:[5,7]},generator:{capacity:[110,154],reload:[60,80]},ship:{mass:225,speed:[100,130],rotation:[50,60],acceleration:[100,130]}},bodies:{hand:{section_segments:8,offset:{x:50,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-80,-70,-50,-30,-20,20,30,70,90,105,100],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,20,20,20,20,20,20,15,0],height:[0,10,15,20,20,20,20,20,20,15,0],texture:[4,63,10,2,63,2,2,3,4,4],propeller:true},tophand:{section_segments:8,offset:{x:20,y:0,z:20},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-120,-115,-100,-50,-25,10,20,50,70,80,75],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,20,20,20,20,20,20,15,0],height:[0,10,15,20,20,20,20,20,20,15,0],texture:[4,4,63,1,2,3,63,4,13,17],propeller:true},body:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-200,-170,-120,-90,-50,-20,5,50,80,90,85],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,15,25,30,30,30,30,30,20,15,0],height:[0,15,25,25,25,25,25,25,25,15,0],texture:[63,4,63,2,2,3,10,3,4,17],propeller:true},cannons:{section_segments:8,offset:{x:40,y:-200,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[5,0,23,27,62,62,97,102,163],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,2,2,2,2,5,5,5,5],height:[0,2,2,2,2,5,5,5,5],texture:[17,3,3,10,10,13,4,63],propeller:false,laser:{damage:[20,30],rate:4,type:2,speed:[200,200],recoil:0,number:1,error:0}},cannons1:{section_segments:8,offset:{x:60,y:-200,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[5,0,23,27,62,62,97,102,163],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,2,2,2,2,5,5,5,5],height:[0,2,2,2,2,5,5,5,5],texture:[17,3,3,10,10,13,4,63],propeller:false,laser:{damage:[20,30],rate:4,type:2,speed:[200,200],recoil:0,number:1,error:0}},side:{section_segments:10,offset:{x:80,y:20,z:0},position:{x:[-10,-5,0,0,0,-5,-10],y:[-100,-70,-40,0,40,70,100],z:[0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,0],height:[0,20,25,25,25,20,0],texture:[0,1,2,3,4,63]},cockpit:{section_segments:12,offset:{x:0,y:-150,z:20},position:{x:[0,0,0,0,0,0,0],y:[-30,-10,40,100,120,150,180],z:[-10,-10,0,0,0,0,0]},width:[0,10,15,10,10,10,10,0],height:[0,15,15,15,15,15,15,0],propeller:false,texture:[4,9,4,3,2,63]}},wings:{main:{doubleside:true,offset:{x:50,y:20,z:0},length:[45,50,0],width:[100,100,70],angle:[-5,-15,-10],position:[0,0,-40],texture:[63,10],bump:{position:20,size:6}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.8,4.887,5.025,4.815,3.661,2.911,2.551,2.46,2.386,2.329,3.68,3.543,3.462,3.454,3.394,3.154,2.989,2.884,2.831,3.04,3.252,3.334,2.785,2.121,2.19,2.164,2.19,2.121,2.785,3.334,3.252,3.04,2.831,2.884,2.989,3.154,3.394,3.454,3.462,3.543,3.68,2.329,2.386,2.46,2.551,2.911,3.661,4.815,5.025,4.887],"lasers":[{"x":0.96,"y":-4.8,"z":0,"angle":0,"damage":[20,30],"rate":4,"type":2,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.96,"y":-4.8,"z":0,"angle":0,"damage":[20,30],"rate":4,"type":2,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.44,"y":-4.8,"z":0,"angle":0,"damage":[20,30],"rate":4,"type":2,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.44,"y":-4.8,"z":0,"angle":0,"damage":[20,30],"rate":4,"type":2,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":5.025}')),JSON.stringify(r)})();
s.Aebabie_505 = (function(){var r=Function('return(function(){var model;return model={name:\'Aebabie\',level:5,model:5,size:1.7,zoom:1,specs:{shield:{capacity:[150,175],reload:[4,6]},generator:{capacity:[100,175],reload:[50,50]},ship:{mass:125,speed:[140,155],rotation:[30,45],acceleration:[100,130]}},bodies:{main:{section_segments:8,offset:{x:30,y:-30,z:-5},position:{x:[-10,-10,-5,3,5,5,5,5],y:[-50,-50,-40,-20,10,70,80,60],z:[-10,-10,-7,0,0,0,0,0]},width:[0,3,7,10,15,15,10,0],height:[0,3,7,10,15,15,10,0],texture:[2,3,4,63,2,12,17],propeller:true},body:{section_segments:8,offset:{x:0,y:30,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[-100,-90,-80,-40,10,40,50,50],z:[-7,-7,-7,0,0,0,0,0]},width:[0,15,20,25,25,18,15,0],height:[0,10,15,15,15,15,10,0],texture:[63,1,2,3,4,63,17],propeller:true},onbody:{section_segments:8,offset:{x:25,y:30,z:-3},position:{x:[-10,-5,-3,0,0,0,0,0],y:[-90,-80,-70,-30,10,20,35,30],z:[0,0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,5,0],height:[0,7,7,10,10,10,5,0],texture:[4,3,63,4,3,13,17],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-0,z:8},position:{x:[0,0,0,0,0,0,0,0],y:[-60,-50,-35,-20,10,20,25,25],z:[0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,5,0],height:[0,7,10,10,10,10,5,0],texture:[4,63,4,9,3,4,17],propeller:false,angle:180},cannon1:{section_segments:12,offset:{x:10,y:-30,z:-15},position:{x:[0,0,0,0,0,0],y:[-40,-41,-20,10,30,30],z:[0,0,0,0,0,0]},width:[0,5,10,10,5,0],height:[0,5,10,10,5,0],angle:0,laser:{damage:[10,10],rate:4,type:1,speed:[120,120],number:2,error:5,recoil:0,angle:0},propeller:false,texture:[17,63,13,4]}},wings:{main1:{doubleside:true,offset:{x:20,y:10,z:0},length:[25,20,10],width:[60,60,30,20],angle:[-10,-16,0],position:[0,0,25,37],texture:[17,4,63],bump:{position:10,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.38,2.458,2.83,2.771,2.594,2.394,2.256,2.088,1.962,1.88,1.823,1.755,1.837,1.977,2.165,2.48,2.862,3.102,3.172,2.287,2.205,2.415,2.434,2.748,2.767,2.725,2.767,2.748,2.434,2.415,2.205,2.287,3.172,3.102,2.862,2.48,2.165,1.977,1.844,1.755,1.823,1.88,1.962,2.088,2.256,2.394,2.594,2.771,2.83,2.458],"lasers":[{"x":0.34,"y":-2.414,"z":-0.51,"angle":0,"damage":[10,10],"rate":4,"type":1,"speed":[120,120],"number":2,"spread":0,"error":5,"recoil":0},{"x":-0.34,"y":-2.414,"z":-0.51,"angle":0,"damage":[10,10],"rate":4,"type":1,"speed":[120,120],"number":2,"spread":0,"error":5,"recoil":0}],"radius":3.172}')),JSON.stringify(r)})();
s.Vampire_506 = (function(){var r=Function('return(function(){var model;return model={name:\'Vampire\',level:5,model:6,size:1.2,specs:{shield:{capacity:[185,250],reload:[2,5]},generator:{capacity:[170,250],reload:[55,75]},ship:{mass:250,speed:[100,115],rotation:[50,70],acceleration:[100,120]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-225,-200,-180,-150,-70,-50,20,80,90,100,95],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,0,25,30,40,40,40,25,25,25,0],height:[0,0,20,25,30,30,30,30,28,25,0],texture:[17,63,10,2,2,3,4,13,13,17],propeller:true},sides:{section_segments:8,offset:{x:35,y:-20,z:0},position:{x:[0,-7,-5,0,0,-2,-3,-5,-7,-10,-10,-10,-20],y:[-90,-80,-50,-20,-10,45,50,70,90,100,95],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,15,20,20,20,20,20,20,20,20,0],height:[0,15,20,25,25,25,25,25,25,20,0],texture:[63,13,63,2,2,1,10,3,4,17],propeller:false},cockpit:{section_segments:12,offset:{x:0,y:-90,z:22},position:{x:[0,0,0,0,0,0,0],y:[-30,-10,10,50,80,110,130],z:[0,0,0,0,0,0,0]},width:[0,10,15,17,17,17,0],height:[0,15,15,15,15,15,0],propeller:false,texture:[4,63,9,3,2,1]},cannons:{section_segments:8,offset:{x:55,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0],y:[-115,-110,-80,-30,10,30,55,65,60],z:[0,0,0,0,0,0,0,0,0]},width:[0,5,10,10,10,10,10,7,0,0],height:[0,5,10,10,10,10,10,7,0,0],angle:0,propeller:true,texture:[17,63,3,10,3,4,13,6],laser:{damage:[5,7],rate:4.5,type:1,speed:[160,170],number:1,error:0,recoil:30}},cannons1:{section_segments:10,offset:{x:25,y:50,z:25},position:{x:[0,0,0,0,0,0,0],y:[-30,-35,-25,10,30,70,85],z:[0,0,0,0,0,0,0]},width:[0,5,9,10,10,10,0],height:[0,5,9,10,10,10,0],angle:180,propeller:true,texture:[17,63,3,2,4,2],laser:{damage:[20,30],rate:0.5,type:1,speed:[100,120],number:2,error:10,recoil:150}},reactor:{section_segments:10,offset:{x:10,y:30,z:30},position:{x:[0,0,0,0,0,0,0],y:[-50,-50,-30,-20,30,50,45],z:[0,0,0,0,0,0,0]},width:[0,5,13,13,13,10,0],height:[0,10,15,15,15,10,0],angle:0,propeller:true,texture:[17,63,10,2,13,17]}},wings:{main1:{doubleside:true,offset:{x:60,y:5,z:0},length:[0,0,0,20],width:[0,0,0,250,40],angle:[0,0,0,30],position:[20,30,0,-30,10],texture:[0,8,13,4],bump:{position:35,size:20}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.4,4.579,3.753,3.877,3.484,2.915,2.557,2.293,2.119,1.999,1.913,1.869,1.869,1.911,1.983,2.103,2.275,2.511,2.564,2.64,2.763,2.799,2.161,2.474,2.443,2.405,2.443,2.474,2.161,2.799,2.763,2.64,2.564,2.511,2.275,2.103,1.983,1.911,1.869,1.869,1.913,1.999,2.119,2.293,2.557,2.915,3.484,3.877,3.753,4.579],"lasers":[{"x":1.32,"y":-2.76,"z":0,"angle":0,"damage":[5,7],"rate":4.5,"type":1,"speed":[160,170],"number":1,"spread":0,"error":0,"recoil":30},{"x":-1.32,"y":-2.76,"z":0,"angle":0,"damage":[5,7],"rate":4.5,"type":1,"speed":[160,170],"number":1,"spread":0,"error":0,"recoil":30},{"x":0.6,"y":2.04,"z":0.6,"angle":180,"damage":[20,30],"rate":0.5,"type":1,"speed":[100,120],"number":2,"spread":0,"error":10,"recoil":150},{"x":-0.6,"y":2.04,"z":0.6,"angle":-180,"damage":[20,30],"rate":0.5,"type":1,"speed":[100,120],"number":2,"spread":0,"error":10,"recoil":150}],"radius":5.4}')),JSON.stringify(r)})();
s.Penery_507 = (function(){var r=Function('return(function(){var model;return model={name:\'Penery\',designer:\'Wolfan\',level:5,model:7,size:1.5,specs:{shield:{capacity:[200,250],reload:[5,7]},generator:{capacity:[150,200],reload:[60,70]},ship:{mass:225,speed:[70,90],rotation:[30,55],acceleration:[80,105]}},bodies:{body:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-140,-130,-100,-60,-10,10,20,50,80,90,85],z:[-25,-20,-10,0,0,0,0,0,0,0,0,0]},width:[0,5,20,30,35,35,35,35,30,20,0],height:[0,5,15,15,15,15,15,15,15,15,0],texture:[3,63,4,1,1,10,63,4,13],propeller:true},propeller:{section_segments:8,offset:{x:29,y:0,z:-20},position:{x:[0,0,0,0,0,0,0,0,-10,-10],y:[-70,-70,-30,-10,20,25,30,40,85,70],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,12,15,20,20,20,20,18,10,0],height:[0,12,15,15,15,15,15,15,10,0],texture:[13,11,3,3,63,63,63,13,17],propeller:true,angle:4},cannon:{section_segments:8,offset:{x:27,y:-30,z:-20},position:{x:[0,0,0,0,0,0],y:[-45,-50,-20,0,20,30],z:[0,0,0,0,0,0]},width:[0,10,10,6,5,0],height:[0,10,10,7,5,0],angle:4,laser:{damage:[7,10],rate:5,type:1,speed:[130,180],number:1,error:0,angle:0,recoil:20},propeller:false,texture:[4,13,4,8]},cannon1:{section_segments:12,offset:{x:0,y:-80,z:-30},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,40,70,30],z:[0,0,0,20,30,10]},width:[0,5,7,10,10,0],height:[0,5,7,10,10,0],angle:0,laser:{damage:[40,50],rate:1,type:1,speed:[100,200],number:1,error:0,angle:0,recoil:40},propeller:false,texture:[6,63,13,63]},topcockpit:{section_segments:8,offset:{x:0,y:-30,z:14},position:{x:[0,0,0,0,0,0,0],y:[-65,-50,0,20,40,80],z:[-5,-3,0,0,0]},width:[0,10,15,17,17,0],height:[0,10,15,15,10,0],texture:[9,9,2,3,4,0]},side:{section_segments:12,offset:{x:30,y:0,z:0},position:{x:[-25,-10,-5,0,0,0,-3],y:[-130,-100,-70,-10,20,50,70],z:[-20,-5,0,0,0,0,0]},width:[0,5,5,5,5,5,5],height:[0,5,5,5,5,5,5],texture:[0,3,18,63,10,3]}},wings:{main:{doubleside:true,offset:{x:20,y:-30,z:-20},length:[60,20,50],width:[70,70,40],angle:[-15,-30,0],position:[0,50,80,0],texture:[11,63],bump:{position:1,size:10}},main2:{doubleside:true,offset:{x:45,y:10,z:-20},length:[0,0,0,20],width:[0,0,0,150,40],angle:[0,0,0,0],position:[0,0,0,-15,10],texture:[0,8,13,63],bump:{position:35,size:20}},fin:{doubleside:true,offset:{x:0,y:30,z:5},length:[50],width:[50,25],angle:[10],position:[0,40],texture:[4],bump:{position:10,size:5}},fin2:{doubleside:true,offset:{x:0,y:0,z:5},length:[40],width:[100,25],angle:[90],position:[0,40],texture:[63],bump:{position:10,size:10}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.2,3.773,3.265,2.672,2.754,2.596,2.343,2.157,2.031,2.106,2.272,2.411,2.51,2.661,2.875,3.073,3.256,3.533,3.547,2.388,2.755,2.882,2.751,2.766,2.748,2.705,2.748,2.766,2.751,2.882,2.755,2.388,3.547,3.533,3.256,3.073,2.875,2.661,2.51,2.411,2.272,2.106,2.031,2.157,2.343,2.596,2.754,2.672,3.265,3.773],"lasers":[{"x":0.705,"y":-2.396,"z":-0.6,"angle":4,"damage":[7,10],"rate":5,"type":1,"speed":[130,180],"number":1,"spread":0,"error":0,"recoil":20},{"x":-0.705,"y":-2.396,"z":-0.6,"angle":-4,"damage":[7,10],"rate":5,"type":1,"speed":[130,180],"number":1,"spread":0,"error":0,"recoil":20},{"x":0,"y":-3.9,"z":-0.9,"angle":0,"damage":[40,50],"rate":1,"type":1,"speed":[100,200],"number":1,"spread":0,"error":0,"recoil":40}],"radius":4.2}')),JSON.stringify(r)})();

//Tier 6
s.Inferno_601 = (function(){var r=Function('return(function(){var i,j,key,model,ref,value;Array.prototype.mult=function(m){return this.map(function(v){return v*m})};Array.prototype.add=function(m){return this.map(function(v){return v+m})};ref=[];for(key in ref){key=key;key=key;value=ref[key];delete Array.prototype[key];Object.defineProperty(Array.prototype,key,{value:value,configurable:true,enumerable:false})}model={name:\'Inferno\',level:6,model:1,size:2.7,specs:{shield:{capacity:[300,375],reload:[4,7]},generator:{capacity:[175,250],reload:[30,40]},ship:{mass:350,speed:[70,90],rotation:[65,90],acceleration:[100,130]}},bodies:{reactors:{section_segments:40,vertical:true,offset:{x:30,y:10,z:-43},position:{x:[0,0,0,0],y:[-10,1,3,3],z:[0,0,0,0]},width:[7,7,6,0],height:[10,10,9,0],texture:[4,3,17]},big_reactor:{section_segments:40,vertical:true,offset:{x:0,y:14,z:-20},position:{x:[0,0,0,0],y:[-10,1,3,3],z:[0,0,0,0]},width:[7,7,6,0].mult(1.2),height:[10,10,9,0].mult(1.2),texture:[4,3,17]},cockpit:{section_segments:8,offset:{x:0,y:-33,z:7},position:{x:[0,0,0,0,0,0,0],y:[-30,-19,-10,5,10,15,20].mult(0.5),z:[0,0,0,0,0,0,0]},width:[0,6,8,9,9,8,0].mult(0.4),height:[0,9,10,11,11,10,0].mult(0.3),texture:[4,9,9,4]},side_guards1:{section_segments:12,offset:{x:30,y:-5,z:7},position:{x:[28,30,30,27,20,2,-5],y:[-50,-45,-15,15,40,60,65],z:[-7,-5,0,0,0,-4,-7]},width:[0,3,5,6,7,8,0],height:[0,6,10,12,11,9,0].mult(0.7),texture:[63,3,18,4,10,3]},side_guards2:{section_segments:12,offset:{x:30,y:-5,z:-7},position:{x:[28,30,30,27,20,2,-5],y:[-50,-45,-15,15,40,60,65],z:[7,5,0,0,0,4,7]},width:[0,3,5,6,7,8,0],height:[0,6,10,12,11,9,0].mult(0.7),texture:[63,3,18,4,10,3]},side_guards3:{section_segments:12,offset:{x:34,y:-4,z:0},position:{x:[27,29,31,28,20,0,-5],y:[-45,-45,-15,15,42,62,65],z:[0,0,0,0,0,0,0]},width:[0,3,5,6,7,8,0].mult(0.7),height:[0,6,10,12,11,9,0].mult(0.3),texture:[4,63,4,63,4]},guns:{section_segments:12,offset:{x:40,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-100,-110,-104,-96,-90,-84,20,22,30,50,60,63],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,11,11,11,10,10,13,15,15,13,0],height:[0,10,11,11,11,10,10,13,15,15,13,0],texture:[17,4,63,4,2,3,4,13,8,63,4],laser:{number:1,damage:[70,100],rate:8,speed:[180,260],angle:0,error:0,recoil:250}},turbines:{section_segments:8,offset:{x:18,y:35,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-50,-46,-51,-48,-40,-20,10,20,25,15],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,6,9,12,13,14,13,11,10,0],height:[0,6,9,12,13,14,13,11,10,0],texture:[3,17,4,3,18,10,63,13,17],propeller:true},center:{section_segments:8,offset:{x:0,y:-10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-45,-35,-20,-5,5,15,45,60,70,75,70],z:[0,0,0,6,6,8,8,3,0,0,0]},width:[0,6,8,10,11,11,10,8,6,4,0],height:[0,8,8,8,8,8,8,10,8,6,6,0],texture:[3,8,10,18,63,4,11,3,13,17],propeller:true},center_borders:{section_segments:8,offset:{x:10,y:-10,z:11},position:{x:[-10,-10,-7,-5,0,0,-4,-4],y:[-45,-45,-35,-20,5,45,70,70],z:[-12,-12,-9,-9,-1,-1,-7,-7]},width:[0,1,3,3,3,3,2,0],height:[0,1,3,3,3,3,3,0],texture:[63,63,63,4,17]},gun_topping_1:{section_segments:8,offset:{x:40,y:-20,z:7.8},position:{x:[0,0,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,0,0],y:[-85,-85,-82.5,-80,-77.5,-75,-72.5,-70,-67.5,-65,-62.5,-60,-57.5,-55,-52.5,-50,-47.5,-45,-42.5,-40,-37.5,-35,-32.5,-30,-27.5,-25,-22.5,-20,-17.5,-15,-12.5,-10,-7.5,-5,-2.5,0,2.5,5,7.5,10,12.5,15,17.5,20,20],z:[0,0,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,0,0]},width:[0,3,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,3,0],height:[0,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],texture:[4,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4]},gun_topping_2:{section_segments:8,offset:{x:40,y:-20,z:7.8},position:{x:[0,0,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,0,0],y:[-80,-85,-82.5,-80,-77.5,-75,-72.5,-70,-67.5,-65,-62.5,-60,-57.5,-55,-52.5,-50,-47.5,-45,-42.5,-40,-37.5,-35,-32.5,-30,-27.5,-25,-22.5,-20,-17.5,-15,-12.5,-10,-7.5,-5,-2.5,0,2.5,5,7.5,10,12.5,15,17.5,20,20],z:[0,0,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,0,0]},width:[0,3,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,3,0],height:[0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],texture:[4,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4]}},wings:{armor_gun_connection:{offset:{x:50,y:-5,z:0},length:[8],position:[0,-22],width:[20,30],angle:[0],texture:[2],bump:{position:5,size:10}},gun_fin:{offset:{x:39,y:25,z:15},doubleside:true,length:[20],position:[0,20],width:[29,15],angle:[20],texture:[63],bump:{position:5,size:0}},gun_fin2:{offset:{x:39,y:12.5,z:14},doubleside:true,length:[20],position:[0,22],width:[10,7],angle:[20],texture:[3],bump:{position:5,size:0}},front_fin1:{offset:{x:50,y:-120,z:0},doubleside:true,length:[10],position:[0,-10],width:[20,10],angle:[0],texture:[63],bump:{position:5,size:10}},front_fin2:{offset:{x:-30,y:-120,z:0},doubleside:true,length:[10],position:[0,-10],width:[20,10],angle:[0],texture:[63],bump:{position:5,size:10}}}};i=j=0;while(j<8){model.bodies[\'emitter\'+i]={section_segments:20,vertical:true,offset:{x:40,y:5,z:i*12.5+8.5},position:{x:[0,0,0,0,0,0],y:[-1,5.4,5.5,5.3,5.7,6],z:[0,0,0,0,0,0]},width:[3,2.9,2.4,2.3,1.2,0],height:[3,2.9,2.4,2.3,1.2,0],texture:[4,3,2,17,13]};i=++j}return model}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.97,7.37,7.381,7.978,7.609,5.003,4.317,4.4,4.351,4.095,3.923,3.812,3.684,3.62,3.624,3.628,3.708,3.853,4.216,3.74,3.792,3.751,3.575,3.407,3.506,3.517,3.506,3.407,3.575,3.751,3.792,3.74,4.216,3.853,3.708,3.628,3.624,3.62,3.684,3.812,3.923,4.095,4.351,4.4,4.317,5.003,7.609,7.978,7.381,7.37],"lasers":[{"x":2.16,"y":-7.02,"z":0,"angle":0,"damage":[70,100],"rate":8,"speed":[180,260],"number":1,"spread":0,"error":0,"recoil":250},{"x":-2.16,"y":-7.02,"z":0,"angle":0,"damage":[70,100],"rate":8,"speed":[180,260],"number":1,"spread":0,"error":0,"recoil":250}],"radius":7.978}')),JSON.stringify(r)})();
s.Wylde_602 = (function(){var r=Function('return(function(){var model;return model={name:\'Wylde\',level:6,model:2,size:1.2,specs:{shield:{capacity:[200,275],reload:[7,10]},generator:{capacity:[150,200],reload:[70,90]},ship:{mass:300,speed:[100,130],rotation:[40,50],acceleration:[100,115]}},bodies:{main:{section_segments:12,offset:{x:0,y:10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-240,-215,-150,-130,-100,-60,5,60,90,120,100],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,20,30,40,40,40,40,40,40,30,0],height:[0,20,30,30,30,30,30,30,30,20,0],texture:[63,3,13,63,1,10,2,3,4,17],propeller:true},cannon:{section_segments:8,offset:{x:60,y:40,z:-10},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-140,-120,-100,-80,-60,-30,30,50,70,90,80],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,20,20,25,25,25,20,20,15,0],height:[0,10,20,20,20,20,20,20,20,15,0],texture:[3,4,63,2,3,10,3,4,13,17],propeller:true,laser:{damage:[10,20],rate:6,type:1,speed:[150,180],number:1,error:5}},cannon1:{section_segments:8,offset:{x:40,y:20,z:20},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-160,-160,-140,-100,-60,-30,10,40,60,80,80],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,25,25,25,25,25,20,15,0],height:[0,10,20,20,20,20,20,20,20,15,0],texture:[17,13,63,10,1,2,3,4,63,17],propeller:true,laser:{damage:[10,20],rate:6,type:1,speed:[150,180],number:1,error:5}},cockpit:{section_segments:8,offset:{x:0,y:-150,z:30},position:{x:[0,0,0,0,0,0,0,0],y:[-50,-40,0,30,90,140,180,200],z:[-10,-10,-4,-2,0,0,0,0]},width:[0,10,15,20,20,20,20,0],height:[0,15,15,15,15,15,15,0],texture:[4,9,63,10,2,3,4]}},wings:{main:{doubleside:true,offset:{x:20,y:-10,z:0},length:[85,40,20,0,0],width:[120,90,70,50],angle:[-10,0,0,0],position:[0,40,70,90],texture:[3,4,63],bump:{position:20,size:1}},main1:{doubleside:true,offset:{x:25,y:20,z:30},length:[50,20,0,0,0],width:[70,50,30,0],angle:[20,10,0,0],position:[0,50,80,0],texture:[3,63],bump:{position:20,size:1}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.52,5.122,3.644,3.568,3.122,2.754,2.581,2.464,2.372,2.189,2.242,2.548,2.844,3.282,3.793,4.223,4.478,4.668,3.052,3.451,3.53,3.602,3.448,3.202,3.176,3.126,3.176,3.202,3.448,3.602,3.53,3.451,3.052,4.668,4.478,4.223,3.793,3.282,2.844,2.548,2.242,2.189,2.372,2.464,2.581,2.754,3.122,3.568,3.644,5.122],"lasers":[{"x":1.44,"y":-2.4,"z":-0.24,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.44,"y":-2.4,"z":-0.24,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":0.96,"y":-3.36,"z":0.48,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-0.96,"y":-3.36,"z":0.48,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0}],"radius":5.52}')),JSON.stringify(r)})();
s.Advanced_Airfly_603 = (function(){var r=Function('return(function(){var model;return model={name:\'Advanced Airfly\',level:6,model:3,size:2,specs:{shield:{capacity:[200,300],reload:[5,7]},generator:{capacity:[200,250],reload:[100,135]},ship:{mass:175,speed:[65,80],rotation:[30,50],acceleration:[80,100]}},bodies:{main:{section_segments:8,offset:{x:0,y:10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-95,-80,-60,-30,0,30,55,75,70],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,15,20,25,25,25,25,20,0],height:[0,15,20,20,20,20,20,15,0],propeller:true,texture:[4,63,3,1,2,3,4,17]},cockpit:{section_segments:12,offset:{x:0,y:0,z:15},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-70,-60,-30,-20,0,15,30,50,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,7,12,15,15,15,15,10,0],height:[0,10,10,10,10,10,10,10,0],propeller:0,texture:[4,9,4,3,2,10,63,4]},side:{section_segments:10,offset:{x:25,y:60,z:0},position:{x:[-10,-10,-2,0,0,0,0,0,0,0],y:[-100,-90,-60,-20,-20,0,10,25,20],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,10,7,0],height:[0,10,10,10,10,10,10,7,0],propeller:true,texture:[4,63,10,1,2,3,4,4],angle:0},reactors:{section_segments:12,offset:{x:55,y:40,z:-10},position:{x:[0,0,0,0,0,0,0,0],y:[-70,-55,-40,-20,10,30,45,40],z:[0,0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,7,0],height:[0,10,10,10,10,10,10,0],propeller:true,texture:[13,2,3,4,10,63,17]},reactors1:{section_segments:8,offset:{x:35,y:30,z:-15},position:{x:[-18,-13,-7,0,0,0,0,0],y:[-150,-135,-100,-70,-30,30,45,40],z:[0,0,0,0,0,0,0,0]},width:[0,10,12,15,15,15,10,0],height:[0,10,15,15,15,15,10,0],propeller:true,texture:[4,63,2,3,4,13,17]},cannon:{section_segments:8,offset:{x:100,y:0,z:-15},position:{x:[0,0,0,-1,-2,-3,-4],y:[-25,-30,-10,10,30,40,50,50],z:[0,0,0,0,0,0,0]},width:[0,5,7,7,7,7,5,0],height:[0,5,5,5,5,5,5,0],angle:5,laser:{damage:[20,25],rate:5,type:1,speed:[160,180],number:1},propeller:0,texture:[17,63,10,2,3,4]},cannon2:{section_segments:8,offset:{x:4,y:-40,z:-10},position:{x:[0,0,0,0,0,0],y:[-40,-50,-40,-20,20,30],z:[0,0,0,0,0,0]},width:[0,3,5,5,5,0],height:[0,5,5,5,5,0],angle:0,laser:{damage:[20,25],rate:6,type:1,speed:[50,75],number:1,error:10},propeller:false,texture:[16.9,10,4,4]}},wings:{main:{length:[60,40,15,0],width:[70,70,50,30],angle:[0,-10,0],position:[20,20,0,-20],texture:[3,11,63],doubleside:true,bump:{position:0,size:5},offset:{x:0,y:15,z:-10}},winglets:{length:[15,10,10,0],width:[30,30,30,20],angle:[10,10,15],position:[0,10,20,35],texture:[3,2,63],doubleside:true,bump:{position:0,size:5},offset:{x:20,y:50,z:3}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.607,4.848,4.685,4.254,3.531,3.094,2.829,2.643,2.464,2.552,4.271,4.645,4.611,4.593,4.527,4.598,4.66,4.022,3.844,3.992,4.208,4.377,3.628,3.575,3.461,3.406,3.461,3.575,3.628,4.377,4.208,3.992,3.844,4.022,4.66,4.598,4.527,4.593,4.611,4.645,4.271,2.552,2.464,2.643,2.829,3.094,3.531,4.254,4.685,4.848],"lasers":[{"x":3.895,"y":-1.195,"z":-0.6,"angle":5,"damage":[20,25],"rate":5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.895,"y":-1.195,"z":-0.6,"angle":-5,"damage":[20,25],"rate":5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.16,"y":-3.6,"z":-0.4,"angle":0,"damage":[20,25],"rate":6,"type":1,"speed":[50,75],"number":1,"spread":0,"error":10,"recoil":0},{"x":-0.16,"y":-3.6,"z":-0.4,"angle":0,"damage":[20,25],"rate":6,"type":1,"speed":[50,75],"number":1,"spread":0,"error":10,"recoil":0}],"radius":4.848}')),JSON.stringify(r)})();
s.Krypton_604 = (function(){var r=Function('return(function(){var model;return model={name:\'Krypton\',level:6,model:4,size:1.8,specs:{shield:{capacity:[200,225],reload:[5,10]},generator:{capacity:[200,250],reload:[40,70]},ship:{mass:200,speed:[110,130],rotation:[60,100],acceleration:[80,120]}},bodies:{main:{section_segments:8,offset:{x:0,y:-10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-95,-50,-10,10,25,35,55,70,80,88,84],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,15,23,27,25,25,21,19,15,10,0],height:[0,14,17,20,21,20,17,12,10,5,0],propeller:true,texture:[2,63,11,63,63,3,3,11,13,17]},cockpit:{section_segments:[45,95,185,275,325],offset:{x:0,y:-37,z:15},position:{x:[0,0,0,0,0,0],y:[-17,5,28,72,90],z:[0,0,0,1,0,0]},width:[0,10,15,20,0],height:[0,7,7,7,0],propeller:false,texture:[7,9,2.9,2.9]},Wing_thrusters:{section_segments:6,offset:{x:64,y:49,z:-3},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,10,20,19],z:[0,0,0,0,0,0]},width:[0,1.5,3,5.5,2.5,0],height:[0,1,2,4,4,0],angle:0,propeller:true,texture:[16.9,2.9,63,3.9,16.9]},Side_thruster_thingys:{section_segments:6,offset:{x:25,y:66,z:4},position:{x:[-16,-17,-9,-7,1,2,-3,-5,-5,-5],y:[-160,-165,-130,-110,-80,-50,-20,0,10,5],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,1.5,3,4,4,4,4,4,2,0],height:[0,1,4,4,4,4,4,4,2,0],angle:0,laser:{damage:[8,10],rate:6,type:1,speed:[120,160],number:1,error:0},propeller:true,texture:[16.9,12.9,63,8,8,63,11,12.9,16.9]},Reactor_ring_outside:{section_segments:8,offset:{x:0,y:20,z:-25},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-2.25,2,3.25,0.5,-2.25],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[12.5,13.5,11,6.5,2.5],height:[12.5,13.5,11,6.5,2.5],vertical:true,texture:[12.9,16.9,63,4],angle:0},Reactor_ring_middle:{section_segments:8,offset:{x:0,y:20,z:-25},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-2.25,2.25,1.25,-2.25,-2.25],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[9.5,9.5,0,4.5,9.5],height:[9.5,9.5,0,4.5,9.5],vertical:true,texture:[13,17,17,4],angle:0},mini_gun_cannons_top:{section_segments:6,offset:{x:1.31,y:-82,z:-11},position:{x:[0,0,0,0,0,0],y:[0,-10,0,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,laser:{damage:[1,2],rate:3.5,type:1,speed:[160,180],number:1,error:0},texture:[16.9,2.9,2.9,2.9,2.9]},mini_gun_cannons_bottom:{section_segments:6,offset:{x:1.31,y:-82,z:-14},position:{x:[0,0,0,0,0,0],y:[0,-10,0,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,laser:{damage:[1,2],rate:3.5,type:1,speed:[160,180],number:1,error:0},texture:[16.9,2.9,2.9,2.9,2.9]},mini_gun_cannons_top_copy:{section_segments:6,offset:{x:1.31,y:-82,z:-11},position:{x:[0,0,0,0,0,0],y:[0,-10,0,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,laser:{damage:[1,2],rate:3.5,type:1,speed:[160,180],number:1,error:0},texture:[16.9,2.9,2.9,2.9,2.9]},mini_gun_cannons_bottom_copy:{section_segments:6,offset:{x:1.31,y:-82,z:-14},position:{x:[0,0,0,0,0,0],y:[0,-10,0,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,laser:{damage:[1,2],rate:3.5,type:1,speed:[160,180],number:1,error:0},texture:[16.9,2.9,2.9,2.9,2.9]},minigun_mount_which_is_a_cube_by_money:{section_segments:[45,135,225,315],offset:{x:0,y:-68.5,z:-12},position:{x:[0,0,0,0,0,0],y:[-5,-5,3,5.5,5,18],z:[0,0,0,0,0,-1]},width:[0,7,7,7,7,0],height:[0,5,5,5,5,0],texture:[63,2.96,3,3]},minigun_spinny_thingy:{section_segments:20,offset:{x:0,y:-76,z:-12.5},position:{x:[0,0,0,0,0,0,0],y:[4,-9,-6,-1,3,5,5],z:[0,0,0,0,0,0,0]},width:[3.5,3.5,4,4.5,4.5,4,3.5],height:[3.5,3.5,4,4.5,4.5,4,3.5],texture:[4,13,13,63,2]},Turret_base_which_is_a_cube_by_money:{section_segments:[45,135,225,315],offset:{x:0,y:-4.5,z:24},position:{x:[0,0,0,0,0,0],y:[-5,-5,3,5.5,5,18],z:[0,0,0,0,0,-7]},width:[0,7,7,7,7,0],height:[0,5,5,5,5,0],texture:[3,2.96,3,3]},Cockpit_Armor:{section_segments:6,offset:{x:15,y:-3,z:14},position:{x:[-15,-14,-3,0,-0.5,0],y:[-55,-50,-20,10,23,10],z:[0,0,0,0,-1,0]},width:[0,2,4,4,2,0],height:[0,3,4,6,5,0],angle:0,propeller:false,texture:[3,3,63,3]},decor_cannons:{section_segments:6,offset:{x:3,y:-12,z:24},position:{x:[0,0,0,0,0,0],y:[0,-10,-5,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,texture:[16.9,12.9,8,2.9,2.9]},Armor_cannon:{section_segments:6,offset:{x:0,y:-32,z:14},position:{x:[-14,-14,-14,-14,-14,-14],y:[0,-10,-5,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,laser:{damage:[10,20],rate:3,type:1,speed:[150,200],number:1,error:0},texture:[16.9,12.9,8,2.9,2.9]}},wings:{main:{length:[40,7,8],width:[49,28,20,8],angle:[-10,40,0],position:[-20,20,20,40],doubleside:true,offset:{x:25,y:25,z:0},bump:{position:30,size:10},texture:[11,4]},Undermain:{length:[40,7,8],width:[49,28,20,8],angle:[-10,40,0],position:[-20,20,20,40],doubleside:true,offset:{x:25,y:25,z:-1.9},bump:{position:30,size:10},texture:[11,4]},highlight:{length:[40,7,8],width:[53,29,22,12],angle:[-10,40,0],position:[-20,20,20,40],doubleside:true,offset:{x:25,y:23,z:-0.9},bump:{position:30,size:0},texture:[17]},more_highlights:{length:[42],width:[19,16,12,2],angle:[-11],position:[-22,22],doubleside:true,offset:{x:25,y:28,z:3.9},bump:{position:30,size:5},texture:[63]},winglets:{length:[18],width:[46,14],angle:[45],position:[-10,25],doubleside:true,offset:{x:8,y:57,z:5},bump:{position:15,size:22},texture:[63]},winglets_highlight:{length:[17.8],width:[40,16],angle:[41],position:[-20,20],doubleside:true,offset:{x:7,y:58,z:6},bump:{position:0,size:1},texture:[17]}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.78,3.58,2.847,2.241,1.799,1.57,1.415,1.309,1.241,1.274,1.327,1.409,2.352,2.384,2.453,2.574,2.961,3.448,3.742,3.441,1.759,2.094,2.65,3.29,2.969,2.813,2.969,3.29,2.65,2.094,1.759,3.441,3.742,3.448,2.961,2.574,2.453,2.384,2.352,1.409,1.327,1.274,1.241,1.309,1.415,1.57,1.799,2.241,2.847,3.58],"lasers":[{"x":0.288,"y":-3.564,"z":0.144,"angle":0,"damage":[8,10],"rate":6,"type":1,"speed":[120,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.288,"y":-3.564,"z":0.144,"angle":0,"damage":[8,10],"rate":6,"type":1,"speed":[120,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.047,"y":-3.312,"z":-0.396,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.047,"y":-3.312,"z":-0.396,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.047,"y":-3.312,"z":-0.504,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.047,"y":-3.312,"z":-0.504,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.047,"y":-3.312,"z":-0.396,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.047,"y":-3.312,"z":-0.396,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.047,"y":-3.312,"z":-0.504,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.047,"y":-3.312,"z":-0.504,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.504,"y":-1.512,"z":0.504,"angle":0,"damage":[10,20],"rate":3,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.78}')),JSON.stringify(r)})();
s.Akrame_605 = (function(){var r=Function('return(function(){var model;return model={name:\'Akrame\',level:6,model:5,size:2,specs:{shield:{capacity:[250,400],reload:[4,7]},generator:{capacity:[100,200],reload:[60,100]},ship:{mass:300,speed:[70,80],rotation:[30,50],acceleration:[80,110]}},bodies:{body:{section_segments:8,offset:{x:0,y:20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-125,-120,-110,-90,-80,-10,20,70,95,110,100],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,19,20,25,30,30,25,15,0],height:[0,8,12,15,17,17,17,17,17,15,0],texture:[4,63,3,3,10,1,2,3,4,17],propeller:true},sides:{section_segments:12,offset:{x:30,y:50,z:0},position:{x:[20,15,12,4,2,0,0,0,0,0,0,0,0],y:[-110,-100,-90,-50,-30,-10,20,50,65,80,75],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,10,10,10,7,0],height:[0,10,10,10,10,10,10,10,10,7,0],texture:[63,13,4,3,2,10,3,4,63,17],propeller:true},sides_behind_cockpit:{section_segments:12,offset:{x:8,y:90,z:20},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-60,-50,-30,-20,-5,10,20,15],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,5,0],height:[0,7,7,7,7,7,5,0],texture:[63,1,2,3,63,13,17],propeller:true},cockpit:{section_segments:12,offset:{x:0,y:-40,z:10},position:{x:[0,0,0,0,0,0,0,0],y:[-50,-20,10,40,70,85,100,130],z:[0,0,0,0,0,0,0,0]},width:[0,10,12,15,15,15,10,0],height:[0,12,12,12,12,12,12,0],texture:[4,9,63,4,3,2,1,8],propeller:false},cannon:{section_segments:8,offset:{x:25,y:20,z:-10},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-50,-50,-50,-40,-30,-20,5,10,20,10,10],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,7,7,10,10,10,10,10,7,0],height:[0,5,7,7,10,10,10,10,10,7,0],texture:[17,13,13,63,11,13,11,11,12,10],propeller:false,laser:{damage:[10,20],rate:10,type:1,speed:[180,200],number:1,angle:0,error:5}}},wings:{main:{doubleside:true,offset:{x:20,y:40,z:0},length:[50,10,20,5,5],width:[90,60,50,20,10],angle:[-10,-10,-20,-30,0],position:[30,10,0,-25,-35,0],texture:[10,4,63,63,0],bump:{position:16,size:4}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.2,4.078,3.437,2.57,1.974,3.083,3.124,2.987,2.539,2.247,2.053,1.91,1.819,4.108,4.088,4.038,3.977,4.038,4.133,4.232,4.224,4.28,5.045,5.407,5.294,5.21,5.294,5.407,5.045,4.28,4.224,4.232,4.133,4.038,3.977,4.038,4.088,4.108,4.088,1.91,2.053,2.247,2.539,2.987,3.124,3.083,1.974,2.57,3.437,4.078],"lasers":[{"x":1,"y":-1.2,"z":-0.4,"angle":0,"damage":[10,20],"rate":10,"type":1,"speed":[180,200],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1,"y":-1.2,"z":-0.4,"angle":0,"damage":[10,20],"rate":10,"type":1,"speed":[180,200],"number":1,"spread":0,"error":5,"recoil":0}],"radius":5.407}')),JSON.stringify(r)})();
s.Rezador_606 = (function(){var r=Function('return(function(){var model;return model={name:\'Rezador\',level:6,model:6,size:1.5,specs:{shield:{capacity:[250,350],reload:[5,7]},generator:{capacity:[200,250],reload:[40,55]},ship:{mass:275,speed:[100,130],rotation:[25,50],acceleration:[100,135]}},bodies:{main:{section_segments:8,offset:{x:0,y:-30,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-120,-120,-120,-110,-90,-70,5,100,120,140,140],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,10,20,30,45,45,35,20,0],height:[0,5,5,10,20,20,25,25,20,17,0],texture:[17,4,13,63,3,2,10,63,13,17],propeller:true,laser:{damage:[15,15],rate:8,type:1,speed:[175,175],number:1,error:10}},lasers:{section_segments:8,offset:{x:56,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-60,-50,-40,-25,-20,-10,5,50,100,120,120],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,7,10,10,10,10,10,10,7,0],height:[0,5,7,10,10,10,10,10,10,7,0],texture:[17,13,3,2,63,10,2,3,63,17],propeller:true,laser:{damage:[15,15],rate:8,type:1,speed:[195,195],number:1,error:0}},cockpit:{section_segments:12,offset:{x:0,y:-40,z:17},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-60,-40,-20,0,5,25,40,50],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,15,22,25,25,20,5,0],height:[0,15,15,15,15,15,5,0],texture:[63,9,9,3,63,1,17],propeller:false},cannons_lasers:{section_segments:12,offset:{x:0,y:-110,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-10,-9,-5,-4,-3,-2,2,4,20,20,20],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,8,8,8,8,8,8,8,8,0],height:[0,8,8,8,8,8,8,8,8,0],texture:[16.9,4,4,18,4,18,13,4,12,17],propeller:false,laser:{damage:[75,75],rate:4,type:1,speed:[195,195],number:1,error:0}},shields:{section_segments:8,offset:{x:67,y:40,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-10,-7,-5,-4,-3,-2,2,4,10,10,10],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,50,50,50,50,50,50,50,20,10,0],height:[0,15,15,15,15,15,15,15,10,10,0],texture:[3,3,3,2,2,2,2,63,63,63],propeller:false,angle:90},shields2:{section_segments:8,offset:{x:40,y:40,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-10,-7,-5,-4,-3,-2,2,4,5,25,30],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,50,50,50,50,50,50,50,10,10,0],height:[0,15,15,15,15,15,15,15,10,10,0],texture:[3,3,3,2,2,2,2,63,63,63],propeller:false,angle:-90}},wings:{main:{doubleside:true,offset:{x:40,y:50,z:0},length:[90,20,0],width:[80,70,40],angle:[-10,-20,0],position:[0,-40,-70,0],texture:[10,63],bump:{position:20,size:1}},main1:{doubleside:true,offset:{x:20,y:60,z:20},length:[30,10,0],width:[50,40,25],angle:[10,20,0],position:[0,20,40,0],texture:[11,1],bump:{position:20,size:1}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.502,4.271,3.537,2.991,2.471,2.93,2.816,2.598,2.428,2.258,4.583,4.564,4.457,4.423,4.232,4.124,3.927,3.562,3.305,3.369,3.532,3.81,3.253,3.324,3.354,3.306,3.354,3.324,3.253,3.81,3.532,3.369,3.305,3.562,3.927,4.124,4.232,4.417,4.457,4.564,4.583,2.258,2.428,2.598,2.816,2.93,2.471,2.991,3.537,4.271],"lasers":[{"x":0,"y":-4.5,"z":0,"angle":0,"damage":[15,15],"rate":8,"type":1,"speed":[175,175],"number":1,"spread":0,"error":10,"recoil":0},{"x":1.68,"y":-2.4,"z":0,"angle":0,"damage":[15,15],"rate":8,"type":1,"speed":[195,195],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.68,"y":-2.4,"z":0,"angle":0,"damage":[15,15],"rate":8,"type":1,"speed":[195,195],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-3.6,"z":0,"angle":0,"damage":[75,75],"rate":4,"type":1,"speed":[195,195],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.583}')),JSON.stringify(r)})();
s.Banefire_607 = (function(){var r=Function('return(function(){var armor,armor2,barrellength,barreltexture,gunxpos,gunypos,i,j,k,key,l,model,power,powerhub,ref,size,topdeco,value;Array.prototype.mult=function(m){return this.map(function(v){return v*m})};Array.prototype.add=function(m){return this.map(function(v){return v+m})};ref=[];for(key in ref){key=key;key=key;key=key;key=key;key=key;value=ref[key];delete Array.prototype[key];Object.defineProperty(Array.prototype,key,{value:value,configurable:true,enumerable:false})}armor=function(n,xp,yp,zp,angle,height,width,outward){model.bodies[\'main_top\'+n]={section_segments:[45,135,225,315],offset:{x:0,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(xp),y:[-4,-4,-3,-2,0,0].add(65).add(outward),z:[5,5,5,4,0,0].mult(height+0.3)},width:[0,9,9,9,9,0].mult(width),height:[0,3,3,3,3,0],texture:[4,4,17,4],angle:-90+angle};model.bodies[\'main_bottom\'+n]={section_segments:[45,135,225,315],offset:{x:0,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(xp),y:[-4,-4,-3,-2,0,0].add(65).add(outward),z:[-5,-5,-5,-4,0,0].mult(height+0.3)},width:[0,9,9,9,9,0].mult(width),height:[0,3,3,3,3,0],texture:[4,4,17,4],angle:-90+angle};model.bodies[\'middle_plate\'+n]={section_segments:[45,135,225,315],offset:{x:0,y:yp,z:zp},position:{x:[0,0,0,0].add(xp),y:[-2,-2,0,0].add(65.4).add(outward),z:[0,0,0,0]},width:[0,9.1,9.1,0].mult(width),height:[0,3,3,0].mult(height),angle:-90+angle,texture:3};model.bodies[\'support_beam1\'+n]={section_segments:15,offset:{x:0,y:yp,z:zp},position:{x:[0,0,0,0].add(4).add(xp),y:[0,0,40,40].add(26).add(outward),z:[0,0,0,0]},width:[0,4,4,0].mult(0.5),height:[0,4,4,0].mult(0.5),angle:-90+angle,texture:[4,4,63]};model.bodies[\'support_beam2\'+n]={section_segments:15,offset:{x:0,y:yp,z:zp},position:{x:[0,0,0,0].add(-4).add(xp),y:[0,0,40,40].add(26).add(outward),z:[0,0,0,0]},width:[0,4,4,0].mult(0.5),height:[0,4,4,0].mult(0.5),angle:-90+angle,texture:[4,4,63]};return model.bodies[\'beam_ring\'+n]={section_segments:10,offset:{x:0,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(xp),y:[0,0,1.5,2.5,4,4].add(37).add(outward),z:[0,0,0,0,0,0]},width:[0,4,4.5,4.5,4,0].mult(1.6),height:[0,4,4.5,4.5,4,0].mult(1),angle:-90+angle,texture:[63,4,17,4,63]}};armor2=function(n,xp,yp,zp,angle,height,width,outward){model.bodies[\'main_top\'+n]={section_segments:[45,135,225,315],offset:{x:0,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(xp),y:[-4,-4,-3,-2,0,0].add(65).add(outward),z:[5,5,5,4,0,0].mult(height+0.3)},width:[0,9,9,9,9,0].mult(width),height:[0,3,3,3,3,0],texture:[4,4,17,4],angle:-90+angle};model.bodies[\'main_bottom\'+n]={section_segments:[45,135,225,315],offset:{x:0,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(xp),y:[-4,-4,-3,-2,0,0].add(65).add(outward),z:[-5,-5,-5,-4,0,0].mult(height+0.3)},width:[0,9,9,9,9,0].mult(width),height:[0,3,3,3,3,0],texture:[4,4,17,4],angle:-90+angle};model.bodies[\'middle_plate\'+n]={section_segments:[45,135,225,315],offset:{x:0,y:yp,z:zp},position:{x:[0,0,0,0].add(xp),y:[-2,-2,0,0].add(65.4).add(outward),z:[0,0,0,0]},width:[0,9.1,9.1,0].mult(width),height:[0,3,3,0].mult(height),angle:-90+angle,texture:3};model.bodies[\'support_beam1\'+n]={section_segments:15,offset:{x:0,y:yp,z:zp},position:{x:[0,0,0,0].add(4).add(xp),y:[0,0,10,10].add(56).add(outward),z:[0,0,0,0]},width:[0,4,4,0].mult(0.5),height:[0,4,4,0].mult(0.5),angle:-90+angle,texture:[4,4,63]};return model.bodies[\'support_beam2\'+n]={section_segments:15,offset:{x:0,y:yp,z:zp},position:{x:[0,0,0,0].add(-4).add(xp),y:[0,0,10,10].add(56).add(outward),z:[0,0,0,0]},width:[0,4,4,0].mult(0.5),height:[0,4,4,0].mult(0.5),angle:-90+angle,texture:[4,4,63]}};topdeco=function(n,xp,yp,angle,width,length,offset){model.bodies[\'top_part\'+n]={section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],angle:angle,offset:{x:0,y:gunypos+yp,z:12.5},position:{x:[0,0,offset,offset,0,0].add(gunxpos+xp),y:[-9,-9,-3.5,3.5,9,9].mult(length),z:[0,0,0,0,0,0]},width:[0,1,1,1,1,0].mult(width),height:[0,1,1,1,1,0],texture:4};return model.bodies[\'bottom_part\'+n]={section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],angle:angle,offset:{x:0,y:gunypos+yp,z:12.4},position:{x:[0,0,offset,offset,0,0].add(gunxpos+xp),y:[-9,-9,-3.5,3.5,9,9].mult(length),z:[0,0,0,0,0,0]},width:[0,1,1,1,1,0].mult(width+0.4),height:[0,1,1,1,1,0],texture:63}};power=function(n,xp,yp,zp,width,length,tilt,angle){model.bodies[\'bottom\'+n]={section_segments:8,offset:{x:xp,y:yp,z:zp},position:{x:[angle,angle,0,0],y:[-5,-5,5,5].mult(length),z:[tilt,tilt,0,0]},width:[0,2,2,0].mult(width),height:[0,1,1,0],texture:3};model.bodies[\'top\'+n]={section_segments:8,offset:{x:xp,y:yp,z:zp+0.7},position:{x:[angle,angle,0,0].add(0.6),y:[-5,-5,5,5].mult(length),z:[tilt,tilt,0,0]},width:[0,0.3,0.3,0].mult(width),height:[0,0.3,0.3,0],texture:17};return model.bodies[\'toptwo\'+n]={section_segments:8,offset:{x:xp,y:yp,z:zp+0.7},position:{x:[angle,angle,0,0].add(-0.6),y:[-5,-5,5,5].mult(length),z:[tilt,tilt,0,0]},width:[0,0.3,0.3,0].mult(width),height:[0,0.3,0.3,0],texture:17}};powerhub=function(n,xp,yp,zp,size){model.bodies[\'centerhubpiece\'+n]={section_segments:20,vertical:true,offset:{x:xp,y:zp,z:-yp},position:{x:[0,0,0,0,0,0],y:[-1,0.3,1.3,1.2,1.6,1.7].mult(size+1),z:[0,0,0,0,0,0]},width:[2,2.6,2.8,2,0.8,0].mult(size),height:[2,2.6,2.7,2,0.8,0].mult(size),texture:[4,3,11,4,18]};model.bodies[\'partone\'+n]={section_segments:[45,135,225,315],angle:0,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'parttwo\'+n]={section_segments:[45,135,225,315],angle:60,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'partthree\'+n]={section_segments:[45,135,225,315],angle:120,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'partfour\'+n]={section_segments:[45,135,225,315],angle:180,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'partfive\'+n]={section_segments:[45,135,225,315],angle:240,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'partsix\'+n]={section_segments:[45,135,225,315],angle:300,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'hexagonsone\'+n]={section_segments:[30,90,150,210,270,330],offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(0.3).add(size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]};model.bodies[\'hexagonstwo\'+n]={section_segments:[30,90,150,210,270,330],angle:-10,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2).add(size+0.3),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]};model.bodies[\'hexagonsthree\'+n]={section_segments:[30,90,150,210,270,330],angle:10,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2).add(-size-0.3),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]};model.bodies[\'hexagonsfour\'+n]={section_segments:[30,90,150,210,270,330],offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(-0.3).add(-size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]};model.bodies[\'hexagonsfive\'+n]={section_segments:[30,90,150,210,270,330],angle:10,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(-size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2).add(size+0.3),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]};return model.bodies[\'hexagonssix\'+n]={section_segments:[30,90,150,210,270,330],angle:-10,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(-size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2).add(-size-0.3),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]}};gunxpos=42;gunypos=25;barrellength=1.095;barreltexture=3;size=0.95;model={name:\'Banefire\',level:6,model:7,size:3.7,specs:{shield:{capacity:[300,475],reload:[5,10]},generator:{capacity:[250,300],reload:[55,65]},ship:{mass:425,speed:[50,60],rotation:[40,60],acceleration:[140,175]}},bodies:{gun1:{section_segments:0,offset:{x:0,y:-70,z:7},position:{x:[0,0,0,0].add(42),y:[-1,-1,1,1],z:[0,0,0,0]},width:[0,1,1,0],height:[0,1,1,0],laser:{damage:[7,10],rate:10,number:1,error:2,speed:[200,250],angle:0,recoil:15}},gun2:{section_segments:0,offset:{x:0,y:-70,z:7},position:{x:[0,0,0,0].add(42),y:[-1,-1,1,1],z:[0,0,0,0]},width:[0,1,1,0],height:[0,1,1,0],laser:{damage:[7,10],rate:9.9,number:1,error:2,speed:[200,250],angle:0,recoil:15}},gun3:{section_segments:0,offset:{x:0,y:-70,z:7},position:{x:[0,0,0,0].add(42),y:[-1,-1,1,1],z:[0,0,0,0]},width:[0,1,1,0],height:[0,1,1,0],laser:{damage:[7,10],rate:9.8,number:1,error:2,speed:[200,250],angle:0,recoil:15}},main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[-50,-60,-30,0,30,50,60,50],z:[0,0,0,0,0,0,0,0]},width:[0,4,13,14,13,10,8,0].mult(1.5),height:[0,3,10,11,10,7,5,0].mult(1.4),texture:[13,2,11,63,4,13,17],propeller:true},reactor:{section_segments:8,vertical:true,offset:{x:0,y:16.8,z:-17.5},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-4,0,0.5,0.5,0,-1,1,0.2,0.8,2,2].mult(2),z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[5,5,4.7,4.4,4,2,2,3,3.3,1,0].mult(2.5),height:[5,5,4.7,4.4,4,2,2,3,3.3,1,0].mult(2.5),texture:[4,3,17,4,17,13,3,63,12,18]},side_name_platform:{section_segments:[45,135,225,315],angle:90,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0],y:[-2,-2,10,10].add(-27),z:[0,0,0,0]},width:[0,40,43,0],height:[0,8,8,0],texture:3},giant_half_O_curve:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[15,12,4,0,0,4,12,15].add(-50),y:[-60,-55,-35,-10,10,35,55,60],z:[0,0,0,0,0,0,0,0]},width:[0,4,7,8,8,7,4,0],height:[0,8,10,11,11,10,8,0],texture:[63,3,8,63,8,3,63]},cockpit:{section_segments:7,offset:{x:0,y:-27,z:12},position:{x:[0,0,0,0,0,0,0,0],y:[-20,-17,-13,-7,0,5,10,10].mult(1.2),z:[-6,-5,-4,-2,-1,1,2,0]},width:[0,5,8,9,10,8.7,7,0].mult(0.8),height:[0,3,6,7,8,5,2,0],texture:[4,4,9,9,4]},barrel_box:{section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],offset:{x:0,y:gunypos,z:0},position:{x:[0,0,0,0,0,0].add(gunxpos),y:[-20,-20,-18,4,7,3].mult(1.4),z:[0,0,0,0,0,0]},width:[0,11,12,12,8,0].mult(1.3),height:[0,12,13,13,8,0].mult(1.3),texture:[2.9,2.9,2.9,2.9,17],propeller:true},base:{section_segments:20,offset:{x:0,y:gunypos-30,z:0},position:{x:[0,0,0,0].add(gunxpos),y:[-1,-1,2,2].mult(1.3),z:[0,0,0,0]},width:[0,7,7,0].mult(1.5),height:[0,7,7,0].mult(1.5),texture:4},connector_1:{section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],angle:90,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0].add(-24.5),y:[-2,-2,10,10].add(21),z:[0,0,0,0]},width:[0,7,7,0],height:[0,5,5,0],texture:3},connector_2:{section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],angle:90,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0].add(-5.5),y:[-2,-2,10,10].add(21),z:[0,0,0,0]},width:[0,7,7,0],height:[0,5,5,0],texture:3},barrel1:{section_segments:20,offset:{x:0,y:gunypos,z:7},position:{x:[0,0,0,0,0,0,0].add(gunxpos),y:[-85,-89,-86,-83,-80,-80,0].mult(barrellength),z:[0,0,0,0,0,0,0]},width:[0,5,5,5,5,4,4].mult(0.7),height:[0,5,5,5,5,4,4].mult(0.7),texture:[17,barreltexture,63,barreltexture,3,4]},barrel2:{section_segments:20,offset:{x:0,y:gunypos,z:3.5},position:{x:[0,0,0,0,0,0,0].add(gunxpos+6),y:[-85,-89,-86,-83,-80,-80,0].mult(barrellength),z:[0,0,0,0,0,0,0]},width:[0,5,5,5,5,4,4].mult(0.7),height:[0,5,5,5,5,4,4].mult(0.7),texture:[17,barreltexture,63,barreltexture,3,4]},barrel3:{section_segments:20,offset:{x:0,y:gunypos,z:-3.5},position:{x:[0,0,0,0,0,0,0].add(gunxpos+6),y:[-85,-89,-86,-83,-80,-80,0].mult(barrellength),z:[0,0,0,0,0,0,0]},width:[0,5,5,5,5,4,4].mult(0.7),height:[0,5,5,5,5,4,4].mult(0.7),texture:[17,barreltexture,63,barreltexture,3,4]},barrel4:{section_segments:20,offset:{x:0,y:gunypos,z:-7},position:{x:[0,0,0,0,0,0,0].add(gunxpos),y:[-85,-89,-86,-83,-80,-80,0].mult(barrellength),z:[0,0,0,0,0,0,0]},width:[0,5,5,5,5,4,4].mult(0.7),height:[0,5,5,5,5,4,4].mult(0.7),texture:[17,barreltexture,63,barreltexture,3,4]},barrel5:{section_segments:20,offset:{x:0,y:gunypos,z:3.5},position:{x:[0,0,0,0,0,0,0].add(gunxpos-6),y:[-85,-89,-86,-83,-80,-80,0].mult(barrellength),z:[0,0,0,0,0,0,0]},width:[0,5,5,5,5,4,4].mult(0.7),height:[0,5,5,5,5,4,4].mult(0.7),texture:[17,barreltexture,63,barreltexture,3,4]},barrel6:{section_segments:20,offset:{x:0,y:gunypos,z:-3.5},position:{x:[0,0,0,0,0,0,0].add(gunxpos-6),y:[-85,-89,-86,-83,-80,-80,0].mult(barrellength),z:[0,0,0,0,0,0,0]},width:[0,5,5,5,5,4,4].mult(0.7),height:[0,5,5,5,5,4,4].mult(0.7),texture:[17,barreltexture,63,barreltexture,3,4]},connector_1_1:{section_segments:8,angle:90,offset:{x:0,y:0,z:2.6},position:{x:[0,0,0,0].add(-3.5),y:[-2,-2,10,10].add(21),z:[0,0,0,0]},width:[0,2,2,0].mult(0.7),height:[0,2,2,0],texture:17},connector_1_11:{section_segments:12,angle:90,offset:{x:0,y:0,z:2.6},position:{x:[0,0,0,0].add(-5.5),y:[3,3,5,5].add(20.5),z:[0,0,0,0]},width:[0,2,2,0].mult(2.6),height:[0,4,4,0],texture:4},connector_1_2:{section_segments:8,angle:90,offset:{x:0,y:0,z:2.6},position:{x:[0,0,0,0].add(-7.5),y:[-2,-2,10,10].add(21),z:[0,0,0,0]},width:[0,2,2,0].mult(0.7),height:[0,2,2,0],texture:17},connector_1_12:{section_segments:12,angle:90,offset:{x:0,y:0,z:2.6},position:{x:[0,0,0,0].add(-24.5),y:[3,3,5,5].add(20.5),z:[0,0,0,0]},width:[0,2,2,0].mult(2.6),height:[0,4,4,0],texture:4},connector_2_1:{section_segments:8,angle:90,offset:{x:0,y:0,z:2.6},position:{x:[0,0,0,0].add(-22.5),y:[-2.8,-2.8,10,10].add(21),z:[0,0,0,0]},width:[0,2,2,0].mult(0.7),height:[0,2,2,0],texture:17},connector_2_2:{section_segments:8,angle:90,offset:{x:0,y:0,z:2.6},position:{x:[0,0,0,0].add(-26.5),y:[-3,-3,10,10].add(21),z:[0,0,0,0]},width:[0,2,2,0].mult(0.7),height:[0,2,2,0],texture:17},middle_reactor:{section_segments:24,vertical:true,offset:{x:0,y:13.6,z:-gunypos+10},position:{x:[0,0,0,0,0,0].add(gunxpos),y:[-2,0,1,1,0.7,0.3],z:[0,0,0,0,0,0]},width:[3,3,2.5,2,1.5,0].mult(1.3),height:[3,3,2.5,2,1.5,0].mult(1.3),texture:[4,3,17,4,17]},smol_reactor1:{section_segments:24,vertical:true,offset:{x:0,y:13.6,z:-gunypos+20},position:{x:[0,0,0,0,0].add(gunxpos+5),y:[-2,0,1,0.9,1],z:[0,0,0,0,0]},width:[3,3,2.3,1.9,0].mult(size),height:[3,3,2.3,1.9,0].mult(size),texture:[4,3,4,17]},smol_reactor2:{section_segments:24,vertical:true,offset:{x:0,y:13.6,z:-gunypos+20},position:{x:[0,0,0,0,0].add(gunxpos-5),y:[-2,0,1,0.9,1],z:[0,0,0,0,0]},width:[3,3,2.3,1.9,0].mult(size),height:[3,3,2.3,1.9,0].mult(size),texture:[4,3,4,17]},smol_reactor3:{section_segments:24,vertical:true,offset:{x:0,y:13.6,z:-gunypos},position:{x:[0,0,0,0,0].add(gunxpos-5),y:[-2,0,1,0.9,1],z:[0,0,0,0,0]},width:[3,3,2.3,1.9,0].mult(size),height:[3,3,2.3,1.9,0].mult(size),texture:[4,3,4,17]},smol_reactor4:{section_segments:24,vertical:true,offset:{x:0,y:13.6,z:-gunypos},position:{x:[0,0,0,0,0].add(gunxpos+5),y:[-2,0,1,0.9,1],z:[0,0,0,0,0]},width:[3,3,2.3,1.9,0].mult(size),height:[3,3,2.3,1.9,0].mult(size),texture:[4,3,4,17]},emblem_circle:{section_segments:40,vertical:true,offset:{x:0,y:4,z:-24.5},position:{x:[0,0,0,0].add(-23),y:[-2,-2,2,2],z:[0,0,0,0]},width:[0,3,3,0],height:[0,3,3,0],texture:4},emblem_bottom_triangle:{section_segments:[45,135,225,315],offset:{x:0,y:24.5,z:5},position:{x:[1.5,1.5,0,0,1.5,1.5].add(-22.7),y:[-1.5,-1.5,-0.5,0.5,1.5,1.5],z:[0,0,0,0,0,0]},width:[0,1,1,1,1,0],height:[0,2,2,2,2,0],texture:63},emblem_top_triangle:{section_segments:[45,135,225,315],offset:{x:0,y:24.5,z:5},position:{x:[-1.5,-1.5,0,0,-1.5,-1.5].add(-23.3),y:[-1.5,-1.5,-0.5,0.5,1.5,1.5],z:[0,0,0,0,0,0]},width:[0,1,1,1,1,0],height:[0,2,2,2,2,0],texture:63},S_top:{section_segments:[45,135,225,315],offset:{x:0,y:-25.5,z:6},position:{x:[-1.5,-1.5,0,0,-1.5,-1.5].add(-20),y:[-3,-3,-1,1,3,3].mult(1.3).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.5),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:4},S_mid:{section_segments:[45,135,225,315],offset:{x:0,y:-25.5,z:6},position:{x:[1.5,1.5,0,0,-1.5,-1.5].add(-23),y:[-3,-3,-1,1,3,3].mult(1.3).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.5),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:4},S_bottom:{section_segments:[45,135,225,315],offset:{x:0,y:-25.5,z:6},position:{x:[1.5,1.5,0,0,1.5,1.5].add(-26),y:[-3,-3,-1,1,3,3].mult(1.3).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.5),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:4},S_top_one:{section_segments:[45,135,225,315],offset:{x:0,y:-25.5,z:5.9},position:{x:[-1.5,-1.5,0,0,-1.5,-1.5].add(-20),y:[-3.1,-3.1,-1,1,3.1,3.1].mult(1.3).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.6),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:17},S_mid_one:{section_segments:[45,135,225,315],offset:{x:0,y:-25.5,z:5.9},position:{x:[1.5,1.5,0,0,-1.5,-1.5].add(-23),y:[-3.1,-3.1,-1,1,3.1,3.1].mult(1.3).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.6),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:17},S_bottom_one:{section_segments:[45,135,225,315],offset:{x:0,y:-25.5,z:5.9},position:{x:[1.5,1.5,0,0,1.5,1.5].add(-26),y:[-3.1,-3.1,-1,1,3.1,3.1].mult(1.3).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.6),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:17},long:{section_segments:[45,135,225,315],offset:{x:0,y:-22,z:6},position:{x:[0,0,0,0].add(-23),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},top:{section_segments:[45,135,225,315],offset:{x:0,y:-20.5,z:6},position:{x:[0,0,0,0].add(-19.9),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},bottom:{section_segments:[45,135,225,315],offset:{x:0,y:-20.5,z:6},position:{x:[0,0,0,0].add(-26.1),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},mid:{section_segments:[45,135,225,315],offset:{x:0,y:-20.5,z:6},position:{x:[0,0,0,0].add(-23),y:[-2,-2,0,0].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},long_s:{section_segments:[45,135,225,315],offset:{x:0,y:-22,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},top_s:{section_segments:[45,135,225,315],offset:{x:0,y:-20.5,z:5.9},position:{x:[0,0,0,0].add(-19.9),y:[-2.1,-2.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},bottom_s:{section_segments:[45,135,225,315],offset:{x:0,y:-20.5,z:5.9},position:{x:[0,0,0,0].add(-26.1),y:[-2.1,-2.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},mid_s:{section_segments:[45,135,225,315],offset:{x:0,y:-20.5,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-2.1,-2.1,0.1,0.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},long1:{section_segments:[45,135,225,315],offset:{x:0,y:-18,z:6},position:{x:[0,0,0,0].add(-23),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},top2:{section_segments:[45,135,225,315],offset:{x:0,y:-17,z:6},position:{x:[0,0,0,0].add(-19.7),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},top3:{section_segments:[45,135,225,315],offset:{x:0,y:-17,z:6},position:{x:[0,0,0,0].add(-23),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},R_curve:{section_segments:[45,135,225,315],angle:-90,offset:{x:0,y:-15.3,z:6.2},position:{x:[-3,-3,0,0,-3,-3].mult(0.5),y:[-3,-3,-1,1,3,3].mult(1.3).add(42.6).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.5),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:4},bottom2:{section_segments:[45,135,225,315],angle:-45,offset:{x:0,y:8,z:6},position:{x:[0,0,0,0].add(-35),y:[-3,-3,4.5,4.5].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},long_AAAAArr:{section_segments:[45,135,225,315],offset:{x:0,y:-18,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},S_top_AAAAArr:{section_segments:[45,135,225,315],angle:-90,offset:{x:0,y:-15.3,z:6.1},position:{x:[-1.5,-1.5,0,0,-1.5,-1.5],y:[-3.1,-3.1,-1,1,3.1,3.1].mult(1.3).add(42.6).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.53),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:17},top_AAAAArr:{section_segments:[45,135,225,315],offset:{x:0,y:-17,z:5.9},position:{x:[0,0,0,0].add(-19.9),y:[-2.1,-2.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},mid_AAAAArr:{section_segments:[45,135,225,315],offset:{x:0,y:-17,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-2.1,-2.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},bottom_AAAAArr:{section_segments:[45,135,225,315],angle:-45,offset:{x:0,y:8,z:5.9},position:{x:[0,0,0,0].add(-35),y:[-3.1,-3.1,4.6,4.6].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},long3:{section_segments:[45,135,225,315],offset:{x:0,y:-13,z:6},position:{x:[0,0,0,0].add(-23),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},top4:{section_segments:[45,135,225,315],offset:{x:0,y:-11.5,z:6},position:{x:[0,0,0,0].add(-19.9),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},bottom3:{section_segments:[45,135,225,315],offset:{x:0,y:-11.5,z:6},position:{x:[0,0,0,0].add(-26.1),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},mid2:{section_segments:[45,135,225,315],offset:{x:0,y:-11.5,z:6},position:{x:[0,0,0,0].add(-23),y:[-2,-2,0,0].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},long_2s:{section_segments:[45,135,225,315],offset:{x:0,y:-13,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},top_2s:{section_segments:[45,135,225,315],offset:{x:0,y:-11.5,z:5.9},position:{x:[0,0,0,0].add(-19.9),y:[-2.1,-2.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},bottom_2s:{section_segments:[45,135,225,315],offset:{x:0,y:-11.5,z:5.9},position:{x:[0,0,0,0].add(-26.1),y:[-2.1,-2.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},mid_2s:{section_segments:[45,135,225,315],offset:{x:0,y:-11.5,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-2.1,-2.1,0.1,0.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},long4:{section_segments:[45,135,225,315],offset:{x:0,y:-9,z:6},position:{x:[0,0,0,0].add(-23),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},middle:{section_segments:[45,135,225,315],angle:20,offset:{x:0,y:-16,z:6},position:{x:[0,0,0,0].add(-24.5),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},long5:{section_segments:[45,135,225,315],offset:{x:0,y:-6.5,z:6},position:{x:[0,0,0,0].add(-23),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},long_help_me_please:{section_segments:[45,135,225,315],offset:{x:0,y:-9,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},long_help_me_please2:{section_segments:[45,135,225,315],offset:{x:0,y:-6.5,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},middle_IcanttellyouhowcrazyImgoing:{section_segments:[45,135,225,315],angle:20,offset:{x:0,y:-16,z:5.9},position:{x:[0,0,0,0].add(-24.5),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:17},long6:{section_segments:[45,135,225,315],offset:{x:0,y:-4,z:6},position:{x:[0,0,0,0].add(-23),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},D_curve:{section_segments:[45,135,225,315],angle:-90,offset:{x:0,y:-1,z:6.2},position:{x:[-1.5,-1.5,0,0,-1.5,-1.5],y:[-3,-3,-1,1,3,3].mult(2.3).add(46).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.5),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:4},top5:{section_segments:[45,135,225,315],offset:{x:0,y:-2.6,z:6},position:{x:[0,0,0,0].add(-19.9),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},bottom4:{section_segments:[45,135,225,315],offset:{x:0,y:-2.6,z:6},position:{x:[0,0,0,0].add(-26.1),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},long_Iwanttodie:{section_segments:[45,135,225,315],offset:{x:0,y:-4,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},top_thisistiresome:{section_segments:[45,135,225,315],offset:{x:0,y:-2.6,z:5.9},position:{x:[0,0,0,0].add(-19.9),y:[-3.1,-3.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},bottom_AAAAArrrrrrrrr:{section_segments:[45,135,225,315],offset:{x:0,y:-2.6,z:5.9},position:{x:[0,0,0,0].add(-26.1),y:[-3.1,-3.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},D_curve2:{section_segments:[45,135,225,315],angle:-90,offset:{x:0,y:-1,z:6.1},position:{x:[-1.5,-1.5,0,0,-1.5,-1.5],y:[-3,-3,-1,1,3,3].mult(2.3).add(46).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.51),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:17},long7:{section_segments:[45,135,225,315],offset:{x:0,y:2.3,z:6},position:{x:[0,0,0,0].add(-23),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},top6:{section_segments:[45,135,225,315],offset:{x:0,y:2.5,z:6},position:{x:[0,0,0,0].add(-19.9),y:[-3,-3,3,3].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},bottom5:{section_segments:[45,135,225,315],offset:{x:0,y:2.3,z:6},position:{x:[0,0,0,0].add(-26.1),y:[-3,-3,3,3].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},long_AAAAAr:{section_segments:[45,135,225,315],offset:{x:0,y:2.3,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},top_AAAAAr:{section_segments:[45,135,225,315],offset:{x:0,y:2.5,z:5.9},position:{x:[0,0,0,0].add(-19.9),y:[-3.1,-3.1,3.1,3.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},bottom_AAAAAr:{section_segments:[45,135,225,315],offset:{x:0,y:2.5,z:5.9},position:{x:[0,0,0,0].add(-26.1),y:[-3.1,-3.1,2.8,2.8].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},long8:{section_segments:[45,135,225,315],offset:{x:0,y:5.5,z:6},position:{x:[0,0,0,0].add(-23),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},top_idk:{section_segments:[45,135,225,315],offset:{x:0,y:7,z:6},position:{x:[0,0,0,0].add(-19.9),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},bottom_hmm:{section_segments:[45,135,225,315],offset:{x:0,y:7,z:6},position:{x:[0,0,0,0].add(-26.1),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},mid4:{section_segments:[45,135,225,315],offset:{x:0,y:7,z:6},position:{x:[0,0,0,0].add(-23),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},B_curve1:{section_segments:[45,135,225,315],angle:-90,offset:{x:0,y:8.7,z:6.2},position:{x:[-1.5,-1.5,0,0,-1.5,-1.5],y:[-3,-3,-1,1,3,3].mult(1.3).add(42.9).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.5),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:4},B_curve2:{section_segments:[45,135,225,315],angle:-90,offset:{x:0,y:8.7,z:6.2},position:{x:[-1.5,-1.5,0,0,-1.5,-1.5],y:[-3,-3,-1,1,3,3].mult(1.3).add(49).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.5),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:4},B_curve4213:{section_segments:[45,135,225,315],angle:-90,offset:{x:0,y:8.7,z:6.1},position:{x:[-1.5,-1.5,0,0,-1.5,-1.5],y:[-3.1,-3.1,-1,1,3.1,3.1].mult(1.3).add(42.9).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.53),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:17},B_curve1342:{section_segments:[45,135,225,315],angle:-90,offset:{x:0,y:8.7,z:6.1},position:{x:[-1.5,-1.5,0,0,-1.5,-1.5],y:[-3.1,-3.1,-1,1,3.1,3.1].mult(1.3).add(49).mult(0.5),z:[0,0,0,0,0,0]},width:[0,2,2,2,2,0].mult(0.7).mult(0.53),height:[0,2,2,2,2,0].mult(0.7).mult(0.5),texture:17},long_ha:{section_segments:[45,135,225,315],offset:{x:0,y:5.5,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},top_haha:{section_segments:[45,135,225,315],offset:{x:0,y:7,z:5.9},position:{x:[0,0,0,0].add(-19.9),y:[-2.1,-2.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},bottom_hahaha:{section_segments:[45,135,225,315],offset:{x:0,y:7,z:5.9},position:{x:[0,0,0,0].add(-26.1),y:[-2.1,-2.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},mid_hahahahahahahahaha:{section_segments:[45,135,225,315],offset:{x:0,y:7,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-2.1,-2.1,0.1,0.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},long9:{section_segments:[45,135,225,315],offset:{x:0,y:11,z:6},position:{x:[0,0,0,0].add(-23),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},top7:{section_segments:[45,135,225,315],offset:{x:0,y:11.2,z:6},position:{x:[0,0,0,0].add(-19.9),y:[-3,-3,3,3].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},bottom6:{section_segments:[45,135,225,315],offset:{x:0,y:11.2,z:6},position:{x:[0,0,0,0].add(-26.1),y:[-3,-3,3,3].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},long_AAAAA:{section_segments:[45,135,225,315],offset:{x:0,y:11,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},top_AAAAA:{section_segments:[45,135,225,315],offset:{x:0,y:11.2,z:5.9},position:{x:[0,0,0,0].add(-19.9),y:[-3.1,-3.1,3.1,3.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},bottom_AAAAA:{section_segments:[45,135,225,315],offset:{x:0,y:11.2,z:5.9},position:{x:[0,0,0,0].add(-26.1),y:[-3.1,-3.1,3.1,3.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},long10:{section_segments:[45,135,225,315],offset:{x:0,y:15,z:6},position:{x:[0,0,0,0].add(-23),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},top8:{section_segments:[45,135,225,315],offset:{x:0,y:15.1,z:6},position:{x:[0,0,0,0].add(-19.9),y:[-3,-3,3,3].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},long_AAAAAs:{section_segments:[45,135,225,315],offset:{x:0,y:15,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},top_AAAAAs:{section_segments:[45,135,225,315],offset:{x:0,y:15.1,z:5.9},position:{x:[0,0,0,0].add(-19.9),y:[-3.1,-3.1,3.1,3.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},long_smth:{section_segments:[45,135,225,315],offset:{x:0,y:18,z:6},position:{x:[0,0,0,0].add(-23),y:[-0.5,-0.5,1,1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},top48346:{section_segments:[45,135,225,315],offset:{x:0,y:19.5,z:6},position:{x:[0,0,0,0].add(-19.9),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},bottom_yes:{section_segments:[45,135,225,315],offset:{x:0,y:19.5,z:6},position:{x:[0,0,0,0].add(-26.1),y:[-2,-2,1,1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},mid42:{section_segments:[45,135,225,315],offset:{x:0,y:19.5,z:6},position:{x:[0,0,0,0].add(-23),y:[-2,-2,0,0].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.5),height:[0,2,2,0].mult(0.5),texture:4},long_3s:{section_segments:[45,135,225,315],offset:{x:0,y:18,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-0.6,-0.6,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,10,10,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},top_3s:{section_segments:[45,135,225,315],offset:{x:0,y:19.5,z:5.9},position:{x:[0,0,0,0].add(-19.9),y:[-2.1,-2.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},bottom_3s:{section_segments:[45,135,225,315],offset:{x:0,y:19.5,z:5.9},position:{x:[0,0,0,0].add(-26.1),y:[-2.1,-2.1,1.1,1.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},mid_3s:{section_segments:[45,135,225,315],offset:{x:0,y:19.5,z:5.9},position:{x:[0,0,0,0].add(-23),y:[-2.1,-2.1,0.1,0.1].mult(0.5),z:[0,0,0,0]},width:[0,1.1,1.1,0].mult(0.51),height:[0,2,2,0].mult(0.5),texture:17},end1:{section_segments:[45,135,225,315],offset:{x:0,y:-7.8,z:9.5},position:{x:[0.5,0.5,0,0].add(40.9),y:[0,0,1.6,1.6],z:[0,0,0,0]},width:[0,0,0.7,0.7],height:[0,1,1,0],texture:63},end2:{section_segments:[45,135,225,315],offset:{x:0,y:-62.8,z:9.45},position:{x:[0.5,0.5,0,0].add(42.7),y:[0,0,1.6,1.6],z:[0,0,0,0]},width:[0.7,0.7,0,0],height:[0,1,1,0],texture:63}}};({plate1:armor(1,0,0,0,0,1.3,1.4,-3),plate2:armor(2,9,0,0,13,1.2,1.8,-2),plate3:armor(3,-9,0,0,-13,1.2,1.8,-2),plate4:armor2(4,16,0,0,29,1,1.8,2),plate5:armor2(5,-16,0,0,-29,1,1.8,2),plate6:armor2(6,-15.5,0,0,-180,1.6,2,-6),line1:topdeco(1,6,-10,0,0.5,0.9,2),line2:topdeco(2,-6,-10,0,0.5,0.9,-2),line3:topdeco(3,6.5,-31.5,-20,0.4,0.3,1),line4:topdeco(4,6.4,-36.5,-25,0.4,0.3,-0.4),line5:topdeco(5,2.4,2.5,25,0.4,0.3,0.4),line6:topdeco(6,-1.2,-1,20,0.4,0.3,-1),line7:topdeco(7,6.5,11.5,20,0.4,0.3,1),line8:topdeco(8,6.4,16.5,25,0.4,0.3,-0.4),line9:topdeco(9,2.4,-22.5,-25,0.4,0.3,0.4),line10:topdeco(10,-1.2,-19,-20,0.4,0.3,-1),power1:power(11,5,5,14,1,0.8,0,0),power2:power(12,5,-8.5,14.1,1,1.5,0,-2),power3:power(13,5,30,12.3,1,0.8,0.8,0),power4:power(14,2.5,42,10,1,1.2,1.7,2.5),hub1:powerhub(1,5,0,12.9,0.9),hub2:powerhub(2,5,35,11.1,0.9),hub3:powerhub(3,0,50,8,2)});i=k=0;while(k<5){model.bodies[\'firsthalf\'+i]={section_segments:[45,135,225,315],vertical:true,offset:{x:0,y:0,z:i*11-18+gunypos},position:{x:[0,0,9,9,0,0].add(gunxpos),y:[-10.5,-10.5,-5,5,10.5,10.5],z:[6,6,4,2,0,0]},width:[0,1,1,1,1,0],height:[0,1,1,1,1,0],texture:[63]};i=++k}j=l=0;while(l<5){model.bodies[\'secondhalf\'+j]={section_segments:[45,135,225,315],vertical:true,offset:{x:0,y:0,z:j*11-13+gunypos},position:{x:[0,0,-9,-9,0,0].add(gunxpos),y:[-10.5,-10.5,-5,5,10.5,10.5],z:[0,0,2,4,6,6]},width:[0,1,1,1,1,0],height:[0,1,1,1,1,0],texture:[63]};j=++l}return model}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.449,4.462,3.866,5.925,6.35,6.578,5.866,5.113,4.621,4.277,4.115,3.923,3.992,4.43,4.551,4.727,4.871,4.59,4.38,3.762,2.865,3.078,3.705,4.528,4.52,4.449,4.52,4.528,3.705,5.14,5.389,5.354,5.145,5.025,4.875,4.764,4.695,4.683,4.683,4.695,4.764,4.875,5.025,5.145,5.354,5.389,5.14,3.296,3.866,4.462],"lasers":[{"x":3.108,"y":-5.254,"z":0.518,"angle":0,"damage":[7,10],"rate":10,"speed":[200,250],"number":1,"spread":0,"error":2,"recoil":15},{"x":3.108,"y":-5.254,"z":0.518,"angle":0,"damage":[7,10],"rate":9.9,"speed":[200,250],"number":1,"spread":0,"error":2,"recoil":15},{"x":3.108,"y":-5.254,"z":0.518,"angle":0,"damage":[7,10],"rate":9.8,"speed":[200,250],"number":1,"spread":0,"error":2,"recoil":15}],"radius":6.578}')),JSON.stringify(r)})();
s.Negator_608 = (function(){var r=Function('return(function(){var model;return model={name:\'Negator\',level:6,model:8,size:1.8,specs:{shield:{capacity:[275,340],reload:[5,7]},generator:{capacity:[150,350],reload:[30,50]},ship:{mass:225,speed:[90,110],rotation:[70,75],acceleration:[90,100]}},bodies:{main:{section_segments:8,offset:{x:0,y:-30,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-115,-110,-100,-90,-60,-30,45,90,100,120,115],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,25,35,35,35,30,20,0],height:[0,5,10,15,15,20,20,20,20,15,0],texture:[16.9,4,10,13,63,2,3,4,13,17],propeller:true},sides:{section_segments:8,offset:{x:40,y:30,z:0},position:{x:[-5,-5,-5,-3,0,0,0,0,0,0,0,0,0],y:[-80,-75,-70,-50,-40,-10,5,50,60,70,65],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,10,10,10,10,10,10,10,10,10,0],texture:[4,4,1,1,10,2,3,4,63,17],propeller:true},sides1:{section_segments:8,offset:{x:65,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,5,50,60,70,65],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,12,10,0],height:[0,5,10,15,15,15,15,15,15,10,0],texture:[17,4,13,3,1,63,2,1,13,17],propeller:true,laser:{damage:[20,35],rate:3,type:2,speed:[160,180],number:1,angle:0,recoil:50}},sides2:{section_segments:8,offset:{x:25,y:40,z:17},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,5,50,60,70,65],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,5,10,15,15,15,15,15,15,10,0],texture:[17,13,10,1,2,3,4,13,4,17],propeller:true,laser:{damage:[20,35],rate:3,type:2,speed:[160,180],number:1,angle:0,recoil:50}},sides3:{section_segments:8,offset:{x:50,y:70,z:17},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,0,20,40,50,45],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,5,10,15,15,15,15,15,15,10,0],texture:[17,13,63,13,2,1,1,3,63,17],propeller:true,laser:{damage:[20,35],rate:3,type:2,speed:[160,180],number:1,angle:0,recoil:50}},middle:{section_segments:8,offset:{x:0,y:30,z:25},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,0,20,40,50,45],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,0,5,15,15,15,15,15,15,10,0],texture:[17,4,3,2,10,2,3,63,4,17],propeller:true},side:{section_segments:4,offset:{x:27,y:-20,z:0},position:{x:[-7,0,0,0,0,0,0],y:[-40,-15,0,0,0,0,0],z:[0,0,0,0,0,0,0]},width:[3,3,3,3,3,3,3],height:[3,3,3,3,3,3,3],texture:[0,18,2,3,4,17]},cockpit:{section_segments:8,offset:{x:0,y:-110,z:15},position:{x:[0,0,0,0,0,0,0],y:[-10,0,20,50,80,100,120],z:[0,0,0,0,0,0,0]},width:[0,10,15,17,17,15,0],height:[0,5,10,10,10,10,0],texture:[4,9,3,63,2,3]}},wings:{main:{doubleside:true,offset:{x:20,y:45,z:-5},length:[80,10,10,0],width:[70,55,50,40],angle:[0,0,0,0],position:[0,-30,-40,-60,0],texture:[10,63,1,0],bump:{position:20,size:5}},main1:{doubleside:true,offset:{x:50,y:70,z:20},length:[40,10,10,0],width:[60,50,40,30],angle:[10,15,20,0],position:[0,10,20,30,0],texture:[2,63,63,0],bump:{position:20,size:5}},main2:{doubleside:true,offset:{x:20,y:70,z:30},length:[20,10,10,0],width:[40,30,20,10],angle:[50,30,0,0],position:[0,10,20,30,0],texture:[63,4,3,0],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.22,4.805,3.838,3.158,2.722,3.504,3.693,3.693,3.482,3.285,4.5,4.458,4.354,4.324,4.213,4.112,3.939,4.508,5.355,5.691,4.88,4.83,4.774,4.323,4.031,3.246,4.031,4.323,4.774,4.83,4.88,5.691,5.355,4.508,3.939,4.112,4.213,4.324,4.354,4.458,4.5,3.285,3.482,3.693,3.693,3.504,2.722,3.158,3.838,4.805],"lasers":[{"x":2.34,"y":-2.7,"z":0,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":-2.34,"y":-2.7,"z":0,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":0.9,"y":-1.26,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.9,"y":-1.26,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.8,"y":-0.18,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":-1.8,"y":-0.18,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50}],"radius":5.691}')),JSON.stringify(r)})();

//Tier 7
s.Preculsor_701 = (function(){var r=Function('return(function(){var model;return model={name:\'Preculsor\',designer:\'Megalodon\',level:7,model:1,size:1.9,specs:{shield:{capacity:[350,350],reload:[6,6]},generator:{capacity:[300,300],reload:[50,50]},ship:{mass:300,speed:[100,100],rotation:[90,90],acceleration:[130,130]}},bodies:{main:{section_segments:9,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0],y:[-150,-140,-100,-50,50,120,90],z:[0,0,0,0,0,-2,-2]},width:[0,6,17,24,24,20,0],height:[0,5,14,18,20,14,0],texture:[4,4,3,18,18,17],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-70,z:14},position:{x:[0,0,0,0,0,0,0],y:[-10,0,20,35,100],z:[0,0,0,0,0]},width:[0,7,10,10,0],height:[0,5,10,12,0],texture:[9]},cannons:{section_segments:8,offset:{x:35,y:-120,z:0},position:{x:[0,0,0,0,0,0,0,0,0,-20,-20,-20],y:[35,30,54,57,92,94,120,122,163,185,185],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,3,3,4,4,3,3,5,5,5,0],height:[0,3,3,4,4,3,3,5,5,5,0],texture:[17,13,17,18,17,13,17,8,31,17],laser:{damage:[5,10],rate:5,type:1,speed:[150,180],number:7,recoil:10,error:5},propeller:false},propulsors:{section_segments:8,offset:{x:25,y:55,z:-5},position:{x:[-8,-2,-2,0,0,0,0,0,0,0,0,0,0],y:[-20,-10,0,30,50,30],z:[5,5,5,0,0,0,0,0,0,0,0,0,0]},width:[0,5,9,10,8,0],height:[0,4,6,10,8,0],texture:[4,31,18,13,17],propeller:true},propulsors2:{section_segments:8,offset:{x:15,y:65,z:-20},position:{x:[-8,-2,-2,0,0,0,0,0,0,0,0,0,0],y:[-20,-10,0,30,50,30],z:[5,5,5,0,0,0,0,0,0,0,0,0,0]},width:[0,5,9,10,8,0],height:[0,4,6,10,8,0],texture:[4,31,18,13,17],propeller:true},Propeller:{section_segments:9,offset:{x:60,y:10,z:0},position:{x:[0,0,0,0,0,0,0],y:[-53,-46,-23,2,28,55,30],z:[0,0,0,0,0,0,0]},width:[0,5,11,8,11,8,0],height:[0,5,10,8,10,5,0],texture:[6,2,3,4,31,17],propeller:true},topdetail:{section_segments:8,offset:{x:0,y:0,z:15},position:{x:[0,0,0,0,0,0],y:[-40,-30,0,10,60,70],z:[0,0,0,0,0,0]},width:[10,10,10,10,10,0],height:[5,5,5,5,5,0],texture:[4,10,1,10,4]}},wings:{main:{offset:{x:60,y:10,z:2},length:[30,0],width:[90,40,20],angle:[-10,10],position:[0,20,20],doubleside:true,texture:[18],bump:{position:30,size:5}},winglets:{length:[25],width:[30,15,20],angle:[0,0],position:[-50,-70,-65],bump:{position:0,size:15},texture:63,doubleside:true,offset:{x:0,y:-40,z:2}},side:{doubleside:true,offset:{x:85,y:47,z:-14},length:[10,5,10],width:[25,50,50,25],angle:[60,90,120,90],position:[0,-20,-20,0],texture:[63],bump:{position:0,size:5}},top:{doubleside:true,offset:{x:10,y:75,z:8},length:[30],width:[50,20],angle:[50],position:[0,20],texture:[63],bump:{position:10,size:10}},soutient:{doubleside:true,offset:{x:0,y:-25,z:-10},length:[40,20],width:[15,15,10],angle:[0,30],position:[0,0,0],texture:[8,63],bump:{position:50,size:2}},soutient1:{doubleside:true,offset:{x:0,y:0,z:-10},length:[40,20],width:[15,15,10],angle:[0,30],position:[0,0,0],texture:[8,63],bump:{position:50,size:2}},soutient2:{doubleside:true,offset:{x:0,y:25,z:-10},length:[40,20],width:[15,15,10],angle:[0,30],position:[0,0,0],texture:[8,63],bump:{position:50,size:2}},soutient3:{doubleside:true,offset:{x:0,y:50,z:-10},length:[40,20],width:[15,15,10],angle:[0,30],position:[0,0,0],texture:[8,63],bump:{position:50,size:2}},soutienttop:{doubleside:true,offset:{x:0,y:-25,z:10},length:[40,20],width:[15,15,10],angle:[0,-30],position:[0,0,0],texture:[8,63],bump:{position:50,size:2}},soutient1top:{doubleside:true,offset:{x:0,y:0,z:10},length:[40,20],width:[15,15,10],angle:[0,-30],position:[0,0,0],texture:[8,63],bump:{position:50,size:2}},soutient2top:{doubleside:true,offset:{x:0,y:25,z:10},length:[40,20],width:[15,15,10],angle:[0,-30],position:[0,0,0],texture:[8,63],bump:{position:50,size:2}},soutient3top:{doubleside:true,offset:{x:0,y:50,z:10},length:[40,20],width:[15,15,10],angle:[0,-30],position:[0,0,0],texture:[8,63],bump:{position:50,size:2}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.7,4.996,4.565,3.712,3.388,2.759,2.318,2.06,2.821,2.817,2.784,2.932,3.144,3.481,3.614,3.743,3.911,3.95,3.54,3.571,3.205,3.003,4.084,4.457,4.621,4.569,4.621,4.457,4.084,3.003,3.205,3.571,3.54,3.95,3.911,3.743,3.614,3.481,3.144,2.932,2.784,2.817,2.821,2.06,2.318,2.759,3.388,3.712,4.565,4.996],"lasers":[{"x":1.33,"y":-3.42,"z":0,"angle":0,"damage":[5,10],"rate":5,"type":1,"speed":[150,180],"number":7,"spread":0,"error":5,"recoil":10},{"x":-1.33,"y":-3.42,"z":0,"angle":0,"damage":[5,10],"rate":5,"type":1,"speed":[150,180],"number":7,"spread":0,"error":5,"recoil":10}],"radius":5.7}')),JSON.stringify(r)})();
s.Mewin_702 = (function(){var r=Function('return(function(){var model;return model={name:\'Mewin\',level:7,model:2,size:0.8,specs:{shield:{capacity:[200,200],reload:[5,7]},generator:{capacity:[200,200],reload:[65,65]},ship:{mass:180,speed:[150,150],rotation:[80,80],acceleration:[120,120]}},bodies:{main:{section_segments:12,offset:{x:85,y:20,z:-10},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-120,-130,-90,-70,-60,-40,-25,40,50,100,90],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,20,25,25,25,30,30,30,30,20,0],height:[0,20,25,25,25,30,30,30,30,20,0],texture:[17,10,2,2,3,3,4,4,63,17],propeller:true},main1:{section_segments:20,offset:{x:0,y:10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-250,-250,-160,-90,-60,10,30,40,60,100,90],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,20,45,50,50,50,50,50,50,40,0],height:[0,20,50,50,50,50,50,50,50,40,0],texture:[1,2,10,2,3,3,4,4,13,17],propeller:true,laser:{damage:[130,130],rate:1,type:1,speed:[180,180],number:1,error:0,recoil:150}},cockpit:{section_segments:8,offset:{x:0,y:-30,z:50},position:{x:[0,0,0,0,0,0,0,0,0],y:[-90,-80,0,20,40,80,90],z:[0,0,0,0,0,0,0,0,0]},width:[0,20,25,25,25,20,0],height:[0,15,15,15,15,15,0],texture:[4,9,4,3,2,2]},cannon2:{section_segments:12,offset:{x:85,y:-95,z:-10},position:{x:[0,0,0,0],y:[-50,-50,-20,0],z:[0,0,0,0]},width:[0,10,15,15],height:[0,10,15,15],texture:[17,4,63,10],laser:{damage:[10,10],rate:4,type:1,speed:[150,150],number:1,error:0}},barr1:{section_segments:10,offset:{x:50,y:-10,z:5},position:{x:[-10,-5,0,0,0,-5,-15,-15],y:[-160,-120,-80,-20,40,90,120],z:[0,0,0,0,0,0,0,0]},width:[0,20,20,20,20,20,0],height:[0,20,20,20,20,20,0],texture:[4,3,2,63,10,4,0]}},wings:{main:{doubleside:true,offset:{x:15,y:-30,z:-10},length:[20,20,70,30],width:[150,150,150,120,90],angle:[0,-10,-10,-10],position:[0,10,0,60,100],texture:[0,11,11,63],bump:{position:35,size:5}},main1:{doubleside:true,offset:{x:20,y:-190,z:0},length:[40,0],width:[50,40],angle:[-15,-15],position:[0,-30,80],texture:63,bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.848,3.853,3.953,2.579,2.748,2.774,2.489,2.331,2.151,2.008,2.02,2.109,2.233,2.412,2.527,2.633,2.791,3.022,3.065,2.551,2.492,2.274,1.873,1.85,1.792,1.763,1.792,1.85,1.873,2.274,2.492,2.551,3.065,3.022,2.791,2.633,2.527,2.412,2.233,2.109,2.02,2.008,2.151,2.331,2.489,2.774,2.748,2.579,3.953,3.853],"lasers":[{"x":0,"y":-3.84,"z":0,"angle":0,"damage":[130,130],"rate":1,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":150},{"x":1.36,"y":-2.32,"z":-0.16,"angle":0,"damage":[10,10],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.36,"y":-2.32,"z":-0.16,"angle":0,"damage":[10,10],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.953}')),JSON.stringify(r)})();
s.Pseudo_Vanguard_703 = (function(){var r=Function('return(function(){var model;return model={name:\'Pseudo-Vanguard\',level:7,model:3,size:1.5,specs:{shield:{capacity:[500,500],reload:[4,4]},generator:{capacity:[500,500],reload:[125,125]},ship:{mass:350,speed:[70,70],rotation:[60,60],acceleration:[110,110]}},bodies:{main:{section_segments:15,offset:{x:0,y:50,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[0,-10,20,30,50,80,110,95],z:[0,0,0,0,0,0,0,0]},width:[0,65,75,75,75,60,40,0],height:[0,40,42,42,40,34,23,0],texture:[63,4,63,4,3,4,17],propeller:true},big_main:{section_segments:10,offset:{x:21,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[0,0,20,30,50,80,95,95],z:[0,0,0,0,0,0,0,0]},width:[0,20,24,35,37,34,23,0],height:[0,22,24,35,37,34,23,0],texture:[18,8,63,18,3,2,3]},cannons:{section_segments:8,offset:{x:20,y:-180,z:8},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[5,0,10,20,60,60,85,100,180],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,10,10,5,5,10,10],height:[0,5,5,10,10,5,5,10,10],texture:[17,13,63,4,4,63,8,13],propeller:false,laser:{damage:[30,30],rate:2,type:2,speed:[130,130],recoil:25,number:1,error:0}},cannons1:{section_segments:8,offset:{x:25,y:-180,z:-8},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[5,0,10,20,60,60,85,100,180],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,10,10,5,5,10,10],height:[0,5,5,10,10,5,5,10,10],texture:[17,13,63,4,4,63,8,13],propeller:false,laser:{damage:[30,30],rate:2,type:2,speed:[130,130],recoil:25,number:1,error:0}},cockpit:{section_segments:12,offset:{x:0,y:100,z:37},position:{x:[0,0,0,0],y:[-25,-20,20,25],z:[5,0,0,-7]},width:[0,35,35,0],height:[0,10,10,5],texture:[4,9,4],angle:90},shield:{section_segments:12,offset:{x:45,y:80,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[0,-30,-20,15,25,30,35,35],z:[0,0,0,0,0,0,0,0]},width:[0,60,65,65,65,65,50,0],height:[0,2,20,20,20,20,10,0],texture:[4,4,18,16,4,2,13],propeller:0,angle:90},wing:{section_segments:12,offset:{x:80,y:80,z:-6},position:{x:[0,0,0,-20,-40,-70,-130,0],y:[0,-30,-20,15,60,80,120,0],z:[0,0,0,0,0,0,0,0]},width:[0,50,50,55,55,55,40,0],height:[0,2,15,15,15,15,5,0],texture:[4,4,4,4,63,2,13],propeller:0,angle:90},wing_detail:{section_segments:8,offset:{x:80,y:80,z:0},position:{x:[0,0,0,-20,-40,-70,-120,0],y:[0,-30,-20,15,60,80,110,0],z:[0,0,0,0,0,0,0,0]},width:[0,20,20,20,20,20,10,0],height:[0,2,15,15,15,15,5,0],texture:[63],propeller:0,angle:90},reactors:{section_segments:8,offset:{x:70,y:50,z:-30},position:{x:[0,0,0,0,0,0,0,0],y:[-65,-70,-65,-50,100,120,140,0],z:[0,0,0,0,0,0,0,0]},width:[0,10,15,20,20,20,10,0],height:[0,10,15,20,20,20,10,0],texture:[17,13,18,63,13,4,17],propeller:true,angle:0,laser:{damage:[20,20],rate:5,type:2,speed:[150,150],recoil:0,number:1,error:0}}},wings:{winglets:{doubleside:true,offset:{x:25,y:-152,z:-5},length:[10,15,0],width:[25,30,20],angle:[0,-10,-10],position:[0,0,20,20],texture:[8,63],bump:{position:20,size:10}},winglets1:{doubleside:true,offset:{x:20,y:-142,z:11},length:[10,15,0],width:[25,30,20],angle:[0,-10,-10],position:[0,0,20,20],texture:[8,63],bump:{position:20,size:10}},wing_detail:{doubleside:true,offset:{x:80,y:30,z:-30},length:[20,30,0],width:[60,60,30],angle:[-20,-20,-10],position:[0,20,50,30],texture:[63,63],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.812,5.474,5.305,4.599,2.445,1.941,1.631,1.439,1.287,1.198,2.413,2.611,2.699,2.743,3.182,3.695,5.215,6.613,8.231,9.412,9.605,5.976,6.185,5.993,4.886,4.809,4.886,5.993,6.185,5.976,9.605,9.412,8.231,6.613,5.215,3.695,3.182,2.743,2.7,2.611,2.413,1.198,1.287,1.439,1.631,1.941,2.445,4.599,5.305,5.474],"lasers":[{"x":0.6,"y":-5.4,"z":0.24,"angle":0,"damage":[30,30],"rate":2,"type":2,"speed":[130,130],"number":1,"spread":0,"error":0,"recoil":25},{"x":-0.6,"y":-5.4,"z":0.24,"angle":0,"damage":[30,30],"rate":2,"type":2,"speed":[130,130],"number":1,"spread":0,"error":0,"recoil":25},{"x":0.75,"y":-5.4,"z":-0.24,"angle":0,"damage":[30,30],"rate":2,"type":2,"speed":[130,130],"number":1,"spread":0,"error":0,"recoil":25},{"x":-0.75,"y":-5.4,"z":-0.24,"angle":0,"damage":[30,30],"rate":2,"type":2,"speed":[130,130],"number":1,"spread":0,"error":0,"recoil":25},{"x":2.1,"y":-0.6,"z":-0.9,"angle":0,"damage":[20,20],"rate":5,"type":2,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.1,"y":-0.6,"z":-0.9,"angle":0,"damage":[20,20],"rate":5,"type":2,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":9.605}')),JSON.stringify(r)})(); 
s.Dominus_704 = (function(){var r=Function('return(function(){var arrow,featherOne,flatBars,key,mainYpos,model,powerhub,ref,ring,value;Array.prototype.mult=function(m){return this.map(function(v){return v*m})};Array.prototype.add=function(m){return this.map(function(v){return v+m})};ref=[];for(key in ref){key=key;key=key;value=ref[key];delete Array.prototype[key];Object.defineProperty(Array.prototype,key,{value:value,configurable:true,enumerable:false})}powerhub=function(n,xp,yp,zp,size){model.bodies[\'centerhubpiece\'+n]={section_segments:20,vertical:true,offset:{x:xp,y:zp,z:-yp},position:{x:[0,0,0,0,0,0],y:[-1,0.3,1.3,1.2,1.6,1.7].mult(size+1),z:[0,0,0,0,0,0]},width:[2,2.6,2.8,2,0.8,0].mult(size),height:[2,2.6,2.7,2,0.8,0].mult(size),texture:[4,3,11,5,18]};model.bodies[\'partone\'+n]={section_segments:[45,135,225,315],angle:0,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'parttwo\'+n]={section_segments:[45,135,225,315],angle:60,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'partthree\'+n]={section_segments:[45,135,225,315],angle:120,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'partfour\'+n]={section_segments:[45,135,225,315],angle:180,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'partfive\'+n]={section_segments:[45,135,225,315],angle:240,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'partsix\'+n]={section_segments:[45,135,225,315],angle:300,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0],y:[-1,-1,1,1].add(1.15).mult(size).add(size/2),z:[0,0,-1,-1].mult(size*1.1).add(size*2.1+1.4)},width:[0,0.3,0.3,0].mult(size),height:[0,0,0.3,0].mult(size),texture:17};model.bodies[\'hexagonsone\'+n]={section_segments:[30,90,150,210,270,330],offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(0.3).add(size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]};model.bodies[\'hexagonstwo\'+n]={section_segments:[30,90,150,210,270,330],angle:-10,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2).add(size+0.3),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]};model.bodies[\'hexagonsthree\'+n]={section_segments:[30,90,150,210,270,330],angle:10,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2).add(-size-0.3),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]};model.bodies[\'hexagonsfour\'+n]={section_segments:[30,90,150,210,270,330],offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(-0.3).add(-size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]};model.bodies[\'hexagonsfive\'+n]={section_segments:[30,90,150,210,270,330],angle:10,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(-size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2).add(size+0.3),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]};return model.bodies[\'hexagonssix\'+n]={section_segments:[30,90,150,210,270,330],angle:-10,offset:{x:xp,y:yp,z:zp},position:{x:[0,0,0,0,0,0].add(-size*2),y:[-1,-1,-0.3,0.3,1,1].mult(size/2).add(-size-0.3),z:[0,0,0,0,0,0].add(0.3)},width:[0,3,3.2,3.2,3,0].mult(0.6).mult(size),height:[0,1.2,1.2,1.2,1.2,0].mult(size+1),texture:[3.9,3.9,16.9,3.9]}};ring=function(n,xx,yy,zz,wid,long,ang,tex){return model.bodies[\'ring\'+n]={section_segments:20,offset:{x:xx,y:yy,z:zz},position:{x:[0,0,0,0,0,0,0],y:[3,-3,-3,-1,1,3,3].mult(long),z:[0,0,0,0,0,0,0]},width:[16,16,18,20,20,18,16].mult(wid),height:[16,16,18,20,20,18,16].mult(wid),texture:tex,angle:ang}};arrow=function(n,xx,yy,zz,size,pipeLength,propeller,pipeTex,arrowTex,colorTex){model.bodies[\'pipe\'+n]={section_segments:8,offset:{x:0,y:yy,z:zz},position:{x:[0,0,0,0,0,0,0].add(xx),y:[0,0,3*pipeLength,5*pipeLength,8.25*pipeLength,10*pipeLength,10*pipeLength].mult(size),z:[0,0,0,0,0,0,0]},width:[0,5,5,5,5,4,0].mult(size),height:[0,5,5,5,5,4,0].mult(size),texture:pipeTex,propeller:propeller};model.bodies[\'arrow\'+n]={section_segments:[0,45,135,180,225,315],offset:{x:0,y:yy,z:zz},position:{x:[0,0,0,0,0].add(xx),y:[-5,-5,3,5,5].add(-5).mult(size),z:[0.3,0.3,0,0,0]},width:[0,0.3,5,5,0].mult(size).mult(1),height:[0,5,5,5,0].mult(size).mult(1),texture:arrowTex};return model.bodies[\'color\'+n]={section_segments:[0,45,135,180,225,315],offset:{x:0,y:yy,z:zz},position:{x:[0,0,0,0,0].add(xx),y:[-5.1,-5.1,3,5,5].add(-5).mult(size),z:[0.3,0.3,0,0,0]},width:[0,0.3,5.1,5.1,0].mult(size).mult(1),height:[0,4.9,4.9,4.9,0].mult(size).mult(1),texture:colorTex}};flatBars=function(n,xx,yy,zz,length,width,tilt,angle,texture){return model.bodies[\'flat\'+n]={section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],offset:{x:xx,y:yy,z:zz},position:{x:[0,0,0,0],y:[0,0,3,3].mult(length),z:[0,0,tilt,tilt]},width:[0,1,1,0].mult(width),height:[0,1,1,0],angle:angle,texture:texture}};featherOne=function(n,xx,yy,zz,size,angle){model.bodies[\'main\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz},position:{x:[1.75,1,0,0].mult(size),y:[-21,-20,0,0].mult(size),z:[0,0,0,0]},width:[0,1,3,0].mult(size),height:[1,1,1,0].mult(size),angle:angle,texture:2};model.bodies[\'mainTwo\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz+0.1},position:{x:[2.3,1,0,0,0].add(-2).mult(size),y:[-20,-18,-8,0,0].mult(size),z:[0,0,0,0,0]},width:[0,1.5,2,1.5,0].mult(size),height:[1,1,1,1,0].mult(size),texture:63,angle:angle};model.bodies[\'smallCut\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz+0.1},position:{x:[0.69,0,0.1,0.79].add(1.3).mult(size),y:[-11,-9,-5,-3].mult(size).add(size*-1),z:[0,0,0,0]},width:[0,1,1,0].mult(size),height:[1,1,1,1].mult(size),angle:angle,texture:63};model.bodies[\'colorBottom\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz+0.1},position:{x:[0,0,0.4,0.4].add(-2).mult(size),y:[-5,-5,-3,-3].mult(size).add(size*5),z:[0,0,0,0]},width:[0,1.5,0.6,0].mult(size),height:[1,1,1,1].mult(size),angle:angle,texture:63};return model.bodies[\'greyBottom\'+n]={section_segments:[45,135,225,315],offset:{x:xx,y:yy,z:zz},position:{x:[0,0,-0.4,-0.4].mult(size),y:[-5,-5,-3,-3].mult(size).add(size*5),z:[0,0,0,0]},width:[0,3,1,0].mult(size),height:[1,1,1,1].mult(size),angle:angle,texture:2}};mainYpos=0;model={name:\'Dominus\',level:7,model:4,size:5.5,specs:{shield:{capacity:[520,520],reload:[10,10]},generator:{capacity:[300,300],reload:[65,65]},ship:{mass:400,speed:[105,105],rotation:[70,70],acceleration:[130,130]}},bodies:{main:{section_segments:12,offset:{x:0,y:0+mainYpos,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-63,-60,-50,-40,-40,-25,-10,-10,-2,15,25,35,40,30],z:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,4,7,8,10,11,11,13,13,13,13,13,11,0],height:[0,3,6,7,9,10,10,12,12,12,12,12,10,0].mult(0.8),texture:[3,3,3,17,63,15.1,17,3,1,3,4,13,17],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-50+mainYpos,z:4},position:{x:[0,0,0,0,0,0],y:[-10,-10,-3,4,10,10],z:[-3,-3,-1.7,-0.5,0,0]},width:[0,2,3.6,3.6,3,0],height:[0,2,3,3,2,0],texture:[9,9,9,7]},flatEllipse1:{section_segments:20,offset:{x:0,y:5,z:20-mainYpos},position:{x:[0,0,0,0,0],y:[0,3,4,3.5,3.4],z:[0,0,0,0,0]},width:[5,5,4,1,0],height:[5,5,4,1,0],texture:[4,2,18,17],vertical:true},flatEllipse2:{section_segments:20,offset:{x:0,y:5,z:30-mainYpos},position:{x:[0,0,0,0,0],y:[0,3,4,3.5,3.4],z:[0,0,0,0,0]},width:[5,5,4,1,0],height:[5,5,4,1,0],texture:[4,2,18,17],vertical:true},backPower1:{section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],offset:{x:0,y:7,z:-20-mainYpos},position:{x:[0,0,0,0,0],y:[0,3,4,3.5,3.4],z:[0,0,0,0,0]},width:[5,5,4,1,0],height:[5,5,4,1,0],texture:[4,2,18,17],vertical:true},backPower2:{section_segments:[40,45,50,130,135,140,220,225,230,310,315,320],offset:{x:0,y:7,z:-30-mainYpos},position:{x:[0,0,0,0,0],y:[0,3,4,3.5,3.4],z:[0,0,0,0,0]},width:[5,5,4,1,0],height:[5,5,4,1,0],texture:[4,2,18,17],vertical:true},cockpitBorder:{section_segments:8,offset:{x:3,y:-50+mainYpos,z:5},position:{x:[-1.4,-1.4,0,0,0,0],y:[-10,-10,-3,4,10,10],z:[-3.6,-3.6,-1.7,-0.5,-0.4,0]},width:[0,1,1,1,1,0],height:[0,1,1,1,1,0],texture:[4]},guns:{section_segments:8,offset:{x:20,y:-42.5+mainYpos,z:12},position:{x:[0,0,0,0],y:[0,-2,0,10],z:[0,0,0,0]},width:[0,3,4,4].mult(0.5),height:[0,3,4,4].mult(0.5),texture:[17,2,8],laser:{damage:[30,30],speed:[180,180],error:0,number:1,rate:5,angle:0,recoil:70}},bar1:{section_segments:8,offset:{x:10,y:-7.5+mainYpos,z:11},position:{x:[0,0,0,0],y:[0,0,41,41],z:[0,0,0,0]},width:[0,3,3,0].mult(0.2),height:[0,3,3,0].mult(0.2),texture:[13]},bar2:{section_segments:8,offset:{x:12,y:-7.5+mainYpos,z:12.5},position:{x:[0,0,0,0],y:[0,0,41,41],z:[0,0,0,0]},width:[0,3,3,0].mult(0.2),height:[0,3,3,0].mult(0.2),texture:[13]},bar3:{section_segments:8,offset:{x:17,y:-7.5+mainYpos,z:4},position:{x:[0,0,0,0],y:[0,0,41,41],z:[0,0,0,0]},width:[0,3,3,0].mult(0.2),height:[0,3,3,0].mult(0.2),texture:[13]},bar4:{section_segments:8,offset:{x:15,y:-7.5+mainYpos,z:3},position:{x:[0,0,0,0],y:[0,0,41,41],z:[0,0,0,0]},width:[0,3,3,0].mult(0.2),height:[0,3,3,0].mult(0.2),texture:[13]},bar5:{section_segments:8,offset:{x:12.3,y:-7.5+mainYpos,z:3.3},position:{x:[0,0,0,0],y:[0,0,41,41],z:[0,0,0,0]},width:[0,3,3,0].mult(0.2),height:[0,3,3,0].mult(0.2),texture:[13]}}};({reactor:powerhub(1,0,5.8+mainYpos,7,2.7),ring1:ring(1,14,32+mainYpos,8,0.35,0.8,0,[3,3,3,17,2]),ring2:ring(2,14,25+mainYpos,8,0.35,0.8,0,[3,3,3,17,2]),ring3:ring(3,14,18+mainYpos,8,0.35,0.8,0,[3,3,3,17,2]),ring4:ring(4,14,-6+mainYpos,8,0.35,0.8,0,[3,3,3,17,2]),ring5:ring(5,23,-7.5+mainYpos,15,0.14,0.3,0,[3,3,3,17,2]),ring6:ring(6,23,-4.75+mainYpos,15,0.14,0.3,0,[3,3,3,17,2]),ring7:ring(7,23,-2+mainYpos,15,0.14,0.3,0,[3,3,3,17,2]),ring8:ring(8,23,1+mainYpos,15,0.14,0.3,0,[3,3,3,17,2]),ring9:ring(9,20,16.5+mainYpos,17,0.1,0.4,0,[3,3,3,17,2]),ring10:ring(10,20,24.75+mainYpos,17,0.1,0.4,0,[3,3,3,17,2]),ring11:ring(11,20,20.5+mainYpos,17,0.1,0.4,0,[3,3,3,17,2]),ring12:ring(12,0,-25+mainYpos,6,0.22,0.2,0,[3,3,3,17,2]),arrow1:arrow(1,20,-10+mainYpos,12,1.2,3.9,true,[17,10,13,10,63,3],3,63),arrow2:arrow(2,20,-25+mainYpos,12,0.86,3.9,false,[17,4],3,63),arrow3:arrow(3,20,-35+mainYpos,12,0.6,3.9,false,[17,8,3],3,63),arrow11:arrow(11,-20,-10+mainYpos,12,1.2,3.9,true,[17,10,13,10,63,3],3,63),arrow21:arrow(21,-20,-25+mainYpos,12,0.86,3.9,false,[17,4],3,63),arrow31:arrow(31,-20,-35+mainYpos,12,0.6,3.9,false,[17,8,3],3,63),connector1:flatBars(1,0,-38.5+mainYpos,7,1.3,1.5,1,0,[3,8,3]),connector2:flatBars(2,3.1,-37+mainYpos,7,0.9,1.1,1,-18,[3,8,3]),connector3:flatBars(3,0,-11.5+mainYpos,8,1.3,1.5,0.1,180,[3,8,3]),connector4:flatBars(4,3.1,-13+mainYpos,8,0.9,1.1,0,-162,[3,8,3]),connector5:flatBars(5,4,-29.5+mainYpos,7,3,1.5,0,0,[3,8,3]),connector6:flatBars(6,1.6,22.5+mainYpos,9,1.5,1.5,0,0,[3,8,3]),connector7:flatBars(7,0,-5.5+mainYpos,9,1.3,1.5,1.9,0,[3,8,3]),spike1:featherOne(1,4.5,27+mainYpos,9,0.3,-181),spike2:featherOne(2,-4.5,23+mainYpos,9,0.3,-1),spike3:featherOne(3,-4.5,0+mainYpos,9,0.3,33),spike4:featherOne(4,-7,-7.5+mainYpos,9,0.4,-130)});return model}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[6.93,6.63,4.614,5.41,5.436,4.607,3.968,3.664,3.304,3.049,3.064,2.952,2.882,2.882,2.952,3.073,3.257,3.534,3.919,4.425,4.881,4.793,4.474,4.563,4.479,4.408,4.479,4.563,4.474,4.793,4.881,4.425,3.919,3.534,3.257,3.073,2.952,2.882,2.882,2.952,3.064,3.049,3.304,3.664,3.968,4.607,5.436,5.41,4.614,6.63],"lasers":[{"x":2.2,"y":-4.895,"z":1.32,"angle":0,"damage":[30,30],"rate":5,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":70},{"x":-2.2,"y":-4.895,"z":1.32,"angle":0,"damage":[30,30],"rate":5,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":70}],"radius":6.93}')),JSON.stringify(r)})();

s.Fly_791 = (function(){var r=Function('return(function(){var model;return model={name:\'Fly\',level:7.9,model:1,size:1.05,specs:{shield:{capacity:[700,700],reload:[1000,1000]},generator:{capacity:[9999,999],reload:[10000,10000]},ship:{mass:999,speed:[150,150],rotation:[150,150],acceleration:[150,150]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-65,-60,-50,-20,10,30,55,75,60],z:[0,0,0,0,0,0,0,0,0]},width:[0,8,10,30,25,30,18,15,0],height:[0,6,8,12,20,20,18,15,0],propeller:true,texture:[4,63,10,1,1,1,12,17]},cockpit:{section_segments:12,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0,0,0,0],y:[-15,0,20,30,60],z:[0,0,0,0,0]},width:[0,13,17,10,5],height:[0,18,25,18,5],propeller:false,texture:[7,9,9,4,4]},cannon:{section_segments:6,offset:{x:0,y:-15,z:-10},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,0,20,30],z:[0,0,0,0,0,20]},width:[0,5,8,11,7,0],height:[0,5,8,11,10,0],angle:0,laser:{damage:[1000,1000],rate:10,type:1,speed:[180,180],number:1,error:0},propeller:false,texture:[3,3,10,3]}},wings:{main:{length:[60,20],width:[100,50,40],angle:[-10,10],position:[0,20,10],doubleside:true,offset:{x:0,y:10,z:5},bump:{position:30,size:20},texture:[11,63]}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[1000,1000],"rate":10,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":1.856}')),JSON.stringify(r)})();

var ships = [];
for (let ship in s) ships.push(s[ship]); 





var map_name = [
  "Emanakalor 15", "Derababilii", "Teros 5", "Abadelio 6", "Turha", "Ghurad", "Molurtas 2",
  "Juni 5", "M-KDO 1", "Boop 9", "Blu T-5", "Pan-Da 3", "SUB 2 Wol-F-an"
];


var mod_vocabulary = [
      { text: "Alien", icon:"\u0030", key:"A" },
      { text: "Defend", icon:"\u0025", key:"D" },
      { text: "Yes", icon:"\u004c", key:"Y" },
      { text: "No", icon:"\u004d", key:"N" },

      { text: "Me", icon:"\u003f", key:"E" },
      { text: "You", icon:"\u003e", key:"O" },
      { text: "Follow", icon:"\u0050", key:"F" },
      { text: "GG", icon:"GG", key:"G" },
      
      { text: "Attack", icon:"\u0049", key:"W" },
      { text: "Asteroid", icon:"\u002f", key:"D" },
      { text: "Mine", icon:"\u0044", key:"M" },
      { text: "Coop", icon:"\u0031", key:"T" },
      
      { text: "Thanks", icon:"\u0041", key:"X" },
      { text: "Sorry", icon:"\u00a1", key:"S" },
      { text: "No problem", icon:"\u00a2", key:"P" },
      { text: "Hmm", icon:"\u004b", key:"Q" },
    ] ;



var crystal_value = [1.7,1.8, 1.9,2];
var crystal_drop = [1,1.1,1.2];
var map_id = [2739,2742,2817,2865,2900,2961];
var soundtrack = [
  "argon.mp3",
  "civilisation.mp3",
  "crystals.mp3",
  "procedurality.mp3",
  "red_mist.mp3",
  "warp_drive.pm3"
];

this.options = {
  // see documentation for options reference
  root_mode: " ",
  survival_level: 8,
  crystal_value: /*crystal_value[~~(Math.random()*crystal_value.length)]*/50,
  ships: ships,
  map_size: 110,
  reset_tree:true, 
  map_id: map_id[~~(Math.random()*map_id.length)],
  crystal_drop: 1.1,
  starting_ship: 800,
  starting_ship_maxed: true,
  boucing_lasers: false,
  map_name: map_name[~~(Math.random()*map_name.length)],
  vocabulary: mod_vocabulary,
  max_players: 60,
  release_crystal:true,
  weapons_store: false,
  friendly_colors:2,
  hues:[120,240],
  soundtrack: soundtrack[~~(Math.random()*soundtrack.length)],
};


var change_bar = function(ship, h, stroke) {
  bar.components[1].position = h;
  bar.components[1].stroke = stroke;
  ship.setUIComponent(bar);
};


var start = function(ship) {
  ship.set({x:0,y:0,idle: true});
};

var unblock = function(ship) {
  ship.set({idle: false,
      x: (Math.random() - 0.5) * game.options.map_size * 10,
      y: (Math.random() - 0.5) * game.options.map_size * 10,
      stats: 11111111
  });
};



var timer_change = function(ship, minuts) {
  timer.components[0].value = minuts;
  ship.setUIComponent(timer);
};





var actualize_scoreboard = function(ship, name, score, color) {
  scoreboard.components[2].value   = name;
  scoreboard.components[3].value = score;
  scoreboard.components[2].color = color;
  scoreboard.components[2].color = color;
  ship.setUIComponent(scoreboard);
};
var actualize_ur_team_or_not = function(ship, name, score, color) {
  scoreboard.components[5].color = color;
  ship.setUIComponent(scoreboard);
};

var gameover = function(ship) {
  if (ship.team === game.custom.winner) {
    ship.gameover({
      "Congratulations" : "You won!",
      "Your team" : ship.custom.team,
      "Your points" : ship.custom.points + " ( " + Math.trunc(Number((Number(ship.custom.points) * 100)/Number(game.custom.points_needed))) +"% )",
      "Deaths" : ship.custom.deaths,
      "Frags" : ship.custom.frags,
      "Killed bosses": ship.custom.boss_killed,
      "Killed aliens" : ship.custom.alien_killed
    });
    echo(ship.name + " won.")
  } else if (ship.team !== game.custom.winner){
    ship.gameover({
      "Well..." : "You lost!",
      "Your team" : ship.custom.team,
      "Your points" : ship.custom.points + " ( " + Math.trunc(Number((Number(ship.custom.points) * 100)/Number(game.custom.points_needed))) +"% )",
      "Deaths" : ship.custom.deaths,
      "Frags" : ship.custom.frags,
      "Killed bosses": ship.custom.boss_killed,
      "Killed aliens" : ship.custom.alien_killed
    });
    echo(ship.name + " lost.")
  }
};

game.modding.commands.t1 = function(req) {
  let number = req.replace('t1 ','');
  game.custom.team_score_1 += Number(number);
};
game.modding.commands.t2 = function(req) {
  let number = req.replace('t2 ','');
  game.custom.team_score_2 += Number(number);
};

game.modding.commands.ap = function(req) {
  let number = req.replace('ap ','');
  game.ships[0].custom.points += Number(number);
};



var lol = [11,42];
var kek = [0,1];









var team_assign = function(ship) {
  if (game.custom.number_player_t1 === game.custom.number_player_t2) {
    ship.set({team: kek[~~(Math.random()*kek.length)]});
    if (ship.team === 0) {
      ship.set({hue: 120});
      game.custom.number_player_t1++;
      ship.custom.team = "Orgono";
      ship.custom.ennemies = "Volgauf";
      ship.set({
        x: (Math.random() - 0.5) * game.options.map_size * 10,
        y: (Math.random() - 0.5) * game.options.map_size * 10,
      })
    } else {
      ship.set({hue: 240});
      game.custom.number_player_t2++;
      ship.custom.team = "Volgauf";
      ship.custom.ennemies = "Orgono";
      ship.set({
        x: (Math.random() - 0.5) * game.options.map_size * 10,
        y: (Math.random() - 0.5) * game.options.map_size * 10,
      })
    }
  }
  else if (game.custom.number_player_t1 < game.custom.number_player_t2) {
      ship.set({team: 0, hue: 120});
      game.custom.number_player_t1++;
      ship.custom.team = "Orgono";
      ship.custom.ennemies = "Volgauf";
       ship.set({
        x: (Math.random() - 0.5) * game.options.map_size * 10,
        y: (Math.random() - 0.5) * game.options.map_size * 10,
      })
  } 
  else if (game.custom.number_player_t1 > game.custom.number_player_t2) {
      ship.set({team: 1, hue: 240})
      game.custom.number_player_t2++;
      ship.custom.team = "Volgauf";
      ship.custom.ennemies = "Orgono";
      ship.set({
        x: (Math.random() - 0.5) * game.options.map_size * 10,
        y: (Math.random() - 0.5) * game.options.map_size * 10,
      })
  }
}


var boss_set = function(alien) {
    alien.set({
      shield: alien_shield,
      regen: 1,
      damage: 50,
      laser_speed: 90,
      rate: 1
    })
}

var change_score = function(ship) {
  if (ship.custom.points - Math.trunc((ship.type / 100) * 100) >= 0) {
    ship.custom.points = ship.custom.points - Math.trunc((ship.type / 100) * 100);
    actualizePLayerPoints(ship, ship.custom.points);
  }
  else if (ship.custom.points - Math.trunc((ship.type / 100)*100) < 0){
    ship.custom.points = 0;
    actualizePLayerPoints(ship, ship.custom.points);
  }
};

var score_set_points = function(ship) {
  ship.set({
    score: Number(ship.custom.points)
  })
}


game.custom.team_score_1 = 0;
game.custom.team_score_2 = 0;
game.custom.number_player_t1 = 0;
game.custom.number_player_t2 = 0;
  
  



var actualize_ennemies_and_friends = function(ship, a, b) {
  scoreboard.components[4].value = a;  
  scoreboard.components[5].value = b;
  ship.setUIComponent(scoreboard);
};

var actualize_scores = function(ship, orgono, volgauf) {
  scoreboard.components[2].value = orgono;
  scoreboard.components[3].value = volgauf;
  ship.setUIComponent(scoreboard);
};

var scoreboard = {
  id: "scoreboard",
  visible: true,
  components: [
    {type: "box",position:[0,0,100,10],stroke:"#119304", fill:"#119304",width:5},
    {type: "box",position:[0,50,100,10],stroke:"#3440B8", fill:"#3440B8",width:5},
    { type: "text",position: [0,0,100,10], value: " ",color:"#CDE"},
    { type: "text",position: [0,50,100,10], value: " ",color:"#CDE"},
    { type: "text",position: [0,20,100,20], value: " ",color:"#119304"},
    { type: "text",position: [0,55,100,50], value: " ",color:"#3440B8"},
  ]
};


var actualize_ship_gems = function(ship, value) {
  mining_button.components[2].value = value;
  ship.setUIComponent(mining_button);
};
var invulnerable = function(ship) {
  ship.set({invulnerable: 100});
}
var actualize_player_number = function(ship, orgonoPlayer, volgaufPlayer) {
  player_number.components[1].value = orgonoPlayer;
  player_number.components[2].value = volgaufPlayer;
  ship.setUIComponent(player_number);
};

var player_number = {
  id: "player_number",
  position: [82,40,15,15],
  visible: true,
  components: [
    { type: "text",position:[10,0,75,30],value:"Players:",color:"#CDE"},
    { type: "text",position:[10,25,75,30],value:" ",color:"#119304"},
    { type: "text",position:[10,50,75,30],value:" ",color:"#3440B8"},
  ]
};


var check_hue_team = function(ship) {
  if (ship.team === 0 && ship.hue === 240) {
    ship.set({hue: 120});
  }
  else if (ship.team === 1 && ship.hue === 120) {
    ship.set({hue: 240});
  }
  else if (ship.custom.team === "Volgauf" && ship.team === 0 ) {
    ship.set({team:1, hue: 240})
  }
  else if (ship.custom.team === "Orgono" && ship.team === 1 ) {
    ship.set({team:0,hue: 120})
  }
}

var crystals_set = function(ship) {
  ship.set({crystals: 700})
}


var internals_init = function() {
  if (game.custom.internals_init) {
    return;
  }
  const modding = game.modding;
  const internals = Object.values(modding).find(val => val && typeof val.shipDisconnected === "function");
  if (!internals) {
    modding.terminal.error("Error: modding internals object not found");
    return;
  }
  if (!internals.shipDisconnected.old) {
    function shipDisconnected({id} = {}) {
      if (modding.context.event && id) {
        var ship = game.findShip(id);
        if (ship) {
          modding.context.event({ name: "ship_disconnected", ship }, game);
        }
      }
      return shipDisconnected.old.apply(this, arguments);
    }
    shipDisconnected.old = internals.shipDisconnected;
    internals.shipDisconnected = shipDisconnected;
  }
  game.custom.internals_init = true;
};


var spawn = function(ship) {
  ship.set({hue: 60, team: 1});
};

this.tick = function(game) {
  this.tick = tick;
  internals_init();
  this.tick(game);
};
var shield_regen_gain = function(ship) {
  ship.set({shield:ship.shield + 1});
};
var shield_regen_lose = function(ship) {
  if (ship.shield >= 10) {
    ship.set({shield: ship.shield - 10});
  }
  else if (ship.shield < 10) {
    ship.set({shield: 0, crystals: 10 - ship.shield});
  }
};



var petrificationPowerPath = {
  id: "petrificationPowerPath",
  position: [30,30,10,20],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#35064E", fill:"#3B3B3B",width:5},
    { type: "text",position:[10,20,80,30],value:"💀",color:"#CDE"},
    { type: "text",position:[5,50,90,40],value:"Petrification",color:"#CDE"}
    ]
};
var learrnMorePetrificationPath = {
  id: "learrnMorePetrificationPath",
  position: [30,51,10,5],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#000000", fill:"#909090",width:5},
    { type: "text",align:"center",position:[5,35,90,40],value:"Learn more",color:"#CDE"}
    ]
};

var eletricPowerPath = {
  id: "eletricPowerPath",
  position: [45,30,10,20],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#E6D31B", fill:"#3B3B3B",width:5},
    { type: "text",position:[10,20,80,30],value:"⚡",color:"#CDE"},
    { type: "text",position:[5,50,90,40],value:"Eletricity",color:"#CDE"}
    ]
};
var learnMoreElectricityPath = {
  id: "learnMoreElectricityPath",
  position: [45,51,10,5],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#000000", fill:"#909090",width:5},
    { type: "text",align:"center",position:[5,35,90,40],value:"Learn more",color:"#CDE"}
    ]
};
var teleportationPowerPath = {
  id: "teleportationPowerPath",
  position: [60,30,10,20],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#1B5FE6", fill:"#3B3B3B",width:5},
    { type: "text",position:[10,20,80,30],value:"🌀",color:"#CDE"},
    { type: "text",position:[5,50,90,40],value:"Teleportation",color:"#CDE"}
    ]
};
var leanMoreTeleportationPath = {
  id: "leanMoreTeleportationPath",
  position: [60,51,10,5],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#000000", fill:"#909090",width:5},
    { type: "text",align:"center",position:[5,35,90,40],value:"Learn more",color:"#CDE"}
    ]
};

var choose = {
  id: "choose",
  position: [27.5,0,45,50],
  visible: true,
  components: [
    { type: "text",position:[5,10,90,60],value:"Choose your power:",color:"#CDE"}
    ]
};


var idleStatus = function(ship) {
  ship.set({
    idle:true
  });
};

var powerPerShip = {
  id: "powerPerShip",
  position: [5,30,10,20],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#373737", fill:"#949494",width:20},
    { type: "text",position:[10,20,80,30],value:"Powers ",color:"#FFFFFF"},
    { type: "text",position:[5,50,90,40],value:" ",color:" "}
    ]
};

var actualize_seconds = function(ship, seconds,color) {
  powerPerShip.components[2].value = seconds;
  powerPerShip.components[2].color = color;
  ship.setUIComponent(powerPerShip);
};

var stopIdle = function(ship) {
  ship.custom.petrificationCount = 2;
  ship.set({idle:false});
};
var hideInstructorForShip = function(ship) {
  ship.hideInstructor();
};



var BatteryPicked = function(ship) {
  ship.emptyWeapons();
  if (ship.custom.batteries <=3) {
    ship.custom.batteries++;
    if (ship.custom.batteries === 1) {
      actualizationOfBatteryBox(ship, "#B2A91B", "#838383", "#BABABA");
    }
    else if (ship.custom.batteries === 2) {
      actualizationOfBatteryBox(ship, "#B2A91B", "#DFD41A", "#BABABA");
    }
    else if (ship.custom.batteries === 3) {
      actualizationOfBatteryBox(ship, "#B2A91B", "#DFD41A", "#FBEE0E");
    }
  }
};


var actualizationOfBatteryBox = function(ship,OneBattery,TwoBatteries, ThreeBatteries) {
  batteryBox.components[1].fill = OneBattery;
  batteryBox.components[2].fill = TwoBatteries;
  batteryBox.components[3].fill = ThreeBatteries;
  ship.setUIComponent(batteryBox);
};


var batteryBox = {
  id: "batteryBox",
  position: [17,32,10,20],
  visible: true,
  components: [
    { type: "box",position:[0,0,30,80], fill:" ",width:10},
    { type: "box",position:[5,3,20,27],fill:" ",width:0},
    { type: "box",position:[5,27,20,27],fill:" ",width:0},
    { type: "box",position:[5,52,20,25],fill:" ",width:0},
    ]
};



var healerPath = {
  id: "healerPath",
  position: [30,60,10,20],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#e672da", fill:"#3B3B3B",width:5},
    { type: "text",position:[10,20,80,30],value:"🌿",color:"#CDE"},
    { type: "text",position:[5,50,90,40],value:"Healer",color:"#CDE"}
    ]
};
var learnMorehealerPath = {
  id: "learnMorehealerPath",
  position: [30,81,10,5],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#000000", fill:"#909090",width:5},
    { type: "text",align:"center",position:[5,35,90,40],value:"Learn more",color:"#CDE"}
    ]
};

var bodyguardPath = {
  id: "bodyguardPath",
  position: [45,60,10,20],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#212082", fill:"#3B3B3B",width:5},
    { type: "text",position:[10,20,80,30],value:"🛡️",color:"#CDE"},
    { type: "text",position:[5,50,90,40],value:"Bodyguards",color:"#CDE"}
    ]
};
var learnMorebodyguardPath = {
  id: "learnMorebodyguardPath",
  position: [45,81,10,5],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#000000", fill:"#909090",width:5},
    { type: "text",align:"center",position:[5,35,90,40],value:"Learn more",color:"#CDE"}
    ]
};
var bloodStealerPath = {
  id: "bloodStealerPath",
  position: [60,60,10,20],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#891a1a", fill:"#3B3B3B",width:5},
    { type: "text",position:[10,20,80,30],value:"🩸",color:"#CDE"},
    { type: "text",position:[5,50,90,40],value:"Vampire",color:"#CDE"}
    ]
};
var learnMorebloodStealerPath = {
  id: "learnMorebloodStealerPath",
  position: [60,81,10,5],
  clickable: true,
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#000000", fill:"#909090",width:5},
    { type: "text",align:"center",position:[5,35,90,40],value:"Learn more",color:"#CDE"}
    ]
};

        var actualizePLayerPoints = function(ship, points) {
          pointsship.components[0].value = `Your points: ${points}`;
          ship.setUIComponent(pointsship);
        };
var tick = function(game) {
  if (game.step == 0) {
      game.custom.trigger = 0;
      game.custom.bar_width = 70;
      game.custom.bar_x = 10;
      game.custom.bar_color = "#35BC0D";
      game.custom.aliens = 4;
      game.custom.team_name1 = "Orgono";
      game.custom.team_name = "Orgono";
      game.custom.team_name2 = "Volgauf";
      game.custom.team_1_id = 0;
      game.custom.team_2_id = 1;
      game.custom.boss_aliens = [];
      game.custom.points_needed = points;
      game.custom.win = false;
      game.custom.start = true;
      echo("game started");
      game.custom.status = "Mining";
  }
  if (game.step % 15 == 0) {
    if (game.custom.status === "Aliens") {
      var alien_code = [10,11,17,18];
      var alien_type = [0,1,2,3];
      var minAs = [50,51,52,53,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70];
      var xy = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9];
      var crystals = [30,31,32,33,34,35,36,37,38,39,40];
      for (let alien of game.aliens) {
        if (game.aliens.length <= 50) {
          game.addAlien({
            x: (Math.random() - 0.5) * game.options.map_size * 10,
            y: (Math.random() - 0.5) * game.options.map_size * 10,
            code: alien_code[~~(Math.random()*alien_code.length)],
            level: alien_type[~~(Math.random()*alien_type.length)],
            crystal_drop: crystals[~~(Math.random()*crystals.length)]
          })
        }
      }
        if (game.asteroids.length <= 30) {
          game.addAsteroid({
            x: (Math.random() - 0.5) * game.options.map_size * 10,
            y: (Math.random() - 0.5) * game.options.map_size * 10,
            size: minAs[~~(Math.random()*minAs.length)],
            vx: xy[~~(Math.random()*xy.length)],
            vy: xy[~~(Math.random()*xy.length)]
          })
      }
    }
    if (game.custom.points_needed <= game.custom.team_score_1 && game.custom.win !== true) {
      game.custom.winner = game.custom.team_1_id;
      echo("\n\nOrgono team won!\n")
      for (let ship of game.ships) {
        gameover(ship);
      }
      game.custom.win = true;
    } else if (game.custom.points_needed <= game.custom.team_score_2 && game.custom.win !== true) {
      game.custom.winner = game.custom.team_2_id;
      echo("\n\Volgauf team won!\n")
      for (let ship of game.ships) {
        gameover(ship);
      }
      game.custom.win = true;
    }
    for (let ship of game.ships) {
      if (game.custom.status === "Aliens") {
        ship.setUIComponent(player_number);
        score_set_points(ship);
        check_hue_team(ship);
        actualize_scores(
          ship, "Orgono    (" +
          game.custom.team_score_1 + ")", "Volgauf    (" +
          game.custom.team_score_2 + ")");
          if (game.custom.number_player_t1 < 10 && game.custom.number_player_t2 < 10) {
            actualize_player_number(ship, "Orgono: 0"+game.custom.number_player_t1, "Volgauf: 0"+game.custom.number_player_t2);
          }
          else if (game.custom.number_player_t1 < 10 && game.custom.number_player_t2 >= 10) {
            actualize_player_number(ship, "Orgono: 0" + game.custom.number_player_t1, "Volgauf: " + game.custom.number_player_t2);
          } 
          else if (game.custom.number_player_t2 < 10 && game.custom.number_player_t1 >= 10) {
            actualize_player_number(ship, "Orgono: " + game.custom.number_player_t1, "Volgauf: 0"+ game.custom.number_player_t2);
          }
          else if (game.custom.number_player_t1 >= 10 && game.custom.number_player_t2 >= 10) {
            actualize_player_number(ship, "Orgono: " + game.custom.number_player_t1,"Volgauf: " +  game.custom.number_player_t2);
          }
          if (ship.custom.team === "Orgono") {
            actualize_ennemies_and_friends(ship, "↑ Allies ↑", "↑ Enemies ↑");
          }
          else if (ship.custom.team === "Volgauf") {
            actualize_ennemies_and_friends(ship, "↑ Enemies ↑", "↑ Allies ↑");
          }
        if (game.custom.boss_creation === true) {
            for (let i=0;i<4;i++) {
              game.custom.boss_aliens.push(game.addAlien({
                x: (Math.random() - 0.5) * game.options.map_size * 10,
                y: (Math.random() - 0.5) * game.options.map_size * 10,
                code: 19,
                level: 3,
                points: 5600,
                crystal_drop: 500,
                weapon_drop: 12
              }))
            }
          for (let alien of game.aliens) {
            if (!game.custom.boss_aliens_init) {
              game.custom.boss_aliens_init = true;
              for (let alien of game.custom.boss_aliens) {
                if (!alien.custom.init) {
                  if (alien.id < 0) {
                    game.custom.boss_aliens_init = false;
                  } else {
                    alien.custom.init = true;
                    boss_set(alien);
                  }
                }
              }
            }
          }
          game.custom.boss_creation = false;
        }
        }
      if (ship.custom.init !== true) {
        ship.custom.init = true;
        ship.custom.points = 0;
        ship.custom.check = false;
        ship.custom.frags = 0;
        ship.custom.deaths = 0;
        ship.custom.boss_killed = 0;
        ship.custom.alien_killed = 0;
        ship.custom.tped = true;
        ship.custom.AE = false;
        ship.custom.init = true;
        ship.custom.mined_gems = 0;
        ship.custom.total_gems = 0;
        ship.custom.mining=false;
        ship.custom.j = false;
        ship.custom.mining_button_status = true;
        ship.instructorSays(
        "Welcome to SA. After the mining phase you will be teleported on the map and will have to fight players and aliens. Fight and don’t die. Win points with kills, make your team winning 25 000 points."        )
        ship.custom.time_start_before_hiding = true;
        ship.custom.timeZ = seconds_beifre_hiding;
        ship.custom.lmfao = true;
        ship.custom.secondsToHavePower = 60;
        ship.custom.usedPower = true;
        ship.custom.petrificationCount = 0;
        ship.custom.petrified = false;
        ship.custom.bruh = false;
        ship.custom.healingEnabled = false;
        ship.custom.heal=0;
        ship.custom.batteries = 0;
        ship.custom.power = "none";
        ship.custom.FirstX = 0;
        ship.custom.SecondX = 0;
        ship.custom.FirstY = 0;
        ship.custom.SecondY = 0;
        if (game.custom.status === "Mining") {spawn(ship);}
        if (game.custom.status === "Aliens") {
          team_assign(ship);
          ship.setUIComponent(scoreboard);
          ship.setUIComponent(batteryBox);
          ship.setUIComponent(player_number);
          ship.instructorSays("Welcome to SA. After the mining phase you will be teleported on the map and will have to fight players and aliens. Fight and don’t die. Win points with kills, make your team winning 25 000 points."        )
          ship.custom.time_start_before_hiding = true;
          ship.custom.timeZ = seconds_beifre_hiding;
          actualize_seconds(ship, ship.custom.secondsToHavePower + "s", "#AD1414");
          echo(ship.name + " joined");
          ship.setUIComponent(powerPerShip);
          actualizationOfBatteryBox(ship, "#5F5F5F", "#838383", "#BABABA");
          ship.setUIComponent(pointsship);
        }
        echo(`${ship.name} joined: ${ship.custom.team}, ${ship.team}`)
        }
    }
  }
  if (game.step % 60 == 0 ) {
    if (game.custom.time !== -1) {
      game.custom.time--;
    }
      if (game.custom.status === "Mining") {
        if (game.custom.minuts_1 >= 0 && game.custom.minuts !== -1) {
              if (game.custom.seconds < 10) {
                for (let ship of game.ships) {
                  timer_change(ship, '0'+game.custom.minuts_1 + ':'+ '0' + game.custom.seconds);
                }
                game.custom.seconds--;
              }
              else {
                for (let ship of game.ships) {
                  timer_change(ship, '0'+game.custom.minuts_1 + ':'+ game.custom.seconds);
                }
                game.custom.seconds--;
              }
              if (game.custom.seconds == -1 && game.custom.minuts_1 !== 0) {
                game.custom.minuts_1--;
                game.custom.seconds += 60;
              }
          }
        if (game.custom.seconds === 0 && game.custom.minuts_1 === 0) {
          game.custom.status = "Aliens";
          for (let ship of game.ships) { 
            team_assign(ship);
            ship.setUIComponent(scoreboard);
            ship.setUIComponent(player_number);
            ship.custom.time_start_before_hiding = true;
            ship.custom.timeZ = seconds_beifre_hiding;
            game.custom.boss_creation = true;
            actualize_seconds(ship, ship.custom.secondsToHavePower + "s", "#AD1414");
            echo(ship.name + " joined");
            ship.setUIComponent(powerPerShip);
            ship.setUIComponent(batteryBox);
            actualizationOfBatteryBox(ship, "#5F5F5F", "#838383", "#BABABA");
            ship.setUIComponent({id:"timer", visible:false});
            ship.setUIComponent(pointsship);
          }
        }
      }
      for (let ship of game.ships) { 
        if (ship.custom.time_start_before_hiding === true) {
          ship.custom.timeZ--;
          if (ship.custom.timeZ === 0) {
            ship.custom.time_start_before_hiding = false;
            ship.hideInstructor();
          } else if (ship.custom.timeZ > 0) {
            invulnerable(ship);
          }
        }
        if (game.custom.status === "Aliens") {
          if (count === true) {
            if (countSeconds > 0) {
              countSeconds--;
            } else {
              count = false;
              countSeconds =5;
              ship.custom.bruh = true;
            }
          }
            if (ship.custom.petrified === true) {
              if (ship.custom.petrificationCount !== 0) {
                ship.custom.petrificationCount--;
              }
              else if (ship.custom.petrificationCount === 0) {
                stopIdle(ship);
                ship.custom.petrified = false;
              }
            }
            if (ship.custom.healingEnabled === true) {
              if (ship.custom.heal !== 0) {
                ship.custom.heal--;
              } else if (ship.custom.heal === 0) {
                stopHealing(ship);
                ship.custom.healingEnabled = false;
              }
            }
          if (ship.custom.usedPower === true) {
            if (ship.custom.secondsToHavePower >= 1) {
              ship.custom.secondsToHavePower--;
              actualize_seconds(ship, ship.custom.secondsToHavePower + "s", "#AD1414");
            } else if (ship.custom.secondsToHavePower === 1) {
              ship.custom.secondsToHavePower = 0;
              ship.custom.usedPower = false;
              actualize_seconds(ship, ship.custom.secondsToHavePower + "s", "#339005");
            }
          }
        }
    }
  }
  if (game.step % 1800 === 0) {
    for (let o=0;o<Math.trunc(game.ships.length*1.5);o++) {
      game.addCollectible({
        code: 42,
        x:(Math.random() - 0.5) * game.options.map_size * 10,
        y: (Math.random() - 0.5) * game.options.map_size * 10
      })
    }
  }
  };
var hide_timer = false;
var collectibles_codes = [10,11,41,42]
var change_mining_button_infos = function(ship, value ) {
  mining_button.components[2].value = value;
  ship.setUIComponent(mining_button);
}





var timer = {
  id: "timer",
  position: [6,30,15,15],
  visible: true,
  components: [
    { type: "text",position:[0,0,60,60],value: " ",color:"#CDE"},
    ]
};


var stopHealing = function(ship) {
  ship.set({healing:false});
};

var count = false;
var countSeconds = 5;
var petrificationCount = 0;
var space = "\n"
var powerAction = function(ship) {
  calculateCoordinates(ship);
  var teleportationInfos = {
    teleportedPlayer: `You teleported yourself randomly on the map and gained ${ship.custom.batteries} seconds of invulnerability`,
    teleportedOthers: ``,
    actionDelay: 0
  };
  var petrificationInfos = {
    petrificator: `You have petrified ${game.ships.length - 1} players for ${ship.custom.batteries} seconds.`,
    petrificatedOthers: `You and  ${game.ships.length - 2 } players were petrified for ${ship.custom.batteries} seconds.`,
    actionDelay: 2
  };
  var eletricityInfos = {
    electricityPlayer: `${game.ships.length - 1} players received ${((Math.trunc(ship.type / 100) * 10)/2)*ship.custom.batteries} damages.`,
    electricitedPlayers: `You and ${game.ships.length - 2} players received ${((Math.trunc(ship.type / 100) * 10)/2)*ship.custom.batteries} damages.`,
    actionDelay: 2
  };
  var healerInfos = {
    healer: `You gained the ability to heal for ${ship.custom.batteries} seconds.`
  }; 
  var bodyguardInfos = {
    boyguarded: `You summoned ${ship.custom.batteries*2} aliens to protect you.`
  };
  var bloodStealerInfos = {
    bloodstealer: `You drained a total of  ${
      (Math.trunc(ship.tier/100)*5) * ship.custom.batteries} shields and lost  ${
      (Math.trunc(ship.tier/100)*5) * ship.custom.batteries} crystals.`,
    bloodstealed: `You were drained of ${
    Math.trunc(((Math.trunc(ship.tier/100)*5) * ship.custom.batteries) / (game.ships.length - 1) )
    } shields.`
  };
  if (ship.custom.power === "petrification") {
    for (let i = 0; i < game.ships.length; i++) {
      if (game.ships[i].team !== ship.team) {
        if (
          game.ships[i].x < ship.custom.FirstX &&
          game.ships[i].x > ship.custom.SecondX &&
          game.ships[i].y < ship.custom.FirstY &&
          game.ships[i].y > ship.custom.SecondY
          ) {
              game.ships[i].instructorSays(space + petrificationInfos.petrificatedOthers);
              game.ships[i].set({idle:true});
              game.ships[i].custom.petrificationCount=ship.custom.batteries;
              game.ships[i].custom.petrified=true;
              game.ships[i].setUIComponent(explanationOK);
              game.ships[i].setUIComponent({id:"pointsship", visible:false})
              echo(`${game.ships[i].name} got petrificated`)
            }
      } else if (game.ships[i].team === ship.team) {
        game.ships[i].instructorSays(space + petrificationInfos.petrificator );
        game.ships[i].setUIComponent({id:"pointsship", visible:false})
        game.ships[i].setUIComponent(explanationOK);
      }
    }
    var count = true;
  }
  if (ship.custom.power === "teleportation") {
    ship.set({
      x:(Math.random() - 0.5) * game.options.map_size * 10,
      y: (Math.random() - 0.5) * game.options.map_size * 10, 
      invulnerable: 60*ship.custom.batteries
    })
    ship.instructorSays(space+teleportationInfos.teleportedPlayer);
    ship.setUIComponent({id:"pointsship", visible:false})
    var count = true;
  }
  if (ship.custom.power === "electricity") {
    for (let c = 0; c < game.ships.length; c++) {
      if (game.ships[c].team !== ship.team) {
        if (
          game.ships[c].x < ship.custom.FirstX &&
          game.ships[c].x > ship.custom.SecondX &&
          game.ships[c].y < ship.custom.FirstY &&
          game.ships[c].y > ship.custom.SecondY
          ) {
              game.ships[c].instructorSays(space + eletricityInfos.electricitedPlayers);
              game.ships[c].setUIComponent({id:"pointsship", visible:false})
              game.ships[c].set({shield:game.ships[c].shield - ((Math.trunc(ship.type / 100) * 10)/2)*2});
              game.ships[c].setUIComponent(explanationOK);
            }
      } else if (game.ships[c].team === ship.team) {
        game.ships[c].instructorSays(space + eletricityInfos.electricityPlayer );
        game.ships[c].setUIComponent({id:"pointsship", visible:false})
        game.ships[c].setUIComponent(explanationOK);
      }
    }
    var count = true;
  }
  if (ship.custom.power === "healer") {
    ship.instructorSays(space + healerInfos.healer);
    ship.setUIComponent({id:"pointsship", visible:false});
    ship.setUIComponent(explanationOK);
    ship.set({healing:true});
    ship.custom.heal = ship.custom.batteries;
    ship.custom.healingEnabled=true;
  };
  if (ship.custom.power === "bodyguard") {
    ship.instructorSays(space + bodyguardInfos.boyguarded);
    ship.setUIComponent({id:"pointsship", visible:false});
    ship.setUIComponent(explanationOK);
    for (let z=0;z<ship.custom.batteries*2;z++) {
      game.addAlien({
        x: ship.x + z,
        y: ship.y - z,
        crystal_drop: 0,
        code: 13,
        level:0,
        points: 0
      });
    };
  };
  if (ship.custom.power === "bloodStealer") {
    for (let g = 0; g < game.ships.length; g++) {
      if (game.ships[g].team !== ship.team) {
        if (
          game.ships[g].x < ship.custom.FirstX &&
          game.ships[g].x > ship.custom.SecondX &&
          game.ships[g].y < ship.custom.FirstY &&
          game.ships[g].y > ship.custom.SecondY
          ) {
              game.ships[g].instructorSays(space + bloodStealerInfos.bloodstealed);
              game.ships[g].setUIComponent({id:"pointsship", visible:false})
              game.ships[g].set({
                shield:
                  game.ships[g].shield - Math.trunc(((Math.trunc(ship.tier/100)*5) * ship.custom.batteries) / (game.ships.length - 1) )});
              game.ships[g].setUIComponent(explanationOK);
            }
      } else if (game.ships[g].team === ship.team) {
        game.ships[g].instructorSays(space + bloodStealerInfos.bloodstealer );
        game.ships[g].setUIComponent({id:"pointsship", visible:false})
        game.ships[g].setUIComponent(explanationOK);
        game.ships[g].set({crystals:
           game.ships[g].crystals - (Math.trunc(ship.tier/100)*5) * ship.custom.batteries
        })
      }
    }
  };
  actualizationOfBatteryBox(ship, "#5F5F5F", "#838383", "#BABABA");
  ship.custom.batteries = 0;
};


var calculateCoordinates = function(ship) {
  var min = 30 * 5;
  var max = - 30 * 5;
  if (ship.x + 30 > 150) {
    ship.custom.Calcul = 150 - (game.ships[i].x + 30);
    ship.custom.FirstX = min - ship.custom.Calcul;
  } else {
    ship.custom.FirstX = ship.x;
  }
  if (ship.x - 30 < -150) {
    ship.custom.Calcul = -150 - (game.ships[i].x - 30);
    ship.custom.SecondX = max - ship.custom.Calcul;
  } else {
    ship.custom.SecondX = ship.x;
  }
  if (ship.y + 30 > 150) {
    ship.custom.Calcul = 150 - (game.ships[i].y + 30);
    ship.custom.FirstY = min - ship.custom.Calcul;
  } else {
    ship.custom.FirstY = ship.y;
  }
  if (ship.y - 30 < -150) {
    ship.custom.Calcul = -150 - (game.ships[i].x - 30);
    ship.custom.SecondY = max - ship.custom.Calcul;
  } else {
    ship.custom.SecondY = ship.y;
  }
};

if (
  game.ships[i].x < ship.custom.FirstX &&
  game.ships[i].x > ship.custom.SecondX &&
  game.ships[i].y < ship.custom.FirstY &&
  game.ships[i].y > ship.custom.SecondY
  ) {
  //stuff
};




        var pointsship = {
            id: "pointsship",
            position: [27,15,65,20],
            visible: true,
            components: [
              { type: "text",position:[15,30,40,40],value:" ",color:"#CDE"},
              ]
          };


var explanationOK = {
  id: "explanationOK",
  position: [75,15,45,50],
  visible: true,
  clickable:true,
  components: [
    { type: "box",position:[0,0,10,10],stroke:"#B2B2B2B2", fill:"#6C6C6C",width:5},
    { type: "text",position:[0,0,10,10],value:"OK",color:"#CDE"}
    ]
};

var showExplanation = function(ship, text, text2) {
  explanationText.components[0].value = text;
  explanationText.components[1].value = text2;
  ship.setUIComponent(explanationText);
  ship.setUIComponent(explanationOK);
};
var hideComponentsInfos = function(ship) {
  ship.setUIComponent({id:"explanationText", visible:false});
  ship.setUIComponent({id:"explanationOK",visible: false});
};

var showComponents = function(ship) {
  ship.setUIComponent(petrificationPowerPath);
  ship.setUIComponent(eletricPowerPath);
  ship.setUIComponent(teleportationPowerPath);
  ship.setUIComponent(leanMoreTeleportationPath);
  ship.setUIComponent(learrnMorePetrificationPath);
  ship.setUIComponent(learnMoreElectricityPath);
  ship.setUIComponent(learnMorehealerPath);
  ship.setUIComponent(healerPath);
  ship.setUIComponent(bodyguardPath);
  ship.setUIComponent(learnMorebodyguardPath);
  ship.setUIComponent(bloodStealerPath);
  ship.setUIComponent(learnMorebloodStealerPath);
};

var hideComponents = function(ship) {
  ship.setUIComponent({id:"petrificationPowerPath",visible:false});
  ship.setUIComponent({id:"eletricPowerPath",visible:false});
  ship.setUIComponent({id:"teleportationPowerPath",visible:false});
  ship.setUIComponent({id:"leanMoreTeleportationPath",visible:false});
  ship.setUIComponent({id:"learrnMorePetrificationPath",visible:false});
  ship.setUIComponent({id:"learnMoreElectricityPath",visible:false});
  ship.setUIComponent({id:"learnMorehealerPath",visible:false});
  ship.setUIComponent({id:"healerPath",visible:false});
  ship.setUIComponent({id:"bodyguardPath",visible:false});
  ship.setUIComponent({id:"learnMorebodyguardPath",visible:false});
  ship.setUIComponent({id:"bloodStealerPath",visible:false});
  ship.setUIComponent({id:"learnMorebloodStealerPath",visible:false});
};


var BatteryPicked = function(ship) {
  if (ship.custom.batteries <= 2) {
    var randomNummbbers = [1,2,3,4,5]
    if (randomNumbers[~~(Math.random()*randomNumbers.length)] === 1) {
      ship.custom.batteries--;
      ship.instructorSays(`${space}You got a corrupted battery and lost 1 charge in your power battery.`)
      ship.setUIComponent(explanationOK);
      ship.setUIComponent({id:"pointsship", visible:false})
      if (ship.custom.batteries === 0) {
        actualizationOfBatteryBox(ship, "#5F5F5F", "#838383", "#BABABA");
      }
      if (ship.custom.batteries === 1) {
        actualizationOfBatteryBox(ship, "#B2A91B", "#838383", "#BABABA");
      }
      else if (ship.custom.batteries === 2) {
        actualizationOfBatteryBox(ship, "#B2A91B", "#DFD41A", "#BABABA");
      }
      else if (ship.custom.batteries === 3) {
        actualizationOfBatteryBox(ship, "#B2A91B", "#DFD41A", "#FBEE0E");
      }
    } else {
      ship.custom.batteries++;
      if (ship.custom.batteries === 1) {
        actualizationOfBatteryBox(ship, "#B2A91B", "#838383", "#BABABA");
      }
      else if (ship.custom.batteries === 2) {
        actualizationOfBatteryBox(ship, "#B2A91B", "#DFD41A", "#BABABA");
      }
      else if (ship.custom.batteries === 3) {
        actualizationOfBatteryBox(ship, "#B2A91B", "#DFD41A", "#FBEE0E");
      }
    }
  }
};


var actualizationOfBatteryBox = function(ship,OneBattery,TwoBatteries, ThreeBatteries) {
  batteryBox.components[3].fill = OneBattery;
  batteryBox.components[2].fill = TwoBatteries;
  batteryBox.components[1].fill = ThreeBatteries;
  ship.setUIComponent(batteryBox);
};


var less_crystals = function(ship) {
  ship.set({
    crystals: ship.crystals - Math.trunc(ship.type/100)
  })
}
var mining = function(ship) {
  if (ship.custom.mining === false) {
    ship.custom.mining = true;
    ship.set({idle:true});
  } else {
    ship.custom.mining = false;
    ship.set({idle:false});
  }
};

this.event = function(event, game) {
  let ship = event.ship;
  let alien = event.alien;
  let killer = event.killer;
  var component = event.id ;
  switch (event.name) {
    case "ui_component_clicked":
      if (component == "learrnMorePetrificationPath") {
        ship.instructorSays(space+`
        Petrify players for ${ship.custom.batteries} seconds.
        `);
        ship.setUIComponent(explanationOK);
        ship.setUIComponent({id:"pointsship", visible:false})
      }
      if (component == "learnMoreElectricityPath") {
        ship.instructorSays(space+`
          Damage players of ${
          ((Math.trunc(ship.type / 100) * 10)/2)*ship.custom.batteries} damages.
        `);
        ship.setUIComponent(explanationOK);
        ship.setUIComponent({id:"pointsship", visible:false})
      }
      if (component == "leanMoreTeleportationPath") {
        ship.instructorSays(space+`
          Teleport yourself randomly the map and gain ${ship.custom.batteries} seconds of
          invulnerability
        `);
        ship.setUIComponent(explanationOK);
        ship.setUIComponent({id:"pointsship", visible:false})
      }
      if (component == "learnMorehealerPath") {
        ship.instructorSays(space+`
        Gain the ability to heal for ${ship.custom.batteries} seconds.
        `);
        ship.setUIComponent(explanationOK);
        ship.setUIComponent({id:"pointsship", visible:false})
      }
      if (component == "learnMorebodyguardPath") {
        ship.instructorSays(space+`
          Summon ${ship.custom.batteries*2} aliens to protect you.
        `);
        ship.setUIComponent(explanationOK);
        ship.setUIComponent({id:"pointsship", visible:false})
      }
      if (component == "learnMorebloodStealerPath") {
        ship.instructorSays(space+`
            Drain enemies’s shield (${game.ships.length - 1}) and lose ${
            Math.trunc(((Math.trunc(ship.tier/100)*5) * ship.custom.batteries) / (game.ships.length - 1) )
            
          } crystals.
        `);
        ship.setUIComponent(explanationOK);
        ship.setUIComponent({id:"pointsship", visible:false})
      }
    if (component == "explanationOK") {
        ship.hideInstructor();
        ship.setUIComponent({id:'explanationOK', visible:false})
        ship.setUIComponent(pointsship);
      }
      
      if (component == "petrificationPowerPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = secondsBeforeUsingAPower;
          ship.custom.usedPower = true;
          ship.custom.power = "petrification";
          powerAction(ship);
        }
      }
      if (component == "eletricPowerPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = secondsBeforeUsingAPower;
          ship.custom.usedPower = true;
          ship.custom.power = "electricity";
          powerAction(ship);
        }
      }
      if (component == "teleportationPowerPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = secondsBeforeUsingAPower;
          ship.custom.usedPower = true;
          ship.custom.power = "teleportation";
          powerAction(ship);
        }
      }
      if (component == "healerPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = secondsBeforeUsingAPower;
          ship.custom.usedPower = true;
          ship.custom.power = "healer";
          powerAction(ship);
        }
      }
      if (component == "bodyguardPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = secondsBeforeUsingAPower;
          ship.custom.usedPower = true;
          ship.custom.power = "bodyguard";
          powerAction(ship);
        }
      }
      if (component == "bloodStealerPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = secondsBeforeUsingAPower;
          ship.custom.usedPower = true;
          ship.custom.power = "bloodStealer";
          powerAction(ship);
        }
      }
      if (component === "powerPerShip") {
        if (ship.custom.secondsToHavePower <= 0) {
          if (ship.custom.lmfao === true) {
            showComponents(ship);
            ship.custom.lmfao = false;
          } else if (ship.custom.lmfao === false) {
            hideComponents(ship);
            ship.setUIComponent({id:""})
            ship.custom.lmfao = true;
          }
        }
      }
      
      break ;
    case "alien_destroyed":
      if (alien !== null)
      {
        if (killer !== null) {
          killer.custom.alien_killed++;
          if (alien.code === 19 && alien.level === 3) {
              game.custom.aliens--;
               echo(game.custom.aliens);
               if (killer.custom.team === "Orgono") {
                  game.custom.team_score_1 += points_per_boss;
                } else if (killer.custom.team === "Volgauf") {
                  game.custom.team_score_2 += points_per_boss;
                }
                killer.custom.points += points_per_boss;
                killer.custom.boss_killed++;
                actualizePLayerPoints(killer, killer.custom.points);
          }
            else {
              if (killer.custom.team === "Orgono") {
                game.custom.team_score_1 += ((Number(alien.code) + Number(alien.level))*10);
              } else if (killer.custom.team === "Volgauf"){
                game.custom.team_score_2 += ((Number(alien.code) + Number(alien.level))*10);
              }
              killer.custom.points += ((Number(alien.code) + Number(alien.level))*10);
              actualizePLayerPoints(killer, killer.custom.points);
            }
        }
      }
      break ;
    case "ship_spawned":
          if (ship !== null) {
            if (game.custom.status === "Aliens") 
              if (ship.team === 0) {
                ship.set({x:0,y:250});
              } else if (ship.tem === 1) {
                ship.set({x:0,y:-250});
              }
        }
      break ;
    case "ship_destroyed":
      if (ship !== null) {
        echo(ship.name + " died.")
        change_score(ship);
          if (ship.custom.team === "Orgono") {
            if (game.custom.team_score_1 - Math.trunc(((Math.trunc(ship.type / 100) * 100))) * 1.5 >= 0) {
              game.custom.team_score_1 -= Math.trunc(((Math.trunc(ship.type / 100) * 100))) * 1.5 ;
              echo('Orgono lost some points: ' + game.custom.team_score_1);
            } else {
              game.custom.team_score_1 = 0;
            }
          } else if (ship.custom.team === "Volgauf") {
            if (game.custom.team_score_2 - Math.trunc(((Math.trunc(ship.type / 100) * 100))) * 1.5  >= 0) {
              game.custom.team_score_2 -= Math.trunc(((Math.trunc(ship.type / 100) * 100))) * 1.5 ;
              echo('Volgauf lost some points: ' + game.custom.team_score_2);
            } else {
              game.custom.team_score_2 = 0;
            }
          }
        if (killer !== null) {
          killer.custom.frags++;
          if (killer.custom.team === "Orgono") {
            game.custom.team_score_1 += 450;
          } else if (killer.custom.team === "Volgauf") {
            game.custom.team_score_2 += 450;
          }
          killer.custom.points += 450;
          actualizePLayerPoints(killer, killer.custom.points);
        }
        ship.custom.deaths++;
      }
      break;
    case "ship_disconnected":
      if (ship.team === 0) {
        game.custom.number_player_t1--;
        echo('Orgono - 1 ')
      } else {
        game.custom.number_player_t2--;
        echo('Volgauf - 1')
      }
      echo(ship.name + " left")
    break;
    case "collectible_picked":
      if (ship != null) {
        ship.emptyWeapons();
        BatteryPicked(ship);
      }
  }
};
