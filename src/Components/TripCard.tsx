export interface TripCardProps {
  id: number,
  city: string,
  cost: number,
  image_link: string,
  day_num: number
}

const TripCard: React.FC<TripCardProps> = ({city, cost, image_link, day_num }) => {

  return (
    <div className="relative h-[450px] max-w-[270px] mx-auto">
        <img className=" w-[270px] h-[450px]" src={image_link} alt={city} />
        <div dir="rtl" className="absolute bg-white w-3/4 left-1/2 transform -translate-x-1/2 rounded-2xl bottom-5 p-3">
          <h4 className="mb-2">{city}</h4>
          <p className="text-gray-500">
            {day_num} أيام بتكلفة {cost} دولار
          </p>
        </div>
        </div>
  )
}

export default TripCard