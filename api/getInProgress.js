
export default async function handler(req, res) {

 const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      return res.status(401).json({ error: 'Access token not found' });
    }  
    const response = await fetch(`https://3.basecamp.com/3537899/buckets/38519896/todolists/7661448591/todos.json`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'User-Agent': 'Localhost-Test (garwoodj22@gmail.com)'
      }
    });
  
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch Basecamp data' });
    }
  
    const data = await response.json();
    res.status(200).json(data);
  }

//   https://launchpad.37signals.com/authorization/new?type=web_server&client_id=7e1d387ff157828dcf06ba3ebf5abbf035c03d6b&redirect_uri=https://outlook-api.vercel.app