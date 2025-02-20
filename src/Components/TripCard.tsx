export interface TripCardProps {
  id: number,
  name: string,
  cost: number,
  image: string,
  number_of_days: number
}

const TripCard: React.FC<TripCardProps> = ({name, cost, image, number_of_days }) => {

  return (
    <div className="relative h-[450px] max-w-[270px] mx-auto">
        <img className=" w-[270px] h-[450px]" src={image} alt={name} />
        <div dir="rtl" className="absolute bg-white w-3/4 left-1/2 transform -translate-x-1/2 rounded-2xl bottom-5 p-3">
          <h4 className="mb-2">{name}</h4>
          <p className="text-gray-500">
            {number_of_days} أيام بتكلفة {cost} دولار
          </p>
        </div>
        </div>
  )
}

export default TripCard