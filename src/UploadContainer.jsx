import React, { useState, useRef } from 'react';

const UploadContainer = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [showImageContainer, setShowImageContainer] = useState(false);
    const fileInputRef = useRef(null);
    

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        setShowImageContainer(true);
        setUploading(true);

        // Simulating image upload delay (Remove this in production)
        setTimeout(() => {
            setUploading(false);
        }, 2000);
    };

    const handleProceed = () => {
        // Handle the proceed action here
        // For example, redirect to the next page
        console.log('Proceed to the next step');
    };

    const handleSelectDifferentImage = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setShowImageContainer(false);
        fileInputRef.current.value = ''; // Reset the file input
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
                <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 backdrop-blur-md  ">
                    <div className="bg-white p-4 rounded-lg text-center w-[632px] h-[456px]">
                        <img
                            src={previewUrl}
                            alt="Uploaded Image"
                            className="w-100 h-100 mx-auto mb-4 rounded-full "
                        />
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
