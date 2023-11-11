const SNAKE_GAME_URL = 'https://pkief.com/Snake/'
const INVADERS_GAME_URL = 'https://susam.net/invaders.html'
const TETHER_GAME_URL = 'https://tether.rayhanadev.repl.co/'
const SPACECRAFT_GAME_URL = 'https://js13kgames.com/games/spacecraft/index.html'
const PATH_TO_GLORY_GAME_URL = 'https://js13kgames.com/games/path-to-glory/index.html'
const MERLIN_VS_ALFONSO_GAME_URL = 'https://js13kgames.com/games/merlin-vs-alfonso/index.html'
const CASUAL_CRUSADE_GAME_URL = 'https://js13kgames.com/games/casual-crusade/index.html'

const JOHNNY_CASTAWAY_GIF_ONE_URL = 'https://i.imgur.com/ZN9qpcc.gif'

const endpoints = [
  '/whatsapp/message/avg_sentiment_per_person',
  '/whatsapp/message/sentiment_over_time',
  '/whatsapp/message/peak_response_time',
  '/whatsapp/message/activity_heatmap',
  '/whatsapp/message/user_activity_over_time',
  '/whatsapp/message/conversational_turns',
  '/whatsapp/message/active_days',
  '/whatsapp/message/topic_percentage',
  '/whatsapp/message/wordfrequency/25',
  '/whatsapp/message/wordcloud',
  '/whatsapp/message/lenghiest/top/10',
  '/whatsapp/message/sentiment/distribution',
  // '/whatsapp/message/heatmap', not thaaat good, also kind of redundant (activity_heatmap)
  '/whatsapp/message/usercount',
  // '/whatsapp/message/activeusers/10', redundant
  // '/whatsapp/message/topic_modeling' // not working
];

const endpointTitles = {
  'message/avg_sentiment_per_person': 'Acima de 0 - palavras positivas | abaixo de 0 - negativas',
  'message/sentiment_over_time': 'Sentimento ao Longo do Tempo',
  'message/peak_response_time': 'Picos de mensagens por Usuário por hora',
  'message/activity_heatmap': 'Número de mensagems X Hora do dia',
  'message/user_activity_over_time': 'Atividade dos Usuários ao Longo do Tempo',
  'message/conversational_turns': 'Quem mais "puxa novos papos" e/ou "responde menos"',
  'message/active_days': 'Número de mensagens por dia da semana',
  'message/topic_percentage': 'Percentual de Tópicos',
  'wordfrequency/25': 'Frequência de Palavras que mais aparecem (Top 25)',
  'message/wordcloud': 'Nuvem de Palavras | WordCloud',
  'top/10': '10 usuários que mandam as maiores mensagens',
  'sentiment/distribution': 'Média de sentimento (LeIA/Vader sentiment analysis)',
  'message/heatmap': 'Mapa de calor | Mensagens enviadas por hora',
  'message/usercount': 'TOP 20 que mais enviam | BOTTOM 5 que menos enviam',
  'activeusers/10': 'TOP 10 Usuários que mais enviam mensagens',
  'topic_modeling': 'Modelagem de Tópicos' // não está funcionando
};

const MAX_RETRIES = 2;
const API_DOMAIN = 'https://api.analisegrupal.com.br'
// const API_DOMAIN = 'http://localhost:5000'

function shareOnWhatsApp(imageUrl, customMessage) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const encodedImageUrl = encodeURIComponent('----> ' + imageUrl);
  const encodedMessage = encodeURIComponent(customMessage);
  const whatsappUrl = isMobile ? `whatsapp://send?text=${encodedMessage}%20${encodedImageUrl}`
                               : `https://web.whatsapp.com/send?text=${encodedMessage}%20${encodedImageUrl}`;
  trackEvent('share', 'WhatsApp', 'Content Share', 1);

  // Try to open a new window
  const newWindow = window.open(whatsappUrl, '_blank');
  
  // If a popup blocker prevents the new window, set the location of the current window
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = whatsappUrl;
  }
}

function showSpinner(spinnerId) {
	// console.log("showSpinner-id=[" + spinnerId + ']');
	try { 
	  document.getElementById(spinnerId).style.display = 'block'
	} catch (err) { 
	  // console.log(err) 
	}
}

function hideSpinner(spinnerId) {
	// console.log("hideSpinner-id=[" + spinnerId + ']');
	try { 
	  document.getElementById(spinnerId).style.display = 'none'
	} catch (err) {
	  // console.log(err) 
	}      
}

