/*
* Special thanks to: Megalodon, Serendibite, Endersult, Nova for their ships!
    Endersult, Nova, Megalodon, Serendibite made one ship for this mod.
    Wolfan made 9 ships for this made.
* Mod made by Wolfan, idea by Wolfan.
* Thanks to Glitch for his help and suggestions.
* Thanks to Lotus and Bhpsngum, who are always here to help me.
*/



const seconds_beifre_hiding = 20;
var points = 25000; //25K
const alien_shield = 20000;
const point_per_kills = 500;
const points_per_boss = 3500;








var s={};
//Tier 1
s.Vewlar_101 = (function(){var r=Function('return(function(){var model;return model={name:\'Vewlar\',level:1,model:1,size:1,specs:{shield:{capacity:[110,130],reload:[5,7]},generator:{capacity:[40,60],reload:[22,35]},ship:{mass:175,speed:[100,110],rotation:[50,60],acceleration:[100,115]}},bodies:{hands:{section_segments:12,offset:{x:30,y:0,z:-20},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-120,-85,-80,-50,-30,0,40,45,50,70,70],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,15,15,20,20,20,20,20,20,15,0,0],height:[0,15,15,15,15,15,15,15,15,15,0,0],texture:[63,1,1,2,2,3,3,4,63],propeller:true},uphands:{section_segments:8,offset:{x:30,y:0,z:0},position:{x:[-8,-5,0,0,0,0,0,0,0,0,0,0],y:[-75,-55,-40,-10,-5,0,25,40,60,95,95],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,10,10,9,7,0,0],height:[0,10,10,10,10,10,10,10,9,7,0,0],texture:[10,1,2,3,3,3,3,63,4],propeller:true},sides:{section_segments:12,offset:{x:50,y:-20,z:-20},position:{x:[-8,-8,-6,-2,0,0,0,0,0,-3,-3],y:[0,-90,-80,-50,-30,0,40,50,65,90,90],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,0,7,7,7,7,7,7,7,7,7,0],height:[0,0,15,20,20,20,20,20,20,15,0,0],texture:[4,4,3,2,63,63,2,3,4],propeller:false},main1:{section_segments:8,offset:{x:0,y:30,z:5},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-180,-150,-150,-70,-40,0,10,30,50,45],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,20,20,30,30,30,30,25,20,0,0],height:[0,20,20,20,20,20,20,20,20,0,0],texture:[63,13,3,2,2,3,3,13,17],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0,0,0,0],y:[-60,-30,20,40,50],z:[0,0,0,0,0,0,0]},width:[0,15,17,15,5],height:[0,10,10,10,5],texture:[4,9,63,63,0]},cannons:{section_segments:8,offset:{x:30,y:-100,z:-20},position:{x:[0,0,0,0],y:[-20,-15,20,30],z:[0,0,0,0]},width:[3,5,5,3],height:[3,5,5,3],texture:[6,10,5],laser:{damage:[10,12],rate:3,type:2,speed:[200,250],number:1,error:0,recoil:7}}},wings:{main:{length:[80,10,0],width:[100,70,40],angle:[10,0,0],position:[0,50,75,0],texture:[11,4],bump:{position:30,size:1},offset:{x:-15,y:-20,z:-25}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3,2.742,2.489,2.355,2.273,1.98,1.735,1.555,1.408,1.299,1.225,1.208,1.3,1.352,1.435,1.548,1.681,1.822,2.02,2.101,1.768,1.775,2.039,1.998,1.629,1.603,1.629,1.998,2.039,1.775,1.768,2.101,2.02,1.822,1.681,1.548,1.435,1.352,1.3,1.208,1.225,1.299,1.408,1.555,1.735,1.98,2.273,2.355,2.489,2.742],"lasers":[{"x":0.6,"y":-2.4,"z":-0.4,"angle":0,"damage":[10,12],"rate":3,"type":2,"speed":[200,250],"number":1,"spread":0,"error":0,"recoil":7},{"x":-0.6,"y":-2.4,"z":-0.4,"angle":0,"damage":[10,12],"rate":3,"type":2,"speed":[200,250],"number":1,"spread":0,"error":0,"recoil":7}],"radius":3}')),JSON.stringify(r)})();

