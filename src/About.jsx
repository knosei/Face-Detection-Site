import React from 'react'

const About = () => {
  return (
    <div className='flex bg-gray-600 justify-center items-center'>
        <div className='flex h-[700px] w-[1078px] justify-around items-center'>
            <div className='flex flex-col justify-between h-[558px]'>
                <div className='border h-[250px] w-[695px] rounded-lg bg-white text-black p-4'>
                    <h4 className='font-bold text-base mb-1'>What is a reverse image search?</h4>
                    <p>A reverse image search is a technique that allows finding things, people, brands, etc. using a photo. While performing a regular search you usually type a word or phrase that is related to the information you are trying to find; when you do a reverse image search, you upload a picture to a search engine. In the results of regular searches, you receive a list of websites that are connected to these phrases. When you perform a reverse image search, in the results you receive photos of similar things, people, etc, linked to websites about them. Reverse search by image is the best solution to use when looking for similar images, smaller/bigger versions of them, or twin content. The best-known reverse image search engine is Google Images.</p>
                </div>
                <div className='border h-[270px] w-[685px] rounded-lg bg-white text-black p-4'>
                    <h4 className='font-bold text-base mb-1'>More than a reverse image search</h4>
                    <p>PimEyes uses a reverse image search mechanism and enhances it by face recognition technology to allow you to find your face on the Internet (but only the open web, excluding social media and video platforms). Like in a reverse image search you perform a query using a photo and you receive the list of indexed photos in the results. But PimEyes is more than that. In the results we display not only similar photos to the one you have uploaded to the search bar but also pictures in which you appear on a different background, with other people, or even with a different haircut. This improvement is possible thanks to our search engine focusing on a given face, not the whole picture. Try PimEyes’ reverse image search engine and find where your face appears online. </p>
                </div>
            </div>
            <div className='border h-[558px] w-[333px] rounded-lg bg-white text-black p-4'>
                <h4 className='font-bold text-base mb-1'>How to reverse image search?</h4>
                <p>To perform a reverse image search you have to upload a photo to a search engine or take a picture from your camera (it is automatically added to the search bar). Usually, you upload a picture to a search bar or some dedicated area on the page. When performing a reverse image search, pay attention to the technical requirements your picture should meet. Usually they are related to the image's size, quality, and file format, but sometimes also to the photo’s composition or depicted items. The uploaded photo is used to perform a search. It is measured and analyzed in order to find similar images or pictures with similar objects. The best reverse image search is supported by high-quality images. The reverse image search mechanism can be used on mobile phones or any other device. </p>
            </div>
        </div>
    </div>
    
  )
}

export default About