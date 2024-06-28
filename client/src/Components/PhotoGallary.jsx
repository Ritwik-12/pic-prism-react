import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

import ImageCard from "./ImageCard";
const PhotoGallary = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
        <h3 className="text-3xl font-semibold my-14">Photos</h3>
          {/* all my photos will be listed inside this div */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">
          {/* image card */}
        
            <ImageCard
                img="https://images.pexels.com/photos/26146562/pexels-photo-26146562/free-photo-of-a-mountain-covered-in-fog-and-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="the beach"
                author="ritwik12"
                price="10"
                icon1={
                 <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                   }

                icon2={
                    <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                }
            />

              <ImageCard
                      img="https://images.pexels.com/photos/24532238/pexels-photo-24532238/free-photo-of-road-trip-to-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      title="the Road"
                      author="unkown"
                      price="30"
                      icon1={
                       <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                         }
      
                      icon2={
                          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                      }
              />  

<ImageCard
                      img="https://images.pexels.com/photos/24532238/pexels-photo-24532238/free-photo-of-road-trip-to-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      title="the Road"
                      author="unkown"
                      price="30"
                      icon1={
                       <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                         }
      
                      icon2={
                          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                      }
              />  

<ImageCard
                      img="https://images.pexels.com/photos/24532238/pexels-photo-24532238/free-photo-of-road-trip-to-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      title="the Road"
                      author="unkown"
                      price="30"
                      icon1={
                       <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                         }
      
                      icon2={
                          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                      }
              />  

<ImageCard
                      img="https://images.pexels.com/photos/24532238/pexels-photo-24532238/free-photo-of-road-trip-to-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      title="the Road"
                      author="unkown"
                      price="30"
                      icon1={
                       <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                         }
      
                      icon2={
                          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                      }
              />  

<ImageCard
                      img="https://images.pexels.com/photos/24532238/pexels-photo-24532238/free-photo-of-road-trip-to-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      title="the Road"
                      author="unkown"
                      price="30"
                      icon1={
                       <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                         }
      
                      icon2={
                          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                      }
              />  

<ImageCard
                      img="https://images.pexels.com/photos/24532238/pexels-photo-24532238/free-photo-of-road-trip-to-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      title="the Road"
                      author="unkown"
                      price="30"
                      icon1={
                       <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                         }
      
                      icon2={
                          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>
                      }
              />  
        </div>
    </div>
  )
}

export default PhotoGallary