// import image1 from '../public/assets/images/a2-1.jpg'
// import image2 from '../public/assets/images/a2-1.jpg'
// import image3 from '../public/assets/images/a2-1.jpg'
// import image4 from '../public/assets/images/a2-1.jpg'

// export const images = [image1, image2, image3, image4]

// const imageByIndex = (index) => 

// export default imageByIndex



import image1 from '../public/assets/img/review-author-1.jpg';
import image2 from '../public/assets/img/review-author-2.jpg'; // Use a different image
import image3 from '../public/assets/img/review-author-3.jpg'; // Use a different image
import image4 from '../public/assets/img/review-author-4.jpg'; // Use a different image
import image5 from '../public/assets/img/review-author-5.jpg'; // Use a different image
import image6 from '../public/assets/img/review-author-6.jpg'; // Use a different image
import image7 from '../public/assets/img/review-author-7.jpg'; // Use a different image
import image8 from '../public/assets/img/review-author-8.jpg'; // Use a different image


export const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const imageByIndex = (index) => {
  // Make sure the index is within the valid range
  const validIndex = (index + images.length) % images.length;
  return images[validIndex];
};

export default imageByIndex;
