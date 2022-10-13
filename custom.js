/* 
STEP
---------
---------

STEP:1 = By defalut , 0 button show and x button hidden
STEP:2 = After click button 0,user click any click,find the column.If already value found in the column, then show that value,if no value found,show user value.by this step confirm it that user double or more value do not show at a time
STEP:3 =
STEP:4 =
STEP:5 =


*/
/* ----- STEP-1 START------- */
//function:1 = for button 0 display or hide
const button0 = (status) => {
 status ? document.getElementById('button-0').setAttribute('style','display: block;') :  document.getElementById('button-0').setAttribute('style','display: none;'); 
} 
//function:2 = for button x display or hide
const buttonX = (status) => {
    status ? document.getElementById('button-x').setAttribute('style','display: block;') :  document.getElementById('button-x').setAttribute('style','display: none;'); 
} 
//pass default true false value as a parametar so that button 0 show
button0(true);
buttonX(false);
/* ---- STEP-1 END-------- */

// button-0 click event
document.getElementById('button-0').addEventListener('click',
()=>{

    // click button 0,hide it and other button show
    button0(!true);
    // Declare columnId and column variable
    let columnId;
    let column;
    // Declare click variable for count click
    let click=0;
    // find which column was clicked by user
    document.getElementById('container').addEventListener('click',
    (event)=>{
    // every user click,click variable increase
    click= click + 1;
    // find column id
    columnId = event.target.id;
     // find column
    column = columnId[2];

    // set value in the column
    let columnValue =  document.getElementById(columnId).innerHTML ;
    let getId =  document.getElementById(columnId);
    if(click==1){
        getId.innerHTML = '0';
    }
    else{
        columnValue ? `${  getId.innerHTML = `${columnValue}`}` : `${  getId.innerHTML = ''}`;
    }
    // style value
    document.getElementById(columnId).setAttribute('style','font-size:40px; color: #d400d4;display:flex; justify-content: center;align-items: center;');
    // show button x
    buttonX(!false);
    button0(!true);
    });
    
});

// button-x click event
document.getElementById('button-x').addEventListener('click',
()=>{

    // click button x,hide it 
    buttonX(false);
    // Declare columnId and column variable
    let columnId;
    let column;
    // Declare click variable for count click
    let click=0;
     // find which column was clicked by user
     document.getElementById('container').addEventListener('click',
     (event)=>{
     // every user click,click variable increase
     click= click + 1;
     // find column id
     columnId = event.target.id;
      // find column
     column = columnId[2];
 
     // set value in the column
     let columnValue =  document.getElementById(columnId).innerHTML ;
     let getId =  document.getElementById(columnId);
     if(click==1){
         getId.innerHTML = 'x';
     }
     else{
         columnValue ? `${  getId.innerHTML = `${columnValue}`}` : `${  getId.innerHTML = ''}`;
     }
     // style value
     document.getElementById(columnId).setAttribute('style','font-size:40px;color: chartreuse;display:flex; justify-content: center;align-items: center;');
     // show button 0
     button0(true);
     buttonX(false);
     });

});