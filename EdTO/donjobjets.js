var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var DungeonItems=[
[55,66,105],
[7,55,66,67,69,72,82,105],
[7,55,66,67,72,77,86,92,105,182,183,184,189,200,218],
[55,58,63,66,67,72,77,82,86,88,89,90,91,92,93,94,95,96,97,105,182,183,184,188,200,201,202,218],
[7,19,33,55,63,66,67,72,77,82,86,87,88,90,92,94,96,98,99,100,105,182,183,184,200,201,202,218],
[7,19,25,33,55,66,67,72,77,82,86,87,88,90,91,92,93,94,95,96,98,101,105,129,130,133,134,136,143,144,145,151,152,154,155,158,164,165,166,167,168,169,170,232],
[55,72,77,86,87,89,90,91,92,93,94,95,98,102,105],
[7,19,33,55,63,66,67,72,77,82,86,87,90,91,92,93,94,95,96,98,102,105,129,130,133,134,136,143,144,145,151,152,154,155,158,164,165,166,167,168,169,170,232],
[7,19,20,25,31,55,66,67,72,77,82,86,87,88,90,91,92,93,94,95,96,98,102,105,129,130,133,134,136,143,144,145,151,152,154,155,158,164,165,166,167,168,169,170,232],
[7,19,33,87,92,93,94,98,101,102,105,129,130,133,134,136,143,144,145,151,152,154,155,158,164,165,166,167,168,169,170,232],
[87,105],
[7,19,20,31,33,55,66,67,72,77,82,86,88,90,91,92,93,94,95,96,101,102,105,129,130,133,134,136,143,144,145,151,152,154,155,158,164,165,166,167,168,169,170,232],
[55,58,67,77,88,91,105],
[2,7,10,19,20,21,31,33,55,58,66,67,72,77,82,86,88,90,91,92,93,94,95,96,98,99,100,101,102,105,129,130,133,134,136,137,143,144,145,148,151,152,154,155,158,164,165,166,167,168,169,170,232],
[55,58,67,77,86,88,90,91,92,93,94,95,96,98,102,105],
[2,3,7,10,12,17,18,19,20,21,22,25,29,31,33,82,87,98,101,102,105,125,129,130,133,134,136,143,144,145,146,148,150,151,152,154,155,158,159,162,164,165,166,167,168,169,170,232],
[105],
[2,3,10,12,17,18,19,20,21,22,25,29,31,33,35,82,91,93,95,98,99,105,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,157,158,159,162,164,165,166,167,168,169,170,232],
[10,12,16,17,18,19,20,21,22,29,31,33,35,105,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,157,158,159,162,164,165,166,167,168,169,170],
[7,10,11,12,13,17,18,19,20,21,22,25,30,31,35,44,53,55,61,65,66,67,68,69,71,72,77,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,105,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[2,3,7,10,11,12,13,17,18,19,20,21,22,25,30,31,35,44,53,55,63,66,67,68,69,71,77,84,88,105,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[105],
[55,58,67,77,86,88,90,91,92,93,94,95,96,98,102,105],
[53,55,58,63,66,67,68,69,72,77,78,79,80,81,105,123],
[1,2,3,7,9,53,55,56,61,65,67,68,71,72,77,82,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,2,3,7,9,53,55,56,61,65,67,68,71,72,77,82,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,2,3,7,9,10,11,12,13,15,17,18,19,20,21,22,24,27,29,30,31,33,34,35,38,42,43,44,45,53,55,56,57,58,61,63,64,65,66,67,68,69,71,72,75,76,77,85,105,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,163,164,165,166,167,168,169,170,173,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,195,196,197,199,200,201,202,203,204,207,208,211,212,213,214,218,219,221,222,223,232],
[1,2,3,7,9,10,11,12,13,14,15,17,18,19,20,21,22,24,27,29,30,31,33,34,35,38,42,44,45,53,55,56,57,58,61,63,64,65,66,67,68,69,71,72,75,76,77,82,105,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,163,164,165,166,167,168,169,170,173,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,195,196,197,199,200,201,202,203,204,207,208,211,212,214,218,219,221,222,223,232],
[2,3,7,10,12,16,17,18,19,20,21,22,25,29,30,31,53,55,58,63,64,65,66,67,72,77,105,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218,232],
[2,3,7,10,12,16,17,18,19,20,21,22,25,29,30,31,53,55,58,63,64,65,66,67,72,77,105,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218,232],
[1,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,37,38,39,40,41,42,44,45,46,53,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[7,10,19,20,21,25,31,105,123,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[7,14,15,16,17,24,27,29,30,33,34,38,53,55,66,67,83,105,115,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,2,3,7,14,15,16,17,24,27,29,30,33,34,38,44,53,55,57,58,59,61,63,64,65,66,67,68,69,71,72,75,76,77,83,105,117,125,126,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,2,3,7,14,15,16,17,24,27,29,30,33,34,38,53,55,57,58,59,61,63,64,65,66,67,68,69,71,72,75,76,77,78,79,80,81,82,105,113,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,2,3,7,14,15,16,17,24,27,29,30,33,34,38,53,55,57,58,59,61,63,64,65,66,67,68,69,71,72,75,76,77,78,79,80,81,82,105,114,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,7,10,11,12,13,17,18,30,31,34,35,44,45,53,55,64,66,67,72,77,105,111,112,123,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218,232],
[1,2,3,7,14,15,16,17,24,27,29,30,33,34,38,53,55,57,58,59,61,63,64,65,66,67,68,69,71,72,75,76,77,78,79,80,81,82,105,108,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,2,3,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,24,27,29,30,31,32,33,34,35,38,39,40,41,42,44,45,53,55,58,63,66,67,68,69,72,77,84,105,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,157,158,159,162,164,165,166,167,168,169,170],
[1,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,37,38,39,40,41,42,44,45,46,53,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[105],
[7,8,10,12,13,16,17,19,20,21,22,24,25,27,29,31,32,35,38,39,40,53,59,61,67,68,69,105,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,213,218],
[53,55,66,67,72,82,89,97,104,105],
[7,19,30,33,34,53,55,63,66,67,72,77,82,86,87,88,90,92,94,96,98,99,100,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[7,19,30,33,34,53,55,63,66,67,72,77,82,86,87,88,90,92,94,96,98,99,100,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[7,8,10,12,13,16,17,19,20,21,22,23,24,25,27,29,31,32,35,38,39,40,53,59,61,67,68,69,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[7,8,10,12,13,16,17,19,20,21,22,23,24,25,27,29,31,32,35,38,39,40,53,59,61,67,68,69,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[7,53,55,64,66,67,72,77,83,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[7,53,55,64,66,67,72,77,82,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[2,3,7,10,12,16,17,18,19,20,21,22,25,29,30,31,53,55,58,63,64,65,66,67,72,77,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,37,38,39,40,41,42,44,45,46,53,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,2,3,7,10,12,13,16,17,19,20,21,22,23,24,25,27,29,31,32,35,38,39,40,53,55,56,58,59,61,63,64,65,66,67,68,69,71,72,75,76,77,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[53,55,58,66,67,71,72,77,82,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102],
[53,55,58,59,61,63,66,67,68,72,75,76,82,89,90,92,94,97,105,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,162,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218,232],
[1,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,37,38,39,40,41,42,44,45,46,53,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,37,38,39,40,41,42,44,45,46,53,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[8,53,55,66,67,71,72,77,105],
[7,8,53,55,65,66,67,71,77,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,2,3,7,8,10,14,15,16,17,18,19,20,21,22,27,31,33,34,35,39,40,41,43,44,53,55,56,58,59,61,63,64,65,66,67,68,69,71,72,74,77,78,79,80,81,83,85,105,125,128,129,130,131,133,134,135,136,137,140,142,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,161,162,163,164,165,166,167,168,169,170,178,180,181,182,183,184,185,186,187,188,189,190,191,192,195,196,197,199,200,201,202,203,204,205,206,207,208,211,212,213,214,215,217,218,219,221,222,223,232],
[7,8,10,12,13,16,17,19,20,21,22,23,24,25,27,29,31,32,35,38,39,40,53,59,61,67,68,69,105,109,110,123,125,128,129,130,133,134,136,137,140,143,144,145,146,148,150,151,152,153,154,155,156,157,158,164,165,166,167,168,169,170,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[59,61,64,67,68,69,72,105],
[1,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,37,38,39,40,41,42,44,45,46,53,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,156,180,182,183,184,189,191,192,193,200,201,202,204,205,218],
[1,2,3,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,29,30,31,32,33,34,35,37,38,39,40,41,42,43,44,45,53,55,56,57,59,60,61,62,63,64,65,66,67,68,69,71,72,73,74,75,76,77,82,83,84,105,125,128,129,130,131,133,134,135,136,137,140,142,143,144,145,146,148,150,151,152,153,154,155,156,157,158,159,161,162,163,164,165,166,167,168,169,170,173,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,195,196,197,198,199,200,201,202,203,204,205,206,207,208,211,212,213,214,215,217,218,219,221,222,223,232]
]
function ItemInDungeon(item,dungeon){
 var i
 if(item<=0||dungeon>=DungeonItems.length)
  return 0
 var len=DungeonItems[dungeon].length
 for(var i=0;i<len;i++){
  if(item==DungeonItems[dungeon][i]){
   return 1
  }
 }
 return 0
}


}
