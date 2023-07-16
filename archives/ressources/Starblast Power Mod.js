
var Advanced_Fighter__Electricity__601 = (function(){var r=Function('return(function(){var model;return model={name:\'Advanced-Fighter (Electricity)\',level:6,model:1,size:2,specs:{shield:{capacity:[200,350],reload:[4,6]},generator:{capacity:[120,200],reload:[50,60]},ship:{mass:400,speed:[70,80],rotation:[30,50],acceleration:[70,100]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0],y:[-100,-80,-90,-50,0,50,100,90],z:[0,0,0,0,0,0,0,0]},width:[0,5,15,25,40,25,20,0],height:[0,5,10,30,25,20,10,0],propeller:true,texture:[4,4,1,1,10,1,1],laser:{damage:[90,150],rate:1,type:2,speed:[180,240],number:1,recoil:150,error:0}},cockpit:{section_segments:12,offset:{x:0,y:-35,z:33},position:{x:[0,0,0,0,0,0,0],y:[-30,-20,10,30,40],z:[0,0,0,0,0,0,0]},width:[0,12,15,10,0],height:[0,12,18,12,0],propeller:false,texture:[7,9,9,7]},side_propellers:{section_segments:10,offset:{x:30,y:30,z:0},position:{x:[0,0,0,0,0,0],y:[-50,-20,0,20,80,70],z:[0,0,0,0,0,0]},width:[15,20,10,25,10,0],height:[10,15,15,10,5,0],angle:0,propeller:true,texture:[3,63,4,10,3]},cannons:{section_segments:12,offset:{x:70,y:50,z:-30},position:{x:[0,0,0,0,0,0,0],y:[-50,-45,-20,0,20,50,55],z:[0,0,0,0,0,0,0]},width:[0,5,10,10,15,10,0],height:[0,5,15,15,10,5,0],angle:0,propeller:false,texture:[4,4,10,4,63,4],laser:{damage:[6,12],rate:3,type:1,speed:[100,150],number:1,error:0}},cannons2:{section_segments:12,offset:{x:95,y:50,z:-40},position:{x:[0,0,0,0],y:[-50,-20,40,50],z:[0,0,0,0]},width:[2,5,5,2],height:[2,15,15,2],angle:0,propeller:false,texture:6,laser:{damage:[4,10],rate:3,type:1,speed:[100,150],number:1,error:0}},electricity:{section_segments:6,offset:{x:29,y:60,z:8},position:{x:[8,8,0,8,0,0,0],y:[-5,-5,5,18,25,25,25],z:[0,0,0,0,0,0,0]},width:[0,1,4,4,4,4,0],height:[0,1,4,4,4,4,0],angle:0,propeller:false,texture:63}},wings:{main:{length:[100,30,20],width:[100,50,40,30],angle:[-25,20,25],position:[30,70,50,50],bump:{position:-20,size:20},offset:{x:0,y:0,z:0},texture:[11,11,63],doubleside:true},winglets:{length:[40],width:[40,20,30],angle:[10,-10],position:[-50,-70,-65],bump:{position:0,size:30},texture:63,offset:{x:0,y:0,z:0}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4,3.65,3.454,3.504,3.567,2.938,1.831,1.707,1.659,1.943,1.92,1.882,1.896,3.96,5.654,5.891,6.064,5.681,5.436,5.573,5.122,4.855,4.675,4.626,4.479,4.008,4.479,4.626,4.675,4.855,5.122,5.573,5.436,5.681,6.064,5.891,5.654,3.96,3.88,1.882,1.92,1.943,1.659,1.707,1.831,2.938,3.567,3.504,3.454,3.65],"lasers":[{"x":0,"y":-4,"z":0.4,"angle":0,"damage":[90,150],"rate":1,"type":2,"speed":[180,240],"number":1,"spread":0,"error":0,"recoil":150},{"x":2.8,"y":0,"z":-1.2,"angle":0,"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.8,"y":0,"z":-1.2,"angle":0,"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.8,"y":0,"z":-1.6,"angle":0,"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.8,"y":0,"z":-1.6,"angle":0,"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":6.064}')),JSON.stringify(r)})();
var Scorpion__electricity__602 = (function(){var r=Function('return(function(){var model;return model={name:\'Scorpion (electricity)\',level:6,model:2,size:2,specs:{shield:{capacity:[225,400],reload:[5,7]},generator:{capacity:[80,175],reload:[38,50]},ship:{mass:450,speed:[75,90],rotation:[50,70],acceleration:[80,100]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0],y:[-90,-40,-30,0,50,100,120,110],z:[-10,-5,0,0,0,0,20,20]},width:[0,12,20,15,25,10,5],height:[0,10,15,25,15,10,5],texture:[1,4,63,11,11,4],propeller:false},tail:{section_segments:14,offset:{x:0,y:70,z:50},position:{x:[0,0,0,0,0,0],y:[-70,-25,-10,20,40,50],z:[0,0,0,0,-10,-20]},width:[0,5,35,25,5,5],height:[0,5,25,20,5,5],texture:[6,4,63,10,4],laser:{damage:[50,100],rate:0.9,type:2,speed:[170,230],number:1,angle:0,error:0,recoil:100}},cockpit:{section_segments:8,offset:{x:13,y:-44,z:12},position:{x:[-5,0,0,0,0],y:[-15,-5,0,5,15],z:[0,0,0,1,0]},width:[0,8,10,8,0],height:[0,5,5,5,0],texture:[6,5],propeller:false},deco:{section_segments:8,offset:{x:70,y:0,z:-10},position:{x:[0,0,0,10,-5,0,0,0],y:[-115,-80,-100,-60,-30,-10,20,0],z:[0,0,0,0,0,0,0,0]},width:[1,5,10,15,15,20,10,0],height:[1,5,15,20,35,30,10,0],texture:[6,6,1,1,11,2,12],laser:{damage:[2,3],rate:1.8,type:1,speed:[130,170],number:2,angle:5,error:0},propeller:true},wingends:{section_segments:8,offset:{x:105,y:-80,z:-10},position:{x:[0,2,4,2,0],y:[-20,-10,0,10,20],z:[0,0,0,0,0]},width:[2,3,6,3,2],height:[5,15,22,17,5],texture:4,angle:0,propeller:false},electricity:{section_segments:6,offset:{x:65,y:-40,z:22},position:{x:[8,8,0,8,0,0,0],y:[-5,-5,5,18,25,25,25],z:[-5,-5,0,0,0,0,0]},width:[0,1,4,4,4,4,0],height:[0,1,4,4,4,4,0],angle:0,propeller:false,texture:63}},wings:{main:{length:[80,30],width:[40,30,20],angle:[-10,20],position:[30,-50,-80],texture:63,bump:{position:30,size:10},offset:{x:0,y:0,z:0}},font:{length:[80,30],width:[20,15],angle:[-10,20],position:[-20,-40],texture:4,bump:{position:30,size:10},offset:{x:0,y:0,z:0}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.6,2.846,2.313,2.192,5.406,5.318,5.843,5.858,5.621,4.134,3.477,3.601,3.622,3.464,3.351,3.217,1.458,1.391,1.368,1.37,1.635,2.973,3.47,3.911,4.481,4.804,4.481,3.911,3.47,2.973,1.635,1.37,1.368,1.391,1.458,3.217,3.351,3.464,3.622,3.601,3.477,4.134,5.621,5.858,5.843,5.318,5.406,2.192,2.313,2.846],"lasers":[{"x":0,"y":0,"z":2,"angle":0,"damage":[50,100],"rate":0.9,"type":2,"speed":[170,230],"number":1,"spread":0,"error":0,"recoil":100},{"x":2.8,"y":-4.6,"z":-0.4,"angle":0,"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"spread":5,"error":0,"recoil":0},{"x":-2.8,"y":-4.6,"z":-0.4,"angle":0,"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"spread":5,"error":0,"recoil":0}],"radius":5.858}')),JSON.stringify(r)})();
var Marauder__electricity__603 = (function(){var r=Function('return(function(){var model;return model={name:\'Marauder (electricity)\',level:6,model:3,size:1.4,specs:{shield:{capacity:[210,350],reload:[8,11]},generator:{capacity:[85,160],reload:[25,40]},ship:{mass:250,speed:[70,110],rotation:[60,80],acceleration:[80,120]}},bodies:{main:{section_segments:8,offset:{x:0,y:-20,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-65,-75,-55,-40,0,30,60,80,90,80],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,6,18,23,30,25,25,30,35,0],height:[0,5,10,12,12,20,15,15,15,0],texture:[6,4,1,10,1,1,11,12,17],propeller:true,laser:{damage:[10,16],rate:10,type:1,speed:[170,200],recoil:0,number:1,error:0}},cockpit:{section_segments:[40,90,180,270,320],offset:{x:0,y:-85,z:22},position:{x:[0,0,0,0,0,0],y:[15,35,60,95,125],z:[-1,-2,-1,-1,3]},width:[5,12,14,15,5],height:[0,12,15,15,0],texture:[8.98,8.98,4]},outriggers:{section_segments:10,offset:{x:25,y:0,z:-10},position:{x:[-5,-5,8,-5,0,0,0,0,0,0],y:[-100,-125,-45,0,30,40,70,80,100,90],z:[10,10,5,5,0,0,0,0,0,0,0,0]},width:[0,6,10,10,15,15,15,15,10,0],height:[0,10,20,25,25,25,25,25,20,0],texture:[13,4,4,63,4,18,4,13,17],laser:{damage:[4,8],rate:3,type:1,speed:[110,140],recoil:0,number:1,error:0},propeller:true},intake:{section_segments:12,offset:{x:25,y:-5,z:10},position:{x:[0,0,5,0,-3,0,0,0,0,0],y:[-10,-30,-5,35,60,70,85,100,85],z:[0,-6,0,0,0,0,0,0,0,0]},width:[0,5,10,10,15,10,10,5,0],height:[0,15,15,20,20,15,15,5,0],texture:[6,4,63,4,63,18,4,17]},electricity:{section_segments:6,offset:{x:50,y:30,z:10},position:{x:[8,8,0,8,0,0,0],y:[-5,-5,5,18,25,25,25],z:[-5,-5,0,0,0,0,0]},width:[0,1,4,4,4,4,0],height:[0,1,4,4,4,4,0],angle:0,propeller:false,texture:63}},wings:{main:{length:[20,70,35],width:[50,55,40,20],angle:[0,-20,0],position:[20,20,70,25],texture:[3,18,63],doubleside:true,bump:{position:30,size:15},offset:{x:0,y:0,z:13}},spoiler:{length:[20,45,0,5],width:[40,40,20,30,0],angle:[0,20,90,90],position:[60,60,80,80,90],texture:[10,11,63],doubleside:true,bump:{position:30,size:18},offset:{x:0,y:0,z:30}},font:{length:[37],width:[40,15],angle:[-10],position:[0,-45],texture:[63],doubleside:true,bump:{position:30,size:10},offset:{x:35,y:-20,z:10}},shields:{doubleside:true,offset:{x:12,y:60,z:-15},length:[0,15,45,20],width:[30,30,65,65,30,30],angle:[30,30,90,150],position:[10,10,0,0,10],texture:[4],bump:{position:0,size:4}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.665,3.563,3.573,2.856,2.359,2.03,2.85,2.741,2.228,1.71,1.404,1.199,1.11,3.408,3.491,3.521,3.44,3.385,3.439,3.481,3.181,2.932,2.962,2.944,2.85,2.244,2.85,2.944,2.962,2.932,3.181,3.481,3.439,3.385,3.44,3.521,3.491,3.408,1.11,1.199,1.404,1.71,2.228,2.741,2.85,2.03,2.359,2.856,3.573,3.563],"lasers":[{"x":0,"y":-2.66,"z":0.28,"angle":0,"damage":[10,16],"rate":10,"type":1,"speed":[170,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.56,"y":-3.5,"z":-0.28,"angle":0,"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.56,"y":-3.5,"z":-0.28,"angle":0,"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.573}')),JSON.stringify(r)})();
var Condor__electricity__604 = (function(){var r=Function('return(function(){var model;return model={name:\'Condor (electricity)\',level:6,model:4,size:1.5,specs:{shield:{capacity:[225,400],reload:[7,10]},generator:{capacity:[70,130],reload:[30,48]},ship:{mass:200,speed:[75,105],rotation:[50,70],acceleration:[80,120]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-110,-95,-100,-100,-45,-40,-25,-23,15,20,55,80,100,90],z:[-10,-9,-8,-7,-6,-4,-2,0,0,0,0,0,0,0]},width:[0,2,5,10,25,27,27,25,25,27,40,35,30,0],height:[0,2,5,10,25,27,27,25,25,27,20,15,10,0],texture:[6,2,3,10,5,63,5,2,5,3,63,11,4],propeller:true,laser:{damage:[30,60],rate:2,type:2,speed:[150,200],number:1,angle:0,error:0}},cannons:{section_segments:12,offset:{x:75,y:30,z:-25},position:{x:[0,0,0,0,0,0,0],y:[-50,-45,-20,0,20,50,55],z:[0,0,0,0,0,0,0]},width:[0,5,10,10,10,10,0],height:[0,5,15,15,10,5,0],angle:0,laser:{damage:[3,6],rate:4,type:1,speed:[100,130],number:1,angle:0,error:0},propeller:false,texture:[6,4,10,4,63,4]},cockpit:{section_segments:12,offset:{x:0,y:-60,z:8},position:{x:[0,0,0,0],y:[-25,-8,20,65],z:[0,0,0,0]},width:[0,10,10,0],height:[0,12,15,5],texture:[9]},electricity:{section_segments:6,offset:{x:10,y:30,z:20},position:{x:[8,8,0,8,0,0,0],y:[-5,-5,5,18,25,25,25],z:[1,1,0,0,0,0,0]},width:[0,1,4,4,4,4,0],height:[0,1,4,4,4,4,0],angle:0,propeller:false,texture:63}},wings:{back:{offset:{x:0,y:25,z:10},length:[90,40],width:[70,50,30],angle:[-30,40],position:[0,20,0],texture:[11,63],doubleside:true,bump:{position:10,size:20}},front:{offset:{x:0,y:55,z:10},length:[90,40],width:[70,50,30],angle:[-30,-40],position:[-60,-20,-20],texture:[11,63],doubleside:true,bump:{position:10,size:10}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.3,3.015,2.45,1.959,1.658,1.477,1.268,1.11,1.148,1.237,2.34,2.448,2.489,3.283,3.363,3.501,3.586,3.333,3.496,3.502,3.154,2.52,3.016,3.132,3.054,3.006,3.054,3.132,3.016,2.52,3.154,3.502,3.496,3.333,3.586,3.501,3.363,3.283,2.49,2.448,2.34,1.237,1.148,1.11,1.268,1.477,1.658,1.959,2.45,3.015],"lasers":[{"x":0,"y":-3.3,"z":0,"angle":0,"damage":[30,60],"rate":2,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.25,"y":-0.6,"z":-0.75,"angle":0,"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.25,"y":-0.6,"z":-0.75,"angle":0,"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.586}')),JSON.stringify(r)})();
var A_Speedster__electricity__605 = (function(){var r=Function('return(function(){var model;return model={name:\'A-Speedster (electricity)\',level:6,model:5,size:1.5,specs:{shield:{capacity:[200,300],reload:[6,8]},generator:{capacity:[80,140],reload:[30,45]},ship:{mass:175,speed:[90,115],rotation:[60,80],acceleration:[90,140]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0],y:[-100,-95,0,0,70,65],z:[0,0,0,0,0,0]},width:[0,10,40,20,20,0],height:[0,5,30,30,15,0],texture:[6,11,5,63,12],propeller:true,laser:{damage:[38,84],rate:1,type:2,speed:[175,230],recoil:50,number:1,error:0}},cockpit:{section_segments:8,offset:{x:0,y:-60,z:15},position:{x:[0,0,0,0,0,0,0],y:[-20,0,20,40,50],z:[-7,-5,0,0,0]},width:[0,10,10,10,0],height:[0,10,15,12,0],texture:[9]},side_propulsors:{section_segments:10,offset:{x:50,y:25,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-20,-15,0,10,20,25,30,40,80,70],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,15,20,20,20,15,15,20,10,0],height:[0,15,20,20,20,15,15,20,10,0],propeller:true,texture:[4,4,2,2,5,63,5,4,12]},cannons:{section_segments:12,offset:{x:30,y:40,z:45},position:{x:[0,0,0,0,0,0,0],y:[-50,-45,-20,0,20,30,40],z:[0,0,0,0,0,0,0]},width:[0,5,7,10,3,5,0],height:[0,5,7,8,3,5,0],angle:-10,laser:{damage:[8,12],rate:2,type:1,speed:[100,130],number:1,angle:-10,error:0},propeller:false,texture:[6,4,10,4,63,4]},electricity:{section_segments:6,offset:{x:50,y:17,z:20},position:{x:[8,8,0,8,0,0,0],y:[-5,-5,5,18,25,25,25],z:[0,0,0,0,0,0,0]},width:[0,1,4,4,4,4,0],height:[0,1,4,4,4,4,0],angle:0,propeller:false,texture:63}},wings:{join:{offset:{x:0,y:0,z:10},length:[40,0],width:[10,20],angle:[-1],position:[0,30],texture:[63],bump:{position:0,size:25}},winglets:{offset:{x:0,y:-40,z:10},doubleside:true,length:[45,10],width:[5,20,30],angle:[50,-10],position:[90,80,50],texture:[4],bump:{position:10,size:30}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}')),JSON.stringify(r)})();
var Rock_Tower__electricity__606 = (function(){var r=Function('return(function(){var model;return model={name:\'Rock-Tower (electricity)\',level:6,model:6,size:2.1,specs:{shield:{capacity:[300,500],reload:[8,11]},generator:{capacity:[75,115],reload:[35,45]},ship:{mass:450,speed:[75,90],rotation:[50,70],acceleration:[80,90]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-90,-85,-70,-60,-20,-25,40,85,70],z:[-10,-8,-5,0,0,0,0,0,0]},width:[0,40,45,10,12,30,30,20,0],height:[0,10,12,8,12,10,25,20,0],texture:[4,63,4,4,4,11,10,12],propeller:true},cockpit:{section_segments:12,offset:{x:0,y:30,z:20},position:{x:[0,0,0,0,0,0,0,0],y:[-30,-20,0,10,20,30],z:[0,0,0,0,0,0]},width:[0,10,15,15,10,5],height:[0,10,15,15,10,5],texture:9,propeller:false},dimeds_banhammer:{section_segments:6,offset:{x:25,y:-70,z:-10},position:{x:[0,0,0,0,0,0],y:[-20,-10,-20,0,10,12],z:[0,0,0,0,0,0]},width:[0,0,5,7,6,0],height:[0,0,5,7,6,0],texture:[6,6,6,10,12],angle:0,laser:{damage:[4,6],rate:8,type:1,speed:[150,230],number:1,error:5}},propulsors:{section_segments:8,offset:{x:30,y:50,z:0},position:{x:[0,0,5,5,0,0,0],y:[-45,-50,-20,0,20,50,40],z:[0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,0],height:[0,15,20,25,20,10,0],texture:[11,2,3,4,5,12],angle:0,propeller:true},electricity:{section_segments:6,offset:{x:31,y:17,z:20},position:{x:[8,8,0,8,0,0,0],y:[-5,-5,5,18,25,25,25],z:[0,0,0,0,0,0,0]},width:[0,1,4,4,4,4,0],height:[0,1,4,4,4,4,0],angle:0,propeller:false,texture:63}},wings:{main:{length:[55,15],width:[60,40,30],angle:[-10,20],position:[30,40,30],texture:63,doubleside:true,offset:{x:0,y:20,z:-5},bump:{position:30,size:20}},finalizer_fins:{length:[20],width:[20,10],angle:[-70],position:[-42,-30],texture:63,doubleside:true,offset:{x:35,y:-35,z:0},bump:{position:0,size:30}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.78,3.758,3.974,3.976,3.946,3.508,1.532,1.64,1.556,1.426,1.347,1.298,1.269,1.764,1.894,2.075,3.269,3.539,3.933,3.989,4.058,4.127,4.524,4.416,3.634,3.577,3.634,4.416,4.524,4.127,4.058,3.989,3.933,3.539,3.269,2.075,1.894,1.764,1.68,1.298,1.347,1.426,1.556,1.64,1.532,3.508,3.946,3.976,3.974,3.758],"lasers":[{"x":1.05,"y":-3.78,"z":-0.42,"angle":0,"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.05,"y":-3.78,"z":-0.42,"angle":0,"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"spread":0,"error":5,"recoil":0}],"radius":4.524}')),JSON.stringify(r)})();
var Barracuda__electricity__607 = (function(){var r=Function('return(function(){var model;return model={name:\'Barracuda (electricity)\',level:6,model:7,size:2.4,specs:{shield:{capacity:[300,400],reload:[8,12]},generator:{capacity:[100,150],reload:[8,14]},ship:{mass:675,speed:[70,90],rotation:[30,45],acceleration:[130,150],dash:{rate:2,burst_speed:[160,200],speed:[120,150],acceleration:[70,70],initial_energy:[50,75],energy:[20,30]}}},bodies:{body:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-90,-100,-60,-10,0,20,50,80,100,90],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,20,25,35,40,40,35,30,0],height:[0,5,40,45,40,60,70,60,30,0],texture:[10,2,10,2,3,13,13,63,12],propeller:true},front:{section_segments:8,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0],y:[-90,-85,-70,-60,-20],z:[0,0,0,0,0]},width:[0,40,45,10,12],height:[0,15,18,8,12],texture:[8,63,4,4,4],propeller:true},propeller:{section_segments:10,offset:{x:40,y:40,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-20,-15,0,10,20,25,30,40,70,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,10,20,15,0],height:[0,10,15,15,15,10,10,18,8,0],texture:[4,4,10,3,3,63,4,63,12],propeller:true},sides:{section_segments:6,angle:90,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-80,-75,-60,-50,-10,10,50,60,75,80],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,30,35,10,12,12,10,35,30,0],height:[0,10,12,8,12,12,8,12,10,0],texture:[4,63,4,4,4,4,4,63,4]},cockpit:{section_segments:12,offset:{x:0,y:-20,z:30},position:{x:[0,0,0,0,0,0,0,0],y:[-50,-20,0,10,30,50],z:[0,0,0,0,0,0]},width:[0,12,18,20,15,0],height:[0,20,22,24,20,0],texture:[9]},electricity:{section_segments:6,offset:{x:10,y:35,z:65},position:{x:[8,8,0,8,0,0,0],y:[-5,-5,5,18,25,25,25],z:[0,0,0,0,0,0,0]},width:[0,1,4,4,4,4,0],height:[0,1,4,4,4,4,0],angle:0,propeller:false,texture:63}},wings:{top:{doubleside:true,offset:{x:0,y:20,z:15},length:[70],width:[70,30],angle:[90],position:[0,30],texture:[63],bump:{position:10,size:30}},top2:{doubleside:true,offset:{x:0,y:51,z:5},length:[70],width:[50,20],angle:[90],position:[0,60],texture:[63],bump:{position:10,size:30}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.28,5.25,5.332,5.393,4.944,1.997,1.745,1.556,1.435,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,3.205,3.571,3.9,5.132,5.888,5.835,5.551,4.886,5.808,4.886,5.551,5.835,5.888,5.132,3.9,3.571,3.205,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,1.435,1.556,1.745,1.997,4.944,5.393,5.332,5.25],"lasers":[],"radius":5.888}')),JSON.stringify(r)})();
var O_Defender__electricity__608 = (function(){var r=Function('return(function(){var model;return model={name:\'O-Defender (electricity)\',level:6,model:8,size:2.2,specs:{shield:{capacity:[400,550],reload:[10,13]},generator:{capacity:[70,100],reload:[25,40]},ship:{mass:500,speed:[70,80],rotation:[30,40],acceleration:[60,80]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0],y:[-90,-88,0,90,91],z:[0,0,0,0,0]},width:[5,6,25,10,20],height:[2,10,40,20,20],texture:[63,1,10],propeller:true,laser:{damage:[35,60],rate:2,type:2,speed:[130,180],number:1,angle:0,error:0}},side:{section_segments:10,offset:{x:50,y:0,z:0},position:{x:[-40,-5,15,25,20,0,-50],y:[-100,-70,-40,-10,20,50,90],z:[0,0,0,0,0,0,0]},width:[5,20,20,20,20,20,5],height:[15,25,30,30,30,25,0],texture:[0,1,2,3,4,63]},cockpit:{section_segments:8,offset:{x:0,y:-60,z:18},position:{x:[0,0,0,0,0,0,0],y:[-10,0,20,30,40],z:[0,0,0,0,0]},width:[0,5,10,10,0],height:[0,5,10,12,0],texture:[9]},top_propulsor:{section_segments:15,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0],y:[80,95,100,90],z:[0,0,0,0]},width:[5,20,10,0],height:[5,15,5,0],propeller:true,texture:[1,63,12]},bottom_propulsor:{section_segments:15,offset:{x:0,y:0,z:-10},position:{x:[0,0,0,0],y:[80,95,100,90],z:[0,0,0,0]},width:[5,20,10,0],height:[5,15,5,0],propeller:true,texture:[1,63,12]},electricity:{section_segments:6,offset:{x:70,y:-20,z:30},position:{x:[8,8,0,8,0,0,0],y:[-5,-5,5,18,25,25,25],z:[0,0,0,0,0,0,0]},width:[0,1,4,4,4,4,0],height:[0,1,4,4,4,4,0],angle:0,propeller:false,texture:63}},wings:{join:{offset:{x:0,y:20,z:0},length:[80,0],width:[130,50],angle:[-1],position:[0,-30],texture:[8],bump:{position:-20,size:15}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.409,4.448,4.372,4.204,4.119,4.136,4.174,4.107,4.066,4.094,4.073,4.141,4.16,4.062,4.015,3.966,3.83,3.76,3.742,3.591,3.502,3.494,3.575,4.291,4.422,4.409,4.422,4.291,3.575,3.494,3.502,3.591,3.742,3.76,3.83,3.966,4.015,4.062,4.16,4.141,4.073,4.094,4.066,4.107,4.174,4.136,4.119,4.204,4.372,4.448],"lasers":[{"x":0,"y":-3.96,"z":0,"angle":0,"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.448}')),JSON.stringify(r)})();




