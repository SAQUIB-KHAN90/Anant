export function DefaultGallery() {
  const data = [
    {
      imageLink:
        "/images/11.jpg",
    },
    {
      imageLink:
        "/images/12.jpg",
    },
    {
      imageLink:
        "/images/13.jpg",
    },
    {
      imageLink:
        "/images/14.jpg",
    },
    {
      imageLink:
        "/images/15.jpg",
    },
    {
      imageLink:
        "/images/16.jpg",
    },
    {
      imageLink:
        "/images/17.jpg",
    },
    {
      imageLink:
        "/images/18.jpg",
    },
    {
      imageLink:
        "/images/19.jpg",
    },
    {
        imageLink: 
        "/images/20.jpg"
    },
    {
imageLink:
"/images/21.jpg"
    },
    {
        imageLink:
        "/images/24.jpg"
    }
  ];
 
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img
            className="h-50 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
}
 export default DefaultGallery