s.Inferno_601 = '{"name":"Inferno","level":6,"model":1,"size":2.7,"specs":{"shield":{"capacity":[300,375],"reload":[4,7]},"generator":{"capacity":[175,250],"reload":[30,40]},"ship":{"mass":350,"speed":[70,100],"rotation":[65,90],"acceleration":[100,130]}},"bodies":{"reactors":{"section_segments":40,"vertical":true,"offset":{"x":30,"y":10,"z":-43},"position":{"x":[0,0,0,0],"y":[-10,1,3,3],"z":[0,0,0,0]},"width":[7,7,6,0],"height":[10,10,9,0],"texture":[4,3,17]},"big_reactor":{"section_segments":40,"vertical":true,"offset":{"x":0,"y":14,"z":-20},"position":{"x":[0,0,0,0],"y":[-10,1,3,3],"z":[0,0,0,0]},"width":[8.4,8.4,7.199999999999999,0],"height":[12,12,10.799999999999999,0],"texture":[4,3,17]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-33,"z":7},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,-9.5,-5,2.5,5,7.5,10],"z":[0,0,0,0,0,0,0]},"width":[0,2.4000000000000004,3.2,3.6,3.6,3.2,0],"height":[0,2.6999999999999997,3,3.3,3.3,3,0],"texture":[4,9,9,4]},"side_guards1":{"section_segments":12,"offset":{"x":30,"y":-5,"z":7},"position":{"x":[28,30,30,27,20,2,-5],"y":[-50,-45,-15,15,40,60,65],"z":[-7,-5,0,0,0,-4,-7]},"width":[0,3,5,6,7,8,0],"height":[0,4.199999999999999,7,8.399999999999999,7.699999999999999,6.3,0],"texture":[63,3,18,4,10,3]},"side_guards2":{"section_segments":12,"offset":{"x":30,"y":-5,"z":-7},"position":{"x":[28,30,30,27,20,2,-5],"y":[-50,-45,-15,15,40,60,65],"z":[7,5,0,0,0,4,7]},"width":[0,3,5,6,7,8,0],"height":[0,4.199999999999999,7,8.399999999999999,7.699999999999999,6.3,0],"texture":[63,3,18,4,10,3]},"side_guards3":{"section_segments":12,"offset":{"x":34,"y":-4,"z":0},"position":{"x":[27,29,31,28,20,0,-5],"y":[-45,-45,-15,15,42,62,65],"z":[0,0,0,0,0,0,0]},"width":[0,2.0999999999999996,3.5,4.199999999999999,4.8999999999999995,5.6,0],"height":[0,1.7999999999999998,3,3.5999999999999996,3.3,2.6999999999999997,0],"texture":[4,63,4,63,4]},"guns":{"section_segments":12,"offset":{"x":40,"y":-20,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-110,-104,-96,-90,-84,20,22,30,50,60,63],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,11,11,11,10,10,13,15,15,13,0],"height":[0,10,11,11,11,10,10,13,15,15,13,0],"texture":[17,4,63,4,2,3,4,13,8,63,4],"laser":{"number":1,"damage":[70,100],"rate":8,"speed":[180,260],"angle":0,"error":0,"recoil":250}},"turbines":{"section_segments":8,"offset":{"x":18,"y":35,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-50,-46,-51,-48,-40,-20,10,20,25,15],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,6,9,12,13,14,13,11,10,0],"height":[0,6,9,12,13,14,13,11,10,0],"texture":[3,17,4,3,18,10,63,13,17],"propeller":true},"center":{"section_segments":8,"offset":{"x":0,"y":-10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-45,-35,-20,-5,5,15,45,60,70,75,70],"z":[0,0,0,6,6,8,8,3,0,0,0]},"width":[0,6,8,10,11,11,10,8,6,4,0],"height":[0,8,8,8,8,8,8,10,8,6,6,0],"texture":[3,8,10,18,63,4,11,3,13,17],"propeller":true},"center_borders":{"section_segments":8,"offset":{"x":10,"y":-10,"z":11},"position":{"x":[-10,-10,-7,-5,0,0,-4,-4],"y":[-45,-45,-35,-20,5,45,70,70],"z":[-12,-12,-9,-9,-1,-1,-7,-7]},"width":[0,1,3,3,3,3,2,0],"height":[0,1,3,3,3,3,3,0],"texture":[63,63,63,4,17]},"gun_topping_1":{"section_segments":8,"offset":{"x":40,"y":-20,"z":7.8},"position":{"x":[0,0,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,0,0],"y":[-85,-85,-82.5,-80,-77.5,-75,-72.5,-70,-67.5,-65,-62.5,-60,-57.5,-55,-52.5,-50,-47.5,-45,-42.5,-40,-37.5,-35,-32.5,-30,-27.5,-25,-22.5,-20,-17.5,-15,-12.5,-10,-7.5,-5,-2.5,0,2.5,5,7.5,10,12.5,15,17.5,20,20],"z":[0,0,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,0,0]},"width":[0,3,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,3,0],"height":[0,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],"texture":[4,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4]},"gun_topping_2":{"section_segments":8,"offset":{"x":40,"y":-20,"z":7.8},"position":{"x":[0,0,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,-3,-5,-5,-3,0,3,5,5,3,0,0,0],"y":[-80,-85,-82.5,-80,-77.5,-75,-72.5,-70,-67.5,-65,-62.5,-60,-57.5,-55,-52.5,-50,-47.5,-45,-42.5,-40,-37.5,-35,-32.5,-30,-27.5,-25,-22.5,-20,-17.5,-15,-12.5,-10,-7.5,-5,-2.5,0,2.5,5,7.5,10,12.5,15,17.5,20,20],"z":[0,0,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,-1,-1.7,-1.7,-1,0,0,0]},"width":[0,3,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,2.5,2,2,2.5,3,3,0],"height":[0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],"texture":[4,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4,4,17,4,17,4]},"emitter0":{"section_segments":20,"vertical":true,"offset":{"x":40,"y":5,"z":8.5},"position":{"x":[0,0,0,0,0,0],"y":[-1,5.4,5.5,5.3,5.7,6],"z":[0,0,0,0,0,0]},"width":[3,2.9,2.4,2.3,1.2,0],"height":[3,2.9,2.4,2.3,1.2,0],"texture":[4,3,2,17,13]},"emitter1":{"section_segments":20,"vertical":true,"offset":{"x":40,"y":5,"z":21},"position":{"x":[0,0,0,0,0,0],"y":[-1,5.4,5.5,5.3,5.7,6],"z":[0,0,0,0,0,0]},"width":[3,2.9,2.4,2.3,1.2,0],"height":[3,2.9,2.4,2.3,1.2,0],"texture":[4,3,2,17,13]},"emitter2":{"section_segments":20,"vertical":true,"offset":{"x":40,"y":5,"z":33.5},"position":{"x":[0,0,0,0,0,0],"y":[-1,5.4,5.5,5.3,5.7,6],"z":[0,0,0,0,0,0]},"width":[3,2.9,2.4,2.3,1.2,0],"height":[3,2.9,2.4,2.3,1.2,0],"texture":[4,3,2,17,13]},"emitter3":{"section_segments":20,"vertical":true,"offset":{"x":40,"y":5,"z":46},"position":{"x":[0,0,0,0,0,0],"y":[-1,5.4,5.5,5.3,5.7,6],"z":[0,0,0,0,0,0]},"width":[3,2.9,2.4,2.3,1.2,0],"height":[3,2.9,2.4,2.3,1.2,0],"texture":[4,3,2,17,13]},"emitter4":{"section_segments":20,"vertical":true,"offset":{"x":40,"y":5,"z":58.5},"position":{"x":[0,0,0,0,0,0],"y":[-1,5.4,5.5,5.3,5.7,6],"z":[0,0,0,0,0,0]},"width":[3,2.9,2.4,2.3,1.2,0],"height":[3,2.9,2.4,2.3,1.2,0],"texture":[4,3,2,17,13]},"emitter5":{"section_segments":20,"vertical":true,"offset":{"x":40,"y":5,"z":71},"position":{"x":[0,0,0,0,0,0],"y":[-1,5.4,5.5,5.3,5.7,6],"z":[0,0,0,0,0,0]},"width":[3,2.9,2.4,2.3,1.2,0],"height":[3,2.9,2.4,2.3,1.2,0],"texture":[4,3,2,17,13]},"emitter6":{"section_segments":20,"vertical":true,"offset":{"x":40,"y":5,"z":83.5},"position":{"x":[0,0,0,0,0,0],"y":[-1,5.4,5.5,5.3,5.7,6],"z":[0,0,0,0,0,0]},"width":[3,2.9,2.4,2.3,1.2,0],"height":[3,2.9,2.4,2.3,1.2,0],"texture":[4,3,2,17,13]},"emitter7":{"section_segments":20,"vertical":true,"offset":{"x":40,"y":5,"z":96},"position":{"x":[0,0,0,0,0,0],"y":[-1,5.4,5.5,5.3,5.7,6],"z":[0,0,0,0,0,0]},"width":[3,2.9,2.4,2.3,1.2,0],"height":[3,2.9,2.4,2.3,1.2,0],"texture":[4,3,2,17,13]}},"wings":{"armor_gun_connection":{"offset":{"x":50,"y":-5,"z":0},"length":[8],"position":[0,-22],"width":[20,30],"angle":[0],"texture":[2],"bump":{"position":5,"size":10}},"gun_fin":{"offset":{"x":39,"y":25,"z":15},"doubleside":true,"length":[20],"position":[0,20],"width":[29,15],"angle":[20],"texture":[63],"bump":{"position":5,"size":0}},"gun_fin2":{"offset":{"x":39,"y":12.5,"z":14},"doubleside":true,"length":[20],"position":[0,22],"width":[10,7],"angle":[20],"texture":[3],"bump":{"position":5,"size":0}},"front_fin1":{"offset":{"x":50,"y":-120,"z":0},"doubleside":true,"length":[10],"position":[0,-10],"width":[20,10],"angle":[0],"texture":[63],"bump":{"position":5,"size":10}},"front_fin2":{"offset":{"x":-30,"y":-120,"z":0},"doubleside":true,"length":[10],"position":[0,-10],"width":[20,10],"angle":[0],"texture":[63],"bump":{"position":5,"size":10}}},"typespec":{"name":"Inferno","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[300,375],"reload":[4,7]},"generator":{"capacity":[175,250],"reload":[30,40]},"ship":{"mass":350,"speed":[70,100],"rotation":[65,90],"acceleration":[100,130]}},"shape":[2.97,7.37,7.381,7.978,7.609,5.003,4.317,4.4,4.351,4.095,3.923,3.812,3.684,3.62,3.624,3.628,3.708,3.853,4.216,3.74,3.792,3.751,3.575,3.407,3.506,3.517,3.506,3.407,3.575,3.751,3.792,3.74,4.216,3.853,3.708,3.628,3.624,3.62,3.684,3.812,3.923,4.095,4.351,4.4,4.317,5.003,7.609,7.978,7.381,7.37],"lasers":[{"x":2.16,"y":-7.02,"z":0,"angle":0,"damage":[70,100],"rate":8,"speed":[180,260],"number":1,"spread":0,"error":0,"recoil":250},{"x":-2.16,"y":-7.02,"z":0,"angle":0,"damage":[70,100],"rate":8,"speed":[180,260],"number":1,"spread":0,"error":0,"recoil":250}],"radius":7.978}}';
s.Wylde_602 = '{"name":"Wylde","level":6,"model":2,"size":1.2,"specs":{"shield":{"capacity":[200,275],"reload":[7,10]},"generator":{"capacity":[150,200],"reload":[70,90]},"ship":{"mass":240,"speed":[100,130],"rotation":[40,50],"acceleration":[100,115]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-240,-215,-150,-130,-100,-60,5,60,90,120,100],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,30,40,40,40,40,40,40,30,0],"height":[0,20,30,30,30,30,30,30,30,20,0],"texture":[63,3,13,63,1,10,2,3,4,17],"propeller":true},"cannon":{"section_segments":8,"offset":{"x":60,"y":40,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-140,-120,-100,-80,-60,-30,30,50,70,90,80],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,20,20,25,25,25,20,20,15,0],"height":[0,10,20,20,20,20,20,20,20,15,0],"texture":[3,4,63,2,3,10,3,4,13,17],"propeller":true,"laser":{"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"error":5}},"cannon1":{"section_segments":8,"offset":{"x":40,"y":20,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-160,-160,-140,-100,-60,-30,10,40,60,80,80],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,25,25,25,25,25,20,15,0],"height":[0,10,20,20,20,20,20,20,20,15,0],"texture":[17,13,63,10,1,2,3,4,63,17],"propeller":true,"laser":{"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"error":5}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-150,"z":30},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-40,0,30,90,140,180,200],"z":[-10,-10,-4,-2,0,0,0,0]},"width":[0,10,15,20,20,20,20,0],"height":[0,15,15,15,15,15,15,0],"texture":[4,9,63,10,2,3,4]}},"wings":{"main":{"doubleside":true,"offset":{"x":20,"y":-10,"z":0},"length":[85,40,20,0,0],"width":[120,90,70,50],"angle":[-10,0,0,0],"position":[0,40,70,90],"texture":[3,4,63],"bump":{"position":20,"size":1}},"main1":{"doubleside":true,"offset":{"x":25,"y":20,"z":30},"length":[50,20,0,0,0],"width":[70,50,30,0],"angle":[20,10,0,0],"position":[0,50,80,0],"texture":[3,63],"bump":{"position":20,"size":1}}},"typespec":{"name":"Wylde","level":6,"model":2,"code":602,"specs":{"shield":{"capacity":[200,275],"reload":[7,10]},"generator":{"capacity":[150,200],"reload":[70,90]},"ship":{"mass":240,"speed":[100,130],"rotation":[40,50],"acceleration":[100,115]}},"shape":[5.52,5.122,3.644,3.568,3.122,2.754,2.581,2.464,2.372,2.189,2.242,2.548,2.844,3.282,3.793,4.223,4.478,4.668,3.052,3.451,3.53,3.602,3.448,3.202,3.176,3.126,3.176,3.202,3.448,3.602,3.53,3.451,3.052,4.668,4.478,4.223,3.793,3.282,2.844,2.548,2.242,2.189,2.372,2.464,2.581,2.754,3.122,3.568,3.644,5.122],"lasers":[{"x":1.44,"y":-2.4,"z":-0.24,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.44,"y":-2.4,"z":-0.24,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":0.96,"y":-3.36,"z":0.48,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-0.96,"y":-3.36,"z":0.48,"angle":0,"damage":[10,20],"rate":6,"type":1,"speed":[150,180],"number":1,"spread":0,"error":5,"recoil":0}],"radius":5.52}}';
s.Advanced_Airfly_603 = '{"name":"Advanced Airfly","level":6,"model":3,"size":2,"specs":{"shield":{"capacity":[200,300],"reload":[5,7]},"generator":{"capacity":[200,250],"reload":[100,135]},"ship":{"mass":175,"speed":[65,95],"rotation":[30,50],"acceleration":[80,105]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-95,-80,-60,-30,0,30,55,75,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,25,25,25,25,20,0],"height":[0,15,20,20,20,20,20,15,0],"propeller":true,"texture":[4,63,3,1,2,3,4,17]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":0,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-70,-60,-30,-20,0,15,30,50,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,7,12,15,15,15,15,10,0],"height":[0,10,10,10,10,10,10,10,0],"propeller":0,"texture":[4,9,4,3,2,10,63,4]},"side":{"section_segments":10,"offset":{"x":25,"y":60,"z":0},"position":{"x":[-10,-10,-2,0,0,0,0,0,0,0],"y":[-100,-90,-60,-20,-20,0,10,25,20],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,10,10,10,10,10,7,0],"height":[0,10,10,10,10,10,10,7,0],"propeller":true,"texture":[4,63,10,1,2,3,4,4],"angle":0},"reactors":{"section_segments":12,"offset":{"x":55,"y":40,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-70,-55,-40,-20,10,30,45,40],"z":[0,0,0,0,0,0,0,0]},"width":[0,10,10,10,10,10,7,0],"height":[0,10,10,10,10,10,10,0],"propeller":true,"texture":[13,2,3,4,10,63,17]},"reactors1":{"section_segments":8,"offset":{"x":35,"y":30,"z":-15},"position":{"x":[-18,-13,-7,0,0,0,0,0],"y":[-150,-135,-100,-70,-30,30,45,40],"z":[0,0,0,0,0,0,0,0]},"width":[0,10,12,15,15,15,10,0],"height":[0,10,15,15,15,15,10,0],"propeller":true,"texture":[4,63,2,3,4,13,17]},"cannon":{"section_segments":8,"offset":{"x":100,"y":0,"z":-15},"position":{"x":[0,0,0,-1,-2,-3,-4],"y":[-25,-30,-10,10,30,40,50,50],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,7,7,5,0],"height":[0,5,5,5,5,5,5,0],"angle":5,"laser":{"damage":[20,25],"rate":5,"type":1,"speed":[160,180],"number":1},"propeller":0,"texture":[17,63,10,2,3,4]},"cannon2":{"section_segments":8,"offset":{"x":4,"y":-40,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-40,-20,20,30],"z":[0,0,0,0,0,0]},"width":[0,3,5,5,5,0],"height":[0,5,5,5,5,0],"angle":0,"laser":{"damage":[20,25],"rate":6,"type":1,"speed":[75,100],"number":1,"error":10},"propeller":false,"texture":[16.9,10,4,4]}},"wings":{"main":{"length":[60,40,15,0],"width":[70,70,50,30],"angle":[0,-10,0],"position":[20,20,0,-20],"texture":[3,11,63],"doubleside":true,"bump":{"position":0,"size":5},"offset":{"x":0,"y":15,"z":-10}},"winglets":{"length":[15,10,10,0],"width":[30,30,30,20],"angle":[10,10,15],"position":[0,10,20,35],"texture":[3,2,63],"doubleside":true,"bump":{"position":0,"size":5},"offset":{"x":20,"y":50,"z":3}}},"typespec":{"name":"Advanced Airfly","level":6,"model":3,"code":603,"specs":{"shield":{"capacity":[200,300],"reload":[5,7]},"generator":{"capacity":[200,250],"reload":[100,135]},"ship":{"mass":175,"speed":[65,95],"rotation":[30,50],"acceleration":[80,105]}},"shape":[3.607,4.848,4.685,4.254,3.531,3.094,2.829,2.643,2.464,2.552,4.271,4.645,4.611,4.593,4.527,4.598,4.66,4.022,3.844,3.992,4.208,4.377,3.628,3.575,3.461,3.406,3.461,3.575,3.628,4.377,4.208,3.992,3.844,4.022,4.66,4.598,4.527,4.593,4.611,4.645,4.271,2.552,2.464,2.643,2.829,3.094,3.531,4.254,4.685,4.848],"lasers":[{"x":3.895,"y":-1.195,"z":-0.6,"angle":5,"damage":[20,25],"rate":5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.895,"y":-1.195,"z":-0.6,"angle":-5,"damage":[20,25],"rate":5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.16,"y":-3.6,"z":-0.4,"angle":0,"damage":[20,25],"rate":6,"type":1,"speed":[75,100],"number":1,"spread":0,"error":10,"recoil":0},{"x":-0.16,"y":-3.6,"z":-0.4,"angle":0,"damage":[20,25],"rate":6,"type":1,"speed":[75,100],"number":1,"spread":0,"error":10,"recoil":0}],"radius":4.848}}';
s.Krypton_604 = (function(){var r=Function('return(function(){var model;return model={name:\'Krypton\',level:6,model:4,size:1.8,specs:{shield:{capacity:[200,225],reload:[5,10]},generator:{capacity:[200,250],reload:[40,70]},ship:{mass:200,speed:[110,130],rotation:[60,100],acceleration:[80,120]}},bodies:{main:{section_segments:8,offset:{x:0,y:-10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-95,-50,-10,10,25,35,55,70,80,88,84],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,15,23,27,25,25,21,19,15,10,0],height:[0,14,17,20,21,20,17,12,10,5,0],propeller:true,texture:[2,63,11,63,63,3,3,11,13,17]},cockpit:{section_segments:[45,95,185,275,325],offset:{x:0,y:-37,z:15},position:{x:[0,0,0,0,0,0],y:[-17,5,28,72,90],z:[0,0,0,1,0,0]},width:[0,10,15,20,0],height:[0,7,7,7,0],propeller:false,texture:[7,9,2.9,2.9]},Wing_thrusters:{section_segments:6,offset:{x:64,y:49,z:-3},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,10,20,19],z:[0,0,0,0,0,0]},width:[0,1.5,3,5.5,2.5,0],height:[0,1,2,4,4,0],angle:0,propeller:true,texture:[16.9,2.9,63,3.9,16.9]},Side_thruster_thingys:{section_segments:6,offset:{x:25,y:66,z:4},position:{x:[-16,-17,-9,-7,1,2,-3,-5,-5,-5],y:[-160,-165,-130,-110,-80,-50,-20,0,10,5],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,1.5,3,4,4,4,4,4,2,0],height:[0,1,4,4,4,4,4,4,2,0],angle:0,laser:{damage:[8,10],rate:6,type:1,speed:[120,160],number:1,error:0},propeller:true,texture:[16.9,12.9,63,8,8,63,11,12.9,16.9]},Reactor_ring_outside:{section_segments:8,offset:{x:0,y:20,z:-25},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-2.25,2,3.25,0.5,-2.25],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[12.5,13.5,11,6.5,2.5],height:[12.5,13.5,11,6.5,2.5],vertical:true,texture:[12.9,16.9,63,4],angle:0},Reactor_ring_middle:{section_segments:8,offset:{x:0,y:20,z:-25},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-2.25,2.25,1.25,-2.25,-2.25],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[9.5,9.5,0,4.5,9.5],height:[9.5,9.5,0,4.5,9.5],vertical:true,texture:[13,17,17,4],angle:0},mini_gun_cannons_top:{section_segments:6,offset:{x:1.31,y:-82,z:-11},position:{x:[0,0,0,0,0,0],y:[0,-10,0,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,laser:{damage:[1,2],rate:3.5,type:1,speed:[160,180],number:1,error:0},texture:[16.9,2.9,2.9,2.9,2.9]},mini_gun_cannons_bottom:{section_segments:6,offset:{x:1.31,y:-82,z:-14},position:{x:[0,0,0,0,0,0],y:[0,-10,0,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,laser:{damage:[1,2],rate:3.5,type:1,speed:[160,180],number:1,error:0},texture:[16.9,2.9,2.9,2.9,2.9]},mini_gun_cannons_top_copy:{section_segments:6,offset:{x:1.31,y:-82,z:-11},position:{x:[0,0,0,0,0,0],y:[0,-10,0,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,laser:{damage:[1,2],rate:3.5,type:1,speed:[160,180],number:1,error:0},texture:[16.9,2.9,2.9,2.9,2.9]},mini_gun_cannons_bottom_copy:{section_segments:6,offset:{x:1.31,y:-82,z:-14},position:{x:[0,0,0,0,0,0],y:[0,-10,0,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,laser:{damage:[1,2],rate:3.5,type:1,speed:[160,180],number:1,error:0},texture:[16.9,2.9,2.9,2.9,2.9]},minigun_mount_which_is_a_cube_by_money:{section_segments:[45,135,225,315],offset:{x:0,y:-68.5,z:-12},position:{x:[0,0,0,0,0,0],y:[-5,-5,3,5.5,5,18],z:[0,0,0,0,0,-1]},width:[0,7,7,7,7,0],height:[0,5,5,5,5,0],texture:[63,2.96,3,3]},minigun_spinny_thingy:{section_segments:20,offset:{x:0,y:-76,z:-12.5},position:{x:[0,0,0,0,0,0,0],y:[4,-9,-6,-1,3,5,5],z:[0,0,0,0,0,0,0]},width:[3.5,3.5,4,4.5,4.5,4,3.5],height:[3.5,3.5,4,4.5,4.5,4,3.5],texture:[4,13,13,63,2]},Turret_base_which_is_a_cube_by_money:{section_segments:[45,135,225,315],offset:{x:0,y:-4.5,z:24},position:{x:[0,0,0,0,0,0],y:[-5,-5,3,5.5,5,18],z:[0,0,0,0,0,-7]},width:[0,7,7,7,7,0],height:[0,5,5,5,5,0],texture:[3,2.96,3,3]},Cockpit_Armor:{section_segments:6,offset:{x:15,y:-3,z:14},position:{x:[-15,-14,-3,0,-0.5,0],y:[-55,-50,-20,10,23,10],z:[0,0,0,0,-1,0]},width:[0,2,4,4,2,0],height:[0,3,4,6,5,0],angle:0,propeller:false,texture:[3,3,63,3]},decor_cannons:{section_segments:6,offset:{x:3,y:-12,z:24},position:{x:[0,0,0,0,0,0],y:[0,-10,-5,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,texture:[16.9,12.9,8,2.9,2.9]},Armor_cannon:{section_segments:6,offset:{x:0,y:-32,z:14},position:{x:[-14,-14,-14,-14,-14,-14],y:[0,-10,-5,5,10,10],z:[0,0,0,0,0,0]},width:[0,1.5,1.5,1.5,1.5,0],height:[0,1.5,1.5,1.5,1.5,0],angle:0,laser:{damage:[10,20],rate:3,type:1,speed:[150,200],number:1,error:0},texture:[16.9,12.9,8,2.9,2.9]}},wings:{main:{length:[40,7,8],width:[49,28,20,8],angle:[-10,40,0],position:[-20,20,20,40],doubleside:true,offset:{x:25,y:25,z:0},bump:{position:30,size:10},texture:[11,4]},Undermain:{length:[40,7,8],width:[49,28,20,8],angle:[-10,40,0],position:[-20,20,20,40],doubleside:true,offset:{x:25,y:25,z:-1.9},bump:{position:30,size:10},texture:[11,4]},highlight:{length:[40,7,8],width:[53,29,22,12],angle:[-10,40,0],position:[-20,20,20,40],doubleside:true,offset:{x:25,y:23,z:-0.9},bump:{position:30,size:0},texture:[17]},more_highlights:{length:[42],width:[19,16,12,2],angle:[-11],position:[-22,22],doubleside:true,offset:{x:25,y:28,z:3.9},bump:{position:30,size:5},texture:[63]},winglets:{length:[18],width:[46,14],angle:[45],position:[-10,25],doubleside:true,offset:{x:8,y:57,z:5},bump:{position:15,size:22},texture:[63]},winglets_highlight:{length:[17.8],width:[40,16],angle:[41],position:[-20,20],doubleside:true,offset:{x:7,y:58,z:6},bump:{position:0,size:1},texture:[17]}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.78,3.58,2.847,2.241,1.799,1.57,1.415,1.309,1.241,1.274,1.327,1.409,2.352,2.384,2.453,2.574,2.961,3.448,3.742,3.441,1.759,2.094,2.65,3.29,2.969,2.813,2.969,3.29,2.65,2.094,1.759,3.441,3.742,3.448,2.961,2.574,2.453,2.384,2.352,1.409,1.327,1.274,1.241,1.309,1.415,1.57,1.799,2.241,2.847,3.58],"lasers":[{"x":0.288,"y":-3.564,"z":0.144,"angle":0,"damage":[8,10],"rate":6,"type":1,"speed":[120,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.288,"y":-3.564,"z":0.144,"angle":0,"damage":[8,10],"rate":6,"type":1,"speed":[120,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.047,"y":-3.312,"z":-0.396,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.047,"y":-3.312,"z":-0.396,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.047,"y":-3.312,"z":-0.504,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.047,"y":-3.312,"z":-0.504,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.047,"y":-3.312,"z":-0.396,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.047,"y":-3.312,"z":-0.396,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.047,"y":-3.312,"z":-0.504,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.047,"y":-3.312,"z":-0.504,"angle":0,"damage":[1,2],"rate":3.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.504,"y":-1.512,"z":0.504,"angle":0,"damage":[10,20],"rate":3,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.78}')),JSON.stringify(r)})();
s.Akrame_605 = '{"name":"Akrame","level":6,"model":5,"size":2,"specs":{"shield":{"capacity":[250,400],"reload":[4,7]},"generator":{"capacity":[100,200],"reload":[60,90]},"ship":{"mass":300,"speed":[70,100],"rotation":[30,50],"acceleration":[80,110]}},"bodies":{"body":{"section_segments":8,"offset":{"x":0,"y":20,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-125,-120,-110,-90,-80,-10,20,70,95,110,100],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,19,20,25,30,30,25,15,0],"height":[0,8,12,15,17,17,17,17,17,15,0],"texture":[4,63,3,3,10,1,2,3,4,17],"propeller":true},"sides":{"section_segments":12,"offset":{"x":30,"y":50,"z":0},"position":{"x":[20,15,12,4,2,0,0,0,0,0,0,0,0],"y":[-110,-100,-90,-50,-30,-10,20,50,65,80,75],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,10,10,10,10,10,10,10,7,0],"height":[0,10,10,10,10,10,10,10,10,7,0],"texture":[63,13,4,3,2,10,3,4,63,17],"propeller":true},"sides_behind_cockpit":{"section_segments":12,"offset":{"x":8,"y":90,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-60,-50,-30,-20,-5,10,20,15],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,10,10,10,10,5,0],"height":[0,7,7,7,7,7,5,0],"texture":[63,1,2,3,63,13,17],"propeller":true},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-20,10,40,70,85,100,130],"z":[0,0,0,0,0,0,0,0]},"width":[0,10,12,15,15,15,10,0],"height":[0,12,12,12,12,12,12,0],"texture":[4,9,63,4,3,2,1,8],"propeller":false},"cannon":{"section_segments":8,"offset":{"x":25,"y":20,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-50,-50,-50,-40,-30,-20,5,10,20,10,10],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,7,7,10,10,10,10,10,7,0],"height":[0,5,7,7,10,10,10,10,10,7,0],"texture":[17,13,13,63,11,13,11,11,12,10],"propeller":false,"laser":{"damage":[10,20],"rate":10,"type":1,"speed":[180,200],"number":1,"angle":0,"error":5}}},"wings":{"main":{"doubleside":true,"offset":{"x":20,"y":40,"z":0},"length":[50,10,20,5,5],"width":[90,60,50,20,10],"angle":[-10,-10,-20,-30,0],"position":[30,10,0,-25,-35,0],"texture":[10,4,63,63,0],"bump":{"position":16,"size":4}}},"typespec":{"name":"Akrame","level":6,"model":5,"code":605,"specs":{"shield":{"capacity":[250,400],"reload":[4,7]},"generator":{"capacity":[100,200],"reload":[60,90]},"ship":{"mass":300,"speed":[70,100],"rotation":[30,50],"acceleration":[80,110]}},"shape":[4.2,4.078,3.437,2.57,1.974,3.083,3.124,2.987,2.539,2.247,2.053,1.91,1.819,4.108,4.088,4.038,3.977,4.038,4.133,4.232,4.224,4.28,5.045,5.407,5.294,5.21,5.294,5.407,5.045,4.28,4.224,4.232,4.133,4.038,3.977,4.038,4.088,4.108,4.088,1.91,2.053,2.247,2.539,2.987,3.124,3.083,1.974,2.57,3.437,4.078],"lasers":[{"x":1,"y":-1.2,"z":-0.4,"angle":0,"damage":[10,20],"rate":10,"type":1,"speed":[180,200],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1,"y":-1.2,"z":-0.4,"angle":0,"damage":[10,20],"rate":10,"type":1,"speed":[180,200],"number":1,"spread":0,"error":5,"recoil":0}],"radius":5.407}}';
s.Penery_606 = '{"name":"Penery","level":6,"model":6,"size":1.9,"specs":{"shield":{"capacity":[200,300],"reload":[5,7]},"generator":{"capacity":[150,250],"reload":[70,90]},"ship":{"mass":190,"speed":[110,130],"rotation":[40,55],"acceleration":[85,105]}},"bodies":{"body":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-150,-130,-90,-10,0,20,50,90,110,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,30,35,35,35,35,30,20,0],"height":[0,20,20,20,20,20,20,20,20,0],"texture":[4,63,2,2,2,3,4,13,17],"propeller":true},"propeller":{"section_segments":12,"offset":{"x":40,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-70,-60,-30,-10,20,40,50,60,75,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,12,15,15,17,17,17,18,10,0],"height":[0,12,15,15,15,15,15,15,10,0],"texture":[3,4,3,10,2,3,4,63,17],"propeller":true},"propeller1":{"section_segments":12,"offset":{"x":30,"y":20,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-70,-60,-30,-10,20,40,50,60,75,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,12,15,15,17,17,17,18,10,0],"height":[0,12,15,15,15,15,15,15,10,0],"texture":[63,13,10,2,3,4,63,13,17],"propeller":true},"cannon":{"section_segments":8,"offset":{"x":15,"y":-50,"z":-20},"position":{"x":[0,0,0,0,0,0,0],"y":[-38,-40,-30,-5,20,30,25],"z":[0,0,0,0,0,0,0]},"width":[0,5,8,8,7,5,0],"height":[0,5,8,8,7,5,0],"angle":0,"laser":{"damage":[15,20],"rate":8.5,"type":2,"speed":[160,180],"number":2,"error":0,"angle":5,"recoil":50},"propeller":true,"texture":[17,2,63,3,4]},"topcockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":15},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-50,-10,20,60,80,90],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,19,19,20,20,0],"height":[0,15,19,20,20,20,0],"texture":[4,9,2,10,3,4]}},"wings":{"wingsSides":{"doubleside":true,"offset":{"x":52,"y":20,"z":10},"length":[0,0,0,20],"width":[0,0,0,150,40],"angle":[0,0,0,20],"position":[0,0,0,-15,10],"texture":[0,8,13,63],"bump":{"position":35,"size":20}}},"typespec":{"name":"Penery","level":6,"model":6,"code":606,"specs":{"shield":{"capacity":[200,300],"reload":[5,7]},"generator":{"capacity":[150,250],"reload":[70,90]},"ship":{"mass":190,"speed":[110,130],"rotation":[40,55],"acceleration":[85,105]}},"shape":[5.7,5.369,4.597,3.645,3.064,3.314,3.177,2.918,2.739,2.627,2.557,2.546,2.597,2.695,2.776,2.893,3.068,3.296,3.35,3.462,3.626,3.79,3.917,4.194,4.249,4.188,4.249,4.194,3.917,3.79,3.626,3.462,3.35,3.296,3.068,2.893,2.776,2.695,2.597,2.546,2.557,2.627,2.739,2.918,3.177,3.314,3.064,3.645,4.597,5.369],"lasers":[{"x":0.57,"y":-3.42,"z":-0.76,"angle":0,"damage":[15,20],"rate":8.5,"type":2,"speed":[160,180],"number":2,"spread":5,"error":0,"recoil":50},{"x":-0.57,"y":-3.42,"z":-0.76,"angle":0,"damage":[15,20],"rate":8.5,"type":2,"speed":[160,180],"number":2,"spread":5,"error":0,"recoil":50}],"radius":5.7}}';
s.Banefire_607 = '{"name":"Banefire","level":6,"model":7,"size":3.7,"specs":{"shield":{"capacity":[300,475],"reload":[5,10]},"generator":{"capacity":[250,300],"reload":[55,65]},"ship":{"mass":425,"speed":[50,75],"rotation":[40,60],"acceleration":[140,175]}},"bodies":{"gun1":{"section_segments":0,"offset":{"x":0,"y":-70,"z":7},"position":{"x":[42,42,42,42],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"laser":{"damage":[7,10],"rate":10,"number":1,"error":2,"speed":[200,250],"angle":0,"recoil":15}},"gun2":{"section_segments":0,"offset":{"x":0,"y":-70,"z":7},"position":{"x":[42,42,42,42],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"laser":{"damage":[7,10],"rate":9.9,"number":1,"error":2,"speed":[200,250],"angle":0,"recoil":15}},"gun3":{"section_segments":0,"offset":{"x":0,"y":-70,"z":7},"position":{"x":[42,42,42,42],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"laser":{"damage":[7,10],"rate":9.8,"number":1,"error":2,"speed":[200,250],"angle":0,"recoil":15}},"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-60,-30,0,30,50,60,50],"z":[0,0,0,0,0,0,0,0]},"width":[0,6,19.5,21,19.5,15,12,0],"height":[0,4.199999999999999,14,15.399999999999999,14,9.799999999999999,7,0],"texture":[13,2,11,63,4,13,17],"propeller":true},"reactor":{"section_segments":8,"vertical":true,"offset":{"x":0,"y":16.8,"z":-17.5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-8,0,1,1,0,-2,2,0.4,1.6,4,4],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[12.5,12.5,11.75,11,10,5,5,7.5,8.25,2.5,0],"height":[12.5,12.5,11.75,11,10,5,5,7.5,8.25,2.5,0],"texture":[4,3,17,4,17,13,3,63,12,18]},"side_name_platform":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-29,-29,-17,-17],"z":[0,0,0,0]},"width":[0,40,43,0],"height":[0,8,8,0],"texture":3},"giant_half_O_curve":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-35,-38,-46,-50,-50,-46,-38,-35],"y":[-60,-55,-35,-10,10,35,55,60],"z":[0,0,0,0,0,0,0,0]},"width":[0,4,7,8,8,7,4,0],"height":[0,8,10,11,11,10,8,0],"texture":[63,3,8,63,8,3,63]},"cockpit":{"section_segments":7,"offset":{"x":0,"y":-27,"z":12},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-24,-20.4,-15.6,-8.4,0,6,12,12],"z":[-6,-5,-4,-2,-1,1,2,0]},"width":[0,4,6.4,7.2,8,6.96,5.6000000000000005,0],"height":[0,3,6,7,8,5,2,0],"texture":[4,4,9,9,4]},"barrel_box":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":25,"z":0},"position":{"x":[42,42,42,42,42,42],"y":[-28,-28,-25.2,5.6,9.799999999999999,4.199999999999999],"z":[0,0,0,0,0,0]},"width":[0,14.3,15.600000000000001,15.600000000000001,10.4,0],"height":[0,15.600000000000001,16.900000000000002,16.900000000000002,10.4,0],"texture":[2.9,2.9,2.9,2.9,17],"propeller":true},"base":{"section_segments":20,"offset":{"x":0,"y":-5,"z":0},"position":{"x":[42,42,42,42],"y":[-1.3,-1.3,2.6,2.6],"z":[0,0,0,0]},"width":[0,10.5,10.5,0],"height":[0,10.5,10.5,0],"texture":4},"connector_1":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":90,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-24.5,-24.5,-24.5,-24.5],"y":[19,19,31,31],"z":[0,0,0,0]},"width":[0,7,7,0],"height":[0,5,5,0],"texture":3},"connector_2":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":90,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-5.5,-5.5,-5.5,-5.5],"y":[19,19,31,31],"z":[0,0,0,0]},"width":[0,7,7,0],"height":[0,5,5,0],"texture":3},"barrel1":{"section_segments":20,"offset":{"x":0,"y":25,"z":7},"position":{"x":[42,42,42,42,42,42,42],"y":[-93.075,-97.455,-94.17,-90.88499999999999,-87.6,-87.6,0],"z":[0,0,0,0,0,0,0]},"width":[0,3.5,3.5,3.5,3.5,2.8,2.8],"height":[0,3.5,3.5,3.5,3.5,2.8,2.8],"texture":[17,3,63,3,3,4]},"barrel2":{"section_segments":20,"offset":{"x":0,"y":25,"z":3.5},"position":{"x":[48,48,48,48,48,48,48],"y":[-93.075,-97.455,-94.17,-90.88499999999999,-87.6,-87.6,0],"z":[0,0,0,0,0,0,0]},"width":[0,3.5,3.5,3.5,3.5,2.8,2.8],"height":[0,3.5,3.5,3.5,3.5,2.8,2.8],"texture":[17,3,63,3,3,4]},"barrel3":{"section_segments":20,"offset":{"x":0,"y":25,"z":-3.5},"position":{"x":[48,48,48,48,48,48,48],"y":[-93.075,-97.455,-94.17,-90.88499999999999,-87.6,-87.6,0],"z":[0,0,0,0,0,0,0]},"width":[0,3.5,3.5,3.5,3.5,2.8,2.8],"height":[0,3.5,3.5,3.5,3.5,2.8,2.8],"texture":[17,3,63,3,3,4]},"barrel4":{"section_segments":20,"offset":{"x":0,"y":25,"z":-7},"position":{"x":[42,42,42,42,42,42,42],"y":[-93.075,-97.455,-94.17,-90.88499999999999,-87.6,-87.6,0],"z":[0,0,0,0,0,0,0]},"width":[0,3.5,3.5,3.5,3.5,2.8,2.8],"height":[0,3.5,3.5,3.5,3.5,2.8,2.8],"texture":[17,3,63,3,3,4]},"barrel5":{"section_segments":20,"offset":{"x":0,"y":25,"z":3.5},"position":{"x":[36,36,36,36,36,36,36],"y":[-93.075,-97.455,-94.17,-90.88499999999999,-87.6,-87.6,0],"z":[0,0,0,0,0,0,0]},"width":[0,3.5,3.5,3.5,3.5,2.8,2.8],"height":[0,3.5,3.5,3.5,3.5,2.8,2.8],"texture":[17,3,63,3,3,4]},"barrel6":{"section_segments":20,"offset":{"x":0,"y":25,"z":-3.5},"position":{"x":[36,36,36,36,36,36,36],"y":[-93.075,-97.455,-94.17,-90.88499999999999,-87.6,-87.6,0],"z":[0,0,0,0,0,0,0]},"width":[0,3.5,3.5,3.5,3.5,2.8,2.8],"height":[0,3.5,3.5,3.5,3.5,2.8,2.8],"texture":[17,3,63,3,3,4]},"connector_1_1":{"section_segments":8,"angle":90,"offset":{"x":0,"y":0,"z":2.6},"position":{"x":[-3.5,-3.5,-3.5,-3.5],"y":[19,19,31,31],"z":[0,0,0,0]},"width":[0,1.4,1.4,0],"height":[0,2,2,0],"texture":17},"connector_1_11":{"section_segments":12,"angle":90,"offset":{"x":0,"y":0,"z":2.6},"position":{"x":[-5.5,-5.5,-5.5,-5.5],"y":[23.5,23.5,25.5,25.5],"z":[0,0,0,0]},"width":[0,5.2,5.2,0],"height":[0,4,4,0],"texture":4},"connector_1_2":{"section_segments":8,"angle":90,"offset":{"x":0,"y":0,"z":2.6},"position":{"x":[-7.5,-7.5,-7.5,-7.5],"y":[19,19,31,31],"z":[0,0,0,0]},"width":[0,1.4,1.4,0],"height":[0,2,2,0],"texture":17},"connector_1_12":{"section_segments":12,"angle":90,"offset":{"x":0,"y":0,"z":2.6},"position":{"x":[-24.5,-24.5,-24.5,-24.5],"y":[23.5,23.5,25.5,25.5],"z":[0,0,0,0]},"width":[0,5.2,5.2,0],"height":[0,4,4,0],"texture":4},"connector_2_1":{"section_segments":8,"angle":90,"offset":{"x":0,"y":0,"z":2.6},"position":{"x":[-22.5,-22.5,-22.5,-22.5],"y":[18.2,18.2,31,31],"z":[0,0,0,0]},"width":[0,1.4,1.4,0],"height":[0,2,2,0],"texture":17},"connector_2_2":{"section_segments":8,"angle":90,"offset":{"x":0,"y":0,"z":2.6},"position":{"x":[-26.5,-26.5,-26.5,-26.5],"y":[18,18,31,31],"z":[0,0,0,0]},"width":[0,1.4,1.4,0],"height":[0,2,2,0],"texture":17},"middle_reactor":{"section_segments":24,"vertical":true,"offset":{"x":0,"y":13.6,"z":-15},"position":{"x":[42,42,42,42,42,42],"y":[-2,0,1,1,0.7,0.3],"z":[0,0,0,0,0,0]},"width":[3.9000000000000004,3.9000000000000004,3.25,2.6,1.9500000000000002,0],"height":[3.9000000000000004,3.9000000000000004,3.25,2.6,1.9500000000000002,0],"texture":[4,3,17,4,17]},"smol_reactor1":{"section_segments":24,"vertical":true,"offset":{"x":0,"y":13.6,"z":-5},"position":{"x":[47,47,47,47,47],"y":[-2,0,1,0.9,1],"z":[0,0,0,0,0]},"width":[2.8499999999999996,2.8499999999999996,2.1849999999999996,1.805,0],"height":[2.8499999999999996,2.8499999999999996,2.1849999999999996,1.805,0],"texture":[4,3,4,17]},"smol_reactor2":{"section_segments":24,"vertical":true,"offset":{"x":0,"y":13.6,"z":-5},"position":{"x":[37,37,37,37,37],"y":[-2,0,1,0.9,1],"z":[0,0,0,0,0]},"width":[2.8499999999999996,2.8499999999999996,2.1849999999999996,1.805,0],"height":[2.8499999999999996,2.8499999999999996,2.1849999999999996,1.805,0],"texture":[4,3,4,17]},"smol_reactor3":{"section_segments":24,"vertical":true,"offset":{"x":0,"y":13.6,"z":-25},"position":{"x":[37,37,37,37,37],"y":[-2,0,1,0.9,1],"z":[0,0,0,0,0]},"width":[2.8499999999999996,2.8499999999999996,2.1849999999999996,1.805,0],"height":[2.8499999999999996,2.8499999999999996,2.1849999999999996,1.805,0],"texture":[4,3,4,17]},"smol_reactor4":{"section_segments":24,"vertical":true,"offset":{"x":0,"y":13.6,"z":-25},"position":{"x":[47,47,47,47,47],"y":[-2,0,1,0.9,1],"z":[0,0,0,0,0]},"width":[2.8499999999999996,2.8499999999999996,2.1849999999999996,1.805,0],"height":[2.8499999999999996,2.8499999999999996,2.1849999999999996,1.805,0],"texture":[4,3,4,17]},"emblem_circle":{"section_segments":40,"vertical":true,"offset":{"x":0,"y":4,"z":-24.5},"position":{"x":[-23,-23,-23,-23],"y":[-2,-2,2,2],"z":[0,0,0,0]},"width":[0,3,3,0],"height":[0,3,3,0],"texture":4},"emblem_bottom_triangle":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":24.5,"z":5},"position":{"x":[-21.2,-21.2,-22.7,-22.7,-21.2,-21.2],"y":[-1.5,-1.5,-0.5,0.5,1.5,1.5],"z":[0,0,0,0,0,0]},"width":[0,1,1,1,1,0],"height":[0,2,2,2,2,0],"texture":63},"emblem_top_triangle":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":24.5,"z":5},"position":{"x":[-24.8,-24.8,-23.3,-23.3,-24.8,-24.8],"y":[-1.5,-1.5,-0.5,0.5,1.5,1.5],"z":[0,0,0,0,0,0]},"width":[0,1,1,1,1,0],"height":[0,2,2,2,2,0],"texture":63},"S_top":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-25.5,"z":6},"position":{"x":[-21.5,-21.5,-20,-20,-21.5,-21.5],"y":[-1.9500000000000002,-1.9500000000000002,-0.65,0.65,1.9500000000000002,1.9500000000000002],"z":[0,0,0,0,0,0]},"width":[0,0.7,0.7,0.7,0.7,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":4},"S_mid":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-25.5,"z":6},"position":{"x":[-21.5,-21.5,-23,-23,-24.5,-24.5],"y":[-1.9500000000000002,-1.9500000000000002,-0.65,0.65,1.9500000000000002,1.9500000000000002],"z":[0,0,0,0,0,0]},"width":[0,0.7,0.7,0.7,0.7,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":4},"S_bottom":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-25.5,"z":6},"position":{"x":[-24.5,-24.5,-26,-26,-24.5,-24.5],"y":[-1.9500000000000002,-1.9500000000000002,-0.65,0.65,1.9500000000000002,1.9500000000000002],"z":[0,0,0,0,0,0]},"width":[0,0.7,0.7,0.7,0.7,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":4},"S_top_one":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-25.5,"z":5.9},"position":{"x":[-21.5,-21.5,-20,-20,-21.5,-21.5],"y":[-2.015,-2.015,-0.65,0.65,2.015,2.015],"z":[0,0,0,0,0,0]},"width":[0,0.84,0.84,0.84,0.84,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":17},"S_mid_one":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-25.5,"z":5.9},"position":{"x":[-21.5,-21.5,-23,-23,-24.5,-24.5],"y":[-2.015,-2.015,-0.65,0.65,2.015,2.015],"z":[0,0,0,0,0,0]},"width":[0,0.84,0.84,0.84,0.84,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":17},"S_bottom_one":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-25.5,"z":5.9},"position":{"x":[-24.5,-24.5,-26,-26,-24.5,-24.5],"y":[-2.015,-2.015,-0.65,0.65,2.015,2.015],"z":[0,0,0,0,0,0]},"width":[0,0.84,0.84,0.84,0.84,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":17},"long":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-22,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"top":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-20.5,"z":6},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"bottom":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-20.5,"z":6},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"mid":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-20.5,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-1,-1,0,0],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"long_s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-22,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,1,1,0],"texture":17},"top_s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-20.5,"z":5.9},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.05,-1.05,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"bottom_s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-20.5,"z":5.9},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1.05,-1.05,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"mid_s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-20.5,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-1.05,-1.05,0.05,0.05],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"long1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-18,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"top2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-17,"z":6},"position":{"x":[-19.7,-19.7,-19.7,-19.7],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"top3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-17,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"R_curve":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":0,"y":-15.3,"z":6.2},"position":{"x":[-1.5,-1.5,0,0,-1.5,-1.5],"y":[19.35,19.35,20.650000000000002,21.95,23.25,23.25],"z":[0,0,0,0,0,0]},"width":[0,0.7,0.7,0.7,0.7,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":4},"bottom2":{"section_segments":[45,135,225,315],"angle":-45,"offset":{"x":0,"y":8,"z":6},"position":{"x":[-35,-35,-35,-35],"y":[-1.5,-1.5,2.25,2.25],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"long_AAAAArr":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-18,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,1,1,0],"texture":17},"S_top_AAAAArr":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":0,"y":-15.3,"z":6.1},"position":{"x":[-1.5,-1.5,0,0,-1.5,-1.5],"y":[19.285,19.285,20.650000000000002,21.95,23.315,23.315],"z":[0,0,0,0,0,0]},"width":[0,0.742,0.742,0.742,0.742,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":17},"top_AAAAArr":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-17,"z":5.9},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.05,-1.05,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"mid_AAAAArr":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-17,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-1.05,-1.05,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"bottom_AAAAArr":{"section_segments":[45,135,225,315],"angle":-45,"offset":{"x":0,"y":8,"z":5.9},"position":{"x":[-35,-35,-35,-35],"y":[-1.55,-1.55,2.3,2.3],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"long3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-13,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"top4":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-11.5,"z":6},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"bottom3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-11.5,"z":6},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"mid2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-11.5,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-1,-1,0,0],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"long_2s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-13,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,1,1,0],"texture":17},"top_2s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-11.5,"z":5.9},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.05,-1.05,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"bottom_2s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-11.5,"z":5.9},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1.05,-1.05,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"mid_2s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-11.5,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-1.05,-1.05,0.05,0.05],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"long4":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-9,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"middle":{"section_segments":[45,135,225,315],"angle":20,"offset":{"x":0,"y":-16,"z":6},"position":{"x":[-24.5,-24.5,-24.5,-24.5],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"long5":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-6.5,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"long_help_me_please":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-9,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,1,1,0],"texture":17},"long_help_me_please2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-6.5,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,1,1,0],"texture":17},"middle_IcanttellyouhowcrazyImgoing":{"section_segments":[45,135,225,315],"angle":20,"offset":{"x":0,"y":-16,"z":5.9},"position":{"x":[-24.5,-24.5,-24.5,-24.5],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":17},"long6":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-4,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"D_curve":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":0,"y":-1,"z":6.2},"position":{"x":[-1.5,-1.5,0,0,-1.5,-1.5],"y":[19.55,19.55,21.85,24.15,26.45,26.45],"z":[0,0,0,0,0,0]},"width":[0,0.7,0.7,0.7,0.7,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":4},"top5":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-2.6,"z":6},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"bottom4":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-2.6,"z":6},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"long_Iwanttodie":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-4,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,1,1,0],"texture":17},"top_thisistiresome":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-2.6,"z":5.9},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.55,-1.55,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"bottom_AAAAArrrrrrrrr":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-2.6,"z":5.9},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1.55,-1.55,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"D_curve2":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":0,"y":-1,"z":6.1},"position":{"x":[-1.5,-1.5,0,0,-1.5,-1.5],"y":[19.55,19.55,21.85,24.15,26.45,26.45],"z":[0,0,0,0,0,0]},"width":[0,0.714,0.714,0.714,0.714,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":17},"long7":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":2.3,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"top6":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":2.5,"z":6},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.5,-1.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"bottom5":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":2.3,"z":6},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1.5,-1.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"long_AAAAAr":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":2.3,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,1,1,0],"texture":17},"top_AAAAAr":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":2.5,"z":5.9},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.55,-1.55,1.55,1.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"bottom_AAAAAr":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":2.5,"z":5.9},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1.55,-1.55,1.4,1.4],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"long8":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":5.5,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"top_idk":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":7,"z":6},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"bottom_hmm":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":7,"z":6},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"mid4":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":7,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"B_curve1":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":0,"y":8.7,"z":6.2},"position":{"x":[-1.5,-1.5,0,0,-1.5,-1.5],"y":[19.5,19.5,20.8,22.099999999999998,23.4,23.4],"z":[0,0,0,0,0,0]},"width":[0,0.7,0.7,0.7,0.7,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":4},"B_curve2":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":0,"y":8.7,"z":6.2},"position":{"x":[-1.5,-1.5,0,0,-1.5,-1.5],"y":[22.55,22.55,23.85,25.15,26.45,26.45],"z":[0,0,0,0,0,0]},"width":[0,0.7,0.7,0.7,0.7,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":4},"B_curve4213":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":0,"y":8.7,"z":6.1},"position":{"x":[-1.5,-1.5,0,0,-1.5,-1.5],"y":[19.435,19.435,20.8,22.099999999999998,23.465,23.465],"z":[0,0,0,0,0,0]},"width":[0,0.742,0.742,0.742,0.742,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":17},"B_curve1342":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":0,"y":8.7,"z":6.1},"position":{"x":[-1.5,-1.5,0,0,-1.5,-1.5],"y":[22.485,22.485,23.85,25.15,26.515,26.515],"z":[0,0,0,0,0,0]},"width":[0,0.742,0.742,0.742,0.742,0],"height":[0,0.7,0.7,0.7,0.7,0],"texture":17},"long_ha":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":5.5,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,1,1,0],"texture":17},"top_haha":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":7,"z":5.9},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.05,-1.05,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"bottom_hahaha":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":7,"z":5.9},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1.05,-1.05,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"mid_hahahahahahahahaha":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":7,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-1.05,-1.05,0.05,0.05],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"long9":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":11,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"top7":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":11.2,"z":6},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.5,-1.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"bottom6":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":11.2,"z":6},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1.5,-1.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"long_AAAAA":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":11,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,1,1,0],"texture":17},"top_AAAAA":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":11.2,"z":5.9},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.55,-1.55,1.55,1.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"bottom_AAAAA":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":11.2,"z":5.9},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1.55,-1.55,1.55,1.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"long10":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":15,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"top8":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":15.1,"z":6},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.5,-1.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"long_AAAAAs":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":15,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,1,1,0],"texture":17},"top_AAAAAs":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":15.1,"z":5.9},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.55,-1.55,1.55,1.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"long_smth":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":18,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-0.25,-0.25,0.5,0.5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,1,1,0],"texture":4},"top48346":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":19.5,"z":6},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"bottom_yes":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":19.5,"z":6},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1,-1,0.5,0.5],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"mid42":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":19.5,"z":6},"position":{"x":[-23,-23,-23,-23],"y":[-1,-1,0,0],"z":[0,0,0,0]},"width":[0,0.55,0.55,0],"height":[0,1,1,0],"texture":4},"long_3s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":18,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-0.3,-0.3,0.55,0.55],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,1,1,0],"texture":17},"top_3s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":19.5,"z":5.9},"position":{"x":[-19.9,-19.9,-19.9,-19.9],"y":[-1.05,-1.05,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"bottom_3s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":19.5,"z":5.9},"position":{"x":[-26.1,-26.1,-26.1,-26.1],"y":[-1.05,-1.05,0.55,0.55],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"mid_3s":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":19.5,"z":5.9},"position":{"x":[-23,-23,-23,-23],"y":[-1.05,-1.05,0.05,0.05],"z":[0,0,0,0]},"width":[0,0.561,0.561,0],"height":[0,1,1,0],"texture":17},"end1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-7.8,"z":9.5},"position":{"x":[41.4,41.4,40.9,40.9],"y":[0,0,1.6,1.6],"z":[0,0,0,0]},"width":[0,0,0.7,0.7],"height":[0,1,1,0],"texture":63},"end2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-62.8,"z":9.45},"position":{"x":[43.2,43.2,42.7,42.7],"y":[0,0,1.6,1.6],"z":[0,0,0,0]},"width":[0.7,0.7,0,0],"height":[0,1,1,0],"texture":63},"main_top1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[58,58,59,60,62,62],"z":[8,8,8,6.4,0,0]},"width":[0,12.6,12.6,12.6,12.6,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-90},"main_bottom1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[58,58,59,60,62,62],"z":[-8,-8,-8,-6.4,0,0]},"width":[0,12.6,12.6,12.6,12.6,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-90},"middle_plate1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[60.400000000000006,60.400000000000006,62.400000000000006,62.400000000000006],"z":[0,0,0,0]},"width":[0,12.739999999999998,12.739999999999998,0],"height":[0,3.9000000000000004,3.9000000000000004,0],"angle":-90,"texture":3},"support_beam11":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[4,4,4,4],"y":[23,23,63,63],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-90,"texture":[4,4,63]},"support_beam21":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-4,-4,-4,-4],"y":[23,23,63,63],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-90,"texture":[4,4,63]},"beam_ring1":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[34,34,35.5,36.5,38,38],"z":[0,0,0,0,0,0]},"width":[0,6.4,7.2,7.2,6.4,0],"height":[0,4,4.5,4.5,4,0],"angle":-90,"texture":[63,4,17,4,63]},"main_top2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[9,9,9,9,9,9],"y":[59,59,60,61,63,63],"z":[7.5,7.5,7.5,6,0,0]},"width":[0,16.2,16.2,16.2,16.2,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-77},"main_bottom2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[9,9,9,9,9,9],"y":[59,59,60,61,63,63],"z":[-7.5,-7.5,-7.5,-6,0,0]},"width":[0,16.2,16.2,16.2,16.2,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-77},"middle_plate2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[9,9,9,9],"y":[61.400000000000006,61.400000000000006,63.400000000000006,63.400000000000006],"z":[0,0,0,0]},"width":[0,16.38,16.38,0],"height":[0,3.5999999999999996,3.5999999999999996,0],"angle":-77,"texture":3},"support_beam12":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[13,13,13,13],"y":[24,24,64,64],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-77,"texture":[4,4,63]},"support_beam22":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[5,5,5,5],"y":[24,24,64,64],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-77,"texture":[4,4,63]},"beam_ring2":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[9,9,9,9,9,9],"y":[35,35,36.5,37.5,39,39],"z":[0,0,0,0,0,0]},"width":[0,6.4,7.2,7.2,6.4,0],"height":[0,4,4.5,4.5,4,0],"angle":-77,"texture":[63,4,17,4,63]},"main_top3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[-9,-9,-9,-9,-9,-9],"y":[59,59,60,61,63,63],"z":[7.5,7.5,7.5,6,0,0]},"width":[0,16.2,16.2,16.2,16.2,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-103},"main_bottom3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[-9,-9,-9,-9,-9,-9],"y":[59,59,60,61,63,63],"z":[-7.5,-7.5,-7.5,-6,0,0]},"width":[0,16.2,16.2,16.2,16.2,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-103},"middle_plate3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[-9,-9,-9,-9],"y":[61.400000000000006,61.400000000000006,63.400000000000006,63.400000000000006],"z":[0,0,0,0]},"width":[0,16.38,16.38,0],"height":[0,3.5999999999999996,3.5999999999999996,0],"angle":-103,"texture":3},"support_beam13":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-5,-5,-5,-5],"y":[24,24,64,64],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-103,"texture":[4,4,63]},"support_beam23":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-13,-13,-13,-13],"y":[24,24,64,64],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-103,"texture":[4,4,63]},"beam_ring3":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-9,-9,-9,-9,-9,-9],"y":[35,35,36.5,37.5,39,39],"z":[0,0,0,0,0,0]},"width":[0,6.4,7.2,7.2,6.4,0],"height":[0,4,4.5,4.5,4,0],"angle":-103,"texture":[63,4,17,4,63]},"main_top4":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[16,16,16,16,16,16],"y":[63,63,64,65,67,67],"z":[6.5,6.5,6.5,5.2,0,0]},"width":[0,16.2,16.2,16.2,16.2,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-61},"main_bottom4":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[16,16,16,16,16,16],"y":[63,63,64,65,67,67],"z":[-6.5,-6.5,-6.5,-5.2,0,0]},"width":[0,16.2,16.2,16.2,16.2,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-61},"middle_plate4":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[16,16,16,16],"y":[65.4,65.4,67.4,67.4],"z":[0,0,0,0]},"width":[0,16.38,16.38,0],"height":[0,3,3,0],"angle":-61,"texture":3},"support_beam14":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[20,20,20,20],"y":[58,58,68,68],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-61,"texture":[4,4,63]},"support_beam24":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[12,12,12,12],"y":[58,58,68,68],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-61,"texture":[4,4,63]},"main_top5":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[-16,-16,-16,-16,-16,-16],"y":[63,63,64,65,67,67],"z":[6.5,6.5,6.5,5.2,0,0]},"width":[0,16.2,16.2,16.2,16.2,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-119},"main_bottom5":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[-16,-16,-16,-16,-16,-16],"y":[63,63,64,65,67,67],"z":[-6.5,-6.5,-6.5,-5.2,0,0]},"width":[0,16.2,16.2,16.2,16.2,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-119},"middle_plate5":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[-16,-16,-16,-16],"y":[65.4,65.4,67.4,67.4],"z":[0,0,0,0]},"width":[0,16.38,16.38,0],"height":[0,3,3,0],"angle":-119,"texture":3},"support_beam15":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-12,-12,-12,-12],"y":[58,58,68,68],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-119,"texture":[4,4,63]},"support_beam25":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-20,-20,-20,-20],"y":[58,58,68,68],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-119,"texture":[4,4,63]},"main_top6":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[-15.5,-15.5,-15.5,-15.5,-15.5,-15.5],"y":[55,55,56,57,59,59],"z":[9.5,9.5,9.5,7.6000000000000005,0,0]},"width":[0,18,18,18,18,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-270},"main_bottom6":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[-15.5,-15.5,-15.5,-15.5,-15.5,-15.5],"y":[55,55,56,57,59,59],"z":[-9.5,-9.5,-9.5,-7.6000000000000005,0,0]},"width":[0,18,18,18,18,0],"height":[0,3,3,3,3,0],"texture":[4,4,17,4],"angle":-270},"middle_plate6":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":0},"position":{"x":[-15.5,-15.5,-15.5,-15.5],"y":[57.400000000000006,57.400000000000006,59.400000000000006,59.400000000000006],"z":[0,0,0,0]},"width":[0,18.2,18.2,0],"height":[0,4.800000000000001,4.800000000000001,0],"angle":-270,"texture":3},"support_beam16":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-11.5,-11.5,-11.5,-11.5],"y":[50,50,60,60],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-270,"texture":[4,4,63]},"support_beam26":{"section_segments":15,"offset":{"x":0,"y":0,"z":0},"position":{"x":[-19.5,-19.5,-19.5,-19.5],"y":[50,50,60,60],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"angle":-270,"texture":[4,4,63]},"top_part1":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":0,"offset":{"x":0,"y":15,"z":12.5},"position":{"x":[48,48,50,50,48,48],"y":[-8.1,-8.1,-3.15,3.15,8.1,8.1],"z":[0,0,0,0,0,0]},"width":[0,0.5,0.5,0.5,0.5,0],"height":[0,1,1,1,1,0],"texture":4},"bottom_part1":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":0,"offset":{"x":0,"y":15,"z":12.4},"position":{"x":[48,48,50,50,48,48],"y":[-8.1,-8.1,-3.15,3.15,8.1,8.1],"z":[0,0,0,0,0,0]},"width":[0,0.9,0.9,0.9,0.9,0],"height":[0,1,1,1,1,0],"texture":63},"top_part2":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":0,"offset":{"x":0,"y":15,"z":12.5},"position":{"x":[36,36,34,34,36,36],"y":[-8.1,-8.1,-3.15,3.15,8.1,8.1],"z":[0,0,0,0,0,0]},"width":[0,0.5,0.5,0.5,0.5,0],"height":[0,1,1,1,1,0],"texture":4},"bottom_part2":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":0,"offset":{"x":0,"y":15,"z":12.4},"position":{"x":[36,36,34,34,36,36],"y":[-8.1,-8.1,-3.15,3.15,8.1,8.1],"z":[0,0,0,0,0,0]},"width":[0,0.9,0.9,0.9,0.9,0],"height":[0,1,1,1,1,0],"texture":63},"top_part3":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":-20,"offset":{"x":0,"y":-6.5,"z":12.5},"position":{"x":[48.5,48.5,49.5,49.5,48.5,48.5],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.4,0.4,0.4,0.4,0],"height":[0,1,1,1,1,0],"texture":4},"bottom_part3":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":-20,"offset":{"x":0,"y":-6.5,"z":12.4},"position":{"x":[48.5,48.5,49.5,49.5,48.5,48.5],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.8,0.8,0.8,0.8,0],"height":[0,1,1,1,1,0],"texture":63},"top_part4":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":-25,"offset":{"x":0,"y":-11.5,"z":12.5},"position":{"x":[48.4,48.4,48,48,48.4,48.4],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.4,0.4,0.4,0.4,0],"height":[0,1,1,1,1,0],"texture":4},"bottom_part4":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":-25,"offset":{"x":0,"y":-11.5,"z":12.4},"position":{"x":[48.4,48.4,48,48,48.4,48.4],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.8,0.8,0.8,0.8,0],"height":[0,1,1,1,1,0],"texture":63},"top_part5":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":25,"offset":{"x":0,"y":27.5,"z":12.5},"position":{"x":[44.4,44.4,44.8,44.8,44.4,44.4],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.4,0.4,0.4,0.4,0],"height":[0,1,1,1,1,0],"texture":4},"bottom_part5":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":25,"offset":{"x":0,"y":27.5,"z":12.4},"position":{"x":[44.4,44.4,44.8,44.8,44.4,44.4],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.8,0.8,0.8,0.8,0],"height":[0,1,1,1,1,0],"texture":63},"top_part6":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":20,"offset":{"x":0,"y":24,"z":12.5},"position":{"x":[40.8,40.8,39.8,39.8,40.8,40.8],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.4,0.4,0.4,0.4,0],"height":[0,1,1,1,1,0],"texture":4},"bottom_part6":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":20,"offset":{"x":0,"y":24,"z":12.4},"position":{"x":[40.8,40.8,39.8,39.8,40.8,40.8],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.8,0.8,0.8,0.8,0],"height":[0,1,1,1,1,0],"texture":63},"top_part7":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":20,"offset":{"x":0,"y":36.5,"z":12.5},"position":{"x":[48.5,48.5,49.5,49.5,48.5,48.5],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.4,0.4,0.4,0.4,0],"height":[0,1,1,1,1,0],"texture":4},"bottom_part7":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":20,"offset":{"x":0,"y":36.5,"z":12.4},"position":{"x":[48.5,48.5,49.5,49.5,48.5,48.5],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.8,0.8,0.8,0.8,0],"height":[0,1,1,1,1,0],"texture":63},"top_part8":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":25,"offset":{"x":0,"y":41.5,"z":12.5},"position":{"x":[48.4,48.4,48,48,48.4,48.4],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.4,0.4,0.4,0.4,0],"height":[0,1,1,1,1,0],"texture":4},"bottom_part8":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":25,"offset":{"x":0,"y":41.5,"z":12.4},"position":{"x":[48.4,48.4,48,48,48.4,48.4],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.8,0.8,0.8,0.8,0],"height":[0,1,1,1,1,0],"texture":63},"top_part9":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":-25,"offset":{"x":0,"y":2.5,"z":12.5},"position":{"x":[44.4,44.4,44.8,44.8,44.4,44.4],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.4,0.4,0.4,0.4,0],"height":[0,1,1,1,1,0],"texture":4},"bottom_part9":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":-25,"offset":{"x":0,"y":2.5,"z":12.4},"position":{"x":[44.4,44.4,44.8,44.8,44.4,44.4],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.8,0.8,0.8,0.8,0],"height":[0,1,1,1,1,0],"texture":63},"top_part10":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":-20,"offset":{"x":0,"y":6,"z":12.5},"position":{"x":[40.8,40.8,39.8,39.8,40.8,40.8],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.4,0.4,0.4,0.4,0],"height":[0,1,1,1,1,0],"texture":4},"bottom_part10":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"angle":-20,"offset":{"x":0,"y":6,"z":12.4},"position":{"x":[40.8,40.8,39.8,39.8,40.8,40.8],"y":[-2.6999999999999997,-2.6999999999999997,-1.05,1.05,2.6999999999999997,2.6999999999999997],"z":[0,0,0,0,0,0]},"width":[0,0.8,0.8,0.8,0.8,0],"height":[0,1,1,1,1,0],"texture":63},"bottom11":{"section_segments":8,"offset":{"x":5,"y":5,"z":14},"position":{"x":[0,0,0,0],"y":[-4,-4,4,4],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,1,1,0],"texture":3},"top11":{"section_segments":8,"offset":{"x":5,"y":5,"z":14.7},"position":{"x":[0.6,0.6,0.6,0.6],"y":[-4,-4,4,4],"z":[0,0,0,0]},"width":[0,0.3,0.3,0],"height":[0,0.3,0.3,0],"texture":17},"toptwo11":{"section_segments":8,"offset":{"x":5,"y":5,"z":14.7},"position":{"x":[-0.6,-0.6,-0.6,-0.6],"y":[-4,-4,4,4],"z":[0,0,0,0]},"width":[0,0.3,0.3,0],"height":[0,0.3,0.3,0],"texture":17},"bottom12":{"section_segments":8,"offset":{"x":5,"y":-8.5,"z":14.1},"position":{"x":[-2,-2,0,0],"y":[-7.5,-7.5,7.5,7.5],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,1,1,0],"texture":3},"top12":{"section_segments":8,"offset":{"x":5,"y":-8.5,"z":14.799999999999999},"position":{"x":[-1.4,-1.4,0.6,0.6],"y":[-7.5,-7.5,7.5,7.5],"z":[0,0,0,0]},"width":[0,0.3,0.3,0],"height":[0,0.3,0.3,0],"texture":17},"toptwo12":{"section_segments":8,"offset":{"x":5,"y":-8.5,"z":14.799999999999999},"position":{"x":[-2.6,-2.6,-0.6,-0.6],"y":[-7.5,-7.5,7.5,7.5],"z":[0,0,0,0]},"width":[0,0.3,0.3,0],"height":[0,0.3,0.3,0],"texture":17},"bottom13":{"section_segments":8,"offset":{"x":5,"y":30,"z":12.3},"position":{"x":[0,0,0,0],"y":[-4,-4,4,4],"z":[0.8,0.8,0,0]},"width":[0,2,2,0],"height":[0,1,1,0],"texture":3},"top13":{"section_segments":8,"offset":{"x":5,"y":30,"z":13},"position":{"x":[0.6,0.6,0.6,0.6],"y":[-4,-4,4,4],"z":[0.8,0.8,0,0]},"width":[0,0.3,0.3,0],"height":[0,0.3,0.3,0],"texture":17},"toptwo13":{"section_segments":8,"offset":{"x":5,"y":30,"z":13},"position":{"x":[-0.6,-0.6,-0.6,-0.6],"y":[-4,-4,4,4],"z":[0.8,0.8,0,0]},"width":[0,0.3,0.3,0],"height":[0,0.3,0.3,0],"texture":17},"bottom14":{"section_segments":8,"offset":{"x":2.5,"y":42,"z":10},"position":{"x":[2.5,2.5,0,0],"y":[-6,-6,6,6],"z":[1.7,1.7,0,0]},"width":[0,2,2,0],"height":[0,1,1,0],"texture":3},"top14":{"section_segments":8,"offset":{"x":2.5,"y":42,"z":10.7},"position":{"x":[3.1,3.1,0.6,0.6],"y":[-6,-6,6,6],"z":[1.7,1.7,0,0]},"width":[0,0.3,0.3,0],"height":[0,0.3,0.3,0],"texture":17},"toptwo14":{"section_segments":8,"offset":{"x":2.5,"y":42,"z":10.7},"position":{"x":[1.9,1.9,-0.6,-0.6],"y":[-6,-6,6,6],"z":[1.7,1.7,0,0]},"width":[0,0.3,0.3,0],"height":[0,0.3,0.3,0],"texture":17},"centerhubpiece1":{"section_segments":20,"vertical":true,"offset":{"x":5,"y":12.9,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-1.9,0.57,2.4699999999999998,2.28,3.04,3.23],"z":[0,0,0,0,0,0]},"width":[1.8,2.3400000000000003,2.52,1.8,0.7200000000000001,0],"height":[1.8,2.3400000000000003,2.43,1.8,0.7200000000000001,0],"texture":[4,3,11,4,18]},"partone1":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"parttwo1":{"section_segments":[45,135,225,315],"angle":60,"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"partthree1":{"section_segments":[45,135,225,315],"angle":120,"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"partfour1":{"section_segments":[45,135,225,315],"angle":180,"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"partfive1":{"section_segments":[45,135,225,315],"angle":240,"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"partsix1":{"section_segments":[45,135,225,315],"angle":300,"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"hexagonsone1":{"section_segments":[30,90,150,210,270,330],"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[2.1,2.1,2.1,2.1,2.1,2.1],"y":[-0.45,-0.45,-0.135,0.135,0.45,0.45],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonstwo1":{"section_segments":[30,90,150,210,270,330],"angle":-10,"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[1.8,1.8,1.8,1.8,1.8,1.8],"y":[0.75,0.75,1.065,1.335,1.65,1.65],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonsthree1":{"section_segments":[30,90,150,210,270,330],"angle":10,"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[1.8,1.8,1.8,1.8,1.8,1.8],"y":[-1.65,-1.65,-1.335,-1.065,-0.75,-0.75],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonsfour1":{"section_segments":[30,90,150,210,270,330],"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[-2.1,-2.1,-2.1,-2.1,-2.1,-2.1],"y":[-0.45,-0.45,-0.135,0.135,0.45,0.45],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonsfive1":{"section_segments":[30,90,150,210,270,330],"angle":10,"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[-1.8,-1.8,-1.8,-1.8,-1.8,-1.8],"y":[0.75,0.75,1.065,1.335,1.65,1.65],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonssix1":{"section_segments":[30,90,150,210,270,330],"angle":-10,"offset":{"x":5,"y":0,"z":12.9},"position":{"x":[-1.8,-1.8,-1.8,-1.8,-1.8,-1.8],"y":[-1.65,-1.65,-1.335,-1.065,-0.75,-0.75],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"centerhubpiece2":{"section_segments":20,"vertical":true,"offset":{"x":5,"y":11.1,"z":-35},"position":{"x":[0,0,0,0,0,0],"y":[-1.9,0.57,2.4699999999999998,2.28,3.04,3.23],"z":[0,0,0,0,0,0]},"width":[1.8,2.3400000000000003,2.52,1.8,0.7200000000000001,0],"height":[1.8,2.3400000000000003,2.43,1.8,0.7200000000000001,0],"texture":[4,3,11,4,18]},"partone2":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"parttwo2":{"section_segments":[45,135,225,315],"angle":60,"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"partthree2":{"section_segments":[45,135,225,315],"angle":120,"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"partfour2":{"section_segments":[45,135,225,315],"angle":180,"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"partfive2":{"section_segments":[45,135,225,315],"angle":240,"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"partsix2":{"section_segments":[45,135,225,315],"angle":300,"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[0,0,0,0],"y":[0.585,0.585,2.3850000000000002,2.3850000000000002],"z":[3.29,3.29,2.3,2.3]},"width":[0,0.27,0.27,0],"height":[0,0,0.27,0],"texture":17},"hexagonsone2":{"section_segments":[30,90,150,210,270,330],"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[2.1,2.1,2.1,2.1,2.1,2.1],"y":[-0.45,-0.45,-0.135,0.135,0.45,0.45],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonstwo2":{"section_segments":[30,90,150,210,270,330],"angle":-10,"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[1.8,1.8,1.8,1.8,1.8,1.8],"y":[0.75,0.75,1.065,1.335,1.65,1.65],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonsthree2":{"section_segments":[30,90,150,210,270,330],"angle":10,"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[1.8,1.8,1.8,1.8,1.8,1.8],"y":[-1.65,-1.65,-1.335,-1.065,-0.75,-0.75],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonsfour2":{"section_segments":[30,90,150,210,270,330],"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[-2.1,-2.1,-2.1,-2.1,-2.1,-2.1],"y":[-0.45,-0.45,-0.135,0.135,0.45,0.45],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonsfive2":{"section_segments":[30,90,150,210,270,330],"angle":10,"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[-1.8,-1.8,-1.8,-1.8,-1.8,-1.8],"y":[0.75,0.75,1.065,1.335,1.65,1.65],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonssix2":{"section_segments":[30,90,150,210,270,330],"angle":-10,"offset":{"x":5,"y":35,"z":11.1},"position":{"x":[-1.8,-1.8,-1.8,-1.8,-1.8,-1.8],"y":[-1.65,-1.65,-1.335,-1.065,-0.75,-0.75],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,1.6199999999999999,1.728,1.728,1.6199999999999999,0],"height":[0,2.28,2.28,2.28,2.28,0],"texture":[3.9,3.9,16.9,3.9]},"centerhubpiece3":{"section_segments":20,"vertical":true,"offset":{"x":0,"y":8,"z":-50},"position":{"x":[0,0,0,0,0,0],"y":[-3,0.8999999999999999,3.9000000000000004,3.5999999999999996,4.800000000000001,5.1],"z":[0,0,0,0,0,0]},"width":[4,5.2,5.6,4,1.6,0],"height":[4,5.2,5.4,4,1.6,0],"texture":[4,3,11,4,18]},"partone3":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":0,"y":50,"z":8},"position":{"x":[0,0,0,0],"y":[1.2999999999999998,1.2999999999999998,5.3,5.3],"z":[5.6,5.6,3.3999999999999995,3.3999999999999995]},"width":[0,0.6,0.6,0],"height":[0,0,0.6,0],"texture":17},"parttwo3":{"section_segments":[45,135,225,315],"angle":60,"offset":{"x":0,"y":50,"z":8},"position":{"x":[0,0,0,0],"y":[1.2999999999999998,1.2999999999999998,5.3,5.3],"z":[5.6,5.6,3.3999999999999995,3.3999999999999995]},"width":[0,0.6,0.6,0],"height":[0,0,0.6,0],"texture":17},"partthree3":{"section_segments":[45,135,225,315],"angle":120,"offset":{"x":0,"y":50,"z":8},"position":{"x":[0,0,0,0],"y":[1.2999999999999998,1.2999999999999998,5.3,5.3],"z":[5.6,5.6,3.3999999999999995,3.3999999999999995]},"width":[0,0.6,0.6,0],"height":[0,0,0.6,0],"texture":17},"partfour3":{"section_segments":[45,135,225,315],"angle":180,"offset":{"x":0,"y":50,"z":8},"position":{"x":[0,0,0,0],"y":[1.2999999999999998,1.2999999999999998,5.3,5.3],"z":[5.6,5.6,3.3999999999999995,3.3999999999999995]},"width":[0,0.6,0.6,0],"height":[0,0,0.6,0],"texture":17},"partfive3":{"section_segments":[45,135,225,315],"angle":240,"offset":{"x":0,"y":50,"z":8},"position":{"x":[0,0,0,0],"y":[1.2999999999999998,1.2999999999999998,5.3,5.3],"z":[5.6,5.6,3.3999999999999995,3.3999999999999995]},"width":[0,0.6,0.6,0],"height":[0,0,0.6,0],"texture":17},"partsix3":{"section_segments":[45,135,225,315],"angle":300,"offset":{"x":0,"y":50,"z":8},"position":{"x":[0,0,0,0],"y":[1.2999999999999998,1.2999999999999998,5.3,5.3],"z":[5.6,5.6,3.3999999999999995,3.3999999999999995]},"width":[0,0.6,0.6,0],"height":[0,0,0.6,0],"texture":17},"hexagonsone3":{"section_segments":[30,90,150,210,270,330],"offset":{"x":0,"y":50,"z":8},"position":{"x":[4.3,4.3,4.3,4.3,4.3,4.3],"y":[-1,-1,-0.3,0.3,1,1],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,3.5999999999999996,3.84,3.84,3.5999999999999996,0],"height":[0,3.5999999999999996,3.5999999999999996,3.5999999999999996,3.5999999999999996,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonstwo3":{"section_segments":[30,90,150,210,270,330],"angle":-10,"offset":{"x":0,"y":50,"z":8},"position":{"x":[4,4,4,4,4,4],"y":[1.2999999999999998,1.2999999999999998,1.9999999999999998,2.5999999999999996,3.3,3.3],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,3.5999999999999996,3.84,3.84,3.5999999999999996,0],"height":[0,3.5999999999999996,3.5999999999999996,3.5999999999999996,3.5999999999999996,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonsthree3":{"section_segments":[30,90,150,210,270,330],"angle":10,"offset":{"x":0,"y":50,"z":8},"position":{"x":[4,4,4,4,4,4],"y":[-3.3,-3.3,-2.5999999999999996,-1.9999999999999998,-1.2999999999999998,-1.2999999999999998],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,3.5999999999999996,3.84,3.84,3.5999999999999996,0],"height":[0,3.5999999999999996,3.5999999999999996,3.5999999999999996,3.5999999999999996,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonsfour3":{"section_segments":[30,90,150,210,270,330],"offset":{"x":0,"y":50,"z":8},"position":{"x":[-4.3,-4.3,-4.3,-4.3,-4.3,-4.3],"y":[-1,-1,-0.3,0.3,1,1],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,3.5999999999999996,3.84,3.84,3.5999999999999996,0],"height":[0,3.5999999999999996,3.5999999999999996,3.5999999999999996,3.5999999999999996,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonsfive3":{"section_segments":[30,90,150,210,270,330],"angle":10,"offset":{"x":0,"y":50,"z":8},"position":{"x":[-4,-4,-4,-4,-4,-4],"y":[1.2999999999999998,1.2999999999999998,1.9999999999999998,2.5999999999999996,3.3,3.3],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,3.5999999999999996,3.84,3.84,3.5999999999999996,0],"height":[0,3.5999999999999996,3.5999999999999996,3.5999999999999996,3.5999999999999996,0],"texture":[3.9,3.9,16.9,3.9]},"hexagonssix3":{"section_segments":[30,90,150,210,270,330],"angle":-10,"offset":{"x":0,"y":50,"z":8},"position":{"x":[-4,-4,-4,-4,-4,-4],"y":[-3.3,-3.3,-2.5999999999999996,-1.9999999999999998,-1.2999999999999998,-1.2999999999999998],"z":[0.3,0.3,0.3,0.3,0.3,0.3]},"width":[0,3.5999999999999996,3.84,3.84,3.5999999999999996,0],"height":[0,3.5999999999999996,3.5999999999999996,3.5999999999999996,3.5999999999999996,0],"texture":[3.9,3.9,16.9,3.9]},"firsthalf0":{"section_segments":[45,135,225,315],"vertical":true,"offset":{"x":0,"y":0,"z":7},"position":{"x":[42,42,51,51,42,42],"y":[-10.5,-10.5,-5,5,10.5,10.5],"z":[6,6,4,2,0,0]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[63]},"firsthalf1":{"section_segments":[45,135,225,315],"vertical":true,"offset":{"x":0,"y":0,"z":18},"position":{"x":[42,42,51,51,42,42],"y":[-10.5,-10.5,-5,5,10.5,10.5],"z":[6,6,4,2,0,0]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[63]},"firsthalf2":{"section_segments":[45,135,225,315],"vertical":true,"offset":{"x":0,"y":0,"z":29},"position":{"x":[42,42,51,51,42,42],"y":[-10.5,-10.5,-5,5,10.5,10.5],"z":[6,6,4,2,0,0]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[63]},"firsthalf3":{"section_segments":[45,135,225,315],"vertical":true,"offset":{"x":0,"y":0,"z":40},"position":{"x":[42,42,51,51,42,42],"y":[-10.5,-10.5,-5,5,10.5,10.5],"z":[6,6,4,2,0,0]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[63]},"firsthalf4":{"section_segments":[45,135,225,315],"vertical":true,"offset":{"x":0,"y":0,"z":51},"position":{"x":[42,42,51,51,42,42],"y":[-10.5,-10.5,-5,5,10.5,10.5],"z":[6,6,4,2,0,0]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[63]},"secondhalf0":{"section_segments":[45,135,225,315],"vertical":true,"offset":{"x":0,"y":0,"z":12},"position":{"x":[42,42,33,33,42,42],"y":[-10.5,-10.5,-5,5,10.5,10.5],"z":[0,0,2,4,6,6]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[63]},"secondhalf1":{"section_segments":[45,135,225,315],"vertical":true,"offset":{"x":0,"y":0,"z":23},"position":{"x":[42,42,33,33,42,42],"y":[-10.5,-10.5,-5,5,10.5,10.5],"z":[0,0,2,4,6,6]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[63]},"secondhalf2":{"section_segments":[45,135,225,315],"vertical":true,"offset":{"x":0,"y":0,"z":34},"position":{"x":[42,42,33,33,42,42],"y":[-10.5,-10.5,-5,5,10.5,10.5],"z":[0,0,2,4,6,6]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[63]},"secondhalf3":{"section_segments":[45,135,225,315],"vertical":true,"offset":{"x":0,"y":0,"z":45},"position":{"x":[42,42,33,33,42,42],"y":[-10.5,-10.5,-5,5,10.5,10.5],"z":[0,0,2,4,6,6]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[63]},"secondhalf4":{"section_segments":[45,135,225,315],"vertical":true,"offset":{"x":0,"y":0,"z":56},"position":{"x":[42,42,33,33,42,42],"y":[-10.5,-10.5,-5,5,10.5,10.5],"z":[0,0,2,4,6,6]},"width":[0,1,1,1,1,0],"height":[0,1,1,1,1,0],"texture":[63]}},"typespec":{"name":"Banefire","level":6,"model":7,"code":607,"specs":{"shield":{"capacity":[300,475],"reload":[5,10]},"generator":{"capacity":[250,300],"reload":[55,65]},"ship":{"mass":425,"speed":[50,75],"rotation":[40,60],"acceleration":[140,175]}},"shape":[4.449,4.462,3.866,5.925,6.35,6.578,5.866,5.113,4.621,4.277,4.115,3.923,3.992,4.43,4.551,4.727,4.871,4.59,4.38,3.762,2.865,3.078,3.705,4.528,4.52,4.449,4.52,4.528,3.705,5.14,5.389,5.354,5.145,5.025,4.875,4.764,4.695,4.683,4.683,4.695,4.764,4.875,5.025,5.145,5.354,5.389,5.14,3.296,3.866,4.462],"lasers":[{"x":3.108,"y":-5.254,"z":0.518,"angle":0,"damage":[7,10],"rate":10,"speed":[200,250],"number":1,"spread":0,"error":2,"recoil":15},{"x":3.108,"y":-5.254,"z":0.518,"angle":0,"damage":[7,10],"rate":9.9,"speed":[200,250],"number":1,"spread":0,"error":2,"recoil":15},{"x":3.108,"y":-5.254,"z":0.518,"angle":0,"damage":[7,10],"rate":9.8,"speed":[200,250],"number":1,"spread":0,"error":2,"recoil":15}],"radius":6.578}}';
s.Negator_608 = (function(){var r=Function('return(function(){var model;return model={name:\'Negator\',level:6,model:8,size:1.8,specs:{shield:{capacity:[275,340],reload:[5,7]},generator:{capacity:[150,350],reload:[30,50]},ship:{mass:225,speed:[90,110],rotation:[70,75],acceleration:[90,100]}},bodies:{main:{section_segments:8,offset:{x:0,y:-30,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-115,-110,-100,-90,-60,-30,45,90,100,120,115],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,25,35,35,35,30,20,0],height:[0,5,10,15,15,20,20,20,20,15,0],texture:[16.9,4,10,13,63,2,3,4,13,17],propeller:true},sides:{section_segments:8,offset:{x:40,y:30,z:0},position:{x:[-5,-5,-5,-3,0,0,0,0,0,0,0,0,0],y:[-80,-75,-70,-50,-40,-10,5,50,60,70,65],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,10,10,10,10,10,10,10,10,10,0],texture:[4,4,1,1,10,2,3,4,63,17],propeller:true},sides1:{section_segments:8,offset:{x:65,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,5,50,60,70,65],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,12,10,0],height:[0,5,10,15,15,15,15,15,15,10,0],texture:[17,4,13,3,1,63,2,1,13,17],propeller:true,laser:{damage:[20,35],rate:3,type:2,speed:[160,180],number:1,angle:0,recoil:50}},sides2:{section_segments:8,offset:{x:25,y:40,z:17},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,5,50,60,70,65],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,5,10,15,15,15,15,15,15,10,0],texture:[17,13,10,1,2,3,4,13,4,17],propeller:true,laser:{damage:[20,35],rate:3,type:2,speed:[160,180],number:1,angle:0,recoil:50}},sides3:{section_segments:8,offset:{x:50,y:70,z:17},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,0,20,40,50,45],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,5,10,15,15,15,15,15,15,10,0],texture:[17,13,63,13,2,1,1,3,63,17],propeller:true,laser:{damage:[20,35],rate:3,type:2,speed:[160,180],number:1,angle:0,recoil:50}},middle:{section_segments:8,offset:{x:0,y:30,z:25},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-74,-75,-70,-50,-40,-10,0,20,40,50,45],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,0,5,15,15,15,15,15,15,10,0],texture:[17,4,3,2,10,2,3,63,4,17],propeller:true},side:{section_segments:4,offset:{x:27,y:-20,z:0},position:{x:[-7,0,0,0,0,0,0],y:[-40,-15,0,0,0,0,0],z:[0,0,0,0,0,0,0]},width:[3,3,3,3,3,3,3],height:[3,3,3,3,3,3,3],texture:[0,18,2,3,4,17]},cockpit:{section_segments:8,offset:{x:0,y:-110,z:15},position:{x:[0,0,0,0,0,0,0],y:[-10,0,20,50,80,100,120],z:[0,0,0,0,0,0,0]},width:[0,10,15,17,17,15,0],height:[0,5,10,10,10,10,0],texture:[4,9,3,63,2,3]}},wings:{main:{doubleside:true,offset:{x:20,y:45,z:-5},length:[80,10,10,0],width:[70,55,50,40],angle:[0,0,0,0],position:[0,-30,-40,-60,0],texture:[10,63,1,0],bump:{position:20,size:5}},main1:{doubleside:true,offset:{x:50,y:70,z:20},length:[40,10,10,0],width:[60,50,40,30],angle:[10,15,20,0],position:[0,10,20,30,0],texture:[2,63,63,0],bump:{position:20,size:5}},main2:{doubleside:true,offset:{x:20,y:70,z:30},length:[20,10,10,0],width:[40,30,20,10],angle:[50,30,0,0],position:[0,10,20,30,0],texture:[63,4,3,0],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.22,4.805,3.838,3.158,2.722,3.504,3.693,3.693,3.482,3.285,4.5,4.458,4.354,4.324,4.213,4.112,3.939,4.508,5.355,5.691,4.88,4.83,4.774,4.323,4.031,3.246,4.031,4.323,4.774,4.83,4.88,5.691,5.355,4.508,3.939,4.112,4.213,4.324,4.354,4.458,4.5,3.285,3.482,3.693,3.693,3.504,2.722,3.158,3.838,4.805],"lasers":[{"x":2.34,"y":-2.7,"z":0,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":-2.34,"y":-2.7,"z":0,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":0.9,"y":-1.26,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.9,"y":-1.26,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.8,"y":-0.18,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50},{"x":-1.8,"y":-0.18,"z":0.612,"angle":0,"damage":[20,35],"rate":3,"type":2,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":50}],"radius":5.691}')),JSON.stringify(r)})();
s.Gedihan_609 = (function(){var r=Function('return(function(){var model;return model={name:\'Gedihan\',level:6,model:9,size:1.6,specs:{shield:{capacity:[280,280],reload:[5,5]},generator:{capacity:[250,250],reload:[55,55]},ship:{mass:200,speed:[120,120],rotation:[65,65],acceleration:[110,110]}},bodies:{main:{section_segments:12,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-160,-140,-125,-130,-100,-55,5,60,90,120,118],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,15,15,15,20,30,30,30,30,20,0],height:[0,15,15,15,20,25,25,25,25,20,0],texture:[2,63,3,3,10,2,2,1,13,17],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0,0,0,0,0,0],y:[-90,-70,-20,30,50,70,80],z:[0,0,0,0,0,0,0,0,0]},width:[0,17,20,20,20,15,0],height:[0,12,15,15,15,10,0],propeller:false,texture:[2,9,4,63,2]},cannon:{section_segments:12,offset:{x:0,y:30,z:30},position:{x:[0,0,0,0,0,0],y:[-50,-49,-35,-10,20,30],z:[0,0,0,0,0,0]},width:[0,5,10,10,10,0],height:[0,5,10,10,10,0],angle:0,laser:{damage:[63,65],rate:4,type:1,speed:[180,180],number:1,error:2.5},propeller:false,texture:[17,10,2,3,4]},cannon1:{section_segments:8,offset:{x:70,y:0,z:0},position:{x:[0,0,0,0,0,0],y:[-125,-125,-110,-50,20,50,50],z:[0,0,0,0,0,0]},width:[0,7,10,15,15,10,0],height:[0,7,10,15,15,10,0],angle:0,laser:{damage:[10,10],rate:5,type:1,speed:[150,150],number:1,error:0},propeller:true,texture:[16.9,13,4,3,13,17]},propulsors:{section_segments:12,offset:{x:40,y:30,z:0},position:{x:[0,0,0,0,0,0],y:[-70,-50,-10,30,60,55],z:[0,0,0,0,0,0]},width:[0,10,15,15,10,0],height:[0,10,15,15,10,0],texture:[4,3,13,63,17],propeller:true},cockpitShield:{section_segments:12,offset:{x:16,y:0,z:13},position:{x:[-6,-6,-3,-2,-2,-10],y:[-70,-70,-50,-20,50,70],z:[5,5,5,0,0,0]},width:[0,7,10,15,15,10],height:[0,7,10,15,15,10],angle:0,texture:[16.9,63,11,2,63,17]}},wings:{main:{doubleside:true,offset:{x:0,y:40,z:15},length:[90,20,20],width:[120,70,30],angle:[0,0,0],position:[0,-70,-110],texture:[4,63],bump:{position:0,size:5}},winglets:{doubleside:true,offset:{x:70,y:30,z:0},length:[25,10,10],width:[40,40,30],angle:[0,0,0],position:[-10,0,10],texture:[63,4],bump:{position:0,size:7}},winglets1:{doubleside:true,offset:{x:20,y:30,z:20},length:[25,10,10],width:[40,40,30],angle:[20,22,0],position:[-10,0,10],texture:[2,63],bump:{position:0,size:7}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.76,5.323,3.675,2.859,4.698,4.63,4.055,4.448,4.351,4.016,3.634,3.309,3.082,3.109,3.468,3.613,3.793,3.019,2.722,2.71,3.072,3.295,3.183,3.263,3.258,3.206,3.258,3.263,3.183,3.295,3.072,2.71,2.722,3.019,3.793,3.613,3.468,3.109,3.082,3.309,3.634,4.016,4.351,4.448,4.055,4.63,4.698,2.859,3.675,5.323],"lasers":[{"x":0,"y":-0.64,"z":0.96,"angle":0,"damage":[63,65],"rate":4,"type":1,"speed":[180,180],"number":1,"spread":0,"error":2.5,"recoil":0},{"x":2.24,"y":-4,"z":0,"angle":0,"damage":[10,10],"rate":5,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.24,"y":-4,"z":0,"angle":0,"damage":[10,10],"rate":5,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":5.76}')),JSON.stringify(r)})();
s.Vampire_610 = (function(){var r=Function('return(function(){var model;return model={name:\'Vampire\',level:6,model:10,size:1.7,specs:{shield:{capacity:[300,300],reload:[8,8]},generator:{capacity:[250,250],reload:[55,75]},ship:{mass:320,speed:[115,115],rotation:[70,70],acceleration:[120,120]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-225,-200,-180,-150,-70,-50,20,80,90,100,95],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,0,25,30,40,40,40,25,25,25,0],height:[0,0,20,25,30,30,30,30,28,25,0],texture:[17,63,10,2,2,3,4,13,13,17],propeller:true},sides:{section_segments:8,offset:{x:35,y:-20,z:0},position:{x:[0,-7,-5,0,0,-2,-3,-5,-7,-10,-10,-10,-20],y:[-90,-80,-50,-20,-10,45,50,70,90,100,95],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,15,20,20,20,20,20,20,20,20,0],height:[0,15,20,25,25,25,25,25,25,20,0],texture:[63,13,63,2,2,1,10,3,4,17],propeller:false},cockpit:{section_segments:12,offset:{x:0,y:-90,z:22},position:{x:[0,0,0,0,0,0,0],y:[-30,-10,10,50,80,110,130],z:[0,0,0,0,0,0,0]},width:[0,10,15,17,17,17,0],height:[0,15,15,15,15,15,0],propeller:false,texture:[4,63,9,3,2,1]},cannons:{section_segments:8,offset:{x:55,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0],y:[-115,-110,-80,-30,10,30,55,65,60],z:[0,0,0,0,0,0,0,0,0]},width:[0,5,10,10,10,10,10,7,0,0],height:[0,5,10,10,10,10,10,7,0,0],angle:0,propeller:true,texture:[17,63,3,10,3,4,13,6],laser:{damage:[7,7],rate:5,type:1,speed:[170,170],number:1,error:0,recoil:0}},cannons1:{section_segments:10,offset:{x:25,y:50,z:25},position:{x:[0,0,0,0,0,0,0],y:[-30,-35,-25,10,30,70,85],z:[0,0,0,0,0,0,0]},width:[0,5,9,10,10,10,0],height:[0,5,9,10,10,10,0],angle:180,propeller:true,texture:[17,63,3,2,4,2],laser:{damage:[30,30],rate:1.1,type:1,speed:[130,130],number:2,error:10,recoil:150}},reactor:{section_segments:10,offset:{x:10,y:30,z:30},position:{x:[0,0,0,0,0,0,0],y:[-50,-50,-30,-20,30,50,45],z:[0,0,0,0,0,0,0]},width:[0,5,13,13,13,10,0],height:[0,10,15,15,15,10,0],angle:0,propeller:true,texture:[17,63,10,2,13,17]}},wings:{main1:{doubleside:true,offset:{x:60,y:5,z:0},length:[0,0,0,20],width:[0,0,0,250,40],angle:[0,0,0,30],position:[20,30,0,-30,10],texture:[0,8,13,4],bump:{position:35,size:20}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[7.65,6.486,5.317,5.493,4.936,4.13,3.622,3.248,3.002,2.832,2.71,2.648,2.647,2.707,2.809,2.98,3.223,3.557,3.632,3.739,3.914,3.965,3.062,3.505,3.461,3.407,3.461,3.505,3.062,3.965,3.914,3.739,3.632,3.557,3.223,2.98,2.809,2.707,2.647,2.648,2.71,2.832,3.002,3.248,3.622,4.13,4.936,5.493,5.317,6.486],"lasers":[{"x":1.87,"y":-3.91,"z":0,"angle":0,"damage":[7,7],"rate":5,"type":1,"speed":[170,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.87,"y":-3.91,"z":0,"angle":0,"damage":[7,7],"rate":5,"type":1,"speed":[170,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.85,"y":2.89,"z":0.85,"angle":180,"damage":[30,30],"rate":1.1,"type":1,"speed":[130,130],"number":2,"spread":0,"error":10,"recoil":150},{"x":-0.85,"y":2.89,"z":0.85,"angle":-180,"damage":[30,30],"rate":1.1,"type":1,"speed":[130,130],"number":2,"spread":0,"error":10,"recoil":150}],"radius":7.65}')),JSON.stringify(r)})();
s.Preculsor_611 = '{"name":"Preculsor","designer":"Megalodon","level":6,"model":11,"size":1.9,"specs":{"shield":{"capacity":[350,350],"reload":[6,6]},"generator":{"capacity":[300,300],"reload":[50,50]},"ship":{"mass":300,"speed":[100,110],"rotation":[90,90],"acceleration":[130,130]}},"bodies":{"main":{"section_segments":9,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-150,-140,-100,-50,50,120,90],"z":[0,0,0,0,0,-2,-2]},"width":[0,6,17,24,24,20,0],"height":[0,5,14,18,20,14,0],"texture":[4,4,3,18,18,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-70,"z":14},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,35,100],"z":[0,0,0,0,0]},"width":[0,7,10,10,0],"height":[0,5,10,12,0],"texture":[9]},"cannons":{"section_segments":8,"offset":{"x":35,"y":-120,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,-20,-20,-20],"y":[35,30,54,57,92,94,120,122,163,185,185],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,3,3,4,4,3,3,5,5,5,0],"height":[0,3,3,4,4,3,3,5,5,5,0],"texture":[17,13,17,18,17,13,17,8,31,17],"laser":{"damage":[5,10],"rate":5,"type":1,"speed":[150,180],"number":7,"recoil":10,"error":5},"propeller":false},"propulsors":{"section_segments":8,"offset":{"x":25,"y":55,"z":-5},"position":{"x":[-8,-2,-2,0,0,0,0,0,0,0,0,0,0],"y":[-20,-10,0,30,50,30],"z":[5,5,5,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,9,10,8,0],"height":[0,4,6,10,8,0],"texture":[4,31,18,13,17],"propeller":true},"propulsors2":{"section_segments":8,"offset":{"x":15,"y":65,"z":-20},"position":{"x":[-8,-2,-2,0,0,0,0,0,0,0,0,0,0],"y":[-20,-10,0,30,50,30],"z":[5,5,5,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,9,10,8,0],"height":[0,4,6,10,8,0],"texture":[4,31,18,13,17],"propeller":true},"Propeller":{"section_segments":9,"offset":{"x":60,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-53,-46,-23,2,28,55,30],"z":[0,0,0,0,0,0,0]},"width":[0,5,11,8,11,8,0],"height":[0,5,10,8,10,5,0],"texture":[6,2,3,4,31,17],"propeller":true},"topdetail":{"section_segments":8,"offset":{"x":0,"y":0,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-30,0,10,60,70],"z":[0,0,0,0,0,0]},"width":[10,10,10,10,10,0],"height":[5,5,5,5,5,0],"texture":[4,10,1,10,4]}},"wings":{"main":{"offset":{"x":60,"y":10,"z":2},"length":[30,0],"width":[90,40,20],"angle":[-10,10],"position":[0,20,20],"doubleside":true,"texture":[18],"bump":{"position":30,"size":5}},"winglets":{"length":[25],"width":[30,15,20],"angle":[0,0],"position":[-50,-70,-65],"bump":{"position":0,"size":15},"texture":63,"doubleside":true,"offset":{"x":0,"y":-40,"z":2}},"side":{"doubleside":true,"offset":{"x":85,"y":47,"z":-14},"length":[10,5,10],"width":[25,50,50,25],"angle":[60,90,120,90],"position":[0,-20,-20,0],"texture":[63],"bump":{"position":0,"size":5}},"top":{"doubleside":true,"offset":{"x":10,"y":75,"z":8},"length":[30],"width":[50,20],"angle":[50],"position":[0,20],"texture":[63],"bump":{"position":10,"size":10}},"soutient":{"doubleside":true,"offset":{"x":0,"y":-25,"z":-10},"length":[40,20],"width":[15,15,10],"angle":[0,30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient1":{"doubleside":true,"offset":{"x":0,"y":0,"z":-10},"length":[40,20],"width":[15,15,10],"angle":[0,30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient2":{"doubleside":true,"offset":{"x":0,"y":25,"z":-10},"length":[40,20],"width":[15,15,10],"angle":[0,30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient3":{"doubleside":true,"offset":{"x":0,"y":50,"z":-10},"length":[40,20],"width":[15,15,10],"angle":[0,30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutienttop":{"doubleside":true,"offset":{"x":0,"y":-25,"z":10},"length":[40,20],"width":[15,15,10],"angle":[0,-30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient1top":{"doubleside":true,"offset":{"x":0,"y":0,"z":10},"length":[40,20],"width":[15,15,10],"angle":[0,-30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient2top":{"doubleside":true,"offset":{"x":0,"y":25,"z":10},"length":[40,20],"width":[15,15,10],"angle":[0,-30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient3top":{"doubleside":true,"offset":{"x":0,"y":50,"z":10},"length":[40,20],"width":[15,15,10],"angle":[0,-30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}}},"typespec":{"name":"Preculsor","level":6,"model":11,"code":611,"specs":{"shield":{"capacity":[350,350],"reload":[6,6]},"generator":{"capacity":[300,300],"reload":[50,50]},"ship":{"mass":300,"speed":[100,110],"rotation":[90,90],"acceleration":[130,130]}},"shape":[5.7,4.996,4.565,3.712,3.388,2.759,2.318,2.06,2.821,2.817,2.784,2.932,3.144,3.481,3.614,3.743,3.911,3.95,3.54,3.571,3.205,3.003,4.084,4.457,4.621,4.569,4.621,4.457,4.084,3.003,3.205,3.571,3.54,3.95,3.911,3.743,3.614,3.481,3.144,2.932,2.784,2.817,2.821,2.06,2.318,2.759,3.388,3.712,4.565,4.996],"lasers":[{"x":1.33,"y":-3.42,"z":0,"angle":0,"damage":[5,10],"rate":5,"type":1,"speed":[150,180],"number":7,"spread":0,"error":5,"recoil":10},{"x":-1.33,"y":-3.42,"z":0,"angle":0,"damage":[5,10],"rate":5,"type":1,"speed":[150,180],"number":7,"spread":0,"error":5,"recoil":10}],"radius":5.7}}';
s.Mewin_612 = '{"name":"Mewin","level":6,"model":12,"size":0.8,"specs":{"shield":{"capacity":[200,200],"reload":[5,7]},"generator":{"capacity":[200,200],"reload":[65,65]},"ship":{"mass":180,"speed":[150,150],"rotation":[80,80],"acceleration":[120,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":85,"y":80,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-120,-130,-90,-70,-60,-40,-25,40,50,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,25,25,25,30,30,30,30,20,0],"height":[0,20,25,25,25,30,30,30,30,20,0],"texture":[17,10,2,2,3,3,4,4,63,17],"propeller":true},"main1":{"section_segments":20,"offset":{"x":0,"y":70,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-250,-250,-160,-90,-60,10,30,40,60,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,45,50,50,50,50,50,50,40,0],"height":[0,20,50,50,50,50,50,50,50,40,0],"texture":[1,2,10,2,3,3,4,4,13,17],"propeller":true,"laser":{"damage":[130,130],"rate":1,"type":1,"speed":[180,180],"number":1,"error":0,"recoil":150}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":30,"z":50},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-90,-80,0,20,40,80,90],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,20,25,25,25,20,0],"height":[0,15,15,15,15,15,0],"texture":[4,9,4,3,2,2]},"cannon2":{"section_segments":12,"offset":{"x":85,"y":-35,"z":-10},"position":{"x":[0,0,0,0],"y":[-50,-50,-20,0],"z":[0,0,0,0]},"width":[0,10,15,15],"height":[0,10,15,15],"texture":[17,4,63,10],"laser":{"damage":[10,10],"rate":4,"type":1,"speed":[150,150],"number":1,"error":0}},"barr1":{"section_segments":10,"offset":{"x":50,"y":50,"z":5},"position":{"x":[-10,-5,0,0,0,-5,-15,-15],"y":[-160,-120,-80,-20,40,90,120],"z":[0,0,0,0,0,0,0,0]},"width":[0,20,20,20,20,20,0],"height":[0,20,20,20,20,20,0],"texture":[4,3,2,63,10,4,0]}},"wings":{"main":{"doubleside":true,"offset":{"x":15,"y":30,"z":-10},"length":[20,20,70,30],"width":[150,150,150,120,90],"angle":[0,-10,-10,-10],"position":[0,10,0,60,100],"texture":[0,11,11,63],"bump":{"position":35,"size":5}},"main1":{"doubleside":true,"offset":{"x":20,"y":-120,"z":0},"length":[40,0],"width":[50,40],"angle":[-15,-15],"position":[0,-30,80],"texture":63,"bump":{"position":20,"size":5}}},"typespec":{"name":"Mewin","level":6,"model":12,"code":612,"specs":{"shield":{"capacity":[200,200],"reload":[5,7]},"generator":{"capacity":[200,200],"reload":[65,65]},"ship":{"mass":180,"speed":[150,150],"rotation":[80,80],"acceleration":[120,120]}},"shape":[2.886,2.898,2.808,2.877,1.749,1.625,1.987,2.04,1.925,1.861,1.823,1.78,1.767,1.774,2.056,2.344,2.778,3.028,3.358,3.721,3.196,3.334,3.183,2.794,2.769,2.725,2.769,2.794,3.183,3.334,3.196,3.721,3.358,3.028,2.778,2.344,2.056,1.774,1.767,1.78,1.823,1.861,1.925,2.04,1.987,1.625,1.749,2.877,2.808,2.898],"lasers":[{"x":0,"y":-2.88,"z":0,"angle":0,"damage":[130,130],"rate":1,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":150},{"x":1.36,"y":-1.36,"z":-0.16,"angle":0,"damage":[10,10],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.36,"y":-1.36,"z":-0.16,"angle":0,"damage":[10,10],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.721}}';


