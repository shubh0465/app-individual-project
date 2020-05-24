function titlefun()
{
  var ti=document.getElementById("title");
  if(ti.value.trim()==""||ti.value.length>20)
  {
    ti.style.backgroundColor="red";
    ti.style.border="solid 2px black";
    document.getElementById("al").style.visibility="visible";
  }
  else {
    ti.style.backgroundColor="green";
    ti.style.border="solid 2px white";
    document.getElementById("al").style.visibility="hidden";
  }
}
function desfun()
{
  var ldes=document.getElementById("ap");
  var des=document.getElementById("description");
  if(des.value.length<50)
    ldes.style.visibility="visible";
}
function undesfun()
{
  var ldes=document.getElementById("ap");
  var des=document.getElementById("description");
  if(des.value.length>50)
    ldes.style.visibility="hidden";
}
 function validateThisFrom(thisForm)
 {
   var ti=document.getElementById("title");
   if(ti.value.trim()==""||ti.value.length>20)
   {
     alert("please enter your title in proper manner");
     return false;
   }
   var des=document.getElementById("description");
   if(des.value.trim()==""||des.value.length<50)
   {
     alert("please enter description for photo");
     return false;
   }
  var rad=document.getElementsByName("a");
  var count=0;
  for(var i=0;i<rad.length;i++)
  {
    if(rad[i].checked)
    {
    count++;
  }
  }
  if(count==0)
  {
    alert("must check a copyright");
    return false;
  }

  if(thisForm.continent1.value == 0)
  {
    alert("please select a continent");

    return false;
  }

  var ccn=document.getElementsByName("ccn");
  var c=0;
  for(var i=0;i<ccn.length;i++)
  {
    if(ccn[i].checked)
    {
      c++;
    }
  }
  if(c==0)
  {
    alert("check creative commons");
    return false;
  }
  if(thisForm.country1.value == 0)
  {
    alert("select your country");
    return false;
  }
  var city=document.getElementById("city");
  if(city.value.trim()=="")
  {
    alert("enter a valid city");
    return false;
  }
  var y=0;
  if(thisForm.check1.checked)
  {
    y++;
  }
  if(y==0)
  {
    alert("accept your software licence");
    return false;
  }
  }
