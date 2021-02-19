const Body = ({title, data}) => {
    return ( 
        <main className="p-20">
            <div className="font-extrabold text-2xl border-b-2 
               border-gray-200 flex justify-start">
                {title}
                </div>
            <div className="py-3">
                <div className="grid md:grid-cols-3 py-1 px-3 gap-14">
                    {data.map((users)=>(
                        <div className="p-2 border-2 bg-white rounded-lg shadow-md hover:shadow-2xl" key={users.id}>
                            {/* <div className="py-24 px-20 text-center border border-red-700">Foto</div> */}
                            <img src={users.download_url} alt={users.author} className="rounded w-full h-52 sm:h-42 object-cover"/>
                            <div className="text-right font-light">{users.author}</div>
                            <div className="text-right font-extralight">{users.width}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
     );
}
 
export default Body;