
var finalbatch;
var finalday;
var classtype;
var arrrr=[9,10,11,12,13,14,15,16];
var subcodefinal;
const daybut=document.querySelectorAll('#daySelector>button');

window.onscroll=()=>{
  document.getElementById('scroll').style.transform='translateY(-100px)';
  const element=document.getElementById('s128');
  const elementmenu=document.getElementById('menu');
  const noffset=-20+this.scrollY
  element.style.transform = "translateX("+noffset+"px)"; 
  //  var opac=this.scrollY/130;
  //  opac=1-opac;

  // element.style.opacity=opac;
  if(this.scrollY>10){
    const date=document.querySelector('#time>h1');
    date.style.transition='transform 0.5s ease, opacity 2s ease';
    date.style.transform='translateY(0px)';
    date.style.opacity='1';
    
  }
  if(this.scrollY>20){
    const batchele=document.querySelector('#batch');
    batchele.style.transition='transform 0.5s ease, opacity 2s ease';
    batchele.style.transform='translateX(0px)';
    batchele.style.opacity='1';


  }
  // if(this.scrollY>130){
  //   document.getElementById('s128').style.display='none';
  // }
  // if(this.scrollY<130){
  //   document.getElementById('s128').style.display='block';
  // }

  
  
};

document.querySelector("#batch").addEventListener('click',(element)=>{
const ele=document.querySelector("#buttonContainer");


ele.classList.toggle('hidden');
document.getElementById('daydecider').style.transform='translateY(-200%)';
document.querySelector("#daySelector").style.display='none';
document.getElementById('timeTable').style.transition='transform 2s ease';
  
document.getElementById('timeTable').style.transform='translateX(-200%)';

divclear();

daybut.forEach((itemm)=>{
  if(itemm.innerText[0]=='-')
    {
      itemm.innerText=itemm.innerText.substring(2);
      itemm.style.width='80px';
    }

});

});
document.querySelectorAll("#buttonContainer>button").forEach((item)=>{
item.addEventListener('click',()=>{
  document.querySelector("#batch").innerText=item.innerText;
  finalbatch=item.innerText;
  


  const ele=document.querySelector("#buttonContainer");
  ele.classList.add('hidden');
  const today = new Date();
  const dayOfWeek = today.getDay(); 
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const theday=days[dayOfWeek].charAt(0)+days[dayOfWeek].charAt(1);

  document.getElementById('daySelector').style.display='flex';
  const daybut=document.getElementById(theday);
  daybut.innerText="->"+daybut.innerText;
  

});
});


updateDay();
function updateDay(){
  const today = new Date();
  const dayOfWeek = today.getDay(); 
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const minutes = today.getHours();
  const seconds = today.getMinutes();
  document.querySelector('#time>h1').innerText=days[dayOfWeek]+"\n"+minutes+":"+seconds;
  var count=0;
  for(const item of arrrr){
    if(item<=minutes){
      // console.log("here are minutes "+minutes);
      // console.log("here are items "+item);
      // console.log(document.querySelector("."+"c"+item));
      document.querySelector("."+"c"+item).style.color='black';
      document.querySelector("."+"c"+item).style.backgroundColor='white';
      count++;
    }
    if(minutes>16){
      document.querySelector("."+"c"+item).style.color='white';
      document.querySelector("."+"c"+item).style.backgroundColor='black';
    }
  };
setTimeout(updateDay,1000);
}


daybut.forEach((item)=>{

  item.addEventListener('click',()=>{
    daybut.forEach((itemm)=>{
      if(itemm.innerText[0]=='-')
        {
          itemm.innerText=itemm.innerText.substring(2);
          itemm.style.width='80px';
        }

    });
    finalday=item.innerText;
   item.innerText="->"+item.innerText;
   item.style.width='200px';
    const daydecider=document.getElementById('daydecider');
    daydecider.innerText="schedule for  "+finalday;
    document.getElementById('daydecider').style.transform='translateY(0%)';
    document.getElementById('timeTable').style.transition='transform 0.5s ease';
  
  document.getElementById('timeTable').style.transform='translateX(0%)'
    divclear();
    mainconcept(finalday, finalbatch);

})});