var Negator_608 = (function(){var r=Function('return(function(){var model;return model={name:\'Negator\',level:6,model:8,size:1.8,specs:{shield:{capacity:[275,340],reload:[5,7]},generator:{capacity:[150,350],reload:[30,50]},ship:{mass:225,speed:[100,120],rotation:[70,75],acceleration:[100,115]}},bodies:{main:{section_segments:8,offset:{x:0,y:-30,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-115,-110,-100,-90,-60,-30,45,90,100,120,115],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,25,35,35,35,30,20,0],height:[0,5,10,15,15,20,20,20,20,15,0],texture:[16.9,4,10,13,63,2,3,4,13,17],propeller:true},sides:{section_segments:8,offset:{x:40,y:30,z:0},position:{x:[-5,-5,-5,-3,0,0,0,0,0,0,0,0,0],y:[-80,-75,-70,-50,-40,-10,5,50,60,70,65],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,10,10,10,10,10,10,10,10,10,0],texture:[4,4,1,1,10,2,3,4,63,17],propeller:true},sides1:{section_segments:8,offset:{x:65,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,5,50,60,70,65],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,12,10,0],height:[0,5,10,15,15,15,15,15,15,10,0],texture:[17,4,13,3,1,63,2,1,13,17],propeller:true,laser:{damage:[20,35],rate:3,type:2,speed:[160,180],number:1,angle:0,recoil:50}},sides2:{section_segments:8,offset:{x:25,y:40,z:17},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,5,50,60,70,65],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,5,10,15,15,15,15,15,15,10,0],texture:[17,13,10,1,2,3,4,13,4,17],propeller:true,laser:{damage:[20,35],rate:3,type:2,speed:[160,180],number:1,angle:0,recoil:50}},sides3:{section_segments:8,offset:{x:50,y:70,z:17},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,0,20,40,50,45],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,5,10,15,15,15,15,15,15,10,0],texture:[17,13,63,13,2,1,1,3,63,17],propeller:true,laser:{damage:[20,35],rate:3,type:2,speed:[160,180],number:1,angle:0,recoil:50}},middle:{section_segments:8,offset:{x:0,y:30,z:25},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,0,20,40,50,45],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,0,5,15,15,15,15,15,15,10,0],texture:[17,4,3,2,10,2,3,63,4,17],propeller:true},side:{section_segments:4,offset:{x:27,y:-20,z:0},position:{x:[-7,0,0,0,0,0,0],y:[-40,-15,0,0,0,0,0],z:[0,0,0,0,0,0,0]},width:[3,3,3,3,3,3,3],height:[3,3,3,3,3,3,3],texture:[0,18,2,3,4,17]},cockpit:{section_segments:8,offset:{x:0,y:-110,z:15},position:{x:[0,0,0,0,0,0,0],y:[-10,0,20,50,80,100,120],z:[0,0,0,0,0,0,0]},width:[0,10,15,17,17,15,0],height:[0,5,10,10,10,10,0],texture:[4,9,3,63,2,3]}},wings:{main:{doubleside:true,offset:{x:20,y:45,z:-5},length:[80,10,10,0],width:[70,55,50,40],angle:[0,0,0,0],position:[0,-30,-40,-60,0],texture:[10,63,1,0],bump:{position:20,size:5}},main1:{doubleside:true,offset:{x:50,y:70,z:20},length:[40,10,10,0],width:[60,50,40,30],angle:[10,15,20,0],position:[0,10,20,30,0],texture:[2,63,63,0],bump:{position:20,size:5}},main2:{doubleside:true,offset:{x:20,y:70,z:30},length:[20,10,10,0],width:[40,30,20,10],angle:[50,30,0,0],position:[0,10,20,30,0],texture:[63,4,3,0],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.22,4.805,3.838,3.158,2.722,3.504,3.693,3.693,3.482,3.285,4.5,4.458,4.354,4.324,4.213,4.112,3.939,4.508,5.355,5.691,4.88,4.83,4.774,4.323,4.031,3.246,4.031,4.323,4.774,4.83,4.88,5.691,5.355,4.508,3.939,4.112,4.213,4.324,4.354,4.458,4.5,3.285,3.482,3.693,3.693,3.504,2.722,3.158,3.838,4.805],"lasers":[{"x":2.34,"y":-2.7,"z":0,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":-2.34,"y":-2.7,"z":0,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":0.9,"y":-1.26,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.9,"y":-1.26,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.8,"y":-0.18,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":-1.8,"y":-0.18,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50}],"radius":5.691}')),JSON.stringify(r)})();
var Advanced_Airfly_603 = (function(){var r=Function('return(function(){var model;return model={name:\'Advanced Airfly\',level:6,model:3,size:2,specs:{shield:{capacity:[200,300],reload:[5,7]},generator:{capacity:[200,275],reload:[100,135]},ship:{mass:175,speed:[125,145],rotation:[30,50],acceleration:[100,120]}},bodies:{main:{section_segments:8,offset:{x:0,y:10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-95,-80,-60,-30,0,30,55,75,70],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,15,20,25,25,25,25,20,0],height:[0,15,20,20,20,20,20,15,0],propeller:true,texture:[4,63,3,1,2,3,4,17]},cockpit:{section_segments:12,offset:{x:0,y:0,z:15},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-70,-60,-30,-20,0,15,30,50,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,7,12,15,15,15,15,10,0],height:[0,10,10,10,10,10,10,10,0],propeller:0,texture:[4,9,4,3,2,10,63,4]},side:{section_segments:10,offset:{x:25,y:60,z:0},position:{x:[-10,-10,-2,0,0,0,0,0,0,0],y:[-100,-90,-60,-20,-20,0,10,25,20],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,10,7,0],height:[0,10,10,10,10,10,10,7,0],propeller:true,texture:[4,63,10,1,2,3,4,4],angle:0},reactors:{section_segments:12,offset:{x:55,y:40,z:-10},position:{x:[0,0,0,0,0,0,0,0],y:[-70,-55,-40,-20,10,30,45,40],z:[0,0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,7,0],height:[0,10,10,10,10,10,10,0],propeller:true,texture:[13,2,3,4,10,63,17]},reactors1:{section_segments:8,offset:{x:35,y:30,z:-15},position:{x:[-18,-13,-7,0,0,0,0,0],y:[-150,-135,-100,-70,-30,30,45,40],z:[0,0,0,0,0,0,0,0]},width:[0,10,12,15,15,15,10,0],height:[0,10,15,15,15,15,10,0],propeller:true,texture:[4,63,2,3,4,13,17]},cannon:{section_segments:8,offset:{x:100,y:0,z:-15},position:{x:[0,0,0,-1,-2,-3,-4],y:[-25,-30,-10,10,30,40,50,50],z:[0,0,0,0,0,0,0]},width:[0,5,7,7,7,7,5,0],height:[0,5,5,5,5,5,5,0],angle:5,laser:{damage:[20,30],rate:10,type:1,speed:[160,180],number:1},propeller:0,texture:[17,63,10,2,3,4]},cannon2:{section_segments:8,offset:{x:4,y:-40,z:-10},position:{x:[0,0,0,0,0,0],y:[-40,-50,-40,-20,20,30],z:[0,0,0,0,0,0]},width:[0,3,5,5,5,0],height:[0,5,5,5,5,0],angle:0,laser:{damage:[20,30],rate:10,type:1,speed:[50,75],number:1,error:10},propeller:false,texture:[16.9,10,4,4]}},wings:{main:{length:[60,40,15,0],width:[70,70,50,30],angle:[0,-10,0],position:[20,20,0,-20],texture:[3,11,63],doubleside:true,bump:{position:0,size:5},offset:{x:0,y:15,z:-10}},winglets:{length:[15,10,10,0],width:[30,30,30,20],angle:[10,10,15],position:[0,10,20,35],texture:[3,2,63],doubleside:true,bump:{position:0,size:5},offset:{x:20,y:50,z:3}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.607,4.848,4.685,4.254,3.531,3.094,2.829,2.643,2.464,2.552,4.271,4.645,4.611,4.593,4.527,4.598,4.66,4.022,3.844,3.992,4.208,4.377,3.628,3.575,3.461,3.406,3.461,3.575,3.628,4.377,4.208,3.992,3.844,4.022,4.66,4.598,4.527,4.593,4.611,4.645,4.271,2.552,2.464,2.643,2.829,3.094,3.531,4.254,4.685,4.848],"lasers":[{"x":3.895,"y":-1.195,"z":-0.6,"angle":5,"damage":[20,30],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.895,"y":-1.195,"z":-0.6,"angle":-5,"damage":[20,30],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.16,"y":-3.6,"z":-0.4,"angle":0,"damage":[20,30],"rate":10,"type":1,"speed":[50,75],"number":1,"spread":0,"error":10,"recoil":0},{"x":-0.16,"y":-3.6,"z":-0.4,"angle":0,"damage":[20,30],"rate":10,"type":1,"speed":[50,75],"number":1,"spread":0,"error":10,"recoil":0}],"radius":4.848}')),JSON.stringify(r)})();
var Wylde_602 = (function(){var r=Function('return(function(){var model;return model={name:\'Wylde\',level:6,model:2,size:1.2,specs:{shield:{capacity:[200,275],reload:[7,10]},generator:{capacity:[250,300],reload:[150,175]},ship:{mass:300,speed:[120,150],rotation:[40,50],acceleration:[100,115]}},bodies:{main:{section_segments:12,offset:{x:0,y:10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-240,-215,-150,-130,-100,-60,5,60,90,120,100],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,20,30,40,40,40,40,40,40,30,0],height:[0,20,30,30,30,30,30,30,30,20,0],texture:[63,3,13,63,1,10,2,3,4,17],propeller:true},cannon:{section_segments:8,offset:{x:60,y:40,z:-10},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-140,-120,-100,-80,-60,-30,30,50,70,90,80],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,20,20,25,25,25,20,20,15,0],height:[0,10,20,20,20,20,20,20,20,15,0],texture:[3,4,63,2,3,10,3,4,13,17],propeller:true,laser:{damage:[10,20],rate:6,type:1,speed:[150,180],number:1,error:5}},cannon1:{section_segments:8,offset:{x:40,y:20,z:20},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-160,-160,-140,-100,-60,-30,10,40,60,80,80],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,25,25,25,25,25,20,15,0],height:[0,10,20,20,20,20,20,20,20,15,0],texture:[17,13,63,10,1,2,3,4,63,17],propeller:true,laser:{damage:[10,20],rate:6,type:1,speed:[150,180],number:1,error:5}},cockpit:{section_segments:8,offset:{x:0,y:-150,z:30},position:{x:[0,0,0,0,0,0,0,0],y:[-50,-40,0,30,90,140,180,200],z:[-10,-10,-4,-2,0,0,0,0]},width:[0,10,15,20,20,20,20,0],height:[0,15,15,15,15,15,15,0],texture:[4,9,63,10,2,3,4]}},wings:{main:{doubleside:true,offset:{x:20,y:-10,z:0},length:[85,40,20,0,0],width:[120,90,70,50],angle:[-10,0,0,0],position:[0,40,70,90],texture:[3,4,63],bump:{position:20,size:1}},main1:{doubleside:true,offset:{x:25,y:20,z:30},length:[50,20,0,0,0],width:[70,50,30,0],angle:[20,10,0,0],position:[0,50,80,0],texture:[3,63],bump:{position:20,size:1}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.52,5.122,3.644,3.568,3.122,2.754,2.581,2.464,2.372,2.189,2.242,2.548,2.844,3.282,3.793,4.223,4.478,4.668,3.052,3.451,3.53,3.602,3.448,3.202,3.176,3.126,3.176,3.202,3.448,3.602,3.53,3.451,3.052,4.668,4.478,4.223,3.793,3.282,2.844,2.548,2.242,2.189,2.372,2.464,2.581,2.754,3.122,3.568,3.644,5.122],"lasers":[{"x":1.44,"y":-2.4,"z":-0.24,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.44,"y":-2.4,"z":-0.24,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":0.96,"y":-3.36,"z":0.48,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-0.96,"y":-3.36,"z":0.48,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0}],"radius":5.52}')),JSON.stringify(r)})();





