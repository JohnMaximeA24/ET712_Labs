// Surprise message on button click
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const paragraph = document.querySelector('#explore p');
    paragraph.textContent = 'Surprise! You are doing great! Keep exploring!';
});

// Quiz function
const quizButtons = document.querySelectorAll('.quiz-btn');
const quizResult = document.getElementById('quizResult');
const resetQuizBtn = document.getElementById('resetQuizBtn');

quizButtons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.dataset.answer;

        if (answer === 'correct') {
            quizResult.textContent = 'Correct! Manila is the Capital of the Country Philippines!';
            quizResult.style.color = 'green';
        } else {
            quizResult.textContent = 'Oops! That\'s not correct. Please Try again!';
            quizResult.style.color = 'red';
        }

        // Hide quiz buttons and show reset button
        quizButtons.forEach(btn => btn.style.display = 'none');
        resetQuizBtn.style.display = 'block';
    });
});

// Reset quiz function
resetQuizBtn.addEventListener('click', function() {
    quizResult.textContent = '';
    quizButtons.forEach(btn => {
        btn.style.display = 'inline-block'; 
    });
    resetQuizBtn.style.display = 'none'; 
});

// Navigation functionality
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('main > section');

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sectionToShow = this.dataset.section;

        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        document.getElementById(sectionToShow).style.display = 'block';
    });
});

// Initially show the explore section
document.getElementById('explore').style.display = 'block';

// Add hover effect for game buttons
const gameButtons = document.querySelectorAll('.game-btn');

gameButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#0000ff'; // Change to blue on hover
        this.style.color = '#ffffff'; // Change text color to white on hover
    });

    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#ffeb3b'; // Change back to yellow when not hovering
        this.style.color = '#000000'; // Change text color back to black when not hovering
    });
});