function enableAllAnalyzeButtons() {
  for (let i = 0; ; i++) {
      const analyzeButton = document.getElementById(`analyze${i}`);
      if (!analyzeButton) break; // If the button doesn't exist, stop the loop
      analyzeButton.disabled = false;
  }
}

function uploadAndShare(imageId, spinnerId, text, analysisType, temperature, endGame) {
	// console.log(imageId)
	// console.log(spinnerId)
	trackEvent('share', 'WhatsApp', 'Content Share Try', 1);
	gtag('share', 'WhatsApp', {'send_to': 'AW-11398970229/w499CJ7ZufMYEPX2ubsq'});
	showSpinner(spinnerId);
	const imgElement = document.getElementById(imageId);
	fetch(imgElement.src)
	  .then(res => res.blob())
	  .then(blob => {
	      validateImage(blob).then(validBlob => {
	          let formData = new FormData();
	          formData.append('image', validBlob);

	          fetch(API_DOMAIN + '/upload_to_imgur', {
	              method: 'POST',
	              body: formData
	          })
	          .then(response => response.json())
	          .then(data => {
	          	hideSpinner(spinnerId)
	            if (endGame) {
	              closeIframe()
	              closeFullscreenGif()
	            }
	            let _text;
	            if(text && analysisType && temperature) {
	              let model = `\n\nAnálise tipo:[${analysisType}]--temperatura:[${temperature}]`
	              _text = text
	              _text += model
	              _text += '\n\n\n📊🧐 Confira no https://analisegrupal.com.br/ #AnáliseGrupal'
	            } else {
	              _text = '🚀 Descubra as estatísticas do nosso grupo do WhatsApp com esta análise! '
	            }
	            if (data.link && _text) {
	                shareOnWhatsApp(data.link, _text, endGame);
	            } else {
	              // console.log(data)
	              hideSpinner(spinnerId)
	              const error = data.response.data.error
	              if(error) {
	                alert(error)
	              }
	              throw new Error('Imgur upload failed or no link returned.');
	            }
	          })
	          .catch(error => {
	          	hideSpinner(spinnerId)
	            if (endGame) {
	              closeIframe()
	              closeFullscreenGif()
	            }
	            console.error('Error uploading to Imgur or sharing on WhatsApp:', error);
	          });
	      }).catch(error => {
	      	  hideSpinner(spinnerId)
	          if (endGame) {
	           	closeIframe()
	            closeFullscreenGif()
	          }
	          console.error('Invalid image for upload:', error);
	      });
	});
}

function validateImage(blob) {
  return new Promise((resolve, reject) => {
      const imageUrl = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => resolve(blob);  // If loading succeeds, the image is valid
      img.onerror = () => reject(new Error('Invalid image'));  // If there's an error, the image isn't valid
      img.src = imageUrl;
  });
}

function fetchData(endpoint, formData, retries = 0) {
    return fetch(API_DOMAIN + endpoint, {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (!response.ok && retries < MAX_RETRIES) {
          return fetchData(endpoint, formData, retries + 1);
      } else if (!response.ok) {
          throw new Error(`Failed after ${MAX_RETRIES} retries.`);
      }
      if(endpoint === '/whatsapp/message/topic_modeling') {
          return response.text()
      } else {
          return response.blob()
      }
  });
}