this.options = {
  root_mode: " ",
  map_size: 30,
  
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
    { type: "text",position:[5,50,90,40],value:"Blood stealer",color:"#CDE"}
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


this.tick = function(game) {
  if (game.step % 15 === 0) {
    for (let ship of game.ships) {
      if (ship.custom.FirstSpawn !== true) {
        ship.custom.FirstSpawn = true;
        ship.custom.lmfao = true;
        ship.custom.secondsToHavePower = 60;
        actualize_seconds(ship, ship.custom.secondsToHavePower + "s", "#AD1414");
        ship.custom.usedPower = true;
        echo(ship.name + " joined");
        ship.custom.power = "none";
        ship.setUIComponent(powerPerShip);
        ship.custom.petrificationCount = 0;
        ship.custom.petrified = false;
        ship.custom.bruh = false;
        ship.custom.batteries = 0;
        actualizationOfBatteryBox(ship, "#5F5F5F", "#838383", "#BABABA");
        ship.custom.healingEnabled = false;
        ship.custom.heal=0;
      }
    }
  }
  if (game.step % 60 === 0) {
    for (let ship of game.ships) {
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
          }else if (ship.custom.heal === 0) {
            stopHealing(ship);
            ship.custom.healingEnabled = false;
          }
        }
      if (ship.custom.usedPower === true) {
        if (ship.custom.secondsToHavePower >= 1) {
          ship.custom.secondsToHavePower--;
          actualize_seconds(ship, ship.custom.secondsToHavePower + "s", "#AD1414");
        } else if (ship.custom.secondsToHavePower === 0) {
          ship.custom.secondsToHavePower = 0;
          ship.custom.usedPower = false;
          actualize_seconds(ship, ship.custom.secondsToHavePower + "s", "#339005");
        }
      }
    }
  }
  if (game.step % 20 === 0) {
    game.addCollectible({
      x:0,y:0, code:42
    })
  } 
};


