const JobListings = () => {

  const data=[
   {
    id:1,
    department: 'Development',
    roles: [
        {
            id:1,
            description:'kjasdk '
        },
        {
            id:2,
            description:'oiweruewoi '
        }

    ]
   },
   {
    id:2,
    department: 'Marketing',
    roles: [
        {
            id:1,
            description:'kjasdk '
        },
        {
            id:2,
            description:'oiweruewoi '
        }

    ]
   },

]
  return (
    <>
        <div className=" text-primaryColor">

     
       <div className="max-w-[1280px] heading p-4 text-[2rem] bg-white w-full m-auto">Start doing work that matters.
       </div>
       <div className="max-w-[1280px] heading p-4 text-[1.4rem] bg-white w-full m-auto">Start doing work that matters.
       </div>
       <div className="line h-[1.5px] bg-gray-300"></div>

    <div className="relative color-primaryColor">
      <div className="relative banner-text-container">
    <div className=" flex flex-col justify-between items-center gap-6 md:gap-16   max-w-[1280px] m-auto">
      {data.map((item, index)=>{
        return (
          <div key={index} className='w-full flex justify-between gap-10 items-start p-2'>
            <div className="department_name text-[2rem]" key={item.id}>
                {item?.department}
            </div>

            <div className="role_cards_container flex flex-col gap-8 md:gap-12" key={item.id}>
                {item?.roles?.map((role, index)=>{
                    return (
                        <>
                        <div className="role_cards flex gap-4 flex-col border rounded-[20px] w-[500px] h-auto p-4">
                            <div className="para1">
                        {role.description}
                            </div>
                            <button className="role_cards_button border rounded-[999px] py-2 px-4 w-[140px] ">Apply Now</button>
                        </div>
                        </>
                    )
                    
                })}
                </div>
          </div>
        )
      })}
    </div>
      </div>
      </div>

      </div>
    </>

        
  )
}

export default JobListings