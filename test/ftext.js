
function FindParentChild(poke1,poke2){
 for(var i=0;i<ParentChild.length;i++){
  if(ParentChild[i][0]==poke1
   &&ParentChild[i][1]==poke2){
   return i
  }
 }
 return -1
}

function FindPairs(poke1,poke2){
 for(var i=0;i<Pairs.length;i++){
  if((Pairs[i][0]==poke1
   &&Pairs[i][1]==poke2)
   ||(Pairs[i][0]==poke2
   &&Pairs[i][1]==poke1)){
   return i
  }
 }
 return -1
}

function FindLovers(poke1,poke2){
 for(var i=0;i<Lovers.length;i+=2){
  if((Lovers[i]==poke1
   &&Lovers[i+1]==poke2)
   ||(Lovers[i]==poke2
   &&Lovers[i+1]==poke1)){
   return i
  }
 }
 return -1
}

function FindFlavorTextHead(mtype,poke1,poke2){
 var ret=[]
 switch(mtype){
  case 0:
   for(var i=0;i<Title8.length;i++){
    ret[ret.length]=[8,12,i,Title8[i]]
   }
   break
  case 1:
   var pc=FindParentChild(poke1,poke2)
   if(pc>=0){
    ret[ret.length]=[4,6,pc,Title4]
   }
   pc=FindPairs(poke1,poke2)
   if(pc>=0){
    ret[ret.length]=[5,7,pc,Pairs[pc][2]]
   }
   for(var i=0;i<Title9.length;i++){
    ret[ret.length]=[9,13,i,Title9[i]]
   }
   break
  case 2:
   var pc=FindLovers(poke1,poke2)
   if(pc>=0){
    ret[ret.length]=[6,8,pc,Title6]
   }
   for(var i=0;i<Title10.length;i++){
    ret[ret.length]=[10,14,i,Title10[i]]
   }
   break
  case 3:
   ret[ret.length]=[11,15,pc,Title11]
   break
  case 4:
   ret[ret.length]=[12,16,pc,Title12]
   break
 }
 return ret
}

function AddUniqueGood(ret,di1,di2,idx){
 for(var i=0;i<ret.length;i++){
  if(ret[i][0]==di1&&ret[i][1]==di2){
   return
  }
 }
 ret[ret.length]=[di1,di2,idx]
}

function GetGood(textid,dungeon,floor,d1size,d2size,d3size){
 var ret=[]
 for(i=0;i<256;i++){
  var di1=(i+dungeon)&0xFF //line 1
  var di2=(i+floor)&0xFF //line 2
  var di3
  di1%=d1size;
  di2%=d2size;
  if(textid>=0){
   di3=(i+dungeon)&0xFF //head
   di3%=d3size;
   if(di3==textid){
    AddUniqueGood(ret,di1,di2,i)
   }
  } else {
   AddUniqueGood(ret,di1,di2,i)
  }  
 }
 return ret
}

function FindFlavorTextLines(
  headid,bodyid,textid,dungeon,floor
){
 var ret=[]
 switch(headid*1){
  case 4:
   ret[ret.length]=[0,0,textid,ParentChild[textid][2]]
   break
  case 5:
   ret[ret.length]=[0,0,textid,Pairs[textid][3]]
   break
  case 6:
   var g=GetGood(-1,dungeon,floor,6,6,-1);
   for(var i=0;i<g.length;i++){
    ret[ret.length]=[g[i][0],g[i][1],g[i][2],Text5a[g[i][0]]+" "+Text5b[g[i][1]]]
   }
   break
  case 8:
   var g=GetGood(textid*1,dungeon,floor,0x0d,0xd,15);
   for(var i=0;i<g.length;i++){
    ret[ret.length]=[g[i][0],g[i][1],g[i][2],Text1a[g[i][0]]+" "+Text1b[g[i][1]]]
   }
   break
  case 9:
   var g=GetGood(textid*1,dungeon,floor,0x2d,10,10);
   for(var i=0;i<g.length;i++){
    ret[ret.length]=[g[i][0],g[i][1],g[i][2],Text2a[g[i][0]]+" "+Text2b[g[i][1]]]
   }
   break
  case 10:
   var g=GetGood(textid*1,dungeon,floor,0x14,4,4);
   for(var i=0;i<g.length;i++){
    ret[ret.length]=[g[i][0],g[i][1],g[i][2],Text3a[g[i][0]]+" "+Text3b[g[i][1]]]
   }
   break
  case 11:
  case 12:
   var g=GetGood(-1,dungeon,floor,0x16,0x16,-1);
   for(var i=0;i<g.length;i++){
    ret[ret.length]=[g[i][0],g[i][1],g[i][2],Text4a[g[i][0]]+" "+Text4b[g[i][1]]]
   }
   break
 }
 return ret
}