var stopHealing = function(ship) {
  ship.set({healing:false});
};

var count = false;
var countSeconds = 5;
var petrificationCount = 0;
var space = "\n"
var powerAction = function(ship) {
  var teleportationInfos = {
    teleportedPlayer: `You teleported yourself randomly on the map!`,
    teleportedOthers: ``,
    actionDelay: 0
  };
  var petrificationInfos = {
    petrificator: `You froze ${game.ships.length - 1} ships for ${ship.custom.batteries} seconds!`,
    petrificatedOthers: `${ship.name} froze you and ${game.ships.length - 2 } others for ${ship.custom.batteries} seconds!`,
    actionDelay: 2
  };
  var eletricityInfos = {
    electricityPlayer: `${game.ships.length - 1} players will lose ${
      ((Math.trunc(ship.type / 100) * 10)/2)*ship.custom.batteries} of shield every second for 2 seconds!`,
    electricitedPlayers: `You and ${game.ships.length - 2} players will lose ${
       ((Math.trunc(ship.type / 100) * 10)/2)*ship.custom.batteries} shield!`,
    actionDelay: 2
  };
  var healerInfos = {
    healer: `You're healer for ${ship.custom.batteries} seconds!`
  }; 
  var bodyguardInfos = {
    boyguarded: `${ship.custom.batteries} appear to protect you!`
  };
  var bloodStealerInfos = {
    bloodstealer: `${game.ships.length - 1} lost ${
      Math.trunc(((Math.trunc(ship.tier/100)*5) * ship.custom.batteries) / (game.ships.length - 1) )
      
    } and you gained ${(Math.trunc(ship.tier/100)*5) * ship.custom.batteries} but lost ${
      (Math.trunc(ship.tier/100)*5) * ship.custom.batteries} crystals!`,
    bloodstealed: `You and ${game.ships.length - 2} lost ${
    Math.trunc(((Math.trunc(ship.tier/100)*5) * ship.custom.batteries) / (game.ships.length - 1) )
    } of shield`
  };
  if (ship.custom.power === "petrification") {
    for (let i = 0; i < game.ships.length; i++) {
      if (game.ships[i].id !== ship.id) {
        game.ships[i].instructorSays(space + petrificationInfos.petrificatedOthers);
        game.ships[i].set({idle:true});
        game.ships[i].custom.petrificationCount=ship.custom.batteries;
        game.ships[i].custom.petrified=true;
        game.ships[i].setUIComponent(explanationOK);
      } else if (game.ships[i].id === ship.id) {
        game.ships[i].instructorSays(space + petrificationInfos.petrificator );
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
    var count = true;
  }
  if (ship.custom.power === "electricity") {
    for (let c = 0; c < game.ships.length; c++) {
      if (game.ships[c].id !== ship.id) {
        game.ships[c].instructorSays(space + eletricityInfos.electricitedPlayers);
        game.ships[c].set({shield:game.ships[c].shield - ((Math.trunc(ship.type / 100) * 10)/2)*2});
        game.ships[c].setUIComponent(explanationOK);
      } else if (game.ships[c].id === ship.id) {
        game.ships[c].instructorSays(space + eletricityInfos.electricityPlayer );
        game.ships[c].setUIComponent(explanationOK);
      }
    }
    var count = true;
  }
  if (ship.custom.power === "healer") {
    ship.instructorSays(space + healerInfos.healer);
    ship.setUIComponent(explanationOK);
    ship.set({healing:true});
    ship.custom.heal = ship.custom.batteries;
    ship.custom.healingEnabled=true;
  };
  if (ship.custom.power === "bodyguard") {
    ship.instructorSays(space + bodyguardInfos.boyguarded);
    ship.setUIComponent(explanationOK);
    for (let z=0;z<ship.custom.batteries;z++) {
      game.addAlien({
        x: ship.x + z,
        y: ship.y - z,
        crystal_drop: 0,
        code: 16,
        level:0,
        points: 0
      });
    };
  };
  if (ship.custom.power === "bloodStealer") {
    for (let g = 0; g < game.ships.length; g++) {
      if (game.ships[g].id !== ship.id) {
        game.ships[g].instructorSays(space + bloodStealerInfos.bloodstealed);
        game.ships[g].set({
          shield:
            game.ships[g].shield - Math.trunc(((Math.trunc(ship.tier/100)*5) * ship.custom.batteries) / (game.ships.length - 1) )});
        game.ships[g].setUIComponent(explanationOK);
      } else if (game.ships[g].id === ship.id) {
        game.ships[g].instructorSays(space + bloodStealerInfos.bloodstealer );
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
  batteryBox.components[3].fill = OneBattery;
  batteryBox.components[2].fill = TwoBatteries;
  batteryBox.components[1].fill = ThreeBatteries;
  ship.setUIComponent(batteryBox);
};


this.event = function(event,game) {
  switch (event.name) {
    case "ui_component_clicked":
      var ship = event.ship ;
      var component = event.id ;
      if (component == "learrnMorePetrificationPath") {
        ship.instructorSays(space+`
        Petrification: freeze your ennemies for ${ship.custom.batteries} seconds
        `);
        ship.setUIComponent(explanationOK);
      }
      if (component == "learnMoreElectricityPath") {
        ship.instructorSays(space+`
          Electricity: damage every players of ${
          ((Math.trunc(ship.type / 100) * 10)/2)*ship.custom.batteries
          } shields
        `);
        ship.setUIComponent(explanationOK);
      }
      if (component == "leanMoreTeleportationPath") {
        ship.instructorSays(space+`
          Teleportation: teleport yourself randomly the map and gain ${ship.custom.batteries} seconds of
          invulnerability
        `);
        ship.setUIComponent(explanationOK);
      }
      if (component == "learnMorehealerPath") {
        ship.instructorSays(space+`
        Healer: gain the ability to heal for ${ship.custom.batteries} seconds
        `);
        ship.setUIComponent(explanationOK);
      }
      if (component == "learnMorebodyguardPath") {
        ship.instructorSays(space+`
          Bodyguarded: summon ${ship.custom.batteries} piranhas
        `);
        ship.setUIComponent(explanationOK);
      }
      if (component == "learnMorebloodStealerPath") {
        ship.instructorSays(space+`
          Blood stealer: damage every ships of ${
              Math.trunc(((Math.trunc(ship.tier/100)*5) * ship.custom.batteries) / (game.ships.length - 1) )
            } shields, gain ${(Math.trunc(ship.tier/100)*5) * ship.custom.batteries} of shield but lose
            ${(Math.trunc(ship.tier/100)*5) * ship.custom.batteries} crystals.
        `);
        ship.setUIComponent(explanationOK);
      }
    if (component == "explanationOK") {
        ship.hideInstructor();
        ship.setUIComponent({id:'explanationOK', visible:false})
      }
      
      if (component == "petrificationPowerPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = 60;
          ship.custom.usedPower = true;
          ship.custom.power = "petrification";
          powerAction(ship);
        }
      }
      if (component == "eletricPowerPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = 60;
          ship.custom.usedPower = true;
          ship.custom.power = "electricity";
          powerAction(ship);
        }
      }
      if (component == "teleportationPowerPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = 60;
          ship.custom.usedPower = true;
          ship.custom.power = "teleportation";
          powerAction(ship);
        }
      }
      if (component == "healerPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = 60;
          ship.custom.usedPower = true;
          ship.custom.power = "healer";
          powerAction(ship);
        }
      }
      if (component == "bodyguardPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = 60;
          ship.custom.usedPower = true;
          ship.custom.power = "bodyguard";
          powerAction(ship);
        }
      }
      if (component == "bloodStealerPath" ) {
        if (ship.custom.secondsToHavePower <= 0 && ship.custom.batteries >= 0 && ship.custom.batteries <= 3) {
          hideComponents(ship);
          ship.custom.secondsToHavePower = 60;
          ship.custom.usedPower = true;
          ship.custom.power = "bloodStealer";
          powerAction(ship);
        }
      }
      if (component === "powerPerShip") {
        if (ship.custom.secondsToHavePower <= 0) {
          if (ship.custom.lmfao === false) {
            showComponents(ship);
            ship.custom.lmfao = true;
          } else if (ship.custom.lmfao === true) {
            hideComponents(ship);
            ship.custom.lmfao = false;
          }
        }
      }
      
      break;
    case "collectible_picked":
      var ship = event.ship;
      if (ship != null) {
        ship.emptyWeapons();
        BatteryPicked(ship);
      }
  }
} ;