s.Fly_791 = (function(){var r=Function('return(function(){var model;return model={name:\'Fly\',level:7.9,model:1,size:1.05,specs:{shield:{capacity:[700,700],reload:[1000,1000]},generator:{capacity:[9999,999],reload:[10000,10000]},ship:{mass:999,speed:[150,150],rotation:[150,150],acceleration:[150,150]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-65,-60,-50,-20,10,30,55,75,60],z:[0,0,0,0,0,0,0,0,0]},width:[0,8,10,30,25,30,18,15,0],height:[0,6,8,12,20,20,18,15,0],propeller:true,texture:[4,63,10,1,1,1,12,17]},cockpit:{section_segments:12,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0,0,0,0],y:[-15,0,20,30,60],z:[0,0,0,0,0]},width:[0,13,17,10,5],height:[0,18,25,18,5],propeller:false,texture:[7,9,9,4,4]},cannon:{section_segments:6,offset:{x:0,y:-15,z:-10},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,0,20,30],z:[0,0,0,0,0,20]},width:[0,5,8,11,7,0],height:[0,5,8,11,10,0],angle:0,laser:{damage:[1000,1000],rate:10,type:1,speed:[180,180],number:1,error:0},propeller:false,texture:[3,3,10,3]}},wings:{main:{length:[60,20],width:[100,50,40],angle:[-10,10],position:[0,20,10],doubleside:true,offset:{x:0,y:10,z:5},bump:{position:30,size:20},texture:[11,63]}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[1000,1000],"rate":10,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":1.856}')),JSON.stringify(r)})();