function mainconcept(day,batch){


  Object.entries(nine).forEach(item=>{
    if(item[0]==day){
      decifer(item[1], batch,1);
    }
  });


  Object.entries(ten).forEach(item=>{
    if(item[0]==day){
      decifer(item[1], batch,2);
    }
  });


  Object.entries(elev).forEach(item=>{
    if(item[0]==day){
      decifer(item[1], batch,3);
    }
  });

  Object.entries(twe).forEach(item=>{
    if(item[0]==day){
   
    decifer(item[1], batch,4);
    }
  });
  Object.entries(oneo).forEach(item=>{
    if(item[0]==day){
      
    decifer(item[1], batch,5);
    }
  });
  Object.entries(twoo).forEach(item=>{
    if(item[0]==day){
     
    decifer(item[1], batch,6);
    }
  });
  Object.entries(three).forEach(item=>{
    if(item[0]==day){
     
    decifer(item[1], batch,7);
    }
  });
  Object.entries(fouro).forEach(item=>{
    if(item[0]==day){
  
    decifer(item[1], batch,8);
    }
  });


}
function decifer(arr,batch,slot){

  arr.forEach(str=>{

    if(str.includes(batch)){
      if(batch=='F1'){
        const fi=str.indexOf(batch);
        const pc=str.charAt(fi+2);
        if(Number.isInteger(Number(pc))){
          
        }
        else{
           
          callit(str,slot);
        }
      }
      else
      callit(str,slot);
    }
    
})};

function callit(str,slot){
  var fi=str.indexOf("(");
  var li=str.indexOf(")");
  var code=str.substring(fi+1,li);
  code=code.trim();
  subcode[0].forEach((item,index)=>{
    if(code==item){
      // console.log(subcode[1][index]);
      subcodefinal=subcode[1][index];
    }
  });
  var firstpart=str.substring(0,fi);
  var lastpart=str.substring(li+1);
  // console.log("first part is"+firstpart);
  // console.log("last part is"+lastpart);
  subcodefinal="("+subcodefinal+")";
  str="<span style=\"color:yellow\">"+firstpart+"</span>"+"<span style=\"color:#BAD8B6\">"+subcodefinal+"</span>"+lastpart;
  setter(str,slot);
  
}

function setter(str,slot){
  switch(slot){
    case 1:{
      document.getElementById('one').innerHTML=str;
    };
    break;
    case 2:{
      document.getElementById('two').innerHTML=str;
     
    };
    break;
    case 3:{
      
      if(finalday=="Saturday"){
        if(/(\bLUNCH\b)/.test(str)){
          str=str.substring(str.lastIndexOf(">")+1);
          document.getElementById('three').style.background='green';
        }
        
      }
      document.getElementById('three').innerHTML=str;
      
      
    };
    break;
    case 4:{
      
      if(/(\bLUNCH\b)/.test(str)){
        str=str.substring(str.lastIndexOf(">")+1);
        document.getElementById('four').style.background='green';
       
      }
      document.getElementById('four').innerHTML=str;
    };
    break;
    case 5:{
      
      if(/(\bLUNCH\b)/.test(str)){
        str=str.substring(str.lastIndexOf(">")+1);
        document.getElementById('five').style.background='green';
      }
      document.getElementById('five').innerHTML=str;
    };
    break;
    case 6:{
      document.getElementById('six').innerHTML=str;
    };
    break;
    case 7:{
      document.getElementById('seven').innerHTML=str;
    }
    break;
    case 8:{
      document.getElementById('eight').innerHTML=str;

    };
    break;
  }
}
function divclear(){
  document.getElementById('one').innerText='';
  document.getElementById('two').innerText='';
  document.getElementById('three').innerText='';
  document.getElementById('four').innerText='';
  document.getElementById('five').innerText='';
  document.getElementById('six').innerText='';
  document.getElementById('seven').innerText='';
  document.getElementById('eight').innerText='';
  document.getElementById('three').style.backgroundColor='black';
  document.getElementById('four').style.backgroundColor='black';
  document.getElementById('five').style.backgroundColor='black';
  document.getElementById('six').style.backgroundColor='black';
  document.getElementById('seven').style.backgroundColor='black';
}

