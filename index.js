require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.use(express.json());
app.use(cors());

app.get("/users", async (req, res) => { 
  const { data, error } = await supabase
    .from("users").select("*");
        
  if (error) return res.status(500).json({ error });
  res.json(data);
    
    
})

app.get('/questions', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select('*');

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    res.json(data);
    console.log('Data:', data);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Server Error');
  }
});

app.get('/exams', async (req, res) => { 
   try {
    const { data, error } = await supabase
      .from('Exams')
      .select('*');

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    res.json(data);
    console.log('Data:', data);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Server Error');
  }
})

app.get('/results', async (req, res) => {
     try {
    const { data, error } = await supabase
      .from('results')
      .select('*');

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    res.json(data);
    console.log('Data:', data);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Server Error');
  }
})

app.get('/answers', async (req, res) => { 
      try {
    const { data, error } = await supabase
      .from('answers')
      .select('*');

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    res.json(data);
    console.log('Data:', data);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Server Error');
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});