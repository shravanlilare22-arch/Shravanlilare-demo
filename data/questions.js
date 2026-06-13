console.log("questions.js loaded");
const QUESTIONS = {

python:[
{
q:"What is the output of print('Hi'*3)?",
o:["HiHiHi","Hi3","Error","3Hi"],
a:0,
e:"String repetition operator * repeats string."
},
{
q:"Which keyword is used to define a function?",
o:["func","def","function","define"],
a:1,
e:"def is used for creating functions."
},
{
q:"Which data type is immutable?",
o:["list","dict","set","tuple"],
a:3,
e:"Tuple cannot be modified."
},
{
q:"What is output of len('Code')?",
o:["3","4","5","Error"],
a:1,
e:"Code contains 4 characters."
},
{
q:"What is output of 5//2 ?",
o:["2.5","2","3","1"],
a:1,
e:"Floor division returns 2."
}
],

java:[
{
q:"Which method is Java entry point?",
o:["run()","main()","start()","init()"],
a:1,
e:"main() is Java entry point."
},
{
q:"Which keyword creates object?",
o:["new","create","class","object"],
a:0,
e:"new keyword creates object."
},
{
q:"Size of int in Java?",
o:["8","16","32","64"],
a:2,
e:"int is 32-bit."
}
],

cpp:[
{
q:"Which header is used for input output?",
o:["stdio.h","iostream","math.h","string"],
a:1,
e:"iostream contains cin and cout."
},
{
q:"Which operator accesses pointer members?",
o:[".","->","::","*"],
a:1,
e:"-> accesses pointer members."
}
],

c:[
{
q:"Which function prints output?",
o:["print","printf","echo","cout"],
a:1,
e:"printf is used for output."
},
{
q:"Which header contains printf()?",
o:["stdio.h","math.h","string.h","conio.h"],
a:0,
e:"printf is declared in stdio.h."
}
],

php:[
{
q:"PHP variable starts with?",
o:["#","$","@","%"],
a:1,
e:"Variables begin with $."
},
{
q:"PHP file extension?",
o:[".html",".php",".css",".js"],
a:1,
e:"PHP files use .php."
}
]

};