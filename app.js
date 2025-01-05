document.getElementById("boostForm").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const formData = {
      platform: document.getElementById("platform").value,
      username: document.getElementById("username").value,
      service: document.getElementById("service").value,
      quantity: document.getElementById("quantity").value,
    };
  
    try {
      const response = await fetch("/api/boost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      const messageDiv = document.getElementById("responseMessage");
      messageDiv.textContent = result.message;
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  });
  