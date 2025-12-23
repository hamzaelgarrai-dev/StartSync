export const MyTasksCard = ({priority, title, description, color = "blue"}) =>{

    const colorVariants = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
    red: "bg-red-100 text-red-600",

  };

    return(

        <div className="rounded-2xl border border-[#e0e7f5] bg-white p-4 flex flex-col justify-start items-start space-y-4  ">

            <div className={`w-11 h-8 rounded-lg ${colorVariants[color]} flex items-center      justify-center  `}>
                {priority}
            </div>
            <div className="space-y-3.5">
                <p className="font-medium">{title}</p>
                <p className="">{description}</p>
            </div>
            

        </div>
    )
}