const subcode = [
  [
      "15B11EC111",
      "15B11PH211",
      "15B11MA211",
      "18B15GE111",
      "15B11CI211",
      "15B17PH271",
      "15B17EC171",
      "15B17CI271",
      "24B11HS111",
      "24B16HS111"
  ],
  [
      "Electrical I",
      "Phy II",
      "Maths II",
      "EDD",
      "SDF II",
      "PhyLab II",
      "ElectricalLab I",
      "SDFLab II",
      "UHV",
      "LifeSkills"
  ]
];
const nine = {
  Monday: [
    "PF13 (18B15GE111)/EDD/CADD03/RAHUL KUMAR",
    "PF2 (18B15GE111)/EDD/CADD03/SUMIT MAHAJAN (PRABHAKAR JHA)",
    "PF4F5F6(15B17CI271)-CL1/VIKAS SHARMA/MUKESH/ AKANSHA/SHAILESH/HIMANI/ADITI SHARMA",
    "PF1(15B17PH271)-41/PRASHANT CHAUHAN",
    "PF9(15B17PH271)-027A/VIKAS MALIK",
    "LF18F19(15B11PH211)-228/SUNEET KUMAR AWASTHI",
    "TE2(24B11HS111)--126/SHWETA VERMA",
    "LF16F17(15B11PH211)-111/IMRAN",
    "PF12 (24B16HS111)-246/HSS SCHOLAR"
  ],
  Tuesday: [
    "PF5(15B17PH271)-027A/SUDIP HALDAR",
    "PF1 (18B15GE111)/EDD/CADD03/PIYUSH SHARMA",
    "PF3 (18B15GE111)/EDD/CADD03/HARISH BISHWAKARMA (NIRAJ KUMAR)",
    "TF14(24B11HS111)--121/SHWETA VERMA",
    "PF10 (24B16HS111)-240/AMBA AGARWAL",
    "LF11F12(15B11MA211)-SR05/NFMATHS1",
    "LF18F19(15B11PH211)-228/SUNEET KUMAR AWASTHI",
    "TF8(15B11CI211)-126/SHAILESH",
    "TF9(15B11CI211)-127/HIMANSHU",
    "TF6 (15B11PH211)-138/VIKAS MALIK",
    "LF7F8(15B11PH211)-DW04/PRASHANT CHAUHAN",
    "PF4 (24B16HS111)-246/PRAVEEN SHARMA"
  ],
  Wednesday: [
    "TF5(15B11PH211)-126/VIKAS MALIK",
    "TF6(15B11CI211)-127/VARTIKA",
    "PF4 (18B15GE111)/EDD/CADD03/NIRAJ KUMAR",
    "PF18 (18B15GE111)/EDD/CADD03/PRABHAKAR JHA (SUMIT MAHAJAN)",
    "PF13F14(15B17CI271)-CL1/MUKESH/SHRUTI GUPTA/SHARIQ/HIMANI",
    "LF1F2(15B11PH211)-228/NARENDRA KHATRI",
    "PE1(15B17PH271)-41/IMRAN",
    "PE3(15B17PH271)-027A/SUDIP HALDAR",
    "TF8(15B11PH211)-111/PRASHANT CHAUHAN",
    "LF7F8(15B11CI211)-SR05/ADITI SHARMA"
  ],
  Thursday: [
    "PF19 (18B15GE111)/EDD/CADD03/SUMIT MAHAJAN (PRABHAKAR JHA)",
    "PF11 (18B15GE111)/EDD/CADD03/HARISH BISHWAKARMA",
    "LE1E2(15B11CI211)-111/SNIGDHA",
    "PF12(15B17PH271)-027A/NARENDRA KHATRI",
    "PF3(15B17PH271)-41/SUNEET KUMAR AWASTHI/NFPHY2",
    "LE3E4(15B11MA211)-SR05/AMIT SRIVASTAVA",
    "LF1F2(15B11MA211)-244/PANKAJ KUMAR SRIVASTAVA",
    "LF13F14(15B11PH211)-225/SUDIP HALDAR",
    "LF16F17(24B11HS111)-229/ANURADHA GUPTA",
    "TF18(15B11PH211)-116/ANSHU D. VARSHNEY",
    "LF5F6(15B11MA211)-234/MOHD. SARFARAZ"
  ],
  Friday: [
    "LE1E2(15B11PH211)-226/NARENDRA KHATRI",
    "PF2(15B17PH271)-41/VIKAS MALIK",
    "PF17 (18B15GE111)/EDD/CADD03/NIRAJ KUMAR",
    "PF8 (18B15GE111)/EDD/CADD03/PRABHAKAR JHA (SUMIT MAHAJAN)",
    "TF11(15B11PH211)-116/AK",
    "LE3E4(15B11MA211)-217/AMIT SRIVASTAVA",
    "TF12(24B11HS111)--121/PRAVEEN SHARMA",
    "LF13F14(15B11MA211)-111/NFMATHS1",
    "LF18F19(15B11PH211)-230/SUNEET KUMAR AWASTHI"
  ],
  Saturday: [
    "PF12 (18B15GE111)/EDD/CADD03/NIRAJ KUMAR (HARISH BISHWAKARMA)",
    "PF7 (18B15GE111)/EDD/CADD03/PRABHAKAR JHA",
    "LF16F17(15B11PH211)-226/IMRAN",
    "TF14(15B11PH211)-127/SUDIP HALDAR",
    "PF11(15B17PH271)-027A/ANSHU D. VARSHNEY",
    "TF5(15B11MA211)-121/PANKAJ KUMAR SRIVASTAVA",
    "TF8(15B11MA211)-126/MOHD. SARFARAZ",
    "TF1(15B11CI211)-121/VARTIKA"
  ]
};

