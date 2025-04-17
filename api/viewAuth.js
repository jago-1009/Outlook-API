export default async function handler(req, res) {
    const { token } = req.body;
    //   localStorage.setItem("item", authData.access_token);
    // Use the access token to fetch data from Basecamp API
  
    if (!token) {
      return res.status(418).json({ error: "Access token not found" });
    }
    const response = await fetch(
      `https://launchpad.37signals.com/authorization.json`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User-Agent': 'Localhost-Test (garwoodj22@gmail.com)' // Basecamp *requires* this
          }
      } 
    );
  
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch token" });
    }
  
    const data = await response.json();
    return res.status(200).json(data);
  }
  
  