import React, { useState } from 'react';

const Test = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-4 rounded-lg">
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex justify-center items-center w-full h-full p-4 border-4 border-dashed rounded-lg border-gray-400 hover:border-gray-600"
        >
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="max-h-40 mx-auto" />
          ) : (
            <div>
               <p className="text-gray-600">Click to upload image</p>
               <img src='./camera.png' width='35px' height='25px' />  
            </div>
           
          )}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );

}

export default Test