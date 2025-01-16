
    document.getElementById('curtain-button').addEventListener('click', function () {
        const leftCurtain = document.querySelector('.curtain-left');
        const rightCurtain = document.querySelector('.curtain-right');
        const button = document.getElementById('curtain-button');
        const audio = new Audio('audio.mp3'); 

        
        leftCurtain.classList.add('animate');
        rightCurtain.classList.add('animate');

        
        button.style.display = 'none';

        
        setTimeout(function () {
            audio.loop = true; 
            audio.play();
        }, 1000); 

        
        setTimeout(() => {
            document.getElementById('curtain-container').style.display = 'none';
        }, 1000); 
    });