const ten = {
  Monday: [
    "LF16F17(15B11MA211)-226/PANKAJ KUMAR SRIVASTAVA",
    "PF7(24B16HS111)-240/EKTA SRIVASTAVA/HSS SCHOLAR",
    "TF19(15B11PH211)-113/NARENDRA KHATRI",
    "LE1E2(24B11HS111)-123/GKN",
    "TF3(15B11MA211)-138/KAMLESH KUMAR SHUKLA",
    "LE3E4(15B11PH211)-228/IMRAN",
    "TF10(15B11CI211)-126/PULKIT",
    "TF11(15B11CI211)-138/NEERAJ JAIN"
  ],
  Tuesday: [
    "TE3(24B11HS111)-116/SHWETA VERMA",
    "LF7F8(15B11MA211)-226/P. RANA",
    "TF17(15B11MA211)-121/KAMLESH KUMAR SHUKLA",
    "TE4(15B11CI211)-113/TWINKLE"
  ],
  Wednesday: [
    "TF12(15B11PH211)-113/AK",
    "LF5F6(24B11HS111)-225/ANSHU D. VARSHNEY",
    "LF9F10(15B11PH211)-229/SUDIP HALDAR",
    "PF3(24B16HS111)-240/PRAVEEN SHARMA/HSS SCHOLAR",
    "LF16F17(15B11MA211)-226/PANKAJ KUMAR SRIVASTAVA",
    "LF1F2(24B11HS111)-228/MOHD. SARFARAZ",
    "TF7(24B11HS111)-127/DEEPAK VERMA",
    "TF19(15B11CI211)-126/PULKIT"
  ],
  Thursday: [
    "PE1(24B16HS111)-240/EKTA SRIVASTAVA",
    "LF13F14(15B11MA211)-226/NFMATHS1",
    "LF1F2(24B11HS111)-228/MOHD. SARFARAZ",
    "TF10(24B11HS111)-113/SHWETA VERMA",
    "TE2(15B11PH211)-121/AMIT VERMA",
    "PE4(24B16HS111)-240/AMBA GARWAL"
  ],
  Friday: [
    "LE1E2(15B11MA211)-226/P. RANA",
    "TF16(24B11HS111)-121/SHWETA VERMA",
    "PF11(24B16HS111)-240/ANSHU BANWARI",
    "PF14(24B16HS111)-240/PRAVEEN SHARMA",
    "LE3E4(15B11CI211)-111/SHARIQ",
    "LF9F10(15B11MA211)-228/KAMLESH KUMAR SHUKLA",
    "LF18F19(15B11MA211)-225/NFMATHS1",
    "LF3F4(15B11CI211)-229/AKANSHA",
    "TF13(15B11PH211)-113/SUDIP HALDAR"
  ],
  Saturday: [
    "LE1E2(15B11MA211)-226/P. RANA",
    "LF13F14(15B11MA211)-228/NFMATHS1",
    "LF9F10(15B11CI211)-225/SATYAPRAKASH",
    "LE3E4(15B11PH211)-229/US/GFPHY",
    "LF1F2(15B11PH211)-111/NARENDRA KHATRI",
    "LF5F6(15B11CI211)-234/AYUSHI",
    "TF16(15B11CI211)-126/SHRUTI GUPTA",
    "TF18(15B11MA211)-138/AMIT SRIVASTAVA"
  ]
};