function FindFlavorTextLine1(headid,bodyid,textid){
 var ret=[]
 switch(headid*1){
  case 4:
   ret[ret.length]=[textid,ParentChild[textid][2]]
   break
  case 5:
   ret[ret.length]=[textid,Pairs[textid][3]]
   break
  case 6:
   for(var i=0;i<Text5a.length;i++){
    ret[ret.length]=[i,Text5a[i]]
   }
   break
  case 8:
   for(var i=0;i<Text1a.length;i++){
    ret[ret.length]=[i,Text1a[i]]
   }
   break
  case 9:
   for(var i=0;i<Text2a.length;i++){
    ret[ret.length]=[i,Text2a[i]]
   }
   break
  case 10:
   for(var i=0;i<Text3a.length;i++){
    ret[ret.length]=[i,Text3a[i]]
   }
   break
  case 11:
  case 12:
   for(var i=0;i<Text4a.length;i++){
    ret[ret.length]=[i,Text4a[i]]
   }
   break
 }
 return ret
}

function FindFlavorTextLine2(headid,bodyid,textid){
 var ret=[]
 switch(headid*1){
  case 4:
  case 5:
   break;
  case 6:
   for(var i=0;i<Text5b.length;i++){
    ret[ret.length]=[i,Text5b[i]]
   }
   break
  case 8:
   for(var i=0;i<Text1b.length;i++){
    ret[ret.length]=[i,Text1b[i]]
   }
   break
  case 9:
   for(var i=0;i<Text2b.length;i++){
    ret[ret.length]=[i,Text2b[i]]
   }
   break
  case 10:
   for(var i=0;i<Text3b.length;i++){
    ret[ret.length]=[i,Text3b[i]]
   }
   break
  case 11:
  case 12:
   for(var i=0;i<Text4b.length;i++){
    ret[ret.length]=[i,Text4b[i]]
   }
   break
 }
 return ret
}

function FindGood(d1,d2,d1size,d2size,t1,t2){
 for(var i=0xFF0000;i<=0xFFFFFF;i++){
  var di1=(i+d1)&0xFF
  var di2=(i+d2)&0xFF
  if((di1%d1size)==t1
   &&(di2%d2size)==t2){
   return i&0xFFFF
  }
 }
 return -1
}

function FindGood3(d1,d2,d1size,d2size,d3size,t1,t2,t3){
 for(var i=0xFF0000;i<=0xFFFFFF;i++){
  var di1=(i+d1)&0xFF
  var di2=(i+d2)&0xFF
  var di3=(i+d1)&0xFF
  if((di1%d1size)==t1
   &&(di2%d2size)==t2
   &&(di3%d3size)==t3
  ){
   return i&0xFFFF
  }
 }
 return -1
}

function PassSetGoodHelper(pass,fg){
 if(fg==-1){
  alert("A Wonder Mail couldn't be generated for the text chosen.")
  pass[8]=0xFF
  pass[9]=0xFF
  pass[10]=0xFF
 } else if(fg<=0xFF){
  pass[8]=fg
  pass[9]=Math.floor(Math.random()*255)
  pass[10]=0xFF
 } else {
  pass[8]=(fg&0xFF)
  pass[9]=(fg>>8)&0xFF
  pass[10]=0xFF
 }
}

function PassSetGood(pass,d1,d2,d1size,d2size,t1,t2){
 var fg=FindGood(d1,d2,d1size,d2size,t1,t2)
 PassSetGoodHelper(pass,fg)
}

function PassSetGood3(pass,d1,d2,d1size,d2size,d3size,t1,t2,t3){
 var fg=FindGood3(d1,d2,d1size,d2size,d3size,t1,t2,t3)
 PassSetGoodHelper(pass,fg)
}


function PassSetFlavorText(pass,headid,bodyid,textid,line1id){
 var ret=[]
 textid*=1
 line1id*=1
 switch(headid*1){
  case 4://ParentChild
   pass[2]=7
   pass[8]=Math.floor(Math.random()*256)
   pass[9]=Math.floor(Math.random()*256)
   pass[10]=0xFF
   break
  case 5://Pairs
   pass[2]=8
   pass[8]=Math.floor(Math.random()*256)
   pass[9]=Math.floor(Math.random()*256)
   pass[10]=0xFF
   break;
  case 6://Lovers
   pass[2]=9
   pass[8]=line1id
   pass[9]=Math.floor(Math.random()*256)
   pass[10]=0xFF
   break
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
   pass[2]=0
   pass[8]=line1id
   pass[9]=Math.floor(Math.random()*256)
   pass[10]=0xFF
 }
 return ret
}