/*

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
  crystal_value: /*crystal_value[~~(Math.random()*crystal_value.length)]50,
  map_size: 50,
  reset_tree:true, 
  crystal_drop: 1.1,
  starting_ship: 800,
  starting_ship_maxed: true,
  boucing_lasers: false,
  vocabulary: mod_vocabulary,
  max_players: 60,
  release_crystal:true,
  weapons_store: false,
  friendly_colors:2,
  hues:[120,240],
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








var lol = [11,42];
var kek = [0,1];








var invulnerable = function(ship) {
  ship.set({invulnerable: 100});
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
  if (game.step % 15 == 0) {
    for (let ship of game.ships) {
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
        ship.setUIComponent(batteryBox);
        actualize_seconds(ship, ship.custom.secondsToHavePower + "s", "#AD1414");
        echo(ship.name + " joined");
        ship.setUIComponent(powerPerShip);
        actualizationOfBatteryBox(ship, "#5F5F5F", "#838383", "#BABABA");
        ship.custom.HiddenIN = 10;
        ship.custom.HiddenInStart = false;
        }
    }
    game.addCollectible({x:0,y:0})
  }
  if (game.step % 60 == 0 ) {
      for (let ship of game.ships) { 
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
      if (ship.custom.HiddenInStart === true) {
      ship.setUIComponent(nextShip);
        if (ship.custom.HiddenIN >= 1) {
          ship.custom.HiddenIN--;
          actualiaznexShipHiddenIn(ship, `${ship.custom.HiddenIN}`);
        } else {
          ship.custom.HiddenInStart = false;
          ship.custom.HiddenIN = 10;
          ship.setUIComponent({id:"nextShip",visible:false});
          ship.setUIComponent({id:"nextShipWillBeHiddenIn",visible:false});
          iidleFalse(ship);
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
  var min = 110 * 5;
  var max = -110 * 5;
  if (ship.x + 30 > 550) {
    ship.custom.Calcul = 550 - (game.ships[i].x + 30);
    ship.custom.FirstX = min - ship.custom.Calcul;
  } else {
    ship.custom.FirstX = ship.x;
  }
  if (ship.x - 30 < -550) {
    ship.custom.Calcul = -550 - (game.ships[i].x - 30);
    ship.custom.SecondX = max - ship.custom.Calcul;
  } else {
    ship.custom.SecondX = ship.x;
  }
  if (ship.y + 30 > 550) {
    ship.custom.Calcul = 550 - (game.ships[i].y + 30);
    ship.custom.FirstY = min - ship.custom.Calcul;
  } else {
    ship.custom.FirstY = ship.y;
  }
  if (ship.y - 30 < -550) {
    ship.custom.Calcul = -550 - (game.ships[i].x - 30);
    ship.custom.SecondY = max - ship.custom.Calcul;
  } else {
    ship.custom.SecondY = ship.y;
  }
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
    var randomNumbers = [1,2,3,4,5]
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
      
    break;
    case "collectible_picked":
      if (ship != null) {
        ship.emptyWeapons();
        BatteryPicked(ship);
      }
  }
};
*/
