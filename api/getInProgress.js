
export default async function handler(req, res) {

 const { token } = req.body;
 console.log('req.body:', req.body);

    if (!token) {
      return res.status(418).json({ error: 'Access token not found' });
    }  
    const response = await fetch(`https://3.basecamp.com/3537899/buckets/38519896/todolists/7661448591/todos.json`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'Localhost-Test (garwoodj22@gmail.com)'
      }
    });
  
    if (!response.ok) {

      return res.status(response.status).json({ error: 'Failed to fetch Basecamp data' + response.statusText  });
    }
  
    const data = await response.json();
   return res.status(200).json(data);
  }

//   https://launchpad.37signals.com/authorization/new?type=web_server&client_id=7e1d387ff157828dcf06ba3ebf5abbf035c03d6b&redirect_uri=https://outlook-api.vercel.app
// https://3.basecamp.com/3537899/buckets/1/todolists/2/todos.json
//https://3.basecamp.com/3537899/buckets/38519896/todolists/7661448591/todos.json