function FlavorText(pass){
 var msgtype=pass[2]
 var missions=[3,4,5,1,2]
 if(msgtype>0){
  msgtype--
  if(msgtype<=8){
   switch(msgtype){
    case 0:return [0,0,6]
    case 1:return [1,1,6]
    case 2:return [2,2,6]
    case 3:return [3,3,6]
    case 4:
     if(pass[1]==3)
      return [11,4,1]
     else
      return [12,4,2]
    case 5:
     if(pass[1]==3)
      return [11,5,1]
     else
      return [12,5,2]
    case 6:
     var poke1=pass[12]|(pass[13]<<8)
     var poke2=pass[14]|(pass[15]<<8)
     if(FindParentChild(poke1,poke2)>=0)
      return [4,6,4]
     else
      return [9,6,4]
    case 7:
     var poke1=pass[12]|(pass[13]<<8)
     var poke2=pass[14]|(pass[15]<<8)
     if(FindPairs(poke1,poke2)>=0)
      return [5,7,4]
     else
      return [9,7,4]
    case 8:
     var poke1=pass[12]|(pass[13]<<8)
     var poke2=pass[14]|(pass[15]<<8)
     if(FindLovers(poke1,poke2)>=0)
      return [6,8,5]
     else
      return [10,8,5]
   }
  }
 }
 return [8+pass[1],12+pass[1],missions[pass[1]]]
}

function FlavorTextBody(pass,ftext){
 var mid=pass[8]|(pass[9]<<8)|(pass[10]<<16)
 var dungid=mid+pass[4]
 var floorid=mid+pass[5]
 dungid&=0xFF;
 floorid&=0xFF;
 switch(ftext[1]){
  case 0:return Mankey
  case 1:return Smeargle
  case 2:return Medicham
  case 3:return ""
  case 4:
   var item=items[pass[18]]
   return Text4.replace(/\%s/g,item)
  case 5:
   var item=items[pass[18]]
   return Text5.replace(/\%s/g,item)
  case 6:
   var poke1=pass[12]|(pass[13]<<8)
   var poke2=pass[14]|(pass[15]<<8)
   var pc=FindParentChild(poke1,poke2)
   if(pc>=0){
    return ParentChild[pc][2]
   }
   return ""
  case 7:
   var poke1=pass[12]|(pass[13]<<8)
   var poke2=pass[14]|(pass[15]<<8)
   var pc=FindPairs(poke1,poke2)
   if(pc>=0){
    var pkmn=pokemon[poke2]
    return Pairs[pc][3].replace(/\%s/g,pkmn)
   }
   return ""
  case 8:
   var poke2=pass[14]|(pass[15]<<8)
   var pkmn=pokemon[poke2]
   return Text5a[dungid%Text5a.length].replace(/\%s/g,pkmn)
         +" <!--break-->"+Text5b[floorid%Text5b.length]
  case 9:return Text9
  case 10:return Text10
  case 11:return Text11
  case 12:
   return Text1a[dungid%Text1a.length]
         +" <!--break-->"+Text1b[floorid%Text1b.length]
  case 13:
   var poke2=pass[14]|(pass[15]<<8)
   var pkmn=pokemon[poke2]
   return Text2a[dungid%Text2a.length].replace(/\%s/g,pkmn)
         +" <!--break-->"+Text2b[floorid%Text2b.length]
  case 14:
   var poke2=pass[14]|(pass[15]<<8)
   var pkmn=pokemon[poke2]
   return Text3a[dungid%Text3a.length].replace(/\%s/g,pkmn)
         +" <!--break-->"
         +Text3b[floorid%Text3b.length].replace(/\%s/g,pkmn)
  case 15:
  case 16:
   var item=items[pass[16]]
   return Text4a[dungid%Text4a.length].replace(/\%s/g,item)
         +" <!--break-->"+Text4b[floorid%Text4b.length]
 }
 return ""
}

function FlavorTextHead(pass,ftext){
 var mid=pass[8]|(pass[9]<<8)|(pass[10]<<16)
 var dungid=mid+pass[4]
 dungid&=0xFF;
 switch(ftext[0]){
  case 0:return MankeyTitle
  case 1:return SmeargleTitle
  case 2:return MedichamTitle
  case 3:return ""
  case 4:return Title4
  case 5:
   var poke1=pass[12]|(pass[13]<<8)
   var poke2=pass[14]|(pass[15]<<8)
   var pc=FindPairs(poke1,poke2)
   if(pc>=0){
    return Pairs[pc][2]
   }
   return ""
  case 6:return Title6
  case 7:
   var item=items[pass[16]]
   return Title7.replace(/\%s/g,item)
  case 11:
   var item=items[pass[16]]
   return Title11.replace(/\%s/g,item)
  case 12:
   var item=items[pass[16]]
   return Title12.replace(/\%s/g,item)
  case 8:
   var poke2=pass[14]|(pass[15]<<8)
   var pkmn=pokemon[poke2]
   return Title8[dungid%Title8.length].replace(/\%s/g,pkmn)
  case 9:
   var poke2=pass[14]|(pass[15]<<8)
   var pkmn=pokemon[poke2]
   return Title9[dungid%Title9.length].replace(/\%s/g,pkmn)
  case 10:
   var poke2=pass[14]|(pass[15]<<8)
   var pkmn=pokemon[poke2]
   return Title10[dungid%Title10.length].replace(/\%s/g,pkmn)
 }
 return ""
}

function DebugFlavorText(pass){
 var ftext=FlavorText(pass)
 var h=FlavorTextHead(pass,ftext)
 var b=FlavorTextBody(pass,ftext)
 alert([h,b,ftext])
}