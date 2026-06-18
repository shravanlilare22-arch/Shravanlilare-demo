console.log("questions.js loaded");

const QUESTIONS = {

python: [
{
q:"What is the output of print('Hi'*3)?",
o:["HiHiHi","Hi3","Error","3Hi"],
a:0,
e:"String repetition operator repeats the string."
},
{
q:"Which keyword is used to define a function?",
o:["func","def","function","define"],
a:1,
e:"def is used to create functions."
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
},
{
q:"Which symbol is used for comments?",
o:["//","#","/*","--"],
a:1,
e:"# is used for comments."
},
{
q:"Which function takes user input?",
o:["scan()","input()","read()","get()"],
a:1,
e:"input() takes user input."
},
{
q:"Which keyword creates a class?",
o:["object","class","define","struct"],
a:1,
e:"class keyword defines a class."
},
{
q:"What is output of type(10)?",
o:["int","number","integer","float"],
a:0,
e:"10 is integer."
},
{
q:"Which loop repeats until condition becomes false?",
o:["for","while","switch","if"],
a:1,
e:"while loop repeats."
}
],

java: [
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
},
{
q:"Which keyword is used for inheritance?",
o:["extends","inherit","using","super"],
a:0,
e:"extends is used for inheritance."
},
{
q:"Java is?",
o:["Compiled","Interpreted","Both","None"],
a:2,
e:"Java is both compiled and interpreted."
},
{
q:"Which package is imported automatically?",
o:["java.util","java.lang","java.io","java.net"],
a:1,
e:"java.lang is imported automatically."
},
{
q:"Which symbol ends a statement?",
o:[":",";",".",","],
a:1,
e:"Semicolon ends a statement."
},
{
q:"Which keyword is used to define a constant?",
o:["final","const","static","fixed"],
a:0,
e:"final creates constants."
},
{
q:"Which operator compares values?",
o:["=","==","===","!="],
a:1,
e:"== compares values."
},
{
q:"Which keyword refers to current object?",
o:["this","self","super","object"],
a:0,
e:"this refers to current object."
}
],

cpp: [
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
},
{
q:"Who developed C++?",
o:["Dennis Ritchie","Bjarne Stroustrup","James Gosling","Guido"],
a:1,
e:"Bjarne Stroustrup developed C++."
},
{
q:"Which keyword creates object?",
o:["new","object","create","make"],
a:0,
e:"new creates object."
},
{
q:"Which stream is used for output?",
o:["cin","cout","cerr","clog"],
a:1,
e:"cout prints output."
},
{
q:"Extension of C++ file?",
o:[".cpp",".java",".py",".php"],
a:0,
e:".cpp is C++ extension."
},
{
q:"Which loop executes at least once?",
o:["for","while","do-while","foreach"],
a:2,
e:"do-while executes at least once."
},
{
q:"Which symbol is used for scope resolution?",
o:[".","::","->","#"],
a:1,
e:":: is scope resolution operator."
},
{
q:"Which operator allocates memory?",
o:["malloc","new","alloc","create"],
a:1,
e:"new allocates memory."
},
{
q:"Which keyword defines class?",
o:["class","struct","object","define"],
a:0,
e:"class defines a class."
}
],

c: [
{
q:"Which function prints output?",
o:["print","printf","echo","cout"],
a:1,
e:"printf prints output."
},
{
q:"Which header contains printf()?",
o:["stdio.h","math.h","string.h","conio.h"],
a:0,
e:"printf is declared in stdio.h."
},
{
q:"Which function reads input?",
o:["scanf","input","read","cin"],
a:0,
e:"scanf reads input."
},
{
q:"Which symbol is address operator?",
o:["*","&","#","@"],
a:1,
e:"& returns address."
},
{
q:"Which loop checks condition first?",
o:["do while","while","switch","goto"],
a:1,
e:"while checks condition first."
},
{
q:"Size of char in C?",
o:["1 byte","2 bytes","4 bytes","8 bytes"],
a:0,
e:"char occupies 1 byte."
},
{
q:"Which keyword defines constant?",
o:["const","constant","final","fixed"],
a:0,
e:"const defines constant."
},
{
q:"Which header contains strlen()?",
o:["stdio.h","string.h","math.h","stdlib.h"],
a:1,
e:"strlen is in string.h."
},
{
q:"Which operator performs multiplication?",
o:["x","*","%","+"],
a:1,
e:"* performs multiplication."
},
{
q:"Which function terminates program?",
o:["exit()","stop()","break()","return()"],
a:0,
e:"exit() terminates program."
}
],

php: [
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
},
{
q:"Which symbol concatenates strings?",
o:[".","+","&","*"],
a:0,
e:"Dot concatenates strings."
},
{
q:"Which function prints output?",
o:["echo","printline","cout","printf only"],
a:0,
e:"echo displays output."
},
{
q:"PHP stands for?",
o:[
"Personal Home Page",
"PHP Hypertext Preprocessor",
"Private Home Page",
"Programming Home Page"
],
a:1,
e:"Correct full form."
},
{
q:"Which function counts array elements?",
o:["count()","size()","length()","total()"],
a:0,
e:"count() returns size."
},
{
q:"Which superglobal stores form data?",
o:["$_POST","$_DATA","$_FORM","$_INPUT"],
a:0,
e:"$_POST stores form data."
},
{
q:"Which operator compares value and type?",
o:["==","===","!=","<>"],
a:1,
e:"=== compares value and type."
},
{
q:"Which function starts session?",
o:["session_start()","start_session()","session()","begin()"],
a:0,
e:"session_start() starts session."
},
{
q:"Which function connects MySQL?",
o:["mysqli_connect()","mysql_open()","db_connect()","connect_db()"],
a:0,
e:"mysqli_connect() connects MySQL."
}
]

};