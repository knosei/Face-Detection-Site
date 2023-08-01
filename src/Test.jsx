import React, { useState, useRef } from 'react';
import axios from 'axios';
const UploadContainer = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showImageContainer, setShowImageContainer] = useState(false);
  const [metadata, setMetadata] = useState(null)
  const fileInputRef = useRef(null);
  const [string, setString] = useState("")
  const canvasRef = useRef();

  const drawRectangle = (dim, scale) => {
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 1;
    const width = (dim[2] - dim[0]) * scale.x_scale
    const height = (dim[3] - dim[1]) * scale.y_scale
    console.log(width)
    console.log(height)
    console.log(dim[2] * scale.x_scale)
    console.log(dim[3] * scale.y_scale)
    // context.strokeRect(dim[2] * scale.x_scale, dim[3] * scale.y_scale, width, height);
    context.strokeRect(10, 10, 200, 200);

  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setShowImageContainer(true);
    setUploading(true);
    const context = canvasRef.current.getContext("2d");
    ctx.drawImage(previewUrl, 0, 0, 300, 200);
    const reader = new FileReader();
    reader.onload = async (e) => {
      let image = new Image()
      image.src = image.src = e.target.result
      await image.decode()
      setMetadata({ width: image.width, height: image.height })
    }
    reader.onloadend = () => {
      // `reader.result` contains the base64 string of the uploaded image
      setString(reader.result);
      setUploading(false);
    };

    // Read the selected file as a data URL (base64 string)
    reader.readAsDataURL(file);

    // Simulating image upload delay (Remove this in production)
    setTimeout(() => {
      setUploading(false);
    }, 2000);
  };

  // const handleProceed = () => {
  //     // Handle the proceed action here
  //     // For example, redirect to the next page
  //     console.log('Proceed to the next step');
  // };

  const handleSelectDifferentImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setShowImageContainer(false);
    fileInputRef.current.value = ''; // Reset the file input
  };

  const handleProceed = () => {
    console.log('in...')
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log(metadata)

    try {
      const response = axios.post('http://localhost:8000/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important: Set the content type as multipart/form-data
        },
      }).then((res) => {
        console.log(res.data.detections)
        const detections = res.data.detections
        detections.forEach(element => {
          const scale = { x_scale: 600 / metadata.width, y_scale: 400 / metadata.height }
          drawRectangle(element, scale)
        });
      })



    } catch (error) {
      console.error('Error uploading:', error);
    }

    // try {
    //   const response = await fetch('http://localhost:8000/file', {
    //     method: 'POST',
    //     body: formData
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log('Number of faces:', data.num_faces);
    //     // Processed image data returned as base64-encoded string

    //     // const processedImage = `data:image/png;base64,${data.processed_image}`;
    //     // setProcessedImageUrl(processedImage);
    //   } else {
    //     console.error('Error processing image:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error processing image:', error.message);
    // }
  };

  return (
    <div className="relativ h-scree mt-[30px] ">
      {/* {uploading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg text-center">
            <p className="text-gray-600 mb-2">Uploading image...</p>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        </div>
      )} */}
      {showImageContainer && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 backdrop-blur-md  ">
          <div className="bg-white p-4 rounded-lg text-center w-[652px] h-[510px] flex flex-col">
            <canvas
              ref={canvasRef}
              style={{
                width: "600px",
                height: "400px",

              }}
            />
            {/* <img
              src={previewUrl}
              alt="Uploaded Image"
              className="w-2/3 h-[400px] mx-auto mb-4  "
            /> */}
            <p className="text-gray-600 mb-2">Image uploaded successfully!</p>
            <div className="flex justify-center">
              <button
                onClick={handleProceed}
                className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Proceed
              </button>
              <button
                onClick={handleSelectDifferentImage}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Select Different Image
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center h-sceen">
        <div className="bg-gray-00 p-4 rounded-full w-[650px] h-[50px] ">
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex justify-between items-center w-[650px] h-[50px] p-4 border border-dashe rounded-full border-gray-400 hover:border-blue-600"
          >
            {/* {previewUrl ? (
                            <img src={previewUrl} alt="Preview" className="w-100 h-100 mx-auto" />
                        ) : ( */}
            <>
              <p className="text-gray-900 hover:text-blue-700 font-semibold">Upload a photo</p>
              <img src='./camera.svg' width='35px' height='25px' />
            </>

            {/* )} */}
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default UploadContainer;