var ships = [];
for (let ship in s) ships.push(s[ship]); 

var FightingTierSix = [
  601,602,603,604,605,606,607,608,609,610,611,612
];



var map_name = [
  "Emanakalor 15", "Derababilii", "Teros 5", "Abadelio 6", "Turha", "Ghurad", "Molurtas 2",
  "Juni 5", "M-KDO 1", "Boop 9", "Blu T-5"
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
var crystal_drop = [2,2.1,2.2];
var map_id = [2739,2742,2817,2865,2900,2961];
var soundtrack = [
  "argon.mp3",
  "civilisation.mp3",
  "crystals.mp3",
  "procedurality.mp3",
  "red_mist.mp3",
  "warp_drive.pm3"
];

var random_set = function(ship) {
  ship.set({
    type: FightingTierSix[~~(Math.random()*FightingTierSix.length)],
    generator: 1000,
    shield: 1000,
    stats: 66666666,
    crystals: 500
  })
}
this.options = {
  // see documentation for options reference
  root_mode: " ",
  survival_level: 8,
  crystal_value: crystal_value[~~(Math.random()*crystal_value.length)],
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
      "Your points" : ship.custom.points + " ( " + Math.trunc(Number((Number(ship.custom.points) * 100)/Number(points))) +"% )",
      "Deaths" : ship.custom.deaths,
      "Frags" : ship.custom.frags,
      "Killed bosses": ship.custom.boss_killed,
      "Killed aliens" : ship.custom.alien_killed
    });
  } else if (ship.team !== game.custom.winner){
    ship.gameover({
      "Well..." : "You lost!",
      "Your team" : ship.custom.team,
      "Your points" : ship.custom.points + " ( " + Math.trunc(Number((Number(ship.custom.points) * 100)/Number(points))) +"% )",
      "Deaths" : ship.custom.deaths,
      "Frags" : ship.custom.frags,
      "Killed bosses": ship.custom.boss_killed,
      "Killed aliens" : ship.custom.alien_killed
    });
  }
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
  ship.set({invulnerable:600})
}