function createButtonSet(imageSrc, text, index, type) {
	const container = document.createElement('div');
	container.style.display = 'flex';
	container.style.alignItems = 'center';
	container.style.flexDirection = 'column';
	container.style.padding = '20px';

	// If type is 'whatsapp', create the WhatsApp share button
	if (type === 'whatsapp') {
	    const button = document.createElement('img');
	    button.src = imageSrc;
	    button.width = 50;
	    button.alt = text;
	    button.style.cursor = 'pointer';
	    container.appendChild(button);

	    const buttonText = document.createElement('span');
	    buttonText.innerText = text;
	    container.appendChild(buttonText);

	    const spinner = document.createElement('img');
	    spinner.src = "img/loading_01.gif";
	    spinner.alt = "Carregando...";
	    spinner.style.display = 'none';
	    spinner.id = `whatsapp-spinner-${index+1}`;
	    spinner.width = 30;
	    container.appendChild(spinner);

	    button.onclick = () => {
	        uploadAndShare('image' + (index+1), spinner.id);
	    };
	} 
	// Otherwise, if type is 'analysis', create the analysis options form
	else if (type === 'analysis') {
	    // Analysis options will be a form with radio buttons and a slider
	    const form = document.createElement('form');
	    form.id = `analysis-options-${index}`;
	    form.style.display = 'flex';
	    form.style.flexDirection = 'column';
	    form.style.alignItems = 'flex-start';
	    form.style.marginTop = '10px';

	    // Radio buttons for analysis type
	    const types = ['técnica', 'descontraída', 'zoeira'];
	    types.forEach((type, idx) => {
	        const label = document.createElement('label');
	        const radio = document.createElement('input');
	        radio.type = 'radio';
	        radio.name = `analysisType-${index}`;
	        radio.value = type;
	        radio.id = `analysisType-${type}-${index}`;
	        if (idx === 0) radio.checked = true; // Default to first option
	        label.appendChild(radio);
	        label.appendChild(document.createTextNode(type.charAt(0).toUpperCase() + type.slice(1)));
	        form.appendChild(label);
	    });

	    // Slider for randomness
	    const sliderLabel = document.createElement('label');
	    sliderLabel.innerText = 'Aleatoriedade:';
	    const slider = document.createElement('input');
	    slider.type = 'range';
	    slider.min = '0';
	    slider.max = '1';
	    slider.step = '0.1';
	    slider.value = '0.1'; // Default value
	    slider.id = `randomness-slider-${index}`;
	    sliderLabel.appendChild(slider);
	    form.appendChild(sliderLabel);

	    // Button to trigger the analysis
	    const analyzeButton = document.createElement('button');
	    analyzeButton.id = `analyze${index}`
	    analyzeButton.type = 'button'; // Prevent form submission
	    analyzeButton.innerText = text;
	    analyzeButton.disabled = true
	    analyzeButton.onclick = () => {
	        const selectedType = document.querySelector(`input[name="analysisType-${index}"]:checked`).value;
	        const randomnessValue = slider.value;
	        console.log('Start analysis with options:', selectedType, randomnessValue);
	        showModal();
	        window._imageId = `image${(index+1)}`
	        window._analysisType = selectedType
	        window._temperature = randomnessValue
	        window._spinnerId = `analysis-spinner-${index+1}`
	        // analyzeAndShare('image' + (index + 1), selectedType, randomnessValue, `analysis-spinner-${index+1}`);
	    };
	    form.appendChild(analyzeButton);

	    container.appendChild(form);
	}

	return { container };
}


// Helper function to create radio button
function createRadioButton(id, value, isChecked) {
	const radioInput = document.createElement('input');
	radioInput.type = 'radio';
	radioInput.id = id;
	radioInput.name = `analysisType-${id.split('-')[2]}`;
	radioInput.value = value;
	radioInput.checked = isChecked;

	const radioLabel = document.createElement('label');
	radioLabel.htmlFor = id;
	radioLabel.innerText = value.charAt(0).toUpperCase() + value.slice(1); // Capitalize the first letter

	radioLabel.appendChild(radioInput);

	return { label: radioLabel };
}

