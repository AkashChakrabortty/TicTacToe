/* 
STEP
---------
---------

STEP:1 = By defalut , 0 button show and x button hidden
STEP:2 = After click button 0,user click any column,find the column.If already value found in the column, then show that value,if no value found,show user value.by this step confirm it that user double or more value do not show at a time
STEP:3 = diclare a aray.and store user value where index = colum
STEP:4 = check 3 column value same or not
STEP:5 = if same then show


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

//array diclare to store user value
const valueArray = [];

// function:3
const check3Column = () => {
    const row1 = valueArray[0] + valueArray[1] + valueArray[2];
    const row2 = valueArray[3] + valueArray[4] + valueArray[5];
    const row3 = valueArray[6] + valueArray[7] + valueArray[8];
    const column1 = valueArray[0] + valueArray[3] + valueArray[6];
    const column2 = valueArray[1] + valueArray[4] + valueArray[7];
    const column3 = valueArray[2] + valueArray[5] + valueArray[8];
    const arrow1 = valueArray[0] + valueArray[4] + valueArray[8];
    const arrow2 = valueArray[2] + valueArray[4] + valueArray[6];
    
    if(row1 === '000' || row1 === 'xxx'){

       const col0 = document.getElementById(`c-0`);
       const col1 = document.getElementById(`c-1`);
       const col2 = document.getElementById(`c-2`);
       
       col0.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
       col1.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
       col2.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
    }
    if(row2 === '000' || row2 === 'xxx'){

        const col3 = document.getElementById(`c-3`);
        const col4 = document.getElementById(`c-4`);
        const col5 = document.getElementById(`c-5`);
        
        col3.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col4.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col5.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
     }
     if(row3 === '000' || row3 === 'xxx'){

        const col6 = document.getElementById(`c-6`);
        const col7 = document.getElementById(`c-7`);
        const col8 = document.getElementById(`c-8`);
        
        col6.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col7.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col8.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
     }
     if(column1 === '000' || column1 === 'xxx'){

        const col0 = document.getElementById(`c-0`);
        const col3 = document.getElementById(`c-3`);
        const col6 = document.getElementById(`c-6`);
        
        col0.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col3.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col6.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
     }
     if(column2 === '000' || column2 === 'xxx'){

        const col1 = document.getElementById(`c-1`);
        const col4 = document.getElementById(`c-4`);
        const col7 = document.getElementById(`c-7`);
        
        col1.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col4.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col7.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
     }
     if(column3 === '000' || column3 === 'xxx'){

        const col2 = document.getElementById(`c-2`);
        const col5 = document.getElementById(`c-5`);
        const col8 = document.getElementById(`c-8`);
        
        col2.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col5.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col8.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
     }
     if(arrow1 === '000' || arrow1 === 'xxx'){
        const col0 = document.getElementById(`c-0`);
        const col4 = document.getElementById(`c-4`);
        const col8 = document.getElementById(`c-8`);
       
        col0.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col4.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col8.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
     }
     if(arrow2 === '000' || arrow2 === 'xxx'){

        const col2 = document.getElementById(`c-2`);
        const col4 = document.getElementById(`c-4`);
        const col6 = document.getElementById(`c-6`);
        
        col2.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col4.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
        col6.setAttribute('style','background-color:#DE3163;display:flex; justify-content: center;align-items: center;font-size:40px;');
     }
    else{
        return false;
    }
}

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
        //store value into the array
        valueArray[column] = '0';
        // style value
        document.getElementById(columnId).setAttribute('style','font-size:40px; color: #d400d4;display:flex; justify-content: center;align-items: center;');
    }
    else{
        columnValue ? `${  getId.innerHTML = `${columnValue}`}` : `${  getId.innerHTML = ''}`;
    }
  
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
          //store value into the array
            valueArray[column] = 'x';
             // style value
            document.getElementById(columnId).setAttribute('style','font-size:40px;color: chartreuse;display:flex; justify-content: center;align-items: center;');
            check3Column();
     }
     else{
         columnValue ? `${  getId.innerHTML = `${columnValue}`}` : `${  getId.innerHTML = ''}`;
     }
     
     // show button 0
     button0(true);
     buttonX(false);
     });

});