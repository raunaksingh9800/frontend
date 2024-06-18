
import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), 'data', 'IPloger.json');

function loadSessions(Filename) {
  try {
    const data = fs.readFileSync(Filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {
      "Status": 'fail',
      "Error" : `${error}`
    };
  }
}

function writeData(filename, data, res) {
  try{
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    res.status(200).send("Done");
  }
  catch (error) {
    res.status(500).json({"Issue":`${error}`})
  }
}

export default function handler(req, res) {
  if(process.env.NEXT_PUBLIC_TYPE=="demo") {
    res.writeHead(302, { Location: '/404' }).end();
  }
  else{
  if(req.method === 'GET'){
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ error: "failed" });
        return;
      }
      res.status(200).json(JSON.parse(data));
    })
  }
  else if (req.method === 'POST') {
      const {BACKENDIP} = req.body;
      let Data = loadSessions(filePath);
      if(Data.Status) res.status(500).json({"Issue":Data})
      else {
        Data['BACKENDIP'].val = BACKENDIP;
        writeData(filePath, Data, res)
      }
    }
  else {
    res.send("L")
  }
  }
}