async function analyzeAndShare(imageId, analysisType, temperature, spinnerId) {
  trackEvent('clicked_analyzeAndShare', 'Form', 'Clicked analyseAndShare', 1);
  const imageNumber = parseInt(imageId.replace(/[^\d]/g, ''), 10);
  if(imageNumber > 1) {
    alert('Não implementado, confira novamente amanhã');
    closeIframe()
    closeFullscreenGif()
    return;
  }
  const formData = new FormData(document.getElementById('uploadForm'));
  try {
    const temp = parseFloat(temperature)

    // Append the analysis type and temperature to the formData
    formData.append('data', JSON.stringify({
      type: analysisType,
      temperature: temp
    }));

    let _url;

    if (imageNumber === 1) {
      _url = `${API_DOMAIN}/whatsapp/message/avg_sentiment_per_person/analyse`
    }

    const response = await fetch(_url, {
      method: 'POST',
      body: formData
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response as JSON
    const result = await response.json();

    // Log the result or do something with it
    // console.log(result);

    uploadAndShare(imageId, spinnerId, result, analysisType, temperature, true)

  } catch (error) {
    console.error('Error during the API call:', error);
  } finally {
    // doSomething???
  }
}


function processEndpoint(index, formData) {
  if (index >= endpoints.length) {
    enableAllAnalyzeButtons();
    return; // All endpoints processed
  }

  const endpoint = endpoints[index];
  const resultsDiv = document.getElementById('analysisResults');

  const title = document.createElement('h3');
  let parts = endpoint.split('/');
  let endpointKey = parts.slice(-2).join('/');
  let titleText = endpointTitles[endpointKey] || "Unknown";
  title.innerText = titleText;
  resultsDiv.appendChild(title);

  // Create a container for each set of buttons and their respective spinner and text
  const buttonSetContainer = document.createElement('div');
  buttonSetContainer.style.display = 'flex';
  buttonSetContainer.style.alignItems = 'center';
  buttonSetContainer.style.justifyContent = 'space-between';
  buttonSetContainer.style.marginBottom = '10px'; // Space between button sets

  // Create the WhatsApp share button set
  const whatsappButtonSet = createButtonSet('img/share_whatsapp.png', 'Compartilhe', index, 'whatsapp');
  buttonSetContainer.appendChild(whatsappButtonSet.container);

  // Create the analysis and share button set
  const analysisButtonSet = createButtonSet('img/share_whatsapp.png', 'Analise e Compartilhe', index, 'analysis');
  buttonSetContainer.appendChild(analysisButtonSet.container);

  if (endpoint === "/whatsapp/message/topic_modeling") {
      const placeholderImg = document.createElement('img');
      placeholderImg.src = "img/loading.gif";
      placeholderImg.width = 100;
      resultsDiv.appendChild(placeholderImg);

      fetchData(endpoint, formData)
      .then(htmlContent => {
          const iframeContainer = document.createElement('div');
          iframeContainer.style.display = 'flex';
          iframeContainer.style.justifyContent = 'center';
          iframeContainer.style.alignItems = 'center';
          iframeContainer.style.height = '900px';  // Set to the desired height
          iframeContainer.style.width = '1200px';

          const iframe = document.createElement('iframe');
          // iframe.width = "90%";  // Adjust width as needed
          iframe.height = "100%";  // Use 100% to occupy the full height of the container

          iframeContainer.appendChild(iframe);
          resultsDiv.appendChild(iframeContainer);
          iframe.width = "100%";  // or any other percentage or fixed value that looks better

          iframe.contentWindow.document.open();
          iframe.contentWindow.document.write(htmlContent);
          iframe.contentWindow.document.close();
          
          // Remove or hide the placeholder image after the content is loaded
          resultsDiv.removeChild(placeholderImg);

          iframe.onload = () => iframe.scrollIntoView({ behavior: 'smooth' }); 

          processEndpoint(index + 1, formData);  // Process the next endpoint
      })
      .catch(error => {
          console.error('Error fetching the content:', error);
          const errorDiv = document.createElement('div');
          errorDiv.innerHTML = "<p>Error loading content</p>";
          resultsDiv.appendChild(errorDiv);

          resultsDiv.removeChild(placeholderImg);

          processEndpoint(index + 1, formData);  // Process the next endpoint
      });
  } else {
      const img = document.createElement('img');
      img.id = 'image' + (index + 1);
      img.alt = title.innerText;
      img.width = 100;
      img.src = "img/loading.gif";
      resultsDiv.appendChild(img);

      fetchData(endpoint, formData)
      .then(imageBlob => {
          const imageUrl = URL.createObjectURL(imageBlob);
          img.width = 1200;
          img.src = imageUrl;
          img.onload = () => img.scrollIntoView({ behavior: 'smooth' });

          // Append the button sets to the resultsDiv
          resultsDiv.appendChild(buttonSetContainer);

          processEndpoint(index + 1, formData);  // Process the next endpoint
      })
      .catch(error => {
          console.error('Error fetching the image:', error);
          img.width = 100;
          img.src = "img/error.gif";

          processEndpoint(index + 1, formData);  // Process the next endpoint
      });
  }
}

function submitForm() {
  var fileInput = document.getElementById('file');
  var file = fileInput.files[0];
  var resultsDiv = document.getElementById('analysisResults');
  resultsDiv.innerHTML = "";  // Clear previous results

  // Check if the file extension is .txt or .zip
  var validExtensions = /(\.txt|\.zip)$/i;
  if (!validExtensions.exec(file.name)) {
      alert('Tipo de arquivo inválido. Faça upload de um arquivo .txt ou .zip.');
      return false;  // Stop the form submission
  }

  var formData = new FormData(document.getElementById('uploadForm'));

  trackEvent('submit', 'Form', 'Chat Upload', 1);
  gtag('submit', 'Form', {'send_to': 'AW-11398970229/w499CJ7ZufMYEPX2ubsq'});
  gtag('event', 'conversion', {'send_to': 'AW-11398970229/xvhrCJKA4fMYEPX2ubsq'});

  processEndpoint(0, formData);  // Start processing from the first endpoint

  return false;  // Prevent actual form submission
}

function prepareForAnalysis() {
	let gallery = $('.gallery a').simpleLightbox();
	gallery.on('show.simplelightbox', function () {
	  // do something…
	});
}

function openIframe(gameUrl) {
  var iframe = document.getElementById('gameIframe');
  iframe.style.display = 'block';
  iframe.src = gameUrl;
  iframe.onload = function() {
    iframe.focus(); // Focus on the iframe after it has loaded
  };
}

function closeIframe(gameUrl) {
  var iframe = document.getElementById('gameIframe');
  iframe.style.display = 'none';
  iframe.src = '';
}

// Function to open the fullscreen GIF modal
function openFullscreenGif(gifUrl) {
  // Create an overlay div
  var overlay = document.createElement('div');
  overlay.id = 'gifOverlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.zIndex = '1000';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // semi-transparent background
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';

  // Create an image element for the GIF
  var gif = document.createElement('img');
  gif.src = gifUrl;
  gif.style.maxWidth = '100%';
  gif.style.maxHeight = '100%';

  // Add an event listener to close the modal on click
  overlay.addEventListener('click', closeFullscreenGif);

  // Append the GIF to the overlay, and then the overlay to the body
  overlay.appendChild(gif);
  document.body.appendChild(overlay);
}

// Function to close the fullscreen GIF modal
function closeFullscreenGif() {
  var overlay = document.getElementById('gifOverlay');
  if (overlay) {
    overlay.removeEventListener('click', closeFullscreenGif); // Remove the event listener
    document.body.removeChild(overlay);
  }
}


/**
 * MODAL STUFF **/

 // Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showModal() {
  modal.style.display = "block";      
}

// When the user submits their choice
function submitChoice() {
  var selectedGame = document.querySelector('input[name="game"]:checked').value;
  modal.style.display = "none";

  console.log(selectedGame)

  switch (selectedGame) {
    case 'snake':
      openIframe(SNAKE_GAME_URL)
      break;
    case 'invaders':
      openIframe(INVADERS_GAME_URL)
      break;
    case 'tether':
      openIframe(TETHER_GAME_URL)
      break;
    case 'castaway':
      openFullscreenGif(JOHNNY_CASTAWAY_GIF_ONE_URL)
      break;
    case 'spacecraft':
      openIframe(SPACECRAFT_GAME_URL)
      break;
    case 'pathtoglory':
      openIframe(PATH_TO_GLORY_GAME_URL)
      break;
    case 'merlinvsalfonso':
      openIframe(MERLIN_VS_ALFONSO_GAME_URL)
      break;
    case 'casualcrusade':
      openIframe(CASUAL_CRUSADE_GAME_URL)
      break;
    default:
      console.log('No valid option was selected.');
      break;
  }
  analyzeAndShare(_imageId, _analysisType, _temperature, _spinnerId);
}

/** END MODAL STUFF **/

// Define the sequence for the Konami Code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

// Listen for keydown events
document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateEasterEgg();
      konamiIndex = 0; // reset the index
    }
  } else {
    konamiIndex = 0; // reset the index if the wrong key is pressed
  }
});