const elev = {
  Monday: [
    "TF1(24B11HS111)--121/DEEPAK VERMA",
    "LF5F6(15B11MA211)-228/MOHD. SARFARAZ",
    "PF16(15B17PH271)-41/SUNEET KUMAR AWASTHI/NFPHY1",
    "PF14(15B17PH271)-027A/ANSHU D. VARSHNEY/US/GFPHY",
    "TF11(24B11HS111)--244B/ANSHU BANWARI",
    "LE1E2(15B11PH211)-225/NARENDRA KHATRI",
    "LF3F4(15B11PH211)-229/SUNEET KUMAR AWASTHI",
    "TF12(15B11CI211)-126/SHRUTI GUPTA",
    "TF17(15B11CI211)-113/NIVEDITTA"
  ],
  Tuesday: [
    "LE3E4(24B11HS111)-228/SRTI JAIN",
    "PF6(15B17PH271)-027A/ANSHU D. VARSHNEY/PRASHANT CHAUHAN",
    "PF9 (24B16HS111)-240/NILU CHOUDHARY",
    "LF7F8(15B11CI211 )-226/ADITI SHARMA",
    "LF16F17(15B11PH211)-229/IMRAN",
    "LF13F14(15B11CI211 )-234/HIMANI",
    "PF18(24B16HS111)-246/HSS SCHOLAR"
  ],
  Wednesday: [
    "LF5F6(15B11PH211)-225/VIKAS MALIK",
    "TF2(24B11HS111)--138/ANSHU BANWARI",
    "LF7F8(15B11PH211)-226/PRASHANT CHAUHAN",
    "LE3E4(15B11PH211)-228/IMRAN",
    "PF13(15B17PH271)-027A/AV/NFPHY3",
    "PF19(15B17PH271)-41/ANUJ KUMAR/SUNEET KUMAR AWASTHI",
    "LF9F10(15B11CI211 )-234/SATYAPRAKASH"
  ],
  Thursday: [
    "PF4(15B17PH271)-027A/SUNEET KUMAR AWASTHI",
    "LF16F17(15B11MA211)-234/PANKAJ KUMAR SRIVASTAVA",
    "LF5F6(24B11HS111)-228/ANSHU D. VARSHNEY",
    "LF9F10(15B11CI211 )-226/SATYAPRAKASH",
    "LF1F2(15B11PH211)-111/NARENDRA KHATRI",
    "TF14(15B11CI211)-121/NEERAJ JAIN",
    "TF13(24B11HS111)--113/DEEPAK VERMA"
    ],
  Friday: [
    "TF10(15B11MA211)-126/KAMLESH KUMAR SHUKLA",
    "PE1E2E3,E4(15B17CI271)-CL1/SHARIQ/SNIGDHA/HIMANSHU/PULKIT/SHRUTI GUPTA/SATYAPRAKASH/DEVPRIYA",
    "LF1F2(15B11MA211)-226/PANKAJ KUMAR SRIVASTAVA",
    "LF3F4(24B11HS111)-228/MOHD. SARFARAZ",
    "LF5F6(15B11PH211)-229/VIKAS MALIK",
    "LF18F19(15B11CI211 )-225/SHAILESH",
    "LF9F10(24B11HS111)-230/JANRADAN"
  ],
  Saturday: [
    "F13F14F16F17F18F19E1E2E3E4 LUNCH",
    "LF9F10(15B11MA211)-225/KAMLESH KUMAR SHUKLA",
    "LF1F2(15B11CI211 )-111/ANURADHA",
    "TF4(24B11HS111)--127/DEEPAK VERMA",
    "TF6(24B11HS111)--121/ANSHU BANWARI",
    "TF19(15B11MA211)-116/AMIT SRIVASTAVA",
    "TF3(15B11PH211)-113/SUNEET KUMAR AWASTHI"
  ]
};


