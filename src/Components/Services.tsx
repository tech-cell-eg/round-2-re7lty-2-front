
export interface ServicesProps{
  id?: number,
  image: string,
  service_name: string,
  description: string,
  
}
const Services: React.FC<ServicesProps> = ({image, service_name, description}) =>{
  return (
    
    <div className="flex flex-col justify-center items-center text-center">
        <img className="w-[200px] h-[200px] mb-5" src={image}/>
        <h2 className="mb-2 font-semibold text-2xl">{service_name}</h2>
        <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

export default Services