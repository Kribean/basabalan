const handleChangeVisibility = () => {
    const chatElement = document.getElementById('aykin-chat');
    const chatElementHead = document.getElementById('aykin-chat-head');

    if (chatElement.style.display === 'none' || chatElement.style.display === '') {
      chatElement.style.display = 'block';
      chatElementHead.style.display = 'block';
    } else {
      chatElement.style.display = 'none';
      chatElementHead.style.display = 'none';
    }
  }

  const sendMessage = () => {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    const messagesDiv = document.getElementById('messages');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'chat chat-end';
    userMessageDiv.innerHTML = `
      <div class="chat-image avatar"></div>
      <div class="chat-bubble">${userMessage}</div>
    `;
    messagesDiv.appendChild(userMessageDiv);

    userInput.value = '';

    fetch('https://chat-aykin-9ea068b9f841.herokuapp.com/api/chat/getMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:"basa1balan@gmail.com",projectName:"Ba Sa Balan",textUser: userMessage }),
    })
    .then(response => response.json())
    .then(data => {
      const botMessageDiv = document.createElement('div');
      botMessageDiv.className = 'chat chat-start';
      botMessageDiv.innerHTML = `
        <div class="chat-image avatar">
          <div class="w-10 rounded-full bg-slate-50">
            <img alt="Tailwind CSS chat bubble component" src="https://aykin.fr/images/logos/logo-black.svg" />
          </div>
        </div>
        <div class="chat-bubble">${data.response}</div>
      `;
      messagesDiv.appendChild(botMessageDiv);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    })
    .catch(error => {
      console.error('Error:', error);
      const errorMessageDiv = document.createElement('div');
      errorMessageDiv.className = 'chat chat-start';
      errorMessageDiv.innerHTML = `
        <div class="chat-image avatar">
          <div class="w-10 rounded-full bg-slate-50">
            <img alt="Tailwind CSS chat bubble component" src="https://aykin.fr/images/logos/logo-black.svg" />
          </div>
        </div>
        <div class="chat-bubble">Oups erreur, connectez-vous plus tard</div>
      `;
      messagesDiv.appendChild(errorMessageDiv);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
  }