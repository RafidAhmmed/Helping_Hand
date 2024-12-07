function openFullScreen(img) {
    var src = img.src;
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';

    var closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '20px';
    closeButton.style.fontSize = '30px';
    closeButton.style.color = 'white';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = function() {
        document.body.removeChild(modal);
    };

    var imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.style.maxWidth = '90%';
    imgElement.style.maxHeight = '90%';
    imgElement.style.borderRadius = '10px';

    modal.appendChild(imgElement);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);
}