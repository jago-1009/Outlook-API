export default async function handler(req, res) {
  const { code } = req.body;
//   localStorage.setItem("item", authData.access_token);
  // Use the access token to fetch data from Basecamp API

  if (!code) {
    return res.status(418).json({ error: "Access token not found" });
  }
  const response = await fetch(`https://launchpad.37signals.com/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: "7e1d387ff157828dcf06ba3ebf5abbf035c03d6b",
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: "https://outlook-api.vercel.app",
      type: "authorization_code",
        code: code,
    }),
  });

  if (!response.ok) {
    return res
      .status(response.status)
      .json({ error: "Failed to fetch Basecamp data" });
  }

  const data = await response.json();
  return res.status(200).json(data);
}

//   https://launchpad.37signals.com/authorization/new?type=web_server&client_id=7e1d387ff157828dcf06ba3ebf5abbf035c03d6b&redirect_uri=https://outlook-api.vercel.app