const twe = {
  Monday: [
    "F1F2F3F4F5F6F7F8F9F10F11F12 LUNCH",
    "LE3E4(15B11CI211 )-234/SHARIQ",
    "TF13(15B11MA211)-127/AMIT SRIVASTAVA",
    "LE1E2(15B11CI211 )-225/SNIGDHA",
    "LF18F19(15B11MA211)- 111/NFMATHS1"
  ],
  Tuesday: [
    "LF1F2(15B11CI211 )-234/ANURADHA",
    "F13F14F16F17F18F19E1E2E3E4 LUNCH",
    "LF3F4(15B11PH211) -226/SUNEET KUMAR AWASTHI",
    "LF11F12(15B11PH211) -228/ANUJ KUMAR"
  ],
  Wednesday: [
    "F1F2F3F4F5F6F7F8F9F10F11F12 LUNCH",
    "LE1E2(15B11CI211 )-226/SNIGDHA",
    "TF16(15B11PH211) -126/GFPHY",
    "TF17(15B11PH211) -121/GFPHY",
    "TF18(15B11CI211)-127/NEERAJ JAIN",
    "LE3E4(15B11MA211)-148/AMIT SRIVASTAVA"
  ],
  Thursday: [
    "F13F14F16F17F18F19E1E2E3E4 LUNCH",
    "LF5F6(15B11CI211 )-228/AYUSHI",
    "LF9F10(15B11MA211)-226/KAMLESH KUMAR SHUKLA",
    "LF7F8(24B11HS111)-230/AMBALIKA SARKAR",
    "PE2 (24B16HS111)-240/PRAVEEN SHARMA"
  ],
  Friday: [
    "TF19(24B11HS111)--116/DEEPAK VERMA",
    "F1F2F3F4F5F6F7F8F9F10F11F12F16 LUNCH",
    "LF13F14(15B11CI211 )-226/HIMANI"
  ],
  Saturday: [
    "LE1E2(15B11PH211) -226/NARENDRA KHATRI",
    "LF13F14(15B11CI211)-228/HIMANI",
    "LF16F17(15B11CI211)-234/ASHISH",
    "LF18F19(15B11CI211)-225/SHAILESH",
    "LF7F8(15B11CI211 )-229/ADITI SHARMA",
    "LF11F12(15B11PH211) -SR05/ANUJ KUMAR",
    "TF9(15B11PH211)-DW04/AMIT VERMA"
  ]
};

const oneo = {
  Monday: [
    "F13F14F16F17F18F19E1E2E3E4 LUNCH",
    "LF1F2(15B11CI211 )-226/ANURADHA",
    "LF9F10(24B11HS111)-228/JANRADAN",
    "LF11F12(15B11MA211)- SR05/NFMATHS1",
    "LF3F4(15B11CI211 )- 225/AKANARENDRA KAURSHA",
    "TF8(24B11HS111)--126/PRAVEEN SHARMA",
    "LF5F6(15B11PH211) -229/VIKAS MALIK",
    "TF7(15B11CI211)-121/HIMANI"
  ],
  Tuesday: [
    "TE4(24B11HS111)--116/PRAVEEN SHARMA",
    "LF13F14(15B11PH211) -234/SH",
    "F1F2F3F4F5F6F7F8F9F10F11F12 LUNCH",
    "LF18F19(15B11MA211)- 226/NFMATHS1",
    "LF16F17(15B11CI211 )-228/ASHISH",
    "TE1(24B11HS111)--121/DEEPAK VERMA"
  ],
  Wednesday: [
    "TF10(15B11PH211) -116/ANSHU D. VARSHNEY",
    "LF3F4(15B11MA211)-228/KAMLESH KUMAR SHUKLA",
    "LF7F8(15B11MA211)-234/P. RANA",
    "F13F14F16F17F18F19E1E2E3E4 LUNCH",
    "LF11F12(15B11CI211 )-226/MUKESH",
    "TF2(15B11PH211)-113/NARENDRA KHATRI",
    "TF5(24B11HS111)--111/DEEPAK VERMA"
  ],
  Thursday: [
    "F1F2F3F4F5F6F7F8F9F10F11F12 LUNCH",
    "TF17(24B11HS111)--116/DEEPAK VERMA",
    "TF18(24B11HS111)--121/ANSHU BANWARI",
    "LE3E4(24B11HS111)-228/ARJ"
  ],
  Friday: [
    "F13F14F17F18F19E1E2E3E4 LUNCH",
    "LF3F4(15B11PH211) -228/SUNEET KUMAR AWASTHI",
    "LF11F12(15B11CI211 )-217/MUKESH",
    "LF9F10(15B11PH211) -230/SUDIP HALDAR",
    "LF7F8(15B11PH211)-226/PRASHANT CHAUHAN",
    "PF16 (24B16HS111)-240/EKTA SRIVASTAVA",
    "PF6 (24B16HS111)-246/AMBA AGARWAL"
  ],
  Saturday: []
};

