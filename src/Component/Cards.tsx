export const Card = (props: { img: string; title: string }) => {
  return (
    <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img
        src={props.img}
        alt={props.title}
        className="w-full h-3/4 object-cover rounded-xl"
      />
      <h3 className="text-center mt-4 text-white font-semibold">
        {props.title}
      </h3>
    </div>
  );
};