// Activate the easter egg
function activateEasterEgg() {
  // You can call any function here, such as opening a modal with a game
  console.log('Easter egg activated!');
  openIframe(MERLIN_VS_ALFONSO_GAME_URL)
  // For example: openGame('snake'); // This would be a function to start the Snake game
}

let typedWord = '';
const secretWord = 'brow';

document.addEventListener('keypress', (e) => {
  typedWord += e.key;
  if (typedWord.includes(secretWord)) {
    showCastawayGif();
    typedWord = ''; // reset the typed word
  } else if (!secretWord.startsWith(typedWord)) {
    typedWord = ''; // reset if the sequence is wrong
  }
});

function showCastawayGif() {
  openFullscreenGif('https://analisegrupal.com.br/img/thedude.gif')
}

window.shareOnWhatsApp = shareOnWhatsApp
window.showSpinner = showSpinner
window.hideSpinner = hideSpinner
window.enableAllAnalyzeButtons = enableAllAnalyzeButtons
window.uploadAndShare = uploadAndShare
window.validateImage = validateImage
window.fetchData = fetchData
window.createButtonSet = createButtonSet
window.createRadioButton = createRadioButton
window.analyzeAndShare = analyzeAndShare
window.processEndpoint = processEndpoint
window.submitForm = submitForm
window.prepareForAnalysis = prepareForAnalysis
window.openIframe = openIframe
window.closeIframe = closeIframe
window.SNAKE_GAME_URL = SNAKE_GAME_URL
window.INVADERS_GAME_URL = INVADERS_GAME_URL
window.TETHER_GAME_URL = TETHER_GAME_URL
window.openFullscreenGif = openFullscreenGif
window.closeFullscreenGif = closeFullscreenGif
window.JOHNNY_CASTAWAY_GIF_ONE_URL = JOHNNY_CASTAWAY_GIF_ONE_URL
window.showModal = showModal
window.submitChoice = submitChoice
