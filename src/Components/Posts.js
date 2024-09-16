// YourComponent.js
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";  // Import your Firestore instance

const Posts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  // Fetch data
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
      }));
      setData(items);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        {loading && <div className="text-white">Loading hudai xa... parkhanu holaa...</div>}
      {data.map(item => (
        <div className="bg-white m-3 rounded-lg">
            <div key={item.id} className=" m-4">
                <div className="flex justify-between">
                    <p className="text-xl font-bold">{item.name}</p>
                    <p className="text-gray-500">{new Date(item.timestamp.seconds * 1000).toLocaleString("en-GB", {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        })}
                    </p>
                </div>
                <hr className=" border-gray-400"/>
                <div className="mt-2 mb-2">{item.content}</div>
                <div>
                    <button className="font-bold text-blue-500">Like: {item.likes}</button>
                    <button className="ml-4">Comments</button>
                </div>
                {item.comments.map((comment)=>
                    <>
                        <hr className=" border-gray-300"/>
                        <div>
                            <div className="flex ">
                                <h1 className="mr-4 font-bold">{comment.name}:</h1>
                                {comment.text} 
                            </div>
                            <p className="text-gray-500">{new Date(comment.timestamp.seconds * 1000).toLocaleString("en-GB", {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                                })}
                            </p>
                            
                        </div>
                    </>
                )}
                

            </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
