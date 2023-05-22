var codeswitch=
"0D07190F041D2A3108132D180E1A1B29"+
"0120212211332600350A2B1F12232C17"+
"27101C300B022409320528342E031E0C"+
"25142F160615"

var wondercode=
"0C061308040D0F091002141200150B05"+
"1703110A010E1607"

var chars="?67NPR89F0+.STXY45MCHJ-K12!%3Q#W"

var a8=
"04060A0E0A0B040D0F0D040A06100618"+
"041A0A2964150564150C64641A1A0D15"+
"331F1F1F151F100D141F0B1015151F05"+
"050B033346101F14140C644C29646402"

var charto=
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"+
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"+
"FF1AFF1EFF1BFFFFFFFFFF0AFF160BFF"+
"0918191C101101020607FFFFFFFFFF00"+
"FFFFFF13FFFF08FF14FF1517FF120309"+
"041D050C0DFFFF1F0E0FFFFFFFFFFFFF"+
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"+
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"+
"FFFFFFFFFF0BFFFFFFFFFFFFFFFFFFFF"+
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"+
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"+
"FFFFFFFFFFFFFFFFFFFFFFFFFF1E1BFF"+
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"+
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"+
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"+
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"

function c2c(s,c){
 return parseInt(s.substr(c<<1,2),16)
}
function c2w(s,c){
 return c2c(s,c<<1)|(c2c(s,(c<<1)+1)<<8)
}


function CharToCode(c){
 return parseInt(charto.substr(c<<1,2),16)
}

function encodebits(astate,aout,aoutStart,iter){
 var bit=0
 var pointer=aoutStart
 var i=0
 for(i=0;i<iter;i++){
  var nextbyte=aout[pointer]
  var nextbit=nextbyte>>bit
  if(nextbit&1)
   astate.buf[astate.ptr]|=(1<<astate.bit)
  bit++
  if(bit==8){
   pointer++
   bit=0
  }
  astate.bit++
  if(astate.bit==8){
   astate.ptr++
   astate.bit=0
  }
  astate.totalbits++
 }
}

function decodebits(astate,aout,aoutStart,iter){
 var bit=0
 var pointer=aoutStart
 var i=0
 for(i=0;i<iter;i++){
  if(bit==0){
   aout[pointer]=0
  }
  nextbyte=astate.buf[astate.ptr]
  nextbit=nextbyte>>astate.bit
  if(nextbit&1)
   aout[pointer]|=(1<<bit)
  bit++
  if(bit==8){
   pointer++
   bit=0
  }
  astate.bit++
  if(astate.bit==8){
   astate.ptr++
   astate.bit=0
  }
  astate.totalbits++
 }
}

function dobits(astate,aout){
 var i
 var last=[0]
 for(i=0;i<0x38;i++){
  aout[i]=0
 }
 decodebits(astate,aout,0,4)
 decodebits(astate,aout,4,7)
 decodebits(astate,aout,5,7)
 decodebits(astate,aout,8,0x18)
 decodebits(astate,aout,12,9)
 decodebits(astate,aout,16,0x20)
 decodebits(astate,aout,20,0x50)
 decodebits(astate,aout,32,8)
 decodebits(astate,aout,33,8)
 decodebits(astate,aout,34,8)
 decodebits(astate,aout,36,32)
 decodebits(astate,aout,40,32)
 decodebits(astate,aout,44,8)
 decodebits(astate,last,0,1)
 aout[45]=last[0]&1
}

function dobitsrev(astate,aout){
 var i
 for(i=0;i<0x22;i++){
  astate.buf[i]=0
 }
 encodebits(astate,aout,0,4)
 encodebits(astate,aout,4,7)
 encodebits(astate,aout,5,7)
 encodebits(astate,aout,8,0x18)
 encodebits(astate,aout,12,9)
 encodebits(astate,aout,16,0x20)
 encodebits(astate,aout,20,0x50)
 encodebits(astate,aout,32,8)
 encodebits(astate,aout,33,8)
 encodebits(astate,aout,34,8)
 encodebits(astate,aout,36,32)
 encodebits(astate,aout,40,32)
 encodebits(astate,aout,44,8)
 encodebits(astate,aout,45,1)
}

function wonderbits(astate,aout){
 var i
 var last=[0]
 for(i=0;i<0x14;i++){
  aout[i]=0
 }
 decodebits(astate,aout,0,4)
 decodebits(astate,aout,1,3)
 decodebits(astate,aout,2,4)
 decodebits(astate,aout,0x0c,9)
 decodebits(astate,aout,0x0e,9)
 decodebits(astate,aout,0x10,8)
 decodebits(astate,aout,0x11,4)
 decodebits(astate,aout,0x12,8)
 decodebits(astate,aout,0x13,6)
 decodebits(astate,aout,0x08,0x18)
 decodebits(astate,aout,4,7)
 decodebits(astate,aout,5,7)
}

function wonderbitsrev(astate,aout){
 var i
 for(i=0;i<0x0F;i++){
  astate.buf[i]=0
 }
 encodebits(astate,aout,0,4)
 encodebits(astate,aout,1,3)
 encodebits(astate,aout,2,4)
 encodebits(astate,aout,0x0c,9)
 encodebits(astate,aout,0x0e,9)
 encodebits(astate,aout,0x10,8)
 encodebits(astate,aout,0x11,4)
 encodebits(astate,aout,0x12,8)
 encodebits(astate,aout,0x13,6)
 encodebits(astate,aout,0x08,0x18)
 encodebits(astate,aout,4,7)
 encodebits(astate,aout,5,7)
}



