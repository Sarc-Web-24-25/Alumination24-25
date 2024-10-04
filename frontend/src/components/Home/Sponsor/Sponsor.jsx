import { HoverEffect } from "./ui/card-hover-effect.jsx";

export default function Sponsor( {sponsors} ) {
  return (
    <>    
      <div className="m-8">
        <h1 style={{ color: '#700815' }} className="text-5xl font-bold text-center">
          Sponsors
        </h1>
        
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={sponsors} />
        </div>
      </div>
    </>
  );
}

export const sponsors = [
  {
    image: "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png",
  },
  {
    image: "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png",
  },
  {
    image: "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png",
  },
  {
    image: "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png",
  },
  {
    image: "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png",
  },
  {
    image: "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png",
  },
  {
    image: "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png",
  },
  {
    image: "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png",
  },
];
