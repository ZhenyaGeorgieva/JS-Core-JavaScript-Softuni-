function mySolution() {
    let inputArea = document.getElementById('inputSection');
    let textArea = inputArea.getElementsByTagName('textArea')[0];
    let userName = inputArea.getElementsByTagName('input')[0];
    let button = inputArea.getElementsByTagName('button')[0];

    button.addEventListener('click', addMessage);

    let pendingQuestions = document.getElementById('pendingQuestions');

    let openQuestions = document.getElementById('openQuestions');


    function addMessage() {
        let questionText = '';
        let user = '';
        if (textArea.value && userName.value) {
            questionText = textArea.value;
            user = userName.value;
        } else if (textArea.value) {
            questionText = textArea.value;
            user = 'Anonymous';
        }

        let div = document.createElement('div');
        div.classList.add('pendingQuestion');

        let img = document.createElement('img');
        img.src = './images/user.png';
        img.width = 32;
        img.height = 32;
        div.appendChild(img);

        let span = document.createElement('span');
        span.textContent = user;
        div.appendChild(span);

        let p = document.createElement('p');
        p.textContent = questionText;
        div.appendChild(p);

        let divActions = document.createElement('div');
        divActions.classList.add('actions');

        let buttonArchive = document.createElement('button');
        buttonArchive.className = 'archive';
        buttonArchive.textContent = 'Archive';
        buttonArchive.addEventListener('click', function () {
            div.remove();
        });
        divActions.appendChild(buttonArchive);

        let buttonOpen = document.createElement('button');
        buttonOpen.className = 'open';
        buttonOpen.textContent = 'Open';
        buttonOpen.addEventListener('click', function () {
        
            div.remove();

            let divR = document.createElement('div');
            divR.classList.add('openQuestion');

            let img = document.createElement('img');
            img.src = './images/user.png';
            img.width = 32;
            img.height = 32;
            divR.appendChild(img);

            let span = document.createElement('span');
            span.textContent = user;
            divR.appendChild(span);

            let p = document.createElement('p');
            p.textContent = questionText;
            divR.appendChild(p);

            let divActions = document.createElement('div');
            divActions.classList.add('actions');

            let buttonReply = document.createElement('button');
            buttonReply.classList.add('reply');
            buttonReply.textContent = 'Reply';
            buttonReply.addEventListener('click', ()=>{
                if(buttonReply.textContent=='Reply'){
                divReply.style.display = 'block';
                buttonReply.textContent='Back';
                }else{
                    divReply.style.display = 'none';
                    buttonReply.textContent='Reply'; 
                }
            })
            divActions.appendChild(buttonReply);
            divR.appendChild(divActions);

            let divReply = document.createElement('div');
            divReply.classList.add('replySection');
            divReply.style.display = 'none';

            let input = document.createElement('input');
            input.classList.add('replyInput');
            input.type = 'text';
            input.placeholder = "Reply to this question here...";
            divReply.appendChild(input);

            let buttonH = document.createElement('button');
            buttonH.classList.add('replyButton');
            buttonH.textContent = 'Send';
            buttonH.addEventListener('click', function(){
                divReply.style.display = 'block';
                if(input.value){
                    let replyLi=document.createElement('li');
                    replyLi.textContent=input.value;
                    list.appendChild(replyLi);
                    input.value='';
                }
                
            })
            divReply.appendChild(buttonH);

            let list = document.createElement('ol');
            list.classList.add('reply');
            list.type = 1;
            divReply.appendChild(list);

            divR.appendChild(divReply);
            openQuestions.appendChild(divR);
        })
        divActions.appendChild(buttonOpen);
        div.appendChild(divActions);

        pendingQuestions.appendChild(div);


        textArea.value = '';
        userName.value = '';

    }


}
