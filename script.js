var task_input = document.getElementById('todo_text');
var add_button = document.getElementById('add_todo_button');
var table_container = document.getElementById('table_container')


add_button.addEventListener('click',function(event)
{
    
    
    // when ever we attach a listener on any element 
    // html passes event as argument in function, this 
    // event contain every detail regrad event on page
    
    // when someone click o button we need to get the
    // typed text from input
    var task = task_input.value;

    // now check if there is any value typed in box or not

    if(!task)
    {
        alert('I Think you forgot something, you forgot to type :)');
        return
    }


    // now when we have value, we need to append this task to page
    // to append we need some info like date and time with serial number
    // to display s.no we need to track count of task added in page
    // right now i can think upto 2 ways to do it
    // Ist is have a global variable which will have count of our todo
    // we will increament it by 1 when someone add a todo or we can count 
    // childnodes of container which holding tasks
    // to show how we can acess dom in numerous ways i am going with second method
    // which one is better we will discuss later in class

    var child_count = childElementCount(table_container);
    // for initially count will be 1 because it already have table header in it
    // and we want 1 for initial so lets pass it as it is

    var row = createBootstrapRow();

    var sr_no_col = createBootstrapCol(2, child_count);
    // we have a element now but it wont be visible because it is not appended to dom yet
    row.appendChild(sr_no_col);
    // still not in dom because we appended it into row. but is row attached to any element which 
    //is already a part of dom, No so lets fix it but first lets create other coloumns as well;

    var task_col = createBootstrapCol( 4, task );
    row.appendChild(task_col);

    var date_col = createBootstrapCol( 3, new Date().toLocaleDateString('uk') );
    row.appendChild(date_col);

    var time_col = createBootstrapCol( 3, new Date().toLocaleTimeString('en-us') );
    row.appendChild(time_col);

    // ow we have all our coloumns appended to row, but row is not part of dom, lets 
    //make it happen

    table_container.appendChild(row);

    // now lets clear input text

    task_input.value = "";

    // all set next we will talk how we can set border around col so that we can have proper
    // table like feel
    // its responsive feel free to resize it

    // I didnt use specific col class like col-lg col-xs, so it wont stack 
    //on any screen size but this is wronf in next classes we will see you can adjust its 
    //behavior on different screens
    
});


function createBootstrapRow()
{
    // this function will alway return a div element with row class


    var row = document.createElement('div');
    row.setAttribute('class',"row table-body-row");
    
    return row;
}

function createBootstrapCol(col_width, content)
{
    // this function will recieve some params like size of coloum 
    // and content and after applying them it will return element
    // after that you can append to any parent you want

    var col = document.createElement('div');
    col.setAttribute('class',"col-"+col_width+" table-body-row");
    col.innerHTML = content;

    return col;
}


function childElementCount(element)
{
    return element.childElementCount;
}