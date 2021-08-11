document
  .getElementById("teatherMode")
  .addEventListener("click", async function (event) {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function() {
        const container = document.querySelector(".MaterialView");
        const community = document.querySelector(".MaterialView-community");
        const video = document.querySelector(".MaterialView-video-item");

        const isApplied = community.style.display === "none";

        function getNextValue(nextVal) {
          if (isApplied) {
            return null;
          }
          return nextVal;
        }

        community.style.display = getNextValue("none");
        container.style.gridTemplateColumns = getNextValue("1fr");
        video.style.maxWidth = getNextValue("100%");
      },
    });
  });