function tostr(x){
 var nx=[]
 for(var i=0;i<x.length;i++){
  if(typeof x[i]!='undefined'){
   nx[i]=x[i].toString(16)
   if(nx[i].length==1)nx[i]="0"+nx[i]
  }
 }
 return nx.join(",")
}

function str2arr(x){
 var arr=[]
 for(var i=0;i<x.length;i++){
  arr[arr.length]=x.charAt(i)
 } 
 return arr
}

function convpasshelper(src,dst,size){
 var i
 var codes=[]
 var astate=new Object()
 for(i=0;i<size;i++){
  var tos=CharToCode(src[i].charCodeAt(0))
  codes[i]=tos
  if(tos==0xff){
   return 0
  }
 }
 r2=size*5+5
 if(r2<0)r2+=7
 r2>>=3
 astate.buf=[]
 astate.bit=astate.ptr=astate.totalbit=0
 for(i=0;i<r2;i++){
  astate.buf[i]=0
 }
 for(i=0;i<size;i++){
  encodebits(astate,codes,i,5); 
 }
 for(i=0;i<r2;i++){
  dst[i]=astate.buf[i]
 } 
 return 1
}

function convertpass(pass,aout){
 var i=0
 if(pass.length<0x36)
  return 0
 var newpass=[]
 pass=str2arr(pass)
 for(i=0;i<0x36;i++){
  var offset=c2c(codeswitch,i)
  var k=0,j=0
  if(offset!=k){
   k=offset
  }
  newpass[i]=pass[k]
 }
 var code=[]
 if(!convpasshelper(newpass,code,0x36))
  return 0
 var sum=0
 for(i=1;i<0x22;i++){
  sum+=code[i]+i
  sum&=0xFF
 }
 if(sum!=code[0]){
  return 0;
 }
 var astate=new Object()
 astate.buf=code.slice(1)
 astate.bit=astate.ptr=astate.totalbit=0
 dobits(astate,aout)
 return 1
}


function datatopass(pass){
 var astate=new Object()
 var astate2=new Object()
 var codes=[]
 var retpass=[]
 astate.buf=[]
 astate.bit=astate.ptr=astate.totalbit=0
 dobitsrev(astate,pass)
 var sum=0
 for(i=0;i<0x21;i++){
  sum+=astate.buf[i]+(i+1)
  sum&=0xFF
 }
 astate2.buf=[]
 astate2.bit=astate2.ptr=astate2.totalbit=0
 astate2.buf[0]=sum
 for(i=1;i<0x22;i++){
  astate2.buf[i]=astate.buf[i-1]
 }
 for(i=0;i<0x36;i++){
  decodebits(astate2,codes,i,5); 
 }
 for(i=0;i<0x36;i++){
  codes[i]=chars.charAt(codes[i])
 }
 for(i=0;i<0x36;i++){
  var offset=0
  for(j=0;j<0x36;j++){
   if(c2c(codeswitch,j)==i){
    offset=j
    break
   }
  }
  retpass[i]=codes[offset]
 }
 return retpass.join("")
}

function convertwonderpass(pass,aout){
 var i=0
 if(pass.length<0x18)
  return 0
 var newpass=[]
 pass=str2arr(pass)
 for(i=0;i<0x18;i++){
  var offset=c2c(wondercode,i)
  var k=0,j=0
  if(offset!=k){
   k=offset
  }
  newpass[i]=pass[k]
 }
 var code=[]
 if(!convpasshelper(newpass,code,0x18))
  return 0
 var sum=0
 for(i=1;i<0x0F;i++){
  sum+=code[i]+i
  sum&=0xFF
 }
 if(sum!=code[0]){
  return 0;
 }
 var astate=new Object()
 astate.buf=code.slice(1)
 astate.bit=astate.ptr=astate.totalbit=0
 wonderbits(astate,aout)
 return 1
}

function datatowonderpass(pass){
 var astate=new Object()
 var astate2=new Object()
 var codes=[]
 var retpass=[]
 astate.buf=[]
 astate.bit=astate.ptr=astate.totalbit=0
 wonderbitsrev(astate,pass)
 var sum=0
 for(i=0;i<0x0E;i++){
  sum+=astate.buf[i]+(i+1)
  sum&=0xFF
 }
 astate2.buf=[]
 astate2.bit=astate2.ptr=astate2.totalbit=0
 astate2.buf[0]=sum
 for(i=1;i<0x0F;i++){
  astate2.buf[i]=astate.buf[i-1]
 }
 for(i=0;i<0x18;i++){
  decodebits(astate2,codes,i,5); 
 }
 for(i=0;i<0x18;i++){
  codes[i]=chars.charAt(codes[i])
 }
 for(i=0;i<0x18;i++){
  var offset=0
  for(j=0;j<0x18;j++){
   if(c2c(wondercode,j)==i){
    offset=j
    break
   }
  }
  retpass[i]=codes[offset]
 }
 return retpass.join("")
}
