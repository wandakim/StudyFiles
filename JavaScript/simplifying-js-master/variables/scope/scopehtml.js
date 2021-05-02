const items = document.querySelectorAll('li');
for(var i = 0; i< items.length; i++) { 
    console.log(i);
    items[i].addEventListener('click', () => {
        alert(i);
    })
};
//i가 0일 때 최초로 클릭 이벤트가 브라우저에서 처리되고 alert(i)가 큐에 들어간다.  
//alert(i)가 큐에서 콜스택으로 넘어가야 실행이 되지만 콜스택에서 for() 안의 i가 0,1,2 차례로 할당이 되면서 큐에 들어간다. 
//큐에서 정확하게 어떤 식으로 동작하는지는 잘 모르겠으나, for 안에서 var i에 마지막으로 할당되었던 3이 lexical scope 이므로 
//for문이 다 돌고 나서 큐에 대기하고 있던 alert(i)가 alert(3)이 되는 것 같다. 

//que{ (1클릭되면 alert(i)),/ (2클릭되면 alert(i)),/ (3클릭되면 alert(i)) } - 내 추측

//var 대신 i를 사용하면 정상적인 출력이 되는데, 그 이유는 잘 모르겠으나 추측상 var 로 할당이 될 경우 scope가 큐까지 영향을 미치고 
//let 일 경우에는 symbol이나 다른 방식을 사용하여 마킹한 상태로 큐에 들어가나?