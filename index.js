require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.use(express.json());

app.get("/users", async (req, res) => { 
    const { data, error } = await supabase
        .from("users")
        .select("*")
    
        
  if (error) return res.status(500).json({ error });
  res.json(data);
    
    
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});