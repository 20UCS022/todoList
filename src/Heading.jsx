import React from "react";
let currtime=new Date();
currtime=currtime.getHours();
let greeting='';
const cssstyle={ };
if(currtime>=5&&currtime<12)
{
    greeting='Good-morning';
    cssstyle.color='green';
}
if(currtime>=12&&currtime<16)
{
    greeting='Good-afternoon';
    cssstyle.color='orange';
}
if(currtime>=16&&currtime<8)
{
    greeting='Good-evening';
    cssstyle.color='blue';
}
if(currtime>=8&&currtime<5)
{
    greeting='Good-night';
    cssstyle.color='black';
}
function Heading()
{
    return <h1>Hello sir/mam,<span style={cssstyle}>{greeting}</span></h1>
}
export default Heading;