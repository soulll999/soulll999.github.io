const input = document.getElementById('input');
const output = document.getElementById('output');



input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = input.value.trim();
        processCommand(command);
        input.value = ''; // Clear input
    }
});
window.onload = function() {
    processCommand('help')
}
function processCommand(command) {
    if (command === 'help') {
        addOutput('Available commands:\n- help: Show this help message\n- clear: Clear the terminal \n- releases: shows all of Souls releases');
    } else if (command === 'clear') {
        output.innerHTML = '';
    } else if (command === 'releases') {
        addOutput('RELEASES: \n Jungle Jamboree \n Deskscreen \n Skyworld \n This website')
    }
    
    
    
    
    
    
    
    
    
    else {
        addOutput(`Unknown command: ${command}`);
    }
}

function addOutput(text) {
    const newLine = document.createElement('div');
    newLine.textContent = text;
    output.appendChild(newLine);
    output.scrollTop = output.scrollHeight; // Scroll to bottom
}
