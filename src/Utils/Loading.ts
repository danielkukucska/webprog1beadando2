const ToggleLoadingModal = (message: string, id: string): void => {
    let container = document.getElementById("loadingUsersModal");
    if(container){
        container.remove();
        return;
    }

    container = document.createElement("div");
    container.id = id;
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.height = "100vh";
    container.style.width = "100vw";

    const backDrop = document.createElement("div");
    backDrop.style.background = "rgba(255,255,255,0.3)";
   
    backDrop.style.zIndex = "1000";
    container.appendChild(backDrop);
    
    const messagePanel = document.createElement("div");
    messagePanel.innerText = message;
    messagePanel.style.zIndex = "1001";
    container.appendChild(messagePanel);
};

export  default ToggleLoadingModal;