const twoo = {
  "Monday": [
      "LE1E2(15B11MA211)-111/P. RANA",
      "TE3(15B11MA211)-244/AMIT SRIVASTAVA",
      "PF17 (24B16HS111)-240/ANSHU BANWARI",
      "PF5 (24B16HS111)-246/NILU CHOUDHARY",
      "PF16(15B17CI271)-CL1/SATYAPRAKASH/SNIGDHA",
      "PF7(15B17PH271)-027A/IMRAN",
      "PF8(15B17PH271)-41/PRASHANT CHAUHAN",
      "PF9 (18B15GE111)/EDD/CADD03/PIYUSH SHARMA",
      "PE4 (18B15GE111)/EDD/CADD03/HARISH BISHWAKARMA (RAHUL KUMAR)",
      "LF11F12(24B11HS111)-118/HIMANSHU AGARWAL",
      "PF1F2F3(15B17CI271)-CL1/ADITISHARMA/SHARIQ/HIMANI/ SHIKHA MEHTA/PULKIT/SHRUTI GUPTA"
  ],
  "Tuesday": [
      "TE4 (15B11PH211)-113/GFPHY",
      "PF18(15B17PH271)-027A/NARENDRA KHATRI",
      "TF16(15B11MA211)-127/KAMLESH KUMAR SHUKLA",
      "LF3F4(15B11CI211)-226/AKANSHA",
      "PF17(15B17PH271)-41/SUDIP HALDAR/VIKAS MALIK",
      "TF1(15B11MA211)-244/PANKAJ KUMAR SRIVASTAVA",
      "PF19 (24B16HS111)-246/EKTA SRIVASTAVA",
      "PF2(24B16HS111)-2460ANSHU BANWARI",
      "TF5(15B11CI211)-138/VIKAS SHARMA",
      "PF14 (18B15GE111)/EDD/CADD03/SUMIT MAHAJAN",
      "PF6 (18B15GE111)/EDD/CADD03/RAHUL KUMAR (HARISH BISHWAKARMA)",
      "PF7F8F9(15B17CI271)-CL1/HIMANSHU/DEVPRIYA/SHIKHA MEHTA/ SNIGDHA, NIVEDITA/SATYAPRAKASH/MUKESH",
      "TF12(15B11MA211)-217/AMIT SRIVASTAVA"
  ],
  "Wednesday": [
      "TE1(15B11PH211)-116/ANSHU D. VARSHNEY",
      "LF13F14(15B11PH211)-234/SUDIP HALDAR",
      "LF5F6(15B11CI211)-226/AYUSHI",
      "PF10(18B15GE111)/EDD/CADD03/SUMIT MAHAJAN",
      "PF8(24B16HS111)-240/PRAVEEN SHARMA",
      "PF16F17F18F19(15B17CI271)-CL1/RASHMI/ARTIJAIN/SHRUTIGUPTA/ NIVEDITA/SHAILESH",
      "PE2(15B17PH271)-027A/ANUJ KUMAR",
      "PE4(15B17PH271)-41/AMIT VERMA",
      "TF4(15B11MA211)-121/KAMLESH KUMAR SHUKLA",
      "TF7(15B11MA211)-126/MOHD. SARFARAZ",
      "PE3(24B16HS111)-246/ANSHU BANWARI"
  ],
  "Thursday": [
      "PE1(18B15GE111)/EDD/CADD03/PRABHAKAR JHA",
      "PF1(24B16HS111)-240/HSS SCHOLAR",
      "PF13(24B16HS111)-246/EKTA SRIVASTAVA",
      "PF10(15B17PH271)-41/NARENDRA KHATRI/AMIT VERMA",
      "LF3F4(15B11MA211)-226/KAMLESH KUMAR SHUKLA",
      "LE3E4(15B11CI211)-234/SHARIQ",
      "LF11F12(15B11PH211)-228/ANUJ KUMAR",
      "PF16(18B15GE111)/EDD/CADD03/PIYUSH SHARMA(NIRAJ KUMAR)",
      "LF18F19(24B11HS111)-234/RASHMI KUSHWAHA",
      "LF7F8(24B11HS111)-230/AMBALIKA SRAKAR",
      "PE2(18B15GE111)/EDD/CADD03/NIRAJ KUMAR(PIYUSH SHARMA)"
  ],
  "Friday": [
      "LF3F4(15B11MA211)-230/KAMLESH KUMAR SHUKLA",
      "PF5(18B15GE111)/EDD/CADD03/HARISH BISHWAKARMA",
      "PE3(18B15GE111)/EDD/CADD03/PIYUSH SHARMA(RAHUL KUMAR)"
  ],
  "Saturday": []
};
const three = {
  "Monday": [
      "TF6(15B11MA211)-244/PANKAJ KUMAR SRIVASTAVA",
      "LF11F12(15B11CI211)-228/MUKESH",
      "TF4(15B11CI211)-126/VIKAS SHARMA",
      "TE1(15B11CI211)-127/NIVEDITTA",
      "TE2(15B11MA211)-138/MOHD. SARFARAZ",
      "TE3(15B11CI211)-234/TWINKLE"
  ],
  "Tuesday": [
      "TE3(15B11PH211)-116/GFPHY",
      "LF1F2(15B11MA211)-SR05/PANKAJ KUMAR SRIVASTAVA",
      "TE2(15B11CI211)-127/SHRUTI GUPTA"
  ],
  "Wednesday": [
      "TE1(15B11MA211)-138/P. RANA",
      "TF7(15B11PH211)-121/PRASHANT CHAUHAN",
      "LF5F6(15B11MA211)-226/MOHD. SARFARAZ",
      "LF11F12(24B11HS111)-228/HIMANSHU AGRAWAL",
      "TF13(15B11CI211)-126/PULKIT",
      "LF13F14(24B11HS111)-230/JANARDAN"
  ],
  "Thursday": [
      "LF3F4(24B11HS111)-228/MOHD. SARFARAZ",
      "LF11F12(15B11MA211)-226/NFMATHS1",
      "TF2(15B11MA211)-138/PANKAJ KUMAR SRIVASTAVA",
      "TF9(24B11HS111)-116/DEEPAK VERMA"
  ],
  "Friday": [
      "TF9(15B11MA211)-121/PANKAJ KUMAR SRIVASTAVA",
      "PF10F11F12(15B17CI271)-CL1/ARTI JAIN/SHRUTI GUPTA/HIMANSHU/DEVPRIYA/VIKAS SHARMA/ADITI SHARMA",
      "LF7F8(15B11MA211)-226/P. RANA",
      "LF13F14(24B11HS111)-230/JANARDAN",
      "LF16F17(24B11HS111)-148/ANURADHA GUPTA",
      "LF18F19(24B11HS111)-153/RASHMI KUSHWAHA",
      "TF3(24B11HS111)-127/DEEPAK VERMA"
  ],
  "Saturday": []
};

const fouro = {
    "Monday": [
        "TF1(15B11PH211)-228/NARENDRA KHATRI",
        "TF4(15B11PH211)-121/SUNEET KUMAR AWASTHI"
    ],
    "Tuesday": [
        "LF9F10(15B11PH211)-228/SUDIP HALDAR"
    ],
    "Wednesday": [
        "LE1E2(24B11HS111)-228/GAURAV KUMAR NIGAM",
        "TF11(15B11MA211)-138/P. RANA",
        "TF2(15B11CI211)-113/VARTIKA"
    ],
    "Thursday": [
        "TF3(15B11CI211)-116/VARTIKA"
    ],
    "Friday": [
        "LF16F17(15B11CI211)-148/ASHISH"
    ],
    "Saturday": []
};




















