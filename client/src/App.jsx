// import './App.css'
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Container from "./components/Container";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";

const supabaseUrl = "https://qkigwzmsjofivkatnjan.supabase.co";
const CDNUrl =
  "https://qkigwzmsjofivkatnjan.supabase.co/storage/v1/object/public/Videos/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFraWd3em1zam9maXZrYXRuamFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5ODIxNTMsImV4cCI6MjAyMzU1ODE1M30._NqvedHnXuq1R6YYmOYAnjqYbsAZljDNdz3VvDeoOZk";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const { data, error } = await supabase.storage.from("Videos").list("");

    if (data !== null) {
      setVideos(data);
    }

    if (error) {
      console.log(error);
      alert("Error grabbing files from Superbase");
    }
  }

  useEffect(() => {
    getVideos();
  }, []);

  async function uploadFile(e) {
    console.log("Upload");
    const videoFile = e.target.files[0];
    const { error } = await supabase.storage
      .from("Videos")
      .upload(uuidv4() + ".mp4", videoFile);

    if (error) {
      console.log(error);
      alert("Error uploading file to Superbase");
    }

    getVideos();
  }

  console.log(videos);

  return (
    <Container>
      <h1>VideoFeed</h1>
      <Form uploadFile={uploadFile} />
    </Container>
  );
}

export default App;