var boss_set = function(alien) {
    alien.set({
      shield: alien_shield,
      regen: 1,
      damage: 30,
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



var invulnerable = function(ship) {
  ship.set({invulnerable: 100});
};
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
  if (ship.team === 1 && ship.hue === 120) {
    ship.set({hue: 240});
  }
  if (ship.custom.team === "Volgauf" && ship.team === 0 ) {
    ship.set({team:1, hue: 240})
  }
  if (ship.custom.team === "Orgono" && ship.team === 1 ) {
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






var idleStatus = function(ship) {
  ship.set({
    idle:true
  });
};



var stopIdle = function(ship) {
  ship.custom.petrificationCount = 2;
  ship.set({idle:false});
};
var hideInstructorForShip = function(ship) {
  ship.hideInstructor();
};




var actualizationOfBatteryBox = function(ship,OneBattery,TwoBatteries, ThreeBatteries) {
  batteryBox.components[1].fill = OneBattery;
  batteryBox.components[2].fill = TwoBatteries;
  batteryBox.components[3].fill = ThreeBatteries;
  ship.setUIComponent(batteryBox);
};





var actualizePLayerPoints = function(ship, points) {
  pointsship.components[0].value = `Your points: ${points}`;
  ship.setUIComponent(pointsship);
};
        
var objective = {
  id: "objective",
  position: [37.5,-3,40,40],
  visible: true,
  components: [
    { type: "text",position:[0,0,60,60],value: `Objective: ${points}`,color:"#CDE"},
  ]
};


var tick = function(game) {
  if (game.step == 0) {
      game.custom.trigger = 0;
      game.custom.bar_width = 70;
      game.custom.bar_x = 10;
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
  }
  if (game.step % 15 == 0) {
      var alien_code = [10,11,17,18];
      var alien_type = [0,1,2,3];
      var minAs = [50,51,52,53,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70];
      var xy = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9];
      var crystals = [30,31,32,33,34,35,36,37,38,39,40];
      for (let alien of game.aliens) {
        if (game.aliens.length <= 70) {
          game.addAlien({
            x: (Math.random() - 0.5) * game.options.map_size * 10,
            y: (Math.random() - 0.5) * game.options.map_size * 10,
            code: alien_code[~~(Math.random()*alien_code.length)],
            level: alien_type[~~(Math.random()*alien_type.length)],
            crystal_drop: crystals[~~(Math.random()*crystals.length)]
          })
        }
      }
        if (game.asteroids.length <= 50) {
          game.addAsteroid({
            x: (Math.random() - 0.5) * game.options.map_size * 10,
            y: (Math.random() - 0.5) * game.options.map_size * 10,
            size: minAs[~~(Math.random()*minAs.length)],
            vx: xy[~~(Math.random()*xy.length)],
            vy: xy[~~(Math.random()*xy.length)]
          })
      }
    if (points <= game.custom.team_score_1 && game.custom.win !== true) {
      game.custom.winner = game.custom.team_1_id;
      for (let ship of game.ships) {
        gameover(ship);
      }
      game.custom.win = true;
    } else if (points <= game.custom.team_score_2 && game.custom.win !== true) {
      game.custom.winner = game.custom.team_2_id;
      for (let ship of game.ships) {
        gameover(ship);
      }
      game.custom.win = true;
    }
    for (let ship of game.ships) {
      check_hue_team(ship);
        actualize_scores(
          ship, "Orgono    (" +
          game.custom.team_score_1 + ")", "Volgauf    (" +
          game.custom.team_score_2 + ")");
          score_set_points(ship);
          if (ship.custom.team === "Orgono") {
            actualize_ennemies_and_friends(ship, "↑ Allies ↑", "↑ Enemies ↑");
          }
          if (ship.custom.team === "Volgauf") {
            actualize_ennemies_and_friends(ship, "↑ Enemies ↑", "↑ Allies ↑");
          }
          if (game.custom.number_player_t1 < 10 && game.custom.number_player_t2 < 10) {
            actualize_player_number(ship, "Orgono: 0"+game.custom.number_player_t1, "Volgauf: 0"+game.custom.number_player_t2);
          }
          if (game.custom.number_player_t1 < 10 && game.custom.number_player_t2 >= 10) {
            actualize_player_number(ship, "Orgono: 0" + game.custom.number_player_t1, "Volgauf: " + game.custom.number_player_t2);
          } 
          if (game.custom.number_player_t2 < 10 && game.custom.number_player_t1 >= 10) {
            actualize_player_number(ship, "Orgono: " + game.custom.number_player_t1, "Volgauf: 0"+ game.custom.number_player_t2);
          }
          if (game.custom.number_player_t1 >= 10 && game.custom.number_player_t2 >= 10) {
            actualize_player_number(ship, "Orgono: " + game.custom.number_player_t1,"Volgauf: " +  game.custom.number_player_t2);
          }
        if (game.custom.boss_creation !== true) {
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
          game.custom.boss_creation = true;
        }
        score_set_points(ship);
      if (ship.custom.init !== true) {
        random_set(ship);
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
        ship.instructorSays(
        `Welcome to SA. You have to fight players and aliens. Fight and don’t die. Win points with kills, make your team winning ${points} points to win. Good luck.`        )
        ship.custom.time_start_before_hiding = true;
        ship.custom.timeZ = seconds_beifre_hiding;
        ship.custom.lmfao = true;
        team_assign(ship);
        ship.setUIComponent(scoreboard);
        ship.setUIComponent(player_number);
        ship.custom.time_start_before_hiding = true;
        ship.custom.timeZ = seconds_beifre_hiding;
        ship.setUIComponent(pointsship);
        ship.custom.HiddenIN = 10;
        ship.custom.HiddenInStart = false;
        ship.setUIComponent(objective)
        }

      if (game.ships.length >= 10) {
        points = Math.round(( ( game.ships.length / 10 ) * 2 + ( (game.ships.length/10)/2 ) )* 10000);
        ship.setUIComponent(objective);
      } 
    }
  }
  if (game.step % 60 == 0 ) {
    if (game.custom.time !== -1) {
      game.custom.time--;
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
};
var hide_timer = false;
var collectibles_codes = [10,11,41,42]




var stopHealing = function(ship) {
  ship.set({healing:false});
};

var count = false;
var countSeconds = 5;
var petrificationCount = 0;
var space = "\n"



        var pointsship = {
            id: "pointsship",
            position: [27,5,65,20],
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


//game.ships[0].set({type:601,crystals:720})

//game.ships[0].set({kill:true})
var iidleFalse = function(ship) {
  ship.set({idle:false,
      x: (Math.random() - 0.5) * game.options.map_size * 10,
      y: (Math.random() - 0.5) * game.options.map_size * 10,
  });
};


var nextShip = {
  id: "nextShip",
  position: [40,85,15,10],
  clickable: true,
  visible: true,
  shortcut: 'L',
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#414141", fill:"#666666",width:10},
    { type: "text",align:"center",position:[5,30,90,45],value:"NEXT [L]",color:"#CDE"}
    ]
};
var nextShipWillBeHiddenIn = {
  id: "nextShipWillBeHiddenIn",
  position: [50,84,15,10],
  visible: true,
  components: [
    { type: "text",align:"center",position:[5,30,90,55],value:"",color:"#CDE"}
    ]
};


var actualiaznexShipHiddenIn = function(ship,value) {
  nextShipWillBeHiddenIn.components[0].value = value;
  ship.setUIComponent(nextShipWillBeHiddenIn);
};

var shipSpawn = function(ship) {
      ship.custom.HiddenIN = 15;
      ship.custom.HiddenInStart = true;
}



this.event = function(event, game) {
  let ship = event.ship;
  let alien = event.alien;
  let killer = event.killer;
  var component = event.id ;
  switch (event.name) {
    case "ui_component_clicked":
      if (component === "nextShip") {
        if (ship.type < Math.max(...FightingTierSix) ) {{
          ship.set({type: ship.type + 1,generator:0, stats:66666666, shield: 1000, crystals: 500});
        }} else if (ship.type == Math.max(...FightingTierSix) ) {
          ship.set({type:Math.min(...FightingTierSix), stats:66666666, shield: 1000 , crystals: 500});
        }
      }
    if (component == "explanationOK") {
        ship.hideInstructor();
        ship.setUIComponent({id:'explanationOK', visible:false})
        ship.setUIComponent(pointsship);
      }
      
      break ;
    case "alien_destroyed":
      if (alien !== null)
      {
        if (killer !== null) {
          killer.custom.alien_killed++;
          if (alien.code === 19 && alien.level === 3) {
              game.custom.aliens--;
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
                game.custom.team_score_1 += ((Number(alien.code) + Number(alien.level))*5);
              } else if (killer.custom.team === "Volgauf"){
                game.custom.team_score_2 += ((Number(alien.code) + Number(alien.level))*5);
              }
              killer.custom.points += ((Number(alien.code) + Number(alien.level))*5);
              actualizePLayerPoints(killer, killer.custom.points);
            }
        }
      }
      break ;
      case "ship_spawned":
        if (ship != null) {
          if (ship.custom.init == true) {
            shipSpawn(ship);
            ship.set({idle:true, invulnerable:  900});
          }
          ship.set({crystals: 500})
        }
      break ;
    case "ship_destroyed":
      if (ship !== null) {
        change_score(ship);
          if (ship.custom.team === "Orgono") {
            if (game.custom.team_score_1 - Math.trunc(((Math.trunc(ship.type / 100) * 100))) * 1.5 >= 0) {
              game.custom.team_score_1 -= Math.trunc(((Math.trunc(ship.type / 100) * 100))) * 1.5 ;
            } else {
              game.custom.team_score_1 = 0;
            }
          } else if (ship.custom.team === "Volgauf") {
            if (game.custom.team_score_2 - Math.trunc(((Math.trunc(ship.type / 100) * 100))) * 1.5  >= 0) {
              game.custom.team_score_2 -= Math.trunc(((Math.trunc(ship.type / 100) * 100))) * 1.5 ;
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
        ship.custom.batteries = 0;
      }
      break;
    case "ship_disconnected":
      if (ship.team === 0) {
        game.custom.number_player_t1--;
      } else {
        game.custom.number_player_t2--;
      }
    break;
  }
};
