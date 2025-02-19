
export interface ServicesProps{
  img: string,
  service: string,
  desc1: string,
  desc2: string
}
const Services: React.FC<ServicesProps> = ({img, service, desc1, desc2}) =>{
  return (
    
    <div className="flex flex-col justify-center items-center text-center">
        <img className="w-[200px] h-[200px] mb-5" src={img}/>
        <h2 className="mb-2 font-semibold text-2xl">{service}</h2>
        <p className="text-sm text-gray-500">{desc1}<br/>{desc2}</p>
    </div>
  )
}

export default Services