export default function handler(req, res) {
    if (req.method === "POST") {
      const { platform, username, service, quantity } = req.body;
  
      if (!platform || !username || !service || !quantity) {
        return res.status(400).json({ message: "All fields are required!" });
      }
  
      if (quantity > 7000) {
        return res.status(400).json({ message: "Quantity exceeds the maximum limit of 7,000!" });
      }
  
      // Simulate successful processing
      console.log(`Boosting ${quantity} ${service} on ${platform} for ${username}`);
      return res.status(200).json({ message: `Boosting ${quantity} ${service} for ${username} on ${platform}.` });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  